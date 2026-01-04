/**
 * Lesson Parser Utility
 * 
 * Parses sample lesson data from DOC_11 format into Firestore-compatible structures
 */

import { Timestamp } from 'firebase/firestore'
import type { VocabDocument, PassageDocument, ComprehensionQuestionDocument, AffixDocument } from '@/types/firestore'

export interface ParsedLesson {
  vocab: VocabDocument[]
  passages: PassageDocument[]
  questions: ComprehensionQuestionDocument[]
  affixes: AffixDocument[]
}

/**
 * Parse vocabulary from the sample lesson format
 * Format: Word, definition, context sentence, inquiry prompts, truth-bites
 */
export function parseVocabulary(_data: any, weekId: string): VocabDocument[] {
  // This would parse the actual DOC_11 format
  // For now, returning structured example based on the sample
  
  const vocab: VocabDocument[] = [
    {
      weekId,
      word: 'Dynasty',
      definition: 'A series of rulers from the same family',
      exampleSentence: 'For thousands of years, China was ruled by a dynasty that controlled the government and passed power to the next ruler.',
      tags: ['tier2', 'content'],
      teacherPrompts: 'Who is ruling here — one ruler or rulers over time? Does this sound like random rulers or a connected line?',
      sentenceFrame: 'A dynasty is ___.',
      pictureGuidance: 'Draw a line of rulers from the same family',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      weekId,
      word: 'Bureaucracy',
      definition: 'System of many government officials who carry out government rules & regulations',
      exampleSentence: 'The emperor relied on a bureaucracy that helped organize the government and keep it running.',
      tags: ['tier2', 'content'],
      teacherPrompts: 'Is this describing one helper or a group? Does the emperor do everything by himself?',
      sentenceFrame: 'A bureaucracy is ___.',
      pictureGuidance: 'Draw many government officials helping run things',
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
    // Add remaining 7 words following same pattern
  ]
  
  return vocab
}

/**
 * Extract all sentences from a passage that contain a specific word
 * Returns array of sentences (handles inflectional endings)
 */
export function extractSentencesContainingWord(
  passageText: string,
  word: string
): string[] {
  if (!passageText || !word) return []
  
  // Normalize word for case-insensitive matching
  const normalizedWord = word.toLowerCase().trim()
  
  // Escape special regex characters
  const escapedWord = normalizedWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  
  // Create regex that matches the base word + common inflectional endings
  // Handles: plurals (-s, -es), past tense (-ed), gerunds (-ing), comparatives (-er, -est)
  // Also handles: possessives ('s), contractions
  const wordRegex = new RegExp(
    `\\b${escapedWord}(s|es|ed|ing|er|est|'s|')?\\b`,
    'gi'
  )
  
  // Split passage into sentences
  // Handle common sentence endings: . ! ? and also handle quotes, parentheses
  const sentences = passageText
    .split(/(?<=[.!?])\s+(?=[A-Z])/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
  
  // Find sentences containing the word or its inflected forms
  const matchingSentences: string[] = []
  
  for (const sentence of sentences) {
    if (wordRegex.test(sentence)) {
      matchingSentences.push(sentence)
    }
  }
  
  return matchingSentences
}

/**
 * Extract words from passage that contain a specific affix
 */
export function extractWordsContainingAffix(
  passageText: string,
  affix: string,
  kind: 'prefix' | 'suffix' | 'root' = 'prefix'
): string[] {
  if (!passageText || !affix) return []
  
  // Clean affix - remove hyphens and special chars
  const cleanAffix = affix.replace(/[-.*+?^${}()|[\]\\]/g, match => {
    return match === '-' ? '' : '\\' + match
  }).trim()
  
  if (!cleanAffix) return []
  
  // Create regex based on affix kind
  let affixRegex: RegExp
  
  if (kind === 'prefix') {
    // Prefix: word must START with the affix
    affixRegex = new RegExp(`\\b${cleanAffix}\\w+\\b`, 'gi')
  } else if (kind === 'suffix') {
    // Suffix: word must END with the affix
    affixRegex = new RegExp(`\\b\\w+${cleanAffix}\\b`, 'gi')
  } else {
    // Root: can be anywhere in the word (but not standalone)
    affixRegex = new RegExp(`\\b\\w*${cleanAffix}\\w+\\b`, 'gi')
  }
  
  // Extract all words from passage
  const words = passageText.match(/\b\w+\b/gi) || []
  
  // Find words matching the affix pattern
  const matchingWords = words.filter(word => {
    affixRegex.lastIndex = 0 // Reset regex
    return affixRegex.test(word)
  })
  
  // Remove duplicates and return
  return [...new Set(matchingWords.map(w => w.toLowerCase()))]
}

/**
 * Parse passage from sample lesson
 */
export function parsePassage(title: string, text: string, type: 'weekly' | 'friday'): PassageDocument {
  return {
    title,
    text: text.trim(),
    type,
    subjectTag: 'history'
  } as PassageDocument
}

/**
 * Parse comprehension questions from sample lesson
 * Supports both literal and inferential questions with sentence frames
 */
export function parseQuestions(
  literalQuestions: Array<{ prompt: string; sentenceFrame?: string }>,
  inferentialQuestions: Array<{ prompt: string; sentenceFrame?: string }>,
  day: 3 | 4 | 5
): ComprehensionQuestionDocument[] {
  const questions: ComprehensionQuestionDocument[] = []
  
  // Add literal questions
  literalQuestions.forEach((q, index) => {
    questions.push({
      type: 'literal',
      prompt: q.sentenceFrame ? `${q.prompt}\n${q.sentenceFrame}` : q.prompt,
      orderIndex: index + 1
    } as ComprehensionQuestionDocument)
  })
  
  // Add inferential questions
  inferentialQuestions.forEach((q, index) => {
    questions.push({
      type: 'inferential',
      prompt: q.sentenceFrame ? `${q.prompt}\n${q.sentenceFrame}` : q.prompt,
      orderIndex: literalQuestions.length + index + 1
    } as ComprehensionQuestionDocument)
  })
  
  return questions.map(q => ({ ...q, day })) as ComprehensionQuestionDocument[]
}

/**
 * Example usage: Parse the Imperial China lesson
 */
export function parseImperialChinaLesson(weekId: string): ParsedLesson {
  const vocab = [
    {
      word: 'Dynasty',
      definition: 'A series of rulers from the same family',
      exampleSentence: 'For thousands of years, China was ruled by a dynasty that controlled the government and passed power to the next ruler.',
      tags: ['tier2', 'content'],
      teacherPrompts: 'Who is ruling here — one ruler or rulers over time? Does this sound like random rulers or a connected line?',
      sentenceFrame: 'A dynasty is ___.',
      pictureGuidance: 'Draw a line of rulers from the same family'
    },
    // Add other 8 words...
  ].map(v => ({ 
    ...v, 
    weekId,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })) as VocabDocument[]
  
  const passage: PassageDocument = {
    weekId,
    type: 'weekly',
    title: 'Life and Power in Imperial China',
    text: `For thousands of years, China was ruled by a dynasty, which is a series of rulers from the same family. Each dynasty shaped the government, culture, and daily life of the people. Many rulers followed the teachings of Confucianism, a belief system based on the ideas of Confucius. Confucianism teaches that a good government should act with honesty, fairness, and respect.

To support the emperor, China developed a large bureaucracy, which means a system made up of many government officials who carried out laws and made sure the empire ran smoothly. Many of these officials were scholar-officials, highly educated men who passed difficult civil service exams. Because China used a merit system, people could earn government jobs through talent and hard work rather than wealth or family status.

As cities grew, China experienced urbanization, the movement of people from rural villages into busy urban centers. Trade expanded, ideas spread, and cities became centers of learning and art.

However, not every leader ruled with kindness. A ruler who used power harshly was sometimes called a despot, meaning a dictator or tyrant. China also faced threats from outside its borders. The Mongols, led by powerful rulers called khans, conquered large parts of Asia, including China. Some areas were forced to send tribute, or payments, to show obedience to Mongol power.

Through changing dynasties, rulers, and ideas, China built government systems and beliefs that shaped its long history.`,
    subjectTag: 'history',
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  } as PassageDocument
  
  const now = Timestamp.now()
  const questions: ComprehensionQuestionDocument[] = [
    // Literal questions
    { weekId, day: 3, type: 'literal', prompt: 'What is a dynasty?', orderIndex: 1, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'literal', prompt: 'What does Confucianism teach about government?', orderIndex: 2, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'literal', prompt: 'What is a bureaucracy?', orderIndex: 3, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'literal', prompt: 'Why were scholar-officials important in China?', orderIndex: 4, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'literal', prompt: 'What is urbanization?', orderIndex: 5, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'literal', prompt: 'Who were the khans?', orderIndex: 6, createdAt: now, updatedAt: now },
    // Inferential questions
    { weekId, day: 3, type: 'inferential', prompt: 'Why might the merit system have made China\'s government stronger?', orderIndex: 7, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'inferential', prompt: 'Why would some areas feel pressure to send tribute to Mongol rulers?', orderIndex: 8, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'inferential', prompt: 'How might life change for a farmer who moves to a city during urbanization?', orderIndex: 9, createdAt: now, updatedAt: now },
    { weekId, day: 3, type: 'inferential', prompt: 'Why could a despot be dangerous for the people of China?', orderIndex: 10, createdAt: now, updatedAt: now }
  ] as ComprehensionQuestionDocument[]
  
  const affixes: AffixDocument[] = [
    {
      weekId,
      affix: 'com- / con-',
      kind: 'prefix',
      meaning: 'together or with',
      examples: ['compass', 'communication'],
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    },
    {
      weekId,
      affix: '-tion',
      kind: 'suffix',
      meaning: 'the act of or process of',
      examples: ['urbanization', 'communication'],
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
  ] as AffixDocument[]
  
  return { vocab, passages: [passage], questions, affixes }
}













