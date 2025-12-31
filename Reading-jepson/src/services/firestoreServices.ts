/**
 * Firestore Service Layer
 * 
 * Provides type-safe functions for interacting with Firestore collections.
 * All functions use the type definitions from src/types/firestore.ts
 */

import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  Timestamp,
  serverTimestamp,
  DocumentData,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import type {
  UserDocument,
  StudentDocument,
  WeekDocument,
  WeekTemplateDocument,
  PassageDocument,
  ComprehensionQuestionDocument,
  VocabDocument,
  AffixDocument,
  WordMasteryDocument,
  QuizPublicDocument,
  QuizPrivateDocument,
  QuizAttemptDocument,
  FluencyAssessmentDocument,
} from '../types/firestore';
import { COLLECTIONS, createWordMasteryId } from '../types/firestore';

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Converts Firestore document to typed object
 */
function docToData<T extends Record<string, any>>(docSnap: QueryDocumentSnapshot<DocumentData>): T {
  return { id: docSnap.id, ...docSnap.data() } as unknown as T;
}

/**
 * Converts array of Firestore documents to typed objects
 */
function docsToData<T extends Record<string, any>>(querySnapshot: { docs: QueryDocumentSnapshot<DocumentData>[] }): T[] {
  return querySnapshot.docs.map(doc => docToData<T>(doc));
}

// ============================================================================
// 1. users Collection Services
// ============================================================================

export async function getUser(uid: string): Promise<UserDocument | null> {
  try {
    const docRef = doc(db, COLLECTIONS.users, uid);
    const docSnap = await getDoc(docRef);
    const result = docSnap.exists() ? docToData<UserDocument>(docSnap) : null;
    return result;
  } catch (error: any) {
    throw error;
  }
}

export async function createUser(uid: string, userData: Omit<UserDocument, 'createdAt'>): Promise<void> {
  const docRef = doc(db, COLLECTIONS.users, uid);
  await setDoc(docRef, {
    ...userData,
    createdAt: serverTimestamp(),
  });
}

export async function updateUser(uid: string, updates: Partial<Omit<UserDocument, 'createdAt'>>): Promise<void> {
  const docRef = doc(db, COLLECTIONS.users, uid);
  await updateDoc(docRef, updates);
}

// ============================================================================
// 2. students Collection Services
// ============================================================================

export async function getStudent(studentId: string): Promise<StudentDocument | null> {
  const docRef = doc(db, COLLECTIONS.students, studentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<StudentDocument>(docSnap) : null;
}

export async function getStudentsByTeacher(teacherUid: string): Promise<Array<StudentDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.students),
    where('teacherUid', '==', teacherUid),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<StudentDocument & { id: string }>(querySnapshot);
}

