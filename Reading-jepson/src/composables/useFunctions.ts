import { getFunctions, httpsCallable } from 'firebase/functions'

const functions = getFunctions()

export function useFunctions() {
  const createStudent = httpsCallable(functions, 'createStudent')
  const claimStudentAccount = httpsCallable(functions, 'claimStudentAccount')
  const generateQuiz = httpsCallable(functions, 'generateQuiz')
  const getQuizPublic = httpsCallable(functions, 'getQuizPublic')
  const submitQuizAttempt = httpsCallable(functions, 'submitQuizAttempt')
  const importStudentsFromGoogleClassroom = httpsCallable(functions, 'importStudentsFromGoogleClassroom')
  const getGoogleClassroomCourses = httpsCallable(functions, 'getGoogleClassroomCourses')
  const exchangeGoogleAuthCode = httpsCallable(functions, 'exchangeGoogleAuthCode')

  return {
    createStudent,
    claimStudentAccount,
    generateQuiz,
    getQuizPublic,
    submitQuizAttempt,
    importStudentsFromGoogleClassroom,
    getGoogleClassroomCourses,
    exchangeGoogleAuthCode,
  }
}
