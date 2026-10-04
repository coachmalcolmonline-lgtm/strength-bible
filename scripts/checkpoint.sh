#!/bin/bash
set -e

PROJECT_DIR="$HOME/strength-bible"
BACKUP_DIR="$HOME/Backups/strength-bible"
REMOTE="origin"
BRANCH="main"
MESSAGE="${1:-Checkpoint}"

if [ ! -d "$PROJECT_DIR/.git" ]; then
  echo "ERROR: $PROJECT_DIR is not a git repository."
  exit 1
fi

cd "$PROJECT_DIR"

echo ""
echo "=== Tier 1: Local Git commit ==="
git add -A
if git diff-index --quiet HEAD --; then
  echo "Nothing to commit."
else
  git commit -m "Checkpoint: $MESSAGE — $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
  echo "Committed."
fi

echo ""
echo "=== Tier 2: Local snapshot ==="
TIMESTAMP=$(date +"%Y%m%d-%H%M%S")
SNAPSHOT_DIR="$BACKUP_DIR/$TIMESTAMP"
mkdir -p "$SNAPSHOT_DIR"
rsync -a --exclude='.git' --exclude='node_modules' --exclude='dist' \
  "$PROJECT_DIR/" "$SNAPSHOT_DIR/"
echo "Snapshot saved to $SNAPSHOT_DIR"

echo ""
echo "=== Tier 3: Push to GitHub ==="
if git remote get-url "$REMOTE" > /dev/null 2>&1; then
  git push "$REMOTE" "$BRANCH"
  echo "Pushed to $REMOTE/$BRANCH."
else
  echo "WARNING: No remote '$REMOTE' configured. Skipping push."
fi

echo ""
echo "=== Checkpoint complete ==="
echo "Message: $MESSAGE"
echo "Snapshot: $SNAPSHOT_DIR"
