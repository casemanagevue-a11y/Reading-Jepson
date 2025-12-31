<template>
  <div class="teacher-dashboard">
    <div class="container">
      <div class="dashboard-header">
        <div>
          <h1>Welcome back, {{ userProfile?.displayName || 'Teacher' }}!</h1>
          <p class="subtitle">Manage your students and weekly content</p>
        </div>
      </div>
      
      <!-- Stats Cards -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon students">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Total Students</p>
            <p class="stat-value">{{ students.length }}</p>
          </div>
          <router-link to="/teacher/students" class="stat-link">Manage →</router-link>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon weeks">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Active Weeks</p>
            <p class="stat-value">{{ activeWeeksCount }}</p>
          </div>
          <router-link to="/teacher/weeks" class="stat-link">Manage →</router-link>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon quizzes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Pending Quizzes</p>
            <p class="stat-value">{{ pendingQuizzesCount }}</p>
          </div>
        </div>
      </div>
      
      <!-- Quick Actions -->
      <div class="quick-actions">
        <h2>Quick Actions</h2>
        <div class="actions-grid">
          <router-link to="/teacher/week-templates/create" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </div>
            <h3>Create Template</h3>
            <p>Build a reusable lesson plan</p>
          </router-link>
          
          <router-link to="/teacher/week-assignments" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>Assign to Students</h3>
            <p>Give students their 9 weeks</p>
          </router-link>
          
          <router-link to="/teacher/students" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="8.5" cy="7" r="4"></circle>
                <line x1="20" y1="8" x2="20" y2="14"></line>
                <line x1="23" y1="11" x2="17" y2="11"></line>
              </svg>
            </div>
            <h3>Manage Students</h3>
            <p>Add & import students</p>
          </router-link>
          
          <router-link to="/teacher/calendar" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
              </svg>
            </div>
            <h3>School Calendar</h3>
            <p>Manage days off</p>
          </router-link>
          
          <router-link to="/teacher/library" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </div>
            <h3>Content Library</h3>
            <p>Vocab & passages</p>
          </router-link>
          
          <router-link to="/teacher/week-templates" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
              </svg>
            </div>
            <h3>View Templates</h3>
            <p>Browse lesson plans</p>
          </router-link>
          
          <router-link to="/teacher/assignments/calendar" class="action-card">
            <div class="action-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <h3>📅 Assignment Calendar</h3>
            <p>View week-by-week plans</p>
          </router-link>
        </div>
      </div>
      
      <!-- Recent Students -->
      <div class="recent-section">
        <div class="section-header">
          <h2>Recent Students</h2>
          <router-link to="/teacher/students" class="view-all">View All →</router-link>
        </div>
        <div v-if="loading" class="loading">
          <div class="spinner"></div>
          <p>Loading students...</p>
        </div>
        <div v-else-if="students.length === 0" class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          <p>No students yet</p>
          <router-link to="/teacher/students" class="btn btn-primary">Add Your First Student</router-link>
        </div>
        <div v-else class="student-grid">
          <div v-for="student in students.slice(0, 6)" :key="student.id" class="student-card">
            <div class="student-avatar">
              {{ student.displayName.charAt(0).toUpperCase() }}
            </div>
            <div class="student-info">
              <h3>{{ student.displayName }}</h3>
              <p class="student-email">{{ student.studentEmail }}</p>
              <span :class="['status-badge', student.active ? 'active' : 'inactive']">
                {{ student.active ? 'Active' : 'Inactive' }}
              </span>
            </div>
            <router-link :to="`/teacher/students/${student.id}`" class="student-link">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { getStudentsByTeacher, getWeeksByTeacherAndStudent } from '@/services/firestoreServices'
import type { StudentDocument } from '@/types/firestore'

const { user, userProfile } = useAuth()
const students = ref<Array<StudentDocument & { id: string }>>([])
const weeks = ref<any[]>([])
const loading = ref(true)

const activeWeeksCount = computed(() => {
  // Count unique weeks across all students
  return weeks.value.length
})

const pendingQuizzesCount = computed(() => {
  // TODO: Calculate pending quizzes
  return 0
})

onMounted(async () => {
  if (user.value) {
    try {
      const studentList = await getStudentsByTeacher(user.value.uid)
      students.value = studentList.map(s => ({ ...s, id: s.id || '' }))
      
      // Load weeks for all students
      const weekPromises = studentList.map(student => 
        getWeeksByTeacherAndStudent(user.value!.uid, student.id || '')
      )
      const weekResults = await Promise.all(weekPromises)
      weeks.value = weekResults.flat()
    } catch (error) {
      console.error('Error loading dashboard data:', error)
    } finally {
      loading.value = false
    }
  }
})
</script>

<style scoped>
.teacher-dashboard {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-header {
  margin-bottom: 2rem;
}

.dashboard-header h1 {
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

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  overflow: hidden;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon svg {
  width: 28px;
  height: 28px;
}

.stat-icon.students {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stat-icon.weeks {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.stat-icon.quizzes {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-label {
  color: #718096;
  font-size: 0.875rem;
  margin: 0 0 0.25rem 0;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

.stat-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.stat-link:hover {
  color: #764ba2;
}

.quick-actions {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.quick-actions h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.action-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  text-decoration: none;
  color: #2d3748;
  transition: all 0.2s;
  font-weight: 500;
}

.action-card:hover {
  border-color: #667eea;
  background: #f7fafc;
  transform: translateX(4px);
}

.action-card svg {
  width: 24px;
  height: 24px;
  color: #667eea;
}

.recent-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.view-all {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.view-all:hover {
  color: #764ba2;
}

.loading {
  text-align: center;
  padding: 3rem;
  color: #718096;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
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

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #718096;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-state svg {
  width: 64px;
  height: 64px;
  color: #cbd5e0;
  margin-bottom: 0.5rem;
}

.empty-state p {
  font-size: 1.1rem;
  margin: 0;
}

.student-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.student-card {
  background: #f7fafc;
  padding: 1.25rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.2s;
  position: relative;
}

.student-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.student-avatar {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.student-info {
  flex: 1;
  min-width: 0;
}

.student-info h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.student-email {
  font-size: 0.875rem;
  color: #718096;
  margin: 0 0 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge.active {
  background: #c6f6d5;
  color: #22543d;
}

.status-badge.inactive {
  background: #fed7d7;
  color: #742a2a;
}

.student-link {
  color: #667eea;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 8px;
  transition: background 0.2s;
  flex-shrink: 0;
}

.student-link:hover {
  background: #edf2f7;
}

.student-link svg {
  width: 20px;
  height: 20px;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.5);
}
</style>
