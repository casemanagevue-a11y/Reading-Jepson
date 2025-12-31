/**
 * Google Classroom Integration Service
 */

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '1092023762764-3a19kckpep90i65k8e95j2487quda0lh.apps.googleusercontent.com'
const REDIRECT_URI = `${window.location.origin}/google-classroom-callback`
const SCOPES = [
  'https://www.googleapis.com/auth/classroom.courses.readonly',
  'https://www.googleapis.com/auth/classroom.rosters.readonly',
  'https://www.googleapis.com/auth/classroom.profile.emails',
].join(' ')

const ACCESS_TOKEN_KEY = 'google_classroom_access_token'

export function getGoogleAuthUrl(): string {
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent'
  })

  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

export function hasGoogleAccessToken(): boolean {
  return !!localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function getAccessToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function setAccessToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export function clearAccessToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}
