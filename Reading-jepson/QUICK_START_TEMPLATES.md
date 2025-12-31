# Quick Start: Using Pre-Built Templates

## Visual Workflow

```
┌─────────────────────────────────────────────────────────────┐
│  1. Week Templates Page                                     │
│     Click "📚 Pre-Built Templates" dropdown                 │
│     ↓                                                        │
│  2. Select "Week 1 — West Africa Geography & Culture"       │
│     ↓                                                        │
│  3. Template created with ALL content:                      │
│     • Anchor passage (~228 words)                           │
│     • 5 vocabulary words with inquiry prompts               │
│     • 2 affixes                                             │
│     • 5 comprehension questions                             │
│     • 1 main idea question                                  │
│     ↓                                                        │
│  4. Go to Visual Planner (📅 Planner in nav)                │
│     ↓                                                        │
│  5. Template appears in left sidebar palette                │
│     ↓                                                        │
│  6. Select a student from dropdown                          │
│     ↓                                                        │
│  7. Drag template onto a school day                         │
│     ↓                                                        │
│  8. Assignment created! Click 👨‍🏫 or 👨‍🎓 to print          │
└─────────────────────────────────────────────────────────────┘
```

## Screenshot Locations

### 1. Week Templates Page
**URL**: `/teacher/week-templates`

You'll see:
- Existing templates in a grid
- "📚 Pre-Built Templates" button (top right)
- "+ Create Custom Template" button

### 2. Dropdown Menu
Click "📚 Pre-Built Templates" to see:
- **Quarter 1** section with Week 1 (more coming soon)
- **Quarter 2** section (coming soon)
- **Quarter 3** section (coming soon)
- **Quarter 4** section (coming soon)

### 3. Visual Planner
**URL**: `/teacher/assignments/planner`

Left sidebar shows:
- **📚 Week Templates**
- All your created templates (including hard-coded ones)
- Drag any template to calendar

Right side shows:
- Calendar grid with school days
- Red days off (from school calendar)
- Green assigned days with template names

### 4. Print Materials
**URL**: `/teacher/assignments/print?assignmentId=XXX&studentId=XXX&version=teacher`

Shows complete lesson with:
- Day 1: Vocabulary inquiry routine
- Day 2: Passage + comprehension questions
- Day 4: Main idea question
- Day 5: Friday assessment

## What Makes This Different?

### Before (Manual Entry)
1. Go to "Create Template"
2. Fill in template name, grade, unit
3. Manually type/paste anchor passage
4. Add vocab word 1 → type word, definition, sentence, prompts
5. Add vocab word 2 → type word, definition, sentence, prompts
6. Add vocab word 3 → type word, definition, sentence, prompts
7. Add vocab word 4 → type word, definition, sentence, prompts
8. Add vocab word 5 → type word, definition, sentence, prompts
9. Add affix 1 → type affix, meaning, examples
10. Add affix 2 → type affix, meaning, examples
11. Add 5 questions manually
12. Save

**Time**: ~20-30 minutes per template

### Now (Pre-Built)
1. Click "📚 Pre-Built Templates"
2. Select "Week 1 — West Africa"
3. Done

**Time**: ~5 seconds

## Creating Your Remaining 17 Templates

### Step 1: Prepare Your Content
For each week, have ready:
- Anchor passage text (~200-300 words)
- 5 vocabulary words with definitions and sentences
- Inquiry prompts and truth-bites for each word
- 2 affixes with meanings and examples
- 5 comprehension questions
- 1 main idea question with rubric

### Step 2: Copy Template File
```bash
cp src/utils/hardcodedTemplates/_template.ts src/utils/hardcodedTemplates/week02-topic.ts
```

### Step 3: Fill in Content
Open the new file and replace all `[bracketed]` placeholders with your content.

### Step 4: Register Template
In `src/utils/hardcodedTemplates/index.ts`:
1. Import your function
2. Add entry to correct quarter array

### Step 5: Build and Deploy
```bash
npm run build
firebase deploy --only hosting
```

### Step 6: Test
1. Refresh app
2. Check dropdown shows new template
3. Create it and verify content

## Organization by Quarter

### Quarter 1 (9 weeks: Aug 14 - Oct 10)
- ✅ Week 1: West Africa Geography & Culture
- ⬜ Week 2-9: Your content here

### Quarter 2 (9 weeks: Oct 13 - Dec 19)
- ⬜ Week 1-9: Your content here

### Quarter 3 (9 weeks: Jan 5 - Mar 13)
- ⬜ Week 1-9: Your content here

### Quarter 4 (9 weeks: Mar 16 - Jun 4)
- ⬜ Week 1-9: Your content here

**Total**: 1 done, 35 to go (18 total needed)

## Tips

### Week Lengths
- Most weeks: `weekLength: 5`
- Short weeks (holidays): `weekLength: 4` or `weekLength: 3`
- System auto-adjusts for days off

### Naming Conventions
- File: `week02-ancient-greece.ts`
- Function: `createWeek02AncientGreeceTemplate`
- Display: `WEEK 2 — ANCIENT GREECE`

### Vocabulary Structure
Keep the inquiry routine format:
- **Prompts**: Questions teacher asks
- **Truth-bites**: Information that increases clarity
- **Inference**: Final student question

## Testing Checklist

After creating each template:
- [ ] Dropdown shows template with correct name
- [ ] Template creates without errors
- [ ] Template appears in Visual Planner
- [ ] Can drag to assign to student
- [ ] Print materials show all content:
  - [ ] Vocab words with prompts (teacher version)
  - [ ] Vocab words with blanks (student version)
  - [ ] Affixes with examples
  - [ ] Passage with word count
  - [ ] Comprehension questions
  - [ ] Main idea question

## Troubleshooting

**Template not showing in dropdown?**
- Check `index.ts` has correct import
- Check `HARDCODED_TEMPLATES` includes entry
- Build succeeded without errors
- Hard refresh browser (Cmd+Shift+R)

**Template not in Visual Planner?**
- Template must be created first (from dropdown)
- Check Week Templates page shows it
- Hard refresh Visual Planner

**Print materials missing content?**
- Check Firestore shows all documents created
- Check template ID matches assignment
- Verify `weekId` references correct template

## Support Files

- **Developer Guide**: `src/utils/hardcodedTemplates/README.md`
- **Template File**: `src/utils/hardcodedTemplates/_template.ts`
- **Registry**: `src/utils/hardcodedTemplates/index.ts`
- **Complete Guide**: `HARDCODED_TEMPLATES_SYSTEM.md`