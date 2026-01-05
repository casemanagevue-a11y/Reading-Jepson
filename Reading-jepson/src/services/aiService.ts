/**
 * AI Service for Reading Application
 * 
 * Integrates with OpenAI API to provide:
 * - Reading level estimation
 * - Passage adjustment with vocabulary integration
 * - Comprehension question generation
 * - Inquiry question customization for vocabulary
 */

import type { 
  QuestionType 
} from '@/types/firestore'

// ============================================================================
// Configuration
// ============================================================================

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || ''
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent'

// ============================================================================
// Types
// ============================================================================

export interface ReadingLevelEstimate {
  grade: number // e.g., 6.5
  lexile?: string // e.g., "850L"
  fleschKincaid?: number
  confidence: 'high' | 'medium' | 'low'
  reasoning: string
}

export interface ComprehensionQuestion {
  type: QuestionType
  prompt: string
  rubric?: string
  orderIndex: number
}

export interface InquiryVocabData {
  word: string
  definition: string
  exampleSentence: string
  inquiryPrompts: string[]
  truthBites: string[]
  inferenceQuestion: string
}

export interface PassageAdjustmentParams {
  originalText: string
  targetReadingLevel?: string
  vocabWords: string[]
  affixes: string[]
  instructions?: string
}

export interface PassageAdjustmentResult {
  adjustedText: string
  wordCount: number
  vocabIntegrated: number
  affixesIntegrated: number
  changes: string[]
}

// ============================================================================
// Helper Functions
// ============================================================================

