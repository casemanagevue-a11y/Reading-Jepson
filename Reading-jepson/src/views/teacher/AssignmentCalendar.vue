<template>
  <div class="assignment-calendar">
    <div class="container">
      <div class="header">
        <h1>Assignment Calendar</h1>
        <p class="subtitle">View and manage weekly lesson plans</p>
      </div>

      <!-- Student & View Selector -->
      <div class="calendar-controls">
        <div class="controls-left">
          <div class="form-group">
            <label>Student</label>
            <select v-model="selectedStudentId" class="form-input" @change="loadAssignments">
              <option value="">Select a student</option>
              <option v-for="student in students" :key="student.id" :value="student.id">
                {{ student.displayName }}
              </option>
            </select>
          </div>

          <div class="view-toggle">
            <button 
              :class="['view-btn', { active: viewMode === 'week' }]" 
              @click="viewMode = 'week'"
            >
              Week
            </button>
            <button 
              :class="['view-btn', { active: viewMode === 'month' }]" 
              @click="viewMode = 'month'"
            >
              Month
            </button>
          </div>
        </div>

        <div class="controls-right">
          <button @click="previousPeriod" class="btn btn-secondary">← Previous</button>
          <button @click="goToToday" class="btn btn-secondary">Today</button>
          <button @click="nextPeriod" class="btn btn-secondary">Next →</button>
        </div>
      </div>

      <!-- Calendar Display -->
      <div v-if="!selectedStudentId" class="empty-state">
        <p>Select a student to view their assignment calendar</p>
      </div>

      <div v-else-if="loading" class="loading">Loading assignments...</div>

      <div v-else class="calendar-view">
        <div class="calendar-header">
          <h2>{{ currentPeriodTitle }}</h2>
          <div class="calendar-actions">
            <router-link 
              v-if="currentWeekAssignment"
              :to="`/teacher/assignments/print?assignmentId=${currentWeekAssignment.id}&studentId=${selectedStudentId}&version=teacher`" 
              class="btn btn-primary btn-sm"
            >
              👨‍🏫 Teacher Materials
            </router-link>
            <router-link 
              v-if="currentWeekAssignment"
              :to="`/teacher/assignments/print?assignmentId=${currentWeekAssignment.id}&studentId=${selectedStudentId}&version=student`" 
              class="btn btn-secondary btn-sm"
            >
              👨‍🎓 Student Workbook
            </router-link>
            <router-link 
              v-if="currentWeekAssignment"
              :to="`/teacher/assignments/assess?assignmentId=${currentWeekAssignment.id}`" 
              class="btn btn-primary btn-sm"
            >
              📝 Enter Assessment Data
            </router-link>
          </div>
        </div>

        <!-- Week View -->
        <div v-if="viewMode === 'week'" class="week-view">
          <div v-if="!currentWeekAssignment" class="no-assignment">
            <p>No assignment for this week</p>
            <router-link to="/teacher/week-assignments" class="btn btn-primary">Create Assignment</router-link>
          </div>
          <div v-else class="week-plan">
            <div class="week-info-bar">
              <div class="week-meta">
                <span class="quarter-badge">Q{{ currentWeekAssignment.quarter }}</span>
                <span class="week-badge">Week {{ currentWeekAssignment.weekNumber }}</span>
                <span class="template-name">{{ getTemplateName(currentWeekAssignment.weekTemplateId) }}</span>
              </div>
              <div class="week-dates">
                {{ formatDate(currentWeekAssignment.startDate.toDate()) }} - {{ formatDate(currentWeekAssignment.endDate.toDate()) }}
              </div>
            </div>

            <div class="daily-plan">
              <div v-for="day in weekDays" :key="day.number" :class="['day-card', { today: day.isToday }]">
                <div class="day-header">
                  <h3>Day {{ day.number }}</h3>
                  <span class="day-date">{{ day.dateStr }}</span>
                </div>
                <div class="day-content">
                  <div v-if="day.number === 1" class="activity">
                    <h4>📚 Vocabulary & Affixes</h4>
                    <p v-if="weekContent.vocab.length > 0">
                      {{ weekContent.vocab.length }} words: 
                      {{ weekContent.vocab.map(v => v.word).join(', ') }}
                    </p>
                    <p v-if="weekContent.affixes.length > 0">
                      {{ weekContent.affixes.length }} affixes: 
                      {{ weekContent.affixes.map(a => a.affix).join(', ') }}
                    </p>
                  </div>

                  <div v-if="day.number === 2" class="activity">
                    <h4>📖 First Read</h4>
                    <p v-if="weekContent.weeklyPassage">
                      Passage: <strong>{{ weekContent.weeklyPassage.title }}</strong>
                    </p>
                    <p v-if="weekContent.day2Questions.length > 0">
                      {{ weekContent.day2Questions.length }} literal comprehension questions
                    </p>
                  </div>

                  <div v-if="day.number === 3" class="activity">
                    <h4>🔄 Reread & Practice</h4>
                    <p>Vocabulary review & passage rereading</p>
                  </div>

                  <div v-if="day.number === 4" class="activity">
                    <h4>💡 Main Idea & Details</h4>
                    <p v-if="weekContent.day4Questions.length > 0">
                      {{ weekContent.day4Questions.length }} main idea questions
                    </p>
                  </div>

                  <div v-if="day.number === 5" class="activity">
                    <h4>✅ Friday Assessment</h4>
                    <p v-if="weekContent.fridayPassage">
                      Passage: <strong>{{ weekContent.fridayPassage.title }}</strong>
                    </p>
                    <p v-if="weekContent.day5Questions.length > 0">
                      {{ weekContent.day5Questions.length }} assessment questions
                    </p>
                    <p class="assessment-note">📊 WPM & Accuracy tracking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Month View -->
        <div v-if="viewMode === 'month'" class="month-view">
          <div class="month-grid">
            <div v-for="day in monthDays" :key="day.dateStr" :class="['month-day', { 
              today: day.isToday,
              'has-assignment': day.assignment,
              weekend: day.isWeekend
            }]">
              <div class="month-day-header">
                <span class="day-number">{{ day.dayNumber }}</span>
                <span v-if="day.dayName === 'Mon'" class="day-name">{{ day.dayName }}</span>
              </div>
              <div v-if="day.assignment" class="month-day-content">
                <div class="assignment-badge">
                  Q{{ day.assignment.quarter }} W{{ day.assignment.weekNumber }}
                </div>
                <p class="assignment-activity">{{ day.activityName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { 
  getStudentsByTeacher,
  getWeekAssignmentsByStudent,
  getPassagesByWeek,
  getVocabByWeek,
  getAffixesByWeek,
  getQuestionsByWeek
} from '@/services/firestoreServices'
import type { 
  StudentDocument, 
  WeekAssignmentDocument,
  PassageDocument,
  VocabDocument,
  AffixDocument,
  ComprehensionQuestionDocument
} from '@/types/firestore'

const { user, loading: authLoading } = useAuth()

const students = ref<Array<StudentDocument & { id: string }>>([])
const selectedStudentId = ref('')
const viewMode = ref<'week' | 'month'>('week')
const currentDate = ref(new Date())
const assignments = ref<Array<WeekAssignmentDocument & { id: string }>>([])
const loading = ref(false)

const weekContent = ref<{
  vocab: VocabDocument[]
  affixes: AffixDocument[]
  weeklyPassage: PassageDocument | null
  fridayPassage: PassageDocument | null
  day2Questions: ComprehensionQuestionDocument[]
  day4Questions: ComprehensionQuestionDocument[]
  day5Questions: ComprehensionQuestionDocument[]
}>({
  vocab: [],
  affixes: [],
  weeklyPassage: null,
  fridayPassage: null,
  day2Questions: [],
  day4Questions: [],
  day5Questions: []
})

const currentWeekAssignment = computed(() => {
  if (!assignments.value.length) return null
  
  // Find assignment that includes current date
  const current = currentDate.value
  return assignments.value.find(a => {
    const start = a.startDate.toDate()
    const end = a.endDate.toDate()
    return current >= start && current <= end
  })
})

const currentPeriodTitle = computed(() => {
  if (viewMode.value === 'week') {
    const start = getWeekStart(currentDate.value)
    const end = getWeekEnd(currentDate.value)
    return `Week of ${formatDate(start)} - ${formatDate(end)}`
  } else {
    return currentDate.value.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }
})

const weekDays = computed(() => {
  if (!currentWeekAssignment.value) return []
  
  const start = currentWeekAssignment.value.startDate.toDate()
  const days = []
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  for (let i = 0; i < 5; i++) {
    const date = new Date(start)
    date.setDate(date.getDate() + i)
    
    const isToday = date.getTime() === today.getTime()
    
    days.push({
      number: i + 1,
      dateStr: formatDate(date),
      isToday
    })
  }
  
  return days
})

const monthDays = computed(() => {
  const year = currentDate.value.getFullYear()
  const month = currentDate.value.getMonth()
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  
  const days = []
  
  // Add padding for days before month starts
  const startDayOfWeek = firstDay.getDay()
  for (let i = 0; i < startDayOfWeek; i++) {
    days.push({ dateStr: '', dayNumber: 0, isWeekend: false })
  }
  
  // Add all days in month
  for (let day = 1; day <= lastDay.getDate(); day++) {
    const date = new Date(year, month, day)
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const isToday = date.getTime() === today.getTime()
    
    // Find assignment for this date
    const assignment = assignments.value.find(a => {
      const start = a.startDate.toDate()
      const end = a.endDate.toDate()
      return date >= start && date <= end
    })
    
    // Determine which day of the week it is in the assignment
    let activityName = ''
    if (assignment) {
      const start = assignment.startDate.toDate()
      const dayInWeek = Math.floor((date.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1
      const activities = ['Vocab & Affixes', 'First Read', 'Reread', 'Main Idea', 'Assessment']
      activityName = activities[dayInWeek - 1] || ''
    }
    
    days.push({
      dateStr: `${year}-${month + 1}-${day}`,
      dayNumber: day,
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' }),
      isWeekend,
      isToday,
      assignment,
      activityName
    })
  }
  
  return days
})

const getWeekStart = (date: Date) => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = d.getDate() - day + (day === 0 ? -6 : 1) // Adjust when day is Sunday
  return new Date(d.setDate(diff))
}

const getWeekEnd = (date: Date) => {
  const start = getWeekStart(date)
  const end = new Date(start)
  end.setDate(end.getDate() + 6)
  return end
}

const formatDate = (date: Date) => {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const getTemplateName = (templateId: string) => {
  // This would be loaded from templates - simplified for now
  return `Template ${templateId.substring(0, 8)}`
}

const previousPeriod = () => {
  if (viewMode.value === 'week') {
    currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() - 7))
  } else {
    currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() - 1))
  }
  if (currentWeekAssignment.value) {
    loadWeekContent()
  }
}

