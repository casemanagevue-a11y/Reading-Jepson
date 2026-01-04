<template>
  <div class="week-template-setup">
    <div class="container">
      <div class="header">
        <h1>{{ isEditMode ? 'Edit Week Template' : 'Create Week Template' }}</h1>
        <p class="subtitle">{{ isEditMode ? 'Update your reusable 5-day reading instruction plan' : 'Create a reusable 5-day reading instruction plan' }}</p>
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
              <p class="section-note">You'll configure Day 2 sentence sorting in Step 3 when you assign sentences from the passage.</p>
              
              <!-- AI Generate Clarifications for All -->
              <div class="ai-generate-section" style="margin-bottom: 1rem;">
                <button 
                  @click="generateAllClarifications"
                  :disabled="generatingClarifications || !vocabWords.some(v => v.word && v.definition)"
                  class="btn btn-ai btn-sm"
                >
                  {{ generatingClarifications ? '🤖 Generating...' : '✨ AI Generate "It Is / It Is Not" for All Words' }}
                </button>
                <small class="form-hint">AI will create clarifications (what it is / what it is not) for each word</small>
              </div>
              
              <div class="selected-list">
                <template v-for="(vocab, index) in vocabWords" :key="index">
                  <div v-if="vocab.word" class="selected-item-expanded">
                    <div class="item-info">
                      <strong>{{ index + 1 }}. {{ vocab.word }}</strong>
                      <p>{{ vocab.definition }}</p>
                      <div v-if="vocab.whatItIs || vocab.whatItIsNot" class="clarifications-preview">
                        <p v-if="vocab.whatItIs" class="clarif-item"><strong>It is:</strong> {{ vocab.whatItIs }}</p>
                        <p v-if="vocab.whatItIsNot" class="clarif-item"><strong>It is not:</strong> {{ vocab.whatItIsNot }}</p>
                      </div>
                    </div>
                    <div class="item-actions">
                      <button @click="generateSingleClarification(index)" :disabled="generatingClarifications" class="btn btn-secondary btn-sm">
                        {{ vocab.whatItIs ? '🔄 Regenerate' : '✨ AI Generate' }}
                      </button>
                      <button @click="removeVocab(index)" class="btn btn-danger btn-sm">Remove</button>
                    </div>
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
                    <div v-if="weeklyPassageVocab.get(index)?.exampleSentence" class="ai-action-box" style="margin-top: 0.75rem;">
                      <p class="ai-prompt-text">
                        <strong>Day 2 Sentence Sorting:</strong> 
                        {{ vocab.wordPhraseCardsStr ? '✓ Cards generated' : 'Not yet generated' }}
                      </p>
                      <button 
                        @click="generateSortingForVocab(index, weeklyPassageVocab.get(index)!.exampleSentence)"
                        :disabled="generatingAI === index"
                        class="btn btn-ai btn-sm"
                      >
                        {{ generatingAI === index ? '🤖 Generating...' : (vocab.wordPhraseCardsStr ? '🔄 Regenerate with AI' : '✨ Generate Day 2 Cards with AI') }}
                      </button>
                    </div>
                    
                    <!-- Show/Edit AI Results -->
                    <div v-if="vocab.wordPhraseCardsStr || vocab.sortingKey.whoWhat || vocab.sortingKey.doingDid" class="ai-results-section" style="margin-top: 1rem;">
                      <h5>Day 2 Sorting Results (Editable)</h5>
                      
                      <div class="form-group">
                        <label>Word/Phrase Cards</label>
                        <input 
                          v-model="vocab.wordPhraseCardsStr" 
                          type="text" 
                          class="form-input" 
                          placeholder="Comma-separated cards"
                        />
                      </div>
                      
                      <div class="sorting-preview">
                        <p><strong>Sorting Key (Teacher Answers):</strong></p>
                        
                        <div class="form-group-compact">
                          <label>1. Who or what? (noun-subject)</label>
                          <input v-model="vocab.sortingKey.whoWhat" type="text" class="form-input-sm" placeholder="e.g., griots" />
                          <small class="hint-text">The actors or things the sentence is about</small>
                        </div>
                        
                        <div class="form-group-compact">
                          <label>2. Doing or did? (verb-predicate)</label>
                          <input v-model="vocab.sortingKey.doingDid" type="text" class="form-input-sm" placeholder="e.g., told" />
                          <small class="hint-text">The action or state of being</small>
                        </div>
                        
                        <div class="form-group-compact">
                          <label>3. Which/what kind/how many? (adjective)</label>
                          <input v-model="vocab.sortingKey.whichWhatKind" type="text" class="form-input-sm" placeholder="e.g., The, many, his" />
                          <small class="hint-text">Include articles, possessives, demonstratives</small>
                        </div>
                        
                        <div class="form-group-compact">
                          <label>4. Where/when/how/why? (adverb)</label>
                          <input v-model="vocab.sortingKey.whereWhenHowWhy" type="text" class="form-input-sm" placeholder="e.g., later" />
                          <small class="hint-text">Circumstances of the action</small>
                        </div>
                        
                        <div class="form-group-compact">
                          <label>5. What relationship? (preposition)</label>
                          <input v-model="vocab.sortingKey.relationship" type="text" class="form-input-sm" placeholder="e.g., about, from, of" />
                          <small class="hint-text">Connection between words</small>
                        </div>
                        
                        <div class="form-group-compact">
                          <label>6. What connects? (conjunction)</label>
                          <input v-model="vocab.sortingKey.glue" type="text" class="form-input-sm" placeholder="e.g., and, or" />
                          <small class="hint-text">Words that glue parts together</small>
                        </div>
                      </div>
                    </div>
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
            
            <!-- AI Generate Button -->
            <div class="ai-generate-section" style="margin-bottom: 1.5rem;">
              <button 
                @click="generateDay3Questions"
                :disabled="!weeklyPassage.text || generatingQuestions === 3"
                class="btn btn-ai"
              >
                {{ generatingQuestions === 3 ? '🤖 Generating...' : '✨ AI Generate Questions (3 Literal + 2 Inferential)' }}
              </button>
              <small class="form-hint">AI will analyze the passage and create questions with teacher answer keys</small>
            </div>
            
            <div v-for="(question, index) in day3Questions" :key="index" class="question-editor">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2" placeholder="Enter the question"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="literal">Literal</option>
                  <option value="inferential">Inferential</option>
                </select>
              </div>
              <div class="form-group">
                <label>Expected Answer (Teacher Key)</label>
                <textarea v-model="question.rubric" class="form-input" rows="2" placeholder="Expected answer or key points to look for"></textarea>
              </div>
              <button v-if="index > 0" @click="day3Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day3Questions.push({ type: 'literal', prompt: '', rubric: '', orderIndex: day3Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
          </div>
        </div>
        
        <div v-if="currentStep === 4" class="step">
          <h2>Day 4: Student Read + Cause/Effect Organizer</h2>
          
          <div class="section">
            <h3>Cause/Effect Organizer</h3>
            <p class="section-note">Main idea and cause/effect questions for Day 4</p>
            
            <!-- AI Generate Main Idea Answer -->
            <div class="ai-generate-section" style="margin-bottom: 1.5rem;">
              <button 
                @click="generateMainIdeaWithDetails"
                :disabled="!weeklyPassage.text || generatingMainIdea"
                class="btn btn-ai"
              >
                {{ generatingMainIdea ? '🤖 Generating...' : '✨ AI Generate Main Idea Answer (with 2-5 supporting details)' }}
              </button>
              <small class="form-hint">AI will create the teacher answer key for "What is the main idea of this passage?"</small>
              
              <div v-if="mainIdeaAnswer" class="main-idea-display">
                <p><strong>Main Idea (Teacher Answer):</strong></p>
                <p class="answer-text">{{ mainIdeaAnswer.mainIdea }}</p>
                <p><strong>Supporting Details:</strong></p>
                <ul class="details-list">
                  <li v-for="(detail, idx) in mainIdeaAnswer.supportingDetails" :key="idx">{{ detail }}</li>
                </ul>
              </div>
            </div>
            
            <div v-for="(question, index) in day4Questions" :key="index" class="question-editor">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2" placeholder="Enter the question"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="mainIdea">Main Idea</option>
                  <option value="causeEffect">Cause/Effect</option>
                </select>
              </div>
              <div class="form-group">
                <label>Expected Answer (Teacher Key)</label>
                <textarea v-model="question.rubric" class="form-input" rows="2" placeholder="Expected answer or key points to look for"></textarea>
              </div>
              <button v-if="index > 0" @click="day4Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day4Questions.push({ type: 'causeEffect', prompt: '', rubric: '', orderIndex: day4Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
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
                    <div v-if="fridayPassageVocab.get(index)?.exampleSentence" class="ai-action-box" style="margin-top: 0.75rem;">
                      <p class="ai-prompt-text">
                        <strong>Day 2 Sentence Sorting:</strong> 
                        {{ vocab.wordPhraseCardsStr ? '✓ Cards generated' : 'Not yet generated' }}
                      </p>
                      <button 
                        @click="generateSortingForVocab(index, fridayPassageVocab.get(index)!.exampleSentence)"
                        :disabled="generatingAI === index"
                        class="btn btn-ai btn-sm"
                      >
                        {{ generatingAI === index ? '🤖 Generating...' : (vocab.wordPhraseCardsStr ? '🔄 Regenerate with AI' : '✨ Generate Day 2 Cards with AI') }}
                      </button>
                    </div>
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
            
            <!-- AI Generate Button -->
            <div class="ai-generate-section" style="margin-bottom: 1.5rem;">
              <button 
                @click="generateDay5Questions"
                :disabled="!fridayPassage.text || generatingQuestions === 5"
                class="btn btn-ai"
              >
                {{ generatingQuestions === 5 ? '🤖 Generating...' : '✨ AI Generate Questions (3 Literal + 2 Inferential)' }}
              </button>
              <small class="form-hint">AI will analyze the passage and create questions with teacher answer keys</small>
            </div>
            
            <div v-for="(question, index) in day5Questions" :key="index" class="question-editor">
              <div class="form-group">
                <label>Question {{ index + 1 }}</label>
                <textarea v-model="question.prompt" class="form-input" rows="2" placeholder="Enter the question"></textarea>
              </div>
              <div class="form-group">
                <label>Question Type</label>
                <select v-model="question.type" class="form-input">
                  <option value="literal">Literal</option>
                  <option value="inferential">Inferential</option>
                  <option value="mainIdea">Main Idea</option>
                </select>
              </div>
              <div class="form-group">
                <label>Expected Answer (Teacher Key)</label>
                <textarea v-model="question.rubric" class="form-input" rows="2" placeholder="Expected answer or key points to look for"></textarea>
              </div>
              <button v-if="index > 0" @click="day5Questions.splice(index, 1)" class="btn btn-danger btn-sm">Remove</button>
            </div>
            <button @click="day5Questions.push({ type: 'literal', prompt: '', rubric: '', orderIndex: day5Questions.length + 1 })" class="btn btn-secondary">+ Add Question</button>
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
import { useRouter, useRoute } from 'vue-router'
import { useAuth } from '@/composables/useAuth'
import { generateSentenceSorting, generateComprehensionQuestions, generateMainIdeaAnswer, generateVocabClarifications } from '@/services/aiService'
import type { MainIdeaAnswerResult } from '@/services/aiService'
import { 
  createWeekTemplate,
  updateWeekTemplate,
  getWeekTemplate,
  getPassagesByWeek,
  getVocabByWeek,
  getAffixesByWeek,
  getQuestionsByWeek,
  createPassage, 
  deletePassage,
  createVocabWord, 
  deleteVocabWord,
  createAffix,
  deleteAffix,
  createQuestion,
  deleteQuestion
} from '@/services/firestoreServices'
import libraryServices from '@/services/libraryServices'
import type { VocabLibraryWithId, AffixLibraryWithId } from '@/services/libraryServices'
import { extractSentencesContainingWord, extractWordsContainingAffix } from '@/utils/lessonParser'
import type { SubjectFocus, AffixKind, PassageVocabItem, PassageAffixItem } from '@/types/firestore'

