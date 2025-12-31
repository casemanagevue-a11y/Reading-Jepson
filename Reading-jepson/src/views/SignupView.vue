<template>
  <div class="signup-view">
    <div class="signup-container">
      <h1>Sign Up</h1>
      
      <form @submit.prevent="handleSignup" class="signup-form">
        <div v-if="error" class="error-message">{{ error }}</div>
        
        <div class="form-group">
          <label for="displayName">Display Name (Optional)</label>
          <input
            id="displayName"
            v-model="displayName"
            type="text"
            placeholder="Enter your name"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter your email"
            class="form-input"
          />
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
            class="form-input"
            minlength="6"
          />
          <small class="form-hint">Password must be at least 6 characters</small>
        </div>
        
        <div class="form-group">
          <label for="role">I am a:</label>
          <select id="role" v-model="role" required class="form-input">
            <option value="">Select role</option>
            <option value="admin">Admin</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        
        <button type="submit" :disabled="loading || !role" class="btn btn-primary">
          {{ loading ? 'Creating account...' : 'Sign Up' }}
        </button>
      </form>
      
      <div class="divider">
        <span>OR</span>
      </div>
      
      <button @click="handleGoogleLogin" :disabled="loading" class="btn btn-google">
        Sign up with Google
      </button>
      
      <div class="login-link">
        <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { signUp, signInWithGoogle, loading, error } = useAuth()

const displayName = ref('')
const email = ref('')
const password = ref('')
const role = ref<'admin' | 'teacher' | 'student' | ''>('')

const handleSignup = async () => {
  if (!role.value) return
  try {
    await signUp(email.value, password.value, displayName.value || email.value, role.value as 'admin' | 'teacher' | 'student')
    if (role.value === 'admin') {
      router.push('/admin')
    } else if (role.value === 'teacher') {
      router.push('/teacher')
    } else {
      router.push('/student')
    }
  } catch (err) {
    console.error('Signup error:', err)
  }
}

const handleGoogleLogin = async () => {
  try {
    await signInWithGoogle()
    router.push('/role-select')
  } catch (err) {
    console.error('Google login error:', err)
  }
}
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
}

.signup-container {
  background: white;
  padding: 2.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
}

.signup-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 500;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.form-hint {
  display: block;
  margin-top: 0.25rem;
  color: #999;
  font-size: 0.875rem;
}

.error-message {
  background-color: #fee;
  color: #c33;
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #4a90e2;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #357abd;
}

.btn-google {
  background-color: #fff;
  color: #333;
  border: 1px solid #ddd;
}

.btn-google:hover:not(:disabled) {
  background-color: #f5f5f5;
}

.divider {
  text-align: center;
  margin: 1.5rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background-color: #ddd;
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: white;
  padding: 0 1rem;
  color: #999;
}

.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
}

.login-link a {
  color: #4a90e2;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>