export async function getStudentByUid(studentUid: string): Promise<StudentDocument | null> {
  const q = query(
    collection(db, COLLECTIONS.students),
    where('studentUid', '==', studentUid),
    limit(1)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return null;
  return docToData<StudentDocument>(querySnapshot.docs[0]);
}

export async function createStudent(studentData: Omit<StudentDocument, 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.students));
  await setDoc(docRef, {
    ...studentData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateStudent(
  studentId: string,
  updates: Partial<Omit<StudentDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.students, studentId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteStudent(studentId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.students, studentId);
  await deleteDoc(docRef);
}

// ============================================================================
// 3. weeks Collection Services
// ============================================================================

export async function getWeek(weekId: string): Promise<WeekDocument | null> {
  const docRef = doc(db, COLLECTIONS.weeks, weekId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<WeekDocument>(docSnap) : null;
}

export async function getWeeksByStudent(studentId: string): Promise<WeekDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.weeks),
    where('studentId', '==', studentId),
    orderBy('weekOf', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<WeekDocument>(querySnapshot);
}

export async function getWeeksByTeacherAndStudent(
  teacherUid: string,
  studentId: string
): Promise<WeekDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.weeks),
    where('teacherUid', '==', teacherUid),
    where('studentId', '==', studentId),
    orderBy('weekOf', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<WeekDocument>(querySnapshot);
}

export async function createWeek(weekData: Omit<WeekDocument, 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.weeks));
  await setDoc(docRef, {
    ...weekData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateWeek(
  weekId: string,
  updates: Partial<Omit<WeekDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weeks, weekId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteWeek(weekId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weeks, weekId);
  await deleteDoc(docRef);
}

// ============================================================================
// 3b. weekTemplates Collection Services
// ============================================================================

export async function getWeekTemplate(templateId: string): Promise<WeekTemplateDocument | null> {
  const docRef = doc(db, COLLECTIONS.weekTemplates, templateId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<WeekTemplateDocument>(docSnap) : null;
}

export async function getWeekTemplatesByTeacher(teacherUid: string): Promise<Array<WeekTemplateDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.weekTemplates),
    where('teacherUid', '==', teacherUid),
    orderBy('createdAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<WeekTemplateDocument & { id: string }>(querySnapshot);
}

export async function createWeekTemplate(
  templateData: Omit<WeekTemplateDocument, 'createdAt' | 'updatedAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.weekTemplates));
  await setDoc(docRef, {
    ...templateData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateWeekTemplate(
  templateId: string,
  updates: Partial<Omit<WeekTemplateDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weekTemplates, templateId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteWeekTemplate(templateId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weekTemplates, templateId);
  await deleteDoc(docRef);
}

// ============================================================================
// 4. passages Collection Services
// ============================================================================

export async function getPassage(passageId: string): Promise<PassageDocument | null> {
  const docRef = doc(db, COLLECTIONS.passages, passageId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<PassageDocument>(docSnap) : null;
}

export async function getPassagesByWeek(weekId: string): Promise<Array<PassageDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.passages),
    where('weekId', '==', weekId),
    orderBy('type', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<PassageDocument & { id: string }>(querySnapshot);
}

export async function createPassage(passageData: Omit<PassageDocument, 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.passages));
  await setDoc(docRef, {
    ...passageData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updatePassage(
  passageId: string,
  updates: Partial<Omit<PassageDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.passages, passageId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deletePassage(passageId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.passages, passageId);
  await deleteDoc(docRef);
}

// ============================================================================
// 5. comprehensionQuestions Collection Services
// ============================================================================

export async function getQuestion(questionId: string): Promise<ComprehensionQuestionDocument | null> {
  const docRef = doc(db, COLLECTIONS.comprehensionQuestions, questionId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<ComprehensionQuestionDocument>(docSnap) : null;
}

export async function getQuestionsByWeek(weekId: string): Promise<Array<ComprehensionQuestionDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.comprehensionQuestions),
    where('weekId', '==', weekId),
    orderBy('orderIndex', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<ComprehensionQuestionDocument & { id: string }>(querySnapshot);
}

export async function createQuestion(
  questionData: Omit<ComprehensionQuestionDocument, 'createdAt' | 'updatedAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.comprehensionQuestions));
  await setDoc(docRef, {
    ...questionData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateQuestion(
  questionId: string,
  updates: Partial<Omit<ComprehensionQuestionDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.comprehensionQuestions, questionId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteQuestion(questionId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.comprehensionQuestions, questionId);
  await deleteDoc(docRef);
}

// ============================================================================
// 6. vocab Collection Services
// ============================================================================

export async function getVocabWord(wordId: string): Promise<VocabDocument | null> {
  const docRef = doc(db, COLLECTIONS.vocab, wordId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<VocabDocument>(docSnap) : null;
}

export async function getVocabByWeek(weekId: string): Promise<Array<VocabDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.vocab),
    where('weekId', '==', weekId)
  );
  const querySnapshot = await getDocs(q);
  return docsToData<VocabDocument & { id: string }>(querySnapshot);
}

export async function createVocabWord(vocabData: Omit<VocabDocument, 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.vocab));
  await setDoc(docRef, {
    ...vocabData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateVocabWord(
  wordId: string,
  updates: Partial<Omit<VocabDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.vocab, wordId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteVocabWord(wordId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.vocab, wordId);
  await deleteDoc(docRef);
}

// ============================================================================
// 7. affixes Collection Services
// ============================================================================

export async function getAffix(affixId: string): Promise<AffixDocument | null> {
  const docRef = doc(db, COLLECTIONS.affixes, affixId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<AffixDocument>(docSnap) : null;
}

export async function getAffixesByWeek(weekId: string): Promise<Array<AffixDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.affixes),
    where('weekId', '==', weekId)
  );
  const querySnapshot = await getDocs(q);
  return docsToData<AffixDocument & { id: string }>(querySnapshot);
}

export async function createAffix(affixData: Omit<AffixDocument, 'createdAt' | 'updatedAt'>): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.affixes));
  await setDoc(docRef, {
    ...affixData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateAffix(
  affixId: string,
  updates: Partial<Omit<AffixDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.affixes, affixId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteAffix(affixId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.affixes, affixId);
  await deleteDoc(docRef);
}

// ============================================================================
// 8. wordMastery Collection Services
// ============================================================================

export async function getWordMastery(masteryId: string): Promise<WordMasteryDocument | null> {
  const docRef = doc(db, COLLECTIONS.wordMastery, masteryId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<WordMasteryDocument>(docSnap) : null;
}

export async function getWordMasteryByStudentAndWord(
  studentUid: string,
  wordId: string
): Promise<WordMasteryDocument | null> {
  const masteryId = createWordMasteryId(studentUid, wordId);
  return getWordMastery(masteryId);
}

export async function getWordMasteryByStudent(studentUid: string): Promise<WordMasteryDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.wordMastery),
    where('studentUid', '==', studentUid),
    orderBy('nextDueAt', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<WordMasteryDocument>(querySnapshot);
}

export async function getDueWords(studentUid: string, beforeDate?: Timestamp): Promise<WordMasteryDocument[]> {
  const dueDate = beforeDate || Timestamp.now();
  const q = query(
    collection(db, COLLECTIONS.wordMastery),
    where('studentUid', '==', studentUid),
    where('nextDueAt', '<=', dueDate),
    orderBy('nextDueAt', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<WordMasteryDocument>(querySnapshot);
}

export async function createOrUpdateWordMastery(
  studentUid: string,
  wordId: string,
  masteryData: Omit<WordMasteryDocument, 'studentUid' | 'wordId' | 'createdAt' | 'updatedAt'>
): Promise<void> {
  const masteryId = createWordMasteryId(studentUid, wordId);
  const docRef = doc(db, COLLECTIONS.wordMastery, masteryId);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    // Update existing
    await updateDoc(docRef, {
      ...masteryData,
      updatedAt: serverTimestamp(),
    });
  } else {
    // Create new
    await setDoc(docRef, {
      studentUid,
      wordId,
      ...masteryData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }
}

export async function deleteWordMastery(masteryId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.wordMastery, masteryId);
  await deleteDoc(docRef);
}

// ============================================================================
// 9. quizzesPublic Collection Services (Student-readable, NO answers)
// ============================================================================

export async function getQuizPublic(quizId: string): Promise<QuizPublicDocument | null> {
  const docRef = doc(db, COLLECTIONS.quizzesPublic, quizId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return docToData<QuizPublicDocument>(docSnap);
}

export async function getQuizzesByStudent(studentUid: string): Promise<Array<QuizPublicDocument & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.quizzesPublic),
    where('studentUid', '==', studentUid),
    orderBy('assignedAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<QuizPublicDocument & { id: string }>(querySnapshot);
}

export async function getQuizzesByTeacherAndStudent(
  teacherUid: string,
  studentUid: string
): Promise<QuizPublicDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.quizzesPublic),
    where('teacherUid', '==', teacherUid),
    where('studentUid', '==', studentUid),
    orderBy('weekId', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<QuizPublicDocument>(querySnapshot);
}

export async function updateQuizPublic(
  quizId: string,
  updates: Partial<Omit<QuizPublicDocument, 'createdAt' | 'updatedAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.quizzesPublic, quizId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function markQuizCompleted(quizId: string): Promise<void> {
  await updateQuizPublic(quizId, {
    completedAt: Timestamp.now(),
  });
}

export async function deleteQuiz(quizId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.quizzesPublic, quizId);
  await deleteDoc(docRef);
  // Also delete private quiz if it exists
  const privateRef = doc(db, COLLECTIONS.quizzesPrivate, quizId);
  await deleteDoc(privateRef).catch(() => {
    // Ignore if doesn't exist
  });
}

// ============================================================================
// 10. quizzesPrivate Collection Services (Teacher/Function-only, WITH answers)
// ============================================================================

export async function getQuizPrivate(quizId: string): Promise<QuizPrivateDocument | null> {
  const docRef = doc(db, COLLECTIONS.quizzesPrivate, quizId);
  const docSnap = await getDoc(docRef);
  if (!docSnap.exists()) return null;
  return docToData<QuizPrivateDocument>(docSnap);
}

// ============================================================================
// 11. quizAttempts Collection Services
// ============================================================================

export async function getQuizAttempt(attemptId: string): Promise<QuizAttemptDocument | null> {
  const docRef = doc(db, COLLECTIONS.quizAttempts, attemptId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<QuizAttemptDocument>(docSnap) : null;
}

export async function getAttemptsByQuiz(quizId: string): Promise<QuizAttemptDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.quizAttempts),
    where('quizId', '==', quizId),
    orderBy('submittedAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<QuizAttemptDocument>(querySnapshot);
}

// Legacy alias for backward compatibility
export const getQuiz = getQuizPublic;
export type QuizDocument = QuizPublicDocument;

export async function getAttemptsByStudent(studentUid: string): Promise<QuizAttemptDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.quizAttempts),
    where('studentUid', '==', studentUid),
    orderBy('submittedAt', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<QuizAttemptDocument>(querySnapshot);
}

export async function createQuizAttempt(
  attemptData: Omit<QuizAttemptDocument, 'createdAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.quizAttempts));
  await setDoc(docRef, {
    ...attemptData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function deleteQuizAttempt(attemptId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.quizAttempts, attemptId);
  await deleteDoc(docRef);
}

// ============================================================================
// 12. fluencyAssessments Collection Services
// ============================================================================

export async function getFluencyAssessment(assessmentId: string): Promise<FluencyAssessmentDocument | null> {
  const docRef = doc(db, COLLECTIONS.fluencyAssessments, assessmentId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docToData<FluencyAssessmentDocument>(docSnap) : null;
}

export async function getAssessmentsByStudent(studentUid: string): Promise<FluencyAssessmentDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.fluencyAssessments),
    where('studentUid', '==', studentUid),
    orderBy('date', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<FluencyAssessmentDocument>(querySnapshot);
}

export async function getAssessmentsByWeek(weekId: string): Promise<FluencyAssessmentDocument[]> {
  const q = query(
    collection(db, COLLECTIONS.fluencyAssessments),
    where('weekId', '==', weekId),
    orderBy('date', 'desc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<FluencyAssessmentDocument>(querySnapshot);
}

export async function createFluencyAssessment(
  assessmentData: Omit<FluencyAssessmentDocument, 'createdAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.fluencyAssessments));
  await setDoc(docRef, {
    ...assessmentData,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateFluencyAssessment(
  assessmentId: string,
  updates: Partial<Omit<FluencyAssessmentDocument, 'createdAt'>>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.fluencyAssessments, assessmentId);
  await updateDoc(docRef, updates);
}

export async function deleteFluencyAssessment(assessmentId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.fluencyAssessments, assessmentId);
  await deleteDoc(docRef);
}

// ============================================================================
// 13. weekAssignments Collection Services
// ============================================================================

export async function createWeekAssignment(
  assignmentData: Omit<any, 'createdAt' | 'updatedAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.weekAssignments));
  await setDoc(docRef, {
    ...assignmentData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getWeekAssignmentsByStudent(studentId: string): Promise<Array<any & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.weekAssignments),
    where('studentId', '==', studentId),
    orderBy('startDate', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<any & { id: string }>(querySnapshot);
}

export async function getWeekAssignmentsByTeacher(teacherUid: string, quarter?: number): Promise<Array<any & { id: string }>> {
  let q = query(
    collection(db, COLLECTIONS.weekAssignments),
    where('teacherUid', '==', teacherUid),
    orderBy('startDate', 'asc')
  );
  
  if (quarter) {
    q = query(q, where('quarter', '==', quarter));
  }
  
  const querySnapshot = await getDocs(q);
  return docsToData<any & { id: string }>(querySnapshot);
}

export async function updateWeekAssignment(
  assignmentId: string,
  updates: Partial<any>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weekAssignments, assignmentId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteWeekAssignment(assignmentId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.weekAssignments, assignmentId);
  await deleteDoc(docRef);
}

// ============================================================================
// 14. schoolCalendar Collection Services
// ============================================================================

export async function createCalendarEvent(
  eventData: Omit<any, 'createdAt' | 'updatedAt'>
): Promise<string> {
  const docRef = doc(collection(db, COLLECTIONS.schoolCalendar));
  await setDoc(docRef, {
    ...eventData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getCalendarEventsByTeacher(teacherUid: string): Promise<Array<any & { id: string }>> {
  const q = query(
    collection(db, COLLECTIONS.schoolCalendar),
    where('teacherUid', '==', teacherUid),
    orderBy('date', 'asc')
  );
  const querySnapshot = await getDocs(q);
  return docsToData<any & { id: string}>(querySnapshot);
}

export async function updateCalendarEvent(
  eventId: string,
  updates: Partial<any>
): Promise<void> {
  const docRef = doc(db, COLLECTIONS.schoolCalendar, eventId);
  await updateDoc(docRef, {
    ...updates,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteCalendarEvent(eventId: string): Promise<void> {
  const docRef = doc(db, COLLECTIONS.schoolCalendar, eventId);
  await deleteDoc(docRef);
}
