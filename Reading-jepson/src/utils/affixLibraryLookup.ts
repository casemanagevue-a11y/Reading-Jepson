/**
 * Affix Library Lookup Utility
 * 
 * Provides functions to look up affix data from the affixLibrary collection
 * and use it for generating word breakdowns instead of AI generation.
 */

import { queryAffixLibrary, type AffixLibraryWithId } from '@/services/libraryServices'
import type { AffixExampleBreakdown, AffixKind } from '@/types/firestore'

let affixLibraryCache: Map<string, AffixLibraryWithId[]> | null = null

/**
 * Load all affixes from library for a teacher (cached)
 */
export async function loadAffixLibrary(teacherUid: string): Promise<AffixLibraryWithId[]> {
  // Check cache first
  if (affixLibraryCache && affixLibraryCache.has(teacherUid)) {
    return affixLibraryCache.get(teacherUid)!
  }

  // Load from database
  const affixes = await queryAffixLibrary({ teacherUid })
  
  // Cache it
  if (!affixLibraryCache) {
    affixLibraryCache = new Map()
  }
  affixLibraryCache.set(teacherUid, affixes)
  
  return affixes
}

/**
 * Find an affix in the library by affix string and kind
 */
export async function findAffixInLibrary(
  teacherUid: string,
  affix: string,
  kind: AffixKind
): Promise<AffixLibraryWithId | null> {
  const library = await loadAffixLibrary(teacherUid)
  
  // Normalize affix for comparison (remove hyphens for matching)
  const normalize = (s: string) => s.replace(/[-]/g, '').toLowerCase()
  const normalizedTarget = normalize(affix)
  
  return library.find(item => {
    const normalizedItem = normalize(item.affix)
    return normalizedItem === normalizedTarget && item.kind === kind
  }) || null
}

/**
 * Get word breakdowns for an affix from library
 * Returns the wordBreakdowns array if available
 */
export async function getAffixWordBreakdowns(
  teacherUid: string,
  affix: string,
  kind: AffixKind
): Promise<AffixExampleBreakdown[] | null> {
  const libraryItem = await findAffixInLibrary(teacherUid, affix, kind)
  return libraryItem?.wordBreakdowns || null
}

/**
 * Get affix meaning from library
 */
export async function getAffixMeaningFromLibrary(
  teacherUid: string,
  affix: string,
  kind: AffixKind
): Promise<string | null> {
  const libraryItem = await findAffixInLibrary(teacherUid, affix, kind)
  return libraryItem?.meaning || null
}

/**
 * Clear the cache (useful after importing new affixes)
 */
export function clearAffixLibraryCache() {
  affixLibraryCache = null
}

