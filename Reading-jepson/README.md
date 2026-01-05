# Reading Jepson

A comprehensive reading comprehension and vocabulary instruction platform designed for middle school students. Built with Vue.js 3, TypeScript, and Firebase, this application provides teachers with tools to deliver structured, evidence-based reading instruction following Nancy Hennessy's Reading Comprehension Blueprint framework.

---

## 📱 What This App Does

**Reading Jepson** is a web-based educational platform that helps teachers:

- **Create and manage structured 5-day reading lesson plans** with vocabulary, affixes, passages, and comprehension activities
- **Build a reusable content library** of vocabulary words, affixes, and passages organized by subject, grade, and unit
- **Assign personalized weekly lessons** to students with automatic date calculation based on school calendars
- **Generate print materials** including student workbooks, teacher scripts, and assessment forms
- **Track student progress** through fluency assessments, comprehension questions, and vocabulary mastery
- **Integrate with Google Classroom** for seamless student roster management
- **Leverage AI-powered features** for reading level estimation, inquiry question generation, and comprehension question creation

The platform eliminates repetitive data entry by allowing teachers to create content once and reuse it across multiple students and weeks, while maintaining the flexibility to customize instruction for individual learners.

---

## 📚 The Reading Comprehension Program

### Overview

The Reading Jepson program implements a **5-day structured routine** that systematically builds reading comprehension through multiple interconnected components. The program is grounded in **Nancy Hennessy's Reading Comprehension Blueprint** approach, which emphasizes explicit instruction in vocabulary, syntax, and comprehension strategies.

### How It Supports Reading Development

#### 1. **Vocabulary Development** 📖

The program provides comprehensive vocabulary instruction through multiple modalities:

- **Explicit Vocabulary Instruction**
  - 4-6 tier 2 and tier 3 vocabulary words per week
  - Student-friendly definitions with example sentences
  - Visual vocabulary organizers (semantic maps)
  - Vocabulary review routines embedded throughout the week

- **Vocabulary Inquiry Method**
  - AI-generated progressive reveal questions that guide students toward word meaning
  - "Truth bites" (small hints) that scaffold understanding
  - Inference questions that require students to synthesize clues
  - Encourages active engagement with word meaning rather than passive memorization

- **Vocabulary Integration**
  - Vocabulary words appear in weekly passages for contextual learning
  - Vocabulary review on Day 3 and Day 4
  - Vocabulary matching practice and application activities
  - Connections between vocabulary and passage comprehension

- **Morpheme Analysis (Affixes & Roots)**
  - 2 affixes per week (prefixes, suffixes, or roots)
  - Explicit instruction in affix meanings and word breakdowns
  - Up to 3 example words per affix with morpheme analysis
  - Word breakdown activities showing: affix + root = combined meaning
  - Teaching notes that explain how affixes function (e.g., "-ing does not change what the word means. It tells us the action is happening now.")

#### 2. **Syntax and Passage Comprehension** 🔤

The program explicitly teaches sentence structure and passage-level comprehension:

- **Functional Syntax Analysis (Nancy Hennessy Approach)**
  - Sentence structure analysis using a card-sorting activity
  - Students identify and categorize words by function:
    - **Who/What** (subjects)
    - **Action** (verbs)
    - **What/Where/When** (objects, prepositional phrases)
    - **Describers** (adjectives, adverbs)
  - Goal: Understanding how words function helps students understand what sentences mean
  - Progressive complexity from simple to complex sentences

- **Passage Comprehension**
  - **Day 2: First Read** - Students read the weekly passage independently and answer 6 comprehension questions
  - **Day 4: Reread** - Students reread the passage and answer main idea and detail questions
  - **Day 5: Cold Read** - Students read a new passage (Friday passage) and complete assessment questions
  - Multiple question types: literal, inferential, main idea, details
  - Questions scaffolded by day (Day 2 focuses on basic comprehension, Day 4 on deeper analysis)

- **Comprehension Question Types**
  - **Literal questions**: Direct recall of information from the text
  - **Inferential questions**: Require students to make connections and draw conclusions
  - **Main idea questions**: Help students identify central themes
  - **Detail questions**: Support main idea understanding with specific evidence

#### 3. **Reading Fluency** 📊

The program includes systematic fluency tracking and instruction:

- **Teacher Modeling (Day 3)**
  - Teacher reads the passage aloud with expression and proper phrasing
  - Students follow along, hearing correct pronunciation and prosody
  - Models fluent reading behaviors

- **Repeated Reading**
  - Day 2: First independent read
  - Day 3: Student reread after teacher model
  - Day 4: Additional reread for deeper comprehension
  - Research shows repeated reading improves fluency and comprehension

- **Fluency Tracking**
  - Blank fluency tracking forms included in print materials
  - Teachers can track words per minute (WPM)
  - Monitor accuracy and expression
  - Track progress over time

- **Cold Read Assessment (Day 5)**
  - Students read a new, unseen passage
  - Assesses transfer of skills to novel text
  - Provides authentic assessment of reading ability

