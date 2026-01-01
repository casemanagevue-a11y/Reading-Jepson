<template>
  <div class="library-import">
    <div class="import-header">
      <h2>{{ title || 'Import to Library' }}</h2>
      <p class="subtitle">
        {{ importType === 'vocab' ? 'Import vocabulary terms' : 
           importType === 'affix' ? 'Import affixes' : 
           'Import passage' }}
      </p>
    </div>

    <!-- Step 1: Metadata -->
    <div v-if="step === 1" class="step-content">
      <div class="metadata-form">
        <div class="form-row">
          <div class="form-group">
            <label class="required">Import Type</label>
            <select v-model="importType" class="form-select">
              <option value="vocab">Vocabulary</option>
              <option value="affix">Affixes</option>
              <option value="passage">Passage</option>
            </select>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group" v-if="importType !== 'affix'">
            <label class="required">Subject</label>
            <select v-model="metadata.subject" class="form-select">
              <option value="ELA">ELA</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Math">Math</option>
            </select>
          </div>
          <div class="form-group" v-else>
            <label>Subject (optional for affixes)</label>
            <select v-model="metadata.subject" class="form-select">
              <option value="">None</option>
              <option value="ELA">ELA</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Math">Math</option>
            </select>
          </div>

          <div class="form-group">
            <label class="required">Grade</label>
            <input 
              v-model="metadata.grade" 
              type="text" 
              class="form-input"
              placeholder="e.g., 6, 7, 6-8"
              list="grade-suggestions"
            />
            <datalist id="grade-suggestions">
              <option v-for="grade in autocompleteOptions.grades" :key="grade" :value="grade" />
            </datalist>
          </div>

          <div class="form-group">
            <label class="required">Unit</label>
            <input 
              v-model="metadata.unit" 
              type="text" 
              class="form-input"
              placeholder="e.g., Unit 1, Ancient China"
              list="unit-suggestions"
            />
            <datalist id="unit-suggestions">
              <option v-for="unit in autocompleteOptions.units" :key="unit" :value="unit" />
            </datalist>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Reading Level (optional)</label>
            <input 
              v-model="metadata.readingLevel" 
              type="text" 
              class="form-input"
              placeholder="e.g., 6.5, 850L"
            />
            <small class="form-hint">AI can estimate this for passages</small>
          </div>
        </div>

        <!-- Library counts -->
        <div v-if="libraryCounts" class="library-stats">
          <p class="stats-text">
            📚 Current library for 
            <strong>{{ metadata.subject || 'this subject' }}</strong>
            <template v-if="metadata.grade"> - Grade <strong>{{ metadata.grade }}</strong></template>:
            {{ libraryCounts.vocab }} vocab, 
            {{ libraryCounts.affixes }} affixes, 
            {{ libraryCounts.passages }} passages
          </p>
        </div>

        <div class="step-actions">
          <button @click="goToStep(2)" class="btn btn-primary" :disabled="!isMetadataValid">
            Next: Paste Content →
          </button>
        </div>
      </div>
    </div>

    <!-- Step 2: Paste & Configure -->
    <div v-if="step === 2" class="step-content">
      <div class="paste-section">
        <label>{{ importType === 'passage' ? 'Paste Passage Text' : 'Paste Your List' }}</label>
        <textarea
          v-model="rawText"
          class="paste-textarea"
          :placeholder="getPlaceholder()"
          rows="15"
        ></textarea>

        <div v-if="importType !== 'passage'" class="detection-settings">
          <h4>Detection Settings</h4>
          
          <div class="setting-group">
            <label>Term-Definition Separator:</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" v-model="separatorType" value=" - " />
                <span>Dash with spaces ( - )</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="separatorType" value=" : " />
                <span>Colon with spaces ( : )</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="separatorType" value="custom" />
                <span>Custom: 
                  <input 
                    v-if="separatorType === 'custom'"
                    v-model="customSeparator" 
                    type="text" 
                    class="custom-input"
                    placeholder="Enter separator"
                  />
                </span>
              </label>
            </div>
          </div>

          <div class="setting-group">
            <label>Term Separator:</label>
            <div class="radio-group">
              <label class="radio-label">
                <input type="radio" v-model="termSeparator" value="newline" />
                <span>New line</span>
              </label>
              <label class="radio-label">
                <input type="radio" v-model="termSeparator" value=";" />
                <span>Semicolon (;)</span>
              </label>
            </div>
          </div>
        </div>

        <div class="step-actions">
          <button @click="goToStep(1)" class="btn btn-secondary">
            ← Back
          </button>
          <button 
            @click="parseAndPreview" 
            class="btn btn-primary"
            :disabled="!rawText.trim()"
          >
            Preview Parsed Items →
          </button>
        </div>
      </div>
    </div>

    <!-- Step 3: Preview & Edit -->
    <div v-if="step === 3" class="step-content">
      <div class="preview-section">
        <div class="preview-header">
          <h3>Preview: {{ parsedItems.length }} items detected</h3>
          <div class="preview-actions">
            <button @click="addRow" class="btn btn-sm btn-secondary">+ Add Row</button>
            <button 
              v-if="importType === 'vocab'"
              @click="generateAIQuestions" 
              class="btn btn-sm btn-ai"
              :disabled="isGeneratingAI"
            >
              {{ isGeneratingAI ? '⏳ Generating...' : '✨ Generate AI Inquiry Questions' }}
            </button>
          </div>
        </div>

        <!-- Vocab table -->
        <div v-if="importType === 'vocab'" class="preview-table vocab-table">
          <table>
            <thead>
              <tr>
                <th style="width: 5%">#</th>
                <th style="width: 20%">Word</th>
                <th style="width: 35%">Definition</th>
                <th style="width: 35%">Example Sentence</th>
                <th style="width: 5%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in parsedItems" :key="index" :class="{ 'has-error': !isItemValid(item) }">
                <td>{{ index + 1 }}</td>
                <td>
                  <input 
                    v-model="item.term" 
                    type="text" 
                    class="table-input"
                    placeholder="Word..."
                  />
                </td>
                <td>
                  <textarea 
                    v-model="item.definition" 
                    class="table-textarea"
                    placeholder="Definition..."
                    rows="2"
                  ></textarea>
                </td>
                <td>
                  <textarea 
                    v-model="item.exampleSentence" 
                    class="table-textarea"
                    placeholder="Example sentence (optional)..."
                    rows="2"
                  ></textarea>
                </td>
                <td>
                  <button @click="deleteRow(index)" class="btn-delete" title="Delete">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Affix table -->
        <div v-if="importType === 'affix'" class="preview-table affix-table">
          <table>
            <thead>
              <tr>
                <th style="width: 5%">#</th>
                <th style="width: 15%">Affix</th>
                <th style="width: 15%">Type</th>
                <th style="width: 35%">Meaning</th>
                <th style="width: 25%">Examples</th>
                <th style="width: 5%"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in parsedItems" :key="index" :class="{ 'has-error': !isItemValid(item) }">
                <td>{{ index + 1 }}</td>
                <td>
                  <input 
                    v-model="item.term" 
                    type="text" 
                    class="table-input"
                    placeholder="un-, -tion, etc."
                  />
                </td>
                <td>
                  <select v-model="item.kind" class="table-select">
                    <option value="prefix">Prefix</option>
                    <option value="suffix">Suffix</option>
                    <option value="root">Root</option>
                  </select>
                </td>
                <td>
                  <textarea 
                    v-model="item.definition" 
                    class="table-textarea"
                    placeholder="Meaning..."
                    rows="2"
                  ></textarea>
                </td>
                <td>
                  <input 
                    v-model="item.examples" 
                    type="text" 
                    class="table-input"
                    placeholder="word1, word2, word3"
                  />
                </td>
                <td>
                  <button @click="deleteRow(index)" class="btn-delete" title="Delete">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Passage preview -->
        <div v-if="importType === 'passage'" class="passage-preview">
          <div class="form-group">
            <label>Title</label>
            <input 
              v-model="passageData.title" 
              type="text" 
              class="form-input"
              placeholder="Passage title..."
            />
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Type</label>
              <select v-model="passageData.type" class="form-select">
                <option value="weekly">Weekly Passage</option>
                <option value="friday">Friday Cold Read</option>
              </select>
            </div>

            <div class="form-group">
              <label>Subject Tag (optional)</label>
              <input 
                v-model="passageData.subjectTag" 
                type="text" 
                class="form-input"
                placeholder="e.g., historical-fiction"
              />
            </div>
          </div>

          <div class="form-group">
            <label>Passage Text</label>
            <textarea 
              v-model="passageData.text" 
              class="form-textarea"
              rows="15"
            ></textarea>
            <small class="form-hint">Word count: {{ wordCount }}</small>
          </div>

          <div v-if="!metadata.readingLevel" class="ai-section">
            <button 
              @click="estimateReadingLevel" 
              class="btn btn-ai"
              :disabled="isEstimatingLevel"
            >
              {{ isEstimatingLevel ? '⏳ Analyzing...' : '✨ AI: Estimate Reading Level' }}
            </button>
            <div v-if="estimatedLevel" class="level-result">
              <p><strong>Estimated Level:</strong> Grade {{ estimatedLevel.grade }} ({{ estimatedLevel.lexile }})</p>
              <p class="level-reasoning">{{ estimatedLevel.reasoning }}</p>
            </div>
          </div>
        </div>

        <div class="step-actions">
          <button @click="goToStep(2)" class="btn btn-secondary">
            ← Back
          </button>
          <button 
            @click="saveToLibrary" 
            class="btn btn-primary"
            :disabled="!canSave || isSaving"
          >
            {{ isSaving ? '⏳ Saving...' : 'Save to Library' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Step 4: Confirmation -->
    <div v-if="step === 4" class="step-content">
      <div class="confirmation">
        <div class="success-icon">✅</div>
        <h3>Success!</h3>
        <p class="success-message">
          {{ successMessage }}
        </p>
        <div class="confirmation-details">
          <p><strong>Subject:</strong> {{ metadata.subject }}</p>
          <p><strong>Grade:</strong> {{ metadata.grade }}</p>
          <p><strong>Unit:</strong> {{ metadata.unit }}</p>
        </div>
        <div class="step-actions">
          <button @click="reset" class="btn btn-secondary">
            Import Another List
          </button>
          <button @click="$emit('close')" class="btn btn-primary">
            Done
          </button>
        </div>
      </div>
    </div>

    <!-- Loading overlay -->
    <div v-if="isGeneratingAI || isSaving" class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import libraryServices from '@/services/libraryServices'
import aiService from '@/services/aiService'
import type { SubjectFocus, AffixKind } from '@/types/firestore'
import type { ReadingLevelEstimate } from '@/services/aiService'

interface Props {
  title?: string
  initialType?: 'vocab' | 'affix' | 'passage'
}

const props = withDefaults(defineProps<Props>(), {
  initialType: 'vocab'
})

const emit = defineEmits<{
  close: []
  success: []
}>()

const { user } = useAuth()

// State
const step = ref(1)
const importType = ref<'vocab' | 'affix' | 'passage'>(props.initialType)
const metadata = ref({
  subject: 'ELA' as SubjectFocus,
  grade: '',
  unit: '',
  readingLevel: ''
})

const autocompleteOptions = ref({
  units: [] as string[],
  grades: [] as string[],
  subjects: [] as string[]
})

const libraryCounts = ref<{ vocab: number; affixes: number; passages: number } | null>(null)

const rawText = ref('')
const separatorType = ref(' - ')
const customSeparator = ref('')
const termSeparator = ref<'newline' | ';'>('newline')

interface ParsedItem {
  term: string
  definition: string
  exampleSentence?: string
  kind?: AffixKind
  examples?: string
  lineNumber?: number
}

const parsedItems = ref<ParsedItem[]>([])

const passageData = ref({
  title: '',
  text: '',
  type: 'weekly' as 'weekly' | 'friday',
  subjectTag: ''
})

const isGeneratingAI = ref(false)
const isSaving = ref(false)
const isEstimatingLevel = ref(false)
const estimatedLevel = ref<ReadingLevelEstimate | null>(null)
const successMessage = ref('')

// Computed
const isMetadataValid = computed(() => {
  // For affixes, subject is optional
  if (importType.value === 'affix') {
    return metadata.value.grade && metadata.value.unit
  }
  return metadata.value.subject && metadata.value.grade && metadata.value.unit
})

const currentSeparator = computed(() => {
  return separatorType.value === 'custom' ? customSeparator.value : separatorType.value
})

const wordCount = computed(() => {
  return passageData.value.text.split(/\s+/).filter(w => w.length > 0).length
})

const canSave = computed(() => {
  if (importType.value === 'passage') {
    return passageData.value.title && passageData.value.text
  }
  return parsedItems.value.length > 0 && parsedItems.value.every(item => isItemValid(item))
})

// Methods
function getPlaceholder(): string {
  if (importType.value === 'vocab') {
    return 'Dynasty - A series of rulers from the same family\nBureaucracy - A system of government officials\nKhan - A Mongol ruler'
  } else if (importType.value === 'affix') {
    return 'un- - prefix - not, opposite of - unhappy, undo\ncom- - prefix - together, with - combine, community\n-tion - suffix - the act of or process of - education, action'
  } else {
    return 'Paste your passage text here...'
  }
}

function parseImportedList() {
  const items: ParsedItem[] = []
  
  if (!rawText.value.trim()) return items

  const lines = termSeparator.value === 'newline'
    ? rawText.value.split(/\r?\n/).filter(line => line.trim())
    : rawText.value.split(';').filter(chunk => chunk.trim())

  // Normalize separator - handle em dash, en dash, and regular dash
  let separator = currentSeparator.value
  if (separatorType.value === ' - ') {
    // Try to detect which dash type is actually used in the text
    const sampleLine = lines[0] || ''
    if (sampleLine.includes('–')) {
      separator = ' – ' // em dash with spaces
    } else if (sampleLine.includes('—')) {
      separator = ' — ' // em dash (longer) with spaces
    } else if (sampleLine.includes(' - ')) {
      separator = ' - ' // regular dash with spaces
    } else if (sampleLine.includes('-')) {
      // Try without spaces
      separator = '-'
    }
  }

  lines.forEach((line, index) => {
    // Remove leading numbers like "1. " or "1) "
    const cleaned = line.replace(/^\s*\d+[\.)]\s*/, '').trim()
    
    if (!cleaned) return // Skip empty lines
    
    if (importType.value === 'affix') {
      // For affixes: affix - type - meaning - examples
      // Try multiple separators
      let parts: string[] = []
      const separatorsToTry = [separator, ' – ', ' — ', ' - ', '-', ':', ' : ']
      
      for (const sep of separatorsToTry) {
        if (cleaned.includes(sep)) {
          parts = cleaned.split(sep)
          break
        }
      }
      
      // If no separator found, try splitting on first dash or colon
      if (parts.length < 2) {
        const dashMatch = cleaned.match(/^(.+?)\s*[–—\-:]\s*(.+)$/)
        if (dashMatch) {
          parts = [dashMatch[1], dashMatch[2]]
        }
      }
      
      // Parse affix format: affix - type - meaning - examples
      if (parts.length >= 2) {
        const affixPart = parts[0].trim()
        const rest = parts.slice(1).join(separator).trim()
        
        // Try to extract type (prefix, suffix, root) from second part
        const typeMatch = rest.match(/^(prefix|suffix|root)\s*[–—\-:]\s*(.+)$/i)
        let kind: AffixKind = 'prefix'
        let meaning = ''
        let examplesStr = ''
        
        if (typeMatch) {
          kind = (typeMatch[1].toLowerCase() as AffixKind) || 'prefix'
          const meaningAndExamples = typeMatch[2].trim()
          // Split meaning and examples (examples usually come after last dash/colon)
          const meaningParts = meaningAndExamples.split(/[–—\-:]/)
          meaning = meaningParts[0]?.trim() || meaningAndExamples
          examplesStr = meaningParts.slice(1).join(',').trim()
        } else {
          // No type specified, assume it's all meaning, or meaning - examples
          const meaningParts = rest.split(/[–—\-:]/)
          meaning = meaningParts[0]?.trim() || rest
          examplesStr = meaningParts.slice(1).join(',').trim()
        }
        
        if (affixPart && meaning) {
          items.push({
            term: affixPart,
            kind: kind,
            definition: meaning,
            examples: examplesStr || '',
            lineNumber: index + 1
          })
        }
      } else {
        // If parsing failed, add as invalid item so user can fix it
        items.push({
          term: cleaned,
          definition: '',
          examples: '',
          kind: 'prefix',
          lineNumber: index + 1
        })
      }
    } else {
      // For vocab: word - definition
      // Try multiple separators (em dash, en dash, regular dash, colon)
      let parts: string[] = []
      const separatorsToTry = [separator, ' – ', ' — ', ' - ', '-', ':', ' : ']
      
      for (const sep of separatorsToTry) {
        if (cleaned.includes(sep)) {
          parts = cleaned.split(sep)
          break
        }
      }
      
      // If no separator found, try splitting on first dash or colon
      if (parts.length < 2) {
        const dashMatch = cleaned.match(/^(.+?)\s*[–—\-:]\s*(.+)$/)
        if (dashMatch) {
          parts = [dashMatch[1], dashMatch[2]]
        }
      }
      
      if (parts.length >= 2) {
        items.push({
          term: parts[0].trim(),
          definition: parts.slice(1).join(separator).trim(),
          exampleSentence: '',
          lineNumber: index + 1
        })
      } else {
        // If parsing failed, add as invalid item so user can fix it
        items.push({
          term: cleaned,
          definition: '',
          exampleSentence: '',
          lineNumber: index + 1
        })
      }
    }
  })

  return items
}

function parseAndPreview() {
  if (importType.value === 'passage') {
    passageData.value.text = rawText.value
    goToStep(3)
  } else {
    parsedItems.value = parseImportedList()
    goToStep(3)
  }
}

function isItemValid(item: ParsedItem): boolean {
  return !!(item.term && item.definition)
}

function addRow() {
  parsedItems.value.push({
    term: '',
    definition: '',
    exampleSentence: '',
    kind: 'prefix'
  })
}

function deleteRow(index: number) {
  parsedItems.value.splice(index, 1)
}

async function generateAIQuestions() {
  if (!parsedItems.value.length) return
  
  isGeneratingAI.value = true
  try {
    const vocabList = parsedItems.value.map(item => ({
      word: item.term,
      definition: item.definition,
      exampleSentence: item.exampleSentence || `This sentence uses the word ${item.term}.`
    }))

    const results = await aiService.generateInquiryQuestionsForVocabList(vocabList)
    
    // Update parsed items with AI-generated data
    results.forEach((result, index) => {
      if (parsedItems.value[index]) {
        parsedItems.value[index].exampleSentence = result.exampleSentence
        // Store inquiry data (we'll add this to the library item)
        ;(parsedItems.value[index] as any).inquiryPrompts = result.inquiryPrompts
        ;(parsedItems.value[index] as any).truthBites = result.truthBites
        ;(parsedItems.value[index] as any).inferenceQuestion = result.inferenceQuestion
      }
    })

    alert('✅ AI inquiry questions generated successfully!')
  } catch (error) {
    console.error('Error generating AI questions:', error)
    alert('❌ Error generating AI questions. Please check your API key.')
  } finally {
    isGeneratingAI.value = false
  }
}

async function estimateReadingLevel() {
  if (!passageData.value.text) return
  
  isEstimatingLevel.value = true
  try {
    const result = await aiService.estimateReadingLevel(passageData.value.text)
    estimatedLevel.value = result
    metadata.value.readingLevel = `${result.grade} (${result.lexile})`
  } catch (error) {
    console.error('Error estimating reading level:', error)
    // Fallback to simple calculation
    const grade = aiService.calculateFleschKincaidGrade(passageData.value.text)
    metadata.value.readingLevel = `~${grade}`
  } finally {
    isEstimatingLevel.value = false
  }
}

async function saveToLibrary() {
  if (!user.value) return
  
  isSaving.value = true
  try {
    const teacherUid = user.value.uid
    const baseData: any = {
      teacherUid,
      grade: metadata.value.grade || undefined,
      unit: metadata.value.unit || undefined
    }
    
    // Only include subject for vocab and passages (not affixes)
    if (importType.value !== 'affix' && metadata.value.subject) {
      baseData.subject = metadata.value.subject
    }
    
    // Only include readingLevel if it has a value (Firestore doesn't allow undefined)
    if (metadata.value.readingLevel) {
      baseData.readingLevel = parseFloat(metadata.value.readingLevel)
    }

    if (importType.value === 'vocab') {
      const vocabItems = parsedItems.value.map(item => {
        const vocabData: any = {
          ...baseData,
          word: item.term,
          definition: item.definition,
          exampleSentence: item.exampleSentence || '',
          tags: []
        }
        
        // Only include optional fields if they have values
        if ((item as any).inquiryPrompts) vocabData.inquiryPrompts = (item as any).inquiryPrompts
        if ((item as any).truthBites) vocabData.truthBites = (item as any).truthBites
        if ((item as any).inferenceQuestion) vocabData.inferenceQuestion = (item as any).inferenceQuestion
        
        return vocabData
      })

      const result = await libraryServices.batchCreateVocabLibrary(vocabItems)
      successMessage.value = `Successfully saved ${result.successCount} vocabulary terms!`
      
      if (result.errors.length > 0) {
        console.error('Some items failed:', result.errors)
      }
    } else if (importType.value === 'affix') {
      const affixItems = parsedItems.value.map(item => ({
        ...baseData,
        affix: item.term,
        kind: item.kind || 'prefix' as AffixKind,
        meaning: item.definition,
        examples: item.examples ? item.examples.split(',').map(e => e.trim()).filter(e => e) : []
      }))

      const result = await libraryServices.batchCreateAffixLibrary(affixItems)
      successMessage.value = `Successfully saved ${result.successCount} affixes!`
      
      if (result.errors.length > 0) {
        console.error('Some items failed:', result.errors)
      }
    } else {
      // Passage
      const passageDataToSave: any = {
        ...baseData,
        title: passageData.value.title,
        text: passageData.value.text,
        wordCount: wordCount.value
      }
      
      // Only include optional fields if they have values
      if (passageData.value.subjectTag) {
        passageDataToSave.subjectTag = passageData.value.subjectTag
      }
      
      await libraryServices.createPassageLibrary(passageDataToSave)

      successMessage.value = `Successfully saved passage "${passageData.value.title}"!`
    }

    goToStep(4)
    emit('success')
  } catch (error) {
    console.error('Error saving to library:', error)
    alert('❌ Error saving to library. Please try again.')
  } finally {
    isSaving.value = false
  }
}

function goToStep(newStep: number) {
  step.value = newStep
}

function reset() {
  step.value = 1
  rawText.value = ''
  parsedItems.value = []
  passageData.value = {
    title: '',
    text: '',
    type: 'weekly',
    subjectTag: ''
  }
  estimatedLevel.value = null
}

// Watch metadata changes to update library counts
watch([() => metadata.value.grade, () => metadata.value.unit, () => metadata.value.subject], async () => {
  if (!user.value) return
  if (!metadata.value.grade) return

  try {
    libraryCounts.value = await libraryServices.getLibraryCounts(
      user.value.uid,
      metadata.value.grade,
      metadata.value.unit || undefined,
      metadata.value.subject
    )
  } catch (error) {
    console.error('Error fetching library counts:', error)
  }
}, { immediate: true })

// Load autocomplete options on mount
onMounted(async () => {
  if (!user.value) return
  
  try {
    autocompleteOptions.value = await libraryServices.getAutocompleteOptions(user.value.uid)
  } catch (error) {
    console.error('Error loading autocomplete options:', error)
  }
})
</script>

<style scoped>
.library-import {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
}

.import-header {
  margin-bottom: 2rem;
  text-align: center;
}

.import-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #718096;
  font-size: 1rem;
}

