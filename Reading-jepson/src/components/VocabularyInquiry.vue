<template>
  <div class="vocabulary-inquiry">
    <div class="vocab-header">
      <h2>{{ vocab.word }}</h2>
      <p class="definition" v-if="showDefinition">{{ vocab.definition }}</p>
    </div>
    
    <div class="context-sentence">
      <p class="label">Context Sentence:</p>
      <p class="sentence">{{ vocab.exampleSentence }}</p>
    </div>
    
    <div v-if="vocab.teacherPrompts" class="inquiry-section">
      <h3>Teacher Guiding Questions</h3>
      <p class="instruction">{{ vocab.teacherPrompts }}</p>
      
      <div v-if="vocab.sentenceFrame" class="sentence-frame">
        <p><strong>Sentence Frame:</strong></p>
        <p class="frame-text">{{ vocab.sentenceFrame }}</p>
      </div>
      
      <div v-if="vocab.pictureGuidance" class="picture-section">
        <p><strong>Picture Guidance:</strong></p>
        <p class="guidance-text">{{ vocab.pictureGuidance }}</p>
      </div>
    </div>
    
    <div v-else class="simple-vocab">
      <p class="definition-label">Definition:</p>
      <p class="definition-text">{{ vocab.definition }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { VocabDocument } from '@/types/firestore'

interface Props {
  vocab: VocabDocument
  showDefinition?: boolean
}

withDefaults(defineProps<Props>(), {
  showDefinition: false
})
</script>

<style scoped>
.vocabulary-inquiry {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
}

.vocab-header {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.vocab-header h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  margin: 0 0 0.5rem 0;
}

.definition {
  color: #4a5568;
  font-size: 1rem;
  margin: 0;
  font-style: italic;
}

.context-sentence {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 3px solid #667eea;
}

.context-sentence .label {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
}

.context-sentence .sentence {
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.inquiry-section {
  margin-top: 1.5rem;
}

.inquiry-section h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.instruction {
  color: #718096;
  font-size: 0.9rem;
  margin: 0 0 1.5rem 0;
}

.prompts-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prompt-item {
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.2s;
}

.prompt-item.revealed {
  border-color: #667eea;
  background: white;
}

.prompt-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.prompt-number {
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
}

.btn-reveal {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reveal:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.prompt-content {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.prompt-text {
  color: #2d3748;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 0.75rem 0;
}

.hint {
  background: #edf2f7;
  padding: 0.75rem;
  border-radius: 6px;
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
  border-left: 3px solid #667eea;
}

.hint strong {
  color: #2d3748;
}

.inference-section {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 2px solid #e2e8f0;
}

.inference-section h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 0.75rem 0;
}

.inference-question {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 0 1rem 0;
  line-height: 1.6;
}

.inference-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 1rem;
  transition: all 0.2s;
}

.inference-input:focus {
  outline: none;
  border-color: #667eea;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.simple-vocab {
  margin-top: 1rem;
}

.definition-label {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 0.5rem 0;
}

.definition-text {
  color: #4a5568;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
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
</style>