const router = useRouter()
const route = useRoute()
const { user } = useAuth()

// Check if we're in edit mode
const isEditMode = computed(() => !!route.params.templateId)
const templateId = computed(() => route.params.templateId as string)

const currentStep = ref(1)
const saving = ref(false)
const generatingAI = ref<number | null>(null)
const generatingQuestions = ref<number | null>(null)
const generatingMainIdea = ref(false)
const generatingClarifications = ref(false)
const mainIdeaAnswer = ref<MainIdeaAnswerResult | null>(null)

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
    doingDid: string;
    whichWhatKind: string;
    whereWhenHowWhy: string;
    relationship: string;
    glue: string;
  };
  partOfSpeech?: string;
  whatItIs?: string;
  whatItIsNot?: string;
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
      doingDid: '',
      whichWhatKind: '',
      whereWhenHowWhy: '',
      relationship: '',
      glue: ''
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

const day3Questions = ref<Array<{ type: string; prompt: string; rubric?: string; orderIndex: number }>>([
  { type: 'literal', prompt: '', rubric: '', orderIndex: 1 }
])

const day4Questions = ref<Array<{ type: string; prompt: string; rubric?: string; orderIndex: number }>>([
  { type: 'causeEffect', prompt: '', rubric: '', orderIndex: 1 }
])

