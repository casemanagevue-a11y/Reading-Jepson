<template>
  <div class="role-select-view">
    <div class="role-select-container">
      <h1>Select Your Role</h1>
      <p class="subtitle">Choose how you'll use Reading Jepson</p>
      
      <div v-if="error" class="error-message">{{ error }}</div>
      
      <div class="role-options">
        <button @click="selectRole('admin')" :disabled="loading" class="role-card">
          <h2>Admin</h2>
          <p>Manage users, teachers, and system settings</p>
        </button>
        
        <button @click="selectRole('teacher')" :disabled="loading" class="role-card">
          <h2>Teacher</h2>
          <p>Create weekly content, manage students, and generate quizzes</p>
        </button>
        
        <button @click="selectRole('student')" :disabled="loading" class="role-card">
          <h2>Student</h2>
          <p>Complete vocabulary quizzes and track your progress</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { user, setUserRole, loading, error } = useAuth()

const selectRole = async (role: 'admin' | 'teacher' | 'student') => {
  try {
    await setUserRole(role, user.value?.displayName || undefined)
    if (role === 'admin') {
      router.push('/admin')
    } else if (role === 'teacher') {
      router.push('/teacher')
    } else {
      router.push('/student')
    }
  } catch (err) {
    console.error('Error setting role:', err)
  }
}
</script>

<style scoped>
.role-select-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.role-select-container {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 0.5rem;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.role-options {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.role-card {
  padding: 2rem;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.role-card:hover:not(:disabled) {
  border-color: #4a90e2;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
  transform: translateY(-2px);
}

.role-card:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.role-card h2 {
  color: #333;
  margin-bottom: 0.5rem;
}

.role-card p {
  color: #666;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .role-options {
    grid-template-columns: 1fr;
  }
}
</style>
