# Reading Jepson - Complete System Overview

## System Architecture

### New Template-Based System ✅

**Old Way:** Create week plans tied directly to students (repetitive, time-consuming)

**New Way:** 
1. Create reusable templates
2. Set up school calendar
3. Assign templates to students (9 per quarter)
4. Track progress and assessments

---

## Complete Feature List

### 1. Student Management
📍 **Path:** `/teacher/students`

**Features:**
- Import from Google Classroom ✅
- Manual student entry
- View student list
- Student details

### 2. Week Templates
📍 **Path:** `/teacher/week-templates`

**Features:**
- Create reusable 5-day lesson plans
- Support for 3-day, 4-day, and 5-day weeks
- Import vocab/affixes/passages from library
- Template library/browser

**Create Template:** `/teacher/week-templates/create`
- 5 steps (Info, Vocab/Affixes, First Read, Main Idea, Friday Assessment)
- Toggle between manual entry and library import
- Save once, use many times

### 3. School Calendar
📍 **Path:** `/teacher/calendar`

**Features:**
- Manage days off, holidays, breaks
- Quarter start/end dates
- Import entire calendar from text
- Auto-calculate quarters from dates

**Import Calendar:** `/teacher/calendar/import`
- Paste school calendar
- Auto-parse dates and events
- Preview before importing

### 4. Week Assignments
📍 **Path:** `/teacher/week-assignments`

**Features:**
- Assign templates to students
- 9 weeks per quarter
- Auto-calculate actual dates
- Track assignment status

**How it works:**
- Select student, quarter, week number
- System calculates dates based on school calendar
- Choose which template to assign
- Student gets their lesson plan

### 5. Assignment Calendar 📅
📍 **Path:** `/teacher/assignments/calendar`

**Features:**
- Week view: See 5-day plan
- Month view: See all assignments
- Student selector
- Date navigation (Previous/Next/Today)
- Links to print and assess

**From Calendar:**
- 🖨️ Print Materials
- 📝 Enter Assessment Data

### 6. Print Materials
📍 **Path:** `/teacher/assignments/print?assignmentId=XXX`

**Prints:**
- All vocabulary with definitions and examples
- All affixes with meanings
- Weekly passage (Day 2)
- Friday passage (Day 5)
- Comprehension questions
- Blank fluency tracking form

**Perfect for:**
- Student workbooks
- Backup materials
- Parent communication

### 7. Assessment Data Entry
📍 **Path:** `/teacher/assignments/assess?assignmentId=XXX`

**Features:**
- Enter Friday fluency results
- **Auto-calculate WPM** from time and passage length
- Track 4 error types:
  - Omissions (words skipped)
  - Insertions (words added)
  - Substitutions (words replaced)
  - Mispronunciations (words said wrong)
- **Auto-calculate accuracy %**
- Comprehension scoring
- Notes/summary field

**Data Saved:**
- Links to student and week
- All metrics stored
- Available for progress reports

### 8. Content Library
📍 **Path:** `/teacher/library`

**Features:**
- Vocabulary library
- Affix library
- Passage library
- Import/export
- Filter by grade, unit, subject
- Reuse across templates

---

## Complete Workflow

### Initial Setup (One Time)

1. **Import Students**
   - Go to Students → Import from Google Classroom
   - Or manually add students

2. **Set Up Calendar**
   - Go to Calendar → Import Calendar
   - Paste your school year dates
   - System parses quarter boundaries and holidays

3. **Create Templates**
   - Go to Templates → Create Template
   - Create 9 templates (one per week of quarter)
   - Mix of 3, 4, and 5-day templates for short weeks
   - Import content from library or enter manually

### Weekly Operation

1. **Assign Templates** (at start of quarter)
   - Go to Assignments
   - For each student: assign 9 templates (one per week)
   - System calculates actual dates

2. **View Weekly Plan**
   - Go to 📅 Calendar
   - Select student
   - See current week's plan

3. **Print Materials** (Monday)
   - From calendar: click "🖨️ Print Materials"
   - Print workbook for student

