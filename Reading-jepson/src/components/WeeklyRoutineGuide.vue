<template>
  <div class="routine-guide">
    <div class="guide-header">
      <h2>Weekly Language & Reading Routine</h2>
      <p class="subtitle">5-day structured reading instruction plan</p>
    </div>
    
    <div class="routine-days">
      <div class="day-card" v-for="day in routineDays" :key="day.day">
        <div class="day-header">
          <span class="day-number">Day {{ day.day }}</span>
          <span class="day-title">{{ day.title }}</span>
        </div>
        <div class="day-content">
          <div class="activities">
            <div v-for="activity in day.activities" :key="activity" class="activity-item">
              <svg class="activity-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>{{ activity }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="supports-section">
      <h3>Daily Supports</h3>
      <div class="supports-grid">
        <div v-for="support in dailySupports" :key="support" class="support-item">
          {{ support }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const routineDays = ref([
  {
    day: 1,
    title: 'Vocabulary Script + Affixes',
    activities: [
      'Teach 3-6 weekly vocabulary words',
      'Student-friendly definitions',
      '4-corner worksheet completion',
      'Teach 2 high-frequency affixes',
      'Student adds to vocabulary binder'
    ]
  },
  {
    day: 2,
    title: 'Words Working Together',
    activities: [
      'Sentence structure analysis',
      'Sort word/phrase cards into 4-column table',
      'Who/What, Is/Was Doing, Which/What Kind, Where/Relationship',
      'Teacher-guided practice with fading support'
    ]
  },
  {
    day: 3,
    title: 'Teacher Read + Student Read + Inference',
    activities: [
      'Teacher reads passage aloud',
      'Student rereads aloud',
      'Inference organizer (literal/inference assessment)',
      'Deep vocabulary review'
    ]
  },
  {
    day: 4,
    title: 'Student Read + Cause/Effect',
    activities: [
      'Student rereads passage',
      'Cause/Effect organizer',
      'Main idea + details practice',
      'Quick vocabulary/affix review'
    ]
  },
  {
    day: 5,
    title: 'Reading Assessment + Vocab Spiral',
    activities: [
      'Reading assessment with new passage',
      'WPM, accuracy, miscues recorded',
      'Multiple choice spiral vocabulary assessment',
      'Cumulative vocabulary review'
    ]
  }
])

const dailySupports = ref([
  'Visuals and pictures for vocabulary',
  'Repeated exposure across the week',
  'Morphological instruction',
  'Binder as external language memory system'
])
</script>

<style scoped>
.routine-guide {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.guide-header {
  margin-bottom: 2rem;
  text-align: center;
}

.guide-header h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.subtitle {
  color: #718096;
  font-size: 1rem;
  margin: 0;
}

.routine-days {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.day-card {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.2s;
}

.day-card:hover {
  border-color: #667eea;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
  transform: translateY(-2px);
}

.day-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.day-number {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.day-title {
  font-weight: 600;
  color: #1a202c;
  font-size: 1.125rem;
}

.activities {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
}

.activity-icon {
  width: 20px;
  height: 20px;
  color: #667eea;
  flex-shrink: 0;
  margin-top: 2px;
}

.supports-section {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
}

.supports-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
}

.supports-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.support-item {
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 8px;
  color: #4a5568;
  font-size: 0.9rem;
  border-left: 3px solid #667eea;
}
</style>














