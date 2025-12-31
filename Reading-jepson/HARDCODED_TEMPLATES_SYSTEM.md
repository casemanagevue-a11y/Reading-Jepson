# Hard-coded Templates System — Complete Guide

## Overview

You now have a complete system for creating and managing pre-built lesson templates. Templates automatically appear in the **Visual Planner** where you can drag them onto school days to create assignments.

## How It Works

### 1. Create Templates from Pre-Built Library
- Go to **Week Templates** page
- Click **"📚 Pre-Built Templates"** dropdown
- Select from organized quarters (Q1, Q2, Q3, Q4)
- Template is created with all content instantly

### 2. Templates Show in Visual Planner
- Once created, templates automatically appear in the left sidebar
- The planner calls `getWeekTemplatesByTeacher()` which loads all your templates

### 3. Drag to Assign
- Select a student
- Drag template from left sidebar onto a school day
- Assignment is created with correct start/end dates

### 4. Print Materials
- Click 👨‍🏫 for teacher materials
- Click 👨‍🎓 for student workbook
- All lesson content (vocab, passages, questions) automatically included

## File Organization

```
src/utils/hardcodedTemplates/
├── README.md                    # Developer guide
├── types.ts                     # TypeScript interfaces
├── index.ts                     # Registry (add new templates here)
├── _template.ts                 # Copy this for new templates
├── week01-west-africa.ts        # ✅ Q1 Week 1 (DONE)
├── week02-....ts                # Q1 Week 2 (TO DO)
├── week03-....ts                # Q1 Week 3 (TO DO)
... (18 total templates)
```

## Creating Your Next 17 Templates

### Quick Process

1. **Copy the template file**:
   ```bash
   cp src/utils/hardcodedTemplates/_template.ts src/utils/hardcodedTemplates/week02-topic-name.ts
   ```

2. **Fill in the content**:
   - Update header comment with week info
   - Change function name (e.g., `createWeek02TopicNameTemplate`)
   - Fill in:
     - Template metadata (name, grade, unit, subject)
     - Anchor passage (~228 words)
     - 5 vocabulary words with inquiry prompts
     - 2 affixes
     - 5 comprehension questions (4 literal, 1 inferential)
     - 1 main idea question

3. **Register in `index.ts`**:
   ```typescript
   import { createWeek02TopicNameTemplate } from './week02-topic-name';
   
   export const HARDCODED_TEMPLATES = {
     quarter1: [
       // ... existing Week 1 ...
       {
         id: 'week02-topic-name',
         name: 'Week 2 — Topic Name',
         weekNumber: 2,
         quarter: 1,
         description: 'Brief description with vocab',
         grade: '6-8',
         unit: 'Unit 1',
         subject: 'History',
         weekLength: 5,
         createFunction: createWeek02TopicNameTemplate,
       },
     ],
     // ... other quarters ...
   };
   ```

4. **Build and deploy**:
   ```bash
   npm run build
   firebase deploy --only hosting
   ```

### What's Included in Each Template

#### Template Metadata
- Name, grade, unit, subject
- Week length (3, 4, or 5 days)
- Description with vocab preview

#### Content
- **Anchor Passage**: ~200-300 word passage (weekly)
- **Friday Passage**: Assessment passage (can be placeholder)
- **Vocabulary** (5 words):
  - Word, definition, example sentence
  - Inquiry prompts (teacher questions)
  - Truth-bites (supporting info)
  - Inference question (final check)
- **Affixes** (2):
  - Affix, kind (prefix/suffix/root), meaning, examples
- **Comprehension Questions**:
  - Day 2: 4 literal + 1 inferential
  - Day 4: 1 main idea with rubric

## Example Template Entry

From `index.ts`:

```typescript
{
  id: 'week01-west-africa',
  name: 'Week 1 — West Africa Geography & Culture',
  weekNumber: 1,
  quarter: 1,
  description: 'History Informational: region, environment, population, natural resources, savanna',
  grade: '6-8',
  unit: 'Unit 1',
  subject: 'History',
  weekLength: 5,
  createFunction: createWeek1WestAfricaTemplate,
}
```

## Benefits

### For You
- **No Manual Entry**: All content pre-filled
- **Consistent Structure**: Every template follows the same pattern
- **Easy to Replicate**: Copy, fill, register — done
- **Version Controlled**: All content in code, easy to update

### For Teachers
- **One-Click Creation**: Click button, template ready
- **Drag-and-Drop**: Visual planner makes assigning easy
- **Print Ready**: All materials auto-generated
- **Professional**: Consistent, well-structured lessons

## Your School Calendar

Based on your calendar, here's the weekly structure:

### Quarter 1 (Aug 14 - Oct 10)
- Week 1: Aug 14-16 (3 days)
- Week 2: Aug 19-23 (4 days, Labor Day)
- Week 3-8: Full weeks (5 days)
- Week 9: Oct 7-10 (4 days)

### Quarter 2 (Oct 13 - Dec 19)
- Week 1-3: Full weeks
- Week 4: Nov 10-14 (4 days, Veterans Day)
- Week 5: Nov 18-22 (5 days)
- Week 6: Nov 25-27 (3 days, Thanksgiving)
- Week 7-9: Full weeks (some with breaks)

### Quarter 3 (Jan 5 - Mar 13)
- Week 1: Jan 6-9 (4 days, MLK Day)
- Week 2-6: Full weeks
- Week 7: Feb 17-21 (4 days, Presidents)
- Week 8-9: Full weeks

### Quarter 4 (Mar 16 - Jun 4)
- Week 1-3: Full weeks
- Week 4: Apr 7-11 (4 days, Spring Break)
- Week 5-8: Full weeks
- Week 9: Jun 2-4 (3 days)

## Next Steps

1. **Test the system**:
   - Create Week 1 template from the dropdown
   - Assign it to a student in Visual Planner
   - View print materials

2. **Create remaining templates**:
   - Start with Quarter 1 (8 more weeks)
   - Then Quarter 2-4 (9 weeks each)
   - Total: 18 templates

3. **Adjust week lengths**:
   - Set `weekLength: 3` for 3-day weeks
   - Set `weekLength: 4` for 4-day weeks
   - Calendar will auto-calculate days off

## Technical Notes

- **No Database Changes**: Uses existing collections
- **No New Firestore Rules**: Templates use standard permissions
- **Automatic Loading**: Visual Planner loads templates via `getWeekTemplatesByTeacher()`
- **Type Safe**: Full TypeScript support
- **Modular**: Each template in its own file

## Quick Reference

### File Naming
- `weekXX-topic-name.ts` (two-digit week, lowercase with hyphens)

### Function Naming
- `createWeekXXTopicNameTemplate` (camelCase)

### Template Display Name
- `WEEK XX — TOPIC NAME` (uppercase, em dash `—`)

### Registry Entry
- Add to correct quarter in `index.ts`
- Set `weekNumber`, `quarter`, `weekLength` correctly

## Support

See detailed developer guide in:
- `src/utils/hardcodedTemplates/README.md`
- `src/utils/hardcodedTemplates/_template.ts` (copy this)