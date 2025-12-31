<template>
  <div class="calendar-import">
    <div class="container">
      <div class="header">
        <h1>Import School Calendar</h1>
        <p class="subtitle">Paste your school calendar to auto-import dates</p>
      </div>

      <div class="import-form">
        <h2>Paste Calendar Text</h2>
        <p class="instructions">
          Copy and paste your school calendar text. The system will auto-detect:
          dates, event types, and quarter boundaries.
        </p>
        
        <div class="form-group">
          <label>Calendar Text</label>
          <textarea 
            v-model="calendarText" 
            class="form-input calendar-textarea" 
            rows="20"
            placeholder="Paste your school calendar here...&#10;&#10;Example:&#10;Aug.14th, 2025: First Day of School&#10;Sept. 1st: Labor Day (No School)&#10;Nov. 24th - 28th: Thanksgiving Break&#10;..."></textarea>
        </div>

        <div class="form-group">
          <label>School Year</label>
          <input 
            v-model="schoolYear" 
            type="text" 
            class="form-input" 
            placeholder="e.g., 2025-2026"
          />
        </div>

        <button @click="parseCalendar" :disabled="!calendarText || parsing" class="btn btn-primary">
          {{ parsing ? 'Parsing...' : 'Parse Calendar' }}
        </button>
      </div>

      <!-- Parsed Events Preview -->
      <div v-if="parsedEvents.length > 0" class="preview-section">
        <h2>Parsed Events ({{ parsedEvents.length }})</h2>
        <p class="preview-note">Review and edit before importing. Uncheck any events you don't want to import.</p>
        
        <div class="events-preview">
          <div v-for="(event, index) in parsedEvents" :key="index" class="event-preview-item">
            <div class="event-checkbox">
              <input type="checkbox" v-model="event.selected" :id="`event-${index}`" />
              <label :for="`event-${index}`"></label>
            </div>
            
            <div class="event-preview-content">
              <div class="event-row">
                <input v-model="event.title" class="form-input inline" placeholder="Event title" />
                <select v-model="event.eventType" class="form-input inline">
                  <option value="dayOff">Day Off</option>
                  <option value="holiday">Holiday</option>
                  <option value="quarterStart">Quarter Start</option>
                  <option value="quarterEnd">Quarter End</option>
                  <option value="breakStart">Break Start</option>
                  <option value="breakEnd">Break End</option>
                  <option value="minimumDay">Minimum Day</option>
                </select>
              </div>
              
              <div class="event-row">
                <input v-model="event.dateStr" type="date" class="form-input inline" />
                <input v-model="event.endDateStr" type="date" class="form-input inline" placeholder="End date (optional)" />
                <select v-model="event.quarter" class="form-input inline">
                  <option :value="undefined">No Quarter</option>
                  <option :value="1">Q1</option>
                  <option :value="2">Q2</option>
                  <option :value="3">Q3</option>
                  <option :value="4">Q4</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="import-actions">
          <button @click="importEvents" :disabled="importing || !hasSelectedEvents" class="btn btn-primary btn-lg">
            {{ importing ? 'Importing...' : `Import ${selectedCount} Events` }}
          </button>
          <button @click="parsedEvents = []" class="btn btn-secondary">Cancel</button>
        </div>
      </div>

      <div v-if="error" class="error-message">{{ error }}</div>
      <div v-if="success" class="success-message">{{ success }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { createCalendarEvent } from '@/services/firestoreServices'
import { Timestamp } from 'firebase/firestore'
import type { CalendarEventType } from '@/types/firestore'

const router = useRouter()
const { user } = useAuth()

const calendarText = ref('')
const schoolYear = ref('2025-2026')
const parsing = ref(false)
const importing = ref(false)
const error = ref<string | null>(null)
const success = ref<string | null>(null)

interface ParsedEvent {
  selected: boolean
  title: string
  dateStr: string
  endDateStr: string
  eventType: CalendarEventType | 'minimumDay'
  quarter?: 1 | 2 | 3 | 4
}

const parsedEvents = ref<ParsedEvent[]>([])

const selectedCount = computed(() => parsedEvents.value.filter(e => e.selected).length)
const hasSelectedEvents = computed(() => selectedCount.value > 0)

const parseCalendar = () => {
  parsing.value = true
  error.value = null
  success.value = null
  
  try {
    const lines = calendarText.value.split('\n').filter(line => line.trim())
    const events: ParsedEvent[] = []
    
    // Regex patterns for date parsing
    const datePatterns = [
      /([A-Z][a-z]+\.?\s*\d{1,2}(?:st|nd|rd|th)?(?:\s*,?\s*\d{4})?)/gi, // Aug.14th, 2025 or Sept. 1st
      /(\d{1,2}\/\d{1,2}\/\d{2,4})/g, // 8/14/2025
    ]
    
    const rangePattern = /([A-Z][a-z]+\.?\s*\d{1,2}(?:st|nd|rd|th)?)(?:\s*,?\s*\d{4})?\s*-\s*([A-Z][a-z]+\.?\s*\d{1,2}(?:st|nd|rd|th)?)(?:\s*,?\s*\d{4})?/i
    
    for (const line of lines) {
      // Skip empty lines or headers
      if (!line.trim() || line.includes('Quarter Dates') || line.includes('Minimum Days')) continue
      
      // Check for date ranges (e.g., "Nov. 24th - 28th: Thanksgiving Break")
      const rangeMatch = line.match(rangePattern)
      if (rangeMatch) {
        const startDateStr = parseDate(rangeMatch[1])
        const endDateStr = parseDate(rangeMatch[2])
        
        if (startDateStr && endDateStr) {
          const title = line.split(':')[1]?.trim() || extractEventTitle(line)
          const eventType = detectEventType(line)
          
          events.push({
            selected: true,
            title,
            dateStr: startDateStr,
            endDateStr: endDateStr,
            eventType,
            quarter: detectQuarter(line)
          })
          continue
        }
      }
      
      // Check for single dates
      for (const pattern of datePatterns) {
        const matches = line.matchAll(pattern)
        for (const match of matches) {
          const dateStr = parseDate(match[1])
          if (!dateStr) continue
          
          const title = line.split(':')[1]?.trim() || extractEventTitle(line)
          const eventType = detectEventType(line)
          
          events.push({
            selected: true,
            title,
            dateStr,
            endDateStr: '',
            eventType,
            quarter: detectQuarter(line)
          })
          break // Only process first date per line
        }
      }
    }
    
    parsedEvents.value = events
    
    if (events.length === 0) {
      error.value = 'No dates found in the text. Please check your formatting.'
    }
  } catch (err: any) {
    console.error('Parse error:', err)
    error.value = 'Failed to parse calendar. Please check your formatting.'
  } finally {
    parsing.value = false
  }
}

const parseDate = (dateStr: string): string => {
  // Remove ordinal suffixes
  let cleaned = dateStr.replace(/(\d+)(st|nd|rd|th)/g, '$1')
  
  // Handle formats like "Aug.14, 2025" or "Sept. 1"
  const monthMap: Record<string, string> = {
    'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04',
    'may': '05', 'jun': '06', 'jul': '07', 'aug': '08',
    'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
  }
  
  // Extract month, day, year
  const parts = cleaned.toLowerCase().match(/([a-z]+)[.\s]*(\d+)(?:[,\s]*(\d{4}))?/)
  if (!parts) return ''
  
  const month = monthMap[parts[1].substring(0, 3)]
  const day = parts[2].padStart(2, '0')
  const year = parts[3] || new Date().getFullYear().toString()
  
  if (!month) return ''
  
  return `${year}-${month}-${day}`
}

const extractEventTitle = (line: string): string => {
  // Extract text after colon or use whole line
  const parts = line.split(':')
  if (parts.length > 1) {
    return parts[1].trim().replace(/\(.*?\)/g, '').trim()
  }
  return line.replace(/[A-Z][a-z]+\.?\s*\d{1,2}.*?:/g, '').trim()
}

const detectEventType = (line: string): CalendarEventType | 'minimumDay' => {
  const lower = line.toLowerCase()
  
  if (lower.includes('quarter') && lower.includes('start')) return 'quarterStart'
  if (lower.includes('quarter') && lower.includes('end')) return 'quarterEnd'
  if (lower.includes('break')) return lower.includes('start') ? 'breakStart' : lower.includes('end') ? 'breakEnd' : 'dayOff'
  if (lower.includes('holiday') || lower.includes('no school')) return 'holiday'
  if (lower.includes('minimum day')) return 'minimumDay'
  
  return 'dayOff'
}

const detectQuarter = (line: string): 1 | 2 | 3 | 4 | undefined => {
  if (line.includes('Quarter 1') || line.includes('Q1')) return 1
  if (line.includes('Quarter 2') || line.includes('Q2')) return 2
  if (line.includes('Quarter 3') || line.includes('Q3')) return 3
  if (line.includes('Quarter 4') || line.includes('Q4')) return 4
  return undefined
}

const importEvents = async () => {
  if (!user.value) return
  
  try {
    importing.value = true
    error.value = null
    success.value = null
    
    const selectedEvents = parsedEvents.value.filter(e => e.selected)
    let importedCount = 0
    
    for (const event of selectedEvents) {
      const eventData: any = {
        teacherUid: user.value.uid,
        eventType: event.eventType,
        title: event.title,
        date: Timestamp.fromDate(new Date(event.dateStr))
      }
      
      if (event.endDateStr) {
        eventData.endDate = Timestamp.fromDate(new Date(event.endDateStr))
      }
      
      if (event.quarter) {
        eventData.quarter = event.quarter
      }
      
      await createCalendarEvent(eventData)
      importedCount++
    }
    
    success.value = `Successfully imported ${importedCount} calendar events!`
    
    // Clear the form
    setTimeout(() => {
      router.push('/teacher/calendar')
    }, 2000)
  } catch (err: any) {
    console.error('Import error:', err)
    error.value = err.message || 'Failed to import events'
  } finally {
    importing.value = false
  }
}
</script>

<style scoped>
.calendar-import {
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

.import-form {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
}

.import-form h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.instructions {
  color: #718096;
  margin-bottom: 1.5rem;
  line-height: 1.6;
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
  font-family: inherit;
}

.calendar-textarea {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.6;
}

.form-input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.preview-section {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.preview-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.preview-note {
  color: #718096;
  margin-bottom: 1.5rem;
}

.events-preview {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.event-preview-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.event-checkbox {
  display: flex;
  align-items: center;
}

.event-checkbox input[type="checkbox"] {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

.event-preview-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.event-row {
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  gap: 0.5rem;
}

.form-input.inline {
  padding: 0.5rem;
  font-size: 0.9rem;
}

.import-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding-top: 1rem;
  border-top: 2px solid #e2e8f0;
}

.error-message,
.success-message {
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.error-message {
  background: #fed7d7;
  color: #c53030;
}

.success-message {
  background: #c6f6d5;
  color: #22543d;
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

.btn-secondary {
  background: #718096;
  color: white;
}

.btn-secondary:hover {
  background: #4a5568;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
</style>