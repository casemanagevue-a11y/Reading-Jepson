import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { Timestamp } from 'firebase-admin/firestore';

// Initialize Firebase Admin
if (!admin.apps.length) {
  // Try to use service account key if available, otherwise use default credentials
  try {
    const serviceAccount = require('../../serviceAccountKey.json');
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  } catch (error) {
    // Fall back to default credentials (for emulator or if key not found)
    admin.initializeApp();
  }
}

const db = admin.firestore();
const auth = admin.auth();

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Verify user is authenticated and get their role
 */
async function getUserRole(uid: string): Promise<'teacher' | 'student' | null> {
  const userDoc = await db.collection('users').doc(uid).get();
  if (!userDoc.exists) return null;
  const data = userDoc.data();
  return data?.role || null;
}

/**
 * Verify user is a teacher
 */
async function verifyTeacher(context: functions.https.CallableContext): Promise<string> {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  const role = await getUserRole(context.auth.uid);
  if (role !== 'teacher') {
    throw new functions.https.HttpsError('permission-denied', 'User must be a teacher');
  }
  return context.auth.uid;
}

/**
 * Verify user is a student
 */
async function verifyStudent(context: functions.https.CallableContext): Promise<string> {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  const role = await getUserRole(context.auth.uid);
  if (role !== 'student') {
    throw new functions.https.HttpsError('permission-denied', 'User must be a student');
  }
  return context.auth.uid;
}

/**
 * Calculate next due date based on correct/incorrect answer
 */
function calculateNextDueAt(isCorrect: boolean, currentStreak: number): Timestamp {
  const now = Timestamp.now();
  const nowMillis = now.toMillis();
  
  if (!isCorrect) {
    // Incorrect: due in 1 day
    return Timestamp.fromMillis(nowMillis + 24 * 60 * 60 * 1000);
  }
  
  // Correct: schedule forward based on streak
  // 1d → 3d → 7d → 14d
  let daysAhead = 1;
  if (currentStreak >= 3) {
    daysAhead = 14;
  } else if (currentStreak >= 2) {
    daysAhead = 7;
  } else if (currentStreak >= 1) {
    daysAhead = 3;
  }
  
  return Timestamp.fromMillis(nowMillis + daysAhead * 24 * 60 * 60 * 1000);
}

/**
 * Update mastery status based on streak
 */
function updateMasteryStatus(
  currentStatus: 'new' | 'learning' | 'practiced' | 'mastered',
  correctStreak: number
): 'new' | 'learning' | 'practiced' | 'mastered' {
  if (currentStatus === 'new' && correctStreak >= 1) {
    return 'learning';
  }
  if (currentStatus === 'learning' && correctStreak >= 2) {
    return 'practiced';
  }
  if (currentStatus === 'practiced' && correctStreak >= 3) {
    return 'mastered';
  }
  return currentStatus;
}

// ============================================================================
// Callable Functions
// ============================================================================

/**
 * createStudent - Teacher creates a student account
 * Teacher only
 */
export const createStudent = functions.https.onCall(async (data, context) => {
  const teacherUid = await verifyTeacher(context);
  
  const { studentEmail, displayName } = data;
  
  if (!studentEmail || !displayName) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'studentEmail and displayName are required'
    );
  }
  
  // Check if student with this email already exists for this teacher
  const existingStudent = await db.collection('students')
    .where('teacherUid', '==', teacherUid)
    .where('studentEmail', '==', studentEmail)
    .limit(1)
    .get();
  
  if (!existingStudent.empty) {
    throw new functions.https.HttpsError(
      'already-exists',
      'Student with this email already exists'
    );
  }
  
  // Create student document (studentUid is null until claimed)
  const studentRef = db.collection('students').doc();
  await studentRef.set({
    displayName,
    studentUid: null,
    studentEmail,
    teacherUid,
    active: true,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  
  return { studentId: studentRef.id };
});

/**
 * claimStudentAccount - Student claims their account by email match
 * Student only
 */
export const claimStudentAccount = functions.https.onCall(async (data, context) => {
  const studentUid = await verifyStudent(context);
  
  // Get student's email from auth
  const user = await auth.getUser(studentUid);
  const studentEmail = user.email;
  
  if (!studentEmail) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'Student email not found in auth'
    );
  }
  
  // Find student document with matching email and null studentUid
  const studentQuery = await db.collection('students')
    .where('studentEmail', '==', studentEmail)
    .where('studentUid', '==', null)
    .limit(1)
    .get();
  
  if (studentQuery.empty) {
    throw new functions.https.HttpsError(
      'not-found',
      'No unclaimed student account found for this email'
    );
  }
  
  const studentDoc = studentQuery.docs[0];
  
  // Update student document with studentUid
  await studentDoc.ref.update({
    studentUid,
    updatedAt: Timestamp.now(),
  });
  
  return { studentId: studentDoc.id, success: true };
});

