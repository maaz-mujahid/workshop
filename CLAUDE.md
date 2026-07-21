# CLAUDE.md — Workshop (Parts & Inventory Tracker)

Context for any Claude Code session working in this repo. Read this first.

## What this is
A free, offline-friendly **parts & inventory tracker** for Maaz's DIY home-automation
builds (Home Assistant, local-first, hardware sourced in India). It's a static web app
hosted on GitHub Pages. **GitHub stores everything; the app only calculates + displays.**

- Live app: https://maaz-mujahid.github.io/workshop/
- Repo: `maaz-mujahid/workshop` (PUBLIC, branch `main`)
- Owner/user: Maaz (maazmujahid@gmail.com)

## The core workflow (IMPORTANT — this is why the repo exists)
- **Claude writes engineering data directly into this repo** and commits + pushes.
  That means: the parts catalogue, project docs (`project.html`), BOMs (`bom.json`),
  and project metadata (`project.json`). When Maaz asks to add/change a build, edit the
  files here and push — the live app fetches them automatically. **Do not** build an
  app-side "upload" feature; the app never pushes engineering data.
- **The app owns only inventory + status.** It writes `data/inventory.json` and each
  project's `status` field back to GitHub via Maaz's token when he taps Sync. So when you
  pull/edit, **never clobber `data/inventory.json`** or overwrite a project's `status`
  with stale data — those reflect Maaz's real-world stock and are authoritative.
- Net rule: **Claude = projects/parts/docs. App = inventory/status. GitHub = source of truth.**

## Repo structure
```
workshop/
├── index.html              the app (single self-contained file; CSS+JS inline)
├── robots.txt              Disallow: / (keeps it out of search engines)
├── data/
│   ├── parts.json          master parts catalogue — { "P0001": {...} }
│   ├── inventory.json      APP-OWNED physical parts stock — { stock: { "P0001": 10 } }
│   ├── tools.json           master tools catalogue — { "T0001": {...} } (T-codes, not P-codes)
│   ├── tools-inventory.json APP-OWNED physical tool stock — { stock: { "T0001": 1 } }
│   └── projects.json       manifest — { projects: ["daikin-ac-wifi", ...] }
└── projects/<slug>/
    ├── project.json        { id, name, status, room, difficulty, summary, estimatedCost, safety[], docs, bom, tools }
    ├── bom.json            { items: [ { partId, qty } ] }   qty = individual pieces
    ├── tools.json           { items: [ { toolId } ] }  tools needed for the build (boolean, not consumed)
    ├── project.html        human build guide (overview, wiring, schematic, safety, legend)
    └── circuit-diagram.svg (where present)
```

## Tools (parallel system to parts)
- **Tools are shared equipment, not consumables — boolean ownership, no quantities.** A soldering
  iron needed by 3 projects is just "own one or not"; there is no qty on `toolId` items in
  `projects/<slug>/tools.json` and no qty in `data/tools-inventory.json` (stock values are just `1`
  for "have it", absent = don't). Tools are never subtracted from inventory when a project is marked
  Completed (parts are; tools aren't — they get reused on the next build).
- **Tool IDs are T-codes** (`T0001`…), completely separate ID space from P-codes. Same rules: reuse an
  existing ID for an equivalent tool, never rename/recycle.
- The app has a Parts/Tools segmented toggle above the search bar. It switches the Shop/Inventory/All
  tabs between the two catalogues. Tool cards are simpler than part cards — no project-usage chips, no
  qty stepper, just a single "Mark owned / Have it" toggle.
- The Projects tab shows a Parts table (need/own/buy) plus a horizontally scrollable strip of tool
  chips ("Tools needed") — tap a chip to toggle owned/missing directly from the project view.
- `data/tools-inventory.json` is APP-OWNED (same rule as `data/inventory.json` — never clobber it, GitHub
  Sync pushes it alongside the parts inventory).

## Data formats
- **Part** (`data/parts.json`): `{ name, category, categoryLabel, spec, icon, expectedPrice, sources:[{shop,price,url}], alternatives, notes }`.
  `category` ∈ board|sensor|power|ic|passive|led|connector|mech|misc. `icon` is a key the
  app maps to a drawn SVG (PICS[icon] || category icon). `alternatives` is plain text shown
  offline (curated by Claude — there is intentionally NO live-AI lookup; free/offline only).
- **Part IDs** are permanent P-codes (`P0001`…). Reuse an existing ID for an equivalent part;
  only mint a new one (next number) when nothing equivalent exists. Never rename/recycle.
- **BOM**: quantities are individual pieces needed. Do NOT bake in spares or pack sizes —
  extras from buying a pack just live in inventory. There is NO packSize / equivalents /
  salvage-bucket concept (Maaz's explicit decisions).
- **Project status** ∈ Idea | Planned | In Progress | Completed | Cancelled.
  Active (counts toward the shopping list) = Planned + In Progress.

## Current builds (statuses live in each project.json — check there, it's authoritative)
1. `daikin-ac-wifi` — Daikin MTKL50UV16VA over WiFi via S403 service port (S21 protocol) +
   IR blaster for Orient Zeno fan. Hard. NON-isolated port (GND at mains, pin10 ~320V) →
   ADuM1201 (or 2×6N139 opto) isolation is mandatory. Powered from AC's 14V rail.
2. `motion-night-light` — 6 standalone battery PIR night lights (salvaged 18650s).
   Deliberately NOT HA-connected. Easy.
3. `presence-lighting` — bedroom mmWave (LD2410C) presence + time-of-day lighting; ceiling
   ESP32+relay drives 6 concealed bulbs, desk ESP32-C3+MOSFET power-cycles a BT LED strip.
   Modes: Day→cool, Evening→warm, Sleep(iPhone Focus)→strip only. Medium.

Sourcing: robu.in and quartzcomponents.com (India). Prices in ₹, ~July 2026, indicative.

## Project rules (from Maaz)
- Every build lives in its own `projects/<slug>/` folder — nothing loose.
- Always include a **legend** at the bottom of any schematic / circuit diagram.
- Process for a new build: research (easy→hard DIY rating) → schematics + connection
  diagram + how-it-works → get Maaz's confirmation → then final BOM + module sourcing.
- Privacy: repo is public but `robots.txt` + a noindex meta keep it unlisted. No secrets in
  the repo — Maaz's GitHub token lives only in his browser's localStorage, never committed.

## When adding or editing a build
1. Update/create `projects/<slug>/project.json`, `bom.json`, `tools.json`, `project.html` (+ SVG).
2. Add any genuinely new parts to `data/parts.json` and new tools to `data/tools.json` (reuse
   P-/T-codes where equivalent).
3. Add the slug to `data/projects.json`.
4. Leave `data/inventory.json`, `data/tools-inventory.json`, and existing `status` values alone
   unless Maaz asks.
5. Commit + push to `main`. The live app picks it up on next load / Reload.

## Related
- Full narrative history / decisions also live in Maaz's Cowork project memory.
- Legacy: `parts-tracker.html` was an earlier Cowork artifact (localStorage, desktop-only),
  superseded by this app. `setup-autosync.command` / `deploy-to-github.command` were for the
  Cowork→GitHub bridge; unnecessary when working in Claude Code (which pushes directly).
