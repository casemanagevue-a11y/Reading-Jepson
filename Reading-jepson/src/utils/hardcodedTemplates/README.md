# Hard-coded Templates System

## Overview

This folder contains all pre-built, ready-to-use week templates. These templates appear in the Visual Planner's template palette and can be dragged onto school days to create assignments.

## File Structure

```
hardcodedTemplates/
├── README.md                    # This file
├── types.ts                     # TypeScript interfaces
├── index.ts                     # Registry of all templates
├── _template.ts                 # Template file for creating new templates
├── week01-west-africa.ts        # Q1 Week 1
├── week02-....ts                # Q1 Week 2
├── week03-....ts                # Q1 Week 3
... (total of 18 files for 18 weeks)
```

## How Templates Work

### 1. Template Shows in Visual Planner
Once created, templates automatically appear in the Visual Planner's left sidebar because the planner calls `getWeekTemplatesByTeacher()`.

### 2. Drag to Assign
Teachers drag templates from the palette onto school days in the calendar to create assignments.

### 3. Print Materials
Clicking the 👨‍🏫 or 👨‍🎓 icons on assigned templates opens print materials with all lesson content.

## Creating a New Template

### Step 1: Copy the Template File

```bash
cp src/utils/hardcodedTemplates/_template.ts src/utils/hardcodedTemplates/weekXX-topic-name.ts
```

### Step 2: Fill in the Content

Edit `weekXX-topic-name.ts`:
- Update the header comment with week info
- Change the function name (e.g., `createWeekXXTemplate`)
- Fill in template metadata (name, grade, unit, subject, description)
- Add the anchor passage text
- Add all vocabulary words with inquiry prompts
- Add affixes
- Add comprehension questions (Day 2 and Day 4)

### Step 3: Register in index.ts

Add to `src/utils/hardcodedTemplates/index.ts`:

```typescript
import { createWeekXXTemplate } from './weekXX-topic-name';

export const HARDCODED_TEMPLATES: TemplatesByQuarter = {
  quarter1: [
    // ... existing templates ...
    {
      id: 'weekXX-topic-name',
      name: 'Week XX — Topic Name',
      weekNumber: XX,
      quarter: 1, // or 2, 3, 4
      description: 'Brief description with vocab words',
      grade: '6-8',
      unit: 'Unit X',
      subject: 'History', // or 'ELA', 'Science'
      weekLength: 5, // or 3, 4
      createFunction: createWeekXXTemplate,
    },
  ],
  // ...
};
```

### Step 4: Test It

1. Refresh the app
2. Go to Week Templates page
3. Click "📚 Pre-Built Templates"
4. Your new template should appear in the dropdown
5. Click it to create
6. It should appear in the Visual Planner's template palette

## Template Content Structure

Each template includes:

### Template Metadata
- `templateName`: Display name (e.g., "WEEK 1 — WEST AFRICA GEOGRAPHY & CULTURE")
- `weekLength`: 3, 4, or 5 days
- `grade`: Optional (e.g., "6-8")
- `unit`: Optional (e.g., "Unit 1")
- `subjectFocus`: 'ELA', 'Science', or 'History'
- `description`: Brief summary

### Anchor Passage (Weekly)
- `title`: Passage title
- `text`: Full passage text
- Word count should be appropriate for grade level (~200-300 words)

### Friday Passage
- Usually a placeholder to be filled later
- Can be the same structure as anchor passage

### Vocabulary Words
Each word includes:
- `word`: The vocabulary term
- `definition`: Clear definition
- `exampleSentence`: Context sentence from passage
- `tags`: Array of tags (e.g., ['tier3', 'content'])
- `inquiryPrompts`: Array of teacher prompts for Day 1
- `truthBites`: Array of supporting information
- `inferenceQuestion`: Final student inference question

### Affixes
Each affix includes:
- `affix`: The affix (e.g., "inter-", "-ment")
- `kind`: 'prefix', 'suffix', or 'root'
- `meaning`: What it means
- `examples`: Array of example words

### Comprehension Questions
- **Day 2**: 4-5 questions (literal and inferential)
- **Day 4**: 1 main idea question with rubric

Each question includes:
- `day`: 2, 4, or 5
- `type`: 'literal', 'inferential', or 'mainIdea'
- `prompt`: The question text
- `orderIndex`: Display order
- `rubric`: Optional answer guide for teachers

## Best Practices

1. **Naming Convention**: Use `weekXX-topic-name.ts` (two-digit week number, lowercase with hyphens)
2. **Function Names**: Use `createWeekXXTopicNameTemplate` (camelCase)
3. **Template Names**: Use "WEEK XX — TOPIC NAME" (uppercase, em dash)
4. **Consistent Order**: Keep vocabulary, affixes, questions in the same order as they appear in the lesson
5. **Rubrics**: Always include rubrics for questions to help teachers grade
6. **Word Counts**: Track passage word counts in the description

## Quarter Organization

- **Quarter 1**: Weeks 1-9 (August - October)
- **Quarter 2**: Weeks 1-9 (October - December)
- **Quarter 3**: Weeks 1-9 (January - March)
- **Quarter 4**: Weeks 1-9 (March - June)

Note: Some weeks may be shorter (3-4 days) due to holidays/breaks.

## FAQ

**Q: Do I need to update Firestore rules?**
A: No, templates use existing collections (weekTemplates, passages, vocab, affixes, comprehensionQuestions).

**Q: Can I edit a template after creating it?**
A: Yes! Once created in the database, you can edit it like any other template using the normal template editor.

**Q: What if I make a mistake in the hard-coded data?**
A: You can either:
1. Delete the created template and recreate it
2. Edit the template in the database using the template editor

**Q: Do students see these templates?**
A: No. Students only see assignments after a teacher assigns a template to them.

**Q: How do these templates differ from custom templates?**
A: Hard-coded templates are pre-filled with all content. Custom templates are created through the UI step-by-step. Both work the same way once created.