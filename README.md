# Workshop

A free, offline-friendly parts & inventory tracker for DIY home-automation builds.
Runs as a static web app on GitHub Pages. GitHub stores everything; the app does the
calculations locally in your browser.

## What it does
- **Shopping list** — auto-calculated from active projects minus what you own. Filter to
  one project or see all. Shows expected price (for bargaining) and where to buy.
- **Inventory** — one shared stock across every project. Mark parts bought; extras just
  sit in stock for future builds. No manual reservations.
- **Projects** — each with a status (Idea / Planned / In Progress / Completed / Cancelled),
  summary, safety notes, a live parts table (need vs own vs buy), and a full build guide.
- **Alternatives** — tap 🤖 on any part for substitute options in plain language, works
  offline (curated in the catalogue).
- **Offline first** — works with no internet at the shop; syncs to GitHub when back online.

## Responsibilities (design rule)
- **Claude** manages engineering data: the parts catalogue, project docs, BOMs.
  → `data/parts.json`, `projects/*/project.html`, `projects/*/bom.json`
- **The app** manages inventory + status and calculates shopping.
  → owns `data/inventory.json` and each project's `status`.
- **GitHub** stores it all.

## Structure
```
Workshop/
├── index.html              the app
├── data/
│   ├── parts.json          master catalogue (P-codes, price, sources, alternatives)
│   ├── inventory.json      physical stock (app-owned)
│   └── projects.json       list of project folders
└── projects/
    ├── daikin-ac-wifi/     project.json · bom.json · project.html · circuit-diagram.svg
    ├── motion-night-light/ project.json · bom.json · project.html
    └── presence-lighting/  project.json · bom.json · project.html · circuit-diagram.svg
```

## Data formats
**Catalogue** (`data/parts.json`): `{ "P0001": { name, category, spec, expectedPrice, sources[], alternatives, notes, icon } }`

**BOM** (`projects/<slug>/bom.json`): `{ items: [ { partId, qty } ] }` — quantities are individual pieces.

**Project** (`projects/<slug>/project.json`): `{ id, name, status, room, difficulty, summary, estimatedCost, safety[], docs }`

**Inventory** (`data/inventory.json`): `{ stock: { "P0001": 10 } }` — owned counts only.

## Setup
See **SETUP.md** — free, ~10 minutes.
