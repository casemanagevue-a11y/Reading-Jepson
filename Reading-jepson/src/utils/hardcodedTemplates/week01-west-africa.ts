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
      inquiryPrompts: [
        '1) Student reads: "Read the sentence aloud."',
        '2) Hypothesis: "What do you think population might mean, based on this sentence?"',
        '3) Sentence analysis (expanded): "Let\'s find the definition structure in this sentence. When a sentence says \'X is…\' it is often defining X."',
        '4) Narrowing question: "One person, or many people together?"',
        '5) Definition (write it): population = a group of people living in the same area',
        '6) Confirm + Apply: "If more families move in, what happens to the population?"',
        '7) Restate: "Population means…?"',
      ],
      hints: [
        'population = word being defined',
        'is = definition signal',
        'a group of people = category / who',
        'living in the same area = key detail / where',
        'So this sentence defines population by telling us who and where.',
        'Student answer: Many people.',
        'Student answer: It grows.',
        'Student: A group of people living in the same area.',
      ],
      inferenceQuestion: 'If more families move in, what happens to the population?',
    },
    {
      word: 'natural resource',
      definition: 'a useful material found in the environment',
      exampleSentence: 'West Africa had many natural resources, including gold and salt.',
      tags: ['tier3', 'content', 'day1'],
      inquiryPrompts: [
        '1) Student reads',
        '2) Hypothesis: "What do you think natural resource means here?"',
        '3) Sentence analysis (expanded): "Let\'s locate the clue words."',
        '4) Narrowing question: "Made by people, or found in nature?"',
        '5) Definition (write it): natural resource = a useful material found in the environment',
        '6–7) Apply + Restate: "Is water a natural resource? Why?"',
      ],
      hints: [
        'including = tells us examples are coming',
        'gold and salt = examples',
        'natural = comes from nature, not made by people',
        'resource = something useful that people use',
        'So the sentence is saying: these are useful things people can use that come from nature.',
        'Student answer: Found in nature.',
        'Student answer: Yes—people use it.',
      ],
      inferenceQuestion: 'Is water a natural resource? Why?',
    },
    {
      word: 'environment',
      definition: 'the land, weather, plants, and animals in an area',
      exampleSentence: 'The environment of West Africa affected where people could live…',
      tags: ['tier3', 'content', 'day1'],
      inquiryPrompts: [
        '1) Student reads',
        '2) Hypothesis',
        '3) Sentence analysis (expanded): "Watch how the sentence shows cause → effect."',
        '4) Narrowing question: "Just people, or everything around them?"',
        '5) Definition (write it): environment = the land, weather, plants, and animals in an area',
        '6–8) Apply + Restate: "If a place is very dry, what might that change for people?" ... "Environment means…?"',
      ],
      hints: [
        'environment = cause (the reason)',
        'affected = caused a change',
        'where people could live = effect (the result)',
        'So the sentence says the environment caused a change in where people could live.',
        'Student answer: Everything around them.',
        'Student answer: [varies - could affect farming, water, living conditions]',
        'Student restates.',
      ],
      inferenceQuestion: 'If a place is very dry, what might that change for people?',
    },
    {
      word: 'savanna',
      definition: 'a parklike grassland with scattered trees that can survive dry seasons',
      exampleSentence: 'One important type of land in West Africa is the savanna. The savanna is a parklike grassland with scattered trees that can survive dry seasons.',
      tags: ['tier3', 'content', 'day2'],
      inquiryPrompts: [
        '1) Student reads target sentence: "One important type of land... is the savanna."',
        '2) Student reads clarifying sentence: "The savanna is a parklike grassland with scattered trees..."',
        '3) Sentence analysis: "First sentence tells us it\'s a type of land (category). Second sentence tells us what it\'s like (features)."',
        '4) Narrowing question: "Mostly forest or mostly grass?"',
        '5) Definition (write it): savanna = a parklike grassland with scattered trees that can survive dry seasons',
        '6–7) Apply + Restate',
      ],
      hints: [
        'category: type of land',
        'feature: grassland',
        'feature: scattered trees',
        'clue: survives dry seasons',
        'Student answer: Mostly grass.',
      ],
      inferenceQuestion: 'Mostly forest or mostly grass?',
    },
    {
      word: 'region',
      definition: 'a large area with shared features',
      exampleSentence: 'West Africa is a region of the African continent.',
      tags: ['tier3', 'content', 'day2'],
      inquiryPrompts: [
        '1) Student reads',
        '2) Hypothesis: "What do you think region might mean?"',
        '3) Sentence analysis: "This sentence shows part-to-whole. West Africa = the part. Of the African continent = the whole. Region = name for a large area that is part of something bigger."',
        '4) Narrowing question: "Small spot or large area?"',
        '5) Definition (write it): region = a large area with shared features',
        '6–7) Apply + Restate',
      ],
      hints: [
        'West Africa = the part',
        'of the African continent = the whole',
        'region = name for a large area that is part of something bigger',
        'Student answer: Large area.',
      ],
      inferenceQuestion: 'Small spot or large area?',
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
  const day2Questions: Array<Omit<ComprehensionQuestionDocument, 'weekId' | 'createdAt' | 'updatedAt'>> = [
    {
      day: 2,
      type: 'literal',
      prompt: 'What is a savanna?',
      orderIndex: 1,
      rubric: 'A parklike grassland with scattered trees that can survive dry seasons',
    },
    {
      day: 2,
      type: 'literal',
      prompt: 'What does the environment include?',
      orderIndex: 2,
      rubric: 'Land, weather, plants, and animals',
    },
    {
      day: 2,
      type: 'literal',
      prompt: 'What is a population?',
      orderIndex: 3,
      rubric: 'A group of people living in the same area',
    },
    {
      day: 2,
      type: 'literal',
      prompt: 'Name two natural resources found in West Africa.',
      orderIndex: 4,
      rubric: 'Gold and salt (fertile land also acceptable)',
    },
    {
      day: 2,
      type: 'inferential',
      prompt: 'Why did the environment affect where people could live?',
      orderIndex: 5,
      rubric: 'Because some places had rain/resources for farming and living, and others were too dry/difficult',
    },
  ];

  for (const question of day2Questions) {
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