async function callGemini(messages: any[], temperature = 0.7, _responseFormat?: { type: 'json_object' }): Promise<string> {
  if (!GOOGLE_API_KEY) {
    throw new Error('Google API key not configured. Please add VITE_GOOGLE_API_KEY to your .env file.')
  }

  // Convert OpenAI message format to Gemini format
  const systemMessage = messages.find((m: any) => m.role === 'system')
  const userMessage = messages.find((m: any) => m.role === 'user')
  
  const combinedPrompt = systemMessage 
    ? `${systemMessage.content}\n\n${userMessage.content}`
    : userMessage.content

  const response = await fetch(`${GEMINI_API_URL}?key=${GOOGLE_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: combinedPrompt
        }]
      }],
      generationConfig: {
        temperature: temperature,
        maxOutputTokens: 2048
      }
    })
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(`Gemini API error: ${response.status} - ${errorData.error?.message || 'Unknown error'}`)
  }

  const data = await response.json()
  let text = data.candidates[0].content.parts[0].text
  
  // Strip markdown code fences if present (Gemini often wraps JSON in ```json ... ```)
  text = text.replace(/^```json\s*/i, '').replace(/\s*```$/, '').trim()
  
  return text
}

// ============================================================================
// Reading Level Estimation
// ============================================================================

export async function estimateReadingLevel(text: string): Promise<ReadingLevelEstimate> {
  const prompt = `Analyze the following passage and estimate its reading level.

Passage:
"""
${text}
"""

Consider:
- Sentence complexity and length
- Vocabulary difficulty
- Concept density
- Text structure

Respond with a JSON object containing:
{
  "grade": <number, e.g., 6.5>,
  "lexile": <string, e.g., "850L">,
  "fleschKincaid": <number>,
  "confidence": <"high" | "medium" | "low">,
  "reasoning": <string explaining your assessment>
}`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert in reading assessment and text complexity analysis.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.3, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Passage Adjustment with Vocabulary Integration
// ============================================================================

export async function adjustPassageWithVocab(params: PassageAdjustmentParams): Promise<PassageAdjustmentResult> {
  const { originalText, targetReadingLevel, vocabWords, affixes, instructions } = params

  const prompt = `Adjust the following passage to naturally incorporate the target vocabulary words and affixes while maintaining readability and coherence.

Original Passage:
"""
${originalText}
"""

Target Vocabulary Words:
${vocabWords.map(w => `- ${w}`).join('\n')}

Target Affixes to Feature:
${affixes.map(a => `- ${a}`).join('\n')}

${targetReadingLevel ? `Target Reading Level: ${targetReadingLevel}` : ''}
${instructions ? `Additional Instructions: ${instructions}` : ''}

Requirements:
1. Naturally integrate as many vocabulary words as possible (aim for all if feasible)
2. Use words containing the target affixes where appropriate
3. Maintain the core meaning and narrative flow
4. Keep sentences clear and appropriate for the reading level
5. The passage should feel natural, not forced

Respond with a JSON object:
{
  "adjustedText": <string, the revised passage>,
  "wordCount": <number>,
  "vocabIntegrated": <number of vocab words successfully integrated>,
  "affixesIntegrated": <number of affixes featured>,
  "changes": <array of strings describing major changes made>
}`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert educator skilled at adapting reading passages to include specific vocabulary while maintaining natural, engaging prose.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.7, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Comprehension Question Generation
// ============================================================================

export async function generateComprehensionQuestions(
  passageText: string,
  day: 3 | 4 | 5,
  count: { literal?: number; inferential?: number; mainIdea?: number } = {}
): Promise<ComprehensionQuestion[]> {
  
  const defaultCounts = {
    literal: count.literal ?? 3,
    inferential: count.inferential ?? 3,
    mainIdea: count.mainIdea ?? 1
  }

  const dayInstructions = day === 3
    ? `Generate ${defaultCounts.literal} literal questions and ${defaultCounts.inferential} inferential questions. Do NOT generate main idea questions for Day 3.`
    : day === 4
    ? `Generate ${defaultCounts.mainIdea} main idea question(s) and ${defaultCounts.inferential} cause/effect questions.`
    : `Generate ${defaultCounts.literal} literal questions and ${defaultCounts.inferential} inferential questions for assessment.`

  const prompt = `Generate comprehension questions for a 7th grade student with Developmental Language Disorder (DLD).

CRITICAL LANGUAGE REQUIREMENTS:
- Use simple, clear, direct language
- Use short sentences (under 15 words if possible)
- Use common, everyday words
- Avoid complex sentence structures
- Avoid double negatives
- One question = one concept
- Be concrete and specific

Passage:
"""
${passageText}
"""

${dayInstructions}

Question Types:
- LITERAL: Direct recall from text. Ask "What...", "Who...", "When...", "Where..."
- INFERENTIAL: Simple connections. Ask "Why did..." or "What caused..." (not "Why might..." or "What could...")

For each question provide:
- The question type
- The question prompt (simple, clear language for DLD student)
- A rubric (expected answer with key points)

Example of GOOD questions for DLD:
✓ "Who was Sundiata's father?" (literal)
✓ "What did Sundiata do after he won the battle?" (literal)
✓ "Why did Sundiata bring the Malinke people together?" (inferential)

Example of BAD questions (too complex):
✗ "What might have motivated Sundiata to unite the disparate factions?"
✗ "How could the establishment of trade routes have influenced subsequent development?"

Respond with JSON:
{
  "questions": [
    {
      "type": "literal" | "inferential" | "mainIdea" | "causeEffect",
      "prompt": <string - simple, clear language>,
      "rubric": <string - expected answer>,
      "orderIndex": <number, starting from 0>
    }
  ]
}`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert special education teacher who creates simple, clear comprehension questions for students with Developmental Language Disorder. You use short sentences, common words, and direct questions. You avoid complex language and academic jargon.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.7, { type: 'json_object' })
  const result = JSON.parse(response)
  return result.questions
}

// ============================================================================
// Inquiry Vocabulary Question Generation
// ============================================================================

const INQUIRY_TEMPLATE = `Teacher Inquiry Vocabulary Routine Template:

Structure:
1. Progressive reveal with 3-4 prompts that guide students toward the meaning
2. Each prompt includes a "truth-bite" - a small hint that increases clarity
3. Final inference question for students to articulate their understanding

Prompt Pattern:
- Start with observable clues in the context sentence
- Ask about word structure (roots, affixes, cognates)
- Guide toward connections and implications
- End with synthesis question

Truth-bite Pattern:
- Brief, factual statements
- No full definition
- Build progressively toward meaning`

export async function generateInquiryQuestions(
  word: string,
  definition: string,
  exampleSentence: string
): Promise<InquiryVocabData> {
  
  const prompt = `Create an inquiry-based vocabulary routine for the word "${word}" following the progressive reveal method.

Word: ${word}
Definition: ${definition}
Context Sentence: ${exampleSentence}

${INQUIRY_TEMPLATE}

Example format (for a different word):
{
  "word": "bureaucracy",
  "definition": "A system of government officials who carry out rules",
  "exampleSentence": "The emperor relied on a bureaucracy that helped organize the government and keep it running.",
  "inquiryPrompts": [
    "Is this describing one helper or a group that helps?",
    "What does this group help with — government laws or farming?",
    "Does the emperor do everything by himself, or does this group assist?",
    "So, if a bureaucracy is a group that helps the government run, what might it mean?"
  ],
  "truthBites": [
    "bureaucracy is a group, not a single person",
    "they organize and support government functions",
    "bureaucracy assists leadership",
    "a bureaucracy is a system of officials"
  ],
  "inferenceQuestion": "Based on the clues, what do you think bureaucracy means?"
}

Now create the inquiry routine for "${word}".
Respond with JSON matching this exact format.`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert in vocabulary instruction using inquiry-based methods. You create thought-provoking questions that guide students to discover word meanings through context and word structure.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.8, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Batch Operations
// ============================================================================

export async function generateInquiryQuestionsForVocabList(
  vocabList: Array<{ word: string; definition: string; exampleSentence: string }>
): Promise<InquiryVocabData[]> {
  const results: InquiryVocabData[] = []
  
  // Process in batches to avoid rate limits
  for (const vocab of vocabList) {
    try {
      const inquiry = await generateInquiryQuestions(
        vocab.word,
        vocab.definition,
        vocab.exampleSentence
      )
      results.push(inquiry)
      
      // Small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 500))
    } catch (error) {
      console.error(`Error generating inquiry for ${vocab.word}:`, error)
      // Continue with other words
    }
  }
  
  return results
}

// ============================================================================
// Utility: Simple Reading Level Calculation (Fallback)
// ============================================================================

/**
 * Calculate Flesch-Kincaid Grade Level (fallback if AI is unavailable)
 */
export function calculateFleschKincaidGrade(text: string): number {
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
  const words = text.split(/\s+/).filter(w => w.length > 0).length
  const syllables = countSyllables(text)
  
  if (sentences === 0 || words === 0) return 0
  
  const grade = 0.39 * (words / sentences) + 11.8 * (syllables / words) - 15.59
  return Math.max(0, Math.round(grade * 10) / 10)
}

function countSyllables(text: string): number {
  const words = text.toLowerCase().split(/\s+/)
  let count = 0
  
  for (const word of words) {
    const cleaned = word.replace(/[^a-z]/g, '')
    if (cleaned.length === 0) continue
    
    // Simple syllable counting algorithm
    const vowels = cleaned.match(/[aeiouy]+/g)
    count += vowels ? vowels.length : 1
    
    // Adjust for silent 'e'
    if (cleaned.endsWith('e')) count--
    if (count === 0) count = 1
  }
  
  return count
}

// ============================================================================
// Vocabulary Clarifications (Part of Speech, Examples, Non-Examples)
// ============================================================================

export interface VocabClarificationResult {
  exampleSentence: string
  partOfSpeech: string
  whatItIs: string
  whatItIsNot: string
}

export async function generateVocabClarifications(
  word: string,
  definition: string
): Promise<VocabClarificationResult> {
  const prompt = `Generate vocabulary clarifications for teaching the word "${word}" to students with developmental language disorder.

Word: ${word}
Definition: ${definition}

CRITICAL: The FIRST item in "What it IS" and "What it IS NOT" must be the clearest, most concise statement. This is what students will focus on.

Please generate:
1. A simple, clear example sentence using the word (one short sentence, literal meaning)
2. Part of speech (noun, verb, adjective, adverb, etc.)
3. What it IS: Start with ONE clear, simple sentence that captures the core meaning. Then add 2-3 supporting items (synonyms, examples, comparisons).
4. What it IS NOT: Start with ONE clear, simple statement of what it's NOT. Then add 2-3 supporting items (opposites, differences, misconceptions).

Example format:
{
  "exampleSentence": "The dynasty ruled China for hundreds of years.",
  "partOfSpeech": "noun",
  "whatItIs": "A family that rules a country for many years. Similar to: monarchy, royal family. Examples: Ming Dynasty, Tudor Dynasty. Power passes from parent to child",
  "whatItIsNot": "Not just one king or queen ruling alone. Different from: elected presidents, democracy. Not a government where people vote for leaders"
}

REMEMBER: Make the FIRST item in each section the clearest and most direct - that's what students will read and remember.
Respond with JSON matching this exact format.`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert vocabulary teacher specializing in supporting students with developmental language disorder. You use simple, concrete language and keep explanations brief and clear.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.7, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Sentence Structure Analysis (Day 2: Words Working Together)
// ============================================================================

export interface SentenceSortingResult {
  wordPhraseCards: string[] // Cut-apart cards
  sortingKey: {
    whoWhat: string[] // Who or what? (noun-subject)
    doingDid: string[] // Doing or did? (verb-predicate)
    whichWhatKind: string[] // Which one, what kind, how many? (adjective-modifies noun)
    whereWhenHowWhy: string[] // Where, when, how, why? (adverb-modifies verb)
    relationship: string[] // What is the relationship? (prepositions)
    glue: string[] // What connects? (conjunctions)
  }
}

export async function generateSentenceSorting(
  _word: string,
  sentence: string
): Promise<SentenceSortingResult> {
  const prompt = `Analyze this sentence for a "Words Working Together" syntax lesson (Nancy Hennessy / Reading Comprehension Blueprint). 

Goal: Sentence comprehension through functional syntax analysis.

Sentence: "${sentence}"

Break the sentence into word/phrase cards. Every single word must be assigned to one of these 6 functional categories:

1. whoWhat: (noun-subject) Who or what?
   👉 Focus: The actors or things the sentence is about.
2. doingDid: (verb-predicate) Doing or did?
   👉 Focus: The action or state of being.
3. whichWhatKind: (adjective-modifies the noun) Which one, what kind, how many?
   👉 Focus: Describing the nouns (Include: the, a, an, this, his, her).
4. whereWhenHowWhy: (adverb-modifies the verb) Where, when, how, why?
   👉 Focus: Circumstances of the action.
5. relationship: (preposition) What is the relationship between the words?
   👉 Focus: Direction, location, or connection (e.g., through, of, about, from, as).
6. glue: (conjunctions) What is connected or needs to be glued together?
   👉 Focus: Connectors (e.g., and, or, but).

INSTRUCTIONS:
- Break the sentence into functional units (cards).
- Every word must be accounted for.
- Map every card to one of the 6 JSON keys below.
- Keep prepositional phrases together when they function as a unit.
- Articles and determiners go with "whichWhatKind" (they describe/limit nouns).

EXAMPLE:
Sentence: "The griots told many a tale about his achievements."
Cards: ["The", "griots", "told", "many", "a", "tale", "about", "his", "achievements"]
Sorting Key:
- whoWhat: ["griots", "tale", "achievements"]
- doingDid: ["told"]
- whichWhatKind: ["The", "many", "a", "his"]
- whereWhenHowWhy: []
- relationship: ["about"]
- glue: []

Respond with JSON:
{
  "wordPhraseCards": [array of all word/phrase chunks],
  "sortingKey": {
    "whoWhat": [array of strings],
    "doingDid": [array of strings],
    "whichWhatKind": [array of strings],
    "whereWhenHowWhy": [array of strings],
    "relationship": [array of strings],
    "glue": [array of strings]
  }
}`

  const messages = [
    {
      role: 'system',      content: 'You are an expert in sentence structure analysis and the Nancy Hennessy Reading Comprehension Blueprint method. You help teachers create effective sentence sorting activities.'

    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.3, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Main Idea Answer Generation with Supporting Details
// ============================================================================

export interface MainIdeaAnswerResult {
  mainIdea: string // The main idea statement
  supportingDetails: string[] // 2-5 supporting details from the text
}

export async function generateMainIdeaAnswer(
  passageText: string
): Promise<MainIdeaAnswerResult> {
  const prompt = `Analyze this passage and generate a main idea answer with supporting details for a teacher answer key.

Passage:
"""
${passageText}
"""

Generate:
1. A clear main idea statement (1-2 sentences)
2. 2-5 supporting details from the text that prove the main idea

For a 7th grade student with developmental language disorder, the answer should be:
- Clear and concise
- Use vocabulary from the passage
- Each detail should be a specific fact or event from the text

Example format:
{
  "mainIdea": "The passage explains how Sundiata Keita founded the Mali Empire and became a legendary ruler.",
  "supportingDetails": [
    "Sundiata led Mali to victory in the Battle of Kirina in 1235",
    "He brought the Malinke people together and formed a strong government",
    "He protected trade routes and helped farming begin again after years of war",
    "He allowed people to practice different religions and offered freedom to enslaved people",
    "Griots told stories about his achievements and people called him the Lion King"
  ]
}

Respond with JSON matching this exact format.`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert reading teacher who creates clear, evidence-based comprehension answers for students with language disorders.'
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.5, { type: 'json_object' })
  return JSON.parse(response)
}

// ============================================================================
// Affix Word Detection and Breakdown
// ============================================================================

export interface AffixWordBreakdown {
  word: string // The full word (e.g., "unhappy")
  affix: string // The affix part (e.g., "un-")
  root: string // The root/base word (e.g., "happy")
  affixMeaning: string // Meaning of the affix (e.g., "not")
  rootMeaning: string // Meaning of the root word (e.g., "feeling good")
  combinedMeaning?: string // Combined meaning of affix + root (e.g., "not feeling good")
}

export interface AffixWordDetectionResult {
  words: AffixWordBreakdown[] // Up to 3 words with breakdowns
  foundInText: number // Number of words found in the passage
  generated: number // Number of words generated by AI
  affixMeaning: string // The correct affix meaning from database (or fallback to provided)
}

export interface MorphemeData {
  affix: string
  kind: 'prefix' | 'suffix' | 'root'
  meaning: string[]
  examples?: string[]
}

export interface EtymologyData {
  word: string
  hasAffix: boolean
  affixType?: 'prefix' | 'suffix'
  origin?: string
  relatedTerms?: string[]
}

export async function detectAndBreakdownAffixWords(
  passageText: string,
  affix: string,
  affixKind: 'prefix' | 'suffix' | 'root',
  affixMeaning: string
): Promise<AffixWordDetectionResult> {
  // Import morpheme lookup (dynamic import to avoid circular dependencies)
  const morphemeLookup = await import('@/utils/morphemeLookup')
  
  // Get accurate affix meaning from morphemes database
  const dbAffixMeaning = await morphemeLookup.getAffixMeaning(affix, affixKind)
  const finalAffixMeaning = dbAffixMeaning || affixMeaning
  const meaningSource = dbAffixMeaning ? ' (from morphemes database - use this exact meaning)' : ''
  
  const prompt = `Find words containing the affix "${affix}" (${affixKind}) in the passage below. For each word found, break it down into the affix and root, and provide meanings.

Passage:
"""
${passageText}
"""

Affix: "${affix}"
Affix Type: ${affixKind}
Affix Meaning: "${finalAffixMeaning}"${meaningSource}

CRITICAL VALIDATION RULES - READ CAREFULLY:
⚠️ FALSE PREFIX/SUFFIX DETECTION - THIS IS CRITICAL:
- If removing the affix creates a NON-WORD or the affix is not truly functioning, it's a FALSE affix - DO NOT INCLUDE IT
- The root word MUST be a recognizable English word that exists independently AND can be removed cleanly
- Examples of FALSE affixes to REJECT (DO NOT INCLUDE THESE):
  * "exile" → "ex-" + "ile" ❌ REJECT (ile is not a word)
  * "exchange" → "ex-" + "change" ❌ REJECT (ex- in "exchange" is NOT the prefix meaning "out" - it's a false affix)
  * "excite" → "ex-" + "cite" ❌ REJECT (ex- here is not functioning as "out")
  * "expect" → "ex-" + "pect" ❌ REJECT (pect is not a word)
  * "express" → "ex-" + "press" ❌ REJECT (ex- here is not functioning as "out")
  * "damage" → "dam" + "-age" ❌ REJECT (dam is not a word - this is a false suffix)
  * "manage" → "man" + "-age" ❌ REJECT (man is not the root here - false suffix)
  * "lineage" → "line" + "-age" ❌ REJECT (-age in "lineage" is NOT the separable suffix)
  * "heritage" → "herit" + "-age" ❌ REJECT (herit is not a word)
  * "cottage" → "cott" + "-age" ❌ REJECT (cott is not a word)
- Examples of CORRECT affixes to ACCEPT (ONLY INCLUDE THESE):
  * "ex-king" → "ex-" + "king" ✅ ACCEPT (king is a real word, ex- means "former/out")
  * "ex-wife" → "ex-" + "wife" ✅ ACCEPT (wife is a real word, ex- means "former/out")
  * "usage" → "use" + "-age" ✅ ACCEPT (use is a real word, -age means "act of")
  * "unhappy" → "un-" + "happy" ✅ ACCEPT (happy is a real word, un- means "not")
  * "package" → "pack" + "-age" ✅ ACCEPT (pack is a real word, -age means "thing")

Requirements:
1. Find words in the passage that contain this affix AND where the affix is FUNCTIONING as a true prefix/suffix
2. For each word, VALIDATE the breakdown:
   - Remove the affix from the word
   - Check: Does the remaining part form a REAL, RECOGNIZABLE English word?
   - If NO → REJECT this word (it's a false affix)
   - If YES → Proceed with breakdown
3. For each VALID word, break it down:
   - Identify the affix part
   - Identify the root/base word part (must be a real English word that can stand alone)
   - Provide the meaning of the affix (use: "${finalAffixMeaning}")
   - DO NOT provide root meanings - the system will look them up from authoritative sources
   - Set rootMeaning to an empty string "" - we will fill it in from the database
4. If you find fewer than 3 VALID words, generate additional example words that:
   - Use the same affix "${affix}" as a TRUE, FUNCTIONING affix
   - The root word MUST be a common, recognizable English word (e.g., "happy", "fair", "able", "help", "kind", "like", "do", "make", "see", "know", "think", "feel", "work", "play", "read", "write", "teach", "learn", "care", "love", "hope", "try", "use", "take", "give", "come", "go", "say", "tell", "show", "find", "get", "put", "turn", "move", "change", "start", "stop", "end", "begin", "live", "die", "win", "lose", "run", "walk", "talk", "look", "listen", "watch", "eat", "drink", "sleep", "wake", "open", "close", "clean", "dirty", "big", "small", "good", "bad", "new", "old", "hot", "cold", "fast", "slow", "high", "low", "right", "wrong", "true", "false")
   - The root word must exist independently and have its own meaning
   - Are appropriate for 7th grade reading level
5. Return EXACTLY 3 VALID words maximum (only words where the affix is truly functioning)

Example format for a prefix "un-" meaning "not":
{
  "words": [
    {
      "word": "unhappy",
      "affix": "un-",
      "root": "happy",
      "affixMeaning": "not",
      "rootMeaning": ""
    },
    {
      "word": "unfair",
      "affix": "un-",
      "root": "fair",
      "affixMeaning": "not",
      "rootMeaning": ""
    },
    {
      "word": "unable",
      "affix": "un-",
      "root": "able",
      "affixMeaning": "not",
      "rootMeaning": ""
    }
  ],
  "foundInText": 2,
  "generated": 1
}

For a suffix "-tion" meaning "the act or result of":
{
  "words": [
    {
      "word": "celebration",
      "affix": "-tion",
      "root": "celebrate",
      "affixMeaning": "the act or result of",
      "rootMeaning": ""
    }
  ],
  "foundInText": 1,
  "generated": 2
}

NOTE: Always set rootMeaning to "" (empty string) - the system will look it up.

IMPORTANT VALIDATION RULES:
- For prefixes: The affix should be at the START of the word, AND removing it must leave a real English word
- For suffixes: The affix should be at the END of the word, AND removing it must leave a real English word
- For roots: The root can be anywhere in the word, but must be identifiable as a morpheme
- CRITICAL: If removing the affix creates a non-word (like "ile" from "exile" or "dam" from "damage"), REJECT that word
- DO NOT provide root meanings in your response - set rootMeaning to "" (empty string)
- The system will look up root meanings from authoritative sources (morphemes database and common words dictionary)
- When generating additional words, ALWAYS use the most common, familiar root words that students already know from everyday language
- Prioritize high-frequency root words to ensure students recognize and understand the base word before learning the affixed form
- The affix meaning provided above comes from a curated morphemes database - use it exactly as provided
- DO NOT include words where the affix is not truly functioning (false prefix/suffix cases)
- CRITICAL: If you're unsure whether a word is a false affix, REJECT it - only include words you're 100% certain about

Respond with JSON matching this exact format.`

  const messages = [
    {
      role: 'system',
      content: `You are an expert in morphology and word structure analysis. You help teachers identify and break down words containing specific affixes for vocabulary instruction.

CRITICAL: You must distinguish between TRUE affixes (where the affix can be removed to reveal a real English word) and FALSE affixes (where removing the affix creates a non-word or destroys meaning).

Examples of FALSE affixes to REJECT:
- "exile" → "ex-" + "ile" ❌ (ile is not a word)
- "exchange" → "ex-" + "change" ❌ (ex- here is not functioning as "out")
- "damage" → "dam" + "-age" ❌ (dam is not the root meaning here)
- "manage" → "man" + "-age" ❌ (man is not the root)

Examples of TRUE affixes to ACCEPT:
- "ex-king" → "ex-" + "king" ✅ (king is a real word)
- "usage" → "use" + "-age" ✅ (use is a real word)
- "unhappy" → "un-" + "happy" ✅ (happy is a real word)

Always validate: After removing the affix, is the remaining part a recognizable English word? If not, REJECT it.`
    },
    {
      role: 'user',
      content: prompt
    }
  ]

  const response = await callGemini(messages, 0.5, { type: 'json_object' })
  const result = JSON.parse(response)
  
  // Validate and filter out false prefixes/suffixes
  const validWords: AffixWordBreakdown[] = []
  
  // Get examples from morphemes database to validate against
  const dbExamples = await morphemeLookup.getAffixExamples(affix, affixKind)
  const dbExamplesLower = dbExamples.map(e => e.toLowerCase())
  
  for (const word of result.words || []) {
    const wordLower = word.word.toLowerCase()
    
    // First check: Is this word in the morphemes database examples? (strong signal it's valid)
    const isInDatabase = dbExamplesLower.includes(wordLower)
    
    // Second check: Validate the breakdown structure
    const isValidStructure = validateWordBreakdown(word.word, word.affix, word.root, affixKind)
    
    // CRITICAL: Only accept if BOTH conditions are met:
    // 1. It's in the database examples (strongest signal), OR
    // 2. Structure is valid AND root is a real English word
    // We're being conservative - reject if unsure
    const shouldAccept = isInDatabase || (isValidStructure && isValidEnglishWord(word.root?.toLowerCase() || ''))
    
    if (shouldAccept) {
      // Try to get root meaning from database FIRST
      let rootMeaning: string | null = null
      if (word.root) {
        rootMeaning = await morphemeLookup.findRootMeaning(word.root)
        
        // If not in database, try common words dictionary
        if (!rootMeaning) {
          rootMeaning = morphemeLookup.getCommonWordMeaning(word.root)
        }
        
        // If still not found, DO NOT use AI-generated meaning - it's unreliable
        // Instead, use a placeholder that indicates we need to look it up
        if (!rootMeaning) {
          console.warn(`No root meaning found for "${word.root}" in database or common words - using placeholder`)
          rootMeaning = `[meaning for "${word.root}" - check dictionary]`
        }
      }
      
      // Ensure rootMeaning is never null
      const finalRootMeaning = rootMeaning || `[meaning for "${word.root || 'unknown'}" - check dictionary]`
      
      // Get etymology data and validate with Gemini to generate combined meaning
      const etymologyLookup = await import('@/utils/etymologyLookup')
      const etymologyEntries = await etymologyLookup.getWordEtymology(word.word)
      const hasRealAffixRel = affixKind !== 'root' 
        ? await etymologyLookup.hasRealAffix(word.word, affix, affixKind as 'prefix' | 'suffix')
        : true // For roots, assume valid if no etymology data contradicts
      
      const etymologyData: EtymologyData = {
        word: word.word,
        hasAffix: hasRealAffixRel,
        affixType: affixKind === 'root' ? undefined : affixKind as 'prefix' | 'suffix',
        relatedTerms: etymologyEntries.map(e => e.related_term || '').filter(Boolean)
      }
      
      const morphemeData: MorphemeData = {
        affix: affix,
        kind: affixKind,
        meaning: await morphemeLookup.getAffixMeanings(affix, affixKind) || [finalAffixMeaning],
        examples: dbExamples
      }
      
      // Validate and get combined meaning from Gemini
      let combinedMeaning: string | undefined
      try {
        const validation = await validateAffixBreakdown(
          word.word,
          word.affix,
          affixKind,
          finalAffixMeaning,
          word.root,
          finalRootMeaning,
          morphemeData,
          etymologyData
        )
        
        // Only use combined meaning if validation says it's correct or partially correct
        if ((validation.verdict === 'Correct' || validation.verdict === 'Partially Correct') && validation.combinedMeaning) {
          combinedMeaning = validation.combinedMeaning
        }
      } catch (error) {
        console.warn(`Error validating word breakdown for "${word.word}":`, error)
        // Continue without combined meaning
      }
      
      validWords.push({
        word: word.word,
        affix: word.affix,
        root: word.root,
        affixMeaning: finalAffixMeaning, // Use database meaning if available
        rootMeaning: finalRootMeaning, // Only use database/common words, never AI-generated
        combinedMeaning: combinedMeaning // Generated by Gemini validation
      })
    } else {
      console.warn(`Rejected false affix: ${word.word} → ${word.affix} + ${word.root} (not in database and structure invalid)`)
    }
  }
  
  // Take up to 3 valid words
  const finalWords = validWords.slice(0, 3)
  
  return {
    words: finalWords,
    foundInText: result.foundInText || 0,
    generated: result.generated || 0,
    affixMeaning: finalAffixMeaning // Return the correct affix meaning from database
  }
}

/**
 * Validate that a word breakdown is correct (not a false prefix/suffix)
 * Returns true ONLY if the root is a recognizable English word that can be removed from the word
 */
function validateWordBreakdown(
  fullWord: string,
  affix: string,
  root: string,
  affixKind: 'prefix' | 'suffix' | 'root'
): boolean {
  if (!root || root.length < 2) {
    return false // Root too short to be a real word
  }
  
  const rootLower = root.toLowerCase().trim()
  const fullWordLower = fullWord.toLowerCase().replace(/[-]/g, '') // Remove hyphens for comparison
  const affixClean = affix.replace(/[-]/g, '').toLowerCase()
  
  // STEP 1: Check against known FALSE patterns FIRST (reject these immediately)
  const falsePatterns = [
    // False ex- cases (ex- prefix meaning "out" doesn't apply here)
    { root: 'ile', word: 'exile' },
    { root: 'change', word: 'exchange' }, // ex- in exchange is NOT the prefix meaning "out"
    { root: 'cite', word: 'excite' },
    { root: 'pect', word: 'expect' },
    { root: 'press', word: 'express' }, // ex- in express is NOT the prefix meaning "out"
    { root: 'tend', word: 'extend' },
    { root: 'tract', word: 'extract' },
    
    // False -age cases (-age suffix doesn't apply here)
    { root: 'dam', word: 'damage' }, // "dam" is not a word
    { root: 'man', word: 'manage' }, // "man" is not the root here
    { root: 'line', word: 'lineage' }, // "lineage" -age is NOT the separable suffix
    { root: 'herit', word: 'heritage' },
    { root: 'cott', word: 'cottage' },
    { root: 'marri', word: 'marriage' },
    { root: 'carri', word: 'carriage' },
  ]
  
  // Check against known false patterns (reject exact matches)
  for (const pattern of falsePatterns) {
    if (fullWordLower === pattern.word.toLowerCase() && rootLower === pattern.root.toLowerCase()) {
      console.warn(`Rejected false affix pattern: ${fullWord} → ${affix} + ${root}`)
      return false
    }
  }
  
  // STEP 2: Validate structure - root must be removable and form a real word
  if (affixKind === 'prefix') {
    // For prefix: word must start with affix, and removing it must leave a real word
    if (!fullWordLower.startsWith(affixClean)) {
      return false // Word doesn't start with the prefix
    }
    
    // Remove prefix and check if remainder is the root
    const afterPrefix = fullWordLower.substring(affixClean.length)
    
    // For hyphenated words like "ex-king", check if root matches after hyphen
    if (fullWord.includes('-')) {
      const parts = fullWord.toLowerCase().split('-')
      if (parts.length >= 2 && parts[0] === affixClean && parts.slice(1).join('') === rootLower) {
        // This is a valid hyphenated prefix (e.g., "ex-king")
        return true
      }
    }
    
    // Check if after removing prefix, we get the root word
    if (afterPrefix === rootLower) {
      // Root is a valid word - check if it's in common words or looks valid
      return isValidEnglishWord(rootLower)
    }
    
    // If root doesn't match exactly, it's probably invalid
    return false
    
  } else if (affixKind === 'suffix') {
    // For suffix: word must end with affix, and removing it must leave a real word
    if (!fullWordLower.endsWith(affixClean)) {
      return false // Word doesn't end with the suffix
    }
    
    // Remove suffix and check if remainder is the root
    const beforeSuffix = fullWordLower.substring(0, fullWordLower.length - affixClean.length)
    
    // Handle spelling changes (e.g., "use" → "us" in "usage")
    // Check if root matches exactly or with common spelling variations
    if (beforeSuffix === rootLower) {
      return isValidEnglishWord(rootLower)
    }
    
    // Check common spelling variations
    const spellingVariations = [
      rootLower, // exact match
      rootLower + 'e', // "use" → "usage" (drop e)
      rootLower.slice(0, -1), // "use" → "us" (drop last letter)
    ]
    
    for (const variation of spellingVariations) {
      if (beforeSuffix === variation || beforeSuffix.endsWith(variation)) {
        return isValidEnglishWord(rootLower)
      }
    }
    
    // If root doesn't match, it's probably invalid
    return false
  }
  
  // For roots, just check if it's a valid word
  return isValidEnglishWord(rootLower)
}

/**
 * Check if a string is likely a valid English word
 * Uses common word list and basic heuristics
 */
function isValidEnglishWord(word: string): boolean {
  const wordLower = word.toLowerCase().trim()
  
  // Must be at least 2 characters
  if (wordLower.length < 2) {
    return false
  }
  
  // Must contain vowels (most English words do)
  if (!/[aeiouy]/.test(wordLower)) {
    return false
  }
  
  // Check against common words list (high confidence)
  const commonRoots = [
    'king', 'wife', 'use', 'pack', 'happy', 'fair', 'able', 'help', 'kind', 'like',
    'do', 'make', 'see', 'know', 'think', 'feel', 'work', 'play', 'read', 'write',
    'teach', 'learn', 'care', 'love', 'hope', 'try', 'take', 'give', 'come', 'go',
    'say', 'tell', 'show', 'find', 'get', 'put', 'turn', 'move', 'change', 'start',
    'stop', 'end', 'begin', 'live', 'die', 'win', 'lose', 'run', 'walk', 'talk',
    'look', 'listen', 'watch', 'eat', 'drink', 'sleep', 'wake', 'open', 'close',
    'clean', 'dirty', 'big', 'small', 'good', 'bad', 'new', 'old', 'hot', 'cold',
    'fast', 'slow', 'high', 'low', 'right', 'wrong', 'true', 'false'
  ]
  
  if (commonRoots.includes(wordLower)) {
    return true
  }
  
  // For other words, be more conservative - only accept if it looks like a real word
  // Reject obvious non-words
  if (wordLower.length < 3) {
    return false // Too short to be confident
  }
  
  // Reject words with too many consonants in a row (unlikely to be real words)
  if (/[bcdfghjklmnpqrstvwxyz]{4,}/i.test(wordLower)) {
    return false
  }
  
  // If we can't determine, default to REJECTING (be conservative)
  // This prevents false affixes from being accepted
  return false
}

// ============================================================================
// Affix Word Validation and Combined Meaning Generation
// ============================================================================

export interface AffixValidationResult {
  verdict: 'Correct' | 'Incorrect' | 'Partially Correct' | 'Ambiguous'
  reason: string
  combinedMeaning?: string // Only if applicable
  correctBreakdown?: {
    affix: string
    affixMeaning: string
    root: string
    rootMeaning: string
  }
}

export interface MorphemeData {
  affix: string
  kind: 'prefix' | 'suffix' | 'root'
  meaning: string[]
  examples?: string[]
}

export interface EtymologyData {
  word: string
  hasAffix: boolean
  affixType?: 'prefix' | 'suffix'
  origin?: string
  relatedTerms?: string[]
}

/**
 * Validate word breakdown and generate combined meaning using morphemes and etymology data
 */
export async function validateAffixBreakdown(
  word: string,
  affix: string,
  affixKind: 'prefix' | 'suffix' | 'root',
  studentAffixMeaning: string,
  root: string,
  studentRootMeaning: string,
  morphemeData: MorphemeData,
  etymologyData?: EtymologyData
): Promise<AffixValidationResult> {
  const systemPrompt = `You are an educational linguistics assistant.

You MUST follow these rules:
1. Treat the provided morpheme dataset as authoritative for meanings of prefixes, suffixes, and roots.
2. Treat the provided etymology dataset as authoritative for determining whether a word truly uses an affix or is a false affix case.
3. Do NOT use outside knowledge or guess.
4. If the data is missing or ambiguous, say "This word is ambiguous" and explain why.
5. Do NOT invent roots, affixes, or meanings.
6. Explain results in clear, student-friendly language (grade 5–8).
7. Never contradict the datasets.
8. Only generate a combined meaning if the etymology data confirms a real affix relationship.
9. Generate combined meanings by logically combining the root meaning and affix meaning.
10. If a combined meaning would be misleading or unnatural, say so.
11. Do not invent historical meanings.

If the provided data does not explicitly support a claim, do not accept it.`

  const userPrompt = `Analyze the following word using ONLY the provided data.

Word: "${word}"

Student analysis:
- Affix: "${affix}"
- Affix type: ${affixKind}
- Affix meaning (student): "${studentAffixMeaning}"
- Root: "${root}"
- Root meaning (student): "${studentRootMeaning}"

Authoritative morpheme data:
${JSON.stringify(morphemeData, null, 2)}

Authoritative etymology data:
${etymologyData ? JSON.stringify(etymologyData, null, 2) : 'No etymology data available for this word.'}

Tasks:
1. Determine whether the affix is a real affix in this word.
2. Determine whether the student's affix meaning matches the authoritative meaning.
3. Determine whether the root is valid for this word.
4. Decide if this is a true affix case or a false affix case.
5. If it is a true affix case, generate a combined meaning by combining the root meaning and affix meaning.
6. Explain the result clearly and briefly.

Output format (STRICT JSON):
{
  "verdict": "Correct" | "Incorrect" | "Partially Correct" | "Ambiguous",
  "reason": "<1-3 sentences explaining the verdict>",
  "combinedMeaning": "<combined meaning only if applicable, otherwise omit>",
  "correctBreakdown": {
    "affix": "<correct affix>",
    "affixMeaning": "<correct affix meaning>",
    "root": "<correct root>",
    "rootMeaning": "<correct root meaning>"
  }
}`

  const messages = [
    {
      role: 'system',
      content: systemPrompt
    },
    {
      role: 'user',
      content: userPrompt
    }
  ]

  const response = await callGemini(messages, 0.3, { type: 'json_object' })
  return JSON.parse(response)
}

export default {
  estimateReadingLevel,
  adjustPassageWithVocab,
  generateComprehensionQuestions,
  generateInquiryQuestions,
  generateInquiryQuestionsForVocabList,
  calculateFleschKincaidGrade,
  generateVocabClarifications,
  generateSentenceSorting,
  generateMainIdeaAnswer,
  detectAndBreakdownAffixWords,
  validateAffixBreakdown
}




