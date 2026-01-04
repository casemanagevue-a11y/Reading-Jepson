<template>
  <div class="login-view">
    <div class="login-wrapper">
      <div class="login-container">
        <div class="login-header">
          <h1>Reading Jepson</h1>
          <p class="subtitle">Sign in to continue</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div v-if="error" class="error-message">
            <svg class="error-icon" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
            </svg>
            {{ error }}
          </div>
          
          <div class="form-group">
            <label for="email">Email Address</label>
            <input
              id="email"
              v-model="email"
              type="email"
              required
              placeholder="you@example.com"
              class="form-input"
              :class="{ 'error': error && !email }"
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
              :class="{ 'error': error && !password }"
            />
          </div>
          
          <button type="submit" :disabled="loading" class="btn btn-primary">
            <span v-if="loading" class="spinner"></span>
            <span v-else>Sign In</span>
          </button>
        </form>
        
        <div class="divider">
          <span>OR</span>
        </div>
        
        <button @click="handleGoogleLogin" :disabled="loading" class="btn btn-google">
          <svg class="google-icon" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>
        
        <div class="signup-link">
          <p>Don't have an account? <router-link to="/signup">Create one</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { signIn, signInWithGoogle, loading, error } = useAuth()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  try {
    await signIn(email.value, password.value)
    router.push('/')
  } catch (err) {
    // Error is handled by the composable
    console.error('Login error:', err)
  }
}

const handleGoogleLogin = async () => {
  try {
    await signInWithGoogle()
    router.push('/')
  } catch (err) {
    // Error is handled by the composable
    console.error('Google login error:', err)
  }
}
</script>

<style scoped>
.login-view {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-wrapper {
  width: 100%;
  max-width: 420px;
}

.login-container {
  background: white;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  width: 100%;
}

.login-header {
  text-align: center;
  margin-bottom: 2rem;
}

.login-header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  color: #718096;
  font-size: 0.95rem;
  margin: 0;
}

.login-form {
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.25rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: #2d3748;
  font-weight: 500;
  font-size: 0.9rem;
}

.form-input {
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  box-sizing: border-box;
  transition: all 0.2s;
  background: #f7fafc;
}

.form-input:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #fc8181;
}

.error-message {
  background-color: #fed7d7;
  color: #c53030;
  padding: 0.875rem 1rem;
  border-radius: 8px;
  margin-bottom: 1.25rem;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #fc8181;
}

.error-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.btn {
  width: 100%;
  padding: 0.875rem 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}

.btn-primary:active:not(:disabled) {
  transform: translateY(0);
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.btn-google {
  background-color: #fff;
  color: #2d3748;
  border: 2px solid #e2e8f0;
  font-weight: 500;
}

.btn-google:hover:not(:disabled) {
  background-color: #f7fafc;
  border-color: #cbd5e0;
}

.google-icon {
  width: 20px;
  height: 20px;
}

.divider {
  text-align: center;
  margin: 1.75rem 0;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 45%;
  height: 1px;
  background-color: #e2e8f0;
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
  color: #a0aec0;
  font-size: 0.875rem;
  font-weight: 500;
}

.signup-link {
  text-align: center;
  margin-top: 1.75rem;
  color: #718096;
  font-size: 0.9rem;
}

.signup-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>















