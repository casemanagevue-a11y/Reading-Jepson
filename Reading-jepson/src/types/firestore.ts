/**
 * Firestore Schema Type Definitions
 * 
 * This file contains all TypeScript interfaces for the Firestore collections
 * in the Reading application.
 */

import { Timestamp } from 'firebase/firestore';

// ============================================================================
// 1. users Collection
// ============================================================================

export interface UserDocument {
  role: 'teacher' | 'student' | 'admin';
  displayName: string;
  email: string;
  createdAt: Timestamp;
}

// ============================================================================
// 2. students Collection
// ============================================================================

export interface StudentDocument {
  displayName: string;
  studentUid: string | null; // Links to users/{uid} - nullable until student claims account
  studentEmail: string;
  teacherUid: string; // Links to users/{uid} of the teacher
  active: boolean;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 3. weeks Collection
// ============================================================================

export type SubjectFocus = 'ELA' | 'Science' | 'History' | string;

export interface WeekDocument {
  teacherUid: string;
  studentId: string; // Document ID from students collection
  weekOf: Timestamp; // Start date of the week (e.g., Monday)
  subjectFocus: SubjectFocus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 3b. weekTemplates Collection (Reusable week content templates)
// ============================================================================

export interface WeekTemplateDocument {
  teacherUid: string;
  templateName: string;
  weekLength: number; // Usually 5 days
  grade?: string; // e.g., "6-8", "K-2"
  unit?: string; // e.g., "Unit 1"
  subjectFocus: SubjectFocus;
  description?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 4. passages Collection
// ============================================================================

export type PassageType = 'weekly' | 'friday';

// Vocab item embedded in passage (with passage-specific sentence)
export interface PassageVocabItem {
  word: string;
  definition: string;
  exampleSentence: string; // Sentence extracted from this passage
  tags?: string[];
  teacherPrompts?: string;
  sentenceFrame?: string;
  pictureGuidance?: string;
  wordPhraseCards?: string[];
  sortingKey?: {
    whoWhat?: string[];
    isWasDoing?: string[];
    whichWhatKind?: string[];
    toWhatToWhom?: string[];
    whenWhereWhyHow?: string[];
  };
  // AI-generated clarification fields
  whatItIs?: string; // Examples, synonyms
  whatItIsNot?: string; // Non-examples, antonyms
  partOfSpeech?: string; // noun, verb, adjective, etc.
}

// Affix item embedded in passage (with passage-specific examples)
export interface PassageAffixItem {
  affix: string;
  kind: AffixKind;
  meaning: string;
  examples: string[]; // Examples found in this passage
}

export interface PassageDocument {
  weekId: string; // Document ID from weeks collection
  type: PassageType;
  title: string;
  text: string;
  subjectTag?: string; // Optional categorization tag
  vocabItems?: PassageVocabItem[]; // Vocab words assigned to this passage with sentences
  affixItems?: PassageAffixItem[]; // Affixes assigned to this passage with examples
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 5. comprehensionQuestions Collection
// ============================================================================

export type QuestionType = 'literal' | 'inferential' | 'mainIdea' | 'causeEffect';

export interface ComprehensionQuestionDocument {
  weekId: string; // Document ID from weeks collection
  day: 3 | 4 | 5; // Day 3: Inference organizer, Day 4: Cause/Effect organizer, Day 5: Assessment
  type: QuestionType;
  prompt: string;
  rubric?: string; // Optional grading details
  orderIndex: number; // For ordering questions within a set
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 6. vocab Collection
// ============================================================================

export interface VocabDocument {
  weekId: string; // Document ID from weeks collection
  word: string;
  definition: string;
  exampleSentence: string; // Sentence from the text where word appears
  tags: string[]; // e.g., ["tier2", "content", "affixRelated"]
  // Day 1: Semantic Mapping / 4-corner worksheet fields
  teacherPrompts?: string; // Guiding questions for building meaning (e.g., "Is this a kind of...?")
  sentenceFrame?: string; // Optional sentence frame to support student writing
  pictureGuidance?: string; // Guidance for what students should draw
  // Day 2: Words Working Together fields (sentence structure analysis)
  wordPhraseCards?: string[]; // Cut-apart cards for sorting (exact text on each card)
  sortingKey?: {
    whoWhat?: string[]; // Cards that answer "Who or what?" (Noun-Subject)
    isWasDoing?: string[]; // Cards that answer "Is/was doing or happening?" (Verb)
    whichWhatKind?: string[]; // Cards that answer "Which one, what kind, how many?" (Adjective)
    toWhatToWhom?: string[]; // Cards that answer "To what? To whom?" (Object of verb)
    whenWhereWhyHow?: string[]; // Cards that answer "When, where, why, how?" (Adverb)
  };
  // AI-generated clarification fields
  partOfSpeech?: string; // noun, verb, adjective, etc.
  whatItIs?: string; // Examples, synonyms
  whatItIsNot?: string; // Non-examples, antonyms
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 7. affixes Collection
// ============================================================================

export type AffixKind = 'prefix' | 'suffix' | 'root';

export interface AffixDocument {
  weekId: string; // Document ID from weeks collection
  affix: string; // e.g., "un-", "-ology", "bene"
  kind: AffixKind;
  meaning: string;
  examples: string[]; // e.g., ["unhappy", "undo"]
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 8. wordMastery Collection
// ============================================================================

export type MasteryStatus = 'new' | 'learning' | 'practiced' | 'mastered';

export interface WordMasteryDocument {
  studentUid: string; // Links to users/{uid}
  wordId: string; // Document ID from vocab collection
  status: MasteryStatus;
  correctStreak: number; // Consecutive correct answers
  totalAttempts: number;
  correctAttempts: number;
  lastSeenAt: Timestamp;
  nextDueAt: Timestamp; // Next scheduled time for spiral review
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 9. quizzesPublic Collection (Student-readable, NO answers)
// ============================================================================

export type QuizMode = 'daily' | 'friday';

export type QuizQuestionType = 
  | 'wordToDefinition' 
  | 'definitionToWord' 
  | 'cloze' 
  | 'affixToMeaning' 
  | 'wordContainsAffix';

export interface QuizQuestionPublic {
  id: string; // Unique ID within this quiz (e.g., UUID or quizId-qIndex)
  type: QuizQuestionType;
  prompt: string; // Question text or cloze sentence
  choices: string[]; // Multiple-choice options
  meta: {
    wordId?: string; // Links to vocab collection
    affixId?: string; // Links to affixes collection
  };
  // NOTE: correctChoiceIndex is NOT included in public quiz questions
}

export interface QuizPublicDocument {
  studentUid: string;
  teacherUid: string;
  weekId: string; // Document ID from weeks collection
  mode: QuizMode;
  assignedAt: Timestamp;
  dueAt: Timestamp;
  completedAt: Timestamp | null;
  questionCount: number;
  questions: QuizQuestionPublic[]; // Questions WITHOUT correctChoiceIndex
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

// ============================================================================
// 10. quizzesPrivate Collection (Teacher/Function-only, WITH answers)
// ============================================================================

export interface QuizPrivateDocument {
  correctMap: { [questionId: string]: number }; // Maps questionId -> correctChoiceIndex
  wordIdsByQuestion: { [questionId: string]: string | undefined }; // Maps questionId -> wordId (optional)
}

// Legacy type alias for backward compatibility (if needed)
export type QuizDocument = QuizPublicDocument;

// ============================================================================
// 11. quizAttempts Collection
// ============================================================================

export interface QuizResponse {
  questionId: string; // The id from the quiz question
  selectedIndex: number; // Index of the choice selected
  isCorrect: boolean;
}

export interface QuizAttemptDocument {
  quizId: string; // Document ID from quizzes collection
  studentUid: string;
  submittedAt: Timestamp;
  scorePercent: number;
  responses: QuizResponse[];
  createdAt?: Timestamp; // Optional, for tracking creation
}

// ============================================================================
// 12. fluencyAssessments Collection (Optional)
// ============================================================================

export interface FluencyAssessmentDocument {
  weekId: string; // Document ID from weeks collection
  studentUid: string;
  date: Timestamp;
  wordsRead: number;
  timeSeconds: number;
  miscuesTotal: number;
  accuracyPercent: number;
  wpm: number; // Words per minute
  compSummary?: string; // Optional comprehension summary
  createdAt: Timestamp;
}

// ============================================================================
// Helper Types for Document References
// ============================================================================

/**
 * Document ID types for type-safe collection references
 */
export type UserId = string;
export type StudentId = string;
export type WeekId = string;
export type TemplateId = string;
export type PassageId = string;
export type QuestionId = string;
export type VocabId = string;
export type AffixId = string;
export type WordMasteryId = string; // Format: ${studentUid}_${wordId}
export type QuizId = string;
export type QuizAttemptId = string;
export type FluencyAssessmentId = string;

// ============================================================================
// Collection Path Helpers
// ============================================================================

// ============================================================================
// 13. weekAssignments Collection (Assigns templates to students)
// ============================================================================

export interface WeekAssignmentDocument {
  studentId: string;
  teacherUid: string;
  weekTemplateId: string;
  weekNumber: number;
  quarter: 1 | 2 | 3 | 4;
  startDate: Timestamp;
  endDate: Timestamp;
  actualDays?: number[]; // [1,2,3,4,5] for full week or [1,2,3] for partial
  status: 'assigned' | 'in_progress' | 'completed';
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 14. schoolCalendar Collection
// ============================================================================

export type CalendarEventType = 'dayOff' | 'holiday' | 'quarterStart' | 'quarterEnd' | 'breakStart' | 'breakEnd' | 'minimumDay' | 'firstDay' | 'lastDay';

export interface SchoolCalendarDocument {
  teacherUid: string;
  eventType: CalendarEventType;
  title: string;
  date: Timestamp;
  endDate?: Timestamp;
  quarter?: 1 | 2 | 3 | 4;
  description?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// ============================================================================
// 15. Library Collections
// ============================================================================

export interface VocabLibraryDocument {
  teacherUid: string;
  word: string;
  definition: string;
  exampleSentence: string;
  tags: string[];
  grade?: string;
  unit?: string;
  subject?: SubjectFocus;
  teacherPrompts?: string;
  sentenceFrame?: string;
  pictureGuidance?: string;
  wordPhraseCards?: string[];
  sortingKey?: {
    whoWhat?: string[];
    isWasDoing?: string[];
    whichWhatKind?: string[];
    toWhatToWhom?: string[];
    whenWhereWhyHow?: string[];
  };
  // Clarification fields
  whatItIs?: string;
  whatItIsNot?: string;
  partOfSpeech?: string;
  // Legacy fields (deprecated)
  inquiryPrompts?: string[];
  hints?: string[];
  inferenceQuestion?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface AffixLibraryDocument {
  teacherUid: string;
  affix: string;
  kind: AffixKind;
  meaning: string;
  examples: string[];
  grade?: string;
  unit?: string;
  subject?: SubjectFocus;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface PassageLibraryDocument {
  teacherUid: string;
  title: string;
  text: string;
  wordCount?: number;
  readingLevel?: number;
  grade?: string;
  unit?: string;
  subject?: SubjectFocus;
  subjectTag?: string;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export const COLLECTIONS = {
  users: 'users',
  students: 'students',
  weeks: 'weeks',
  weekTemplates: 'weekTemplates',
  weekAssignments: 'weekAssignments',
  schoolCalendar: 'schoolCalendar',
  passages: 'passages',
  comprehensionQuestions: 'comprehensionQuestions',
  vocab: 'vocab',
  affixes: 'affixes',
  wordMastery: 'wordMastery',
  quizzesPublic: 'quizzesPublic',
  quizzesPrivate: 'quizzesPrivate',
  quizAttempts: 'quizAttempts',
  fluencyAssessments: 'fluencyAssessments',
  vocabLibrary: 'vocabLibrary',
  affixLibrary: 'affixLibrary',
  passageLibrary: 'passageLibrary',
} as const;

/**
 * Helper function to generate wordMastery document ID
 * Format: ${studentUid}_${wordId}
 */
export function createWordMasteryId(studentUid: string, wordId: string): WordMasteryId {
  return `${studentUid}_${wordId}` as WordMasteryId;
}
