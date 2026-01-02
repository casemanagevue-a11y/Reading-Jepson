<template>
  <div class="semantic-map-sheet">
    <div class="sheet-grid">
      <!-- Top Left: It is / It is NOT -->
      <section class="quad quad-tl split-quad">
        <div class="sub-box">
          <div class="sub-label">It is:</div>
          <ul class="field-content bullet-list">
            <li v-for="(sentence, index) in whatItIsSentences" :key="'is-' + index">
              {{ sentence }}
            </li>
          </ul>
        </div>
        <div class="sub-box not-box">
          <div class="sub-label">It is NOT:</div>
          <ul class="field-content bullet-list">
            <li v-for="(sentence, index) in whatItIsNotSentences" :key="'not-' + index">
              {{ sentence }}
            </li>
          </ul>
        </div>
      </section>

      <!-- Top Right: Definition -->
      <section class="quad quad-tr">
        <div class="sub-box">
          <h2 class="quad-label">Definition:</h2>
          <div class="definition-wrapper">
            <div class="definition-part1">
              <p class="definition-text">{{ firstPart }}</p>
            </div>
            <div class="definition-part2" :style="{ top: part2Top }">
              <p class="definition-text">{{ secondPart }}</p>
            </div>
          </div>
        </div>
        
        <!-- Parts of Speech Section -->
        <div class="sub-box parts-of-speech-box">
          <div class="sub-label">Part of Speech:</div>
          <div class="field-content">
            <span v-if="partOfSpeechQuestion">{{ partOfSpeechQuestion }} </span>
            <span v-if="vocabWord.partOfSpeech" class="pos-answer">({{ vocabWord.partOfSpeech }})</span>
          </div>
        </div>
      </section>

      <!-- Bottom Left: Use in a sentence -->
      <section class="quad">
        <h2 class="quad-label">Use in a sentence:</h2>
        <div class="blank-lines"></div>
      </section>

      <!-- Bottom Right: Draw a picture -->
      <section class="quad">
        <h2 class="quad-label right">Draw a picture:</h2>
        <div class="drawing-area"></div>
      </section>
    </div>

    <!-- Center Circle with Word -->
    <div class="center-circle">
      
      <div class="word-display">
        {{ formattedWord }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface VocabWord {
  word: string
  definition: string
  whatItIs?: string
  whatItIsNot?: string
  exampleSentence?: string
  partOfSpeech?: string
}

const props = defineProps<{
  vocabWord: VocabWord
}>()

// Split definition text to wrap around center circle
// Assuming about 10 lines can fit in top section before circle
const splitDefinition = computed(() => {
  const text = props.vocabWord.definition || ''
  const words = text.split(' ')
  
  // Rough estimation: ~50-60 characters per line, 10 lines = ~500-600 chars
  const estimatedCharsBeforeCircle = 500
  
  let charCount = 0
  let splitIndex = 0
  
  for (let i = 0; i < words.length; i++) {
    charCount += words[i].length + 1 // +1 for space
    if (charCount > estimatedCharsBeforeCircle) {
      splitIndex = i
      break
    }
  }
  
  if (splitIndex === 0) splitIndex = words.length
  
  return {
    first: words.slice(0, splitIndex).join(' '),
    second: words.slice(splitIndex).join(' ')
  }
})

const firstPart = computed(() => splitDefinition.value.first)
const secondPart = computed(() => splitDefinition.value.second)

// Calculate approximate top position for second part
const part2Top = computed(() => {
  const lineHeight = 32 // px
  const estimatedLines = Math.min(10, Math.ceil(firstPart.value.length / 55))
  return `${estimatedLines * lineHeight}px`
})

// Format word: lowercase unless proper noun (detect by checking if starts with capital)
const formattedWord = computed(() => {
  const word = props.vocabWord.word || ''
  // Check if it's a proper noun by seeing if it starts with capital
  const isProperNoun = word.length > 0 && word[0] === word[0].toUpperCase()
  
  if (isProperNoun) {
    // Capitalize only first letter, rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  } else {
    // All lowercase
    return word.toLowerCase()
  }
})

// Determine the question based on part of speech
const partOfSpeechQuestion = computed(() => {
  const pos = props.vocabWord.partOfSpeech?.toLowerCase()
  
  if (!pos) return ''
  
  if (pos.includes('noun')) {
    return 'Who or what?'
  } else if (pos.includes('verb')) {
    return 'Is / was doing?'
  } else if (pos.includes('adjective')) {
    return 'Which one? What kind? How many?'
  } else if (pos.includes('adverb') || pos.includes('preposition')) {
    return 'Where? When? How? Why?'
  }
  
  return ''
})

// Split "It is" text into sentences (split by period, exclamation, or question mark)
const whatItIsSentences = computed(() => {
  const text = props.vocabWord.whatItIs || ''
  if (!text) return []
  
  // Split by sentence-ending punctuation, filter empty strings
  return text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
})

// Split "It is NOT" text into sentences
const whatItIsNotSentences = computed(() => {
  const text = props.vocabWord.whatItIsNot || ''
  if (!text) return []
  
  // Split by sentence-ending punctuation, filter empty strings
  return text
    .split(/[.!?]+/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
})
</script>
<style>
@media print {
  nav, .navbar {
    display: none !important;
  }
}
</style>
<style scoped>
   /* ===============================
   Semantic Map Sheet Variables
================================ */
.semantic-map-sheet {
  --ink: #000;
  --paper: #fff;
  --stroke: 4px;
  --radius: 60px;
  --line-color: #ccc;

  --color-is: #d6f0f0;
  --color-is-not: #fff0e6;
  --color-definition: #e6f4e1;
  --color-parts-speech: #fff8e0;

  width: 800px;
  height: 1040px;
  margin: 20px auto;

  background: var(--paper);
  border: var(--stroke) solid var(--ink);
  border-radius: var(--radius);
  box-sizing: border-box;

  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* ===============================
   Grid Layout
================================ */
.sheet-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

/* ===============================
   Quadrants
================================ */
.quad {
  padding: 30px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 1;
}

/* ── Vertical divider (center line) ── */
.quad:nth-child(1),
.quad:nth-child(3) {
  border-right: var(--stroke) solid var(--ink);
}

/* ── Horizontal divider (center line) ── */
.quad:nth-child(1),
.quad:nth-child(2) {
  border-bottom: var(--stroke) solid var(--ink);
}

/* Extra spacing top quads */
.quad-tl,
.quad-tr {
  padding-bottom: 40px;
}

/* ===============================
   Sub Boxes
================================ */
.sub-box {
  border: 2px solid #333;
  border-radius: 15px;
  padding: 10px 15px;
  height: 40%;
  display: flex;
  flex-direction: column;
}

.quad-tl .sub-box:first-child { background: var(--color-is); }
.quad-tl .sub-box:last-child  { background: var(--color-is-not); }
.quad-tr .sub-box:first-child { background: var(--color-definition); }

.parts-of-speech-box {
  margin-top: 10px;
  background: var(--color-parts-speech);
  font-size: 14px;
  height: auto;
}

/* ===============================
   Typography
================================ */
.sub-label {
  font-weight: 800;
  font-size: 20px;
  margin-bottom: 5px;
}

.quad-label {
  font-weight: 800;
  font-size: 24px;
  margin: 0 0 10px;
}

.right {
  margin-left: 120px;
}

.field-content {
  flex: 1;
  font-size: 16px;
  line-height: 1.4;
  overflow: hidden;
}

.pos-answer {
  font-weight: 600;
}

/* ===============================
   Bullet Lists
================================ */
.bullet-list {
  list-style: disc;
  padding-left: 20px;
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
}

/* ===============================
   Definition Lines
================================ */
.definition-wrapper {
  position: relative;
  height: 100%;
}

.definition-part1,
.definition-part2 {
  position: absolute;
  left: 0;
  width: 100%;
  line-height: 32px;
  font-size: 18px;

  background-image:
    linear-gradient(
      transparent,
      transparent 31px,
      var(--line-color) 31px
    );
  background-size: 100% 32px;
}

.definition-part1 { top: 0; }
.definition-part2 {
  padding-left: 140px;
  box-sizing: border-box;
}

.definition-text {
  margin: 0;
  white-space: pre-wrap;
}

/* ===============================
   Writing Areas
================================ */
.blank-lines {
  flex: 1;
  background-image:
    linear-gradient(
      transparent,
      transparent 31px,
      var(--line-color) 31px
    );
  background-size: 100% 32px;
  background-color: white;
}

.drawing-area {
  flex: 1;
  border: 2px solid #ccc;
  border-radius: 8px;
  background: white;
}

/* ===============================
   Center Circle
================================ */
.center-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 280px;
  height: 200px;
  background: var(--paper);

  border: var(--stroke) solid var(--ink);
  border-radius: 50%;

  z-index: 20;

  display: flex;
  align-items: center;
  justify-content: center;
}

.word-display {
  font-size: 35px;
  font-weight: 900;
  color: #667eea;
  text-align: center;
}

/* ===============================
   PRINT STYLES (Stable)
================================ */
@media print {
  @page {
    size: letter;
    margin: 0;
  }
 
  nav, .navbar {
    display: none !important;
  }

  /* Ensure parent containers don't add offset */
  .container,
  .print-materials,
  .printable-content,
  .semantic-maps-section,
  .semantic-maps-wrapper {
    margin: 0 !important;
    padding: 0 !important;
    max-width: none !important;
    width: 100% !important;
    display: block !important;
  }
 
  .semantic-map-sheet {
    width: 8.5in;
    height: 11in;
    margin: 0 auto !important;
    box-shadow: none;
    
    page-break-after: always;
    page-break-inside: avoid;
  }
 
  .center-circle {
    z-index: 50;
  }
 
  .quad-tl .sub-box:first-child,
  .quad-tl .sub-box:last-child,
  .quad-tr .sub-box:first-child,
  .parts-of-speech-box,
  .word-display {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
</style>