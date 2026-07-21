# Workshop

A free, offline-friendly parts, tools & inventory tracker for DIY home-automation builds.
Runs as a static web app on GitHub Pages. GitHub stores everything; the app does the
calculations locally in your browser.

## What it does
- **Shopping list** — auto-calculated from active projects minus what you own. Filter to
  one project or see all. Shows expected price (for bargaining) and where to buy. A
  Parts/Tools toggle switches the whole app between the two catalogues.
- **Inventory** — one shared stock across every project, for parts and for tools. Mark
  items bought; extras just sit in stock for future builds. No manual reservations.
  Tools are equipment, not consumables — owning one soldering iron covers every project
  that needs one, and finishing a build never removes tools from stock (unlike parts).
- **Projects** — each with a status (Idea / Planned / In Progress / Completed / Cancelled),
  summary, safety notes, a live parts table (need vs own vs buy), a tools-needed table,
  and a full build guide.
- **Alternatives** — tap 🤖 on any part or tool for substitute options in plain language,
  works offline (curated in the catalogue).
- **Offline first** — works with no internet at the shop; syncs to GitHub when back online.

## Responsibilities (design rule)
- **Claude** manages engineering data: the parts + tools catalogues, project docs, BOMs.
  → `data/parts.json`, `data/tools.json`, `projects/*/project.html`, `projects/*/bom.json`, `projects/*/tools.json`
- **The app** manages inventory + status and calculates shopping.
  → owns `data/inventory.json`, `data/tools-inventory.json`, and each project's `status`.
- **GitHub** stores it all.

## Structure
```
Workshop/
├── index.html              the app
├── data/
│   ├── parts.json          master parts catalogue (P-codes, price, sources, alternatives)
│   ├── inventory.json      physical parts stock (app-owned)
│   ├── tools.json          master tools catalogue (T-codes, price, sources, alternatives)
│   ├── tools-inventory.json physical tool stock (app-owned)
│   └── projects.json       list of project folders
└── projects/
    ├── daikin-ac-wifi/     project.json · bom.json · tools.json · project.html · circuit-diagram.svg
    ├── motion-night-light/ project.json · bom.json · tools.json · project.html
    └── presence-lighting/  project.json · bom.json · tools.json · project.html · circuit-diagram.svg
```

## Data formats
**Parts catalogue** (`data/parts.json`): `{ "P0001": { name, category, spec, expectedPrice, sources[], alternatives, notes, icon } }`

**Tools catalogue** (`data/tools.json`): `{ "T0001": { name, category, spec, expectedPrice, sources[], alternatives, notes, icon } }` — same shape as parts, separate ID space (T-codes).

**BOM** (`projects/<slug>/bom.json`): `{ items: [ { partId, qty } ] }` — quantities are individual pieces.

**Tools needed** (`projects/<slug>/tools.json`): `{ items: [ { toolId, qty } ] }` — qty is almost always 1; tools aren't consumed.

**Project** (`projects/<slug>/project.json`): `{ id, name, status, room, difficulty, summary, estimatedCost, safety[], docs, bom, tools }`

**Inventory** (`data/inventory.json`): `{ stock: { "P0001": 10 } }` — owned counts only.

**Tools inventory** (`data/tools-inventory.json`): `{ stock: { "T0001": 1 } }` — owned counts only.

## Setup
See **SETUP.md** — free, ~10 minutes.