const day5Questions = ref<Array<{ type: string; prompt: string; rubric?: string; orderIndex: number }>>([
  { type: 'literal', prompt: '', rubric: '', orderIndex: 1 }
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

// Load existing template data if in edit mode
async function loadTemplateData() {
  if (!isEditMode.value || !templateId.value) return
  
  try {
    console.log('[WeekTemplateSetup] Loading template:', templateId.value)
    saving.value = true
    
    // Load template
    const template = await getWeekTemplate(templateId.value)
    if (!template) {
      alert('Template not found')
      router.push('/teacher/week-templates')
      return
    }
    
    // Populate template data
    templateData.value = {
      templateName: template.templateName,
      grade: template.grade || '',
      unit: template.unit || '',
      subjectFocus: template.subjectFocus,
      description: template.description || ''
    }
    
    // Load passages
    const passages = await getPassagesByWeek(templateId.value)
    const weeklyPassageDoc = passages.find(p => p.type === 'weekly')
    const fridayPassageDoc = passages.find(p => p.type === 'friday')
    
    if (weeklyPassageDoc) {
      weeklyPassage.value = {
        title: weeklyPassageDoc.title,
        text: weeklyPassageDoc.text
      }
      
      // Load vocab items for weekly passage AND populate vocabWords array
      if (weeklyPassageDoc.vocabItems) {
        weeklyPassageDoc.vocabItems.forEach((item, index) => {
          weeklyPassageVocab.value.set(index, item)
          
          // Also populate vocabWords array for Step 2 display
          if (!vocabWords.value[index] || !vocabWords.value[index].word) {
            vocabWords.value[index] = {
              word: item.word,
              definition: item.definition,
              exampleSentence: item.exampleSentence || '',
              teacherPrompts: item.teacherPrompts || '',
              sentenceFrame: item.sentenceFrame || '',
              pictureGuidance: item.pictureGuidance || '',
              wordPhraseCardsStr: item.wordPhraseCards?.join(', ') || '',
              sortingKey: {
                whoWhat: item.sortingKey?.whoWhat?.join(', ') || '',
                doingDid: item.sortingKey?.doingDid?.join(', ') || '',
                whichWhatKind: item.sortingKey?.whichWhatKind?.join(', ') || '',
                whereWhenHowWhy: item.sortingKey?.whereWhenHowWhy?.join(', ') || '',
                relationship: item.sortingKey?.relationship?.join(', ') || '',
                glue: item.sortingKey?.glue?.join(', ') || ''
              },
              partOfSpeech: item.partOfSpeech,
              whatItIs: item.whatItIs,
              whatItIsNot: item.whatItIsNot
            }
          }
        })
      }
      
      // Also check if there's mainIdeaAnswer
      if (weeklyPassageDoc.mainIdeaAnswer) {
        mainIdeaAnswer.value = weeklyPassageDoc.mainIdeaAnswer
      }
      
      // Load affix items for weekly passage
      if (weeklyPassageDoc.affixItems) {
        weeklyPassageDoc.affixItems.forEach((item, index) => {
          weeklyPassageAffixes.value.set(index, item)
        })
      }
    }
    
    if (fridayPassageDoc) {
      fridayPassage.value = {
        title: fridayPassageDoc.title,
        text: fridayPassageDoc.text
      }
      
      // Load vocab items for friday passage
      if (fridayPassageDoc.vocabItems) {
        fridayPassageDoc.vocabItems.forEach((item, index) => {
          fridayPassageVocab.value.set(index, item)
        })
      }
      
      // Load affix items for friday passage
      if (fridayPassageDoc.affixItems) {
        fridayPassageDoc.affixItems.forEach((item, index) => {
          fridayPassageAffixes.value.set(index, item)
        })
      }
    }
    
    // Load vocab words
    const vocabDocs = await getVocabByWeek(templateId.value)
    if (vocabDocs.length > 0) {
      vocabWords.value = vocabDocs.map(v => ({
        word: v.word,
        definition: v.definition,
        exampleSentence: v.exampleSentence || '',
        teacherPrompts: v.teacherPrompts || '',
        sentenceFrame: v.sentenceFrame || '',
        pictureGuidance: v.pictureGuidance || '',
        wordPhraseCardsStr: v.wordPhraseCards?.join(', ') || '',
        sortingKey: {
        whoWhat: v.sortingKey?.whoWhat?.join(', ') || '',
        doingDid: v.sortingKey?.doingDid?.join(', ') || '',
        whichWhatKind: v.sortingKey?.whichWhatKind?.join(', ') || '',
        whereWhenHowWhy: v.sortingKey?.whereWhenHowWhy?.join(', ') || '',
        relationship: v.sortingKey?.relationship?.join(', ') || '',
        glue: v.sortingKey?.glue?.join(', ') || ''
        },
        partOfSpeech: v.partOfSpeech,
        whatItIs: v.whatItIs,
        whatItIsNot: v.whatItIsNot
      }))
    }
    
    // Load affixes
    const affixDocs = await getAffixesByWeek(templateId.value)
    if (affixDocs.length > 0) {
      affixes.value = affixDocs.map(a => ({
        affix: a.affix,
        kind: a.kind,
        meaning: a.meaning,
        examplesStr: a.examples?.join(', ') || ''
      }))
    }
    
    // Load questions
    const questionDocs = await getQuestionsByWeek(templateId.value)
    
    // Sort and group questions by day
    const day3Qs = questionDocs
      .filter(q => q.day === 3)
      .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0))
      .map(q => ({
        type: q.type,
        prompt: q.prompt,
        rubric: q.rubric || '',
        orderIndex: q.orderIndex || 0
      }))
    
    const day4Qs = questionDocs
      .filter(q => q.day === 4)
      .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0))
      .map(q => ({
        type: q.type,
        prompt: q.prompt,
        rubric: q.rubric || '',
        orderIndex: q.orderIndex || 0
      }))
    
    const day5Qs = questionDocs
      .filter(q => q.day === 5)
      .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0))
      .map(q => ({
        type: q.type,
        prompt: q.prompt,
        rubric: q.rubric || '',
        orderIndex: q.orderIndex || 0
      }))
    
    if (day3Qs.length > 0) day3Questions.value = day3Qs
    if (day4Qs.length > 0) day4Questions.value = day4Qs
    if (day5Qs.length > 0) day5Questions.value = day5Qs
    
    console.log('[WeekTemplateSetup] Template loaded successfully')
  } catch (error) {
    console.error('[WeekTemplateSetup] Error loading template:', error)
    alert('Error loading template. Please try again.')
    router.push('/teacher/week-templates')
  } finally {
    saving.value = false
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
      doingDid: '',
      whichWhatKind: '',
      whereWhenHowWhy: '',
      relationship: '',
      glue: ''
    },
    partOfSpeech: item.partOfSpeech,
    whatItIs: item.whatItIs,
    whatItIsNot: item.whatItIsNot
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

