# Firestore Schema Documentation

This document describes the complete Firestore schema for the Reading application.

## Overview

The schema is designed to support a reading instruction application where teachers create weekly content (passages, vocabulary, comprehension questions) for their students, and students complete quizzes and track their vocabulary mastery.

## Collections

### 1. `users/{uid}`

Stores basic user profile information linked to Firebase Authentication.

**Document ID**: Firebase Auth `uid`

**Fields**:
- `role` (string): `"teacher"` | `"student"`
- `displayName` (string): User's display name
- `email` (string): User's email address
- `createdAt` (Timestamp): Server timestamp

**Security**: Users can read/update their own document. Only authenticated users can create their own document.

---

### 2. `students/{studentId}`

Links student profiles to their teacher and provides administrative details.

**Document ID**: Auto-generated

**Fields**:
- `displayName` (string): Student's display name
- `studentUid` (string): Links to `users/{uid}` and Firebase Auth
- `studentEmail` (string): Student's email
- `teacherUid` (string): Links to `users/{uid}` of the managing teacher
- `active` (boolean): Whether the student account is active
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage their own students. Students can read their own document.

**Indexes Required**:
- `teacherUid` ASC, `studentUid` ASC
- `teacherUid` ASC, `studentEmail` ASC

---

### 3. `weeks/{weekId}`

Organizes content and assignments on a weekly basis for a specific student and teacher.

**Document ID**: Auto-generated

**Fields**:
- `teacherUid` (string): Links to `users/{uid}` of the teacher
- `studentId` (string): Document ID from `students` collection
- `weekOf` (Timestamp): Start date of the week (e.g., Monday)
- `subjectFocus` (string): `"ELA"` | `"Science"` | `"History"` (or other)
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage weeks for their students. Students can read their own weeks.

**Indexes Required**:
- `studentId` ASC, `weekOf` DESC
- `teacherUid` ASC, `studentId` ASC, `weekOf` DESC

---

### 4. `passages/{passageId}`

Stores reading passages assigned for a particular week.

**Document ID**: Auto-generated

**Fields**:
- `weekId` (string): Document ID from `weeks` collection
- `type` (string): `"weekly"` | `"friday"` (main weekly passage vs. Friday cold-read)
- `title` (string): Title of the passage
- `text` (string): Full text content of the passage
- `subjectTag` (string, optional): Categorization tag (e.g., "historical-fiction", "biography")
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage passages for their students' weeks. Students can read passages for their weeks.

**Indexes Required**:
- `weekId` ASC, `type` ASC

---

### 5. `comprehensionQuestions/{questionId}`

Stores comprehension questions linked to a specific week's content.

**Document ID**: Auto-generated

**Fields**:
- `weekId` (string): Document ID from `weeks` collection
- `day` (number): `2` | `5` (Day 2 for weekly passage, Day 5 for Friday prompts)
- `type` (string): `"literal"` | `"inferential"` | `"mainIdea"`
- `prompt` (string): The question text
- `rubric` (string, optional): Details for grading/evaluating the answer
- `orderIndex` (number): For ordering questions within a set
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage questions for their students' weeks. Students can read questions for their weeks.

**Indexes Required**:
- `weekId` ASC, `orderIndex` ASC

---

### 6. `vocab/{wordId}`

Stores individual vocabulary words for a given week.

**Document ID**: Auto-generated

**Fields**:
- `weekId` (string): Document ID from `weeks` collection
- `word` (string): The vocabulary word
- `definition` (string): The definition of the word
- `exampleSentence` (string): Example sentence using the word
- `tags` (array<string>): e.g., `["tier2", "content", "affixRelated"]`
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage vocab for their students' weeks. Students can read vocab for their weeks.

**Indexes Required**:
- `weekId` ASC

---

### 7. `affixes/{affixId}`

Stores affixes (prefixes, suffixes, roots) for a given week.

**Document ID**: Auto-generated

**Fields**:
- `weekId` (string): Document ID from `weeks` collection
- `affix` (string): The affix itself (e.g., `"un-"`, `"-ology"`, `"bene"`)
- `kind` (string): `"prefix"` | `"suffix"` | `"root"`
- `meaning` (string): The meaning of the affix
- `examples` (array<string>): Example words using the affix (e.g., `["unhappy", "undo"]`)
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Teachers can manage affixes for their students' weeks. Students can read affixes for their weeks.

**Indexes Required**:
- `weekId` ASC

