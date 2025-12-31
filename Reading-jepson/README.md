# Reading Jepson

A Vue.js 3 + TypeScript + Firebase application built with Vite, similar to the jesponmath project structure.

## ✨ Features

* **Vue.js 3** with TypeScript
* **Vite** for fast development and building
* **Firebase Authentication** - Email/Password and Google Sign-In
* **Firestore Database** - User profiles and data storage
* **Vue Router** - Client-side routing with authentication guards
* **Composable-based Architecture** - Reusable authentication logic

## 🚀 Getting Started

### Prerequisites

* Node.js (version 16 or higher)
* npm or yarn
* Firebase project

### Installation

1. **Clone the repository** (if applicable)
   ```bash
   cd reading-jepson
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
   ```bash
   # Copy the example file
   cp .env.example .env
   ```
   
   Then edit `.env` and add your Firebase project values:
   ```env
   VITE_FIREBASE_API_KEY=your-api-key-here
   VITE_FIREBASE_AUTH_DOMAIN=reading-jepson.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=reading-jepson
   VITE_FIREBASE_STORAGE_BUCKET=reading-jepson.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id-here
   ```
   
   You can find these values in Firebase Console:
   * Go to [Firebase Console](https://console.firebase.google.com/)
   * Select your project
   * Click on the gear icon (⚙️) next to "Project Overview"
   * Select "Project settings"
   * Scroll down to "Your apps" section
   * Click the web app icon (</>) or find your existing app
   * Copy the configuration values
   
   **Note:** The `.env` file is already in `.gitignore` to keep your credentials secure.
   
   **Quick Reference:**
   - Your Firebase project ID: `reading-jepson`
   - Support email: `casemanagevue@gmail.com`
   - Get your config values from: Firebase Console > Project Settings > General > Your apps

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
   
   Or use Firebase CLI:
   ```bash
   firebase deploy --only firestore:rules
   ```

7. **Run the application**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Vue components (add your components here)
├── composables/        # Vue composables
│   └── useAuth.ts      # Authentication logic
├── firebase/           # Firebase configuration and services
│   ├── config.ts       # Firebase initialization
│   └── services.ts     # Firebase service functions
├── router/             # Vue Router configuration
│   └── index.ts        # Route definitions and guards
├── views/              # Page components
│   ├── HomeView.vue    # Home page (protected)
│   ├── LoginView.vue   # Login page
│   └── SignupView.vue  # Sign up page
├── App.vue             # Root component
├── main.ts             # Application entry point
└── style.css           # Global styles
```

## 🔧 Available Scripts

* `npm run dev` - Start development server
* `npm run build` - Build for production
* `npm run preview` - Preview production build
* `npm run format` - Format code with Prettier
* `npm run lint` - Lint code with ESLint

## 🔐 Authentication

The app includes a complete authentication system:

* **Email/Password Sign Up** - Create new accounts
* **Email/Password Sign In** - Login with existing accounts
* **Google Sign-In** - Quick authentication with Google
* **Protected Routes** - Automatic redirect to login for protected pages
* **User Profiles** - Automatically created in Firestore on signup

### Using Authentication in Components

```vue
<script setup lang="ts">
import { useAuth } from '@/composables/useAuth'

const { user, userProfile, isAuthenticated, signIn, signOut } = useAuth()
</script>
```

## 📦 Firebase Services

The `src/firebase/services.ts` file includes example services for:
* User profiles management
* Game scores (example - adapt to your needs)

You can extend these services or create new ones for your specific use case.

## 🌐 Deployment

### Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Hosting**
   ```bash
   firebase init hosting
   ```
   * Select your Firebase project
   * Set public directory to `dist`
   * Configure as single-page app: Yes
   * Set up automatic builds: No (or Yes if using GitHub Actions)

4. **Build and Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Other Platforms

The built application can be deployed to any static hosting service:
* Netlify
* Vercel
* GitHub Pages
* AWS S3 + CloudFront

## 📱 Browser Support

* Chrome (latest)
* Firefox (latest)
* Safari (latest)
* Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the Firebase Console for any configuration errors
2. Verify your Firestore rules are properly set
3. Check the browser console for JavaScript errors
4. Ensure all Firebase configuration values are properly set
5. Verify authentication methods are enabled in Firebase Console

---

Built with ❤️ using Vue.js 3, TypeScript, Vite, and Firebase

