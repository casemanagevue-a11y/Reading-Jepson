/**
 * Week XX — [TOPIC NAME]
 * Quarter X, Week X
 * 
 * Anchor Type: [History/ELA/Science] [Informational/Narrative]
 * Tier 3 Vocabulary: [word1, word2, word3, word4, word5]
 * Affixes: [affix1, affix2]
 * Word Count: ~XXX words
 */

import {
  createWeekTemplate,
  createPassage,
  createVocabWord,
  createAffix,
  createQuestion,
} from '@/services/firestoreServices';
import type {
  WeekTemplateDocument,
  VocabDocument,
  AffixDocument,
  ComprehensionQuestionDocument,
} from '@/types/firestore';

/**
 * Creates the complete Week XX template with all content
 * 
 * @param teacherUid - The UID of the teacher creating the template
 * @returns The created template ID
 */
export async function createWeekXXTopicNameTemplate(teacherUid: string): Promise<string> {
  // 1. Create the template document
  const templateData: Omit<WeekTemplateDocument, 'createdAt' | 'updatedAt'> = {
    teacherUid,
    templateName: 'WEEK XX — [TOPIC NAME]',
    weekLength: 5, // Change to 3 or 4 for short weeks
    grade: '6-8',
    unit: 'Unit X',
    subjectFocus: 'History', // or 'ELA', 'Science'
    description: '[Anchor Type]. Tier 3 vocabulary: [word1, word2, word3, word4, word5]. Affixes: [affix1, affix2]. Anchor Passage Word Count: ~XXX words.',
  };

  const templateId = await createWeekTemplate(templateData);

  // 2. Create the anchor passage (weekly passage)
  await createPassage({
    weekId: templateId,
    type: 'weekly',
    title: '[Passage Title]',
    text: `[Paste your full anchor passage text here.

Multiple paragraphs are fine.

Include all paragraphs from the passage.]`,
  });

  // 3. Create Friday passage (placeholder or actual)
  await createPassage({
    weekId: templateId,
    type: 'friday',
    title: 'Friday Assessment Passage',
    text: 'Friday passage will be provided separately.',
  });

  // 4. Create vocabulary words with inquiry prompts
  const vocabWords: Array<Omit<VocabDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      word: '[vocabulary word 1]',
      definition: '[clear definition]',
      exampleSentence: '[context sentence from passage]',
      tags: ['tier3', 'content'],
      teacherPrompts: '[Guiding questions: Is this a kind of...? What would NOT be an example?]',
      sentenceFrame: '[Optional: A ___ is ___.]',
      pictureGuidance: '[What to draw]',
    },
    {
      word: '[vocabulary word 2]',
      definition: '[clear definition]',
      exampleSentence: '[context sentence from passage]',
      tags: ['tier3', 'content'],
      teacherPrompts: '[Guiding questions]',
      sentenceFrame: '[Optional sentence frame]',
      pictureGuidance: '[What to draw]',
    },
    // Add 3 more vocabulary words (total of 5)
    // Copy the structure above for words 3, 4, and 5
  ];

  for (const vocab of vocabWords) {
    await createVocabWord({
      weekId: templateId,
      ...vocab,
    });
  }

  // 5. Create affixes
  const affixes: Array<Omit<AffixDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      affix: '[affix1]', // e.g., 'inter-', '-ment', 'port'
      kind: 'prefix', // or 'suffix', 'root'
      meaning: '[meaning]',
      examples: ['[example1]', '[example2]', '[example3]'],
    },
    {
      affix: '[affix2]',
      kind: 'suffix', // or 'prefix', 'root'
      meaning: '[meaning]',
      examples: ['[example1]', '[example2]', '[example3]'],
    },
  ];

  for (const affix of affixes) {
    await createAffix({
      weekId: templateId,
      ...affix,
    });
  }

  // 6. Create Day 3 inference organizer questions
  const day3Questions: Array<Omit<ComprehensionQuestionDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      day: 3,
      type: 'literal',
      prompt: '[Literal question 1]',
      orderIndex: 1,
      rubric: '[Expected answer/key concepts]',
    },
    {
      day: 3,
      type: 'literal',
      prompt: '[Literal question 2]',
      orderIndex: 2,
      rubric: '[Expected answer]',
    },
    {
      day: 3,
      type: 'literal',
      prompt: '[Literal question 3]',
      orderIndex: 3,
      rubric: '[Expected answer]',
    },
    {
      day: 3,
      type: 'inferential',
      prompt: '[Inferential question 1]',
      orderIndex: 4,
      rubric: '[Expected answer]',
    },
    {
      day: 3,
      type: 'inferential',
      prompt: '[Inferential question 2]',
      orderIndex: 5,
      rubric: '[Expected reasoning/answer]',
    },
  ];

  for (const question of day3Questions) {
    await createQuestion({
      weekId: templateId,
      ...question,
    });
  }

  // 7. Create Day 4 main idea question
  await createQuestion({
    weekId: templateId,
    day: 4,
    type: 'mainIdea',
    prompt: 'What is the main idea of this passage? Provide 2-3 details that prove it.',
    orderIndex: 1,
    rubric: 'Acceptable: [main idea statement]. Evidence: [detail 1], [detail 2], [detail 3].',
  });

  return templateId;
}