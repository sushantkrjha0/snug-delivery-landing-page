#!/bin/bash

echo "🚀 Preparing for Render deployment..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Add all files
echo "📦 Adding files to git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Prepare for Render deployment - Remove Vercel config"

echo "✅ Ready for Render deployment!"
echo ""
echo "Next steps:"
echo "1. Push this repository to GitHub"
echo "2. Connect your GitHub repo to Render.com"
echo "3. Render will automatically detect the render.yaml file and deploy"
echo ""
echo "To push to GitHub:"
echo "git remote add origin <your-github-repo-url>"
echo "git branch -M main"
echo "git push -u origin main"
