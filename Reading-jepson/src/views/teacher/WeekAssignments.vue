<template>
  <div class="week-assignments">
    <div class="container">
      <div class="header">
        <h1>Assign Week Templates to Students</h1>
        <p class="subtitle">Assign 9 week lessons per quarter to each student</p>
      </div>

      <div class="assignment-form">
        <h2>Create Assignment</h2>
        
        <div class="form-group">
          <label>Student</label>
          <select v-model="assignmentData.studentId" class="form-input" required>
            <option value="">Select a student</option>
            <option v-for="student in students" :key="student.id" :value="student.id">
              {{ student.displayName }}
            </option>
          </select>
        </div>

        <div class="form-group">
          <label>Quarter</label>
          <select v-model="assignmentData.quarter" class="form-input" required @change="loadQuarterDates">
            <option :value="1">Quarter 1</option>
            <option :value="2">Quarter 2</option>
            <option :value="3">Quarter 3</option>
            <option :value="4">Quarter 4</option>
          </select>
        </div>

        <div class="form-group">
          <label>Week Number (1-9)</label>
          <select v-model="assignmentData.weekNumber" class="form-input" required @change="calculateWeekDates">
            <option v-for="week in 9" :key="week" :value="week">Week {{ week }}</option>
          </select>
        </div>

        <div v-if="calculatedDates.startDate" class="date-preview">
          <p><strong>Week Dates:</strong> {{ formatDate(calculatedDates.startDate) }} - {{ formatDate(calculatedDates.endDate) }}</p>
          <p class="note">Dates are calculated based on your school calendar</p>
        </div>

        <div class="form-group">
          <label>Week Template</label>
          <select v-model="assignmentData.weekTemplateId" class="form-input" required>
            <option value="">Select a template</option>
            <option v-for="template in templates" :key="template.id" :value="template.id">
              {{ template.templateName }} ({{ template.subjectFocus }})
            </option>
          </select>
        </div>

        <div class="form-actions">
          <button @click="createAssignment" :disabled="!canAssign || assigning" class="btn btn-primary">
            {{ assigning ? 'Assigning...' : 'Assign Template' }}
          </button>
        </div>
      </div>

      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>

      <!-- Existing Assignments -->
      <div class="existing-assignments">
        <h2>Current Assignments</h2>
        
        <div v-if="loadingAssignments" class="loading">Loading assignments...</div>
        <div v-else-if="assignments.length === 0" class="empty">
          No assignments yet. Create your first assignment above!
        </div>
        <div v-else>
          <table class="assignments-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Template</th>
                <th>Quarter</th>
                <th>Week #</th>
                <th>Dates</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="assignment in assignments" :key="assignment.id">
                <td>{{ getStudentName(assignment.studentId) }}</td>
                <td>{{ getTemplateName(assignment.weekTemplateId) }}</td>
                <td>Q{{ assignment.quarter }}</td>
                <td>Week {{ assignment.weekNumber }}</td>
                <td>{{ formatDateRange(assignment.startDate, assignment.endDate) }}</td>
                <td>
                  <span :class="['status-badge', assignment.status]">
                    {{ assignment.status.replace('_', ' ') }}
                  </span>
                </td>
                <td>
                  <button @click="deleteAssignment(assignment.id)" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { 
  getStudentsByTeacher,
  getWeekTemplatesByTeacher,
  createWeekAssignment,
  getWeekAssignmentsByTeacher,
  deleteWeekAssignment as deleteAssignmentService
} from '@/services/firestoreServices'
import { Timestamp } from 'firebase/firestore'
import type { StudentDocument, WeekTemplateDocument, WeekAssignmentDocument } from '@/types/firestore'

const route = useRoute()
const { user, loading: authLoading } = useAuth()

const students = ref<Array<StudentDocument & { id: string }>>([])
const templates = ref<Array<WeekTemplateDocument & { id: string }>>([])
const assignments = ref<Array<WeekAssignmentDocument & { id: string }>>([])

const loading = ref(false)
const loadingAssignments = ref(false)
const assigning = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

const assignmentData = ref({
  studentId: '',
  quarter: 1 as 1 | 2 | 3 | 4,
  weekNumber: 1,
  weekTemplateId: ''
})

const calculatedDates = ref({
  startDate: null as Date | null,
  endDate: null as Date | null
})

const canAssign = computed(() => {
  return assignmentData.value.studentId &&
         assignmentData.value.weekTemplateId &&
         calculatedDates.value.startDate
})

const loadQuarterDates = () => {
  // TODO: Calculate based on school calendar
  // For now, use a simple calculation
  calculateWeekDates()
}

