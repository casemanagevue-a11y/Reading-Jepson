/**
 * Morpheme Lookup Service
 * 
 * Uses the morphemes.json database to provide accurate affix and root definitions
 * instead of relying solely on AI generation.
 */

interface MorphemeForm {
  root: string // e.g., "un-", "-able", "-fess-"
  form: string // e.g., "un", "able", "fess"
  loc: 'prefix' | 'suffix' | 'embedded'
  attach_to?: string[]
  category?: string
  pos?: string
  type?: string
}

interface MorphemeEntry {
  forms: MorphemeForm[]
  meaning: string[] // Array of meanings
  origin?: string
  etymology?: string
  examples?: string[]
  theme?: string
}

type MorphemesDatabase = Record<string, MorphemeEntry>

let morphemesCache: MorphemesDatabase | null = null

/**
 * Load the morphemes database (cached after first load)
 */
async function loadMorphemesDatabase(): Promise<MorphemesDatabase> {
  if (morphemesCache) {
    return morphemesCache
  }

  try {
    const response = await fetch('/morphemes/morphemes.json')
    if (!response.ok) {
      throw new Error(`Failed to load morphemes.json: ${response.statusText}`)
    }
    const data = await response.json() as MorphemesDatabase
    morphemesCache = data
    return morphemesCache
  } catch (error) {
    console.error('Error loading morphemes database:', error)
    // Return empty object if file can't be loaded
    const empty: MorphemesDatabase = {}
    morphemesCache = empty
    return empty
  }
}

/**
 * Normalize affix form for lookup (remove hyphens, lowercase)
 */
function normalizeAffixForm(form: string): string {
  return form.replace(/[-]/g, '').toLowerCase()
}

/**
 * Find morpheme entry by affix form and location
 */
export async function findMorphemeEntry(
  affix: string,
  kind: 'prefix' | 'suffix' | 'root'
): Promise<MorphemeEntry | null> {
  const db = await loadMorphemesDatabase()
  const normalized = normalizeAffixForm(affix)
  
  // Try direct lookup first (with hyphens)
  const directKey = kind === 'prefix' ? `${affix}-` : kind === 'suffix' ? `-${affix}` : `-${affix}-`
  if (db[directKey]) {
    return db[directKey]
  }
  
  // Try without hyphens
  if (db[affix]) {
    return db[affix]
  }
  
  // Search through all entries for matching form
  for (const entry of Object.values(db)) {
    for (const form of entry.forms) {
      const formNormalized = normalizeAffixForm(form.form)
      const rootNormalized = normalizeAffixForm(form.root)
      
      // Check if location matches
      const locationMatch = 
        (kind === 'prefix' && form.loc === 'prefix') ||
        (kind === 'suffix' && form.loc === 'suffix') ||
        (kind === 'root' && form.loc === 'embedded')
      
      if (locationMatch && (formNormalized === normalized || rootNormalized.includes(normalized))) {
        return entry
      }
    }
  }
  
  return null
}

/**
 * Get the primary meaning for an affix from the morphemes database
 */
export async function getAffixMeaning(
  affix: string,
  kind: 'prefix' | 'suffix' | 'root'
): Promise<string | null> {
  const entry = await findMorphemeEntry(affix, kind)
  if (!entry || !entry.meaning || entry.meaning.length === 0) {
    return null
  }
  
  // Return the first (primary) meaning
  return entry.meaning[0]
}

/**
 * Get all meanings for an affix
 */
export async function getAffixMeanings(
  affix: string,
  kind: 'prefix' | 'suffix' | 'root'
): Promise<string[]> {
  const entry = await findMorphemeEntry(affix, kind)
  if (!entry || !entry.meaning) {
    return []
  }
  return entry.meaning
}

/**
 * Find root word meaning in the morphemes database
 * Searches for the root as both an embedded root and as a standalone word
 */
export async function findRootMeaning(rootWord: string): Promise<string | null> {
  const db = await loadMorphemesDatabase()
  const normalized = normalizeAffixForm(rootWord)
  
  // First, search for embedded roots that match
  for (const entry of Object.values(db)) {
    for (const form of entry.forms) {
      if (form.loc === 'embedded') {
        const formNormalized = normalizeAffixForm(form.form)
        if (formNormalized === normalized || normalized.includes(formNormalized)) {
          if (entry.meaning && entry.meaning.length > 0) {
            return entry.meaning[0]
          }
        }
      }
    }
  }
  
  // Second, search for the root as a key (standalone word entry)
  // Check exact match and variations
  const possibleKeys = [
    rootWord,
    rootWord.toLowerCase(),
    `-${rootWord}-`,
    `-${rootWord.toLowerCase()}-`,
    rootWord + '-',
    '-' + rootWord
  ]
  
  for (const key of possibleKeys) {
    if (db[key] && db[key].meaning && db[key].meaning.length > 0) {
      return db[key].meaning[0]
    }
  }
  
  // Third, search through all entries for forms that match the root word
  for (const entry of Object.values(db)) {
    for (const form of entry.forms) {
      const formNormalized = normalizeAffixForm(form.form)
      if (formNormalized === normalized) {
        if (entry.meaning && entry.meaning.length > 0) {
          return entry.meaning[0]
        }
      }
    }
  }
  
  // If not found in database, return null (don't make up meanings)
  return null
}

