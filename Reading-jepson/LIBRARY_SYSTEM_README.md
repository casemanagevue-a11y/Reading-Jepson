# Content Library System - Complete Implementation Guide

## 📚 Overview

This document describes the complete content library system implementation for the Reading application. The library allows teachers to:

1. **Import** vocabulary, affixes, and passages once
2. **Organize** content by subject, grade, and unit
3. **Reuse** content across multiple students and weeks
4. **Edit** library items after creation
5. **AI-powered** features for inquiry questions and reading level estimation

---

## 🏗️ Architecture

### Data Model

The library system adds three new Firestore collections:

#### 1. `vocabLibrary`
```typescript
{
  teacherUid: string
  grade: string          // e.g., "6", "7", "6-8"
  unit: string           // e.g., "Unit 1", "Ancient China"
  subject: string        // "ELA", "Science", "History", "Math"
  readingLevel?: string  // e.g., "6.5", "850L"
  
  word: string
  definition: string
  exampleSentence: string
  tags: string[]
  
  // Optional AI-generated inquiry data
  inquiryPrompts?: string[]
  truthBites?: string[]
  inferenceQuestion?: string
  
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

#### 2. `affixLibrary`
```typescript
{
  teacherUid: string
  grade: string
  unit: string
  subject: string
  readingLevel?: string
  
  affix: string          // e.g., "un-", "-ology"
  kind: 'prefix' | 'suffix' | 'root'
  meaning: string
  examples: string[]     // e.g., ["unhappy", "undo"]
  
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

#### 3. `passageLibrary`
```typescript
{
  teacherUid: string
  grade: string
  unit: string
  subject: string
  readingLevel?: string  // Can be AI-estimated
  
  title: string
  text: string
  type?: 'weekly' | 'friday'
  subjectTag?: string    // e.g., "historical-fiction"
  wordCount: number      // Auto-calculated
  
  createdAt: Timestamp
  updatedAt: Timestamp
}
```

---

## 🔧 Implementation Files

### Core Services

#### 1. **AI Service** (`src/services/aiService.ts`)
Provides OpenAI integration for:
- Reading level estimation (Lexile, Flesch-Kincaid)
- Passage adjustment with vocabulary integration
- Comprehension question generation (literal, inferential, main idea)
- Inquiry question generation for vocabulary

**Key Functions:**
```typescript
estimateReadingLevel(text: string): Promise<ReadingLevelEstimate>
adjustPassageWithVocab(params: PassageAdjustmentParams): Promise<PassageAdjustmentResult>
generateComprehensionQuestions(passageText: string, day: 2|4|5): Promise<ComprehensionQuestion[]>
generateInquiryQuestions(word, definition, exampleSentence): Promise<InquiryVocabData>
```

**Configuration:**
- Requires `VITE_OPENAI_API_KEY` in `.env` file
- Uses `gpt-4o-mini` by default (cost-effective)
- Can upgrade to `gpt-4o` for better quality

#### 2. **Library Services** (`src/services/libraryServices.ts`)
CRUD operations for all library collections:

**Key Functions:**
```typescript
// Vocab
createVocabLibrary(data): Promise<string>
queryVocabLibrary(filters): Promise<VocabLibraryWithId[]>
updateVocabLibrary(id, updates): Promise<void>
deleteVocabLibrary(id): Promise<void>

// Affix (similar pattern)
createAffixLibrary(data): Promise<string>
queryAffixLibrary(filters): Promise<AffixLibraryWithId[]>

// Passage (similar pattern)
createPassageLibrary(data): Promise<string>
queryPassageLibrary(filters): Promise<PassageLibraryWithId[]>

// Utilities
getAutocompleteOptions(teacherUid): Promise<{units, grades, subjects}>
getLibraryCounts(teacherUid, grade?, unit?, subject?): Promise<{vocab, affixes, passages}>
batchCreateVocabLibrary(items[]): Promise<{successCount, errors}>
```

### Vue Components

#### 1. **LibraryImport** (`src/components/library/LibraryImport.vue`)
4-step wizard for importing content:

**Step 1: Metadata**
- Select import type (vocab/affix/passage)
- Required: Subject, Grade, Unit
- Optional: Reading Level
- Shows library counts for selected filters

**Step 2: Paste & Configure**
- Large textarea for pasting content
- Detection settings:
  - Term-Definition Separator: ` - `, ` : `, or custom
  - Term Separator: newline or `;`
- Preview button to parse

**Step 3: Preview & Edit**
- Table view of parsed items
- Inline editing for corrections
- Add/delete rows
- **AI Features:**
  - ✨ Generate AI Inquiry Questions (for vocab)
  - ✨ Estimate Reading Level (for passages)

**Step 4: Confirmation**
- Success message
- Shows saved count
- Options to import more or close

**Example Usage:**
```vue
<LibraryImport 
  @close="handleClose"
  @success="handleSuccess"
/>
```

#### 2. **LibraryBrowser** (`src/components/library/LibraryBrowser.vue`)
Browse and manage library content:

**Features:**
- Tab navigation (Vocabulary / Affixes / Passages)
- Filters: Subject, Grade, Unit
- Autocomplete suggestions
- Search results count
- Card-based display with:
  - Edit button
  - Delete button
  - View button (passages)
  - Metadata badges
- Empty state with import prompt
- Passage preview modal

**Example Usage:**
```vue
<LibraryBrowser 
  @import="openImport"
  @edit="openEditor"
/>
```

#### 3. **LibraryEditor** (`src/components/library/LibraryEditor.vue`)
Edit existing library items or create new ones:

**Features:**
- Dynamic form based on item type
- Metadata fields (subject, grade, unit, reading level)
- Content-specific fields (word/definition, affix/meaning, etc.)
- Inquiry questions section with AI generation
- Reading level estimation for passages
- Validation
- Save/Cancel actions

**Example Usage:**
```vue
<LibraryEditor 
  :item="editingItem"
  :itemType="'vocab'"
  @close="closeEditor"
  @saved="handleSaved"
/>
```

#### 4. **LibraryManagement** (`src/views/teacher/LibraryManagement.vue`)
Main page that orchestrates all components:

**Features:**
- Switches between Import, Browser, and Editor views
- Handles state management
- Refreshes browser after changes

---

## 🔒 Security

### Firestore Rules

Added rules for three library collections:

```javascript
match /vocabLibrary/{vocabId} {
  // Teachers can only access their own library items
  allow read: if isTeacher() && resource.data.teacherUid == request.auth.uid
  allow create: if isTeacher() && request.resource.data.teacherUid == request.auth.uid
  allow update: if isTeacher() && resource.data.teacherUid == request.auth.uid
  allow delete: if isTeacher() && resource.data.teacherUid == request.auth.uid
}
// Similar rules for affixLibrary and passageLibrary
```

**Key Security Features:**
- Only teachers can access library collections
- Teachers can only see/modify their own items
- `teacherUid` cannot be changed after creation
- Required fields are validated

### Firestore Indexes

Added composite indexes for efficient filtering:

```json
{
  "collectionGroup": "vocabLibrary",
  "fields": [
    {"fieldPath": "teacherUid", "order": "ASCENDING"},
    {"fieldPath": "grade", "order": "ASCENDING"},
    {"fieldPath": "unit", "order": "ASCENDING"},
    {"fieldPath": "createdAt", "order": "DESCENDING"}
  ]
}
// Similar indexes for all filter combinations
```

**Index Patterns:**
- `teacherUid + createdAt` (general browsing)
- `teacherUid + grade + createdAt` (grade filtering)
- `teacherUid + grade + unit + createdAt` (full filtering)
- `teacherUid + subject + createdAt` (subject filtering)

---

## 🚀 Usage Workflow

### For Teachers

#### 1. Import Vocabulary
```
1. Navigate to Library Management page
2. Click "+ Import New Content"
3. Select "Vocabulary" as import type
4. Fill in metadata:
   - Subject: ELA
   - Grade: 7
   - Unit: Ancient China
5. Paste vocabulary list:
   Dynasty - A series of rulers from the same family
   Bureaucracy - A system of government officials
   Khan - A Mongol ruler
6. Preview parsed items
7. (Optional) Click "✨ Generate AI Inquiry Questions"
8. Review and edit as needed
9. Click "Save to Library"
```

#### 2. Browse and Edit
```
1. Use filters to find content:
   - Subject: History
   - Grade: 7
   - Unit: Ancient China
2. Click edit (✏️) to modify an item
3. Make changes in the editor
4. Click "Save Changes"
```

#### 3. Use in Week Creation
```
1. Create a new week for a student
2. Select "Import from Library" option
3. Choose grade and unit
4. Select vocabulary, affixes, or passages
5. Content is copied to the week
```

---

## 🤖 AI Features

### 1. Reading Level Estimation

**How it works:**
- Analyzes sentence complexity, vocabulary difficulty, concept density
- Returns grade level, Lexile score, Flesch-Kincaid grade
- Includes confidence level and reasoning

**Usage:**
```typescript
const result = await aiService.estimateReadingLevel(passageText)
// result: { grade: 6.5, lexile: "850L", confidence: "high", reasoning: "..." }
```

### 2. Inquiry Question Generation

**How it works:**
- Uses progressive reveal template
- Creates 3-4 prompts that guide students toward meaning
- Generates "truth-bites" (small hints)
- Creates final inference question

**Example Output:**
```typescript
{
  inquiryPrompts: [
    "Is this describing one helper or a group that helps?",
    "What does this group help with — government laws or farming?",
    "Does the emperor do everything by himself, or does this group assist?",
    "So, if a bureaucracy is a group that helps the government run, what might it mean?"
  ],
  truthBites: [
    "bureaucracy is a group, not a single person",
    "they organize and support government functions",
    "bureaucracy assists leadership",
    "a bureaucracy is a system of officials"
  ],
  inferenceQuestion: "Based on the clues, what do you think bureaucracy means?"
}
```

### 3. Comprehension Question Generation

**How it works:**
- Generates literal, inferential, and main idea questions
- Customized for Day 2, 4, or 5 context
- Includes rubrics for grading

**Usage:**
```typescript
const questions = await aiService.generateComprehensionQuestions(
  passageText,
  2, // Day 2
  { literal: 3, inferential: 3, mainIdea: 1 }
)
```

### 4. Passage Adjustment

**How it works:**
- Modifies passage to include target vocabulary
- Features specified affixes naturally
- Maintains reading level and coherence

**Usage:**
```typescript
const result = await aiService.adjustPassageWithVocab({
  originalText: "...",
  vocabWords: ["dynasty", "bureaucracy", "khan"],
  affixes: ["com-", "-tion"],
  targetReadingLevel: "7.0"
})
```

---

## 🔌 Integration with Week Creation

### Copying from Library to Week

When a teacher creates a week and selects content from the library:

1. **Query library items:**
```typescript
const vocabItems = await libraryServices.queryVocabLibrary({
  teacherUid: currentTeacher.uid,
  grade: "7",
  unit: "Ancient China",
  subject: "History"
})
```

2. **Copy to week-specific collections:**
```typescript
// For each vocab item, create a new document in the `vocab` collection
for (const libItem of vocabItems) {
  await addDoc(collection(db, 'vocab'), {
    weekId: newWeekId,
    word: libItem.word,
    definition: libItem.definition,
    exampleSentence: libItem.exampleSentence,
    tags: libItem.tags,
    inquiryPrompts: libItem.inquiryPrompts,
    truthBites: libItem.truthBites,
    inferenceQuestion: libItem.inferenceQuestion,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  })
}
```

**Key Points:**
- Library items are **copied**, not referenced
- This allows per-student customization
- Changes to library don't affect existing weeks
- Changes to week content don't affect library

---

## 📝 Environment Setup

### Required Environment Variables

Add to `.env`:
```bash
VITE_OPENAI_API_KEY=sk-...
```

### Deploy Firestore Rules and Indexes

```bash
# Deploy rules
firebase deploy --only firestore:rules

# Deploy indexes
firebase deploy --only firestore:indexes
```

**Note:** Index creation can take several minutes. Monitor progress in Firebase Console.

---

## 🎨 UI/UX Features

### Smart Parsing

**Supports multiple formats:**
```
# Format 1: Dash separator, newline
Dynasty - A series of rulers
Bureaucracy - A system of officials

# Format 2: Colon separator, semicolon
Dynasty: A series of rulers; Bureaucracy: A system of officials

# Format 3: Custom separator
Dynasty | A series of rulers
Bureaucracy | A system of officials
```

**Auto-detection:**
- Removes leading numbers (1., 2), etc.)
- Trims whitespace
- Handles multiple separators in definitions

