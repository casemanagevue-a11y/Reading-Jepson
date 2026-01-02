<template>
  <div class="print-materials">
    <div class="print-header no-print print-hide">
      <div class="container">
        <div class="header-content">
          <h1>{{ isTeacherVersion ? 'Teacher Materials' : 'Student Workbook' }}</h1>
          <div class="header-actions">
            <button @click="handlePrint" class="btn btn-primary">🖨️ Print</button>
            <button @click="goBack" class="btn btn-secondary">← Back</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loading" class="loading no-print">Loading materials...</div>
    <div v-else-if="error" class="error no-print">{{ error }}</div>

    <div v-else class="printable-content container">
      <!-- Header for printed page - single line -->
      <div class="print-page-header">
        {{ studentName }} | {{ formatDateRange() }} | <span v-if="isTeacherVersion" class="version-badge">TEACHER COPY</span><span v-else class="version-badge">STUDENT WORKBOOK</span>
      </div>

      <!-- DAY 1: Vocabulary & Affixes -->
      <div class="print-section">
        <h2>Day 1 Lesson Template</h2>
        
        <!-- Teacher Version Only -->
        <div v-if="isTeacherVersion" class="day-one-teacher-content">
          
          <!-- Review Words Section -->
          <div class="script-section review-words-section">
            <h3>Review Words (2 words from previous weeks)</h3>
            <p class="script-note">Start by reviewing two words students already know.</p>
            
            <div class="review-word-block">
              <h4>Review Word 1: ________________</h4>
              <p class="script-note">Teacher says:</p>
              <p class="script-line">"Read the word."</p>
              <p class="script-line">"Tell me what it means in your own words."</p>
              <p class="script-note">Ask guiding questions as needed:</p>
              <ul class="teacher-questions">
                <li>"Is this a kind of ___ or a kind of ___?"</li>
                <li>"Where would you see this?"</li>
                <li>"Can you give an example?"</li>
              </ul>
              <p class="script-note">If needed, provide an example sentence using the word.</p>
              <p class="script-line">"Check your vocabulary page and make sure your definition and picture still make sense."</p>
            </div>
            
            <div class="review-word-block">
              <h4>Review Word 2: ________________</h4>
              <p class="script-note">(Repeat the same routine.)</p>
            </div>
          </div>
          
          <!-- New Word Routine for Each Vocab Word -->
          <div class="script-section new-word-section">
            <h3>New Vocabulary Words</h3>
            
            <div v-for="(word, index) in content.vocab" :key="index" class="word-script-block">
              <h3>Word {{ index + 1 }}: {{ word.word }}</h3>
              
              <!-- Step 1: Say the Word -->
              <div class="routine-step">
                <h5>Step 1: Say the Word (Entry & Connection)</h5>
                <p class="script-note">Teacher says the word clearly:</p>
                <p class="script-line">"{{ word.word }}"</p>
                <p class="script-note">Teacher asks:</p>
                <ul class="teacher-questions">
                  <li>"How many syllables do you hear?"</li>
                  <li>"Have you heard this word before, or is it new?"</li>
                </ul>
                <p class="script-note">(Oral only — no worksheet yet.)</p>
              </div>

              <!-- Step 2: Define the Word -->
              <div class="routine-step">
                <h5>Step 2: Define the Word (Teacher Model)</h5>
                <p class="script-note">Teacher says:</p>
                <p class="script-line">"This word means: {{ word.definition }}"</p>
                <p class="script-note">(One short, student-friendly sentence.)</p>
              </div>

              <!-- Step 3: Use in Sentence -->
              <div class="routine-step">
                <h5>Step 3: Use the Word in a Sentence (Teacher Model)</h5>
                <p class="script-note">Teacher says:</p>
                <p class="script-line">"Listen to how I use the word in a sentence: {{ word.exampleSentence || '[Sentence needed]' }}"</p>
                <p class="script-note">(Literal meaning only.)</p>
              </div>

              <!-- Step 4: Part of Speech -->
              <div class="routine-step">
                <h5>Step 4: Identify Part of Speech Using Sentence Function</h5>
                <p class="script-note">Teacher refers to the sentence chart and says:</p>
                <p class="script-line">"I wonder what job this word is doing in the sentence. Let's ask some questions to figure it out."</p>
                <p class="script-note">Teacher guides the student through function questions:</p>
                <ul class="function-questions">
                  <li><strong>Who or what?</strong> → Noun</li>
                  <li><strong>Is / was doing?</strong> → Verb</li>
                  <li><strong>Which one? What kind? How many?</strong> → Adjective</li>
                  <li><strong>Where? When? How? Why?</strong> → Adverb or prepositional information</li>
                </ul>
                <p class="script-note">Teacher confirms explicitly:</p>
                <p class="script-line">"It answers the question ________, so this word is a ________."</p>
                <p class="script-note">Student repeats or confirms.</p>
              </div>

              <!-- Step 5: Write the Word -->
              <div class="routine-step">
                <h5>Step 5: Teacher Writes the Word (Visual Anchor)</h5>
                <p class="script-note">Teacher writes the word on the whiteboard.</p>
                <p class="script-note">Teacher says:</p>
                <p class="script-line">"Watch how the word looks."</p>
              </div>

              <!-- Step 6: Student Says Letters -->
              <div class="routine-step">
                <h5>Step 6: Student Says Letters & Reads the Word</h5>
                <p class="script-note">Student:</p>
                <ul class="action-list">
                  <li>Says each letter aloud.</li>
                  <li>Reads the whole word aloud.</li>
                </ul>
              </div>

              <!-- Step 7: Air Write -->
              <div class="routine-step">
                <h5>Step 7: Air Write (Multisensory Encoding)</h5>
                <p class="script-note">Student:</p>
                <ul class="action-list">
                  <li>Air writes the word.</li>
                  <li>Says each letter while writing.</li>
                </ul>
              </div>

              <!-- Step 8: Student Writes -->
              <div class="routine-step">
                <h5>Step 8: Student Writes the Word (Worksheet)</h5>
                <p class="script-note">Student writes the word on the worksheet.</p>
                <p class="script-note">Says each letter while writing.</p>
              </div>

              <!-- Step 9: Co-Construct Meaning -->
              <div class="routine-step">
                <h5>Step 9: Co-Construct Meaning (Teacher + Student)</h5>
                <p class="script-note">On the worksheet, teacher and student work together to:</p>
                <ul class="action-list">
                  <li>Write a simple definition in student language.</li>
                  <li>Write one sentence using the word.</li>
                </ul>
              </div>

              <!-- Step 10: Clarify Meaning -->
              <div class="routine-step">
                <h5>Step 10: Clarify Meaning (If Helpful)</h5>
                <p class="script-note">Student records:</p>
                <div v-if="word.partOfSpeech || word.whatItIs || word.whatItIsNot" style="margin-left: 1rem;">
                  <p v-if="word.partOfSpeech" class="script-note"><strong>Part of speech:</strong> {{ word.partOfSpeech }}</p>
                  <p v-if="word.whatItIs" class="script-note"><strong>What the word is:</strong> {{ word.whatItIs }}</p>
                  <p v-if="word.whatItIsNot" class="script-note"><strong>What the word is not:</strong> {{ word.whatItIsNot }}</p>
                </div>
                <ul v-else class="action-list">
                  <li>Part of speech</li>
                  <li>What the word is</li>
                  <li>What the word is not</li>
                </ul>
                <p class="script-note">(Only if it helps prevent confusion.)</p>
              </div>

              <!-- Step 11: Reflection -->
              <div class="routine-step">
                <h5>Step 11: Reflection (Exit)</h5>
                <p class="script-note">Teacher asks:</p>
                <p class="script-line">"Where are you now with this word?"</p>
                <p class="script-note">Student marks:</p>
                <ul class="reflection-options">
                  <li>❓ Never</li>
                  <li>👀 Heard</li>
                  <li>🧠 Know</li>
                  <li>⭐ Use / Explain</li>
                </ul>
                <p class="script-note">Optional follow-up:</p>
                <p class="script-line">"What helped you move?"</p>
              </div>
              
              <div class="word-divider"></div>
            </div>
          </div>

          <!-- 4. Affix Instruction -->
          <div class="script-section">
            <h3>4. Affix Instruction (2 affixes)</h3>
            <p class="script-line">"Now we're going to look at two word parts that help us understand new words."</p>
            
            <div v-for="(affix, index) in content.affixes.slice(0, 2)" :key="index" class="affix-script-block">
              <h4>Affix {{ index + 1 }}: {{ affix.affix }}</h4>
              <p class="script-line">"This word part is <strong>{{ affix.affix }}</strong>."</p>
              <p class="script-line">"It means <em>{{ affix.meaning }}</em>."</p>
              <p class="script-line">"Here are words that use this affix: <strong>{{ affix.examples.join(', ') }}</strong>."</p>
              <p class="script-line">"Write the affix and its meaning on your affix page."</p>
            </div>
          </div>

          <!-- Closing -->
          <div class="script-section closing-section">
            <h3>Closing</h3>
            <p class="script-line">"Today you reviewed words you already know, learned new words, and learned word parts that help unlock meaning."</p>
            <p class="script-line">"Tomorrow, we will look closely at sentences with these words and see how the words work together."</p>
          </div>
        </div>

        <!-- Student Version: Simple vocab list -->
        <div v-else class="student-vocab-section">
          <div v-for="(word, index) in content.vocab" :key="index" class="vocab-item-student">
            <h4>{{ index + 1 }}. {{ word.word }}</h4>
            <p class="definition-line">{{ word.definition }}</p>
            <p class="context-sentence">"{{ word.exampleSentence || '' }}"</p>
            <div class="student-work-space">
              <p><strong>My Sentence:</strong></p>
              <div class="write-lines"></div>
              <p><strong>Picture:</strong></p>
              <div class="picture-box"></div>
            </div>
          </div>
          
          <h3>Affixes</h3>
          <div v-for="(affix, index) in content.affixes.slice(0, 2)" :key="index" class="affix-item-student">
            <p><strong>{{ affix.affix }}</strong> = {{ affix.meaning }}</p>
            <p class="examples-line">Examples: {{ affix.examples.join(', ') }}</p>
          </div>
        </div>
      </div>

      <!-- Vocabulary Semantic Maps (Student Version Only) -->
      <div v-if="!isTeacherVersion" class="semantic-maps-wrapper">
        <SemanticMap 
          v-for="(word, index) in content.vocab" 
          :key="'semantic-' + index"
          :vocab-word="word"
        />
      </div>

      <!-- DAY 2: Words Working Together -->
      <div class="print-section page-break">
        <h2>Day 2: Words Working Together</h2>
        <p class="section-note">Sentence structure analysis using vocabulary words</p>
        
        <div v-if="content.weeklyPassage" class="passage-section">
          <h3>{{ content.weeklyPassage.title }}</h3>
          <p class="word-count"><strong>Word Count:</strong> {{ calculateWordCount(content.weeklyPassage.text) }} words</p>
          
          <div class="passage-text">{{ content.weeklyPassage.text }}</div>
          
          <!-- Vocabulary Practice (matching) -->
          <div class="vocab-practice">
            <h4>Vocabulary Practice</h4>
            <p>Match each word to the correct meaning.</p>
            <div class="matching-section">
              <div class="matching-column">
                <div v-for="(word, index) in content.vocab.slice(0, 9)" :key="index">
                  {{ index + 1 }}. {{ word.word }}
                </div>
              </div>
              <div class="matching-column">
                <p><strong>Word Bank</strong></p>
                <div v-for="(word, index) in content.vocab.slice(0, 9)" :key="index">
                  {{ String.fromCharCode(65 + index) }}. {{ word.definition }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Comprehension Questions -->
        <div class="questions-section">
          <h3>Comprehension Questions</h3>
          <div v-for="(q, index) in content.day3Questions" :key="index" class="question-item">
            <p><strong>{{ index + 1 }}.</strong> {{ q.prompt }}</p>
            <div class="answer-space">
              <div class="answer-line"></div>
              <div class="answer-line"></div>
            </div>
          </div>
        </div>

        <!-- Teacher Answer Key -->
        <div v-if="isTeacherVersion" class="teacher-answer-key page-break">
          <h3>TEACHER ANSWER KEY</h3>
          <h4>Vocabulary Matching Answers</h4>
          <div v-for="(_word, index) in content.vocab.slice(0, 9)" :key="index">
            {{ index + 1 }} - {{ String.fromCharCode(65 + index) }}
          </div>
          
          <h4>Comprehension Sample Answers</h4>
          <div v-for="(q, index) in content.day3Questions" :key="index" class="answer-sample">
            <p><strong>{{ index + 1 }}.</strong> {{ q.prompt }}</p>
            <p class="sample-answer">(Student answers will vary - look for key concepts)</p>
          </div>
        </div>
      </div>

      <!-- DAY 5: Reading Assessment + Vocab Spiral -->
      <div class="print-section page-break">
        <h2>Day 5: Reading Assessment + Vocab Spiral</h2>
        
        <div v-if="content.fridayPassage" class="passage-section">
          <h3>{{ content.fridayPassage.title }}</h3>
          <p class="word-count"><strong>Word Count:</strong> {{ calculateWordCount(content.fridayPassage.text) }} words</p>
          
          <div class="passage-text">{{ content.fridayPassage.text }}</div>
        </div>

        <!-- Assessment Questions -->
        <div class="questions-section">
          <h3>Assessment Questions</h3>
          <div v-for="(q, index) in content.day5Questions" :key="index" class="question-item">
            <p><strong>{{ index + 1 }}.</strong> {{ q.prompt }}</p>
            <div class="answer-space">
              <div class="answer-line"></div>
              <div class="answer-line"></div>
            </div>
          </div>
        </div>
        
        <!-- Fluency Assessment Tracking -->
        <div class="fluency-tracking">
          <h3>Fluency Assessment {{ isTeacherVersion ? '(Teacher Recording Form)' : '' }}</h3>
          <div class="tracking-grid">
            <div class="tracking-item">
              <label>Time (seconds):</label>
              <div class="tracking-box"></div>
            </div>
            <div class="tracking-item">
              <label>Words Per Minute:</label>
              <div class="tracking-box"></div>
              <p class="formula">WPM = ({{ calculateWordCount(content.fridayPassage?.text || '') }} words ÷ seconds) × 60</p>
            </div>
          </div>
          
          <div v-if="isTeacherVersion" class="error-tracking">
            <h4>Reading Errors (for accuracy calculation)</h4>
            <div class="errors-grid">
              <div class="error-item">
                <label>Omissions (skipped):</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item">
                <label>Insertions (added):</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item">
                <label>Substitutions (replaced):</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item">
                <label>Mispronunciations:</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item total">
                <label>Total Errors:</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item total">
                <label>Accuracy %:</label>
                <div class="error-box"></div>
                <p class="formula">Accuracy = ((words - errors) ÷ words) × 100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SemanticMap from '@/components/SemanticMap.vue'
import { 
  getWeekAssignmentsByStudent,
  getPassagesByWeek,
  getVocabByWeek,
  getAffixesByWeek,
  getQuestionsByWeek,
  getStudent
} from '@/services/firestoreServices'
import type { 
  WeekAssignmentDocument,
  PassageDocument,
  VocabDocument,
  AffixDocument,
  ComprehensionQuestionDocument,
  PassageVocabItem,
  PassageAffixItem
} from '@/types/firestore'

const route = useRoute()
const router = useRouter()

const assignment = ref<WeekAssignmentDocument & { id: string } | null>(null)
const studentName = ref('')
const loading = ref(true)
const error = ref<string | null>(null)

const isTeacherVersion = computed(() => route.query.version === 'teacher')

const content = ref<{
  vocab: (VocabDocument | PassageVocabItem)[]
  affixes: (AffixDocument | PassageAffixItem)[]
  weeklyPassage: PassageDocument | null
  fridayPassage: PassageDocument | null
  day3Questions: ComprehensionQuestionDocument[]
  day4Questions: ComprehensionQuestionDocument[]
  day5Questions: ComprehensionQuestionDocument[]
}>({
  vocab: [],
  affixes: [],
  weeklyPassage: null,
  fridayPassage: null,
  day3Questions: [],
  day4Questions: [],
  day5Questions: []
})

const calculateWordCount = (text: string): number => {
  if (!text) return 0
  return text.split(/\s+/).filter(word => word.length > 0).length
}

const formatDateRange = () => {
  if (!assignment.value) return ''
  const start = assignment.value.startDate.toDate()
  const end = assignment.value.endDate.toDate()
  return `${start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`
}

const handlePrint = () => {
  window.print()
}

const goBack = () => {
  router.back()
}

onMounted(async () => {
  const assignmentId = route.query.assignmentId as string
  const studentId = route.query.studentId as string
  
  if (!assignmentId || !studentId) {
    error.value = 'Missing assignment or student ID'
    loading.value = false
    return
  }
  
  try {
    const studentDoc = await getStudent(studentId)
    studentName.value = studentDoc?.displayName || 'Student'
    
    const assignments = await getWeekAssignmentsByStudent(studentId)
    assignment.value = assignments.find(a => a.id === assignmentId) || null
    
    if (assignment.value) {
      const templateId = assignment.value.weekTemplateId
      
      const [passages, vocab, affixes, questions] = await Promise.all([
        getPassagesByWeek(templateId),
        getVocabByWeek(templateId),
        getAffixesByWeek(templateId),
        getQuestionsByWeek(templateId)
      ])
      
      const weeklyPassage = passages.find(p => p.type === 'weekly') || null
      const fridayPassage = passages.find(p => p.type === 'friday') || null
      
      // Use vocab from passage.vocabItems if available (has sentences from passage)
      // Otherwise fall back to vocab collection
      const vocabToUse = weeklyPassage?.vocabItems && weeklyPassage.vocabItems.length > 0 
        ? weeklyPassage.vocabItems as any
        : vocab
      
      // Use affixes from passage.affixItems if available (has passage-specific examples)
      // Otherwise fall back to affixes collection
      const affixesToUse = weeklyPassage?.affixItems && weeklyPassage.affixItems.length > 0
        ? weeklyPassage.affixItems as any
        : affixes
      
      content.value = {
        vocab: vocabToUse,
        affixes: affixesToUse,
        weeklyPassage,
        fridayPassage,
        day3Questions: questions.filter(q => q.day === 3),
        day4Questions: questions.filter(q => q.day === 4),
        day5Questions: questions.filter(q => q.day === 5)
      }
    }
  } catch (err: any) {
    console.error('Error loading materials:', err)
    error.value = err.message || 'Failed to load materials'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.print-materials {
  background: white;
  min-height: 100vh;
}
ul {
    margin-left: 28px;
}
h5{
  text-decoration: underline;
  margin-top: 10px;
  font-size: 14px;
}

.script-line {
  margin: 0.75rem 0 !important;
  line-height: 1.8 !important;
  color: #4a5d9e !important;
  font-size: 0.95rem !important;
  font-style: italic !important;
  font-weight: 500 !important;
}

.script-note {
  font-style: normal;
    color: #718096;
    font-size: .9rem;
    margin: .3rem 0;
    line-height: 1.4;
}
.print-header {
  background: #f7fafc;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content h1 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 0.75rem;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.printable-content {
  padding: 2rem;
}

.print-page-header {
  padding: 0.25rem 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid #1a202c;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1a202c;
 
  page-break-after: avoid;
  page-break-inside: avoid !important;
}

.version-badge {
  background: #4a90e2;
  color: white;
  padding: 0.15rem 0.5rem;
  border-radius: 3px;
  font-weight: 700;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-left: 0.25rem;
}

.print-section {
  margin-bottom: 3rem;
}

.print-section h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #cbd5e0;
}

.print-section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 1rem 0;
}

.directions {
  background: #f7fafc;
  padding: 1rem;
  border-left: 4px solid #4a90e2;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}
ul.teacher-questions {
    line-height: 1.3 !important;
    color: #4a5d9e !important;
    font-size: .95rem !important;
    font-style: italic !important;
    font-weight: 500 !important;
}
.teacher-note {
  background: #fff5f5;
  padding: 1rem;
  border-left: 4px solid #f56565;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 0.9rem;
}

/* Student Vocab Format */
.vocab-item-student {
  margin-bottom: 2rem;
  page-break-inside: avoid;
}

.vocab-number {
  font-size: 1.125rem;
  margin: 0 0 0.5rem 0;
}

.context-sentence {
  font-style: italic;
  line-height: 1.8;
  margin: 0.5rem 0;
}

.student-inference {
  margin-top: 0.75rem;
  font-weight: 500;
}

.blank-line {
  display: inline-block;
  border-bottom: 2px solid #1a202c;
  min-width: 300px;
  margin-left: 0.5rem;
}

/* Teacher Vocab Format */
.vocab-item-teacher {
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  page-break-inside: avoid;
}

.vocab-item-teacher h4 {
  font-size: 1.125rem;
  color: #1a202c;
  margin: 0 0 0.75rem 0;
}

.definition-badge {
  background: #4a90e2;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-left: 0.5rem;
}

.context {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.inquiry-section {
  margin-top: 1rem;
  padding-left: 1rem;
}

.prompt-pair {
  margin-bottom: 0.75rem;
}

.prompt {
  color: #2d3748;
  margin: 0.25rem 0;
  font-weight: 500;
}

.truth-bite {
  color: #718096;
  margin: 0.25rem 0 0 1rem;
  font-size: 0.9rem;
}

.final-question {
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid #cbd5e0;
  font-weight: 600;
  color: #2d3748;
}

.affix-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
}

.affix-item {
  margin-bottom: 1rem;
}

.affix-examples {
  margin: 0.25rem 0;
  color: #4a5568;
  font-size: 0.9rem;
}

.passage-section {
  margin: 1.5rem 0;
}

.word-count {
  background: #edf2f7;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 1rem;
}

.passage-text {
  line-height: 2;
  font-size: 1.0625rem;
  margin: 1.5rem 0;
  text-align: justify;
}

.vocab-practice {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
}

.matching-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.matching-column div {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.question-item {
  margin-bottom: 2rem;
  page-break-inside: avoid;
}

.question-item p {
  margin: 0 0 0.5rem 0;
  line-height: 1.6;
}

.answer-space {
  margin-top: 0.75rem;
}

.answer-line {
  border-bottom: 1px solid #cbd5e0;
  height: 25px;
  margin-bottom: 0.5rem;
}

.teacher-answer-key {
  background: #fff5f5;
  padding: 2rem;
  border: 3px solid #f56565;
  border-radius: 8px;
}

.teacher-answer-key h3 {
  color: #c53030;
  text-align: center;
  margin-top: 0;
}

.answer-sample {
  color: #718096;
  font-style: italic;
  margin-left: 1rem;
}

.fluency-tracking {
  margin-top: 2rem;
  page-break-inside: avoid;
}

.tracking-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1rem;
}

.tracking-item label {
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.tracking-box {
  border: 2px solid #1a202c;
  height: 40px;
  border-radius: 4px;
}

.formula {
  font-size: 0.75rem;
  color: #718096;
  margin-top: 0.25rem;
  font-style: italic;
}

.error-tracking {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #fff5f5;
  border-radius: 8px;
}

.error-tracking h4 {
  color: #c53030;
  margin-top: 0;
}

.errors-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.error-item label {
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.error-box {
  border: 2px solid #c53030;
  height: 35px;
  border-radius: 4px;
}

.error-item.total {
  grid-column: span 1;
}

.error-item.total label {
  color: #c53030;
}

.page-break {
  page-break-before: always;
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

@media print {
  nav, .navbar{display: none !important;}
 
  .no-print {
    display: none !important;
  }
  
  .print-materials {
    padding: 0;
  }
  
  .printable-content {
    max-width: 100%;
    padding: 0.5in;
  }
  
  .page-break {
    page-break-before: always;
  }
  
  .print-section {
    page-break-inside: avoid;
  }
  
  /* Prevent page breaks between review and new word sections */
  .review-section-wrapper {
    page-break-after: avoid !important;
  }
  
  .new-word-section {
    page-break-before: avoid !important;
  }
  
  .script-section,
  .word-script-block,
  .review-block,
  .affix-script-block,
  .build-meaning-section,
  .sentence-support-section,
  .picture-support-section {
    page-break-inside: avoid;
  }
  
  .semantic-maps-section,
  .semantic-maps-wrapper {
    page-break-before: always;
  }
  
  .formula {
    font-size: 8pt;
  }
}
</style>