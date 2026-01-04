import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  Timestamp,
  type DocumentData,
  type QuerySnapshot
} from 'firebase/firestore'
import { db } from './config'
import type { User } from 'firebase/auth'

// User Profile Service
export interface UserProfile {
  id: string
  email: string
  displayName?: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  try {
    const userDoc = await getDoc(doc(db, 'userProfiles', userId))
    if (userDoc.exists()) {
      return userDoc.data() as UserProfile
    }
    return null
  } catch (error) {
    console.error('Error getting user profile:', error)
    throw error
  }
}

export const createUserProfile = async (user: User): Promise<void> => {
  try {
    const userProfile: UserProfile = {
      id: user.uid,
      email: user.email || '',
      displayName: user.displayName || undefined,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }
    await setDoc(doc(db, 'userProfiles', user.uid), userProfile)
  } catch (error) {
    console.error('Error creating user profile:', error)
    throw error
  }
}

export const updateUserProfile = async (
  userId: string,
  updates: Partial<Omit<UserProfile, 'id' | 'createdAt'>>
): Promise<void> => {
  try {
    await updateDoc(doc(db, 'userProfiles', userId), {
      ...updates,
      updatedAt: Timestamp.now()
    })
  } catch (error) {
    console.error('Error updating user profile:', error)
    throw error
  }
}

// Example: Game Scores Service (similar to jesponmath)
export interface GameScore {
  id?: string
  userId: string
  gameName: string
  score: number
  accuracy?: number
  time?: number
  level?: number
  createdAt: Timestamp
}

export const saveGameScore = async (score: Omit<GameScore, 'id' | 'createdAt'>): Promise<string> => {
  try {
    const scoreData: Omit<GameScore, 'id'> = {
      ...score,
      createdAt: Timestamp.now()
    }
    const docRef = await addDoc(collection(db, 'gameScores'), scoreData)
    return docRef.id
  } catch (error) {
    console.error('Error saving game score:', error)
    throw error
  }
}

export const getUserScores = async (userId: string, limitCount: number = 10): Promise<GameScore[]> => {
  try {
    const q = query(
      collection(db, 'gameScores'),
      where('userId', '==', userId),
      orderBy('score', 'desc'),
      limit(limitCount)
    )
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as GameScore[]
  } catch (error) {
    console.error('Error getting user scores:', error)
    throw error
  }
}

export const getLeaderboard = async (gameName: string, limitCount: number = 10): Promise<GameScore[]> => {
  try {
    const q = query(
      collection(db, 'gameScores'),
      where('gameName', '==', gameName),
      orderBy('score', 'desc'),
      limit(limitCount)
    )
    const querySnapshot: QuerySnapshot<DocumentData> = await getDocs(q)
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    })) as GameScore[]
  } catch (error) {
    console.error('Error getting leaderboard:', error)
    throw error
  }
}















