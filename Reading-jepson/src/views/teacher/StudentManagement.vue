<template>
  <div class="student-management">
    <div class="container">
      <div class="header">
        <h1>Student Management</h1>
        <div class="header-actions">
          <button @click="showGoogleImport = true" class="btn btn-google">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H15.9564C17.1582 14.7227 17.64 13.2727 17.64 9.20454Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.467 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65455 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40681 3.78409 7.83 3.96409 7.29V4.95818H0.957273C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957273 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65455 3.57955 9 3.57955Z" fill="#EA4335"/>
            </svg>
            Import from Google Classroom
          </button>
          <button @click="showAddForm = true" class="btn btn-primary">Add Student</button>
        </div>
      </div>

      <div v-if="showAddForm" class="add-form">
        <h2>Add New Student</h2>
        <form @submit.prevent="handleAddStudent">
          <div class="form-group">
            <label>Display Name</label>
            <input v-model="newStudent.displayName" type="text" required class="form-input" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="newStudent.studentEmail" type="email" required class="form-input" />
          </div>
          <div class="form-actions">
            <button type="submit" :disabled="loading" class="btn btn-primary">Create Student</button>
            <button type="button" @click="showAddForm = false" class="btn btn-secondary">Cancel</button>
          </div>
        </form>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>

      <div v-if="showGoogleImport" class="google-import-form">
        <h2>Import from Google Classroom</h2>
        
        <div v-if="!isAuthorized" class="auth-prompt">
          <p>Authorize Google Classroom access to import students</p>
          <button @click="authorizeGoogle" class="btn btn-primary">Authorize Google Classroom</button>
        </div>

        <div v-else>
          <div v-if="loadingCourses" class="loading">Loading courses...</div>
          <div v-else-if="courses.length === 0" class="empty-state">
            <p>No active courses found in Google Classroom.</p>
          </div>
          <div v-else>
            <div class="form-group">
              <label>Select Course</label>
              <select v-model="selectedCourseId" class="form-input" required>
                <option value="">Choose a course...</option>
                <option v-for="course in courses" :key="course.id" :value="course.id">
                  {{ course.name }}{{ course.section ? ` - ${course.section}` : '' }}
                </option>
              </select>
            </div>

            <div class="form-actions">
              <button @click="importStudents" :disabled="!selectedCourseId || importing" class="btn btn-primary">
                {{ importing ? 'Importing...' : 'Import Students' }}
              </button>
              <button @click="showGoogleImport = false" class="btn btn-secondary">Cancel</button>
            </div>
          </div>

          <div v-if="importResult" class="import-result">
            <h3>Import Results</h3>
            <p><strong>Course:</strong> {{ importResult.courseName }}</p>
            <p><strong>Total Students:</strong> {{ importResult.totalStudents }}</p>
            <p><strong>Imported:</strong> {{ importResult.imported || 0 }}</p>
            <p v-if="(importResult.skipped || 0) > 0"><strong>Skipped:</strong> {{ importResult.skipped }} (already exist)</p>
            <p v-if="(importResult.failed || 0) > 0"><strong>Failed:</strong> {{ importResult.failed }}</p>
            <div v-if="importResult.students && importResult.students.length > 0" class="import-details">
              <details>
                <summary>View Details</summary>
                <ul>
                  <li v-for="(student, idx) in importResult.students" :key="idx" :class="{ error: !student.success, skipped: !!student.skipped }">
                    {{ student.displayName }} ({{ student.email }}) - 
                    <span v-if="student.skipped" class="skipped" style="color: #856404">Already exists</span>
                    <span v-else-if="student.success" class="success">✓ Imported</span>
                    <span v-else class="error">✗ {{ student.error }}</span>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </div>

        <div v-if="error" class="error-message">{{ error }}</div>
        
        <div v-if="importResult && (importResult.failed || 0) > 0" class="warning-message" style="color: #856404; background-color: #fff3cd; padding: 0.75rem; border-radius: 4px; margin-top: 1rem;">
          Some students failed to import. This may be due to invalid email addresses or other data issues.
        </div>
      </div>

      <div v-if="loading" class="loading">Loading students...</div>
      <div v-else-if="students.length === 0" class="empty-state">
        <p>No students yet. Add your first student or import from Google Classroom.</p>
      </div>
      <div v-else class="student-list">
        <div v-for="student in students" :key="student.id" class="student-card">
          <div class="student-info">
            <h3>{{ student.displayName }}</h3>
            <p class="email">{{ student.studentEmail }}</p>
            <p class="status">
              Status: 
              <span :class="{ 'claimed': student.studentUid, 'unclaimed': !student.studentUid }">
                {{ student.studentUid ? 'Claimed' : 'Unclaimed' }}
              </span>
            </p>
          </div>
          <div class="student-actions">
            <router-link :to="`/teacher/students/${student.id}`" class="btn btn-secondary">View Details</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useFunctions } from '@/composables/useFunctions'
import { getStudentsByTeacher } from '@/services/firestoreServices'
import { getGoogleAuthUrl, hasGoogleAccessToken, getAccessToken } from '@/services/googleClassroom'
import type { StudentDocument } from '@/types/firestore'

const { user, loading: authLoading } = useAuth()
const { createStudent, getGoogleClassroomCourses, importStudentsFromGoogleClassroom } = useFunctions()

const students = ref<Array<StudentDocument & { id: string }>>([])
const loading = ref(true)
const showAddForm = ref(false)
const showGoogleImport = ref(false)
const error = ref<string | null>(null)
const loadingCourses = ref(false)
const importing = ref(false)
const courses = ref<any[]>([])
const selectedCourseId = ref('')
const importResult = ref<any>(null)
const isAuthorized = ref(false)

