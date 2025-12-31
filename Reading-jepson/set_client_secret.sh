#!/bin/bash
# Script to set Google OAuth Client Secret in Firebase Functions

echo "=========================================="
echo "Setting Google OAuth Client Secret"
echo "=========================================="
echo ""
echo "Please paste your FULL client secret below."
echo "You can get it from: https://console.cloud.google.com/apis/credentials"
echo "Click on 'reading-jepson' OAuth client and create a new secret if needed."
echo ""
echo "Paste the secret and press Enter:"
read -s CLIENT_SECRET

if [ -z "$CLIENT_SECRET" ]; then
    echo "Error: No secret provided"
    exit 1
fi

cd functions
echo "$CLIENT_SECRET" | firebase functions:secrets:set GOOGLE_CLIENT_SECRET --data-file=-

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Secret set successfully!"
    echo ""
    echo "Next steps:"
    echo "1. Add http://localhost:5173/google-classroom-callback to authorized redirect URIs"
    echo "2. Redeploy the function: firebase deploy --only functions:exchangeGoogleAuthCode"
else
    echo ""
    echo "❌ Failed to set secret. Please try again."
    exit 1
fi
