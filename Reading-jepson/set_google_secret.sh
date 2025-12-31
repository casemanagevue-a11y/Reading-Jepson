#!/bin/bash
# Script to set Google OAuth Client Secret
# Usage: ./set_google_secret.sh

cd functions
echo "Please paste your Google OAuth Client Secret and press Enter:"
read -s CLIENT_SECRET
echo "$CLIENT_SECRET" | firebase functions:secrets:set GOOGLE_CLIENT_SECRET --data-file=-
echo "Secret set successfully!"
