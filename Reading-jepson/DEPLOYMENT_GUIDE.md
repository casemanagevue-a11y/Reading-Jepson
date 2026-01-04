# Firebase Deployment Guide

## Pre-Deployment Checklist

✅ **Firebase CLI installed** (v14.11.0 detected)  
✅ **firebase.json configured**  
✅ **firestore.rules syntax validated**  
✅ **firestore.indexes.json configured**  
✅ **Project ID set**: `reading-jepson`

## Step 1: Login to Firebase (if not already logged in)

```bash
firebase login
```

This will open a browser window for authentication.

## Step 2: Initialize/Select Firebase Project

If you haven't already linked this directory to your Firebase project:

```bash
firebase use reading-jepson
```

Or if the project doesn't exist yet, create it first:

```bash
firebase projects:create reading-jepson
firebase use reading-jepson
```

## Step 3: Validate Security Rules (Recommended)

Before deploying, test your security rules syntax:

```bash
firebase firestore:rules:validate
```

## Step 4: Deploy Firestore Rules

Deploy your security rules:

```bash
firebase deploy --only firestore:rules
```

**Expected output:**
```
✔  firestore: deployed rules successfully
```

## Step 5: Deploy Firestore Indexes

Deploy your composite indexes:

```bash
firebase deploy --only firestore:indexes
```

**Expected output:**
```
✔  firestore: deployed indexes successfully
```

**⚠️ Important**: Index creation happens in the background and may take 2-5 minutes. You'll see warnings about missing indexes until they're ready. You can check index status in:
- Firebase Console > Firestore Database > Indexes tab

## Step 6: Verify Deployment

### Check Security Rules
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `reading-jepson`
3. Navigate to: Firestore Database > Rules
4. Verify your rules are deployed

### Check Indexes
1. Navigate to: Firestore Database > Indexes
2. Verify all indexes are listed (may show "Building" status initially)
3. Wait for all indexes to show "Enabled" status before using queries

### Test Security Rules (Optional)
1. Navigate to: Firestore Database > Rules > Rules Playground
2. Test various scenarios:
   - Teacher reading their student's data
   - Student reading their own data
   - Student trying to read quiz answers (should fail)

## Troubleshooting

### Error: "Project not found"
```bash
# List available projects
firebase projects:list

# Use the correct project
firebase use <project-id>
```

### Error: "Index already exists"
This is normal - Firestore will skip creating duplicate indexes.

### Error: "Missing index"
After deploying indexes, wait 2-5 minutes for them to build. Check the Indexes tab in Firebase Console.

### Error: "Permission denied" in Rules Playground
- Make sure you're testing with the correct user role (teacher vs student)
- Verify the user document exists in `users/{uid}` with the correct `role` field

## Quick Deploy (All at Once)

To deploy both rules and indexes together:

```bash
firebase deploy --only firestore
```

This will deploy:
- ✅ Security rules
- ✅ Composite indexes

## What Gets Deployed

### Security Rules (`firestore.rules`)
- ✅ All 12 collections secured
- ✅ Role-based access control (teacher/student)
- ✅ Separate `quizzesPublic` (no answers) and `quizzesPrivate` (with answers)
- ✅ Data validation functions

### Indexes (`firestore.indexes.json`)
- ✅ 16 composite indexes for efficient queries
- ✅ Optimized for teacher-student relationships
- ✅ Week-based content queries
- ✅ Student progress tracking

## Post-Deployment

### 1. Test Your Application
- Create test users (teacher and student)
- Test creating weeks, passages, vocab
- Test quiz creation and taking
- Verify students cannot see quiz answers

### 2. Monitor Index Status
- Check Firebase Console > Firestore > Indexes
- Wait for all indexes to show "Enabled" before production use

### 3. Set Up Environment Variables (Optional)
For production, use environment variables in your `.env` file:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=reading-jepson.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=reading-jepson
VITE_FIREBASE_STORAGE_BUCKET=reading-jepson.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

## Next Steps

After successful deployment:

1. ✅ **Create initial users** - Set up teacher and student accounts
2. ✅ **Test security rules** - Use Rules Playground to verify access control
3. ✅ **Wait for indexes** - Monitor index creation status
4. ✅ **Start building** - Use the service functions in `src/services/firestoreServices.ts`

---

**Ready to deploy?** Run the commands in Step 4 and Step 5 above! 🚀














