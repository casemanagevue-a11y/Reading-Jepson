# Inquiry Vocabulary Routine Implementation

## Overview

Based on the sample lesson from `DOC_11_full_extracted.md`, I've implemented support for the **Inquiry Vocabulary Routine with Progressive Reveal Supports**. This matches the teaching methodology where students infer word meanings through guided prompts rather than being given definitions directly.

## Schema Updates

### VocabDocument Enhanced
Added optional fields to support inquiry vocabulary:
```typescript
interface VocabDocument {
  // ... existing fields
  inquiryPrompts?: string[];      // Teacher prompts guiding student toward meaning
  truthBites?: string[];          // Small "truth-bites" that increase clarity
  inferenceQuestion?: string;     // Final student inference question
}
```

## Components Created

### 1. **VocabularyInquiry.vue** (`src/components/VocabularyInquiry.vue`)
Interactive component for Day 1 vocabulary instruction:
- **Progressive Reveal**: Prompts are revealed one at a time
- **Truth-Bites**: Each prompt includes a truth-bite that provides hints
- **Context Sentence**: Shows the non-definitional context sentence
- **Inference Question**: Final question for student to infer meaning
- **Definition Reveal**: Shows definition after inference (optional)

**Features**:
- Step-by-step reveal of prompts
- Visual feedback for revealed content
- Student inference input
- Smooth animations

### 2. **WeekSetup.vue Enhanced**
Updated teacher week setup to include inquiry vocabulary fields:
- Expandable sections for inquiry prompts
- Add/remove prompts dynamically
- Truth-bites paired with each prompt
- Final inference question field

**New UI Elements**:
- Collapsible "Inquiry Prompts & Truth-Bites" section
- Prompt/truth-bite pairs
- Inference question field

### 3. **DailyActivity.vue Updated**
Student Day 1 view now uses `VocabularyInquiry` component:
- Replaces simple vocab cards
- Interactive inquiry routine
- Progressive reveal interface

## Sample Lesson Structure

Based on `DOC_11_full_extracted.md`, the lesson includes:

### Vocabulary (9 words)
1. **Dynasty** - A series of rulers from the same family
2. **Bureaucracy** - System of many government officials
3. **Scholar-official** - Person who passed civil service exams
4. **Merit System** - System based on talent/skills
5. **Urbanization** - Movement from rural to urban areas
6. **Despot** - A tyrant or dictator
7. **Tribute** - Payment or gift to stronger power
8. **Khan** - Mongol ruler
9. **Confucianism** - Belief system based on Confucius

Each word includes:
- Context sentence (non-definitional)
- 4 teacher prompts with truth-bites
- Final inference question

### Passage (Day 2-4)
**Title**: "Life and Power in Imperial China"
**Word Count**: 292 words
**Content**: Covers dynasties, Confucianism, bureaucracy, urbanization, despots, Mongols, tribute

### Comprehension Questions (Day 2)
- **6 Literal Questions**: What is...? Who were...?
- **4 Inferential Questions**: Why might...? How might...?
- **Sentence Frames**: Provided for student responses

### Affixes
- **com- / con-**: together or with (compass, communication)
- **-tion**: the act of or process of (urbanization, communication)

## Usage

### Teacher: Creating Inquiry Vocabulary

1. Navigate to `/teacher/weeks/setup`
2. In Step 2 (Day 1), add vocabulary words
3. Click "Inquiry Prompts & Truth-Bites (Optional)" to expand
4. Add prompts one at a time:
   - Prompt 1: "Who is ruling here — one ruler or rulers over time?"
   - Truth-bite 1: "Dynasty lasts across multiple rulers."
   - Continue for 3-4 prompts
5. Add final inference question: "So what might dynasty mean?"
6. Save week

### Student: Using Inquiry Vocabulary

1. Navigate to `/student/week/:weekId`
2. Select Day 1
3. For each vocabulary word:
   - Read context sentence
   - Click "Reveal" to see first prompt
   - Read truth-bite
   - Continue revealing prompts
   - Answer final inference question
   - Check inference to see definition

## Example: Dynasty Word

**Context Sentence**: 
> "For thousands of years, China was ruled by a dynasty that controlled the government and passed power to the next ruler."

**Prompts & Truth-Bites**:
1. Prompt: "Who is ruling here — one ruler or rulers over time?"
   - Truth-bite: "Dynasty lasts across multiple rulers."

2. Prompt: "The sentence says they 'passed power to the next ruler.' What does that show?"
   - Truth-bite: "Power moves from one ruler to another in order."

3. Prompt: "Does this sound like random rulers or a connected line of rulers?"
   - Truth-bite: "Rulers are connected across time."

4. Prompt: "If rulers follow one another in an ordered line, what might dynasty mean?"
   - Truth-bite: "Dynasty means a connected line of rulers."

**Inference Question**: "So what might dynasty mean?"

**Definition**: "A series of rulers from the same family"

## Integration with Existing System

- ✅ Works with existing `vocab` collection
- ✅ Backward compatible (optional fields)
- ✅ Integrates with WeekSetup wizard
- ✅ Displays in student DailyActivity
- ✅ Supports all 9 vocabulary words from sample

## Lesson Parser Utility

Created `src/utils/lessonParser.ts` with helper functions:
- `parseVocabulary()` - Parse vocab from DOC_11 format
- `parsePassage()` - Parse passage text
- `parseQuestions()` - Parse comprehension questions
- `parseImperialChinaLesson()` - Complete lesson parser

Can be used to import sample lessons programmatically.

## Next Steps

- [ ] Add import functionality for DOC_11 format lessons
- [ ] Add teacher view to see student inferences
- [ ] Track vocabulary mastery based on inference accuracy
- [ ] Add audio support for teacher prompts
- [ ] Export vocabulary binder with inquiry prompts

---

**Status**: ✅ Inquiry vocabulary routine fully implemented and integrated!









