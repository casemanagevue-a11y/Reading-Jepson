<template>
  <div class="week-templates">
    <div class="container">
      <div class="header">
        <h1>Week Templates</h1>
        <div class="header-actions">
          <div class="hardcoded-dropdown">
            <button @click="showHardcodedMenu = !showHardcodedMenu" class="btn btn-secondary">
              📚 Use Hardcoded Template
            </button>
            <div v-if="showHardcodedMenu" class="dropdown-menu">
              <div class="dropdown-header">Quarter 1</div>
              <button 
                v-for="template in hardcodedTemplates.filter((t: any) => t.quarter === 1)" 
                :key="template.id"
                @click="useHardcodedTemplate(template)"
                class="dropdown-item"
              >
                <div class="item-name">{{ template.name }}</div>
                <div class="item-desc">{{ template.description }}</div>
              </button>
              
              <div class="dropdown-header">Quarter 2</div>
              <div v-if="hardcodedTemplates.filter((t: any) => t.quarter === 2).length === 0" class="dropdown-empty">
                Coming soon...
              </div>
              
              <div class="dropdown-header">Quarter 3</div>
              <div v-if="hardcodedTemplates.filter((t: any) => t.quarter === 3).length === 0" class="dropdown-empty">
                Coming soon...
              </div>
              
              <div class="dropdown-header">Quarter 4</div>
              <div v-if="hardcodedTemplates.filter((t: any) => t.quarter === 4).length === 0" class="dropdown-empty">
                Coming soon...
              </div>
            </div>
          </div>
          <router-link to="/teacher/week-templates/create" class="btn btn-primary">
            + Create Custom Template
          </router-link>
        </div>
      </div>

      <div v-if="loading" class="loading">Loading templates...</div>
      <div v-else-if="error" class="error">{{ error }}</div>
      <div v-else-if="templates.length === 0" class="empty">
        <p>No week templates yet. Create your first reusable lesson plan!</p>
        <router-link to="/teacher/week-templates/create" class="btn btn-primary">Create Template</router-link>
      </div>
      <div v-else class="templates-grid">
        <div v-for="template in templates" :key="template.id" class="template-card">
          <div class="template-header">
            <h3>{{ template.templateName }}</h3>
            <span class="subject-badge">{{ template.subjectFocus }}</span>
          </div>
          <div class="template-meta">
            <span v-if="template.grade">Grade: {{ template.grade }}</span>
            <span v-if="template.unit">Unit: {{ template.unit }}</span>
            <span class="week-length">{{ template.weekLength }} days</span>
          </div>
          <p v-if="template.description" class="template-description">{{ template.description }}</p>
          <div class="template-actions">
            <router-link :to="`/teacher/week-assignments?templateId=${template.id}`" class="btn btn-primary btn-sm">
              Assign to Students
            </router-link>
            <router-link :to="`/teacher/week-templates/edit/${template.id}`" class="btn btn-secondary btn-sm">
              View/Edit
            </router-link>
            <button @click="handleDeleteTemplate(template.id, template.templateName)" class="btn btn-danger btn-sm">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { getWeekTemplatesByTeacher, deleteWeekTemplate } from '@/services/firestoreServices'
import { HARDCODED_TEMPLATES, getAllTemplates } from '@/utils/hardcodedTemplates'
import type { WeekTemplateDocument } from '@/types/firestore'

const { user, loading: authLoading } = useAuth()
const templates = ref<Array<WeekTemplateDocument & { id: string }>>([])
const loading = ref(true)
const error = ref<string | null>(null)
const showHardcodedMenu = ref(false)

// Ensure hardcodedTemplates is always an array
const hardcodedTemplates = computed(() => {
  const all = getAllTemplates()
  return Array.isArray(all) ? all : []
})

console.log('[WeekTemplateList] HARDCODED_TEMPLATES:', HARDCODED_TEMPLATES)
console.log('[WeekTemplateList] getAllTemplates():', getAllTemplates())
console.log('[WeekTemplateList] hardcodedTemplates.value:', hardcodedTemplates.value)

const loadTemplates = async () => {
  if (!user.value) return
  try {
    loading.value = true
    error.value = null
    const templateList = await getWeekTemplatesByTeacher(user.value.uid)
    templates.value = templateList
  } catch (err: any) {
    console.error('Error loading templates:', err)
    error.value = err.message || 'Failed to load templates'
  } finally {
    loading.value = false
  }
}

const useHardcodedTemplate = async (template: any) => {
  if (!user.value) return
  
  try {
    loading.value = true
    error.value = null
    showHardcodedMenu.value = false
    
    // Call the template's create function
    await template.createFunction(user.value.uid)
    
    // Reload templates
    await loadTemplates()
    
    alert(`Created "${template.name}" template successfully!`)
  } catch (err: any) {
    console.error('Error creating hardcoded template:', err)
    error.value = err.message || 'Failed to create template'
  } finally {
    loading.value = false
  }
}

const handleDeleteTemplate = async (templateId: string, templateName: string) => {
  const confirmed = confirm(`Are you sure you want to delete "${templateName}"?\n\nThis will permanently delete the template and all associated content (passages, vocab, affixes, questions). This action cannot be undone.`)
  
  if (!confirmed) return
  
  try {
    loading.value = true
    error.value = null
    
    await deleteWeekTemplate(templateId)
    
    // Reload templates
    await loadTemplates()
    
    alert(`Template "${templateName}" deleted successfully.`)
  } catch (err: any) {
    console.error('Error deleting template:', err)
    error.value = err.message || 'Failed to delete template'
    alert(`Error deleting template: ${err.message || 'Please try again'}`)
  } finally {
    loading.value = false
  }
}

watch([authLoading, user], ([isLoading, currentUser]) => {
  if (!isLoading && currentUser) {
    loadTemplates()
  }
}, { immediate: true })
</script>

<style scoped>
.week-templates {
  padding: 2rem;
  background: #f7fafc;
  min-height: calc(100vh - 80px);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.header h1 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0;
}

.header-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.hardcoded-dropdown {
  position: relative;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 300px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
}

.dropdown-header {
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #2d3748;
  background: #f7fafc;
  border-bottom: 1px solid #e2e8f0;
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dropdown-item {
  width: 100%;
  text-align: left;
  padding: 1rem;
  border: none;
  background: white;
  cursor: pointer;
  transition: background 0.2s;
  border-bottom: 1px solid #e2e8f0;
}

.dropdown-item:hover {
  background: #f7fafc;
}

.item-name {
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 0.25rem;
}

.item-desc {
  font-size: 0.875rem;
  color: #718096;
}

.dropdown-empty {
  padding: 1rem;
  text-align: center;
  color: #a0aec0;
  font-style: italic;
  font-size: 0.875rem;
}

.loading,
.error,
.empty {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.error {
  color: #e53e3e;
}

.empty {
  color: #718096;
}

.templates-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.template-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
}

.template-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.template-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.75rem;
}

.template-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0;
  flex: 1;
}

.subject-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #4a90e2;
  color: white;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 500;
  flex-shrink: 0;
}

.template-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: #718096;
}

.week-length {
  font-weight: 600;
  color: #4a90e2;
}

.template-description {
  color: #4a5568;
  font-size: 0.9375rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
}

.template-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: all 0.2s;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
  background: #edf2f7;
  color: #2d3748;
}

.btn-secondary:hover {
  background: #e2e8f0;
}

.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-danger {
  background: #e53e3e;
  color: white;
}

.btn-danger:hover {
  background: #c53030;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(229, 62, 62, 0.4);
}
</style>
