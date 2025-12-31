# Assignment Calendar System Guide

## Overview

The Assignment Calendar gives you a visual week-by-week or month view of student lesson plans, with integrated printing and assessment data entry.

## Features

### 📅 Calendar Views

**Week View**
- See 5-day plan for current week
- Shows vocabulary, passages, and questions for each day
- Highlights today's activities

**Month View**
- Bird's eye view of all assignments
- See which weeks have lessons assigned
- Quick overview of quarter planning

### 🖨️ Print Materials

Print complete lesson materials for the week:
- All vocabulary words with definitions and examples
- All affixes with meanings and examples
- Weekly passage with comprehension questions
- Friday passage with assessment questions
- Blank fluency tracking form

Perfect for:
- Creating student workbooks
- Having backup paper materials
- Parent communication

### 📊 Assessment Data Entry

Enter Friday assessment results:

**Fluency Tracking:**
- Time (in seconds)
- **Auto-calculates WPM** from passage word count and time
- Track errors:
  - **Omissions** - Words skipped
  - **Insertions** - Words added that aren't in text
  - **Substitutions** - Words replaced with different words
  - **Mispronunciations** - Words said incorrectly
- **Auto-calculates accuracy %** from total errors

**Comprehension Scoring:**
- Enter correct answers / total questions
- Auto-calculates percentage
- Add notes/summary

## How to Use

### View Student's Calendar

1. **Go to:** 📅 Calendar (top nav) or Dashboard → "📅 Assignment Calendar"
2. **Select student** from dropdown
3. **Toggle view:** Week or Month
4. **Navigate:** Use ← → buttons or "Today"

### Print Materials

From the calendar view:
1. Make sure you're viewing the correct week
2. Click **"🖨️ Print Materials"**
3. Review materials on screen
4. Click **"Print"** button (or Cmd+P / Ctrl+P)

### Enter Assessment Data

From the calendar view:
1. Navigate to the week you're assessing
2. Click **"📝 Enter Assessment Data"**
3. **Enter time** (e.g., 90 seconds)
   - WPM auto-calculates
4. **Enter errors:**
   - Omissions: 3
   - Insertions: 1
   - Substitutions: 2
   - Mispronunciations: 1
   - Accuracy auto-calculates
5. **Enter comprehension:** (e.g., 4 out of 5)
6. **Add notes** (optional)
7. Click **"Save Assessment"**

## Access

**Main Navigation:**
- Top nav bar: "📅 Calendar"
- Dashboard: "📅 Assignment Calendar" card

**Quick Links from Calendar:**
- 🖨️ Print Materials
- 📝 Enter Assessment Data

## Calculations

### WPM (Words Per Minute)
```
WPM = (Passage Word Count / Time in Seconds) × 60
```

Example: 120-word passage read in 90 seconds
```
WPM = (120 / 90) × 60 = 80 WPM
```

### Accuracy Percentage
```
Accuracy % = ((Words Read - Total Errors) / Words Read) × 100
```

Example: 120 words, 7 total errors
```
Accuracy = ((120 - 7) / 120) × 100 = 94.2%
```

### Total Errors (Miscues)
```
Total = Omissions + Insertions + Substitutions + Mispronunciations
```

## Data Tracking

All assessment data is saved to Firestore in the `fluencyAssessments` collection:
- Linked to student
- Linked to week template
- Timestamped
- Includes all metrics

Use this data for:
- Progress reports
- IEP goals tracking
- Parent conferences
- Student growth monitoring

## Tips

- **Print materials weekly** for student binders
- **Enter assessments immediately** while fresh
- **Use notes field** for qualitative observations
- **Track patterns** in error types over time
- **Month view** helps see gaps in assignments

## Student Access

Students can view their own calendar from their dashboard:
- See upcoming weeks
- Review vocabulary and passages
- Track their own progress

(Student version coming in next update)