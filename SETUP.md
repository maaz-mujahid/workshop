# Workshop — Free Setup Guide (10 minutes, ₹0 forever)

Everything here is 100% free. No paid accounts, no subscriptions. You'll create a
free GitHub repo, turn on free hosting (GitHub Pages), and paste one free token so the
app can save your inventory back to your repo.

---

## What you're setting up

- **The repo** = your data lives here (parts, projects, inventory). Free.
- **GitHub Pages** = turns the `index.html` into a real web link you can open on your
  phone at the shop. Free.
- **A token** = a long password so the app is allowed to save changes to *your* repo.
  Free. Stored only on your phone/PC, never shared.

---

## Step 1 — Create a free GitHub account
If you don't have one: go to https://github.com and Sign up. Free plan is all you need.

## Step 2 — Create the repository
1. Click the **+** (top right) → **New repository**.
2. Repository name: **Workshop** (exactly this is easiest).
3. Keep it **Public** (Pages is free on public repos). Private also works but Pages needs
   a paid plan for private — so use **Public**. Your parts list isn't secret.
4. Click **Create repository**.

## Step 3 — Upload the Workshop files
1. On the new empty repo page, click **uploading an existing file**.
2. Open the `Workshop` folder I created (inside your Claude folder → Home Automation).
3. Drag **everything inside it** — `index.html`, the `data` folder, the `projects`
   folder, `README.md`, `SETUP.md` — into the upload box.
   (Drag the *contents*, so `index.html` sits at the top level of the repo.)
4. Click **Commit changes**.

## Step 4 — Turn on GitHub Pages (the free web link)
1. In the repo, go to **Settings** → **Pages** (left sidebar).
2. Under "Build and deployment" → Source: **Deploy from a branch**.
3. Branch: **main**, folder: **/ (root)**. Click **Save**.
4. Wait ~1 minute, refresh. It shows your link:
   **https://YOUR-USERNAME.github.io/Workshop/**
5. Open that on your phone → the app loads. Add it to your home screen for an app-like icon
   (Share → Add to Home Screen).

At this point the app **works** — shopping list, inventory, projects, alternatives.
It reads your data live. To let it **save** inventory changes back, do Step 5.

## Step 5 — Create the free token (so it can save)
1. GitHub → click your avatar (top right) → **Settings**.
2. Bottom left → **Developer settings** → **Personal access tokens** →
   **Fine-grained tokens** → **Generate new token**.
3. Token name: `Workshop app`. Expiration: pick **No expiration** (or a long date).
4. **Repository access** → **Only select repositories** → choose **Workshop**.
5. **Permissions** → **Repository permissions** → find **Contents** → set to
   **Read and write**. (Leave everything else as "No access".)
6. **Generate token** → copy the `github_pat_…` string (you only see it once).

## Step 6 — Paste it into the app (once)
1. Open your app link → tap **⚙ Setup**.
2. Owner = your GitHub username. Repo = `Workshop`. Branch = `main`.
   Token = paste the string. **Save**.
3. Now the **☁ Sync to GitHub** button works. Buy parts → tap Sync → your
   `inventory.json` in the repo updates.

---

## Daily use

- **At the shop (even with no internet):** open the app. It shows the last data it loaded.
  Tap **＋ Bought** as you buy. Everything is saved on your phone instantly — offline is fine.
- **Back on wifi:** tap **☁ Sync to GitHub** to push what you bought. Now it's backed up
  and visible on any device.
- **Adding a project or new part properly:** tell me in the project chat. I update the
  repo files (`parts.json`, a new `projects/<name>/` folder with `bom.json` + `project.html`),
  you refresh the app, and it appears. The app itself only owns your inventory + project status.

## If something breaks
- App loads but says "couldn't load data": you probably opened `index.html` directly
  (file://). Use the **github.io** link instead.
- Sync fails: re-check the token has **Contents: Read and write** on the **Workshop** repo.
- Wrong prices/parts: those live in `parts.json` — ping me in the chat to fix at the source.
