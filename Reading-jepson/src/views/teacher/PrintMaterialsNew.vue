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

    <div v-else class="printable-content container" style="break-after: avoid;">
      <!-- Header for printed page - single line -->
      <div class="print-page-header">
        {{ studentName }} | {{ formatDateRange() }} | 
        <span v-if="isTeacherVersion" class="version-badge">TEACHER SCRIPT</span>
        <span v-else-if="isCompactVersion" class="version-badge">TEACHER REFERENCE</span>
        <span v-else class="version-badge">STUDENT WORKBOOK</span>
      </div>

      <!-- DAY 1: Vocabulary & Affixes -->
      <div class="print-section" style="break-after: avoid;break-before: avoid;break-inside: avoid;">
        <h2>Day 1: Vocabulary & Affixes</h2>
        
        <!-- Teacher Script Version -->
        <div v-if="isTeacherVersion && !isCompactVersion" class="day-one-teacher-content">
          
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
                <h5>★ Step 1: Say the Word + Syllables + Familiarity Check</h5>
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
                <h5>★ Step 2: Teacher Definition (Modeled)</h5>
                <p class="script-note">Teacher says:</p>
                <p class="script-line">"This word means: {{ word.definition }}"</p>
                <p class="script-note">(One short, student-friendly sentence.)</p>
              </div>

              <!-- Step 3: Use in Sentence -->
              <div class="routine-step">
                <h5>★ Step 3: Teacher Model Sentence (Listening Only)</h5>
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

              <!-- Step 9: Complete Worksheet -->
              <div class="routine-step">
                <h5>★ Step 9: Complete Worksheet (Follow This Order)</h5>
                <p class="script-note">Teacher and student work together on the vocabulary worksheet:</p>
                <ul class="action-list">
                  <li><strong>Say and/or write vocabulary word</strong>
                    
                  </li>
                  <li><strong>Review and/or create student-friendly definition</strong>
                  
                  </li>
                  <li><strong>Part of Speech</strong>
                    
                  </li>
                  <li><strong>It is / It is not</strong>
                    <div v-if="word.whatItIs || word.whatItIsNot" style="margin-left: 1rem;">
                      <p v-if="word.whatItIs" class="sub-note"><em>It is:</em> {{ word.whatItIs }}</p>
                      <p v-if="word.whatItIsNot" class="sub-note"><em>It is not:</em> {{ word.whatItIsNot }}</p>
                    </div>
                    
                  </li>
                  <li><strong>Use in a sentence (teacher support if needed)</strong>
                    <p class="sub-note">Student creates sentence or with teacher support/sentence frame</p>
                  </li>
                  <li><strong>Student draws a picture</strong>
                  </li>
                </ul>
              </div>
              
              <!-- Step 10: Reflection (Separate Worksheet) -->
              <div class="routine-step">
                <h5>★ Step 10: Reflection (❓ 👀 🧠 ⭐ Scale)</h5>
                <p class="script-note">Teacher asks:</p>
                <p class="script-line">"Where are you now with this word?"</p>
                <p class="script-note">Student marks on reflection worksheet:</p>
                <ul class="reflection-options">
                  <li>❓ Never heard it</li>
                  <li>👀 Heard it before</li>
                  <li>🧠 Know what it means</li>
                  <li>⭐ Can use it / explain it</li>
                </ul>
                <p class="script-note">Optional follow-up:</p>
                <p class="script-line">"What helped you move from where you were to where you are now?"</p>
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
              <p v-if="'note' in affix && affix.note" class="script-note"><strong>Note:</strong> {{ affix.note }}</p>
              <p class="script-line">"Here are words that use this affix: <strong>{{ affix.examples.join(', ') }}</strong>."</p>
              <p class="script-line">"Write the affix and its meaning on your affix page."</p>
              
              <!-- Word Breakdowns for Example Words -->
              <div v-if="'wordBreakdowns' in affix && affix.wordBreakdowns && affix.wordBreakdowns.length > 0" class="affix-word-breakdowns-teacher">
                <p class="script-note"><strong>Word Breakdowns:</strong></p>
                <div v-for="(breakdown, wordIdx) in affix.wordBreakdowns" :key="wordIdx" class="word-breakdown-teacher">
                  <p class="script-line"><strong>{{ breakdown.word }}</strong> = <strong>{{ breakdown.affix }}</strong> ({{ breakdown.affixMeaning }}) + <strong>{{ breakdown.root }}</strong> ({{ breakdown.rootMeaning }})</p>
                  <p v-if="breakdown.combinedMeaning" class="script-line combined-meaning-line"><strong>Combined Meaning:</strong> {{ breakdown.combinedMeaning }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Closing -->
          <div class="script-section closing-section">
            <h3>Closing</h3>
            <p class="script-line">"Today you reviewed words you already know, learned new words, and learned word parts that help unlock meaning."</p>
            <p class="script-line">"Tomorrow, we will look closely at sentences with these words and see how the words work together."</p>
          </div>
        </div>

        <!-- Compact Teacher Reference (No Script) -->
        <div v-else-if="isCompactVersion" class="compact-teacher-version">
          <h3>Vocabulary Review Routine</h3>
          <p class="routine-note">For each review word:</p>
          <ol class="compact-list">
            <li>Say the word</li>
            <li>State the meaning</li>
            <li>Give an example</li>
            <li>Check that your definition and picture still make sense</li>
          </ol>
          
          <hr class="section-divider" />
          
          <h3>New Vocabulary Words</h3>
          <p class="routine-note"><strong>Vocabulary Routine (Use for EVERY New Word):</strong></p>
          <ol class="compact-list">
            <li>Say the word (hand under chin or clap syllables)</li>
            <li>Read and spell the word</li>
            <li>Air write the word</li>
            <li>Write the word</li>
            <li>Complete the vocabulary organizer:
              <ul>
                <li>Definition</li>
                <li>Part of speech</li>
                <li>It is / It is not</li>
                <li>Sentence</li>
                <li>Picture</li>
              </ul>
            </li>
          </ol>
          
          <p class="routine-note"><strong>Reflection Scale:</strong></p>
          <ul class="compact-list reflection-options">
            <li>❓ Never heard it</li>
            <li>👀 Heard it before</li>
            <li>🧠 Know what it means</li>
            <li>⭐ Can use and explain it</li>
          </ul>
          
          <hr class="section-divider" />
          
          <div v-for="(word, index) in content.vocab" :key="index" class="vocab-compact">
            <h4>Word {{ index + 1 }}: {{ word.word }}</h4>
            <p><strong>Definition:</strong> {{ word.definition }}</p>
            <p><strong>Example Sentence:</strong> "{{ word.exampleSentence || '' }}"</p>
            <p v-if="word.partOfSpeech"><strong>Part of Speech:</strong> {{ word.partOfSpeech }}</p>
            
          </div>
          
          <hr class="section-divider" />
          
          <h3>Affixes</h3>
          <p class="routine-note"><strong>Affix Routine:</strong></p>
          <ol class="compact-list">
            <li>Read the affix</li>
            <li>Learn the meaning</li>
            <li>Read example words</li>
            <li>Identify words that use the affix</li>
          </ol>
          
          <div v-for="(affix, index) in content.affixes.slice(0, 2)" :key="index" class="affix-compact">
            <h4>Affix {{ index + 1 }}: {{ affix.affix }}</h4>
            <p><strong>Meaning:</strong> {{ affix.meaning }}</p>
            <p v-if="'note' in affix && affix.note" class="affix-note-compact"><strong>Note:</strong> {{ affix.note }}</p>
            <p><strong>Examples:</strong> {{ affix.examples.join(', ') }}</p>
            
            <!-- Word Breakdowns -->
            <div v-if="'wordBreakdowns' in affix && affix.wordBreakdowns && affix.wordBreakdowns.length > 0" class="affix-word-breakdowns-compact">
              <p class="routine-note"><strong>Word Breakdowns:</strong></p>
              <div v-for="(breakdown, wordIdx) in affix.wordBreakdowns" :key="wordIdx" class="word-breakdown-compact">
                <p><strong>{{ breakdown.word }}</strong> = <strong>{{ breakdown.affix }}</strong> ({{ breakdown.affixMeaning }}) + <strong>{{ breakdown.root }}</strong> ({{ breakdown.rootMeaning }})</p>
                <p v-if="breakdown.combinedMeaning" class="combined-meaning-compact"><strong>Combined Meaning:</strong> {{ breakdown.combinedMeaning }}</p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Student Version: Simplified vocab -->
        <div v-else class="student-vocab-section">
          <h3>Review Vocabulary</h3>
          <p class="vocab-list">{{ content.vocab.slice(0, 2).map(v => v.word).join(', ') }}</p>
          
          <hr style="margin: 2rem 0; border: none; border-top: 2px solid #e2e8f0;" />
          
          <h3>New Vocabulary Words</h3>
          <div v-for="(word, index) in content.vocab.slice(2)" :key="index" class="vocab-item-student">
            <h4>{{ index + 3 }}. {{ word.word }}</h4>
            <p class="definition-line"><strong>Definition:</strong> {{ word.definition }}</p>
            <p class="context-sentence"><strong>Sentence from text:</strong> "{{ word.exampleSentence || '' }}"</p>
            
            <div class="student-work-space">
              <p><strong>Part of Speech:</strong> <span class="blank-line-short"></span></p>
            </div>
          </div>
          
          <h3>Affixes</h3>
          <div v-for="(affix, index) in content.affixes.slice(0, 2)" :key="index" class="affix-item-student">
            <p><strong>{{ affix.affix }}</strong> = {{ affix.meaning }}</p>
            <p v-if="'note' in affix && affix.note" class="affix-note-student"><em>{{ affix.note }}</em></p>
            <p class="examples-line">Examples: {{ affix.examples.join(', ') }}</p>
            
            <!-- Word Breakdowns for Students -->
            <div v-if="'wordBreakdowns' in affix && affix.wordBreakdowns && affix.wordBreakdowns.length > 0" class="affix-word-breakdowns-student">
              <p class="breakdown-title"><strong>Word Breakdowns:</strong></p>
              <div v-for="(breakdown, wordIdx) in affix.wordBreakdowns" :key="wordIdx" class="word-breakdown-student">
                <p><strong>{{ breakdown.word }}</strong> = <strong>{{ breakdown.affix }}</strong> ({{ breakdown.affixMeaning }}) + <strong>{{ breakdown.root }}</strong> ({{ breakdown.rootMeaning }})</p>
                <p v-if="breakdown.combinedMeaning" class="combined-meaning-student"><strong>Combined Meaning:</strong> {{ breakdown.combinedMeaning }}</p>
              </div>
            </div>
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
        <p class="section-note">Sentence Structure Analysis (Nancy Hennessy / Reading Comprehension Blueprint style)</p>
        
        <!-- Teacher Script -->
        <div v-if="isTeacherVersion && !isCompactVersion" class="day-two-teacher-content">
          <div class="script-section" style="break-after: avoid;break-before: avoid;break-inside: avoid;">
            <h3>Day 2 Teacher Script</h3>
            <p class="script-note"><strong>Opening Routine:</strong></p>
            <p class="script-line">"Today we will look closely at sentences with our vocabulary words and see how the words work together."</p>
            <p class="script-line">"Each word has a job; words answer questions that build meaning."</p>
            
            <p class="script-note"><strong>Instructional Note:</strong> During the initial 2–3 weeks, the teacher models and provides guided practice for all components. As students demonstrate understanding of expectations and procedures, responsibility gradually shifts to guided practice, with continued teacher feedback and support as needed.</p>
          </div>
          
          <!-- Sentence Analysis for Each Vocab Word -->
          <div v-for="(word, index) in content.vocab.slice(0, 3)" :key="index" class="word-sentence-analysis">
            <h4>Word {{ index + 1 }}: {{ word.word }}</h4>
            
            <div class="routine-step">
              <p class="script-note"><strong>Student-friendly definition:</strong></p>
              <p class="definition-display">{{ word.definition }}</p>
            </div>
            
            <div class="routine-step">
              <p class="script-note"><strong>Sentence from the text:</strong></p>
              <p class="sentence-display">"{{ word.exampleSentence || '[Sentence needed]' }}"</p>
            </div>
            
            <div class="routine-step">
              <h5>Sentence Sorting Routine:</h5>
              <p class="script-line">1) "Read the sentence aloud."</p>
              <p class="script-line">2) "Let's ask the 6 functional questions in order and place the matching word or phrase under the correct category."</p>
              <p class="script-note"><em>Goal: Sentence comprehension through functional syntax analysis - understanding how words function helps students understand what the sentence is about.</em></p>
              
              <div class="sorting-questions">
                <p class="script-line"><strong>Question 1: Who or what?</strong> (noun-subject)</p>
                <p class="explanation">👉 The actors or things the sentence is about</p>
                <p class="teacher-answer" v-if="word.sortingKey?.whoWhat">Teacher Answer: {{ Array.isArray(word.sortingKey.whoWhat) ? word.sortingKey.whoWhat.join(', ') : word.sortingKey.whoWhat }}</p>
                
                <p class="script-line"><strong>Question 2: Doing or did?</strong> (verb-predicate)</p>
                <p class="explanation">👉 The action or state of being</p>
                <p class="teacher-answer" v-if="word.sortingKey?.doingDid">Teacher Answer: {{ Array.isArray(word.sortingKey.doingDid) ? word.sortingKey.doingDid.join(', ') : word.sortingKey.doingDid }}</p>
                
                <p class="script-line"><strong>Question 3: Which one, what kind, how many?</strong> (adjective-modifies noun)</p>
                <p class="explanation">👉 Describing the nouns (Include: the, a, an, this, his, her)</p>
                <p class="teacher-answer" v-if="word.sortingKey?.whichWhatKind">Teacher Answer: {{ Array.isArray(word.sortingKey.whichWhatKind) ? word.sortingKey.whichWhatKind.join(', ') : word.sortingKey.whichWhatKind }}</p>
                
                <p class="script-line"><strong>Question 4: Where, when, how, why?</strong> (adverb-modifies verb)</p>
                <p class="explanation">👉 Circumstances of the action</p>
                <p class="teacher-answer" v-if="word.sortingKey?.whereWhenHowWhy">Teacher Answer: {{ Array.isArray(word.sortingKey.whereWhenHowWhy) ? word.sortingKey.whereWhenHowWhy.join(', ') : word.sortingKey.whereWhenHowWhy }}</p>
                
                <p class="script-line"><strong>Question 5: What is the relationship?</strong> (preposition)</p>
                <p class="explanation">👉 Direction, location, or connection (e.g., of, about, from)</p>
                <p class="teacher-answer" v-if="word.sortingKey?.relationship">Teacher Answer: {{ Array.isArray(word.sortingKey.relationship) ? word.sortingKey.relationship.join(', ') : word.sortingKey.relationship }}</p>
                
                <p class="script-line"><strong>Question 6: What connects?</strong> (conjunction)</p>
                <p class="explanation">👉 Words that glue parts together (e.g., and, or, but)</p>
                <p class="teacher-answer" v-if="word.sortingKey?.glue">Teacher Answer: {{ Array.isArray(word.sortingKey.glue) ? word.sortingKey.glue.join(', ') : word.sortingKey.glue }}</p>
              </div>
              
              <p class="script-line">3) "Direct students to place the matching word/phrase card under the correct category."</p>
              <p class="script-line">4) Quick check: "Show me the card for [specific word/phrase]."</p>
              <p class="script-line">5) Final comprehension: "Now tell me - what is this sentence about?" (Student uses the sorted cards to explain meaning)</p>
            </div>
            
            <div v-if="word.wordPhraseCards && word.wordPhraseCards.length > 0" class="word-cards-section">
              <p class="script-note"><strong>Word/Phrase Cards for cutting:</strong></p>
              <div class="cards-display">
                <span v-for="(card, cardIdx) in word.wordPhraseCards" :key="cardIdx" class="card-item">{{ card }}</span>
              </div>
            </div>
            
            <div class="word-divider"></div>
          </div>
        </div>
        
        <!-- Compact Teacher Reference for Day 2 -->
        <div v-else-if="isCompactVersion" class="compact-day2">
          <h3>Sentence Analysis Routine</h3>
          <p class="routine-note">Use this routine for EACH sentence:</p>
          <ol class="compact-list">
            <li>Read the sentence aloud</li>
            <li>Sort words using the 6 questions</li>
            <li><strong>Final comprehension:</strong> <em>Now tell me — what is this sentence about?</em></li>
          </ol>
          
          <hr class="section-divider" />
          
          <div v-for="(word, index) in content.vocab.slice(0, 3)" :key="index" class="sentence-compact">
            <h4>Sentence {{ index + 1 }}: {{ word.word }}</h4>
            <p class="sentence-text">"{{ word.exampleSentence || '' }}"</p>
            
            <p class="section-label"><strong>Word Sort:</strong></p>
            <ul class="sorting-compact">
              <li v-if="word.sortingKey?.whoWhat"><strong>Who or what?</strong> {{ Array.isArray(word.sortingKey.whoWhat) ? word.sortingKey.whoWhat.join(', ') : word.sortingKey.whoWhat }}</li>
              <li v-if="word.sortingKey?.doingDid"><strong>Doing or did?</strong> {{ Array.isArray(word.sortingKey.doingDid) ? word.sortingKey.doingDid.join(', ') : word.sortingKey.doingDid }}</li>
              <li v-if="word.sortingKey?.whichWhatKind"><strong>Which one / what kind?</strong> {{ Array.isArray(word.sortingKey.whichWhatKind) ? word.sortingKey.whichWhatKind.join(', ') : word.sortingKey.whichWhatKind }}</li>
              <li v-if="word.sortingKey?.whereWhenHowWhy"><strong>Where / when / how?</strong> {{ Array.isArray(word.sortingKey.whereWhenHowWhy) ? word.sortingKey.whereWhenHowWhy.join(', ') : word.sortingKey.whereWhenHowWhy }}</li>
              <li v-if="word.sortingKey?.relationship"><strong>Relationship words:</strong> {{ Array.isArray(word.sortingKey.relationship) ? word.sortingKey.relationship.join(', ') : word.sortingKey.relationship }}</li>
              <li v-if="word.sortingKey?.glue"><strong>Connecting words:</strong> {{ Array.isArray(word.sortingKey.glue) ? word.sortingKey.glue.join(', ') : word.sortingKey.glue }}</li>
            </ul>
          </div>
        </div>
        
        <!-- Student Version: 4-Column Sorting Tables -->
        <div v-else class="student-day2-content">
          <p class="directions"><strong>Directions:</strong> Sort the word/phrase cards into the correct columns. Each word has a job!</p>
          
          <div v-for="(word, index) in content.vocab.slice(0, 3)" :key="index" class="student-sorting-activity">
            <h4>{{ index + 1 }}. {{ word.word }}</h4>
            <p class="definition-line">{{ word.definition }}</p>
            <p class="sentence-line"><strong>Sentence from the text:</strong> "{{ word.exampleSentence || '' }}"</p>
            
            <!-- 4-Column Sorting Table -->
            <table class="sorting-table">
              <thead>
                <tr>
                  <th>Who or what?<br><small>noun-subject</small></th>
                  <th>Doing or did?<br><small>verb-predicate</small></th>
                  <th>Which/what kind/how many?<br><small>adjective</small></th>
                  <th>Where/when/how/why?<br><small>adverb</small></th>
                  <th>Relationship?<br><small>preposition</small></th>
                  <th>Connects?<br><small>conjunction</small></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="sort-cell"></td>
                  <td class="sort-cell"></td>
                  <td class="sort-cell"></td>
                  <td class="sort-cell"></td>
                  <td class="sort-cell"></td>
                  <td class="sort-cell"></td>
                </tr>
              </tbody>
            </table>
            
            <!-- Word Cards to Cut Out -->
            <div v-if="word.wordPhraseCards && word.wordPhraseCards.length > 0" class="cut-cards-section">
              <p><strong>Cut out these word/phrase cards:</strong></p>
              <div class="cut-cards-grid">
                <div v-for="(card, cardIdx) in word.wordPhraseCards" :key="cardIdx" class="cut-card">
                  {{ card }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- DAY 3: Teacher Read + Student Read + Inference Organizer -->
      <div class="print-section page-break">
        <h2>Day 3: Teacher Read + Student Read + Inference Organizer</h2>
        
        <!-- Teacher Script -->
        <div v-if="isTeacherVersion && !isCompactVersion" class="day-three-teacher-content">
          <div class="script-section">
            <h3>Day 3 Teacher Script</h3>
            
            <div class="routine-step">
              <h5>Step 1: Vocabulary Review</h5>
              <p class="script-line">"Let's review our vocabulary words from Day 1."</p>
              
              <!-- Vocabulary & Affix Matching Practice -->
              <div class="vocab-practice">
                <h4>Vocabulary & Affix Matching (Review)</h4>
                <p class="script-note">Students match words/affixes to definitions as warm-up.</p>
                <div class="matching-section">
                  <div class="matching-column">
                    <div v-for="(word, index) in combinedVocabAffixes" :key="index">
                      {{ index + 1 }}. {{ word.word }}
                    </div>
                  </div>
                  <div class="matching-column">
                    <p><strong>Word Bank (Shuffled)</strong></p>
                    <div v-for="(word, index) in shuffledWordBank" :key="index">
                      {{ String.fromCharCode(65 + index) }}. {{ word.definition }}
                    </div>
                  </div>
                </div>
                <p class="teacher-answer"><strong>Answer Key:</strong> {{ matchingAnswerKey }}</p>
              </div>
            </div>
            
            <div class="routine-step">
              <h5>Step 2: Teacher Models Reading</h5>
              <p class="script-line">"Now I'm going to read the passage aloud. Follow along and listen to how I read."</p>
              <p class="script-note">Teacher reads the passage with expression and appropriate pacing.</p>
            </div>
            
            <div class="routine-step">
              <h5>Step 3: Student Rereads</h5>
              <p class="script-line">"Now you will read the passage aloud."</p>
              <p class="script-note">Provide corrective feedback as needed during student reading.</p>
            </div>
            
            <div class="routine-step">
              <h5>Step 4: Inference Organizer</h5>
              <p class="script-line">"Let's answer some questions about the passage. Some answers are right in the text (literal). Some we need to figure out using clues (inferential)."</p>
              <p class="script-note">Guide students through the inference organizer questions below.</p>
            </div>
          </div>
        </div>
        
        <!-- Tier 2 Words Pre-Teaching (Before Day 3 Passage) -->
        <div v-if="content.weeklyPassage?.tier2Words && content.weeklyPassage.tier2Words.length > 0" class="tier2-preteach">
          <h3>Tier 2 Academic Vocabulary (Pre-Teach Before Reading)</h3>
          <p class="tier2-note">Teach these words before students read the passage:</p>
          <div v-for="(t2word, idx) in content.weeklyPassage.tier2Words" :key="idx" class="tier2-word-box">
            <p class="tier2-word"><strong>{{ idx + 1 }}. {{ t2word.word }}</strong></p>
            <p class="tier2-definition">{{ t2word.definition }}</p>
            <p v-if="t2word.reasoning && (isTeacherVersion || isCompactVersion)" class="tier2-reasoning">
              <em>Why tier 2:</em> {{ t2word.reasoning }}
            </p>
          </div>
        </div>
        
        <!-- Compact Teacher Reference for Day 3 -->
        <div v-if="isCompactVersion" class="compact-day3">
          <div class="routine-step">
            <h5>Step 1: Vocabulary Review</h5>
            <!-- Vocabulary Matching Practice -->
            <div class="vocab-practice">
              <h4>Vocabulary Matching (Review)</h4>
              <div class="matching-section">
                <div class="matching-column">
                  <div v-for="(word, index) in content.vocab.slice(0, 6)" :key="index">
                    {{ index + 1 }}. {{ word.word }}
                  </div>
                </div>
                <div class="matching-column">
                  <p><strong>Word Bank</strong></p>
                  <div v-for="(word, index) in content.vocab.slice(0, 6)" :key="index">
                    {{ String.fromCharCode(65 + index) }}. {{ word.definition }}
                  </div>
                </div>
              </div>
              <p class="teacher-answer"><strong>Answer Key:</strong> 1-A, 2-B, 3-C, 4-D, 5-E, 6-F</p>
            </div>
          </div>
          
          <div class="routine-step">
            <h5>Step 2: Teacher Models Reading</h5>
          </div>
          
          <div class="routine-step">
            <h5>Step 3: Student Rereads</h5>
          </div>
          
          <div class="routine-step">
            <h5>Step 4: Inference Organizer</h5>
          </div>
        </div>
        
        <!-- Passage Section (Day 3 - Single Display) -->
        <div v-if="content.weeklyPassage" class="passage-section">
          <h3>{{ content.weeklyPassage.title }}</h3>
          <p class="word-count"><strong>Word Count:</strong> {{ calculateWordCount(content.weeklyPassage.text) }} words</p>
          <div class="passage-text">{{ content.weeklyPassage.text }}</div>
        </div>
        
        <!-- Vocabulary Matching (Student Version) -->
        <div v-if="!isTeacherVersion && !isCompactVersion" class="vocab-practice">
          <h4>Vocabulary Review - Match the Words</h4>
          <div class="matching-section">
            <div class="matching-column">
              <div v-for="(word, index) in content.vocab.slice(0, 6)" :key="index">
                {{ index + 1 }}. {{ word.word }} _____
              </div>
            </div>
            <div class="matching-column">
              <p><strong>Word Bank</strong></p>
              <div v-for="(word, index) in content.vocab.slice(0, 6)" :key="index">
                {{ String.fromCharCode(65 + index) }}. {{ word.definition }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Inference Organizer Questions -->
        <div class="questions-section">
          <h3>Inference Questions</h3>
          <p v-if="!isTeacherVersion && !isCompactVersion" class="directions">Answer these literal and inferential questions about the passage.</p>
          <div v-for="(q, index) in content.day3Questions" :key="index" class="question-item">
            <p><strong>{{ index + 1 }}.</strong> {{ q.prompt }} 
              <span v-if="isTeacherVersion && !isCompactVersion" class="question-type-badge">{{ q.type }}</span>
              <span v-if="isCompactVersion" class="question-type-badge">{{ q.type }}</span>
            </p>
            <div v-if="!isTeacherVersion && !isCompactVersion" class="answer-space">
              <div class="answer-line"></div>
              <div class="answer-line"></div>
            </div>
            <div v-else-if="isTeacherVersion || isCompactVersion" class="teacher-answer-box">
              <p class="answer-label">Expected Answer:</p>
              <p class="answer-text">{{ q.rubric || '(Answer key not provided)' }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- DAY 4: Student Read + Cause/Effect + Main Idea -->
      <div class="print-section page-break">
        <h2>Day 4: Student Read + Cause/Effect Organizer</h2>
        
        <!-- Teacher Script -->
        <div v-if="isTeacherVersion && !isCompactVersion" class="day-four-teacher-content">
          <div class="script-section">
            <h3>Day 4 Teacher Script</h3>
            
            <div class="routine-step">
              <h5>Step 1: Student Rereads Passage</h5>
              <p class="script-line">"Read the passage aloud one more time."</p>
              <p class="script-note">Student reads; teacher provides feedback.</p>
            </div>
            
            <div class="routine-step">
              <h5>Step 2: Vocabulary Fill-in-the-Blank Review</h5>
              <p class="script-line">"Fill in the blank with the correct vocabulary word."</p>
              <p class="script-note">Students complete cloze sentences using this week's vocabulary.</p>
              
              <div class="word-bank-box">
                <p><strong>Word Bank:</strong></p>
                <p class="word-bank-list">{{ content.vocab.slice(0, 5).map(v => v.word).join(', ') }}</p>
              </div>
              
              <div class="cloze-section">
                <div v-for="(cloze, index) in clozeSentences" :key="index" class="cloze-item">
                  <p class="cloze-sentence">{{ index + 1 }}. {{ cloze.sentence }}</p>
                  <p v-if="isTeacherVersion" class="cloze-answer"><strong>Answer:</strong> {{ cloze.answer }}</p>
                </div>
              </div>
            </div>
            
            <div class="routine-step">
              <h5>Step 3: Main Idea with Evidence</h5>
              <p class="script-line">"What is the main idea of this passage? Give me 2-3 details from the text that prove it."</p>
              
              <!-- Main Idea Teacher Answer Key -->
              <div v-if="content.weeklyPassage?.mainIdeaAnswer" class="main-idea-answer-key">
                <h4>Main Idea - Teacher Answer Key</h4>
                <p class="script-note"><strong>Question:</strong> "What is the main idea of this passage? Give me 2-3 details from the text that prove it."</p>
                
                <p class="script-note"><strong>Expected Answer:</strong></p>
                <p class="main-idea-text">{{ content.weeklyPassage.mainIdeaAnswer.mainIdea }}</p>
                
                <p class="script-note"><strong>Supporting Details (look for these in student response):</strong></p>
                <ul class="details-key-list">
                  <li v-for="(detail, idx) in content.weeklyPassage.mainIdeaAnswer.supportingDetails" :key="idx">
                    {{ idx + 1 }}. {{ detail }}
                  </li>
                </ul>
              </div>
              
              
            </div>
          </div>
        </div>
        
        <!-- Compact Teacher Reference for Day 4 -->
        <div v-if="isCompactVersion" class="compact-day4">
          <div class="routine-step">
            <h5>Step 1: Student Rereads Passage</h5>
          </div>
          
          <div class="routine-step">
            <h5>Step 2: Quick Vocabulary Review</h5>
          </div>
          
          <div class="routine-step">
            <h5>Step 3: Main Idea with Evidence</h5>
            <!-- Main Idea Teacher Answer Key -->
            <div v-if="content.weeklyPassage?.mainIdeaAnswer" class="main-idea-answer-key">
              <h4>Main Idea - Teacher Answer Key</h4>
              <p><strong>Question:</strong> "What is the main idea of this passage? Give me 2-3 details from the text that prove it."</p>
              
              <p><strong>Expected Answer:</strong></p>
              <p class="main-idea-text">{{ content.weeklyPassage.mainIdeaAnswer.mainIdea }}</p>
              
              <p><strong>Supporting Details (look for these in student response):</strong></p>
              <ul class="details-key-list">
                <li v-for="(detail, idx) in content.weeklyPassage.mainIdeaAnswer.supportingDetails" :key="idx">
                  {{ idx + 1 }}. {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Vocabulary Fill-in-the-Blank (All Versions for Day 4) -->
        <div class="vocab-cloze-section">
          <h3>Vocabulary Review (Fill in the Blank)</h3>
          
          <div class="word-bank-box">
            <p><strong>Word Bank:</strong></p>
            <p class="word-bank-list">{{ content.vocab.slice(0, 5).map(v => v.word).join(', ') }}</p>
          </div>
          
          <div v-for="(cloze, index) in clozeSentences" :key="index" class="cloze-item">
            <p class="cloze-sentence">{{ index + 1 }}. {{ cloze.sentence }}</p>
            <div v-if="!isTeacherVersion && !isCompactVersion" class="cloze-blank-line"></div>
            <p v-else class="cloze-answer"><strong>Answer:</strong> {{ cloze.answer }}</p>
          </div>
        </div>
        
        <!-- Passage Reference (Student Version) -->
        <div v-if="!isTeacherVersion && content.weeklyPassage" class="passage-reference">
          <h3>Reread: {{ content.weeklyPassage.title }}</h3>
          <p class="directions">Read the passage aloud again.</p>
        </div>
        
        <!-- Main Idea Section (Student Version) -->
        <div v-if="!isTeacherVersion" class="main-idea-section">
          <h3>Main Idea + Evidence</h3>
          <p class="main-idea-prompt"><strong>What is the main idea of this passage? Provide 2-3 details that prove it.</strong></p>
          <div class="main-idea-answer-space">
            <p><strong>Main Idea:</strong></p>
            <div class="answer-line"></div>
            <div class="answer-line"></div>
            
            <p><strong>Detail 1:</strong></p>
            <div class="answer-line"></div>
            
            <p><strong>Detail 2:</strong></p>
            <div class="answer-line"></div>
            
            <p><strong>Detail 3 (optional):</strong></p>
            <div class="answer-line"></div>
          </div>
        </div>
        
        <!-- Teacher Assessment Grid (Full Teacher Version) -->
        <div v-if="isTeacherVersion && !isCompactVersion" class="teacher-assessment-grid">
          <h4>Teacher Assessment</h4>
          <table class="assessment-table">
            <thead>
              <tr>
                <th>Level</th>
                <th>Independent</th>
                <th>With Support</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main idea + 2+ details</td>
                <td class="checkbox-cell">☐</td>
                <td class="checkbox-cell">☐</td>
              </tr>
              <tr>
                <td>Main idea + 1 detail</td>
                <td class="checkbox-cell">☐</td>
                <td class="checkbox-cell">☐</td>
              </tr>
              <tr>
                <td>Partial understanding</td>
                <td class="checkbox-cell">☐</td>
                <td class="checkbox-cell">☐</td>
              </tr>
              <tr>
                <td>Did not know</td>
                <td class="checkbox-cell">☐</td>
                <td class="checkbox-cell">☐</td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>

      <!-- DAY 5: Reading Assessment + Vocab Spiral -->
      <div class="print-section page-break">
        <h2>Day 5: Reading Assessment + Vocab Spiral</h2>
        
        <!-- Tier 2 Words Pre-Teaching (Before Passage) -->
        <div v-if="content.fridayPassage?.tier2Words && content.fridayPassage.tier2Words.length > 0" class="tier2-preteach">
          <h3>Tier 2 Academic Vocabulary (Pre-Teach Before Reading)</h3>
          <p class="tier2-note">Teach these words before students read the passage:</p>
          <div v-for="(t2word, idx) in content.fridayPassage.tier2Words" :key="idx" class="tier2-word-box">
            <p class="tier2-word"><strong>{{ idx + 1 }}. {{ t2word.word }}</strong></p>
            <p class="tier2-definition">{{ t2word.definition }}</p>
            <p v-if="t2word.reasoning && (isTeacherVersion || isCompactVersion)" class="tier2-reasoning">
              <em>Why tier 2:</em> {{ t2word.reasoning }}
            </p>
          </div>
        </div>
        
        <div v-if="content.fridayPassage && !isCompactVersion" class="passage-section">
          <h3>{{ content.fridayPassage.title }}</h3>
          <p class="word-count"><strong>Word Count:</strong> {{ calculateWordCount(content.fridayPassage.text) }} words</p>
          
          <div class="passage-text">{{ content.fridayPassage.text }}</div>
        </div>
        
        <!-- Compact: Full passage included -->
        <div v-if="content.fridayPassage && isCompactVersion" class="passage-section">
          <h3>{{ content.fridayPassage.title }}</h3>
          <p class="word-count"><strong>Word Count:</strong> {{ calculateWordCount(content.fridayPassage.text) }} words</p>
          <div class="passage-text">{{ content.fridayPassage.text }}</div>
        </div>

        <!-- Assessment Questions -->
        <div class="questions-section">
          <h3>Reading Comprehension Questions</h3>
          <div v-for="(q, index) in content.day5Questions" :key="index" class="question-item">
            <p><strong>{{ index + 1 }}.</strong> {{ q.prompt }} 
              <span v-if="isTeacherVersion && !isCompactVersion" class="question-type-badge">{{ q.type }}</span>
              <span v-if="isCompactVersion" class="question-type-badge">{{ q.type }}</span>
            </p>
            <div v-if="!isTeacherVersion && !isCompactVersion" class="answer-space">
              <div class="answer-line"></div>
              <div class="answer-line"></div>
            </div>
            <div v-else-if="isTeacherVersion || isCompactVersion" class="teacher-answer-box">
              <p class="answer-label">Expected Answer:</p>
              <p class="answer-text">{{ q.rubric || '(Answer key not provided)' }}</p>
            </div>
          </div>
        </div>
        
        <!-- Reading Assessment Tracking -->
        <div v-if="isTeacherVersion || isCompactVersion" class="fluency-tracking">
          <h3>Reading Assessment (Teacher Recording Form)</h3>
          <div class="tracking-grid">
            <fieldset>
              <legend>Comprehension</legend>
            <div class="tracking-item">
              <label>correct (literal):</label>
              <div class="tracking-box"></div>
            </div>
            <div class="tracking-item">
              <label>Correct (infern.)</label>
              <div class="tracking-box"></div>
            </div>
            <div class="tracking-item">
              <label>Total:</label>
              <div class="tracking-box"></div>
            </div>
            </fieldset>
            <fieldset>
              <legend>Fluency: rate</legend>
            
            <div class="tracking-item">
              <label>Time (sec):</label>
              <div class="tracking-box"></div>
            </div>
            <div class="tracking-item">
              <label>WPM:</label>
              <div class="tracking-box"></div>
              <p class="formula">WPM = ({{ calculateWordCount(content.fridayPassage?.text || '') }} words ÷ seconds) × 60</p>
            </div>
            </fieldset>
          </div>
          
          <div v-if="isTeacherVersion || isCompactVersion" class="error-tracking">
            <fieldset>
              <legend>Reading Errors (for accuracy calculation)</legend>
            
            <div class="errors-grid">
              <div class="error-item">
                <label>Omissions:</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item">
                <label>Insertions:</label>
                <div class="error-box"></div>
              </div>
              <div class="error-item">
                <label>Substitutions:</label>
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
            </fieldset>
          </div>
        </div>
        <div class="vocab-quiz-section page-break">
          <h3>Spiral Vocabulary & Affix Assessment (Multiple Choice)</h3>
          <p v-if="!isTeacherVersion && !isCompactVersion" class="directions">Circle the correct answer for each question.</p>
          
          <!-- Vocabulary Questions -->
          <div v-for="(word, index) in content.vocab" :key="'vocab-q-' + index" class="quiz-item">
            <p class="quiz-question"><strong>{{ index + 1 }}.</strong> What does <em>{{ word.word }}</em> mean?</p>
            <div class="quiz-choices">
              <p class="choice">A. {{ word.definition }}</p>
              <p class="choice">B. {{ generateDistractor(word.word, 1) }}</p>
              <p class="choice">C. {{ generateDistractor(word.word, 2) }}</p>
              <p class="choice">D. {{ generateDistractor(word.word, 3) }}</p>
            </div>
            <p v-if="isTeacherVersion || isCompactVersion" class="quiz-answer"><strong>Answer: A</strong></p>
          </div>
          
          <!-- Affix Questions -->
          <div v-for="(affix, index) in content.affixes.slice(0, 2)" :key="'affix-q-' + index" class="quiz-item">
            <p class="quiz-question">
              <strong>{{ content.vocab.length + index + 1 }}.</strong> 
              What does the {{ affix.kind }} <em>{{ affix.affix }}</em> mean? 
              <span v-if="affix.examples && affix.examples.length > 0" class="example-hint" v-html="`(${formatAffixExample(affix.affix, affix.examples[0])})`">
              </span>
            </p>
            <div class="quiz-choices">
              <p class="choice">A. {{ affix.meaning }}</p>
              <p class="choice">B. {{ generateAffixDistractor(affix.affix, 1) }}</p>
              <p class="choice">C. {{ generateAffixDistractor(affix.affix, 2) }}</p>
              <p class="choice">D. {{ generateAffixDistractor(affix.affix, 3) }}</p>
            </div>
            <p v-if="isTeacherVersion || isCompactVersion" class="quiz-answer"><strong>Answer: A</strong></p>
          </div>
          
          <div v-if="isTeacherVersion || isCompactVersion" class="quiz-note">
            <p><strong>Scoring:</strong> {{ content.vocab.length + Math.min(content.affixes.length, 2) }} total questions</p>
            <p>Student Score: _____ / {{ content.vocab.length + Math.min(content.affixes.length, 2) }}</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
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
const isCompactVersion = computed(() => route.query.version === 'compact')

// Combined vocab + affixes for matching
const combinedVocabAffixes = computed(() => {
  const combined = [
    ...content.value.vocab.slice(0, 6).map(v => ({ word: v.word, definition: v.definition })),
    ...content.value.affixes.slice(0, 2).map(a => ({ word: a.affix, definition: a.meaning }))
  ]
  return combined.slice(0, 8)
})

// Shuffled word bank - use ref to maintain fixed shuffle
const shuffledWordBank = ref<Array<{ word: string; definition: string }>>([])
const matchingAnswerKey = ref('')

// Shuffle function that actually randomizes
function shuffleDefinitions() {
  const arr = [...combinedVocabAffixes.value]
  
  // Fisher-Yates shuffle algorithm
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  
  shuffledWordBank.value = arr
  
  // Generate answer key based on this shuffle
  const answerKey = combinedVocabAffixes.value.map((item, index) => {
    const shuffledIndex = shuffledWordBank.value.findIndex(s => s.word === item.word && s.definition === item.definition)
    return `${index + 1}-${String.fromCharCode(65 + shuffledIndex)}`
  })
  matchingAnswerKey.value = answerKey.join(', ')
}

// Watch for vocab/affix changes and reshuffle
watch([() => content.value.vocab, () => content.value.affixes], () => {
  if (content.value.vocab.length > 0) {
    shuffleDefinitions()
  }
}, { immediate: true })

// Cloze sentences for Day 4 vocab review - with more context
const clozeSentences = computed(() => {
  return content.value.vocab.slice(0, 5).map((word) => {
    // Use the actual sentence from passage if available, otherwise create contextual sentence
    let sentence = ''
    
    if (word.exampleSentence) {
      // Use actual sentence from passage, replace word with blank
      // Handle inflectional forms: griot/griots, lineage/lineages, etc.
      const wordPattern = word.word.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') // Escape special chars
      const regex = new RegExp(`\\b${wordPattern}(s|es|ed|ing|er|est|'s)?\\b`, 'gi')
      sentence = word.exampleSentence.replace(regex, '________________')
    } else {
      // Fallback: Create sentence based on definition
      const def = word.definition.toLowerCase()
      if (def.includes('story') || def.includes('tell')) {
        sentence = `The _____ helped people remember their history and culture.`
      } else if (def.includes('family') || def.includes('ancestor')) {
        sentence = `The person's _____ connects them to their ancestors.`
      } else if (def.includes('rule') || def.includes('lead')) {
        sentence = `The _____ was an important person in the community.`
      } else {
        sentence = `The text explains the meaning of _____.`
      }
    }
    
    return {
      sentence,
      answer: word.word
    }
  })
})

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

// Generate simple distractors for vocabulary MC questions
const generateDistractor = (word: string, num: number): string => {
  const distractors = [
    'A type of food or meal',
    'A person who leads or rules',
    'A place where people live',
    'Something that is very old',
    'A tool or instrument used for work',
    'A group of people working together',
    'An event or celebration',
    'A building or structure',
    'A natural feature like a river or mountain',
    'A way of doing something'
  ]
  return distractors[(word.length + num) % distractors.length]
}

// Generate simple distractors for affix MC questions
const generateAffixDistractor = (affix: string, num: number): string => {
  const distractors = [
    'before or first',
    'after or last',
    'together or with',
    'against or opposite',
    'under or below',
    'over or above',
    'again or back',
    'not or without',
    'small or tiny',
    'big or large'
  ]
  return distractors[(affix.length + num) % distractors.length]
}

// Format affix example with underline in correct position
const formatAffixExample = (affix: string, exampleWord: string): string => {
  // Remove hyphens from affix for matching
  const cleanAffix = affix.replace(/[-]/g, '')
  const cleanExample = exampleWord.toLowerCase()
  const affixLower = cleanAffix.toLowerCase()
  
  const affixIndex = cleanExample.indexOf(affixLower)
  
  if (affixIndex === -1) {
    // Affix not found in word, just return word
    return exampleWord
  }
  
  // Split word into parts and add underline HTML
  const before = exampleWord.substring(0, affixIndex)
  const affixPart = exampleWord.substring(affixIndex, affixIndex + cleanAffix.length)
  const after = exampleWord.substring(affixIndex + cleanAffix.length)
  
  return `${before}<span class="underline">${affixPart}</span>${after}`
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
  margin: 0.5rem 0 !important;
  line-height: 1.2 !important;
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
    line-height: 1;
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

ul.reflection-options{
    display: flex;
    justify-content: space-around;
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

.blank-line-short {
  display: inline-block;
  border-bottom: 2px solid #1a202c;
  min-width: 150px;
  margin-left: 0.5rem;
}

.blank-line-long {
  display: inline-block;
  border-bottom: 2px solid #1a202c;
  min-width: 400px;
  margin-left: 0.5rem;
}

.word-script-block, .script-section, .word-sentence-analysis {
  break-after: avoid;
    break-before: avoid;
    break-inside: avoid;
}
.clarification-section {
  margin: 1rem 0;
  padding: 0.75rem;
  background: #f7fafc;
  border-radius: 6px;
}
.teacher-answer-box {
    display: flex;
    gap: 10px;
    color: #48bb78;
    font-size: 12px;
    margin-left: 20px;
  
}
.clarif-text {
  margin: 0.25rem 0 0.75rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  line-height: 1.6;
  color: #2d3748;
}

.definition-line {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.write-lines {
  border-bottom: 2px solid #cbd5e0;
  height: 40px;
  margin: 0.5rem 0 1rem 0;
}

.picture-box {
  border: 2px dashed #cbd5e0;
  border-radius: 8px;
  min-height: 150px;
  margin: 0.5rem 0;
  background: #f7fafc;
}

/* Teacher Vocab Format */
.vocab-item-teacher {
  margin-bottom: 2.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
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
  line-height: 1.5;
  font-size: 1.0625rem;
  margin: 1.5rem 0;
  text-align: justify;
  white-space: pre-line; /* Preserves line breaks and paragraph spacing */
}

.vocab-practice {
 
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

}

.question-item p {
  

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
}

.tracking-grid {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: .5rem;
  margin-top: 1rem;
}
.tracking-grid .tracking-item:nth-child(3) .tracking-box {
    content: "____/5";
    display: flex;
    justify-content: center;
    
}

.tracking-grid fieldset:first-of-type{
  height: auto;
  background: rgb(241, 253, 241);
  border-radius: 8px;
  padding: 1rem;
  gap:calc(1rem * 0.2);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.tracking-grid fieldset:nth-of-type(2){
  background: rgb(247, 247, 222);
  border-radius: 8px;
  padding: 1rem;
    display: grid;
    gap:calc(1rem * 0.2);
    grid-template-columns: 1fr 1fr;
}
fieldset{
  height: min-content;
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

.error-tracking fieldset{
 
  padding: .5rem;
  background: #fff5f5;
  border-radius: 4px;
  
}

.error-tracking h4 {
  color: #c53030;
  margin-top: 0;
}

.errors-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
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

/* Removed - handled in @media print */

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
  nav, .navbar {
    display: none !important;
  }
 
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
  
  /* Modern CSS - Force page breaks for new days */
  .page-break {
    break-before: page;
  }
  
  /* CRITICAL FIX: Allow large sections to flow naturally */
  .print-section {
    break-inside: auto; /* Changed from avoid - allows natural page breaks */
  }
  
  /* Protect ONLY small atomic units (individual word blocks, sentence analyses) */
  .word-script-block,
  .word-sentence-analysis,
  .student-sorting-activity,
  .vocab-compact,
  .sentence-compact,
  .affix-compact,
  .question-item {
    break-inside: avoid;
  }
  
  /* Prevent orphaned headers */
  h2, h3, h4, h5 {
    break-after: avoid;
  }
  
  /* Keep Day 1 core instruction together if possible */
  .day-one-core {
    break-inside: avoid;
  }
  
  /* Semantic maps on new page */
  .semantic-maps-section,
  .semantic-maps-wrapper {
    break-before: page;
  }
  
  .formula {
    font-size: 8pt;
  }
}

/* Day 2: Words Working Together Styles */
.word-sentence-analysis {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #4a90e2;
}

.definition-display {
  font-weight: 600;
  color: #2d3748;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: #edf2f7;
  border-radius: 4px;
}

.sentence-display {
  font-style: italic;
  color: #4a5568;
  margin: 0.5rem 0;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  border-left: 3px solid #667eea;
}

.sorting-questions {
  margin: 1rem 0;
  padding: 1rem;
  background: white;
  border-radius: 6px;
}

.teacher-answer {
  color: #48bb78;
  font-weight: 600;
  margin-left: 1.5rem;
  
  font-size: 0.9rem;
}

.explanation {
  color: #718096;
  font-size: 0.85rem;
  margin-left: 1.5rem;
  margin-top: 0.25rem;
  font-style: italic;
}

.cards-display {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.card-item {
  padding: 0.25rem 0.75rem;
  background: #fff5f5;
  border: 2px dashed #cbd5e0;
  border-radius: 4px;
  font-size: 0.9rem;
}

/* Student Sorting Activity */
.student-sorting-activity {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
}

.sorting-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  background: white;
}

.sorting-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.75rem 0.5rem;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.sorting-table th small {
  display: block;
  font-size: 0.7rem;
  font-weight: 400;
  margin-top: 0.25rem;
  opacity: 0.9;
}

.sorting-table .sort-cell {
  height: 80px;
  border: 2px solid #cbd5e0;
  vertical-align: top;
  padding: 0.5rem;
}

.cut-cards-section {
  margin-top: 1.5rem;
  padding: 1rem;
  background: white;
  border: 2px dashed #cbd5e0;
  border-radius: 6px;
}

.cut-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.75rem;
  margin-top: 0.75rem;
}

.cut-card {
  padding: 0.5rem;
  background: #f7fafc;
  border: 2px dashed #cbd5e0;
  border-radius: 6px;
  text-align: center;
  font-size: 0.9rem;
  font-weight: 500;
}

/* Day 3 & 4 Styles */
.question-type-badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  background: #edf2f7;
  color: #4a5568;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.5rem;
  text-transform: uppercase;
}

.passage-reference {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 4px solid #48bb78;
}

/* Day 4: Assessment Scale */
.assessment-scale {
  margin: 1.5rem 0;
  padding: 1.5rem;
  background: #fff5f5;
  border-radius: 8px;
  border: 2px solid #fc8181;
}

.assessment-scale h4 {
  margin: 0 0 1rem 0;
  color: #c53030;
  font-size: 1.1rem;
}

.scale-list {
  list-style: none;
  padding: 0;
  margin: 0.75rem 0;
}

.scale-list li {
  padding: 0.5rem 0;
  margin-left: 0;
  font-size: 0.95rem;
  line-height: 1.6;
}

.main-idea-section {
  margin-top: 2rem;
  padding: 1.5rem;
  background: #f0f4f8;
  border-radius: 8px;
  border-left: 4px solid #4a90e2;
}

.main-idea-prompt {
  font-size: 1.05rem;
  font-weight: 600;
  color: #1a202c;
  margin-bottom: 1rem;
}

.main-idea-answer-space {
  background: white;
  padding: 1.5rem;
  border-radius: 6px;
  margin: 1rem 0;
}

.main-idea-answer-space p {
  font-weight: 600;
  color: #2d3748;
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

.teacher-assessment-grid {
  margin-top: 1.5rem;
  padding: 1rem;
  background: white;
  border-radius: 6px;
}

.assessment-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.75rem;
}

.assessment-table th,
.assessment-table td {
  border: 1px solid #cbd5e0;
  padding: 0.75rem;
  text-align: left;
}

.assessment-table th {
  background: #edf2f7;
  font-weight: 600;
  color: #2d3748;
}

.checkbox-cell {
  text-align: center;
  font-size: 1.2rem;
  width: 100px;
}

/* Worksheet Order List */
.worksheet-order-list {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.worksheet-order-list li {
  margin-bottom: 1rem;
  padding-left: 0.5rem;
  line-height: 1.6;
}

.worksheet-order-list li strong {
  color: #2d3748;
  font-size: 0.95rem;
}

.sub-note {
  margin: 0.25rem 0 0 0.5rem;
  color: #718096;
  font-size: 0.85rem;
  font-style: italic;
  line-height: 1.5;
}

/* Compact Teacher Reference Version */
.compact-teacher-version {
  font-size: 0.95rem;
}

.vocab-compact {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 3px solid #4a90e2;
}

.vocab-compact h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.vocab-compact p {
  margin: 0.25rem 0;
  line-height: 1.6;
}

.clarification-compact {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
}

.clarification-compact p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #4a5568;
}

.affix-compact {
  margin-bottom: 1rem;
  padding: 0.75rem;
  background: #f7fafc;
  border-radius: 6px;
}

.affix-compact p {
  margin: 0.25rem 0;
}

.examples-compact {
  color: #718096;
  font-size: 0.9rem;
}

.compact-day2 .sentence-compact {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
  border-left: 3px solid #667eea;
}

.compact-day2 .sentence-compact h4 {
  margin: 0 0 0.5rem 0;
  color: #2d3748;
}

.compact-day2 .sentence-compact p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.sorting-compact {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: white;
  border-radius: 4px;
}

.sorting-compact {
  list-style: none;
  padding-left: 1rem;
  margin-top: 0.5rem;
}

.sorting-compact li {
  margin: 0.25rem 0;
  font-size: 0.9rem;
  color: #2d3748;
  line-height: 1.6;
}

.compact-list {
 
  padding-left: 1.5rem;
  line-height: 1.3;
}

.compact-list li {
  margin-bottom: 0.5rem;
}

.routine-note {
  color: #4a5568;
  font-size: 0.95rem;
  margin: 0.5rem 0;
}

.section-divider {
  border: none;
  border-top: 2px solid #e2e8f0;
  margin: 2rem 0;
}

.section-label {
  font-weight: 600;
  color: #2d3748;
  margin: 0.75rem 0 0.25rem 0;
}

.sentence-text {
  font-style: italic;
  color: #2d3748;
  margin: 0.5rem 0;
  line-height: 1.8;
}

/* Vocabulary Quiz Section */
.vocab-quiz-section {
  
  padding: .2rem;
  background: #f7fafc;
  border-radius: 12px;
  border: 3px solid #667eea;
}

.vocab-quiz-section h3 {
  color: #2d3748;
  margin: 0 0 .5rem 0;
}

.quiz-item {
  margin-bottom: .2rem;
  padding: .4rem;
  background: white;
  border-radius: 8px;
}

.quiz-question {
  font-weight: 600;
  color: #2d3748;
 
  font-size: 1rem;
  line-height: 1.6;
}

.quiz-question em {
  color: #667eea;
  font-weight: 700;
}

.quiz-choices {
  margin-left: 1.5rem;
}

.choice {
 
  line-height: 1;
  font-size: 0.95rem;
}

.quiz-answer {
  margin-top: 0.3rem;
  padding: 0.2rem .3rem;
  background: #f0fff4;
  border-left: 4px solid #48bb78;
  color: #22543d;
  font-weight: 700;
  border-radius: 4px;
}

.quiz-note {
  margin-top: 2rem;
  padding: 1rem;
  background: #fff5f5;
  border-radius: 6px;
  border-left: 3px solid #fc8181;
}

.quiz-note p {
  margin: 0.25rem 0;
  font-size: 0.95rem;
}

.example-hint {
  color: #718096;
  font-weight: 400;
  font-style: italic;
  margin-left: 0.5rem;
}

.underline {
  text-decoration: underline;
  font-weight: 700;
  color: #667eea;
}

/* Affix Word Breakdowns */
.affix-word-breakdowns-teacher,
.affix-word-breakdowns-compact,
.affix-word-breakdowns-student {
  margin-top: 1rem;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 6px;
  border-left: 3px solid #667eea;
}

.word-breakdown-teacher,
.word-breakdown-compact,
.word-breakdown-student {
  margin-bottom: 0.75rem;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
}

.word-breakdown-teacher:last-child,
.word-breakdown-compact:last-child,
.word-breakdown-student:last-child {
  margin-bottom: 0;
}

.breakdown-title {
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.combined-meaning-line,
.combined-meaning-compact,
.combined-meaning-student {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #e2e8f0;
  font-weight: 500;
  color: #2d3748;
}

.combined-meaning-line {
  color: #4a5d9e;
  font-style: italic;
}

.affix-note-display,
.affix-note-compact,
.affix-note-student,
.affix-note-browser {
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #f0f9ff;
  border-left: 3px solid #0ea5e9;
  border-radius: 4px;
  color: #075985;
  font-size: 0.9rem;
}

.affix-note-student {
  font-style: italic;
  color: #0c4a6e;
}
</style>