// No longer needed - Day 2 config is in Step 3 now

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
      sortingKey: (vocab.sortingKey.whoWhat || vocab.sortingKey.doingDid || 
                   vocab.sortingKey.whichWhatKind || vocab.sortingKey.whereWhenHowWhy || 
                   vocab.sortingKey.relationship || vocab.sortingKey.glue) ? {
        whoWhat: vocab.sortingKey.whoWhat ? vocab.sortingKey.whoWhat.split(',').map(s => s.trim()).filter(s => s) : undefined,
        doingDid: vocab.sortingKey.doingDid ? vocab.sortingKey.doingDid.split(',').map(s => s.trim()).filter(s => s) : undefined,
        whichWhatKind: vocab.sortingKey.whichWhatKind ? vocab.sortingKey.whichWhatKind.split(',').map(s => s.trim()).filter(s => s) : undefined,
        whereWhenHowWhy: vocab.sortingKey.whereWhenHowWhy ? vocab.sortingKey.whereWhenHowWhy.split(',').map(s => s.trim()).filter(s => s) : undefined,
        relationship: vocab.sortingKey.relationship ? vocab.sortingKey.relationship.split(',').map(s => s.trim()).filter(s => s) : undefined,
        glue: vocab.sortingKey.glue ? vocab.sortingKey.glue.split(',').map(s => s.trim()).filter(s => s) : undefined
      } : undefined,
      partOfSpeech: vocab.partOfSpeech || undefined,
      whatItIs: vocab.whatItIs || undefined,
      whatItIsNot: vocab.whatItIsNot || undefined
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
async function updateVocabSentence(passageType: 'weekly' | 'friday', vocabIndex: number, sentence: string) {
  const key = `${passageType}-${vocabIndex}`
  selectedVocabSentences.value.set(key, sentence)
  const vocabMap = passageType === 'weekly' ? weeklyPassageVocab : fridayPassageVocab
  const vocabItem = vocabMap.value.get(vocabIndex)
  if (vocabItem) {
    vocabItem.exampleSentence = sentence
    
    // Update the main vocab word's exampleSentence
    const vocab = vocabWords.value[vocabIndex]
    if (vocab) {
      vocab.exampleSentence = sentence
    }
  }
  
  // Auto-generate sentence sorting with AI when sentence is assigned
  const vocab = vocabWords.value[vocabIndex]
  if (vocab && sentence && !vocab.wordPhraseCardsStr) {
    // Only auto-generate if cards haven't been filled yet
    const shouldGenerate = confirm(`AI can automatically create word cards and sorting key for "${vocab.word}".\n\nGenerate now? (You can edit after)`)
    
    if (shouldGenerate) {
      await generateSortingForVocab(vocabIndex, sentence)
    }
  }
}