4. **Enter Assessment** (Friday)
   - From calendar: click "📝 Enter Assessment Data"
   - Enter time, errors, comprehension
   - System calculates WPM and accuracy
   - Save results

---

## Navigation Map

```
Teacher Dashboard
│
├─ Students → Import from Google Classroom
│
├─ Templates → Create Template → Import from Library
│              └─ Template List → Assign to Students
│
├─ 📅 Calendar (Assignment Calendar)
│   ├─ Week View (see daily plans)
│   ├─ Month View (see all assignments)
│   ├─ 🖨️ Print Materials
│   └─ 📝 Enter Assessment Data
│       ├─ Auto-calculate WPM
│       ├─ Track 4 error types
│       └─ Auto-calculate accuracy
│
├─ Calendar → School Calendar
│   ├─ Import Calendar (paste dates)
│   └─ Manual entry
│
└─ Library → Vocab/Affixes/Passages
    └─ Create reusable content
```

---

## Top Navigation

When logged in as teacher:
- **Dashboard** - Home
- **Students** - Student management
- **Templates** - Week templates
- **📅 Calendar** - Assignment calendar (NEW!)
- **Library** - Content library

---

## Key Calculations

### WPM (Auto-Calculated)
- Formula: `(Passage Words / Time Seconds) × 60`
- Example: 120 words in 90 seconds = 80 WPM

### Accuracy % (Auto-Calculated)
- Formula: `((Words - Total Errors) / Words) × 100`
- Example: 120 words, 7 errors = 94.2% accuracy

### Total Errors
- Sum of: Omissions + Insertions + Substitutions + Mispronunciations

---

## Data Structure

### Collections

**Core:**
- `users` - Teacher/student accounts
- `students` - Student profiles
- `weekTemplates` - Reusable lesson plans ✨ NEW
- `weekAssignments` - Student assignments ✨ NEW
- `schoolCalendar` - Days off/holidays ✨ NEW

**Content:**
- `vocab` - Vocabulary words (per template/week)
- `affixes` - Affixes (per template/week)
- `passages` - Reading passages (per template/week)
- `comprehensionQuestions` - Questions (per template/week)

**Libraries:**
- `vocabLibrary` - Reusable vocabulary
- `affixLibrary` - Reusable affixes
- `passageLibrary` - Reusable passages

**Assessments:**
- `fluencyAssessments` - WPM & accuracy data ✨ ENHANCED
- `quizzesPublic` - Daily quizzes
- `quizAttempts` - Quiz results

---

## Benefits of New System

✅ **Efficiency:** Create templates once, assign to many students
✅ **Consistency:** All students get same quality content
✅ **Planning:** Create 9 weeks in advance
✅ **Flexibility:** Mix 3/4/5-day templates for short weeks
✅ **Calendar Integration:** Auto-calculate dates, account for holidays
✅ **Assessment Tracking:** Detailed WPM and accuracy data
✅ **Print Support:** Professional materials for students
✅ **Library Integration:** Reuse content across templates

---

## Quick Start Guide

1. **Hard refresh browser** (Cmd+Shift+R)
2. **Import students** (if not done)
3. **Import calendar** → Paste your school dates
4. **Create 9 templates** → Use library import feature
5. **Assign to students** → Give each student their 9 weeks
6. **Use calendar** → View plans, print, assess

---

## Support Documents

- `NAVIGATION_GUIDE.md` - How to navigate the system
- `YOUR_SCHOOL_CALENDAR_SETUP.md` - Your specific calendar
- `WEEK_TEMPLATE_SYSTEM_GUIDE.md` - Template system details
- `ASSIGNMENT_CALENDAR_GUIDE.md` - Calendar feature guide

---

## URLs

- Dashboard: `/teacher`
- Students: `/teacher/students`
- Templates: `/teacher/week-templates`
- Create Template: `/teacher/week-templates/create`
- Assignments: `/teacher/week-assignments`
- Assignment Calendar: `/teacher/assignments/calendar` ✨
- School Calendar: `/teacher/calendar`
- Import Calendar: `/teacher/calendar/import`
- Library: `/teacher/library`

Everything is live at: **https://reading-jepson.web.app**