const nextPeriod = () => {
  if (viewMode.value === 'week') {
    currentDate.value = new Date(currentDate.value.setDate(currentDate.value.getDate() + 7))
  } else {
    currentDate.value = new Date(currentDate.value.setMonth(currentDate.value.getMonth() + 1))
  }
  if (currentWeekAssignment.value) {
    loadWeekContent()
  }
}

const goToToday = () => {
  currentDate.value = new Date()
  if (currentWeekAssignment.value) {
    loadWeekContent()
  }
}

const loadStudents = async () => {
  if (!user.value) return
  try {
    const studentList = await getStudentsByTeacher(user.value.uid)
    students.value = studentList
  } catch (err: any) {
    console.error('Error loading students:', err)
  }
}

const loadAssignments = async () => {
  if (!selectedStudentId.value) {
    assignments.value = []
    return
  }
  
  try {
    loading.value = true
    const assignmentList = await getWeekAssignmentsByStudent(selectedStudentId.value)
    assignments.value = assignmentList
    
    if (currentWeekAssignment.value) {
      await loadWeekContent()
    }
  } catch (err: any) {
    console.error('Error loading assignments:', err)
  } finally {
    loading.value = false
  }
}

const loadWeekContent = async () => {
  if (!currentWeekAssignment.value) return
  
  const templateId = currentWeekAssignment.value.weekTemplateId
  
  try {
    const [passages, vocab, affixes, questions] = await Promise.all([
      getPassagesByWeek(templateId),
      getVocabByWeek(templateId),
      getAffixesByWeek(templateId),
      getQuestionsByWeek(templateId)
    ])
    
    weekContent.value = {
      vocab,
      affixes,
      weeklyPassage: passages.find(p => p.type === 'weekly') || null,
      fridayPassage: passages.find(p => p.type === 'friday') || null,
      day2Questions: questions.filter(q => q.day === 2),
      day4Questions: questions.filter(q => q.day === 4),
      day5Questions: questions.filter(q => q.day === 5)
    }
  } catch (err: any) {
    console.error('Error loading week content:', err)
  }
}