// Helper function to generate sorting for a specific vocab word
async function generateSortingForVocab(vocabIndex: number, sentence: string) {
  const vocab = vocabWords.value[vocabIndex]
  if (!vocab) return
  
  try {
    generatingAI.value = vocabIndex
    
    const result = await generateSentenceSorting(vocab.word, sentence)
    
    // Populate the fields with AI results in vocabWords array
    vocab.wordPhraseCardsStr = result.wordPhraseCards.join(', ')
    vocab.sortingKey.whoWhat = result.sortingKey.whoWhat.join(', ')
    vocab.sortingKey.doingDid = result.sortingKey.doingDid.join(', ')
    vocab.sortingKey.whichWhatKind = result.sortingKey.whichWhatKind.join(', ')
    vocab.sortingKey.whereWhenHowWhy = result.sortingKey.whereWhenHowWhy.join(', ')
    vocab.sortingKey.relationship = result.sortingKey.relationship.join(', ')
    vocab.sortingKey.glue = result.sortingKey.glue.join(', ')
    
    // ALSO update the passage vocab items (both weekly and friday if assigned)
    const weeklyItem = weeklyPassageVocab.value.get(vocabIndex)
    if (weeklyItem) {
      weeklyItem.wordPhraseCards = result.wordPhraseCards
      weeklyItem.sortingKey = result.sortingKey
      console.log('[WeekTemplateSetup] Updated weeklyPassageVocab item:', { word: vocab.word, hasCards: !!weeklyItem.wordPhraseCards, hasSortingKey: !!weeklyItem.sortingKey })
    }
    
    const fridayItem = fridayPassageVocab.value.get(vocabIndex)
    if (fridayItem) {
      fridayItem.wordPhraseCards = result.wordPhraseCards
      fridayItem.sortingKey = result.sortingKey
      console.log('[WeekTemplateSetup] Updated fridayPassageVocab item:', { word: vocab.word, hasCards: !!fridayItem.wordPhraseCards, hasSortingKey: !!fridayItem.sortingKey })
    }
    
    console.log('[WeekTemplateSetup] AI generated sorting:', { word: vocab.word, cards: result.wordPhraseCards, sortingKey: result.sortingKey })
    
    alert(`✅ AI generated sorting for "${vocab.word}"!\n\nCards: ${result.wordPhraseCards.join(', ')}\n\nReview and edit the results below if needed.`)
    
  } catch (error: any) {
    console.error('Error generating with AI:', error)
    alert('Failed to generate with AI. You can try again using the "Configure Day 2 Analysis" button.')
  } finally {
    generatingAI.value = null
  }
}

