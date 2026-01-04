# Weekly Routine Implementation

## Overview

This document describes the implementation of the 5-day weekly language and reading routine based on the plan for Mikah. The system supports structured reading instruction with vocabulary, affixes, comprehension, and fluency tracking.

## Components Created

### 1. **WeeklyRoutineGuide.vue** (`src/components/WeeklyRoutineGuide.vue`)
A visual guide component that displays the 5-day routine structure:
- Day 1: Vocabulary + Affixes
- Day 2: First Student Read + Comprehension
- Day 3: Teacher Model + Student Reread
- Day 4: Reread + Main Idea/Details
- Day 5: Cold Read + Assessment

**Usage**: Can be embedded in teacher or student views to show the routine structure.

### 2. **WeekSetup.vue** (`src/views/teacher/WeekSetup.vue`)
A comprehensive wizard for teachers to set up a complete week:
- **Step 1**: Week information (student, date, subject)
- **Step 2**: Day 1 - Vocabulary words (4-6) and affixes (2)
- **Step 3**: Day 2 - Weekly passage and 6 comprehension questions
- **Step 4**: Day 4 - Main idea and details questions
- **Step 5**: Day 5 - Friday cold read passage and assessment questions

**Features**:
- Multi-step wizard interface
- Dynamic form fields (add/remove vocabulary, affixes, questions)
- Validates and saves all week content to Firestore
- Creates all related documents (passages, vocab, affixes, questions)

**Route**: `/teacher/weeks/setup`

### 3. **DailyActivity.vue** (`src/views/student/DailyActivity.vue`)
Student-facing component for daily activities:
- **Day 1**: View vocabulary words and affixes
- **Day 2**: Read passage and answer comprehension questions
- **Day 3**: Listen to teacher model, reread, and review vocabulary
- **Day 4**: Reread passage and answer main idea/details questions
- **Day 5**: Cold read new passage and complete assessment

**Features**:
- Day selector tabs
- Passage reading interface
- Question answering with text areas
- Vocabulary and affix review cards
- Save answers functionality (to be implemented)

**Route**: `/student/week/:weekId`

## Schema Updates

### Comprehension Questions
Updated to support Day 4 questions:
```typescript
day: 2 | 4 | 5  // Day 2: First read, Day 4: Main idea/details, Day 5: Assessment
```

## Routes Added

### Teacher Routes
- `/teacher/weeks/setup` - Week setup wizard

### Student Routes
- `/student/week/:weekId` - Daily activity view

## Data Flow

### Teacher Workflow
1. Navigate to `/teacher/weeks/setup`
2. Complete 5-step wizard:
   - Select student and week date
   - Add vocabulary words and affixes
   - Add weekly passage and Day 2 questions
   - Add Day 4 main idea questions
   - Add Friday passage and Day 5 assessment questions
3. System creates:
   - 1 week document
   - 2 passages (weekly + friday)
   - 4-6 vocabulary words
   - 2 affixes
   - 6+ comprehension questions (Day 2, 4, 5)

### Student Workflow
1. Navigate to `/student/week/:weekId`
2. Select day (1-5) using day tabs
3. Complete day-specific activities:
   - Day 1: Review vocab/affixes
   - Day 2: Read and answer questions
   - Day 3: Reread and review
   - Day 4: Reread and answer main idea questions
   - Day 5: Cold read and assessment
4. Answers saved to Firestore (implementation pending)

## Daily Supports

The routine includes these daily supports:
- ✅ Visuals and pictures for vocabulary (can be added to vocab documents)
- ✅ Repeated exposure across the week (vocab review on Days 1, 3, 4)
- ✅ Morphological instruction (affixes on Day 1)
- ✅ Binder as external language memory system (vocab/affix cards in UI)

## Next Steps / TODO

### Immediate
- [ ] Implement answer saving for student responses
- [ ] Add fluency tracking component for Day 5 (WPM, accuracy, miscues)
- [ ] Add teacher feedback/notes functionality
- [ ] Add vocabulary binder export/print feature

### Future Enhancements
- [ ] Audio recording for cold reads
- [ ] Teacher model audio playback
- [ ] Progress tracking across weeks
- [ ] Vocabulary mastery visualization
- [ ] Automated quiz generation from vocabulary
- [ ] Student binder PDF generation

## Usage Examples

### Teacher: Create a Week
```typescript
// Navigate to week setup
router.push('/teacher/weeks/setup')

// Complete wizard steps
// System automatically creates all Firestore documents
```

### Student: Access Daily Activity
```typescript
// Navigate to week activity
router.push(`/student/week/${weekId}`)

// Select day and complete activities
// Answers are saved as student progresses
```

## Integration Points

### With Existing Components
- **TeacherDashboard**: Add link to "Create Week" → `/teacher/weeks/setup`
- **StudentDashboard**: Show current week and link to daily activity
- **WeekManagement**: List weeks with links to edit/setup

### With Firestore Schema
All components use existing Firestore collections:
- `weeks` - Week organization
- `passages` - Reading passages (weekly + friday)
- `vocab` - Vocabulary words
- `affixes` - Prefixes, suffixes, roots
- `comprehensionQuestions` - Questions by day
- `fluencyAssessments` - Day 5 cold read data (to be implemented)

## Testing Checklist

- [ ] Teacher can create a complete week via wizard
- [ ] All Firestore documents are created correctly
- [ ] Student can view all 5 days of activities
- [ ] Vocabulary and affixes display correctly
- [ ] Passages render properly
- [ ] Questions are filtered by day
- [ ] Day selector works correctly
- [ ] Answers can be saved (when implemented)

---

**Status**: ✅ Core implementation complete. Ready for answer saving and fluency tracking features.