/**
 * Get root meaning from common English words dictionary
 * Only use for very common words that should have simple definitions
 */
export function getCommonWordMeaning(word: string): string | null {
  const commonWords: Record<string, string> = {
    // Common roots for affixes
    'pack': 'bundle or container',
    'use': 'to employ or utilize',
    'king': 'a male ruler',
    'wife': 'a married woman',
    'happy': 'feeling good or pleased',
    'fair': 'equal or just',
    'able': 'having the power or skill to do something',
    'help': 'to assist or aid',
    'kind': 'caring or gentle',
    'like': 'to enjoy or find pleasing',
    'do': 'to perform or carry out',
    'make': 'to create or produce',
    'see': 'to perceive with eyes',
    'know': 'to understand or be aware',
    'think': 'to use your mind',
    'feel': 'to experience emotion',
    'work': 'to do a job or task',
    'play': 'to engage in activity for fun',
    'read': 'to look at and understand written words',
    'write': 'to create text',
    'teach': 'to instruct or educate',
    'learn': 'to gain knowledge',
    'care': 'to be concerned about',
    'love': 'to have strong affection',
    'hope': 'to want something to happen',
    'try': 'to attempt',
    'take': 'to get or receive',
    'give': 'to provide or offer',
    'come': 'to move toward',
    'go': 'to move away',
    'say': 'to speak words',
    'tell': 'to communicate information',
    'show': 'to display or reveal',
    'find': 'to discover or locate',
    'get': 'to obtain',
    'put': 'to place',
    'turn': 'to rotate or change direction',
    'move': 'to change position',
    'change': 'to make different',
    'start': 'to begin',
    'stop': 'to end or halt',
    'end': 'the conclusion',
    'begin': 'to start',
    'live': 'to be alive',
    'die': 'to stop living',
    'win': 'to be victorious',
    'lose': 'to fail or be defeated',
    'run': 'to move quickly on foot',
    'walk': 'to move on foot',
    'talk': 'to speak',
    'look': 'to direct your eyes',
    'listen': 'to pay attention to sound',
    'watch': 'to observe',
    'eat': 'to consume food',
    'drink': 'to consume liquid',
    'sleep': 'to rest',
    'wake': 'to stop sleeping',
    'open': 'not closed',
    'close': 'shut',
    'clean': 'free from dirt',
    'dirty': 'not clean',
    'big': 'large in size',
    'small': 'not large',
    'good': 'of high quality',
    'bad': 'of low quality',
    'new': 'recently made',
    'old': 'not new',
    'hot': 'high temperature',
    'cold': 'low temperature',
    'fast': 'quick',
    'slow': 'not fast',
    'high': 'elevated',
    'low': 'not high',
    'right': 'correct',
    'wrong': 'incorrect',
    'true': 'correct or real',
    'false': 'not true'
  }
  
  const wordLower = word.toLowerCase().trim()
  return commonWords[wordLower] || null
}

/**
 * Get example words for an affix from the database
 */
export async function getAffixExamples(
  affix: string,
  kind: 'prefix' | 'suffix' | 'root'
): Promise<string[]> {
  const entry = await findMorphemeEntry(affix, kind)
  if (!entry || !entry.examples) {
    return []
  }
  return entry.examples
}

/**
 * Check if a word contains a known morpheme and get its breakdown
 */
export async function breakdownWordWithMorphemes(
  word: string,
  affix: string,
  affixKind: 'prefix' | 'suffix' | 'root'
): Promise<{
  affixMeaning: string | null
  root: string | null
  rootMeaning: string | null
} | null> {
  const normalizedWord = word.toLowerCase()
  const normalizedAffix = normalizeAffixForm(affix)
  
  // Get affix meaning from database
  const affixMeaning = await getAffixMeaning(affix, affixKind)
  
  // Try to extract root
  let root: string | null = null
  let rootMeaning: string | null = null
  
  if (affixKind === 'prefix') {
    // Remove prefix to get root
    if (normalizedWord.startsWith(normalizedAffix)) {
      root = word.substring(affix.length).toLowerCase()
      rootMeaning = await findRootMeaning(root)
    }
  } else if (affixKind === 'suffix') {
    // Remove suffix to get root
    if (normalizedWord.endsWith(normalizedAffix)) {
      root = word.substring(0, word.length - affix.length).toLowerCase()
      rootMeaning = await findRootMeaning(root)
    }
  } else {
    // For embedded roots, try to find the root in the word
    root = normalizedAffix
    rootMeaning = await findRootMeaning(root)
  }
  
  return {
    affixMeaning,
    root,
    rootMeaning
  }
}

export default {
  loadMorphemesDatabase,
  findMorphemeEntry,
  getAffixMeaning,
  getAffixMeanings,
  findRootMeaning,
  getAffixExamples,
  breakdownWordWithMorphemes,
  getCommonWordMeaning
}

