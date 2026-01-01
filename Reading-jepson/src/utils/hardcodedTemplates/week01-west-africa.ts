/**
 * Hard-coded Week 1 - West Africa Geography & Culture Template
 * 
 * This creates a complete, ready-to-use week template matching the
 * detailed lesson structure provided by the user.
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

export interface Week1TemplateData {
  templateId: string;
}

/**
 * Creates the complete Week 1 - West Africa template with all content
 */
export async function createWeek1WestAfricaTemplate(teacherUid: string): Promise<string> {
  // 1. Create the template document
  const templateData: Omit<WeekTemplateDocument, 'createdAt' | 'updatedAt'> = {
    teacherUid,
    templateName: 'WEEK 1 — WEST AFRICA GEOGRAPHY & CULTURE',
    weekLength: 5,
    grade: '6-8',
    unit: 'Unit 1',
    subjectFocus: 'History',
    description: 'Anchor Type: History Informational. Tier 3: population, natural resource, environment, savanna, region. Affixes: inter- (between), -ment (result/state). Anchor Passage Word Count: ~228 words.',
  };

  const templateId = await createWeekTemplate(templateData);

  // 2. Create the anchor passage (weekly passage - ~228 words)
  await createPassage({
    weekId: templateId,
    type: 'weekly',
    title: 'West Africa Geography & Culture',
    text: `West Africa is a region of the African continent with many different landforms and climates. This region includes forests, deserts, and wide areas of grassland. One important type of land in West Africa is the savanna, a parklike grassland with scattered trees that can survive dry seasons.

The environment of West Africa affected where people could live and how they survived. Environment includes the land, weather, plants, and animals in an area. Some environments had enough rain to grow crops, while others were dry and made farming difficult.

People in West Africa lived together in groups called a population. A population is a group of people living in the same area. As populations grew, people learned to adapt to their environment by using what was available around them.

West Africa had many natural resources, including gold, salt, and fertile land. A natural resource is a useful material found in the environment. These resources were important because people depended on them for food, tools, and trade.

The connection between region, environment, population, and natural resources helped shape how West African societies developed over time.`,
  });

  // 3. Create Friday passage (placeholder - not provided in user's data)
  await createPassage({
    weekId: templateId,
    type: 'friday',
    title: 'Friday Assessment Passage',
    text: 'Friday passage will be provided separately.',
  });

  // 4. Create vocabulary words with complete teacher scripts
  // Day 1: population, natural resource, environment (3 words)
  // Day 2: savanna, region (2 additional words)
  const vocabWords: Array<Omit<VocabDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      word: 'population',
      definition: 'a group of people living in the same area',
      exampleSentence: 'A population is a group of people living in the same area.',
      tags: ['tier3', 'content', 'day1'],
      teacherPrompts: 'One person, or many people together? Is this about buildings or people? Where do they live?',
      sentenceFrame: 'A population is ___.',
      pictureGuidance: 'Draw many people together in a neighborhood or area',
    },
    {
      word: 'natural resource',
      definition: 'a useful material found in the environment',
      exampleSentence: 'West Africa had many natural resources, including gold and salt.',
      tags: ['tier3', 'content', 'day1'],
      teacherPrompts: 'Made by people, or found in nature? Is water a natural resource? What makes something a resource?',
      sentenceFrame: 'A natural resource is ___.',
      pictureGuidance: 'Draw gold nuggets, water, or trees from nature',
    },
    {
      word: 'environment',
      definition: 'the land, weather, plants, and animals in an area',
      exampleSentence: 'The environment of West Africa affected where people could live…',
      tags: ['tier3', 'content', 'day1'],
      teacherPrompts: 'Just people, or everything around them? What things make up an environment? If a place is very dry, what changes?',
      sentenceFrame: 'The environment includes ___.',
      pictureGuidance: 'Draw land, sun/weather, trees/plants, and animals together',
    },
    {
      word: 'savanna',
      definition: 'a parklike grassland with scattered trees that can survive dry seasons',
      exampleSentence: 'One important type of land in West Africa is the savanna.',
      tags: ['tier3', 'content', 'day2'],
      teacherPrompts: 'Mostly forest or mostly grass? Is this a desert or grassland? Are there many trees or just a few?',
      sentenceFrame: 'A savanna is a type of ___ with ___.',
      pictureGuidance: 'Draw grassland with scattered trees, not a forest',
    },
    {
      word: 'region',
      definition: 'a large area with shared features',
      exampleSentence: 'West Africa is a region of the African continent.',
      tags: ['tier3', 'content', 'day2'],
      teacherPrompts: 'Small spot or large area? Is a region part of something bigger? What makes areas part of the same region?',
      sentenceFrame: 'A region is ___.',
      pictureGuidance: 'Draw a map showing West Africa as part of Africa',
    },
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
      affix: 'inter-',
      kind: 'prefix',
      meaning: 'between',
      examples: ['interact', 'international', 'interstate'],
    },
    {
      affix: '-ment',
      kind: 'suffix',
      meaning: 'result/state',
      examples: ['development', 'agreement', 'movement'],
    },
  ];

  for (const affix of affixes) {
    await createAffix({
      weekId: templateId,
      ...affix,
    });
  }

  // 6. Create Day 2 comprehension questions
  const day3Questions: Array<Omit<ComprehensionQuestionDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      day: 3,
      type: 'literal',
      prompt: 'What is a savanna?',
      orderIndex: 1,
      rubric: 'A parklike grassland with scattered trees that can survive dry seasons',
    },
    {
      day: 3,
      type: 'literal',
      prompt: 'What does the environment include?',
      orderIndex: 2,
      rubric: 'Land, weather, plants, and animals',
    },
    {
      day: 3,
      type: 'literal',
      prompt: 'What is a population?',
      orderIndex: 3,
      rubric: 'A group of people living in the same area',
    },
    {
      day: 3,
      type: 'literal',
      prompt: 'Name two natural resources found in West Africa.',
      orderIndex: 4,
      rubric: 'Gold and salt (fertile land also acceptable)',
    },
    {
      day: 3,
      type: 'inferential',
      prompt: 'Why did the environment affect where people could live?',
      orderIndex: 5,
      rubric: 'Because some places had rain/resources for farming and living, and others were too dry/difficult',
    },
  ];

  for (const question of day3Questions) {
    await createQuestion({
      weekId: templateId,
      ...question,
    });
  }

  // 7. Create Day 4 main idea question (optional - can be added later)
  await createQuestion({
    weekId: templateId,
    day: 4,
    type: 'mainIdea',
    prompt: 'What is the main idea of this passage? Provide 2-3 details that prove it.',
    orderIndex: 1,
    rubric: 'Acceptable: West Africa\'s geography and environment affected how people lived. Evidence: includes forests/deserts/grasslands, environment affected where people lived, natural resources supported trade.',
  });

  return templateId;
}
