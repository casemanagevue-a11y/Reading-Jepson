# Week Template System Guide

## Overview

The weekly lesson planning system has been upgraded to use **reusable templates** that can be assigned to students, rather than creating student-specific weeks every time.

## New Workflow

### 1. Create Week Templates
**Path:** `/teacher/week-templates/create`

- Create reusable 5-day reading instruction plans
- Templates are NOT tied to specific students
- Include:
  - Template name (e.g., "Week 1 - Ancient Rome")
  - Grade level (optional)
  - Unit (optional)
  - Subject focus
  - All vocabulary, affixes, passages, and questions

### 2. Manage School Calendar
**Path:** `/teacher/calendar`

- Add days off, holidays, breaks
- Set quarter start/end dates
- The system uses this to calculate actual week dates for assignments

### 3. Assign Templates to Students
**Path:** `/teacher/week-assignments`

- Select a student
- Choose which quarter (1-4)
- Choose which week number (1-9)
- Select a template to assign
- System calculates actual dates based on school calendar

### 4. Students Access Their Assigned Weeks
**Path:** `/student` (dashboard)

- Students see their 9 assigned weeks for the current quarter
- Each assignment includes the template content for that specific week

## Database Structure

### New Collections

#### `weekTemplates`
- Reusable lesson plans
- Teacher-owned
- Contains all lesson content

#### `weekAssignments`
- Links students to templates
- Includes quarter, week number, and dates
- Status tracking (assigned → in_progress → completed)

#### `schoolCalendar`
- Days off and holidays
- Quarter boundaries
- Used to calculate assignment dates

### Legacy Collection

#### `weeks` (kept for backward compatibility)
- Old student-specific weeks
- Still works but not recommended for new content

## Benefits

1. **Efficiency**: Create a template once, assign to multiple students
2. **Consistency**: All students in the same unit get the same content
3. **Planning**: Create all 9 weeks for a quarter in advance
4. **Flexibility**: Easy to reassign or swap templates if needed
5. **Calendar Integration**: Automatically accounts for days off

## Migration

- Old student-specific weeks still work
- New system lives alongside old system
- Gradually migrate to templates as you create new content
- Students can have both old weeks and new assignments simultaneously

## Quick Access

From Teacher Dashboard:
- **Create Week Template** → Build reusable plans
- **Assign Templates** → Give students their 9 weeks
- **School Calendar** → Manage days off
- **View Templates** → Browse existing templates