---

### 8. `wordMastery/{masteryId}`

Tracks a student's mastery level for each vocabulary word.

**Document ID**: `${studentUid}_${wordId}` (composite ID for direct lookup)

**Fields**:
- `studentUid` (string): Links to `users/{uid}`
- `wordId` (string): Document ID from `vocab` collection
- `status` (string): `"new"` | `"learning"` | `"practiced"` | `"mastered"`
- `correctStreak` (number): Consecutive correct answers
- `totalAttempts` (number): Total times this word has been quizzed
- `correctAttempts` (number): Total correct answers for this word
- `lastSeenAt` (Timestamp): Last time the student was quizzed on this word
- `nextDueAt` (Timestamp): Next scheduled time for this word to appear in a quiz (for spiral review)
- `createdAt` (Timestamp): Server timestamp
- `updatedAt` (Timestamp): Server timestamp

**Security**: Students can read/update their own mastery. Teachers can read/update mastery for their students.

**Indexes Required**:
- `studentUid` ASC, `nextDueAt` ASC
- `studentUid` ASC, `wordId` ASC

---

### 9. `quizzes/{quizId}`

Stores the details of a specific quiz assigned to a student.

**Document ID**: Auto-generated

**Fields**:
- `studentUid` (string): Links to `users/{uid}` of the student
- `teacherUid` (string): Links to `users/{uid}` of the teacher
- `weekId` (string): Document ID from `weeks` collection
- `mode` (string): `"daily"` | `"friday"`
- `assignedAt` (Timestamp): When the quiz was assigned
- `dueAt` (Timestamp): When the quiz is due
- `completedAt` (Timestamp, nullable): When the quiz was completed
- `questionCount` (number): Total number of questions in the quiz
- `questions` (array<object>): Array of quiz questions
  - `id` (string): Unique ID for the question within this quiz
  - `type` (string): `"wordToDefinition"` | `"definitionToWord"` | `"cloze"` | `"affixToMeaning"` | `"wordContainsAffix"`
  - `prompt` (string): The question text or cloze sentence
  - `choices` (array<string>): The multiple-choice options
  - `meta` (object): `{ wordId?: string, affixId?: string }` (Links to vocab or affixes)
  - `correctChoiceIndex` (number): **TEACHER-ONLY** - Not sent to student clients
- `createdAt` (Timestamp, optional): Server timestamp
- `updatedAt` (Timestamp, optional): Server timestamp

**Security**: 
- Teachers can read/write quizzes for their students (with answers).
- Students can read their own quizzes (without `correctChoiceIndex`) and update `completedAt`.
- The application layer must filter out `correctChoiceIndex` when sending quizzes to students.

**Indexes Required**:
- `studentUid` ASC, `assignedAt` DESC
- `teacherUid` ASC, `studentUid` ASC, `weekId` ASC

---

### 10. `quizAttempts/{attemptId}`

Records each instance of a student completing a quiz.

**Document ID**: Auto-generated

**Fields**:
- `quizId` (string): Document ID from `quizzes` collection
- `studentUid` (string): Links to `users/{uid}` of the student
- `submittedAt` (Timestamp): When the quiz was submitted
- `scorePercent` (number): The percentage score for the attempt
- `responses` (array<object>): Array of student responses
  - `questionId` (string): The `id` of the question from the `quizzes` document
  - `selectedIndex` (number): The index of the choice the student selected
  - `isCorrect` (boolean): Whether the selected answer was correct
- `createdAt` (Timestamp, optional): Server timestamp

**Security**: Students can create their own quiz attempts. Teachers can read/update/delete attempts for their students' quizzes.

**Indexes Required**:
- `quizId` ASC, `submittedAt` DESC
- `studentUid` ASC, `submittedAt` DESC

---

### 11. `fluencyAssessments/{assessmentId}` (Optional)

Tracks reading fluency assessments for students.

**Document ID**: Auto-generated

**Fields**:
- `weekId` (string): Document ID from `weeks` collection
- `studentUid` (string): Links to `users/{uid}` of the student
- `date` (Timestamp): The date of the assessment
- `wordsRead` (number): Total words read
- `timeSeconds` (number): Time taken in seconds
- `miscuesTotal` (number): Total miscues
- `accuracyPercent` (number): Calculated accuracy
- `wpm` (number): Words per minute
- `compSummary` (string, optional): Summary of comprehension
- `createdAt` (Timestamp): Server timestamp

