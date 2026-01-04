<template>
  <div class="daily-activity">
    <div class="container">
      <div class="activity-header">
        <div>
          <h1>Day {{ currentDay }} Activity</h1>
          <p class="subtitle">Week of {{ formatWeekDate(week?.weekOf) }}</p>
        </div>
        <div class="day-selector">
          <button 
            v-for="day in [1, 2, 3, 4, 5]" 
            :key="day"
            :class="['day-btn', { active: currentDay === day }]"
            @click="currentDay = day"
          >
            Day {{ day }}
          </button>
        </div>
      </div>
      
      <div v-if="loading" class="loading">
        <div class="spinner"></div>
        <p>Loading activity...</p>
      </div>
      
      <div v-else-if="!week" class="empty-state">
        <p>No week assigned yet. Check back later!</p>
      </div>
      
      <!-- Day 1: Vocabulary & Affixes -->
      <div v-else-if="currentDay === 1" class="activity-content">
        <div class="activity-card">
          <h2>📚 Vocabulary Words</h2>
          <p class="instruction">Use the inquiry prompts to infer the meaning of each word. Work through the prompts one at a time.</p>
          <div class="vocab-list">
            <VocabularyInquiry 
              v-for="word in vocabWords" 
              :key="word.id" 
              :vocab="word"
              :show-definition="false"
            />
          </div>
        </div>
        
        <div class="activity-card">
          <h2>🔤 Affixes</h2>
          <p class="instruction">Learn these high-frequency affixes and their meanings.</p>
          <div class="affix-grid">
            <div v-for="affix in affixes" :key="affix.id" class="affix-card">
              <div class="affix-header">
                <span class="affix-text">{{ affix.affix }}</span>
                <span class="affix-kind">{{ affix.kind }}</span>
              </div>
              <p class="affix-meaning">{{ affix.meaning }}</p>
              <div class="affix-examples">
                <span v-for="example in affix.examples" :key="example" class="example-tag">
                  {{ example }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Day 2: Words Working Together -->
      <div v-else-if="currentDay === 2" class="activity-content">
        <div class="activity-card">
          <h2>🔤 Words Working Together</h2>
          <p class="instruction">Sort the word/phrase cards into the correct columns. Each word has a job; words answer questions that build meaning.</p>
          
          <div v-for="(vocab, index) in vocabWords" :key="vocab.id" class="sentence-analysis">
            <div class="vocab-header">
              <h3>{{ index + 1 }}. {{ vocab.word }}</h3>
              <p class="definition">{{ vocab.definition }}</p>
            </div>
            
            <div v-if="vocab.exampleSentence" class="sentence-box">
              <p class="sentence-label">Sentence from the text:</p>
              <p class="sentence-text">{{ vocab.exampleSentence }}</p>
            </div>
            
            <div v-if="vocab.wordPhraseCards && vocab.wordPhraseCards.length > 0" class="word-cards">
              <p class="cards-label">Word/Phrase Cards:</p>
              <div class="cards-grid">
                <div v-for="(card, cardIndex) in vocab.wordPhraseCards" :key="cardIndex" class="word-card">
                  {{ card }}
                </div>
              </div>
            </div>
            
            <div class="sorting-table">
              <p class="table-instruction">Sort the words/phrases into the table:</p>
              <table class="six-column-table">
                <thead>
                  <tr>
                    <th>Who or what?<br><small>noun-subject</small></th>
                    <th>Doing or did?<br><small>verb-predicate</small></th>
                    <th>Which/what kind/how many?<br><small>adjective</small></th>
                    <th>Where/when/how/why?<br><small>adverb</small></th>
                    <th>Relationship?<br><small>preposition</small></th>
                    <th>Connects?<br><small>conjunction</small></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                    <td><textarea class="sort-cell" rows="3" placeholder="Place cards here..."></textarea></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Day 3: Teacher Read + Student Read + Inference -->
      <div v-else-if="currentDay === 3" class="activity-content">
        <div class="activity-card">
          <h2>📖 Teacher Model + Student Reread</h2>
          <p class="instruction">Listen as your teacher reads the passage. Then you will reread it aloud.</p>
          <div v-if="weeklyPassage" class="passage-content">
            <h3>{{ weeklyPassage.title }}</h3>
            <div class="passage-text">{{ weeklyPassage.text }}</div>
          </div>
        </div>
        
        <div v-if="day3Questions.length > 0" class="activity-card">
          <h2>💭 Inference Organizer</h2>
          <p class="instruction">Answer these literal and inferential questions about the passage.</p>
          <div class="questions-list">
            <div v-for="(question, index) in day3Questions" :key="question.id" class="question-item">
              <div class="question-header">
                <span class="question-number">Q{{ index + 1 }}</span>
                <span :class="['question-type', question.type]">{{ question.type }}</span>
              </div>
              <p class="question-text">{{ question.prompt }}</p>
              <textarea 
                v-model="answers[`day3-${question.id}`]"
                placeholder="Your answer..."
                class="answer-input"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button @click="saveAnswers(3)" class="btn btn-primary">Save Answers</button>
        </div>
        
        <div class="activity-card">
          <h2>📚 Vocabulary Review</h2>
          <p class="instruction">Review the vocabulary words from Day 1.</p>
          <div class="vocab-review">
            <div v-for="word in vocabWords" :key="word.id" class="vocab-review-item">
              <span class="vocab-word">{{ word.word }}</span>
              <span class="vocab-def">{{ word.definition }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Day 4: Student Read + Cause/Effect -->
      <div v-else-if="currentDay === 4" class="activity-content">
        <div class="activity-card">
          <h2>📖 Student Reread</h2>
          <p class="instruction">Reread the passage aloud.</p>
          <div v-if="weeklyPassage" class="passage-content">
            <h3>{{ weeklyPassage.title }}</h3>
            <div class="passage-text">{{ weeklyPassage.text }}</div>
          </div>
        </div>
        
        <div v-if="day4Questions.length > 0" class="activity-card">
          <h2>🔗 Cause/Effect Organizer</h2>
          <p class="instruction">Complete the cause/effect organizer and answer main idea questions.</p>
          <div class="questions-list">
            <div v-for="(question, index) in day4Questions" :key="question.id" class="question-item">
              <div class="question-header">
                <span class="question-number">Q{{ index + 1 }}</span>
                <span :class="['question-type', question.type]">{{ question.type }}</span>
              </div>
              <p class="question-text">{{ question.prompt }}</p>
              <textarea 
                v-model="answers[`day4-${question.id}`]"
                placeholder="Your answer..."
                class="answer-input"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button @click="saveAnswers(4)" class="btn btn-primary">Save Answers</button>
        </div>
        
        <div class="activity-card">
          <h2>📚 Quick Vocab Review</h2>
          <div class="vocab-review">
            <div v-for="word in vocabWords" :key="word.id" class="vocab-review-item">
              <span class="vocab-word">{{ word.word }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Day 5: Reading Assessment + Vocab Spiral -->
      <div v-else-if="currentDay === 5" class="activity-content">
        <div class="activity-card">
          <h2>📖 Reading Assessment</h2>
          <p class="instruction">Read this new passage for the first time. Your teacher will record your reading (WPM, accuracy, miscues).</p>
          <div v-if="fridayPassage" class="passage-content">
            <h3>{{ fridayPassage.title }}</h3>
            <div class="passage-text">{{ fridayPassage.text }}</div>
          </div>
          <button @click="startColdRead" class="btn btn-primary">Start Reading Assessment</button>
        </div>
        
        <div v-if="day5Questions.length > 0" class="activity-card">
          <h2>📝 Comprehension Questions</h2>
          <p class="instruction">Answer these questions about the passage.</p>
          <div class="questions-list">
            <div v-for="(question, index) in day5Questions" :key="question.id" class="question-item">
              <div class="question-header">
                <span class="question-number">Q{{ index + 1 }}</span>
                <span :class="['question-type', question.type]">{{ question.type }}</span>
              </div>
              <p class="question-text">{{ question.prompt }}</p>
              <textarea 
                v-model="answers[`day5-${question.id}`]"
                placeholder="Your answer..."
                class="answer-input"
                rows="3"
              ></textarea>
            </div>
          </div>
          <button @click="saveAnswers(5)" class="btn btn-primary">Submit Assessment</button>
        </div>
        
        <div class="activity-card">
          <h2>📚 Spiral Vocabulary Assessment</h2>
          <p class="instruction">Multiple choice vocabulary review (current week + previous weeks)</p>
          <div class="vocab-quiz-placeholder">
            <p>Vocabulary quiz will be generated automatically</p>
            <button @click="startVocabQuiz" class="btn btn-secondary">Start Vocab Quiz</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import {
  getWeek,
  getPassagesByWeek,
  getVocabByWeek,
  getAffixesByWeek,
  getQuestionsByWeek
} from '@/services/firestoreServices'
import { Timestamp } from 'firebase/firestore'
import type { WeekDocument, PassageDocument, VocabDocument, AffixDocument, ComprehensionQuestionDocument } from '@/types/firestore'
import VocabularyInquiry from '@/components/VocabularyInquiry.vue'

const route = useRoute()
const { user } = useAuth()

const loading = ref(true)
const currentDay = ref(1)
const week = ref<WeekDocument | null>(null)
const weeklyPassage = ref<(PassageDocument & { id: string }) | null>(null)
const fridayPassage = ref<(PassageDocument & { id: string }) | null>(null)
const vocabWords = ref<Array<VocabDocument & { id: string }>>([])
const affixes = ref<Array<AffixDocument & { id: string }>>([])
const day3Questions = ref<Array<ComprehensionQuestionDocument & { id: string }>>([])
const day4Questions = ref<Array<ComprehensionQuestionDocument & { id: string }>>([])
const day5Questions = ref<Array<ComprehensionQuestionDocument & { id: string }>>([])
const answers = ref<Record<string, string>>({})

const formatWeekDate = (timestamp?: Timestamp) => {
  if (!timestamp) return ''
  return timestamp.toDate().toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}

const startColdRead = () => {
  // TODO: Implement cold read recording
  alert('Cold read recording will be implemented soon!')
}

const startVocabQuiz = () => {
  // TODO: Implement spiral vocab quiz
  alert('Vocabulary quiz will be generated automatically')
}

const saveAnswers = async (day: number) => {
  // TODO: Save answers to Firestore
  alert(`Day ${day} answers saved!`)
}

onMounted(async () => {
  const weekId = route.params.weekId as string
  if (!weekId || !user.value) return
  
  try {
    const weekData = await getWeek(weekId)
    if (weekData) {
      week.value = weekData
      
      // Load passages
      const passages = await getPassagesByWeek(weekId)
      weeklyPassage.value = passages.find(p => p.type === 'weekly') || null
      fridayPassage.value = passages.find(p => p.type === 'friday') || null
      
      // Load vocabulary and affixes
      vocabWords.value = await getVocabByWeek(weekId)
      affixes.value = await getAffixesByWeek(weekId)
      
      // Load questions
      const allQuestions = await getQuestionsByWeek(weekId)
      day3Questions.value = allQuestions.filter(q => q.day === 3).sort((a, b) => a.orderIndex - b.orderIndex)
      day4Questions.value = allQuestions.filter(q => q.day === 4).sort((a, b) => a.orderIndex - b.orderIndex)
      day5Questions.value = allQuestions.filter(q => q.day === 5).sort((a, b) => a.orderIndex - b.orderIndex)
    }
  } catch (error) {
    console.error('Error loading activity:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.daily-activity {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.activity-header h1 {
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

.day-selector {
  display: flex;
  gap: 0.5rem;
  background: white;
  padding: 0.25rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.day-btn {
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s;
  color: #718096;
}

.day-btn:hover {
  color: #2d3748;
  background: #f7fafc;
}

.day-btn.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
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

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #718096;
}

.activity-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.activity-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.activity-card h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.instruction {
  color: #718096;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
}

.vocab-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.vocab-grid, .affix-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.vocab-card {
  background: #f7fafc;
  padding: 1.25rem;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.vocab-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 0.5rem 0;
}

.definition {
  color: #4a5568;
  margin: 0.5rem 0;
  font-size: 0.9rem;
}

.example {
  color: #718096;
  font-style: italic;
  margin: 0.5rem 0 0 0;
  font-size: 0.85rem;
}

.affix-card {
  background: #f7fafc;
  padding: 1.25rem;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.affix-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.affix-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
}

.affix-kind {
  padding: 0.25rem 0.75rem;
  background: #edf2f7;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a5568;
  text-transform: capitalize;
}

.affix-meaning {
  color: #4a5568;
  margin: 0.5rem 0;
}

.affix-examples {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.example-tag {
  padding: 0.25rem 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 0.85rem;
  color: #4a5568;
}

.passage-content {
  margin-top: 1rem;
}

.passage-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.passage-text {
  line-height: 1.8;
  color: #2d3748;
  font-size: 1rem;
  white-space: pre-wrap;
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.questions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.question-item {
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 2px solid #e2e8f0;
}

.question-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.question-number {
  font-weight: 700;
  color: #667eea;
  font-size: 1.125rem;
}

.question-type {
  padding: 0.25rem 0.75rem;
  background: white;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #4a5568;
  text-transform: capitalize;
}

.question-text {
  color: #2d3748;
  font-size: 1rem;
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.answer-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.95rem;
  font-family: inherit;
  resize: vertical;
  transition: all 0.2s;
}

.answer-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.reread-actions {
  margin-top: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
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

.btn-secondary {
  background: #718096;
  color: white;
  box-shadow: 0 4px 12px rgba(113, 128, 150, 0.3);
}

.btn-secondary:hover {
  background: #4a5568;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(113, 128, 150, 0.4);
}

/* Day 2: Sentence Analysis Styles */
.sentence-analysis {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 12px;
  border-left: 4px solid #4a90e2;
}

.vocab-header {
  margin-bottom: 1.5rem;
}

.vocab-header h3 {
  color: #1a202c;
  font-size: 1.25rem;
  margin: 0 0 0.5rem 0;
}

.vocab-header .definition {
  color: #4a5568;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.sentence-box {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.sentence-label {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.sentence-text {
  color: #1a202c;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
}

.word-cards {
  margin-bottom: 1.5rem;
}

.cards-label {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.75rem 0;
  font-size: 0.9rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
}

.word-card {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 2px dashed #cbd5e0;
  text-align: center;
  font-size: 0.95rem;
  color: #2d3748;
  font-weight: 500;
  cursor: grab;
  transition: all 0.2s;
}

.word-card:hover {
  border-color: #4a90e2;
  background: #edf2f7;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
}

.sorting-table {
  margin-top: 1.5rem;
}

.table-instruction {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.six-column-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.six-column-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 0.35rem;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
}

.six-column-table th:last-child {
  border-right: none;
}

.six-column-table th small {
  display: block;
  font-size: 0.65rem;
  font-weight: 400;
  margin-top: 0.25rem;
  opacity: 0.9;
}

.six-column-table td {
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
  vertical-align: top;
}

.sort-cell {
  width: 100%;
  padding: 0.5rem;
  border: 2px dashed #cbd5e0;
  border-radius: 6px;
  font-size: 0.9rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  background: #f7fafc;
  transition: all 0.2s;
}

.sort-cell:focus {
  outline: none;
  border-color: #4a90e2;
  background: white;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

/* Question Type Badges */
.question-type.literal {
  background: #bee3f8;
  color: #2c5282;
}

.question-type.inferential {
  background: #fbd38d;
  color: #7c2d12;
}

.question-type.mainIdea {
  background: #c6f6d5;
  color: #22543d;
}

.question-type.causeEffect {
  background: #fed7d7;
  color: #742a2a;
}

/* Vocab Review Styles */
.vocab-review {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.vocab-review-item {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.vocab-word {
  font-weight: 700;
  color: #2d3748;
  font-size: 1.1rem;
}

.vocab-def {
  color: #4a5568;
  font-size: 0.9rem;
  text-align: right;
  flex: 1;
  margin-left: 1rem;
}

/* Vocab Quiz Placeholder */
.vocab-quiz-placeholder {
  text-align: center;
  padding: 2rem;
  background: #edf2f7;
  border-radius: 8px;
}

.vocab-quiz-placeholder p {
  margin: 0 0 1rem 0;
  color: #4a5568;
  font-size: 1rem;
}
</style>