watch([authLoading, user], ([isLoading, currentUser]) => {
  if (!isLoading && currentUser) {
    loadStudents()
  }
}, { immediate: true })

watch(currentWeekAssignment, (newAssignment) => {
  if (newAssignment) {
    loadWeekContent()
  }
})
</script>

<style scoped>
.assignment-calendar {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1400px;
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

.calendar-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.controls-left {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;
}

.controls-right {
  display: flex;
  gap: 0.5rem;
}

.form-group {
  margin: 0;
  min-width: 200px;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2d3748;
  font-size: 0.875rem;
}

.form-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 0.9rem;
}

.view-toggle {
  display: flex;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  overflow: hidden;
}

.view-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: white;
  color: #718096;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: 500;
}

.view-btn:not(:last-child) {
  border-right: 1px solid #cbd5e0;
}

.view-btn.active {
  background: #4a90e2;
  color: white;
}

.view-btn:hover:not(.active) {
  background: #edf2f7;
}

.empty-state,
.loading,
.no-assignment {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  color: #718096;
}

.calendar-view {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.calendar-header h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.calendar-actions {
  display: flex;
  gap: 0.75rem;
}

.week-info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #edf2f7;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.week-meta {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.quarter-badge,
.week-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.quarter-badge {
  background: #4a90e2;
  color: white;
}

.week-badge {
  background: #48bb78;
  color: white;
}

.template-name {
  font-weight: 600;
  color: #2d3748;
}

.week-dates {
  color: #718096;
  font-size: 0.9rem;
}

.daily-plan {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
}

.day-card {
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  background: white;
  transition: all 0.2s;
}

.day-card.today {
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.day-header {
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
}

.day-header h3 {
  font-size: 1rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.25rem 0;
}

.day-date {
  font-size: 0.75rem;
  color: #718096;
}

.day-content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.activity h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.activity p {
  font-size: 0.8125rem;
  color: #4a5568;
  margin: 0.25rem 0;
  line-height: 1.5;
}

.assessment-note {
  font-style: italic;
  color: #718096 !important;
}

.month-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: #cbd5e0;
  border: 1px solid #cbd5e0;
  border-radius: 8px;
  overflow: hidden;
}

.month-day {
  background: white;
  min-height: 100px;
  padding: 0.5rem;
}

.month-day.weekend {
  background: #f7fafc;
}

.month-day.today {
  background: #ebf8ff;
}

.month-day.has-assignment {
  background: #fefcbf;
}

.month-day-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.day-number {
  font-weight: 600;
  color: #2d3748;
}

.day-name {
  font-size: 0.75rem;
  color: #718096;
}

.month-day-content {
  font-size: 0.75rem;
}

.assignment-badge {
  background: #4a90e2;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-size: 0.625rem;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 0.25rem;
}

.assignment-activity {
  color: #4a5568;
  margin: 0.25rem 0 0 0;
  line-height: 1.3;
}

.btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #4a90e2;
  color: white;
  text-decoration: none;
  display: inline-block;
}

.btn-primary:hover {
  background: #357abd;
}

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
}

.btn-sm {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}
</style>