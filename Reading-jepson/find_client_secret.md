# How to Find Your Google OAuth Client Secret

## Step 1: Go to Google Cloud Console
1. Open: https://console.cloud.google.com/apis/credentials
2. Make sure you're in the correct project

## Step 2: Find Your OAuth Client
1. Look for the OAuth 2.0 Client ID named "reading-jepson"
2. Click on it to open the details

## Step 3: View the Client Secret
- The client secret is shown in the "Client secrets" section
- It will be partially masked like: `****ZSb_`
- **Important**: If you see "Viewing and downloading client secrets is no longer available", you need to create a NEW client secret

## Step 4: If Secret is Not Visible
If you can't see the full secret (it's masked), you have two options:

### Option A: Create a New Client Secret
1. In the OAuth client details page
2. Click "ADD SECRET" or "Reset secret"
3. Copy the new secret immediately (you can only see it once!)

### Option B: Check if You Saved It
- Check your notes/documentation
- Check your password manager
- Check any .env files or config files you might have created earlier

## Step 5: Once You Have the Secret
Run this command to set it:
```bash
cd functions
echo "YOUR_FULL_CLIENT_SECRET_HERE" | firebase functions:secrets:set GOOGLE_CLIENT_SECRET --data-file=-
```

Or use the interactive script:
```bash
./set_google_secret.sh
```
