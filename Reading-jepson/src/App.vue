<template>
  <div id="app">
    <nav v-if="isAuthenticated" class="navbar">
      <div class="nav-content">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">
            <svg class="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
            </svg>
            <span class="brand-text">Reading Jepson</span>
          </router-link>
        </div>
        
        <div v-if="userProfile" class="nav-links">
          <template v-if="isTeacher">
            <router-link to="/teacher" class="nav-link">Dashboard</router-link>
            <router-link to="/teacher/students" class="nav-link">Students</router-link>
            <router-link to="/teacher/week-templates" class="nav-link">Templates</router-link>
            <router-link to="/teacher/assignments/planner" class="nav-link">📅 Planner</router-link>
            <router-link to="/teacher/library" class="nav-link">Library</router-link>
          </template>
          <template v-else-if="isStudent">
            <router-link to="/student" class="nav-link">My Quizzes</router-link>
          </template>
        </div>
        
        <div class="nav-actions">
          <div class="user-menu">
            <div class="user-info">
              <div class="user-avatar">
                {{ (userProfile?.displayName || userProfile?.email || 'U').charAt(0).toUpperCase() }}
              </div>
              <div class="user-details">
                <span class="user-name">{{ userProfile?.displayName || 'User' }}</span>
                <span class="user-role">{{ userProfile?.role === 'teacher' ? 'Teacher' : 'Student' }}</span>
              </div>
            </div>
            <button @click="handleLogout" class="btn-logout" title="Logout">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
    
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const router = useRouter()
const { userProfile, isAuthenticated, isTeacher, isStudent, logout } = useAuth()

const handleLogout = async () => {
  try {
    await logout()
    router.push('/login')
  } catch (error) {
    console.error('Logout error:', error)
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  background: #f7fafc;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.navbar {
  background: white;
  border-bottom: 1px solid #e2e8f0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
}

.nav-brand {
  flex-shrink: 0;
}

.brand-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #1a202c;
  font-weight: 700;
  font-size: 1.25rem;
  transition: color 0.2s;
}

.brand-link:hover {
  color: #667eea;
}

.brand-icon {
  width: 28px;
  height: 28px;
  color: #667eea;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
  flex: 1;
  justify-content: center;
}

.nav-link {
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: #4a5568;
  font-weight: 500;
  border-radius: 6px;
  transition: all 0.2s;
  font-size: 0.95rem;
}

.nav-link:hover {
  background: #f7fafc;
  color: #667eea;
}

.nav-link.router-link-active {
  background: #edf2f7;
  color: #667eea;
}

.nav-actions {
  flex-shrink: 0;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.user-name {
  font-weight: 600;
  color: #1a202c;
  font-size: 0.9rem;
}

.user-role {
  font-size: 0.75rem;
  color: #718096;
  text-transform: capitalize;
}

.btn-logout {
  padding: 0.5rem;
  background: transparent;
  border: none;
  color: #718096;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-logout:hover {
  background: #f7fafc;
  color: #e53e3e;
}

.btn-logout svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 768px) {
  .nav-content {
    padding: 0 1rem;
  }
  
  .nav-links {
    display: none;
  }
  
  .user-details {
    display: none;
  }
}
</style>
