import { computed } from 'vue'
import { useAuth } from '@/composables/useAuth'

// This is a compatibility layer to match the authStore pattern
// It wraps the useAuth composable

const { user, userProfile } = useAuth()

export const useAuthStore = () => {
  return {
    user,
    userProfile,
    isAuthenticated: computed(() => user.value !== null),
    isTeacher: computed(() => userProfile.value?.role === 'teacher'),
    isStudent: computed(() => userProfile.value?.role === 'student'),
  }
}

export default useAuthStore