// Generate Day 3 questions with AI
async function generateDay3Questions() {
  if (!weeklyPassage.value.text) {
    alert('Please enter the weekly passage text first')
    return
  }
  
  try {
    generatingQuestions.value = 3
    
    const questions = await generateComprehensionQuestions(
      weeklyPassage.value.text,
      3,
      { literal: 3, inferential: 2, mainIdea: 0 } // No main idea for Day 3
    )
    
    // Replace existing questions with AI-generated ones
    day3Questions.value = questions.map((q, index) => ({
      type: q.type,
      prompt: q.prompt,
      orderIndex: index + 1,
      rubric: q.rubric
    }))
    
    alert(`✅ Generated ${questions.length} questions for Day 3!\n\n3 literal questions\n2 inferential questions\n\nReview and edit as needed.`)
  } catch (error: any) {
    console.error('Error generating Day 3 questions:', error)
    alert('Failed to generate questions. Please try again or create manually.')
  } finally {
    generatingQuestions.value = null
  }
}

// Generate Day 5 questions with AI (same as Day 3)
async function generateDay5Questions() {
  if (!fridayPassage.value.text) {
    alert('Please enter the Friday passage text first')
    return
  }
  
  try {
    generatingQuestions.value = 5
    
    const questions = await generateComprehensionQuestions(
      fridayPassage.value.text,
      5,
      { literal: 3, inferential: 2, mainIdea: 0 } // No main idea for Day 5
    )
    
    // Replace existing questions with AI-generated ones
    day5Questions.value = questions.map((q, index) => ({
      type: q.type,
      prompt: q.prompt,
      orderIndex: index + 1,
      rubric: q.rubric
    }))
    
    alert(`✅ Generated ${questions.length} questions for Day 5!\n\n3 literal questions\n2 inferential questions\n\nReview and edit as needed.`)
  } catch (error: any) {
    console.error('Error generating Day 5 questions:', error)
    alert('Failed to generate questions. Please try again or create manually.')
  } finally {
    generatingQuestions.value = null
  }
}

// Generate Main Idea Answer with Supporting Details
async function generateMainIdeaWithDetails() {
  if (!weeklyPassage.value.text) {
    alert('Please enter the weekly passage text first')
    return
  }
  
  try {
    generatingMainIdea.value = true
    
    const result = await generateMainIdeaAnswer(weeklyPassage.value.text)
    mainIdeaAnswer.value = result
    
    alert(`✅ Generated Main Idea Answer!\n\nMain Idea: ${result.mainIdea}\n\n${result.supportingDetails.length} supporting details included.\n\nThis will appear in the teacher script for Day 4.`)
  } catch (error: any) {
    console.error('Error generating main idea:', error)
    alert('Failed to generate main idea. Please try again.')
  } finally {
    generatingMainIdea.value = false
  }
}

// Generate clarifications for a single vocab word
async function generateSingleClarification(vocabIndex: number) {
  const vocab = vocabWords.value[vocabIndex]
  if (!vocab.word || !vocab.definition) {
    alert('Word and definition are required')
    return
  }
  
  try {
    generatingClarifications.value = true
    
    const result = await generateVocabClarifications(vocab.word, vocab.definition)
    
    vocab.partOfSpeech = result.partOfSpeech
    vocab.whatItIs = result.whatItIs
    vocab.whatItIsNot = result.whatItIsNot
    
    console.log('[WeekTemplateSetup] Generated clarifications for', vocab.word, result)
  } catch (error: any) {
    console.error('Error generating clarifications:', error)
    alert(`Failed to generate clarifications for "${vocab.word}". Try again or enter manually.`)
  } finally {
    generatingClarifications.value = false
  }
}

