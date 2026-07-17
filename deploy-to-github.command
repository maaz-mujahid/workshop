#!/bin/bash
# Workshop → GitHub deployer. Double-click this file (or run it in Terminal).
# It creates the repo, pushes all files, and enables free GitHub Pages.
# Everything runs on YOUR Mac using YOUR GitHub login — nothing leaves your machine.

set -e
cd "$(dirname "$0")"
REPO="Workshop"

echo "──────────────────────────────────────────"
echo "  Workshop → GitHub deployer"
echo "──────────────────────────────────────────"

# --- check git ---
if ! command -v git >/dev/null 2>&1; then
  echo "❌ git is not installed. Install Xcode Command Line Tools:  xcode-select --install"
  exit 1
fi

# --- path A: GitHub CLI present (fully automatic) ---
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  echo "✅ GitHub CLI found and logged in — doing everything automatically."
  OWNER=$(gh api user --jq .login)
  git init -q 2>/dev/null || true
  git add -A
  git commit -q -m "Workshop parts & inventory tracker" 2>/dev/null || echo "  (nothing new to commit)"
  git branch -M main

  if gh repo view "$OWNER/$REPO" >/dev/null 2>&1; then
    echo "  Repo $OWNER/$REPO already exists — pushing to it."
    git remote add origin "https://github.com/$OWNER/$REPO.git" 2>/dev/null || true
    git push -u origin main
  else
    echo "  Creating public repo $OWNER/$REPO and pushing…"
    gh repo create "$REPO" --public --source=. --remote=origin --push
  fi

  echo "  Enabling GitHub Pages (main / root)…"
  gh api -X POST "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
    || gh api -X PUT "repos/$OWNER/$REPO/pages" -f "source[branch]=main" -f "source[path]=/" >/dev/null 2>&1 \
    || echo "  (Pages may already be on, or enable it once in Settings → Pages.)"

  echo ""
  echo "🎉 Done!"
  echo "   Your app link (live in ~1 min):  https://$OWNER.github.io/$REPO/"
  echo "   Open it on your phone → Share → Add to Home Screen."
  echo ""
  echo "   Then in the app: ⚙ Setup → owner=$OWNER, repo=$REPO, branch=main,"
  echo "   paste a fine-grained token (Contents: Read & write) → Sync works."
  exit 0
fi

# --- path B: no gh CLI — set up git, guide the last click ---
echo "ℹ️  GitHub CLI (gh) not found. I'll prepare the git repo; you do two clicks."
echo ""
git init -q 2>/dev/null || true
git add -A
git commit -q -m "Workshop parts & inventory tracker" 2>/dev/null || echo "  (nothing new to commit)"
git branch -M main

echo ""
echo "Now, either install the GitHub CLI for full automation:"
echo "    brew install gh && gh auth login"
echo "  then double-click this file again."
echo ""
echo "OR finish manually (2 minutes):"
echo "  1. Create an empty PUBLIC repo named '$REPO' at:  https://github.com/new"
echo "     (do NOT add a README/license — keep it empty)"
echo "  2. Copy YOUR-USERNAME, then run these two lines here:"
echo ""
echo "     git remote add origin https://github.com/YOUR-USERNAME/$REPO.git"
echo "     git push -u origin main"
echo ""
echo "  3. Repo → Settings → Pages → Branch: main, folder: / (root) → Save."
echo "     Your link: https://YOUR-USERNAME.github.io/$REPO/"
echo ""
echo "Press Enter to close."
read _