/**
 * generateQuiz - Teacher generates a quiz for a student
 * Teacher only
 */
export const generateQuiz = functions.https.onCall(async (data, context) => {
  const teacherUid = await verifyTeacher(context);
  
  const { studentUid, weekId, mode, numQuestions } = data;
  
  if (!studentUid || !weekId || !mode || !numQuestions) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'studentUid, weekId, mode, and numQuestions are required'
    );
  }
  
  if (mode !== 'daily' && mode !== 'friday') {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'mode must be "daily" or "friday"'
    );
  }
  
  // Verify teacher owns this student
  const studentQuery = await db.collection('students')
    .where('teacherUid', '==', teacherUid)
    .where('studentUid', '==', studentUid)
    .limit(1)
    .get();
  
  if (studentQuery.empty) {
    throw new functions.https.HttpsError(
      'permission-denied',
      'Student not found or not managed by this teacher'
    );
  }
  
  // Get week document
  const weekDoc = await db.collection('weeks').doc(weekId).get();
  if (!weekDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Week not found');
  }
  const weekData = weekDoc.data();
  if (weekData?.teacherUid !== teacherUid) {
    throw new functions.https.HttpsError('permission-denied', 'Week not owned by teacher');
  }
  
  // Get current week vocab words
  const vocabSnapshot = await db.collection('vocab')
    .where('weekId', '==', weekId)
    .get();
  const currentWeekWords = vocabSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<{ id: string; word: string; definition: string; [key: string]: any }>;
  
  // Get affixes for the week
  const affixesSnapshot = await db.collection('affixes')
    .where('weekId', '==', weekId)
    .get();
  const currentWeekAffixes = affixesSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<{ id: string; affix: string; meaning: string; [key: string]: any }>;
  
  // Get due spiral words (not mastered, nextDueAt <= now)
  const now = Timestamp.now();
  const dueMasterySnapshot = await db.collection('wordMastery')
    .where('studentUid', '==', studentUid)
    .where('nextDueAt', '<=', now)
    .where('status', '!=', 'mastered')
    .get();
  
  const dueWordIds = dueMasterySnapshot.docs.map(doc => doc.data().wordId);
  const dueWordsSnapshot = dueWordIds.length > 0
    ? await db.collection('vocab').where(admin.firestore.FieldPath.documentId(), 'in', dueWordIds.slice(0, 10)).get()
    : { docs: [] };
  const dueWords = dueWordsSnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  })) as Array<{ id: string; word: string; definition: string; [key: string]: any }>;
  
  // Select questions based on mode
  let selectedWords: any[] = [];
  let selectedAffixes: any[] = [];
  
  if (mode === 'daily') {
    // Daily: 2 current-week words + remaining due spiral words
    const currentCount = Math.min(2, currentWeekWords.length);
    const spiralCount = Math.min(numQuestions - currentCount, dueWords.length);
    selectedWords = [
      ...currentWeekWords.slice(0, currentCount),
      ...dueWords.slice(0, spiralCount),
    ];
  } else {
    // Friday: all current-week words + 30-50% due spiral words
    selectedWords = [...currentWeekWords];
    const spiralCount = Math.min(
      Math.ceil(numQuestions * 0.4),
      dueWords.length,
      numQuestions - selectedWords.length
    );
    selectedWords.push(...dueWords.slice(0, spiralCount));
    selectedAffixes = currentWeekAffixes.slice(0, Math.min(2, currentWeekAffixes.length));
  }
  
  // Generate questions
  const questions: any[] = [];
  const correctMap: { [questionId: string]: number } = {};
  const wordIdsByQuestion: { [questionId: string]: string | undefined } = {};
  
  // Helper to get distractors
  const getDistractors = (correctAnswer: string, allOptions: string[], count: number = 3): string[] => {
    const shuffled = allOptions.filter(opt => opt !== correctAnswer).sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };
  
  // Generate word questions
  for (const word of selectedWords.slice(0, numQuestions - selectedAffixes.length)) {
    const questionId = `q_${Date.now()}_${Math.random()}`;
    const questionType = Math.random() < 0.5 ? 'wordToDefinition' : 'definitionToWord';
    
    let prompt: string;
    let correctAnswer: string;
    let allOptions: string[];
    
    if (questionType === 'wordToDefinition') {
      prompt = `What does "${word.word}" mean?`;
      correctAnswer = word.definition;
      // Get other definitions as distractors
      const otherWords = vocabSnapshot.docs
        .filter(d => d.id !== word.id)
        .map(d => d.data().definition);
      allOptions = [correctAnswer, ...getDistractors(correctAnswer, otherWords)];
    } else {
      prompt = `Which word means "${word.definition}"?`;
      correctAnswer = word.word;
      const otherWords = vocabSnapshot.docs
        .filter(d => d.id !== word.id)
        .map(d => d.data().word);
      allOptions = [correctAnswer, ...getDistractors(correctAnswer, otherWords)];
    }
    
    // Shuffle choices
    const shuffled = allOptions.sort(() => Math.random() - 0.5);
    const correctIndex = shuffled.indexOf(correctAnswer);
    
    questions.push({
      id: questionId,
      type: questionType,
      prompt,
      choices: shuffled,
      meta: { wordId: word.id },
    });
    
    correctMap[questionId] = correctIndex;
    wordIdsByQuestion[questionId] = word.id;
  }
  
  // Generate affix questions
  for (const affix of selectedAffixes) {
    const questionId = `q_${Date.now()}_${Math.random()}`;
    const questionType = Math.random() < 0.5 ? 'affixToMeaning' : 'wordContainsAffix';
    
    let prompt: string;
    let correctAnswer: string;
    let allOptions: string[];
    
    if (questionType === 'affixToMeaning') {
      prompt = `What does the affix "${affix.affix}" mean?`;
      correctAnswer = affix.meaning;
      const otherMeanings = affixesSnapshot.docs
        .filter(d => d.id !== affix.id)
        .map(d => d.data().meaning);
      allOptions = [correctAnswer, ...getDistractors(correctAnswer, otherMeanings)];
    } else {
      // Find a word containing this affix
      const wordWithAffix = currentWeekWords.find(w => 
        w.word.toLowerCase().includes(affix.affix.toLowerCase())
      );
      if (wordWithAffix) {
        prompt = `Which word contains the affix "${affix.affix}"?`;
        correctAnswer = wordWithAffix.word;
        const otherWords = currentWeekWords
          .filter(w => w.id !== wordWithAffix.id)
          .map(w => w.word);
        allOptions = [correctAnswer, ...getDistractors(correctAnswer, otherWords)];
      } else {
        continue; // Skip if no word found
      }
    }
    
    const shuffled = allOptions.sort(() => Math.random() - 0.5);
    const correctIndex = shuffled.indexOf(correctAnswer);
    
    questions.push({
      id: questionId,
      type: questionType,
      prompt,
      choices: shuffled,
      meta: { affixId: affix.id },
    });
    
    correctMap[questionId] = correctIndex;
    wordIdsByQuestion[questionId] = undefined;
  }
  
  // Shuffle all questions
  questions.sort(() => Math.random() - 0.5);
  
  // Create quiz documents
  const quizId = db.collection('quizzesPublic').doc().id;
  const assignedAt = Timestamp.now();
  const dueAt = Timestamp.fromMillis(assignedAt.toMillis() + (mode === 'daily' ? 24 * 60 * 60 * 1000 : 3 * 24 * 60 * 60 * 1000));
  
  // Create public quiz (without answers)
  const publicQuestions = questions.map(q => {
    const { id, type, prompt, choices, meta } = q;
    return { id, type, prompt, choices, meta };
  });
  
  await db.collection('quizzesPublic').doc(quizId).set({
    studentUid,
    teacherUid,
    weekId,
    mode,
    assignedAt,
    dueAt,
    completedAt: null,
    questionCount: questions.length,
    questions: publicQuestions,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  
  // Create private quiz (with answers)
  await db.collection('quizzesPrivate').doc(quizId).set({
    correctMap,
    wordIdsByQuestion,
  });
  
  return { quizId, questionCount: questions.length };
});

