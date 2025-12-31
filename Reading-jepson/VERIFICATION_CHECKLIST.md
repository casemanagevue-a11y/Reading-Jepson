# Template Verification & Deployment Checklist

## Current Situation

### What's Currently Deployed (Dec 14, 01:04 AM)
- ❌ **Incomplete template** - missing full progressive reveal structure
- ❌ Old vocabulary order (starts with "population")
- ❌ Simplified inquiry prompts (2-3 per word instead of 4-6)
- ❌ Missing "Student reads sentence aloud" instructions on some words
- ❌ Word count shows ~228 instead of 183

### What We Just Updated (NOT YET DEPLOYED)
- ✅ **Complete template** with full progressive reveal
- ✅ Correct vocabulary order (starts with "environment")
- ✅ Complete inquiry prompts (4-6 per word)
- ✅ All "Student reads sentence aloud" instructions
- ✅ Correct 183-word passage count
- ✅ Added `WeekTemplateDocument` type and `createWeekTemplate` function

## Files You Cannot Download from Live Site

These are **source files** that get compiled and bundled:
- ❌ `src/utils/hardcodedTemplates/week01-west-africa.ts` - Source TypeScript (not accessible)
- ❌ `src/types/firestore.ts` - Source TypeScript (not accessible)
- ❌ `src/services/firestoreServices.ts` - Source TypeScript (not accessible)

These get compiled into:
- `dist/assets/WeekTemplateList-*.js` - Minified/bundled JavaScript (readable but obfuscated)
- `dist/assets/index-*.js` - Main bundle (large, hard to read)

## How to Verify Your Updates

### Step 1: Check Local Source Files ✅

**These are the files we just updated:**

1. **Template file:**
   ```bash
   cat src/utils/hardcodedTemplates/week01-west-africa.ts | grep -A 3 "word: 'environment'"
   ```
   Should show "environment" as first vocabulary word

2. **Types file:**
   ```bash
   grep "WeekTemplateDocument" src/types/firestore.ts
   ```
   Should show the interface definition

3. **Services file:**
   ```bash
   grep "createWeekTemplate" src/services/firestoreServices.ts
   ```
   Should show the function

### Step 2: Rebuild to See Changes

Run these commands to build and verify:

```bash
cd /Users/rd/Reading-jepson

# Build the project with updated template
npm run build

# Search for the updated template in the new build
grep -o "environment.*mean" dist/assets/*.js | head -5

# Check if environment is listed first
grep -o '"environment".*"savanna".*"population"' dist/assets/*.js
```

If the new build contains "environment" and the full prompts, you're ready to deploy.

### Step 3: Deploy Updated Version

```bash
# Deploy to Firebase Hosting
firebase deploy --only hosting

# Verify deployment
curl -s https://reading-jepson.web.app | grep -o 'index.*\.js'
```

### Step 4: Git Commit (Recommended)

```bash
# Stage the updated files
git add src/utils/hardcodedTemplates/week01-west-africa.ts
git add src/types/firestore.ts
git add src/services/firestoreServices.ts
git add TEMPLATE_RECOVERY_COMPLETE.md

# Commit with descriptive message
git commit -m "Complete Week 1 West Africa template with full progressive reveal inquiry vocabulary

- Add complete inquiry prompts (4-6 per word) for all 5 vocabulary words
- Add 'Student reads sentence aloud' instructions
- Add all narrowing questions and detailed truth-bites
- Correct passage word count to 183 words
- Add WeekTemplateDocument type and createWeekTemplate service function
- Recovered lost data from erased Cursor chat conversation"

# Push to repository
git push origin main
```

## Quick Verification Commands

### Check if environment is first word:
```bash
head -75 src/utils/hardcodedTemplates/week01-west-africa.ts | tail -20
```

### Count inquiry prompts for environment:
```bash
grep -A 10 "word: 'environment'" src/utils/hardcodedTemplates/week01-west-africa.ts | grep "inquiryPrompts:" -A 10
```

### Verify 183 word count in description:
```bash
grep "183 words" src/utils/hardcodedTemplates/week01-west-africa.ts
```

## Summary

✅ **Source files updated locally** - Your workspace has the complete template
❌ **Not yet deployed** - The live site still has the incomplete version
📦 **Next step**: Rebuild and deploy to update the live site

---

**Important**: The files on the live site (https://reading-jepson.web.app) are compiled JavaScript bundles. You cannot download the original TypeScript source files from the deployed site. The source of truth is your local workspace, which we just updated.



