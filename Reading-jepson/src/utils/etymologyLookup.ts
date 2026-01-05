/**
 * Etymology Lookup Service
 * 
 * Uses etymology data to validate whether words truly use affixes
 * or are false affix cases (like "exile" where ex- is not a prefix)
 */

interface EtymologyEntry {
  term: string
  lang: string
  reltype: string
  related_term?: string
  related_lang?: string
  position?: number
}

// Cache for etymology data (loaded from CSV if available)
let etymologyCache: Map<string, EtymologyEntry[]> | null = null

/**
 * Load etymology data from CSV (if available)
 * Note: The CSV file would need to be hosted or converted to JSON
 */
async function loadEtymologyDatabase(): Promise<Map<string, EtymologyEntry[]>> {
  if (etymologyCache) {
    return etymologyCache
  }

  // For now, return empty map - can be populated when CSV is available
  // In production, you'd fetch the CSV and parse it
  etymologyCache = new Map()
  return etymologyCache
}

/**
 * Check if a word has a real affix relationship according to etymology
 */
export async function hasRealAffix(
  word: string,
  affix: string,
  affixKind: 'prefix' | 'suffix'
): Promise<boolean> {
  const db = await loadEtymologyDatabase()
  const wordLower = word.toLowerCase()
  
  // Check if word exists in etymology database
  const entries = db.get(wordLower) || []
  
  // Look for has_prefix or has_suffix relationships
  const reltype = affixKind === 'prefix' ? 'has_prefix' : 'has_suffix'
  
  for (const entry of entries) {
    if (entry.reltype === reltype && entry.related_term?.toLowerCase() === affix.toLowerCase()) {
      return true
    }
  }
  
  // If no data available, return null (unknown) rather than false
  // This allows the system to proceed with other validation
  return entries.length === 0 ? true : false // If no entries, assume valid (data not available)
}

/**
 * Get etymology information for a word
 */
export async function getWordEtymology(word: string): Promise<EtymologyEntry[]> {
  const db = await loadEtymologyDatabase()
  return db.get(word.toLowerCase()) || []
}

/**
 * Check if etymology data suggests a false affix
 * Returns true if etymology explicitly shows it's NOT a real affix
 */
export async function isFalseAffix(
  word: string,
  affix: string,
  affixKind: 'prefix' | 'suffix'
): Promise<boolean> {
  const entries = await getWordEtymology(word)
  
  if (entries.length === 0) {
    return false // No data, can't determine
  }
  
  // Check if word has the affix relationship
  const hasAffix = await hasRealAffix(word, affix, affixKind)
  
  // If etymology shows the word exists but doesn't have this affix relationship,
  // and the word contains the affix letters, it's likely a false affix
  if (!hasAffix && entries.length > 0) {
    const wordLower = word.toLowerCase()
    const affixClean = affix.replace(/[-]/g, '').toLowerCase()
    
    // Check if word contains the affix letters but etymology says it's not a real affix
    if (affixKind === 'prefix' && wordLower.startsWith(affixClean)) {
      return true // Word starts with affix letters but etymology says it's not a prefix
    }
    if (affixKind === 'suffix' && wordLower.endsWith(affixClean)) {
      return true // Word ends with affix letters but etymology says it's not a suffix
    }
  }
  
  return false
}

export default {
  loadEtymologyDatabase,
  hasRealAffix,
  getWordEtymology,
  isFalseAffix
}