### Autocomplete

- Shows existing units as you type
- Displays grade options from your library
- Suggests subjects

### Live Preview

- Edit parsed items before saving
- Add/remove rows
- Inline validation
- Shows errors (missing fields)

### AI Integration UI

- Clear AI action buttons with emoji
- Loading states ("⏳ Generating...")
- Success confirmations
- Error handling with user-friendly messages

---

## 🔮 Future Enhancements

### Potential Additions

1. **Sharing Between Teachers**
   - Mark items as "shared with grade team"
   - Browse shared library items
   - Copy from other teachers' libraries

2. **Bulk Import from Google Sheets**
   - CSV upload
   - Google Sheets integration
   - Template download

3. **Library Statistics**
   - Most-used vocabulary
   - Reading level distribution
   - Usage analytics

4. **AI Passage Generation**
   - Generate passages from vocabulary list
   - Customize topic and genre
   - Automatic integration of target words

5. **Version History**
   - Track changes to library items
   - Revert to previous versions
   - Compare versions

6. **Tagging System**
   - Custom tags for organization
   - Tag-based filtering
   - Tag suggestions

---

## 🐛 Troubleshooting

### Common Issues

#### 1. "OpenAI API key not configured"
**Solution:** Add `VITE_OPENAI_API_KEY` to `.env` file and restart dev server

