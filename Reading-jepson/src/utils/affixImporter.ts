/**
 * Affix Importer
 * 
 * Imports affix data from JSON file into Firestore affixLibrary collection
 * 
 * Usage:
 * 1. Import this function in a component or script
 * 2. Call importAffixesFromJSON(jsonData, teacherUid)
 * 
 * The JSON structure should match:
 * {
 *   affix: string
 *   category: "prefix" | "suffix"
 *   affix_meaning: string
 *   examples: Array<{
 *     word: string
 *     root: string
 *     root_meaning: string
 *     combined_meaning: string
 *   }>
 * }
 */

import { createAffixLibrary, updateAffixLibrary, queryAffixLibrary } from '@/services/libraryServices'
import type { AffixKind, AffixExampleBreakdown } from '@/types/firestore'

interface JSONAffixEntry {
  affix: string
  category: 'prefix' | 'suffix'
  affix_meaning: string
  note?: string // Optional teaching note
  examples: Array<{
    word: string
    root: string
    root_meaning: string
    combined_meaning: string
  }>
}

interface ImportResult {
  success: number
  failed: number
  errors: Array<{ affix: string; error: string }>
}

/**
 * Import affixes from JSON array into Firestore
 */
export async function importAffixesFromJSON(
  jsonData: JSONAffixEntry[],
  teacherUid: string
): Promise<ImportResult> {
  const result: ImportResult = {
    success: 0,
    failed: 0,
    errors: []
  }

  // Load existing affixes for this teacher to check for duplicates
  const existingAffixes = await queryAffixLibrary({ teacherUid })
  
  // Normalize affix string for comparison (remove hyphens, spaces, lowercase)
  const normalizeAffix = (s: string) => s.replace(/[-/\s]/g, '').toLowerCase()

  for (const entry of jsonData) {
    try {
      // Convert category to AffixKind
      const kind: AffixKind = entry.category === 'prefix' ? 'prefix' : 
                              entry.category === 'suffix' ? 'suffix' : 
                              'prefix' // default fallback

      // Extract example words (simple array)
      const exampleWords = entry.examples.map(ex => ex.word)

      // Convert examples to wordBreakdowns format
      const wordBreakdowns: AffixExampleBreakdown[] = entry.examples.map(ex => ({
        word: ex.word,
        root: ex.root,
        root_meaning: ex.root_meaning,
        combined_meaning: ex.combined_meaning
      }))

      // Check if affix already exists (by normalized affix string and kind)
      const normalizedEntryAffix = normalizeAffix(entry.affix)
      const existingAffix = existingAffixes.find(item => {
        const normalizedItemAffix = normalizeAffix(item.affix)
        return normalizedItemAffix === normalizedEntryAffix && item.kind === kind
      })

      if (existingAffix) {
        // Update existing affix instead of creating duplicate
        const updateData: any = {
          meaning: entry.affix_meaning,
          examples: exampleWords,
          wordBreakdowns
        }
        
        // Include note if provided
        if (entry.note !== undefined) {
          updateData.note = entry.note
        }
        
        await updateAffixLibrary(existingAffix.id, updateData)
        result.success++
        console.log(`✓ Updated: ${entry.affix} (${kind})`)
      } else {
        // Create new affix library document
        // Only include optional fields if they have values (Firestore doesn't allow undefined)
        const affixData: any = {
          teacherUid,
          affix: entry.affix,
          kind,
          meaning: entry.affix_meaning,
          examples: exampleWords,
          wordBreakdowns
        }
        
        // Include note if provided
        if (entry.note !== undefined && entry.note.trim()) {
          affixData.note = entry.note
        }
        
        await createAffixLibrary(affixData)
        result.success++
        console.log(`✓ Imported: ${entry.affix} (${kind})`)
      }
    } catch (error) {
      result.failed++
      const errorMessage = error instanceof Error ? error.message : String(error)
      result.errors.push({
        affix: entry.affix,
        error: errorMessage
      })
      console.error(`✗ Failed to import ${entry.affix}:`, errorMessage)
    }
  }

  return result
}

/**
 * Load JSON file and import affixes
 * This can be called from a Vue component or admin page
 */
export async function loadAndImportAffixes(
  file: File,
  teacherUid: string
): Promise<ImportResult> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    
    reader.onload = async (e) => {
      try {
        const text = e.target?.result as string
        const jsonData: JSONAffixEntry[] = JSON.parse(text)
        
        if (!Array.isArray(jsonData)) {
          throw new Error('JSON file must contain an array of affix entries')
        }

        const result = await importAffixesFromJSON(jsonData, teacherUid)
        resolve(result)
      } catch (error) {
        reject(error)
      }
    }

    reader.onerror = () => {
      reject(new Error('Failed to read file'))
    }

    reader.readAsText(file)
  })
}