**Security**: Teachers can manage assessments for their students. Students can read/create their own assessments.

**Indexes Required**:
- `studentUid` ASC, `date` DESC
- `weekId` ASC, `studentUid` ASC

---

## Important Considerations

### Server Timestamps

Always use `firebase.firestore.FieldValue.serverTimestamp()` (or `serverTimestamp()` from the Firebase SDK) when setting `createdAt` and `updatedAt` fields. This ensures consistent timestamps across all clients and the server.

### Document IDs

- Auto-generated IDs are used for most collections (recommended by Firebase)
- `wordMastery` uses a composite ID format: `${studentUid}_${wordId}` for direct lookups and uniqueness
- `users` collection uses Firebase Auth `uid` as the document ID

### Referential Integrity

Firestore doesn't enforce referential integrity like traditional relational databases. Your application logic (and security rules) must ensure that:
- `weekId` values always refer to existing documents in `weeks`
- `studentId` values always refer to existing documents in `students`
- `studentUid` and `teacherUid` values always refer to existing documents in `users`
- All foreign key relationships are valid

### Security Rules

The security rules enforce:
- Teachers can only access data for their own students
- Students can only access their own data
- Students **cannot** see `correctChoiceIndex` in quiz questions (application layer must filter)
- All operations require proper authentication

### Indexes

All recommended composite indexes are defined in `firestore.indexes.json`. After deploying, Firestore will automatically create these indexes. You may need to wait a few minutes for index creation to complete.

### Quiz Answer Security

**CRITICAL**: The `correctChoiceIndex` field in quiz questions should **never** be sent to student clients. The service layer (`firestoreServices.ts`) includes helper functions that filter out answers when students read quizzes. Always use these functions when displaying quizzes to students.

---

## Usage Examples

See `src/services/firestoreServices.ts` for complete type-safe service functions for all collections.

### Example: Creating a Week with Content

```typescript
import { createWeek, createPassage, createVocabWord } from '@/services/firestoreServices';

// 1. Create the week
const weekId = await createWeek({
  teacherUid: 'teacher-uid',
  studentId: 'student-doc-id',
  weekOf: Timestamp.fromDate(new Date('2024-01-01')),
  subjectFocus: 'ELA',
});

// 2. Create a passage
await createPassage({
  weekId,
  type: 'weekly',
  title: 'The Great Adventure',
  text: 'Once upon a time...',
});

// 3. Create vocabulary words
await createVocabWord({
  weekId,
  word: 'adventure',
  definition: 'An exciting or dangerous experience',
  exampleSentence: 'The children went on an adventure in the forest.',
  tags: ['tier2', 'content'],
});
```

### Example: Creating and Taking a Quiz

```typescript
import { createQuiz, getQuiz, createQuizAttempt } from '@/services/firestoreServices';

// Teacher creates quiz (with answers)
const quizId = await createQuiz({
  studentUid: 'student-uid',
  teacherUid: 'teacher-uid',
  weekId: 'week-id',
  mode: 'daily',
  assignedAt: Timestamp.now(),
  dueAt: Timestamp.fromDate(new Date('2024-01-07')),
  completedAt: null,
  questionCount: 10,
  questions: [
    {
      id: 'q1',
      type: 'wordToDefinition',
      prompt: 'What does "adventure" mean?',
      choices: ['Option A', 'Option B', 'Option C', 'Option D'],
      meta: { wordId: 'word-id' },
      correctChoiceIndex: 0, // TEACHER-ONLY
    },
  ],
});

// Student reads quiz (without answers)
const quiz = await getQuiz(quizId, false); // includeAnswers = false

// Student submits attempt
await createQuizAttempt({
  quizId,
  studentUid: 'student-uid',
  submittedAt: Timestamp.now(),
  scorePercent: 85,
  responses: [
    {
      questionId: 'q1',
      selectedIndex: 0,
      isCorrect: true,
    },
  ],
});
```

---

## Next Steps

1. **Deploy Firestore Rules**: Run `firebase deploy --only firestore:rules`
2. **Deploy Firestore Indexes**: Run `firebase deploy --only firestore:indexes`
3. **Set up Firebase Config**: Update `src/firebase/config.ts` with your Firebase project credentials
4. **Test Security Rules**: Use the Firebase Console to test your security rules
5. **Implement Application Logic**: Use the service functions in `src/services/firestoreServices.ts` to build your application











