<template>
  <div class="quiz-taking">
    <div class="container">
      <h1>Quiz</h1>
      
      <div v-if="loading" class="loading">Loading quiz...</div>
      <div v-else-if="error" class="error-message">{{ error }}</div>
      <div v-else-if="!quiz" class="error-message">Quiz not found</div>
      <div v-else-if="submitted" class="results">
        <h2>Quiz Submitted!</h2>
        <p class="score">Score: {{ attemptResult?.scorePercent }}%</p>
        <p>Correct: {{ attemptResult?.correctCount }} / {{ attemptResult?.totalQuestions }}</p>
        <router-link to="/student" class="btn btn-primary">Back to Dashboard</router-link>
      </div>
      <div v-else class="quiz-content">
        <div class="quiz-header">
          <p>Question {{ currentQuestionIndex + 1 }} of {{ quiz.questions.length }}</p>
        </div>
        
        <div class="question-card">
          <h2>{{ currentQuestion.prompt }}</h2>
          <div class="choices">
            <button
              v-for="(choice, index) in currentQuestion.choices"
              :key="index"
              @click="selectAnswer(index)"
              :class="['choice-btn', { selected: responses[currentQuestionIndex]?.selectedIndex === index }]"
            >
              {{ choice }}
            </button>
          </div>
        </div>
        
        <div class="quiz-actions">
          <button 
            @click="previousQuestion" 
            :disabled="currentQuestionIndex === 0"
            class="btn btn-secondary"
          >
            Previous
          </button>
          <button 
            v-if="currentQuestionIndex < quiz.questions.length - 1"
            @click="nextQuestion" 
            class="btn btn-primary"
          >
            Next
          </button>
          <button 
            v-else
            @click="submitQuiz"
            :disabled="submitting"
            class="btn btn-primary"
          >
            {{ submitting ? 'Submitting...' : 'Submit Quiz' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { useFunctions } from '@/composables/useFunctions'
import { getQuizPublic } from '@/services/firestoreServices'
import type { QuizPublicDocument, QuizQuestionPublic } from '@/types/firestore'

const route = useRoute()
const { user } = useAuth()
const { getQuizPublic: getQuizPublicFn, submitQuizAttempt } = useFunctions()

const quiz = ref<QuizPublicDocument | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)
const currentQuestionIndex = ref(0)
const responses = ref<Array<{ questionId: string; selectedIndex: number }>>([])
const submitted = ref(false)
const submitting = ref(false)
const attemptResult = ref<{ scorePercent: number; correctCount: number; totalQuestions: number } | null>(null)

const currentQuestion = computed<QuizQuestionPublic>(() => {
  if (!quiz.value) return {} as QuizQuestionPublic
  return quiz.value.questions[currentQuestionIndex.value]
})

const selectAnswer = (index: number) => {
  const questionId = currentQuestion.value.id
  const existingIndex = responses.value.findIndex(r => r.questionId === questionId)
  if (existingIndex >= 0) {
    responses.value[existingIndex].selectedIndex = index
  } else {
    responses.value.push({ questionId, selectedIndex: index })
  }
}

const nextQuestion = () => {
  if (currentQuestionIndex.value < (quiz.value?.questions.length || 0) - 1) {
    currentQuestionIndex.value++
  }
}

const previousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
  }
}

const submitQuiz = async () => {
  if (!quiz.value || !user.value) return
  
  // Ensure all questions are answered
  const unanswered = quiz.value.questions.filter(q => 
    !responses.value.find(r => r.questionId === q.id)
  )
  
  if (unanswered.length > 0) {
    error.value = `Please answer all questions. ${unanswered.length} remaining.`
    return
  }
  
  try {
    submitting.value = true
    error.value = null
    
    const result = await submitQuizAttempt({
      quizId: route.params.quizId,
      responses: responses.value,
    })
    
    attemptResult.value = result.data as any
    submitted.value = true
  } catch (err: any) {
    error.value = err.message || 'Failed to submit quiz'
  } finally {
    submitting.value = false
  }
}

onMounted(async () => {
  const quizId = route.params.quizId as string
  if (!quizId) {
    error.value = 'Quiz ID required'
    loading.value = false
    return
  }
  
  try {
    // Try to get quiz from Firestore first
    const quizData = await getQuizPublic(quizId)
    if (quizData) {
      quiz.value = { ...quizData, id: quizId } as QuizPublicDocument & { id: string }
    } else {
      // Fallback to Cloud Function
      const result = await getQuizPublicFn({ quizId })
      quiz.value = result.data as QuizPublicDocument & { id: string }
    }
  } catch (err: any) {
    error.value = err.message || 'Failed to load quiz'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.quiz-taking {
  padding: 2rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 2rem;
}

.loading, .error-message {
  text-align: center;
  padding: 2rem;
}

.error-message {
  background-color: #fee;
  color: #c33;
  border-radius: 4px;
}

.results {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.score {
  font-size: 2rem;
  font-weight: bold;
  color: #4a90e2;
  margin: 1rem 0;
}

.quiz-header {
  margin-bottom: 1rem;
  color: #666;
}

.question-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
}

.question-card h2 {
  color: #333;
  margin-bottom: 1.5rem;
}

.choices {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.choice-btn {
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  background: white;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
}

.choice-btn:hover {
  border-color: #4a90e2;
  background: #f0f7ff;
}

.choice-btn.selected {
  border-color: #4a90e2;
  background: #e7f3ff;
  font-weight: 500;
}

.quiz-actions {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.btn-primary {
  background-color: #4a90e2;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #357abd;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background-color: #5a6268;
}
</style>