const newStudent = ref({
  displayName: '',
  studentEmail: '',
})

const loadStudents = async () => {
  if (!user.value) {
    console.log('[StudentManagement] No user, cannot load students')
    return
  }

  console.log('[StudentManagement] Loading students for user UID:', user.value.uid)
  
  try {
    loading.value = true
    error.value = null
    const studentList = await getStudentsByTeacher(user.value.uid)
    console.log('[StudentManagement] Received', studentList.length, 'students, setting in state')
    students.value = studentList.map(s => ({ ...s, id: s.id || '' }))
    console.log('[StudentManagement] Students in state:', students.value.length)
  } catch (err: any) {
    console.error('[StudentManagement] ERROR loading students:', err.message, err.code)
    if (!importResult.value || importResult.value.imported === 0) {
      error.value = err.message || 'Failed to load students'
    } else {
      console.warn('Failed to refresh student list, but import was successful:', err.message)
    }
  } finally {
    loading.value = false
  }
}

const handleAddStudent = async () => {
  if (!user.value) return
  try {
    error.value = null
    await createStudent({
      displayName: newStudent.value.displayName,
      studentEmail: newStudent.value.studentEmail,
    })
    newStudent.value = { displayName: '', studentEmail: '' }
    showAddForm.value = false
    await loadStudents()
  } catch (err: any) {
    error.value = err.message || 'Failed to create student'
  }
}

const authorizeGoogle = () => {
  try {
    const authUrl = getGoogleAuthUrl()
    window.location.href = authUrl
  } catch (err: any) {
    error.value = err.message || 'Failed to authorize Google Classroom'
    console.error('Google Classroom authorization error:', err)
  }
}

const checkAuthorization = () => {
  isAuthorized.value = hasGoogleAccessToken()
  if (isAuthorized.value) {
    loadCourses()
  }
}

const loadCourses = async () => {
  const accessToken = getAccessToken()
  if (!accessToken) {
    error.value = 'No Google access token found. Please authorize again.'
    return
  }

  try {
    loadingCourses.value = true
    error.value = null
    const result = await getGoogleClassroomCourses({ accessToken })
    courses.value = (result.data as any)?.courses || []
  } catch (err: any) {
    error.value = err.message || 'Failed to load Google Classroom courses'
    if (err.code === 'unauthenticated' || err.message?.includes('token')) {
      isAuthorized.value = false
    }
  } finally {
    loadingCourses.value = false
  }
}

const importStudents = async () => {
  if (!selectedCourseId.value) return

  const accessToken = getAccessToken()
  if (!accessToken) {
    error.value = 'No Google access token found. Please authorize again.'
    return
  }

  try {
    importing.value = true
    error.value = null
    importResult.value = null

    console.log('[Import] Starting import for course:', selectedCourseId.value)
    const result = await importStudentsFromGoogleClassroom({
      courseId: selectedCourseId.value,
      accessToken,
    })

    console.log('[Import] Import result received:', result.data)
    const data = result.data as any
    importResult.value = data

    console.log('[Import] Import completed - Imported:', data.imported, 'Skipped:', data.skipped, 'Failed:', data.failed)

    // Refresh student list
    try {
      console.log('[Import] Refreshing student list...')
      await loadStudents()
      console.log('[Import] Student list refreshed successfully')
    } catch (refreshErr: any) {
      console.error('[Import] ERROR refreshing student list:', refreshErr.message)
      if (data.imported === 0 && (data.failed || 0) > 0) {
        error.value = refreshErr.message || 'Failed to refresh student list'
      }
    }
  } catch (err: any) {
    console.error('[Import] ERROR during import:', err.message, err.code)
    error.value = err.message || 'Failed to import students from Google Classroom'
    importResult.value = null
  } finally {
    importing.value = false
  }
}

onMounted(() => {
  if (!authLoading.value && user.value) {
    loadStudents()
    checkAuthorization()
  }
})

watch([authLoading, user], ([isLoading, currentUser]) => {
  if (!isLoading && currentUser) {
    loadStudents()
    checkAuthorization()
  }
})
</script>

<style scoped>
.student-management {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
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

.header-actions {
  display: flex;
  gap: 0.75rem;
}

.btn-google {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: white;
  border: 2px solid #4285F4;
  color: #4285F4;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-google:hover {
  background: #4285F4;
  color: white;
}

.btn-google svg {
  flex-shrink: 0;
}

.add-form,
.google-import-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.add-form h2,
.google-import-form h2 {
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
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 1rem;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-secondary {
  background: #edf2f7;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.loading,
.empty-state {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  color: #718096;
}

.student-list {
  display: grid;
  gap: 1rem;
}

.student-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.student-info h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.email {
  color: #718096;
  font-size: 0.875rem;
  margin: 0 0 0.5rem 0;
}

.status {
  font-size: 0.875rem;
  margin: 0;
}

.claimed {
  color: #38a169;
  font-weight: 600;
}

.unclaimed {
  color: #e53e3e;
  font-weight: 600;
}

.error-message {
  background: #fed7d7;
  color: #c53030;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.import-result {
  background: #edf2f7;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1.5rem;
}

.import-result h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.import-result p {
  margin: 0.5rem 0;
}

.import-details {
  margin-top: 1rem;
}

.import-details ul {
  list-style: none;
  padding: 0;
  margin: 0.5rem 0;
}

.import-details li {
  padding: 0.5rem;
  margin: 0.25rem 0;
  border-radius: 4px;
}

.import-details li.success {
  background: #c6f6d5;
}

.import-details li.error {
  background: #fed7d7;
}

.import-details li.skipped {
  background: #fffaf0;
}

.auth-prompt {
  text-align: center;
  padding: 2rem;
}

.auth-prompt p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  color: #4a5568;
}
</style>
