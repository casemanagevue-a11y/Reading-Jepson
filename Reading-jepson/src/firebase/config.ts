/**
 * Firebase Configuration
 * 
 * This file initializes Firebase and Firestore.
 * Make sure to set up your Firebase project and add your config here.
 */

import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

// Firebase configuration for client-side SDK
// You can find the full config in your Firebase Console > Project Settings > General > Your apps
// Project ID from service account: reading-jepson
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyAZwBiqqyo6ZvVGEbXqEVnG5fyA2tt4WdY',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'reading-jepson.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'reading-jepson',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'reading-jepson.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '1092023762764',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:1092023762764:web:df07ea182d5446675499e9',
};

// Validate critical config values in development
if (import.meta.env?.DEV) {
  const missingVars: string[] = [];
  if (!import.meta.env.VITE_FIREBASE_API_KEY || firebaseConfig.apiKey === 'your-api-key') {
    missingVars.push('VITE_FIREBASE_API_KEY');
  }
  if (!import.meta.env.VITE_FIREBASE_APP_ID || firebaseConfig.appId === 'your-app-id') {
    missingVars.push('VITE_FIREBASE_APP_ID');
  }
  if (missingVars.length > 0) {
    console.warn(
      `⚠️ Firebase configuration warning: Missing environment variables: ${missingVars.join(', ')}\n` +
      `Please create a .env file with your Firebase configuration. See README.md for setup instructions.`
    );
  }
}

// #region agent log
// #endregion

// Validate config before initialization (only in development)
if (import.meta.env?.DEV && (firebaseConfig.apiKey === 'your-api-key' || firebaseConfig.appId === 'your-app-id')) {
  console.warn(
    '⚠️ Firebase configuration warning: Using default values.\n' +
    'For production, consider using environment variables via .env file.\n' +
    'Firebase Console: https://console.firebase.google.com/project/reading-jepson/settings/general'
  );
}

// Initialize Firebase (only if not already initialized)
let app: FirebaseApp;
try {
  // #region agent log
  // #endregion
  if (getApps().length === 0) {
    app = initializeApp(firebaseConfig);
    // #region agent log
    // #endregion
  } else {
    app = getApps()[0];
    // #region agent log
    // #endregion
  }
} catch (error: any) {
  // #region agent log
  // #endregion
  console.error('❌ Firebase initialization failed:', error);
  throw error;
}

// Initialize Firestore
export const db: Firestore = getFirestore(app);
// #region agent log
// #endregion

// Initialize Auth
export const auth: Auth = getAuth(app);
// #region agent log
// #endregion

export default app;















