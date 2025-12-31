import { createRouter, createWebHistory } from 'vue-router'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { getUser } from '@/services/firestoreServices'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => {
        // Will redirect based on role in navigation guard
        return '/login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/role-select',
      name: 'role-select',
      component: () => import('@/views/RoleSelectView.vue'),
      meta: { requiresAuth: true, requiresRole: false }
    },
    // Teacher routes
    {
      path: '/teacher',
      name: 'teacher',
      component: () => import('@/views/teacher/TeacherDashboard.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/students/:studentId?',
      name: 'teacher-students',
      component: () => import('@/views/teacher/StudentManagement.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/weeks/:weekId?',
      name: 'teacher-weeks',
      component: () => import('@/views/teacher/WeekManagement.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/weeks/setup',
      name: 'teacher-week-setup',
      component: () => import('@/views/teacher/WeekSetup.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/week-templates',
      name: 'teacher-week-templates',
      component: () => import('@/views/teacher/WeekTemplateList.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/week-templates/create',
      name: 'teacher-week-template-create',
      component: () => import('@/views/teacher/WeekTemplateSetup.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/week-assignments',
      name: 'teacher-week-assignments',
      component: () => import('@/views/teacher/WeekAssignments.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/calendar',
      name: 'teacher-calendar',
      component: () => import('@/views/teacher/SchoolCalendar.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/calendar/import',
      name: 'teacher-calendar-import',
      component: () => import('@/views/teacher/CalendarImport.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/calendar/setup',
      name: 'teacher-calendar-setup',
      component: () => import('@/views/teacher/SimpleCalendarSetup.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/library',
      name: 'teacher-library',
      component: () => import('@/views/teacher/LibraryManagement.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/assignments/calendar',
      name: 'teacher-assignment-calendar',
      component: () => import('@/views/teacher/AssignmentCalendar.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/assignments/planner',
      name: 'teacher-assignment-planner',
      component: () => import('@/views/teacher/VisualAssignmentPlanner.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/assignments/print',
      name: 'teacher-assignment-print',
      component: () => import('@/views/teacher/PrintMaterialsNew.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    {
      path: '/teacher/assignments/assess',
      name: 'teacher-assignment-assess',
      component: () => import('@/views/teacher/AssessmentEntry.vue'),
      meta: { requiresAuth: true, requiresRole: 'teacher' }
    },
    // Student routes
    {
      path: '/student',
      name: 'student',
      component: () => import('@/views/student/StudentDashboard.vue'),
      meta: { requiresAuth: true, requiresRole: 'student' }
    },
    {
      path: '/student/quiz/:quizId',
      name: 'student-quiz',
      component: () => import('@/views/student/QuizTaking.vue'),
      meta: { requiresAuth: true, requiresRole: 'student' }
    },
    {
      path: '/student/week/:weekId',
      name: 'student-week',
      component: () => import('@/views/student/DailyActivity.vue'),
      meta: { requiresAuth: true, requiresRole: 'student' }
    }
  ]
})

// Wait for auth to initialize before checking routes
let authReady = false
let currentUserRole: 'teacher' | 'student' | 'admin' | null = null

// Initialize auth state - onAuthStateChanged fires immediately with current state
onAuthStateChanged(auth, async (user) => {
  authReady = true
  if (user) {
    try {
      const userDoc = await getUser(user.uid)
      currentUserRole = userDoc?.role || null
    } catch (error) {
      console.error('Error getting user role:', error)
      currentUserRole = null
    }
  } else {
    currentUserRole = null
  }
})

// Navigation guard
router.beforeEach(async (to, _from, next) => {
  
  // Wait for auth to be ready (onAuthStateChanged fires immediately, so this should be quick)
  if (!authReady) {
    // Wait for auth state to initialize (with timeout to prevent infinite wait)
    await new Promise<void>((resolve) => {
      const timeout = setTimeout(() => {
        authReady = true // Force ready to prevent infinite wait
        resolve()
      }, 1000) // 1 second timeout
      
      // Check if already ready (race condition protection)
      if (authReady) {
        clearTimeout(timeout)
        resolve()
        return
      }
      
      // Wait for the existing onAuthStateChanged to fire
      const checkInterval = setInterval(() => {
        if (authReady) {
          clearTimeout(timeout)
          clearInterval(checkInterval)
          resolve()
        }
      }, 10) // Check every 10ms
    })
  }
  
  const user = auth.currentUser

  // Check authentication
  if (to.meta.requiresAuth) {
    if (!user) {
      next({ name: 'login' })
      return
    }

    // Get user role if not already loaded
    if (currentUserRole === null && user) {
      try {
        const userDoc = await getUser(user.uid)
        currentUserRole = userDoc?.role || null
      } catch (error) {
        console.error('Error getting user role:', error)
      }
    }

    // Check if role is required
    if (to.meta.requiresRole === false) {
      // Route that requires auth but no specific role (e.g., role selection)
      if (currentUserRole) {
        // User has a role, redirect to appropriate dashboard
        next(currentUserRole === 'teacher' ? '/teacher' : '/student')
      } else {
        next()
      }
      return
    }

    if (to.meta.requiresRole) {
      // Route requires specific role
      if (!currentUserRole) {
        // No role set, redirect to role selection
        next({ name: 'role-select' })
        return
      }
      if (currentUserRole !== to.meta.requiresRole) {
        // Wrong role, redirect to appropriate dashboard
        next(currentUserRole === 'teacher' ? '/teacher' : '/student')
        return
      }
    }

    next()
  } else if ((to.name === 'login' || to.name === 'signup') && user) {
    // Redirect authenticated users away from login/signup
    if (currentUserRole) {
      next(currentUserRole === 'teacher' ? '/teacher' : '/student')
    } else {
      next({ name: 'role-select' })
    }
  } else {
    next()
  }
})

export default router