.step-content {
  min-height: 400px;
}

/* Form styles */
.metadata-form {
  max-width: 800px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.form-group label.required::after {
  content: ' *';
  color: #e53e3e;
}

.form-input,
.form-select,
.form-textarea {
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  transition: all 0.2s;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.form-hint {
  color: #718096;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

.library-stats {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1.5rem 0;
  border-left: 4px solid #667eea;
}

.stats-text {
  color: #4a5568;
  font-size: 0.95rem;
  margin: 0;
}

/* Paste section */
.paste-textarea {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: 'Courier New', monospace;
  resize: vertical;
  margin-bottom: 1.5rem;
}

.paste-textarea:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.detection-settings {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.detection-settings h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.setting-group {
  margin-bottom: 1rem;
}

.setting-group:last-child {
  margin-bottom: 0;
}

.setting-group > label {
  display: block;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.radio-label:hover {
  background: white;
}

.radio-label input[type="radio"] {
  cursor: pointer;
}

.custom-input {
  padding: 0.25rem 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 0.9rem;
  margin-left: 0.5rem;
}

/* Preview table */
.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.preview-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
}

.preview-actions {
  display: flex;
  gap: 0.5rem;
}

.preview-table {
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
}

thead {
  background: #f7fafc;
}

th {
  padding: 0.75rem;
  text-align: left;
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
  border-bottom: 2px solid #e2e8f0;
}

td {
  padding: 0.75rem;
  border-bottom: 1px solid #e2e8f0;
  vertical-align: top;
}

tr:last-child td {
  border-bottom: none;
}

tr.has-error {
  background: #fff5f5;
}

.table-input,
.table-select,
.table-textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #cbd5e0;
  border-radius: 4px;
  font-size: 0.9rem;
  font-family: inherit;
}

.table-textarea {
  resize: vertical;
  font-family: inherit;
}

.btn-delete {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.25rem;
  opacity: 0.6;
  transition: opacity 0.2s;
}

.btn-delete:hover {
  opacity: 1;
}

/* Passage preview */
.passage-preview {
  max-width: 800px;
  margin: 0 auto;
}

/* AI section */
.ai-section {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 8px;
  border: 2px dashed #cbd5e0;
}

.level-result {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #667eea;
}

.level-result p {
  margin: 0.5rem 0;
}

.level-reasoning {
  color: #718096;
  font-size: 0.9rem;
}

/* Confirmation */
.confirmation {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.confirmation h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.success-message {
  color: #48bb78;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
}

.confirmation-details {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: left;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}

.confirmation-details p {
  margin: 0.5rem 0;
  color: #2d3748;
}

/* Buttons */
.step-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn:disabled {
  opacity: 0.5;
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

.btn-secondary {
  background: white;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.btn-secondary:hover:not(:disabled) {
  border-color: #cbd5e0;
  background: #f7fafc;
}

.btn-ai {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-ai:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(240, 147, 251, 0.4);
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}

/* Loading overlay */
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  z-index: 1000;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 4px solid #e2e8f0;
  border-top-color: #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>

