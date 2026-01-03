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
  day: 2 | 4 | 5,
  count: { literal?: number; inferential?: number; mainIdea?: number } = {}
): Promise<ComprehensionQuestion[]> {
  
  const defaultCounts = {
    literal: count.literal ?? 3,
    inferential: count.inferential ?? 3,
    mainIdea: count.mainIdea ?? 1
  }

  const dayContext = day === 2 
    ? 'first reading comprehension (focus on basic understanding)'
    : day === 4
    ? 'deeper analysis (focus on main idea and supporting details)'
    : 'Friday assessment (comprehensive evaluation)'

  const prompt = `Generate comprehension questions for the following passage. This is for ${dayContext}.

Passage:
"""
${passageText}
"""

Generate:
- ${defaultCounts.literal} literal questions (direct recall from text)
- ${defaultCounts.inferential} inferential questions (require making connections and inferences)
- ${defaultCounts.mainIdea} main idea question(s) (focus on central theme/purpose)

For each question, provide:
- The question type
- The question prompt (clear, grade-appropriate)
- A rubric for evaluating answers (what key points should be included)

Respond with a JSON object:
{
  "questions": [
    {
      "type": "literal" | "inferential" | "mainIdea",
      "prompt": <string>,
      "rubric": <string>,
      "orderIndex": <number, starting from 0>
    }
  ]
}`

  const messages = [
    {
      role: 'system',
      content: 'You are an experienced reading teacher skilled at creating thought-provoking comprehension questions aligned to grade-level standards.'
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
    whoWhat: string[] // Who or what? (Noun-Subject)
    isWasDoing: string[] // Is/was doing or happening? (Verb)
    whichWhatKind: string[] // Which one, what kind, how many? (Adjective)
    toWhatToWhom: string[] // To what? To whom? (Object of verb)
    whenWhereWhyHow: string[] // When, where, why, how? (Adverb)
  }
}

export async function generateSentenceSorting(
  word: string,
  sentence: string
): Promise<SentenceSortingResult> {
  const prompt = `Analyze this sentence for a Day 2 "Words Working Together" lesson (Nancy Hennessy / Reading Comprehension Blueprint style).

Target Word: ${word}
Sentence: "${sentence}"

Break the sentence into word/phrase cards that students will sort into a 5-column table to help them understand sentence syntax for better comprehension.

Column Headers (with function-based questions):
A) Who or what? → Noun (usually the subject)
   👉 Names a person, place, thing, or idea
B) Is/was doing or happening? → Verb
   👉 Shows action or state of being
C) Which one, what kind, how many? → Adjective
   👉 Describes or limits a noun
D) To what? To whom? → Object of a verb (direct or indirect object)
   👉 Receives the action
E) When, where, why, how? → Adverb
   👉 Gives more information about the verb

INSTRUCTIONS:
1. Create word/phrase cards by breaking the sentence into meaningful chunks
   - Keep phrases together that function as a unit
   - Separate modifiers when they answer different questions
   - Keep prepositional phrases together if they function as adverbs
   
2. Provide the sorting key showing which cards go in which column

3. Cards should be sized to fit in table cells (not too long)

4. GOAL: Help students identify the syntax to understand what the sentence is about

EXAMPLE:
Sentence: "Sundiata later returned when his people asked for help."
Cards: ["Sundiata", "later", "returned", "when his people asked for help", "for help"]
Sorting Key:
- Who/What: ["Sundiata"]
- Is/Was Doing: ["returned", "asked"]
- Which/What Kind: []
- To What/To Whom: ["for help"]
- When/Where/Why/How: ["later", "when his people asked for help"]

Respond with JSON:
{
  "wordPhraseCards": [array of strings],
  "sortingKey": {
    "whoWhat": [array of strings],
    "isWasDoing": [array of strings],
    "whichWhatKind": [array of strings],
    "toWhatToWhom": [array of strings],
    "whenWhereWhyHow": [array of strings]
  }
}`

  const messages = [
    {
      role: 'system',
      content: 'You are an expert in sentence structure analysis and the Nancy Hennessy Reading Comprehension Blueprint method. You help teachers create effective sentence sorting activities for students with language disorders.'
    },
    {
      role: 'user',
      content: prompt
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
  generateSentenceSorting
}