/**
 * getQuizPublic - Get public quiz (student-readable, no answers)
 * Can be called by student or teacher
 */
export const getQuizPublic = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const { quizId } = data;
  if (!quizId) {
    throw new functions.https.HttpsError('invalid-argument', 'quizId is required');
  }
  
  const quizDoc = await db.collection('quizzesPublic').doc(quizId).get();
  if (!quizDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Quiz not found');
  }
  
  const quizData = quizDoc.data()!;
  
  // Verify access
  const role = await getUserRole(context.auth.uid);
  if (role === 'student' && quizData.studentUid !== context.auth.uid) {
    throw new functions.https.HttpsError('permission-denied', 'Access denied');
  }
  if (role === 'teacher' && quizData.teacherUid !== context.auth.uid) {
    throw new functions.https.HttpsError('permission-denied', 'Access denied');
  }
  
  return { id: quizDoc.id, ...quizData };
});

/**
 * submitQuizAttempt - Student submits quiz answers
 * Student only
 */
export const submitQuizAttempt = functions.https.onCall(async (data, context) => {
  const studentUid = await verifyStudent(context);
  
  const { quizId, responses } = data;
  
  if (!quizId || !responses || !Array.isArray(responses)) {
    throw new functions.https.HttpsError(
      'invalid-argument',
      'quizId and responses array are required'
    );
  }
  
  // Get public quiz
  const quizPublicDoc = await db.collection('quizzesPublic').doc(quizId).get();
  if (!quizPublicDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Quiz not found');
  }
  
  const quizPublic = quizPublicDoc.data()!;
  if (quizPublic.studentUid !== studentUid) {
    throw new functions.https.HttpsError('permission-denied', 'Access denied');
  }
  
  if (quizPublic.completedAt) {
    throw new functions.https.HttpsError('failed-precondition', 'Quiz already completed');
  }
  
  // Get private quiz with answers
  const quizPrivateDoc = await db.collection('quizzesPrivate').doc(quizId).get();
  if (!quizPrivateDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Quiz answers not found');
  }
  
  const quizPrivate = quizPrivateDoc.data()!;
  const correctMap = quizPrivate.correctMap as { [questionId: string]: number };
  const wordIdsByQuestion = quizPrivate.wordIdsByQuestion as { [questionId: string]: string | undefined };
  
  // Score responses
  const scoredResponses = responses.map((r: any) => {
    const correctIndex = correctMap[r.questionId];
    const isCorrect = r.selectedIndex === correctIndex;
    return {
      questionId: r.questionId,
      selectedIndex: r.selectedIndex,
      isCorrect,
    };
  });
  
  const correctCount = scoredResponses.filter(r => r.isCorrect).length;
  const scorePercent = Math.round((correctCount / responses.length) * 100);
  
  // Create attempt document
  const attemptRef = db.collection('quizAttempts').doc();
  await attemptRef.set({
    quizId,
    studentUid,
    submittedAt: Timestamp.now(),
    scorePercent,
    responses: scoredResponses,
    createdAt: Timestamp.now(),
  });
  
  // Update word mastery for each question
  const batch = db.batch();
  
  for (const response of scoredResponses) {
    const wordId = wordIdsByQuestion[response.questionId];
    if (!wordId) continue; // Skip if not a word question
    
    const masteryId = `${studentUid}_${wordId}`;
    const masteryDoc = await db.collection('wordMastery').doc(masteryId).get();
    
    const now = Timestamp.now();
    let masteryData: any;
    
    if (masteryDoc.exists) {
      const existing = masteryDoc.data()!;
      const newStreak = response.isCorrect ? existing.correctStreak + 1 : 0;
      const newTotalAttempts = existing.totalAttempts + 1;
      const newCorrectAttempts = existing.correctAttempts + (response.isCorrect ? 1 : 0);
      const newStatus = updateMasteryStatus(existing.status, newStreak);
      const nextDueAt = calculateNextDueAt(response.isCorrect, newStreak);
      
      masteryData = {
        status: newStatus,
        correctStreak: newStreak,
        totalAttempts: newTotalAttempts,
        correctAttempts: newCorrectAttempts,
        lastSeenAt: now,
        nextDueAt,
        updatedAt: now,
      };
      
      batch.update(db.collection('wordMastery').doc(masteryId), masteryData);
    } else {
      // Create new mastery record
      const newStreak = response.isCorrect ? 1 : 0;
      masteryData = {
        studentUid,
        wordId,
        status: newStreak > 0 ? 'learning' : 'new',
        correctStreak: newStreak,
        totalAttempts: 1,
        correctAttempts: response.isCorrect ? 1 : 0,
        lastSeenAt: now,
        nextDueAt: calculateNextDueAt(response.isCorrect, newStreak),
        createdAt: now,
        updatedAt: now,
      };
      
      batch.set(db.collection('wordMastery').doc(masteryId), masteryData);
    }
  }
  
  await batch.commit();
  
  // Mark quiz as completed
  await db.collection('quizzesPublic').doc(quizId).update({
    completedAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
  });
  
  return {
    attemptId: attemptRef.id,
    scorePercent,
    correctCount,
    totalQuestions: responses.length,
  };
});