const calculateWeekDates = () => {
  // Simple calculation: each quarter is ~9 weeks
  // Q1 starts Sept 1, Q2 starts Nov 15, Q3 starts Feb 1, Q4 starts April 15
  const quarterStarts = {
    1: new Date(new Date().getFullYear(), 8, 1),  // Sept 1
    2: new Date(new Date().getFullYear(), 10, 15), // Nov 15
    3: new Date(new Date().getFullYear() + 1, 1, 1),  // Feb 1
    4: new Date(new Date().getFullYear() + 1, 3, 15)  // April 15
  }
  
  const quarterStart = quarterStarts[assignmentData.value.quarter]
  const weeksToAdd = assignmentData.value.weekNumber - 1
  
  const startDate = new Date(quarterStart)
  startDate.setDate(startDate.getDate() + (weeksToAdd * 7))
  
  const endDate = new Date(startDate)
  endDate.setDate(endDate.getDate() + 4) // Monday to Friday
  
  calculatedDates.value = { startDate, endDate }
}

const formatDate = (date: Date | null) => {
  if (!date) return ''
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

const formatDateRange = (start: Timestamp, end: Timestamp) => {
  const startDate = start.toDate()
  const endDate = end.toDate()
  return `${formatDate(startDate)} - ${formatDate(endDate)}`
}

const getStudentName = (studentId: string) => {
  const student = students.value.find(s => s.id === studentId)
  return student?.displayName || 'Unknown'
}

const getTemplateName = (templateId: string) => {
  const template = templates.value.find(t => t.id === templateId)
  return template?.templateName || 'Unknown'
}

const createAssignment = async () => {
  if (!user.value || !canAssign.value) return
  
  try {
    assigning.value = true
    error.value = null
    success.value = null
    
    await createWeekAssignment({
      studentId: assignmentData.value.studentId,
      teacherUid: user.value.uid,
      weekTemplateId: assignmentData.value.weekTemplateId,
      weekNumber: assignmentData.value.weekNumber,
      quarter: assignmentData.value.quarter,
      startDate: Timestamp.fromDate(calculatedDates.value.startDate!),
      endDate: Timestamp.fromDate(calculatedDates.value.endDate!),
      status: 'assigned'
    })
    
    success.value = 'Assignment created successfully!'
    
    // Reset form
    assignmentData.value = {
      studentId: '',
      quarter: 1,
      weekNumber: 1,
      weekTemplateId: ''
    }
    calculatedDates.value = { startDate: null, endDate: null }
    
    // Reload assignments
    await loadAssignments()
  } catch (err: any) {
    console.error('Error creating assignment:', err)
    error.value = err.message || 'Failed to create assignment'
  } finally {
    assigning.value = false
  }
}

const deleteAssignment = async (assignmentId: string) => {
  if (!confirm('Are you sure you want to delete this assignment?')) return
  
  try {
    await deleteAssignmentService(assignmentId)
    success.value = 'Assignment deleted successfully!'
    await loadAssignments()
  } catch (err: any) {
    console.error('Error deleting assignment:', err)
    error.value = err.message || 'Failed to delete assignment'
  }
}

const loadData = async () => {
  if (!user.value) return
  
  try {
    loading.value = true
    const [studentList, templateList] = await Promise.all([
      getStudentsByTeacher(user.value.uid),
      getWeekTemplatesByTeacher(user.value.uid)
    ])
    students.value = studentList
    templates.value = templateList
    
    // Pre-select template if provided in query
    if (route.query.templateId) {
      assignmentData.value.weekTemplateId = route.query.templateId as string
    }
  } catch (err: any) {
    console.error('Error loading data:', err)
    error.value = err.message || 'Failed to load data'
  } finally {
    loading.value = false
  }
}

const loadAssignments = async () => {
  if (!user.value) return
  
  try {
    loadingAssignments.value = true
    const assignmentList = await getWeekAssignmentsByTeacher(user.value.uid)
    assignments.value = assignmentList
  } catch (err: any) {
    console.error('Error loading assignments:', err)
  } finally {
    loadingAssignments.value = false
  }
}

watch([authLoading, user], ([isLoading, currentUser]) => {
  if (!isLoading && currentUser) {
    loadData()
    loadAssignments()
  }
}, { immediate: true })
</script>

<style scoped>
.week-assignments {
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

.assignment-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.assignment-form h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2d3748;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.date-preview {
  background: #edf2f7;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.date-preview p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.date-preview .note {
  font-size: 0.875rem;
  color: #718096;
  font-style: italic;
}

.form-actions {
  margin-top: 1.5rem;
}

.error-message,
.success-message {
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.error-message {
  background: #fed7d7;
  color: #c53030;
}

.success-message {
  background: #c6f6d5;
  color: #22543d;
}

.existing-assignments {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.existing-assignments h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
}

.assignments-table {
  width: 100%;
  border-collapse: collapse;
}

.assignments-table th,
.assignments-table td {
  text-align: left;
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
}

.assignments-table th {
  background: #f7fafc;
  font-weight: 600;
  color: #2d3748;
}

.status-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
}

.status-badge.assigned {
  background: #bee3f8;
  color: #2c5282;
}

.status-badge.in_progress {
  background: #feebc8;
  color: #7c2d12;
}

.status-badge.completed {
  background: #c6f6d5;
  color: #22543d;
}

.loading,
.empty {
  text-align: center;
  padding: 2rem;
  color: #718096;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #4a90e2;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #357abd;
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-danger {
  background: #e53e3e;
  color: white;
}

.btn-danger:hover {
  background: #c53030;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}
</style>