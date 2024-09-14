#!/bin/bash

# Default commit message
commit_message="Auto-update"

# Add all changes
git add .

# Commit with the default message
git commit -m "$commit_message"

# Push changes to the main branch
git push origin main