// Generate clarifications for all vocab words
async function generateAllClarifications() {
  const wordsToGenerate = vocabWords.value.filter(v => v.word && v.definition && !v.whatItIs)
  
  if (wordsToGenerate.length === 0) {
    alert('All words already have clarifications! Click individual "Regenerate" buttons to update specific words.')
    return
  }
  
  const confirmed = confirm(`Generate "It is / It is not" clarifications for ${wordsToGenerate.length} word(s)?\n\nThis may take a moment.`)
  if (!confirmed) return
  
  try {
    generatingClarifications.value = true
    let successCount = 0
    
    for (const vocab of vocabWords.value) {
      if (vocab.word && vocab.definition && !vocab.whatItIs) {
        try {
          const result = await generateVocabClarifications(vocab.word, vocab.definition)
          vocab.partOfSpeech = result.partOfSpeech
          vocab.whatItIs = result.whatItIs
          vocab.whatItIsNot = result.whatItIsNot
          successCount++
          
          // Small delay to avoid rate limits
          await new Promise(resolve => setTimeout(resolve, 500))
        } catch (error) {
          console.error(`Failed to generate for ${vocab.word}:`, error)
        }
      }
    }
    
    alert(`✅ Generated clarifications for ${successCount} word(s)!\n\nReview and edit as needed in the list below.`)
  } catch (error: any) {
    console.error('Error generating clarifications:', error)
    alert('Failed to generate some clarifications. Please try again.')
  } finally {
    generatingClarifications.value = false
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
    
    let finalTemplateId: string
    
    if (isEditMode.value && templateId.value) {
      // UPDATE MODE: Delete existing related documents and update template
      console.log('[WeekTemplateSetup] Update mode - deleting existing documents')
      finalTemplateId = templateId.value
      
      // Delete existing passages
      const existingPassages = await getPassagesByWeek(finalTemplateId)
      for (const passage of existingPassages) {
        await deletePassage(passage.id)
      }
      
      // Delete existing vocab words
      const existingVocab = await getVocabByWeek(finalTemplateId)
      for (const vocab of existingVocab) {
        await deleteVocabWord(vocab.id)
      }
      
      // Delete existing affixes
      const existingAffixes = await getAffixesByWeek(finalTemplateId)
      for (const affix of existingAffixes) {
        await deleteAffix(affix.id)
      }
      
      // Delete existing questions
      const existingQuestions = await getQuestionsByWeek(finalTemplateId)
      for (const question of existingQuestions) {
        await deleteQuestion(question.id)
      }
      
      // Update template
      const templateUpdatePayload: any = {
        templateName: templateData.value.templateName,
        weekLength: 5,
        subjectFocus: templateData.value.subjectFocus
      }
      
      if (templateData.value.grade) {
        templateUpdatePayload.grade = templateData.value.grade
      }
      if (templateData.value.unit) {
        templateUpdatePayload.unit = templateData.value.unit
      }
      if (templateData.value.description) {
        templateUpdatePayload.description = templateData.value.description
      }
      
      await updateWeekTemplate(finalTemplateId, templateUpdatePayload)
      console.log('[WeekTemplateSetup] Template updated, recreating content...')
    } else {
      // CREATE MODE: Create new template
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
      
      finalTemplateId = await createWeekTemplate(templatePayload)
      console.log('[WeekTemplateSetup] New template created:', finalTemplateId)
    }
    
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
      // AI-generated clarification fields
      if (item.partOfSpeech) cleaned.partOfSpeech = item.partOfSpeech
      if (item.whatItIs) cleaned.whatItIs = item.whatItIs
      if (item.whatItIsNot) cleaned.whatItIsNot = item.whatItIsNot
      
      console.log('[WeekTemplateSetup] Saving vocab item:', { 
        word: item.word, 
        hasCards: !!item.wordPhraseCards, 
        cardCount: item.wordPhraseCards?.length || 0,
        hasSortingKey: !!item.sortingKey 
      })
      
      return cleaned as PassageVocabItem
    })
    
    const weeklyPassagePayload: any = {
      weekId: finalTemplateId,
      type: 'weekly',
      title: weeklyPassage.value.title,
      text: weeklyPassage.value.text
    }
    if (cleanWeeklyVocabItems.length > 0) weeklyPassagePayload.vocabItems = cleanWeeklyVocabItems
    if (weeklyAffixItems.length > 0) weeklyPassagePayload.affixItems = weeklyAffixItems
    if (mainIdeaAnswer.value) weeklyPassagePayload.mainIdeaAnswer = mainIdeaAnswer.value
    
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
      // AI-generated clarification fields
      if (item.partOfSpeech) cleaned.partOfSpeech = item.partOfSpeech
      if (item.whatItIs) cleaned.whatItIs = item.whatItIs
      if (item.whatItIsNot) cleaned.whatItIsNot = item.whatItIsNot
      return cleaned as PassageVocabItem
    })
    
    const fridayPassagePayload: any = {
      weekId: finalTemplateId,
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
          weekId: finalTemplateId,
          word: vocab.word,
          definition: vocab.definition,
          exampleSentence: vocab.exampleSentence || '',
          tags: []
        }
        
        // Only include optional fields if they have values
        if (vocab.teacherPrompts) vocabPayload.teacherPrompts = vocab.teacherPrompts
        if (vocab.sentenceFrame) vocabPayload.sentenceFrame = vocab.sentenceFrame
        if (vocab.pictureGuidance) vocabPayload.pictureGuidance = vocab.pictureGuidance
        
        // AI-generated clarification fields
        if (vocab.partOfSpeech) vocabPayload.partOfSpeech = vocab.partOfSpeech
        if (vocab.whatItIs) vocabPayload.whatItIs = vocab.whatItIs
        if (vocab.whatItIsNot) vocabPayload.whatItIsNot = vocab.whatItIsNot
        
        // Parse word/phrase cards
        if (vocab.wordPhraseCardsStr) {
          const cards = vocab.wordPhraseCardsStr.split(',').map(c => c.trim()).filter(c => c)
          if (cards.length > 0) vocabPayload.wordPhraseCards = cards
        }
        
        // Parse sorting key
        const sortingKey: any = {}
        let hasSortingKey = false
        
        if (vocab.sortingKey.whoWhat) {
          sortingKey.whoWhat = vocab.sortingKey.whoWhat.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.whoWhat.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.doingDid) {
          sortingKey.doingDid = vocab.sortingKey.doingDid.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.doingDid.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.whichWhatKind) {
          sortingKey.whichWhatKind = vocab.sortingKey.whichWhatKind.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.whichWhatKind.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.whereWhenHowWhy) {
          sortingKey.whereWhenHowWhy = vocab.sortingKey.whereWhenHowWhy.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.whereWhenHowWhy.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.relationship) {
          sortingKey.relationship = vocab.sortingKey.relationship.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.relationship.length > 0) hasSortingKey = true
        }
        if (vocab.sortingKey.glue) {
          sortingKey.glue = vocab.sortingKey.glue.split(',').map((s: string) => s.trim()).filter((s: string) => s)
          if (sortingKey.glue.length > 0) hasSortingKey = true
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
          weekId: finalTemplateId,
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
          weekId: finalTemplateId,
          day: 3,
          type: q.type as any,
          prompt: q.prompt,
          rubric: q.rubric || undefined,
          orderIndex: q.orderIndex
        })
      }
    }
    
    // Create Day 4 questions (Cause/Effect organizer)
    for (const q of day4Questions.value) {
      if (q.prompt) {
        await createQuestion({
          weekId: finalTemplateId,
          day: 4,
          type: q.type as any,
          prompt: q.prompt,
          rubric: q.rubric || undefined,
          orderIndex: q.orderIndex
        })
      }
    }
    
    // Create Day 5 questions (Reading assessment)
    for (const q of day5Questions.value) {
      if (q.prompt) {
        await createQuestion({
          weekId: finalTemplateId,
          day: 5,
          type: q.type as any,
          prompt: q.prompt,
          rubric: q.rubric || undefined,
          orderIndex: q.orderIndex
        })
      }
    }
    
    alert(`Template ${isEditMode.value ? 'updated' : 'created'} successfully!`)
    router.push('/teacher/week-templates')
  } catch (error) {
    console.error('Error saving template:', error)
    alert(`Failed to ${isEditMode.value ? 'update' : 'create'} template. Please try again.`)
  } finally {
    saving.value = false
  }
}

