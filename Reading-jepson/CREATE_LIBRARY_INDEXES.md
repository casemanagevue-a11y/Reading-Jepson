# Create Library Indexes in Firebase Console

The library indexes couldn't be deployed due to conflicts. Create them manually:

## 🔗 Quick Link
**Firebase Console Indexes:** https://console.firebase.google.com/project/reading-jepson/firestore/indexes

---

## 📋 Indexes to Create

### 1. vocabLibrary - Basic Query
- Collection: `vocabLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `createdAt` → Descending

### 2. vocabLibrary - Grade Filter
- Collection: `vocabLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `createdAt` → Descending

### 3. vocabLibrary - Grade + Unit Filter
- Collection: `vocabLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `unit` → Ascending
  - `createdAt` → Descending

### 4. vocabLibrary - Subject Filter
- Collection: `vocabLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `subject` → Ascending
  - `createdAt` → Descending

### 5. affixLibrary - Basic Query
- Collection: `affixLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `createdAt` → Descending

### 6. affixLibrary - Grade Filter
- Collection: `affixLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `createdAt` → Descending

### 7. affixLibrary - Grade + Unit Filter
- Collection: `affixLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `unit` → Ascending
  - `createdAt` → Descending

### 8. affixLibrary - Subject Filter
- Collection: `affixLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `subject` → Ascending
  - `createdAt` → Descending

### 9. passageLibrary - Basic Query
- Collection: `passageLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `createdAt` → Descending

### 10. passageLibrary - Grade Filter
- Collection: `passageLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `createdAt` → Descending

### 11. passageLibrary - Grade + Unit Filter
- Collection: `passageLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `grade` → Ascending
  - `unit` → Ascending
  - `createdAt` → Descending

### 12. passageLibrary - Subject Filter
- Collection: `passageLibrary`
- Fields:
  - `teacherUid` → Ascending
  - `subject` → Ascending
  - `createdAt` → Descending

---

## 🚀 How to Create

1. Go to: https://console.firebase.google.com/project/reading-jepson/firestore/indexes
2. Click **"Create Index"**
3. Select collection (e.g., `vocabLibrary`)
4. Add fields in order with correct sorting
5. Click **"Create"**
6. Repeat for each index above

**Note:** Indexes take 5-10 minutes to build. You'll receive an email when they're ready.

---

## ⚠️ Important
The app will work without these indexes, but queries will be slower. Create them for optimal performance!

## 🔧 Alternative: Use Firebase CLI
If you prefer, you can also run:
```bash
firebase deploy --only firestore:indexes
```
And select "Yes" to delete conflicting indexes when prompted.