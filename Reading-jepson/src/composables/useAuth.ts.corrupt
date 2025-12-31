import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '@/firebase/config'
import { getUser, createUser } from '@/services/firestoreServices'
import type { UserDocument } from '@/types/firestore'

export function useAuth() {
  const user = ref<User | null>(null)
  const userProfile = ref<UserDocument | null>(null)
  const loading = ref(true)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => user.value !== null)
  const isAdmin = computed(() => userProfile.value?.role === 'admin')
  const isTeacher = computed(() => userProfile.value?.role === 'teacher')
  const isStudent = computed(() => userProfile.value?.role === 'student')

  // Listen to auth state changes
  let unsubscribe: (() => void) | null = null

  onMounted(() => {
    unsubscribe = onAuthStateChanged(
      auth,
      async (firebaseUser) => {
        user.value = firebaseUser
        loading.value = false

        if (firebaseUser) {
          try {
            // Try to get existing user document
            const profile = await getUser(firebaseUser.uid)
            if (profile) {
              userProfile.value = profile
            } else {
              // User doesn't exist yet - they need to set their role
              // For now, we'll create a placeholder but they should be redirected to role selection
              userProfile.value = null
            }
          } catch (err) {
            console.error('Error loading user profile:', err)
            error.value = 'Failed to load user profile'
          }
        } else {
          userProfile.value = null
        }
      },
      (err) => {
        console.error('Auth state change error:', err)
        error.value = err.message
        loading.value = false
      }
    )
  })

  onUnmounted(() => {
    if (unsubscribe) {
      unsubscribe()
    }
  })

  const signIn = async (email: string, password: string) => {
    try {
      error.value = null
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
      error.value = err.message || 'Failed to sign in'
      throw err
    }
  }

  const signUp = async (email: string, password: string, displayName: string, role: 'admin' | 'teacher' | 'student') => {
    try {
      error.value = null
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      
      // Update display name if provided
      if (displayName && userCredential.user) {
        await updateProfile(userCredential.user, { displayName })
      }

      // Create user document with role
      await createUser(userCredential.user.uid, {
        role,
        displayName: displayName || email,
        email: userCredential.user.email || email,
      })
      userProfile.value = await getUser(userCredential.user.uid)
    } catch (err: any) {
      error.value = err.message || 'Failed to sign up'
      throw err
    }
  }

  const signInWithGoogle = async () => {
    try {
      error.value = null
      const provider = new GoogleAuthProvider()
      const userCredential = await signInWithPopup(auth, provider)
      
      // Check if user document exists
      const profile = await getUser(userCredential.user.uid)
      if (!profile) {
        // User doesn't exist - check if they should claim a student account
        if (userCredential.user.email) {
          try {
            // Try to claim student account if email matches (lazy import to avoid circular dependency)
            const { getFunctions, httpsCallable } = await import('firebase/functions')
            const functions = getFunctions()
            const claimStudentAccount = httpsCallable(functions, 'claimStudentAccount')
            await claimStudentAccount({})
            // Reload profile after claiming
            const newProfile = await getUser(userCredential.user.uid)
            if (newProfile) {
              userProfile.value = newProfile
              return
            }
          } catch (claimError: any) {
            // If claim fails (no matching student), user needs to set role
            // This is expected if they're a new user or teacher
            console.log('No student account to claim, user needs to set role')
          }
        }
        // User doesn't exist - they need to set their role
        userProfile.value = null
      } else {
        userProfile.value = profile
      }
    } catch (err: any) {
      error.value = err.message || 'Failed to sign in with Google'
      throw err
    }
  }

  const setUserRole = async (role: 'admin' | 'teacher' | 'student', displayName?: string) => {
    if (!user.value) {
      throw new Error('User must be authenticated')
    }
    try {
      error.value = null
      await createUser(user.value.uid, {
        role,
        displayName: displayName || user.value.displayName || user.value.email || '',
        email: user.value.email || '',
      })
      userProfile.value = await getUser(user.value.uid)
    } catch (err: any) {
      error.value = err.message || 'Failed to set user role'
      throw err
    }
  }

  const logout = async () => {
    try {
      error.value = null
      await signOut(auth)
      userProfile.value = null
    } catch (err: any) {
      error.value = err.message || 'Failed to sign out'
      throw err
    }
  }

  return {
    user,
    userProfile,
    isAuthenticated,
    isAdmin,
    isTeacher,
    isStudent,
    loading,
    error,
    signIn,
    signUp,
    signInWithGoogle,
    logout,
    setUserRole
  }
}

