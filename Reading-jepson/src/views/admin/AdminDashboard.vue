<template>
  <div class="admin-dashboard">
    <div class="container">
      <div class="header">
        <h1>Admin Dashboard</h1>
        <p class="subtitle">Manage users, teachers, and system settings</p>
      </div>
      
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading...</p>
      </div>
      
      <div v-else class="dashboard-content">
        <div class="stats-grid">
          <div class="stat-card">
            <h3>Total Users</h3>
            <p class="stat-value">{{ totalUsers }}</p>
          </div>
          <div class="stat-card">
            <h3>Teachers</h3>
            <p class="stat-value">{{ teacherCount }}</p>
          </div>
          <div class="stat-card">
            <h3>Students</h3>
            <p class="stat-value">{{ studentCount }}</p>
          </div>
          <div class="stat-card">
            <h3>Admins</h3>
            <p class="stat-value">{{ adminCount }}</p>
          </div>
        </div>
        
        <div class="section">
          <h2>User Management</h2>
          <div class="user-list">
            <div v-for="user in users" :key="user.id" class="user-card">
              <div class="user-info">
                <h4>{{ user.displayName }}</h4>
                <p class="user-email">{{ user.email }}</p>
                <span class="role-badge" :class="user.role">{{ user.role }}</span>
              </div>
              <div class="user-actions">
                <button @click="viewUser(user.id)" class="btn btn-secondary">View</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'
import type { UserDocument } from '@/types/firestore'
const loading = ref(true)
const users = ref<Array<UserDocument & { id: string }>>([])

const totalUsers = computed(() => users.value.length)
const teacherCount = computed(() => users.value.filter(u => u.role === 'teacher').length)
const studentCount = computed(() => users.value.filter(u => u.role === 'student').length)
const adminCount = computed(() => users.value.filter(u => u.role === 'admin').length)

const loadUsers = async () => {
  try {
    loading.value = true
    const usersRef = collection(db, 'users')
    const querySnapshot = await getDocs(usersRef)
    users.value = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Array<UserDocument & { id: string }>
  } catch (error) {
    console.error('Error loading users:', error)
  } finally {
    loading.value = false
  }
}

const viewUser = (userId: string) => {
  // TODO: Implement user detail view
  console.log('View user:', userId)
}

onMounted(() => {
  loadUsers()
})
</script>

<style scoped>
.admin-dashboard {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.loading {
  text-align: center;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #718096;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #e2e8f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.stat-card h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #718096;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

.section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
}

.user-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.user-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.user-email {
  color: #718096;
  font-size: 0.9rem;
  margin: 0 0 0.5rem 0;
}

.role-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: capitalize;
}

.role-badge.admin {
  background: #fed7d7;
  color: #c53030;
}

.role-badge.teacher {
  background: #bee3f8;
  color: #2c5282;
}

.role-badge.student {
  background: #c6f6d5;
  color: #22543d;
}

.user-actions {
  display: flex;
  gap: 0.5rem;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 0.875rem;
}

.btn-secondary {
  background: #edf2f7;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #e2e8f0;
}
</style>











