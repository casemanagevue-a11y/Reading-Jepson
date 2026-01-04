/**
 * Firebase Admin SDK Configuration
 * 
 * This file is for server-side use only (Firebase Cloud Functions, Node.js backend, etc.)
 * 
 * ⚠️ WARNING: Service account credentials should NEVER be used in client-side code.
 * They provide full administrative access to your Firebase project.
 * 
 * Usage (server-side only):
 * ```typescript
 * import admin from 'firebase-admin';
 * import serviceAccount from '../../serviceAccountKey.json';
 * 
 * if (!admin.apps.length) {
 *   admin.initializeApp({
 *     credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
 *   });
 * }
 * 
 * export const adminDb = admin.firestore();
 * export const adminAuth = admin.auth();
 * ```
 */

// This file serves as a reference for Admin SDK setup
// The actual service account key is stored in serviceAccountKey.json (gitignored)

export const adminConfig = {
  projectId: 'reading-jepson',
  // Service account credentials are loaded from serviceAccountKey.json
  // when initializing the Admin SDK
};