#### 4. **Nancy Hennessy's Reading Comprehension Blueprint Approach** 🎯

The program is explicitly designed around Nancy Hennessy's evidence-based framework:

- **Explicit Instruction**
  - Clear, systematic teaching of vocabulary, syntax, and comprehension strategies
  - Teacher scripts provide exact language for instruction
  - No assumptions about prior knowledge

- **Functional Syntax Analysis**
  - Directly implements Hennessy's sentence structure analysis method
  - Students learn to identify word functions, not just parts of speech
  - Builds understanding of how sentence structure conveys meaning

- **Vocabulary Through Context and Morphology**
  - Combines contextual learning (words in passages) with morphological analysis (affixes/roots)
  - Inquiry method encourages active meaning construction
  - Multiple exposures across the week

- **Scaffolded Comprehension**
  - Day 2: Basic comprehension with support
  - Day 3: Teacher modeling and guided practice
  - Day 4: Deeper analysis with main idea/details
  - Day 5: Independent application to new text

- **Systematic and Cumulative**
  - 5-day routine repeated weekly
  - Skills build on each other
  - Content organized by subject, grade, and unit for coherence

#### 5. **Additional Program Features** ✨

- **Content Library System**
  - Teachers build a reusable library of vocabulary, affixes, and passages
  - Import content once, use across multiple students and weeks
  - Organized by subject (ELA, Science, History, Math), grade, and unit
  - AI-powered features for content enhancement

- **Template-Based Instruction**
  - Create reusable week templates
  - Assign templates to students with automatic date calculation
  - Customize for individual students while maintaining structure

- **Print Materials**
  - Comprehensive student workbooks
  - Teacher scripts with exact language
  - Compact teacher reference guides
  - Assessment forms and fluency trackers

- **School Calendar Integration**
  - Manage holidays, breaks, and days off
  - Automatic quarter calculation
  - Date-based assignment scheduling

- **Progress Tracking**
  - Assignment calendar view
  - Assessment data entry
  - Student progress monitoring

- **AI-Powered Features**
  - Reading level estimation (Lexile, Flesch-Kincaid, grade level)
  - Inquiry question generation for vocabulary
  - Comprehension question generation
  - Passage adjustment for reading level

---

## 🎓 Educational Philosophy

This program is designed for students who need:

- **Explicit instruction** in reading comprehension strategies
- **Systematic vocabulary development** through multiple modalities
- **Syntax awareness** to understand how sentence structure conveys meaning
- **Repeated practice** with scaffolded support
- **Structured routines** that build automaticity

The program is particularly effective for:

- Students with reading comprehension difficulties
- English language learners
- Students who need explicit instruction in vocabulary and syntax
- Middle school students (grades 6-8) working on foundational reading skills

---

## 🛠️ Technical Stack

- **Frontend**: Vue.js 3 with TypeScript
- **Build Tool**: Vite
- **Backend**: Firebase (Authentication, Firestore, Hosting)
- **AI Integration**: Google Gemini API
- **Styling**: CSS with print-optimized stylesheets

---

## 📖 Key Resources

- **Nancy Hennessy's Reading Comprehension Blueprint**: The foundational framework for this program's approach to syntax and comprehension instruction
- **Evidence-Based Practices**: The program incorporates research-supported methods including explicit instruction, repeated reading, morphological analysis, and scaffolded comprehension

---

## 🚀 Getting Started

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn
* Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/casemanagevue-a11y/Reading-Jepson.git
   cd Reading-Jepson
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Firebase Setup**
   
   You'll need to get your Firebase configuration from the Firebase Console:
   
   * Go to [Firebase Console](https://console.firebase.google.com/)
   * Select your project (or create a new one)
   * Click on the gear icon (⚙️) next to "Project Overview"
   * Select "Project settings"
   * Scroll down to "Your apps" section
   * Click the web app icon (</>)
   * Register your app with a nickname (e.g., "reading-jepson-app")
   * Copy the configuration object

4. **Set Up Environment Variables**
   
   Create a `.env` file in the root directory with your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=reading-jepson.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=reading-jepson
   VITE_FIREBASE_STORAGE_BUCKET=reading-jepson.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id-here
   ```

5. **Enable Authentication Methods**
   
   In Firebase Console:
   * Go to Authentication > Sign-in method
   * Enable "Email/Password"
   * Enable "Google" (optional, but recommended)

6. **Firestore Rules Setup**
   
   In your Firebase Console:
   * Go to Firestore Database
   * Click on "Rules" tab
   * Copy the contents of `firestore.rules` file
   * Paste and publish the rules

7. **Run the application**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:5173`

### Available Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build
* `npm run format` - Format code with Prettier
* `npm run lint` - Lint code with ESLint

---

## 📄 License

This project is licensed under the MIT License.

---

## 🆘 Support

For technical support or questions about the program, please contact the development team.

---

Built with ❤️ for educators and students
