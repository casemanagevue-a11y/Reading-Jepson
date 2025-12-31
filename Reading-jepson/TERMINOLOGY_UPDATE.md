# Terminology Update: "Truth-bites" → "Hints"

## Change Made

Updated all references from "truth-bites" to "hints" throughout the application.

## Files Updated:

1. ✅ `src/types/firestore.ts`
   - `VocabDocument.truthBites` → `VocabDocument.hints`
   - `VocabLibraryDocument.truthBites` → `VocabLibraryDocument.hints`

2. ✅ `src/utils/hardcodedTemplates/week01-west-africa.ts`
   - All vocabulary word `truthBites:` → `hints:`
   - All 5 vocabulary words updated

3. ✅ `src/components/VocabularyInquiry.vue`
   - `vocab.truthBites` → `vocab.hints`
   - "Truth-bite:" label → "Hint:"
   - `.truth-bite` CSS class → `.hint`

## What Users See:

**Before:**
- "Truth-bite: population = word being defined"

**After:**  
- "Hint: population = word being defined"

## Database Impact:

- Existing vocab with `truthBites` field will still work (backward compatible)
- New vocab will use `hints` field
- Both field names are optional (`hints?:`)

All changes deployed and live!
