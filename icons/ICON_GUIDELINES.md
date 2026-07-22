# Workshop Icon Guidelines

Style rules for the **part/tool portrait icons** in `icons/parts/` and `icons/tools/`
(the detailed, colored "what does this actually look like" icons — not the plain
monochrome category icons in `app.js`, which are a separate Lucide-based set and
out of scope for this doc).

Any new icon — hand-drawn or AI-generated — must follow every rule below. When
generating with an LLM, paste this whole file into the system prompt.

## 1. Canvas

- `viewBox="0 0 64 64"`, no `width`/`height` attributes on the root `<svg>`.
- No `xmlns` needed (inline in HTML), no `<?xml>` prologue, no comments.
- Design for a 64×64 square. Leave a few px of breathing room at the edges —
  don't touch 0 or 64 exactly unless a lead/wire is meant to run off-canvas.
- Single flat file: one `<svg>` root, no `<defs>`, no `<symbol>`, no external refs.

## 2. Visual language

These are small **skeuomorphic component portraits** — simplified but
recognizable miniatures of the real physical part or tool, not abstract
line-icons and not photorealistic renders. Think "sticker illustration."

- Flat color fills, occasional flat `stroke` for outlines/leads. No gradients,
  no filters, no blur, no drop-shadows, no `opacity` gradients-as-shading
  (a *flat* `opacity` value on a whole shape, e.g. `opacity=".85"` for a glassy
  LED dome, is fine — that's used a lot below).
- No photographic detail. 4–10 shapes total is the sweet spot; if it needs more
  than ~15 shapes it's too detailed for this style.
- Silhouette should read at a glance, even at 24–32px display size.

## 3. Color palette

Reuse these exact hexes wherever the same material appears — this is what
keeps the whole set feeling like one family:

| Material | Hex | Used for |
|---|---|---|
| Gold/brass pins | `#d4af37` | header pins, chip legs, connector pins |
| Silver leads | `#9ca3af` / `#c0c0c0` | component leg wires, resistor leads |
| Dark PCB / chip body | `#1a1a2e` / `#111827` / `#1f2937` | board substrate, transistor cans, IC bodies |
| Blue module body | `#1e5aa8` / `#2469c2` | converter/regulator module casings |
| Green module body | `#15803d` / `#166534` | relay boards, sensor PCBs |
| Red accent / warning | `#e63c2f` / `#ef4444` / `#b91c1c` | LEDs, red wire, TVS/protection parts |
| Amber/yellow accent | `#facc15` / `#f59e0b` / `#fbbf24` | LEDs, fuses, heat tools, yellow wire |
| Light gray casing | `#e5e7eb` / `#f3f4f6` / `#d1d5db` | plastic connector housings, IC tops |
| Text on dark fill | `#fff` / `#d1d5db` / `#9ca3af` | part-number labels |

Don't invent new hexes for materials already in this table — reuse them so a
new icon slots in without clashing.

## 4. Structural conventions

- **Leads/legs**: drawn as `<line>` or `<path>`, `stroke-width="2"`–`"3"`,
  running from the component body toward the bottom or sides of the canvas,
  usually silver/gray (`#888` or `#9ca3af`) unless the wire itself has a
  meaningful color (red/black power wires, JST rainbow wires).
- **Pin rows** (headers, chips, connectors): repeated small `<rect>` or
  `<circle>` at regular spacing, gold `#d4af37`, generated with a simple loop
  when there are more than ~4 (see `protopcb`/`perf28` in the existing set for
  the pattern) — don't hand-place more than ~8 repeated pins.
- **Part-number text**: `font-family="sans-serif"`, `font-size` 5–8,
  `text-anchor="middle"`, only 1–2 short lines, only when the real part has a
  visible silkscreen/label. Skip text entirely if it would be illegible at
  this scale — a plain colored body is better than unreadable text.
- **Rounded corners**: `rx="1"`–`"6"` on most body rectangles; sharp 0-radius
  rects are reserved for PCB edges and metal tabs.
- **Glow/glass effect** (LEDs, sensor domes): one lighter shape on top of the
  base shape with `opacity=".7"`–`".9"`, no filter blur.

## 5. Category defaults (when unsure)

- **IC / chip**: dark rounded-rect body, gold pins top+bottom or left+right, optional part-number text.
- **Module/converter (has a PCB)**: colored rect body (blue or green per table), silver/gold pins or leads at the bottom, optional white label text.
- **Passive (R/C, discrete)**: small horizontal or axial body with silver leads left+right or top+bottom, color per component color-code where relevant.
- **Connector**: light gray housing rect, gold pin rows inside, colored wire leads exiting one side.
- **Tool**: simplified hand-tool silhouette, one or two flat body colors, no PCB/pin details (these are physical tools, not electronics — see `icons/tools/` for the visual register: pliers, screwdrivers, etc.).

## 6. File / naming rules

- One icon = one file: `icons/parts/<key>.svg` or `icons/tools/<key>.svg`.
- `<key>` is lowercase, alphanumeric, matches the `icon` field already used in
  `data/parts.json` / `data/tools.json` (e.g. `esp32`, `mini560`).
- Register every new file in `icons/manifest.json` under the right section.
- If an icon is visually identical to an existing one (e.g. a variant part
  number), point the manifest entry at the existing file instead of
  duplicating — see `esp32p → esp32.svg` for the pattern.
- Output **only** the `<svg>...</svg>` tag — no markdown fences, no prose,
  no XML declaration — when generating a new icon file.

## 7. Canonical examples (ground truth)

```
esp32 (dev board):
<svg viewBox="0 0 64 64"><rect x="12" y="4" width="40" height="56" rx="3" fill="#1a1a2e"/><g fill="#d4af37"><rect x="8" y="8" width="4" height="3"/><rect x="8" y="14" width="4" height="3"/></g><rect x="18" y="6" width="28" height="24" rx="2" fill="#b8bfc6"/><circle cx="32" cy="44" r="2" fill="#e74c3c"/></svg>

mini560 (buck converter module):
<svg viewBox="0 0 64 64"><rect x="10" y="16" width="44" height="32" rx="3" fill="#14532d"/><circle cx="24" cy="32" r="9" fill="#4b5563"/><circle cx="24" cy="32" r="5" fill="#6b7280"/><g fill="#d4af37"><circle cx="14" cy="20" r="2"/><circle cx="50" cy="20" r="2"/></g></svg>

led3mm (through-hole LED):
<svg viewBox="0 0 64 64"><path d="M24 26 a8 8 0 0 1 16 0 v10 h-16 z" fill="#ef4444" opacity=".85"/><rect x="22" y="36" width="20" height="3" fill="#fca5a5"/><line x1="28" y1="39" x2="28" y2="58" stroke="#888" stroke-width="2"/><circle cx="30" cy="24" r="2.5" fill="#fff" opacity=".7"/></svg>

screwdriver (tool):
<svg viewBox="0 0 64 64"><rect x="24" y="6" width="16" height="24" rx="6" fill="#facc15"/><rect x="30" y="28" width="4" height="24" fill="#9ca3af"/><path d="M28 52 L36 52 L32 58 Z" fill="#6b7280"/></svg>
```

See `icons/parts/*.svg` and `icons/tools/*.svg` for the full set of 49 real,
in-production examples — skim a few from the same category as whatever
you're generating before writing a new one.