#### 2. "Missing index" error
**Solution:** 
- Check Firebase Console for index creation link
- Or deploy indexes: `firebase deploy --only firestore:indexes`

#### 3. "Permission denied" when accessing library
**Solution:**
- Ensure user has 'teacher' role in `users` collection
- Deploy updated Firestore rules

#### 4. Autocomplete not showing options
**Solution:**
- Make sure teacher has existing library items
- Check network tab for errors

#### 5. AI features not working
**Solution:**
- Verify OpenAI API key is valid
- Check API key has credits
- Check browser console for error details

---

## 📚 API Reference

### Library Services

```typescript
// Query filters
interface LibraryFilters {
  teacherUid: string
  grade?: string
  unit?: string
  subject?: SubjectFocus
}

// Create
createVocabLibrary(data: Omit<VocabLibraryDocument, 'createdAt' | 'updatedAt'>): Promise<string>

// Read
queryVocabLibrary(filters: LibraryFilters): Promise<VocabLibraryWithId[]>
getVocabLibrary(id: string): Promise<VocabLibraryWithId | null>

// Update
updateVocabLibrary(id: string, updates: Partial<...>): Promise<void>

// Delete
deleteVocabLibrary(id: string): Promise<void>

// Utilities
getAutocompleteOptions(teacherUid: string): Promise<AutocompleteOptions>
getLibraryCounts(teacherUid: string, grade?, unit?, subject?): Promise<{vocab, affixes, passages}>
batchCreateVocabLibrary(items: ...[]): Promise<{successCount: number, errors: string[]}>
```

