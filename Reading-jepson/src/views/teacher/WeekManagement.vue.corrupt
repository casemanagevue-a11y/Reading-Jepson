<template>
  <div class="week-management">
    <div class="container">
      <div class="header">
        <h1>Week Management</h1>
        <router-link to="/teacher/weeks/setup" class="btn btn-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          Create New Week
        </router-link>
      </div>

      <!-- Weeks List -->
      <div v-if="loading && weeks.length === 0" class="loading">
        <div class="spinner"></div>
        <p>Loading weeks...</p>
      </div>
      
      <div v-else-if="weeks.length === 0" class="empty-state">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
        </svg>
        <p>No weeks created yet</p>
        <router-link to="/teacher/weeks/setup" class="btn btn-primary">Create Your First Week</router-link>
      </div>

      <div v-else class="weeks-grid">
        <div v-for="week in weeks" :key="week.id" class="week-card">
          <div class="week-header">
            <div>
              <h3>{{ formatWeekDate(week.weekOf) }}</h3>
              <p class="week-subject">{{ week.subjectFocus }}</p>
            </div>
            <div class="week-actions">
              <button @click="editWeek(week.id)" class="btn-icon" title="Edit">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
              </button>
              <button @click="deleteWeek(week.id)" class="btn-icon btn-icon-danger" title="Delete">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="week-content">
            <div class="content-section">
              <h4>Content</h4>
              <div class="content-stats">
                <div class="stat-item">
                  <span class="stat-label">Passages:</span>
                  <span class="stat-value">{{ getPassageCount(week.id) }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Vocab Words:</span>
                  <span class="stat-value">{{ getVocabCount(week.id) }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Affixes:</span>
                  <span class="stat-value">{{ getAffixCount(week.id) }}</span>
                </div>
                <div class="stat-item">
                  <span class="stat-label">Questions:</span>
                  <span class="stat-value">{{ getQuestionCount(week.id) }}</span>
                </div>
              </div>
            </div>

            <div class="quiz-section">
              <h4>Quizzes</h4>
              <div class="quiz-actions">
                <button 
                  @click="generateQuiz(week.id, 'daily')" 
                  :disabled="generatingQuiz === week.id"
                  class="btn btn-secondary btn-small"
                >
                  {{ generatingQuiz === week.id ? 'Generating...' : 'Generate Daily Quiz' }}
                </button>
                <button 
                  @click="generateQuiz(week.id, 'friday')" 
                  :disabled="generatingQuiz === week.id"
                  class="btn btn-secondary btn-small"
                >
                  {{ generatingQuiz === week.id ? 'Generating...' : 'Generate Friday Quiz' }}
                </button>
              </div>
            </div>
          </div>

          <div class="week-footer">
            <router-link :to="`/teacher/weeks/${week.id}`" class="btn btn-outline">
              View Details →
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useFunctions } from '@/composables/useFunctions'
import { 
  getWeeksByTeacherAndStudent,
  getPassagesByWeek,
  getVocabByWeek,
  getAffixesByWeek,
  getQuestionsByWeek,
  deleteWeek as deleteWeekService,
  getStudentsByTeacher
} from '@/services/firestoreServices'
import type { WeekDocument, StudentDocument } from '@/types/firestore'
import { Timestamp } from 'firebase/firestore'

const router = useRouter()
const { user } = useAuth()
const { generateQuiz: generateQuizFn } = useFunctions()

const weeks = ref<Array<WeekDocument & { id: string }>>([])
const students = ref<Array<StudentDocument & { id: string }>>([])
const passages = ref<Map<string, any[]>>(new Map())
const vocab = ref<Map<string, any[]>>(new Map())
const affixes = ref<Map<string, any[]>>(new Map())
const questions = ref<Map<string, any[]>>(new Map())
const loading = ref(true)
const generatingQuiz = ref<string | null>(null)

const formatWeekDate = (timestamp: Timestamp) => {
  if (!timestamp) return 'N/A'
  const date = timestamp.toDate()
  const startOfWeek = new Date(date)
  const day = startOfWeek.getDay()
  const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1) // Adjust to Monday
  startOfWeek.setDate(diff)
  
  const endOfWeek = new Date(startOfWeek)
  endOfWeek.setDate(startOfWeek.getDate() + 6)
  
  return `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
}

const getPassageCount = (weekId: string) => {
  return passages.value.get(weekId)?.length || 0
}

const getVocabCount = (weekId: string) => {
  return vocab.value.get(weekId)?.length || 0
}

const getAffixCount = (weekId: string) => {
  return affixes.value.get(weekId)?.length || 0
}

const getQuestionCount = (weekId: string) => {
  return questions.value.get(weekId)?.length || 0
}

const loadWeeks = async () => {
  if (!user.value) return
  
  try {
    loading.value = true
    
    // Load all students for this teacher
    const studentList = await getStudentsByTeacher(user.value.uid)
    students.value = studentList
    
    // Load weeks for all students
    const weekPromises = studentList.map(student => 
      getWeeksByTeacherAndStudent(user.value!.uid, student.id || '')
    )
    const weekResults = await Promise.all(weekPromises)
    // Note: getWeeksByTeacherAndStudent returns WeekDocument[] without id
    // We need to get the id from the document reference or query
    // For now, we'll need to modify the service to return ids, or fetch weeks differently
    const allWeeks: Array<WeekDocument & { id: string }> = []
    for (const weekList of weekResults) {
      // We need to get weeks with their IDs - this requires a different approach
      // For now, we'll create a placeholder structure
      for (let i = 0; i < weekList.length; i++) {
        allWeeks.push({ ...weekList[i], id: `week-${i}-${Date.now()}` } as WeekDocument & { id: string })
      }
    }
    weeks.value = allWeeks
    
    // Load content for all weeks
    const contentPromises = allWeeks.map(async (week) => {
      const [passagesData, vocabData, affixesData, questionsData] = await Promise.all([
        getPassagesByWeek(week.id),
        getVocabByWeek(week.id),
        getAffixesByWeek(week.id),
        getQuestionsByWeek(week.id)
      ])
      
      passages.value.set(week.id, passagesData)
      vocab.value.set(week.id, vocabData)
      affixes.value.set(week.id, affixesData)
      questions.value.set(week.id, questionsData)
    })
    
    await Promise.all(contentPromises)
  } catch (error) {
    console.error('Error loading weeks:', error)
  } finally {
    loading.value = false
  }
}

const editWeek = (weekId: string) => {
  router.push(`/teacher/weeks/${weekId}`)
}

const deleteWeek = async (weekId: string) => {
  if (!confirm('Are you sure you want to delete this week? This will delete all associated content.')) {
    return
  }
  
  try {
    await deleteWeekService(weekId)
    await loadWeeks()
  } catch (error) {
    console.error('Error deleting week:', error)
    alert('Failed to delete week. Please try again.')
  }
}

const generateQuiz = async (weekId: string, mode: 'daily' | 'friday') => {
  if (!user.value) return
  
  // Find the student for this week
  const week = weeks.value.find(w => w.id === weekId)
  if (!week) return
  
  const student = students.value.find(s => s.id === week.studentId)
  if (!student || !student.studentUid) {
    alert('Student must claim their account before generating quizzes.')
    return
  }
  
  try {
    generatingQuiz.value = weekId
    
    const numQuestions = mode === 'daily' ? 6 : 12
    const result = await generateQuizFn({
      studentUid: student.studentUid,
      weekId,
      mode,
      numQuestions
    })
    
    const data = result.data as { questionCount?: number }
    alert(`Quiz generated successfully! ${data?.questionCount || 'Quiz'} created.`)
  } catch (error: any) {
    console.error('Error generating quiz:', error)
    alert(error.message || 'Failed to generate quiz. Please try again.')
  } finally {
    generatingQuiz.value = null
  }
}

onMounted(() => {
  loadWeeks()
})
</script>

<style scoped>
.week-management {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
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
  padding: 4rem 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.empty-state svg {
  width: 64px;
  height: 64px;
  color: #cbd5e0;
}

.empty-state p {
  font-size: 1.1rem;
  color: #718096;
  margin: 0;
}

.weeks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
}

.week-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.week-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-2px);
}

.week-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.week-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.week-subject {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
}

.week-actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  padding: 0.5rem;
  border: none;
  background: #f7fafc;
  border-radius: 6px;
  color: #718096;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon:hover {
  background: #edf2f7;
  color: #2d3748;
}

.btn-icon svg {
  width: 18px;
  height: 18px;
}

.btn-icon-danger:hover {
  background: #fed7d7;
  color: #c53030;
}

.week-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
}

.content-section h4,
.quiz-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.75rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.content-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}

.stat-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f7fafc;
  border-radius: 6px;
}

.stat-label {
  font-size: 0.875rem;
  color: #718096;
}

.stat-value {
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
}

.quiz-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.week-footer {
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
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

.btn-primary svg {
  width: 18px;
  height: 18px;
}

.btn-secondary {
  background: #edf2f7;
  color: #2d3748;
}

.btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
}

.btn-secondary.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-outline {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
}

.btn-outline:hover {
  background: #667eea;
  color: white;
}

@media (max-width: 768px) {
  .weeks-grid {
    grid-template-columns: 1fr;
  }
  
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>