// ============================================================================
// Google Classroom Integration
// ============================================================================

const { google } = require('googleapis');

/**
 * getGoogleClassroomCourses - Get list of courses from Google Classroom
 */
export const getGoogleClassroomCourses = functions.https.onCall(async (data, context) => {
  await verifyTeacher(context);
  
  const { accessToken } = data;
  if (!accessToken) {
    throw new functions.https.HttpsError('invalid-argument', 'accessToken is required');
  }
  
  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });
    
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    const response = await classroom.courses.list({
      courseStates: ['ACTIVE'],
      teacherId: 'me',
    });
    
    return {
      courses: response.data.courses || [],
    };
  } catch (error: any) {
    console.error('Error fetching Google Classroom courses:', error);
    throw new functions.https.HttpsError('internal', error.message || 'Failed to fetch courses');
  }
});

/**
 * importStudentsFromGoogleClassroom - Import students from a Google Classroom course
 */
export const importStudentsFromGoogleClassroom = functions.https.onCall(async (data, context) => {
  const teacherUid = await verifyTeacher(context);
  
  const { courseId, accessToken } = data;
  if (!courseId || !accessToken) {
    throw new functions.https.HttpsError('invalid-argument', 'courseId and accessToken are required');
  }
  
  try {
    const oauth2Client = new google.auth.OAuth2();
    oauth2Client.setCredentials({ access_token: accessToken });
    
    const classroom = google.classroom({ version: 'v1', auth: oauth2Client });
    
    // Get course info
    const courseResponse = await classroom.courses.get({ id: courseId });
    const courseName = courseResponse.data.name || 'Unknown Course';
    
    // Get students from the course
    const studentsResponse = await classroom.courses.students.list({
      courseId,
      pageSize: 100,
    });
    
    const classroomStudents = studentsResponse.data.students || [];
    
    let imported = 0;
    let skipped = 0;
    let failed = 0;
    const results: any[] = [];
    
    for (const student of classroomStudents) {
      const profile = student.profile;
      if (!profile || !profile.emailAddress) {
        failed++;
        results.push({
          displayName: profile?.name?.fullName || 'Unknown',
          email: 'no-email',
          success: false,
          error: 'No email address',
        });
        continue;
      }
      
      try {
        // Check if student already exists
        const existingQuery = await db.collection('students')
          .where('teacherUid', '==', teacherUid)
          .where('studentEmail', '==', profile.emailAddress)
          .get();
        
        if (!existingQuery.empty) {
          skipped++;
          results.push({
            displayName: profile.name?.fullName || 'Unknown',
            email: profile.emailAddress,
            success: true,
            skipped: true,
          });
          continue;
        }
        
        // Create student
        await db.collection('students').add({
          displayName: profile.name?.fullName || profile.emailAddress,
          studentEmail: profile.emailAddress,
          studentUid: null,
          teacherUid,
          active: true,
          createdAt: Timestamp.now(),
          updatedAt: Timestamp.now(),
        });
        
        imported++;
        results.push({
          displayName: profile.name?.fullName || 'Unknown',
          email: profile.emailAddress,
          success: true,
        });
      } catch (err: any) {
        failed++;
        results.push({
          displayName: profile?.name?.fullName || 'Unknown',
          email: profile.emailAddress,
          success: false,
          error: err.message,
        });
      }
    }
    
    return {
      courseName,
      totalStudents: classroomStudents.length,
      imported,
      skipped,
      failed,
      students: results,
    };
  } catch (error: any) {
    console.error('Error importing students from Google Classroom:', error);
    throw new functions.https.HttpsError('internal', error.message || 'Failed to import students');
  }
});

/**
 * exchangeGoogleAuthCode - Exchange OAuth code for access token
 */
export const exchangeGoogleAuthCode = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be authenticated');
  }
  
  const { code } = data;
  if (!code) {
    throw new functions.https.HttpsError('invalid-argument', 'code is required');
  }
  
  try {
    const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REDIRECT_URI = `${process.env.APP_URL || 'https://reading-jepson.web.app'}/google-classroom-callback`;
    
    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
    
    const { tokens } = await oauth2Client.getToken(code);
    
    return {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
    };
  } catch (error: any) {
    console.error('Error exchanging auth code:', error);
    throw new functions.https.HttpsError('internal', error.message || 'Failed to exchange auth code');
  }
});
