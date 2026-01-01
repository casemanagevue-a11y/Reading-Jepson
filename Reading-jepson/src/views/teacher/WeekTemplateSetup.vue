<template>
  <div class="week-template-setup">
    <div class="container">
      <div class="header">
        <h1>Create Week Template</h1>
        <p class="subtitle">Create a reusable 5-day reading instruction plan</p>
      </div>
      
      <div class="setup-wizard">
        <!-- Step 1: Template Info -->
        <div v-if="currentStep === 1" class="step">
          <h2>Template Information</h2>
          
          <div class="form-group">
            <label>Template Name</label>
            <input 
              v-model="templateData.templateName" 
              type="text" 
              class="form-input" 
              placeholder="e.g., Week 1 - Ancient Rome, Q2 Week 3"
              required
            />
          </div>
          
          <div class="form-group">
            <label>Grade Level (Optional)</label>
            <input 
              v-model="templateData.grade" 
              type="text" 
              class="form-input" 
              placeholder="e.g., 6, 7-8, 6th"
            />
          </div>
          
          <div class="form-group">
            <label>Unit (Optional)</label>
            <input 
              v-model="templateData.unit" 
              type="text" 
              class="form-input" 
              placeholder="e.g., Unit 1, Ancient Civilizations"
            />
          </div>
          
          <div class="form-group">
            <label>Subject Focus</label>
            <select v-model="templateData.subjectFocus" class="form-input" required>
              <option value="ELA">ELA</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
            </select>
          </div>
          
          <div class="form-group">
            <label>Description (Optional)</label>
            <textarea 
              v-model="templateData.description" 
              class="form-input" 
              rows="3"
              placeholder="Brief description of this week's focus..."
            ></textarea>
          </div>
        </div>
        
        <!-- Steps 2-5: Same as original WeekSetup but without student-specific data -->
        <div v-if="currentStep === 2" class="step">
          <h2>Day 1: Vocabulary Script & Affixes</h2>
          
          <!-- Library Browser for Vocabulary -->
          <div class="section">
            <h3>📚 Select Vocabulary from Library</h3>
            <p class="section-note">Choose vocabulary words from your library</p>
            
            <!-- Library Filters -->
            <div class="library-filters">
              <div class="filter-row">
                <div class="form-group">
                  <label>Filter by Grade</label>
                  <select v-model="libraryFilters.grade" class="form-input">
                    <option value="">All Grades</option>
                    <option v-for="grade in availableGrades" :key="grade" :value="grade">{{ grade }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Filter by Unit</label>
                  <select v-model="libraryFilters.unit" class="form-input">
                    <option value="">All Units</option>
                    <option v-for="unit in availableUnits" :key="unit" :value="unit">{{ unit }}</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Library Results -->
            <div v-if="isLoadingLibrary" class="loading-state">
              <p>Loading library...</p>
            </div>
            <div v-else-if="filteredVocabItems.length > 0" class="library-results">
              <h4>Available Vocabulary ({{ filteredVocabItems.length }} items)</h4>
              <div class="gridTwo library-items">
                <div v-for="item in filteredVocabItems" :key="item.id" class="library-item">
                  <div class="item-content">
                    <strong>{{ item.word }}</strong>
                    <p>{{ item.definition }}</p>
                    <div v-if="item.inquiryPrompts && item.inquiryPrompts.length > 0" class="has-inquiry">
                      ✨ Includes inquiry questions
                    </div>
                  </div>
                  <button 
                    @click="importVocabFromLibrary(item)" 
                    class="btn btn-primary btn-sm"
                    :disabled="vocabWords.some(v => v.word === item.word)"
                  >
                    {{ vocabWords.some(v => v.word === item.word) ? '✓ Added' : '+ Import' }}
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Selected Vocabulary -->
            <div v-if="vocabWords.some(v => v.word)" class="selected-items">
              <h4>Selected Vocabulary ({{ vocabWords.filter(v => v.word).length }} words)</h4>
              <div class="selected-list">
                <template v-for="(vocab, index) in vocabWords" :key="index">
                  <div v-if="vocab.word" class="selected-item">
                    <div class="item-info">
                      <strong>{{ index + 1 }}. {{ vocab.word }}</strong>
                      <p>{{ vocab.definition }}</p>
                    </div>
                    <button @click="removeVocab(index)" class="btn btn-danger btn-sm">Remove</button>
                  </div>
                </template>
              </div>
            </div>
          </div>
          
          <div class="section">
            <h3>Review Words (Optional)</h3>
            <p class="section-note">2 words from previous weeks for review at the start of Day 1</p>
            <div class="form-group">
              <label>Review Word 1</label>
              <input v-model="reviewWords.word1" type="text" class="form-input" placeholder="Word from previous week" />
            </div>
            <div class="form-group">
              <label>Review Word 2</label>
              <input v-model="reviewWords.word2" type="text" class="form-input" placeholder="Word from previous week" />
            </div>
            <small class="form-hint">Students will review these at the beginning of Day 1</small>
          </div>
          
          <!-- Library Browser for Affixes -->
          <div class="section">
            <h3>📚 Select Affixes from Library</h3>
            <p class="section-note">Choose affixes from your library (max 2)</p>
            
            <!-- Library Results -->
            <div v-if="filteredAffixItems.length > 0" class="library-results">
              <h4>Available Affixes ({{ filteredAffixItems.length }} items)</h4>
              <div class="gridTwo library-items">
                <div v-for="item in filteredAffixItems" :key="item.id" class="library-item">
                  <div class="item-content">
                    <strong>{{ item.affix }}</strong> <span class="affix-badge">{{ item.kind }}</span>
                    <p>{{ item.meaning }}</p>
                    <small>Examples: {{ item.examples.join(', ') }}</small>
                  </div>
                  <button 
                    @click="importAffixFromLibrary(item)" 
                    class="btn btn-primary btn-sm"
                    :disabled="affixes.some(a => a.affix === item.affix) || affixes.filter(a => a.affix).length >= 2"
                  >
                    {{ affixes.some(a => a.affix === item.affix) ? '✓ Added' : affixes.filter(a => a.affix).length >= 2 ? 'Max 2' : '+ Import' }}
                  </button>
                </div>
              </div>
            </div>
            
            <!-- Selected Affixes -->
            <div v-if="affixes.some(a => a.affix)" class="selected-items">
              <h4>Selected Affixes ({{ affixes.filter(a => a.affix).length }} affixes)</h4>
              <div class="selected-list">
                <template v-for="(affix, index) in affixes" :key="index">
                  <div v-if="affix.affix" class="selected-item">
                    <div class="item-info">
                      <strong>{{ affix.affix }}</strong> <span class="affix-badge">{{ affix.kind }}</span>
                      <p>{{ affix.meaning }}</p>
                    </div>
                    <button @click="removeAffix(index)" class="btn btn-danger btn-sm">Remove</button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        
        <div v-if="currentStep === 3" class="step">
          <h2>Day 3: Teacher Read + Student Read + Inference Organizer</h2>
          
          <div class="form-group">
            <label>Weekly Passage Title</label>
            <input v-model="weeklyPassage.title" type="text" class="form-input" required />
          </div>
          <div class="form-group">
            <label>Passage Text</label>
            <textarea v-model="weeklyPassage.text" class="form-input" rows="10" required></textarea>
          </div>
          
          <!-- Assign Vocabulary to Passage -->
          <div class="section" v-if="vocabWords.some(v => v.word && v.definition)">
            <h3>Assign Vocabulary to This Passage</h3>
            <p class="section-note">Select vocabulary words that appear in this passage. The system will extract sentences containing each word.</p>
            <template v-for="(vocab, index) in vocabWords" :key="index">
              <div v-if="vocab.word && vocab.definition" class="vocab-assignment">
                <div class="assignment-row">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      :checked="weeklyPassageVocab.has(index)"
                      @change="handleVocabAssignment('weekly', index, $event)"
                    />
                    <strong>{{ vocab.word }}</strong> - {{ vocab.definition }}
                  </label>
                </div>
                
                <!-- Show sentence options if assigned -->
                <div v-if="weeklyPassageVocab.has(index)" class="sentence-selection">
                  <label>Select sentence containing "{{ vocab.word }}":</label>
                  <div class="sentence-options">
                    <label 
                      v-for="(sentence, sIndex) in vocabSentenceOptions.get(`weekly-${index}`) || []" 
                      :key="sIndex"
                      class="sentence-option"
                    >
                      <input 
                        type="radio" 
                        :name="`weekly-vocab-${index}`"
                        :value="sentence"
                        :checked="selectedVocabSentences.get(`weekly-${index}`) === sentence"
                        @change="updateVocabSentence('weekly', index, sentence)"
                      />
                      <span>{{ sentence }}</span>
                    </label>
                    <p v-if="!vocabSentenceOptions.get(`weekly-${index}`)?.length" class="no-sentences">
                      No sentences found containing "{{ vocab.word }}". You can manually enter a sentence below.
                    </p>
                  </div>
                  <div class="form-group" style="margin-top: 0.5rem;">
                    <label>Or enter sentence manually:</label>
                    <textarea 
                      v-model="weeklyPassageVocab.get(index)!.exampleSentence"
                      class="form-input" 
                      rows="2"
                      placeholder="Enter sentence from passage..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
          <!-- Assign Affixes to Passage -->
          <div class="section" v-if="affixes.some(a => a.affix && a.meaning)">
            <h3>Assign Affixes to This Passage</h3>
            <p class="section-note">Select affixes that appear in this passage. The system will find words containing each affix.</p>
            <template v-for="(affix, index) in affixes" :key="index">
              <div v-if="affix.affix && affix.meaning" class="affix-assignment">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    :checked="weeklyPassageAffixes.has(index)"
                    @change="handleAffixAssignment('weekly', index, $event)"
                  />
                  <strong>{{ affix.affix }}</strong> ({{ affix.kind }}) - {{ affix.meaning }}
                </label>
                <div v-if="weeklyPassageAffixes.has(index)" class="affix-word-selection">
                  <label>Select valid examples (uncheck words that don't use this affix):</label>
                  <div class="affix-word-checkboxes">
                    <label 
                      v-for="word in weeklyPassageAffixes.get(index)?.examples || []" 
                      :key="word"
                      class="word-checkbox"
                    >
                      <input 
                        type="checkbox" 
                        :checked="isAffixWordSelected('weekly', index, word)"
                        @change="toggleAffixWord('weekly', index, word, $event)"
                      />
                      <span>{{ word }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
          <div class="section">
            <h3>Inference Organizer Questions</h3>
            <p class="section-note">Literal and inferential questions for Day 3</p>
            <div v-for="(question, index) in day3Questions" :key="index">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="literal">Literal</option>
                  <option value="inferential">Inferential</option>
                </select>
              </div>
              <button v-if="index > 0" @click="day3Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day3Questions.push({ type: 'literal', prompt: '', orderIndex: day3Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
          </div>
        </div>
        
        <div v-if="currentStep === 4" class="step">
          <h2>Day 4: Student Read + Cause/Effect Organizer</h2>
          
          <div class="section">
            <h3>Cause/Effect Organizer</h3>
            <p class="section-note">Main idea and cause/effect questions for Day 4</p>
            <div v-for="(question, index) in day4Questions" :key="index">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="mainIdea">Main Idea</option>
                  <option value="causeEffect">Cause/Effect</option>
                </select>
              </div>
              <button v-if="index > 0" @click="day4Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day4Questions.push({ type: 'causeEffect', prompt: '', orderIndex: day4Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
          </div>
        </div>
        
        <div v-if="currentStep === 5" class="step">
          <h2>Day 5: Reading Assessment + Vocab Spiral</h2>
          
          <div class="form-group">
            <label>Assessment Passage Title</label>
            <input v-model="fridayPassage.title" type="text" class="form-input" required />
          </div>
          <div class="form-group">
            <label>Passage Text</label>
            <textarea v-model="fridayPassage.text" class="form-input" rows="10" required></textarea>
          </div>
          
          <!-- Assign Vocabulary to Passage -->
          <div class="section" v-if="vocabWords.some(v => v.word && v.definition)">
            <h3>Assign Vocabulary to This Passage</h3>
            <p class="section-note">Select vocabulary words that appear in this passage. The system will extract sentences containing each word.</p>
            <template v-for="(vocab, index) in vocabWords" :key="index">
              <div v-if="vocab.word && vocab.definition" class="vocab-assignment">
                <div class="assignment-row">
                  <label class="checkbox-label">
                    <input 
                      type="checkbox" 
                      :checked="fridayPassageVocab.has(index)"
                      @change="handleVocabAssignment('friday', index, $event)"
                    />
                    <strong>{{ vocab.word }}</strong> - {{ vocab.definition }}
                  </label>
                </div>
                
                <!-- Show sentence options if assigned -->
                <div v-if="fridayPassageVocab.has(index)" class="sentence-selection">
                  <label>Select sentence containing "{{ vocab.word }}":</label>
                  <div class="sentence-options">
                    <label 
                      v-for="(sentence, sIndex) in vocabSentenceOptions.get(`friday-${index}`) || []" 
                      :key="sIndex"
                      class="sentence-option"
                    >
                      <input 
                        type="radio" 
                        :name="`friday-vocab-${index}`"
                        :value="sentence"
                        :checked="selectedVocabSentences.get(`friday-${index}`) === sentence"
                        @change="updateVocabSentence('friday', index, sentence)"
                      />
                      <span>{{ sentence }}</span>
                    </label>
                    <p v-if="!vocabSentenceOptions.get(`friday-${index}`)?.length" class="no-sentences">
                      No sentences found containing "{{ vocab.word }}". You can manually enter a sentence below.
                    </p>
                  </div>
                  <div class="form-group" style="margin-top: 0.5rem;">
                    <label>Or enter sentence manually:</label>
                    <textarea 
                      v-model="fridayPassageVocab.get(index)!.exampleSentence"
                      class="form-input" 
                      rows="2"
                      placeholder="Enter sentence from passage..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
          <!-- Assign Affixes to Passage -->
          <div class="section" v-if="affixes.some(a => a.affix && a.meaning)">
            <h3>Assign Affixes to This Passage</h3>
            <p class="section-note">Select affixes that appear in this passage. The system will find words containing each affix.</p>
            <template v-for="(affix, index) in affixes" :key="index">
              <div v-if="affix.affix && affix.meaning" class="affix-assignment">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    :checked="fridayPassageAffixes.has(index)"
                    @change="handleAffixAssignment('friday', index, $event)"
                  />
                  <strong>{{ affix.affix }}</strong> ({{ affix.kind }}) - {{ affix.meaning }}
                </label>
                <div v-if="fridayPassageAffixes.has(index)" class="affix-word-selection">
                  <label>Select valid examples (uncheck words that don't use this affix):</label>
                  <div class="affix-word-checkboxes">
                    <label 
                      v-for="word in fridayPassageAffixes.get(index)?.examples || []" 
                      :key="word"
                      class="word-checkbox"
                    >
                      <input 
                        type="checkbox" 
                        :checked="isAffixWordSelected('friday', index, word)"
                        @change="toggleAffixWord('friday', index, word, $event)"
                      />
                      <span>{{ word }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </template>
          </div>
          
          <div class="section">
            <h3>Reading Assessment Questions</h3>
            <p class="section-note">Questions for reading comprehension assessment</p>
            <div v-for="(question, index) in day5Questions" :key="index">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="literal">Literal</option>
                  <option value="inferential">Inferential</option>
                  <option value="mainIdea">Main Idea</option>
                </select>
              </div>
              <button v-if="index > 0" @click="day5Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day5Questions.push({ type: 'literal', prompt: '', orderIndex: day5Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
          </div>
          
          <div class="section">
            <h3>Spiral Vocabulary Assessment</h3>
            <p class="section-note">Multiple choice vocabulary questions will be auto-generated from this week's vocab + previous weeks</p>
            <div class="info-box">
              <p>✓ The system will automatically create MC questions for vocabulary review</p>
              <p>✓ Questions will include current week + cumulative review from previous weeks</p>
            </div>
          </div>
        </div>
        
        <div class="wizard-nav">
          <button 
            v-if="currentStep > 1" 
            @click="currentStep--" 
            class="btn btn-secondary"
          >
            ← Previous
          </button>
          <button 
            v-if="currentStep < 5" 
            @click="currentStep++" 
            class="btn btn-primary"
          >
            Next →
          </button>
          <button 
            v-if="currentStep === 5" 
            @click="saveTemplate" 
            :disabled="saving"
            class="btn btn-primary"
          >
            {{ saving ? 'Saving...' : 'Save Template' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { 
  createWeekTemplate,
  createPassage, 
  createVocabWord, 
  createAffix,
  createQuestion
} from '@/services/firestoreServices'
import libraryServices from '@/services/libraryServices'
import type { VocabLibraryWithId, AffixLibraryWithId } from '@/services/libraryServices'
import { extractSentencesContainingWord, extractWordsContainingAffix } from '@/utils/lessonParser'
import type { SubjectFocus, AffixKind, PassageVocabItem, PassageAffixItem } from '@/types/firestore'

const router = useRouter()
const { user } = useAuth()

const currentStep = ref(1)
const saving = ref(false)

const templateData = ref({
  templateName: '',
  grade: '',
  unit: '',
  subjectFocus: 'ELA' as SubjectFocus,
  description: ''
})

const vocabWords = ref<Array<{ 
  word: string; 
  definition: string; 
  exampleSentence: string;
  teacherPrompts: string;
  sentenceFrame: string;
  pictureGuidance: string;
  wordPhraseCardsStr: string;
  sortingKey: {
    whoWhat: string;
    isWasDoing: string;
    whichWhatKind: string;
    whereRelationship: string;
  };
}>>([
  { 
    word: '', 
    definition: '', 
    exampleSentence: '',
    teacherPrompts: '',
    sentenceFrame: '',
    pictureGuidance: '',
    wordPhraseCardsStr: '',
    sortingKey: {
      whoWhat: '',
      isWasDoing: '',
      whichWhatKind: '',
      whereRelationship: ''
    }
  }
])

const reviewWords = ref({
  word1: '',
  word2: ''
})

const affixes = ref<Array<{ affix: string; kind: AffixKind; meaning: string; examplesStr: string }>>([
  { affix: '', kind: 'prefix' as AffixKind, meaning: '', examplesStr: '' }
])

// Library browser state
const allLibraryVocabItems = ref<VocabLibraryWithId[]>([]) // All vocab from library
const allLibraryAffixItems = ref<AffixLibraryWithId[]>([]) // All affixes from library
const isLoadingLibrary = ref(false)
const libraryFilters = ref({
  grade: '',
  unit: ''
})
const availableGrades = ref<string[]>([])
const availableUnits = ref<string[]>([])

const weeklyPassage = ref({ title: '', text: '' })
const fridayPassage = ref({ title: '', text: '' })

// Track vocab assignment to passages
const weeklyPassageVocab = ref<Map<number, PassageVocabItem>>(new Map()) // vocab index -> vocab item with sentence
const fridayPassageVocab = ref<Map<number, PassageVocabItem>>(new Map())
const weeklyPassageAffixes = ref<Map<number, PassageAffixItem>>(new Map()) // affix index -> affix item with examples
const fridayPassageAffixes = ref<Map<number, PassageAffixItem>>(new Map())

// Track sentence selection for vocab words
const vocabSentenceOptions = ref<Map<string, string[]>>(new Map()) // "passageType-vocabIndex" -> sentences
const selectedVocabSentences = ref<Map<string, string>>(new Map()) // "passageType-vocabIndex" -> selected sentence

// Track selected affix words
const selectedAffixWords = ref<Map<string, Set<string>>>(new Map()) // "passageType-affixIndex" -> Set of selected words

const day3Questions = ref<Array<{ type: string; prompt: string; orderIndex: number }>>([
  { type: 'literal', prompt: '', orderIndex: 1 }
])

const day4Questions = ref<Array<{ type: string; prompt: string; orderIndex: number }>>([
  { type: 'causeEffect', prompt: '', orderIndex: 1 }
])

const day5Questions = ref<Array<{ type: string; prompt: string; orderIndex: number }>>([
  { type: 'literal', prompt: '', orderIndex: 1 }
])

// Computed filtered vocab items
const filteredVocabItems = computed(() => {
  let items = allLibraryVocabItems.value
  
  if (libraryFilters.value.grade) {
    items = items.filter(item => item.grade === libraryFilters.value.grade)
  }
  if (libraryFilters.value.unit) {
    items = items.filter(item => item.unit === libraryFilters.value.unit)
  }
  
  return items
})

// Computed filtered affix items
const filteredAffixItems = computed(() => {
  let items = allLibraryAffixItems.value
  
  if (libraryFilters.value.grade) {
    items = items.filter(item => item.grade === libraryFilters.value.grade)
  }
  if (libraryFilters.value.unit) {
    items = items.filter(item => item.unit === libraryFilters.value.unit)
  }
  
  return items
})

// Load all vocab and affixes from library on mount
async function loadAllLibraryItems() {
  console.log('[WeekTemplateSetup] loadAllLibraryItems called')
  if (!user.value) {
    console.log('[WeekTemplateSetup] No user, waiting...')
    setTimeout(() => {
      if (user.value) loadAllLibraryItems()
    }, 500)
    return
  }
  
  console.log('[WeekTemplateSetup] Loading library for user:', user.value.uid)
  isLoadingLibrary.value = true
  try {
    // Load all vocab for this teacher (no subject filter - show all subjects)
    const vocabParams = {
      teacherUid: user.value.uid
    }
    console.log('[WeekTemplateSetup] Loading vocab with params:', vocabParams)
    allLibraryVocabItems.value = await libraryServices.queryVocabLibrary(vocabParams)
    console.log('[WeekTemplateSetup] Loaded vocab items:', allLibraryVocabItems.value.length)
    
    // Load all affixes for this teacher
    const affixParams = {
      teacherUid: user.value.uid
    }
    console.log('[WeekTemplateSetup] Loading affixes with params:', affixParams)
    allLibraryAffixItems.value = await libraryServices.queryAffixLibrary(affixParams)
    console.log('[WeekTemplateSetup] Loaded affix items:', allLibraryAffixItems.value.length)
    
    // Extract unique grades and units for filter dropdowns
    const grades = new Set<string>()
    const units = new Set<string>()
    
    allLibraryVocabItems.value.forEach(item => {
      if (item.grade) grades.add(item.grade)
      if (item.unit) units.add(item.unit)
    })
    allLibraryAffixItems.value.forEach(item => {
      if (item.grade) grades.add(item.grade)
      if (item.unit) units.add(item.unit)
    })
    
    availableGrades.value = Array.from(grades).sort()
    availableUnits.value = Array.from(units).sort()
    console.log('[WeekTemplateSetup] Available grades:', availableGrades.value)
    console.log('[WeekTemplateSetup] Available units:', availableUnits.value)
  } catch (error) {
    console.error('[WeekTemplateSetup] Error loading library items:', error)
    // Don't show error - library might be empty
  } finally {
    isLoadingLibrary.value = false
  }
}

// Import vocab from library
function importVocabFromLibrary(item: VocabLibraryWithId) {
  vocabWords.value.push({
    word: item.word,
    definition: item.definition,
    exampleSentence: '', // Will be filled from passage later
    teacherPrompts: item.inquiryPrompts?.join('\n') || '',
    sentenceFrame: item.hints?.join('\n') || '',
    pictureGuidance: '',
    wordPhraseCardsStr: '',
    sortingKey: {
      whoWhat: '',
      isWasDoing: '',
      whichWhatKind: '',
      whereRelationship: ''
    }
  })
}

// Import affix from library
function importAffixFromLibrary(item: AffixLibraryWithId) {
  affixes.value.push({
    affix: item.affix,
    kind: item.kind,
    meaning: item.meaning,
    examplesStr: item.examples.join(', ')
  })
}

const removeVocab = (index: number) => {
  vocabWords.value.splice(index, 1)
}

const removeAffix = (index: number) => {
  affixes.value.splice(index, 1)
}

// Handle vocab assignment to passage
function handleVocabAssignment(passageType: 'weekly' | 'friday', vocabIndex: number, event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  const passageText = passageType === 'weekly' ? weeklyPassage.value.text : fridayPassage.value.text
  const vocab = vocabWords.value[vocabIndex]
  const vocabMap = passageType === 'weekly' ? weeklyPassageVocab : fridayPassageVocab
  const key = `${passageType}-${vocabIndex}`
  
  if (checked && vocab.word && passageText) {
    // Extract sentences containing the word
    const sentences = extractSentencesContainingWord(passageText, vocab.word)
    vocabSentenceOptions.value.set(key, sentences)
    
    // Create vocab item for passage
    const vocabItem: PassageVocabItem = {
      word: vocab.word,
      definition: vocab.definition,
      exampleSentence: sentences[0] || vocab.exampleSentence || '', // Use first sentence or existing
      tags: [],
      teacherPrompts: vocab.teacherPrompts || undefined,
      sentenceFrame: vocab.sentenceFrame || undefined,
      pictureGuidance: vocab.pictureGuidance || undefined,
      wordPhraseCards: vocab.wordPhraseCardsStr 
        ? vocab.wordPhraseCardsStr.split(',').map(c => c.trim()).filter(c => c)
        : undefined,
      sortingKey: (vocab.sortingKey.whoWhat || vocab.sortingKey.isWasDoing || 
                   vocab.sortingKey.whichWhatKind || vocab.sortingKey.whereRelationship) ? {
        whoWhat: vocab.sortingKey.whoWhat ? vocab.sortingKey.whoWhat.split(',').map(s => s.trim()).filter(s => s) : undefined,
        isWasDoing: vocab.sortingKey.isWasDoing ? vocab.sortingKey.isWasDoing.split(',').map(s => s.trim()).filter(s => s) : undefined,
        whichWhatKind: vocab.sortingKey.whichWhatKind ? vocab.sortingKey.whichWhatKind.split(',').map(s => s.trim()).filter(s => s) : undefined,
        whereRelationship: vocab.sortingKey.whereRelationship ? vocab.sortingKey.whereRelationship.split(',').map(s => s.trim()).filter(s => s) : undefined
      } : undefined
    }
    
    vocabMap.value.set(vocabIndex, vocabItem)
    
    // Set selected sentence if found
    if (sentences.length > 0) {
      selectedVocabSentences.value.set(key, sentences[0])
      vocabItem.exampleSentence = sentences[0]
    }
  } else {
    // Remove assignment
    vocabMap.value.delete(vocabIndex)
    vocabSentenceOptions.value.delete(key)
    selectedVocabSentences.value.delete(key)
  }
}

// Handle affix assignment to passage
function handleAffixAssignment(passageType: 'weekly' | 'friday', affixIndex: number, event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  const passageText = passageType === 'weekly' ? weeklyPassage.value.text : fridayPassage.value.text
  const affix = affixes.value[affixIndex]
  const affixMap = passageType === 'weekly' ? weeklyPassageAffixes : fridayPassageAffixes
  const key = `${passageType}-${affixIndex}`
  
  if (checked && affix.affix && passageText) {
    // Extract words containing the affix (respecting prefix/suffix position)
    const words = extractWordsContainingAffix(passageText, affix.affix, affix.kind)
    
    // Create affix item for passage
    const affixItem: PassageAffixItem = {
      affix: affix.affix,
      kind: affix.kind,
      meaning: affix.meaning,
      examples: words.length > 0 ? words : (affix.examplesStr ? affix.examplesStr.split(',').map(e => e.trim()).filter(e => e) : [])
    }
    
    affixMap.value.set(affixIndex, affixItem)
    
    // Initialize all words as selected
    selectedAffixWords.value.set(key, new Set(affixItem.examples))
  } else {
    // Remove assignment
    affixMap.value.delete(affixIndex)
    selectedAffixWords.value.delete(key)
  }
}

// Check if an affix word is selected
function isAffixWordSelected(passageType: 'weekly' | 'friday', affixIndex: number, word: string): boolean {
  const key = `${passageType}-${affixIndex}`
  return selectedAffixWords.value.get(key)?.has(word) || false
}

// Toggle affix word selection
function toggleAffixWord(passageType: 'weekly' | 'friday', affixIndex: number, word: string, event: Event) {
  const checked = (event.target as HTMLInputElement).checked
  const key = `${passageType}-${affixIndex}`
  const affixMap = passageType === 'weekly' ? weeklyPassageAffixes : fridayPassageAffixes
  
  if (!selectedAffixWords.value.has(key)) {
    selectedAffixWords.value.set(key, new Set())
  }
  
  const selectedWords = selectedAffixWords.value.get(key)!
  
  if (checked) {
    selectedWords.add(word)
  } else {
    selectedWords.delete(word)
  }
  
  // Update the affix item with only selected words
  const affixItem = affixMap.value.get(affixIndex)
  if (affixItem) {
    affixItem.examples = Array.from(selectedWords)
  }
}

// Update selected sentence when radio button changes
function updateVocabSentence(passageType: 'weekly' | 'friday', vocabIndex: number, sentence: string) {
  const key = `${passageType}-${vocabIndex}`
  selectedVocabSentences.value.set(key, sentence)
  const vocabMap = passageType === 'weekly' ? weeklyPassageVocab : fridayPassageVocab
  const vocabItem = vocabMap.value.get(vocabIndex)
  if (vocabItem) {
    vocabItem.exampleSentence = sentence
  }
}

const saveTemplate = async () => {
  if (!user.value) return
  
  // Validation
  if (!templateData.value.templateName) {
    alert('Please enter a template name.')
    return
  }
  if (!weeklyPassage.value.title || !weeklyPassage.value.text) {
    alert('Please enter both title and text for the weekly passage in Step 3.')
    return
  }
  if (!fridayPassage.value.title || !fridayPassage.value.text) {
    alert('Please enter both title and text for the Friday passage in Step 5.')
    return
  }
  
  try {
    saving.value = true
    
    // Create week template (only include optional fields if they have values)
    const templatePayload: any = {
      teacherUid: user.value.uid,
      templateName: templateData.value.templateName,
      weekLength: 5, // Default to 5-day week
      subjectFocus: templateData.value.subjectFocus
    }
    
    if (templateData.value.grade) {
      templatePayload.grade = templateData.value.grade
    }
    if (templateData.value.unit) {
      templatePayload.unit = templateData.value.unit
    }
    if (templateData.value.description) {
      templatePayload.description = templateData.value.description
    }
    
    const templateId = await createWeekTemplate(templatePayload)
    
    // Create passages with vocab and affix items (reference templateId as weekId for now)
    const weeklyVocabItems: PassageVocabItem[] = Array.from(weeklyPassageVocab.value.values())
    const weeklyAffixItems: PassageAffixItem[] = Array.from(weeklyPassageAffixes.value.values())
    
    // Clean up vocab items - remove undefined fields
    const cleanWeeklyVocabItems = weeklyVocabItems.map(item => {
      const cleaned: any = {
        word: item.word,
        definition: item.definition,
        exampleSentence: item.exampleSentence || ''
      }
      if (item.tags && item.tags.length > 0) cleaned.tags = item.tags
      if (item.teacherPrompts) cleaned.teacherPrompts = item.teacherPrompts
      if (item.sentenceFrame) cleaned.sentenceFrame = item.sentenceFrame
      if (item.pictureGuidance) cleaned.pictureGuidance = item.pictureGuidance
      if (item.wordPhraseCards && item.wordPhraseCards.length > 0) cleaned.wordPhraseCards = item.wordPhraseCards
      if (item.sortingKey) cleaned.sortingKey = item.sortingKey
      return cleaned as PassageVocabItem
    })
    
    const weeklyPassagePayload: any = {
      weekId: templateId,
      type: 'weekly',
      title: weeklyPassage.value.title,
      text: weeklyPassage.value.text
    }
    if (cleanWeeklyVocabItems.length > 0) weeklyPassagePayload.vocabItems = cleanWeeklyVocabItems
    if (weeklyAffixItems.length > 0) weeklyPassagePayload.affixItems = weeklyAffixItems
    
    await createPassage(weeklyPassagePayload)
    
    const fridayVocabItems: PassageVocabItem[] = Array.from(fridayPassageVocab.value.values())
    const fridayAffixItems: PassageAffixItem[] = Array.from(fridayPassageAffixes.value.values())
    
    // Clean up vocab items - remove undefined fields
    const cleanFridayVocabItems = fridayVocabItems.map(item => {
      const cleaned: any = {
        word: item.word,
        definition: item.definition,
        exampleSentence: item.exampleSentence || ''
      }
      if (item.tags && item.tags.length > 0) cleaned.tags = item.tags
      if (item.teacherPrompts) cleaned.teacherPrompts = item.teacherPrompts
      if (item.sentenceFrame) cleaned.sentenceFrame = item.sentenceFrame
      if (item.pictureGuidance) cleaned.pictureGuidance = item.pictureGuidance
      if (item.wordPhraseCards && item.wordPhraseCards.length > 0) cleaned.wordPhraseCards = item.wordPhraseCards
      if (item.sortingKey) cleaned.sortingKey = item.sortingKey
      return cleaned as PassageVocabItem
    })
    
    const fridayPassagePayload: any = {
      weekId: templateId,
      type: 'friday',
      title: fridayPassage.value.title,
      text: fridayPassage.value.text
    }
    if (cleanFridayVocabItems.length > 0) fridayPassagePayload.vocabItems = cleanFridayVocabItems
    if (fridayAffixItems.length > 0) fridayPassagePayload.affixItems = fridayAffixItems
    
    await createPassage(fridayPassagePayload)
    
    // Create vocab words (only include fields with values)
    for (const vocab of vocabWords.value) {
      if (vocab.word && vocab.definition) {
        const vocabPayload: any = {
          weekId: templateId,
          word: vocab.word,
          definition: vocab.definition,
          exampleSentence: vocab.exampleSentence || '',
          tags: []
        }
        
        // Only include optional fields if they have values
        if (vocab.teacherPrompts) vocabPayload.teacherPrompts = vocab.teacherPrompts
        if (vocab.sentenceFrame) vocabPayload.sentenceFrame = vocab.sentenceFrame
        if (vocab.pictureGuidance) vocabPayload.pictureGuidance = vocab.pictureGuidance
        
        // Parse word/phrase cards
        if (vocab.wordPhraseCardsStr) {
          const cards = vocab.wordPhraseCardsStr.split(',').map(c => c.trim()).filter(c => c)
          if (cards.length > 0) vocabPayload.wordPhraseCards = cards
        }
        
        // Parse sorting key
        const sortingKey: any = {}
        let hasSortingKey = false
        
        if (vocab.sortingKey.whoWhat) {
          sortingKey.whoWhat = vocab.sortingKey.whoWhat.split(',').map(s => s.trim()).filter(s => s)
          if (sortingKey.whoWhat.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.isWasDoing) {
          sortingKey.isWasDoing = vocab.sortingKey.isWasDoing.split(',').map(s => s.trim()).filter(s => s)
          if (sortingKey.isWasDoing.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.whichWhatKind) {
          sortingKey.whichWhatKind = vocab.sortingKey.whichWhatKind.split(',').map(s => s.trim()).filter(s => s)
          if (sortingKey.whichWhatKind.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.whereRelationship) {
          sortingKey.whereRelationship = vocab.sortingKey.whereRelationship.split(',').map(s => s.trim()).filter(s => s)
          if (sortingKey.whereRelationship.length > 0) hasSortingKey = true
        }
        
        if (hasSortingKey) vocabPayload.sortingKey = sortingKey
        
        await createVocabWord(vocabPayload)
      }
    }
    
    // Store review words in template description or metadata (optional)
    if (reviewWords.value.word1 || reviewWords.value.word2) {
      console.log('Review words:', reviewWords.value)
      // TODO: Store review words if needed (could add to template metadata)
    }
    
    // Create affixes
    for (const affix of affixes.value) {
      if (affix.affix && affix.meaning) {
        await createAffix({
          weekId: templateId,
          affix: affix.affix,
          kind: affix.kind,
          meaning: affix.meaning,
          examples: affix.examplesStr.split(',').map(e => e.trim()).filter(e => e)
        })
      }
    }
    
    // Create Day 3 questions (Inference organizer)
    for (const q of day3Questions.value) {
      if (q.prompt) {
        await createQuestion({
          weekId: templateId,
          day: 3,
          type: q.type as any,
          prompt: q.prompt,
          orderIndex: q.orderIndex
        })
      }
    }
    
    // Create Day 4 questions (Cause/Effect organizer)
    for (const q of day4Questions.value) {
      if (q.prompt) {
        await createQuestion({
          weekId: templateId,
          day: 4,
          type: q.type as any,
          prompt: q.prompt,
          orderIndex: q.orderIndex
        })
      }
    }
    
    // Create Day 5 questions (Reading assessment)
    for (const q of day5Questions.value) {
      if (q.prompt) {
        await createQuestion({
          weekId: templateId,
          day: 5,
          type: q.type as any,
          prompt: q.prompt,
          orderIndex: q.orderIndex
        })
      }
    }
    
    router.push('/teacher/week-templates')
  } catch (error) {
    console.error('Error saving template:', error)
    alert('Failed to save template. Please try again.')
  } finally {
    saving.value = false
  }
}

// Load library items when component mounts
onMounted(() => {
  loadAllLibraryItems()
})
</script>

<style scoped>
.week-template-setup {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1000px;
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

.setup-wizard {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.step h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1.5rem 0;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.section {
  margin-bottom: 2rem;
}

.section h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
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
  transition: border-color 0.2s;
}

.form-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.gridTwo.library-items {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: center;
    align-items: start;
    gap: 10px;
}
.library-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: nowrap;
    align-items: flex-start;
}
.item-content {
    border: solid;
    padding: 5px;
    margin-bottom: 2px;
    height: 100px;
}
.vocab-entry,
.affix-entry {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  position: relative;
}

.wizard-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 2px solid #e2e8f0;
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
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(74, 144, 226, 0.3);
}

.btn-primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
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

.section-note {
  color: #718096;
  font-size: 0.9rem;
}

/* Vocab and Affix Assignment Styles */
.vocab-assignment,
.affix-assignment {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}

.assignment-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.95rem;
}

.checkbox-label input[type="checkbox"] {
  cursor: pointer;
}

.sentence-selection {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.sentence-selection label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4a5568;
}

.sentence-options {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}

.sentence-option {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.sentence-option:hover {
  border-color: #667eea;
  background: #f7fafc;
}

.sentence-option input[type="radio"] {
  margin-top: 0.25rem;
  cursor: pointer;
}

.sentence-option span {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.5;
  color: #2d3748;
}

.no-sentences {
  color: #e53e3e;
  font-size: 0.85rem;
  font-style: italic;
  padding: 0.5rem;
  background: #fff5f5;
  border-radius: 4px;
}

.affix-examples {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #4a5568;
  margin-bottom: 1rem;
  font-style: italic;
}

.day2-section {
  background: #edf2f7;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #4a90e2;
}

.day2-section h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.sorting-key {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.sorting-key p {
  margin: 0 0 0.75rem 0;
  font-weight: 500;
  color: #2d3748;
}

.form-hint {
  display: block;
  color: #718096;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.info-box {
  background: #edf2f7;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #48bb78;
}

.info-box p {
  margin: 0.5rem 0;
  color: #2d3748;
  font-size: 0.9rem;
}

.vocab-header-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.vocab-header-row h4 {
  margin: 0;
  color: #1a202c;
  font-size: 1.125rem;
}

.teacher-notes {
  background: #f0f4f8;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #667eea;
}

.teacher-notes h5 {
  margin: 0 0 1rem 0;
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
}

.subsection-note {
  color: #718096;
  font-size: 0.85rem;
  margin-bottom: 0.75rem;
  font-style: italic;
}
</style>