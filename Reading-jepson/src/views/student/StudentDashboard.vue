<template>
  <div class="student-dashboard">
    <div class="container">
      <div class="dashboard-header">
        <div>
          <h1>Welcome, {{ userProfile?.displayName || 'Student' }}!</h1>
          <p class="subtitle">Your reading practice and progress</p>
        </div>
      </div>
      
      <!-- Stats Overview -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon quizzes">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Total Quizzes</p>
            <p class="stat-value">{{ quizzes.length }}</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon completed">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Completed</p>
            <p class="stat-value">{{ completedCount }}</p>
          </div>
        </div>
        
        <div class="stat-card">
          <div class="stat-icon pending">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="stat-content">
            <p class="stat-label">Pending</p>
            <p class="stat-value">{{ pendingCount }}</p>
          </div>
        </div>
      </div>
      
      <!-- Quizzes Section -->
      <div class="quizzes-section">
        <div class="section-header">
          <h2>My Quizzes</h2>
          <div class="filter-tabs">
            <button 
              :class="['filter-tab', filter === 'all' ? 'active' : '']"
              @click="filter = 'all'"
            >
              All
            </button>
            <button 
              :class="['filter-tab', filter === 'pending' ? 'active' : '']"
              @click="filter = 'pending'"
            >
              Pending
            </button>
            <button 
              :class="['filter-tab', filter === 'completed' ? 'active' : '']"
              @click="filter = 'completed'"
            >
              Completed
            </button>
          </div>
        </div>
        
        <div v-if="loading" class="loading">
          <div class="spinner"></div>
          <p>Loading quizzes...</p>
        </div>
        
        <div v-else-if="filteredQuizzes.length === 0" class="empty-state">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
          </svg>
          <p>{{ filter === 'all' ? 'No quizzes assigned yet' : `No ${filter} quizzes` }}</p>
          <p class="empty-subtitle">Check back later for new assignments!</p>
        </div>
        
        <div v-else class="quiz-grid">
          <div 
            v-for="quiz in filteredQuizzes" 
            :key="quiz.id" 
            :class="['quiz-card', quiz.completedAt ? 'completed' : 'pending']"
          >
            <div class="quiz-header">
              <div class="quiz-type-badge" :class="quiz.mode">
                {{ quiz.mode === 'daily' ? 'Daily' : 'Friday' }}
              </div>
              <span v-if="quiz.completedAt" class="status-badge completed-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                Completed
              </span>
              <span v-else class="status-badge pending-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Pending
              </span>
            </div>
            
            <div class="quiz-body">
              <h3>{{ quiz.mode === 'daily' ? 'Daily Vocabulary Quiz' : 'Friday Assessment' }}</h3>
              <div class="quiz-meta">
                <div class="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Assigned: {{ formatDate(quiz.assignedAt) }}</span>
                </div>
                <div class="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>Due: {{ formatDate(quiz.dueAt) }}</span>
                </div>
                <div class="meta-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="8" y1="6" x2="21" y2="6"></line>
                    <line x1="8" y1="12" x2="21" y2="12"></line>
                    <line x1="8" y1="18" x2="21" y2="18"></line>
                    <line x1="3" y1="6" x2="3.01" y2="6"></line>
                    <line x1="3" y1="12" x2="3.01" y2="12"></line>
                    <line x1="3" y1="18" x2="3.01" y2="18"></line>
                  </svg>
                  <span>{{ quiz.questionCount }} Questions</span>
                </div>
              </div>
            </div>
            
            <div class="quiz-footer">
              <router-link 
                v-if="!quiz.completedAt" 
                :to="`/student/quiz/${quiz.id}`" 
                class="btn btn-primary"
              >
                <span>Take Quiz</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </router-link>
              <div v-else class="btn btn-completed">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Completed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { getQuizzesByStudent } from '@/services/firestoreServices'
import type { QuizPublicDocument } from '@/types/firestore'
import { Timestamp } from 'firebase/firestore'

const { user, userProfile } = useAuth()
const quizzes = ref<Array<QuizPublicDocument & { id: string }>>([])
const loading = ref(true)
const filter = ref<'all' | 'pending' | 'completed'>('all')

const completedCount = computed(() => {
  return quizzes.value.filter(q => q.completedAt).length
})

const pendingCount = computed(() => {
  return quizzes.value.filter(q => !q.completedAt).length
})

const filteredQuizzes = computed(() => {
  if (filter.value === 'all') return quizzes.value
  if (filter.value === 'completed') {
    return quizzes.value.filter(q => q.completedAt)
  }
  return quizzes.value.filter(q => !q.completedAt)
})

const formatDate = (timestamp: Timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate()
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

onMounted(async () => {
  if (user.value) {
    try {
      const quizList = await getQuizzesByStudent(user.value.uid)
      quizzes.value = quizList.map(q => ({ ...q, id: q.id || '' }))
    } catch (error) {
      console.error('Error loading quizzes:', error)
    } finally {
      loading.value = false
    }
  }
})
</script>

<style scoped>
.student-dashboard {
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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

.stat-icon.quizzes {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.stat-icon.completed {
  background: linear-gradient(135deg, #48bb78 0%, #38a169 100%);
  color: white;
}

.stat-icon.pending {
  background: linear-gradient(135deg, #ed8936 0%, #dd6b20 100%);
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

.quizzes-section {
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
  flex-wrap: wrap;
  gap: 1rem;
}

.section-header h2 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.filter-tabs {
  display: flex;
  gap: 0.5rem;
  background: #f7fafc;
  padding: 0.25rem;
  border-radius: 8px;
}

.filter-tab {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: #718096;
  font-weight: 500;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s;
}

.filter-tab:hover {
  color: #2d3748;
}

.filter-tab.active {
  background: white;
  color: #667eea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
  font-weight: 500;
}

.empty-subtitle {
  font-size: 0.9rem;
  color: #a0aec0;
  margin-top: 0.5rem;
}

.quiz-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}

.quiz-card {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quiz-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.quiz-card.completed {
  border-color: #c6f6d5;
  background: #f0fff4;
}

.quiz-card.pending {
  border-color: #feebc8;
  background: #fffaf0;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.75rem;
}

.quiz-type-badge {
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.quiz-type-badge.daily {
  background: #e6fffa;
  color: #234e52;
}

.quiz-type-badge.friday {
  background: #fef5e7;
  color: #744210;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
}

.status-badge svg {
  width: 14px;
  height: 14px;
}

.completed-badge {
  background: #c6f6d5;
  color: #22543d;
}

.pending-badge {
  background: #feebc8;
  color: #744210;
}

.quiz-body h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.quiz-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #718096;
  font-size: 0.875rem;
}

.meta-item svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.quiz-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.btn {
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
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

.btn-primary svg {
  width: 18px;
  height: 18px;
}

.btn-completed {
  background: #c6f6d5;
  color: #22543d;
  cursor: default;
}

.btn-completed svg {
  width: 18px;
  height: 18px;
}
</style>