// Load library items when component mounts
onMounted(() => {
  loadAllLibraryItems()
  if (isEditMode.value) {
    loadTemplateData()
  }
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

/* Day 2 Configuration Styles */
.selected-item-expanded {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.item-actions {
  display: flex;
  gap: 0.5rem;
}

.day2-config-section {
  margin-top: 1rem;
  padding: 1.5rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #4a90e2;
}

.day2-config-section h5 {
  color: #2d3748;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
}

.ai-generate-section {
  margin: 1.5rem 0;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border-radius: 8px;
  border: 2px dashed #667eea;
  text-align: center;
}

.btn-ai {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-ai:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.btn-ai:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.sorting-key-section {
  background: #edf2f7;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 1rem;
}

.sorting-key-section p {
  font-weight: 600;
  color: #2d3748;
  margin: 0 0 1rem 0;
}

.sorting-key-section .form-group {
  margin-bottom: 0.75rem;
}

.sorting-key-section label {
  font-size: 0.9rem;
  font-weight: 500;
  color: #4a5568;
}

.ai-action-box {
  background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%);
  border: 2px solid #667eea;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.ai-prompt-text {
  margin: 0 0 0.75rem 0;
  color: #2d3748;
  font-size: 0.9rem;
}

.ai-prompt-text strong {
  color: #667eea;
}

.hint-text {
  display: block;
  color: #718096;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.connector-note {
  margin-top: 1rem;
  padding: 0.75rem;
  background: #fff5f5;
  border-left: 3px solid #fc8181;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #742a2a;
}

.question-editor {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 3px solid #667eea;
}

.main-idea-display {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
  border-left: 4px solid #48bb78;
}

.main-idea-display .answer-text {
  font-weight: 600;
  color: #2d3748;
  margin: 0.5rem 0;
  line-height: 1.6;
}

.details-list {
  margin: 0.5rem 0 0 1.5rem;
  color: #4a5568;
  line-height: 1.8;
}

.details-list li {
  margin-bottom: 0.5rem;
}
</style>