### AI Service

```typescript
// Reading level
estimateReadingLevel(text: string): Promise<ReadingLevelEstimate>
calculateFleschKincaidGrade(text: string): number // Fallback

// Passage adjustment
adjustPassageWithVocab(params: PassageAdjustmentParams): Promise<PassageAdjustmentResult>

// Questions
generateComprehensionQuestions(passageText: string, day: 2|4|5, count?): Promise<ComprehensionQuestion[]>
generateInquiryQuestions(word: string, definition: string, exampleSentence: string): Promise<InquiryVocabData>
generateInquiryQuestionsForVocabList(vocabList: ...[]): Promise<InquiryVocabData[]>
```

---

## 🎯 Summary

The content library system provides:

✅ **Reusability** - Import once, use everywhere  
✅ **Organization** - Filter by subject, grade, unit  
✅ **AI-Powered** - Inquiry questions, reading levels, comprehension generation  
✅ **Flexible Import** - Paste lists, smart parsing, preview  
✅ **Easy Management** - Browse, edit, delete with beautiful UI  
✅ **Secure** - Teacher-scoped, validated, indexed  
✅ **Scalable** - Optimized queries, batch operations  

This system significantly reduces teacher workload by eliminating duplicate data entry while maintaining the flexibility to customize content for individual students.

<think>Great! Now let me mark task 10 as completed and create a summary document to explain everything we've implemented. I should also create a simple example/wrapper component to demonstrate how to use the library system.</think>