<template>
  <div class="library-management">
    <div class="page-header">
      <h1>📚 Content Library</h1>
      <p class="description">
        Manage your reusable vocabulary, affixes, and passages. Import once, use across multiple students and weeks.
      </p>
    </div>

    <!-- Action buttons -->
    <div class="action-bar">
      <button 
        v-if="!showImport && !showEditor"
        @click="openImport" 
        class="btn btn-primary"
      >
        + Import New Content
      </button>
      <button 
        v-if="showImport || showEditor"
        @click="closeAll" 
        class="btn btn-secondary"
      >
        ← Back to Library
      </button>
    </div>

    <!-- Import Component -->
    <div v-if="showImport" class="section-container">
      <LibraryImport 
        @close="closeImport"
        @success="handleImportSuccess"
      />
    </div>

    <!-- Editor Component -->
    <div v-else-if="showEditor" class="section-container">
      <LibraryEditor 
        :item="editingItem"
        :itemType="editingItem.type"
        @close="closeEditor"
        @saved="handleEditorSaved"
      />
    </div>

    <!-- Browser Component -->
    <div v-else class="section-container">
      <LibraryBrowser 
        @import="openImport"
        @edit="openEditor"
        :key="browserKey"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import LibraryImport from '@/components/library/LibraryImport.vue'
import LibraryBrowser from '@/components/library/LibraryBrowser.vue'
import LibraryEditor from '@/components/library/LibraryEditor.vue'

// State
const showImport = ref(false)
const showEditor = ref(false)
const editingItem = ref<any>(null)
const browserKey = ref(0) // Force re-render of browser after changes

// Methods
function openImport() {
  showImport.value = true
  showEditor.value = false
}

function closeImport() {
  showImport.value = false
}

function handleImportSuccess() {
  closeImport()
  // Refresh browser
  browserKey.value++
}

function openEditor(item: any) {
  editingItem.value = item
  showEditor.value = true
  showImport.value = false
}

function closeEditor() {
  showEditor.value = false
  editingItem.value = null
}

function handleEditorSaved() {
  closeEditor()
  // Refresh browser
  browserKey.value++
}

function closeAll() {
  showImport.value = false
  showEditor.value = false
  editingItem.value = null
}
</script>

<style scoped>
.library-management {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;
}

.description {
  color: #718096;
  font-size: 1.125rem;
  margin: 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.action-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.section-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Buttons */
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
  background: white;
  color: #4a5568;
  border: 2px solid #e2e8f0;
}

.btn-secondary:hover {
  border-color: #cbd5e0;
  background: #f7fafc;
}
</style>