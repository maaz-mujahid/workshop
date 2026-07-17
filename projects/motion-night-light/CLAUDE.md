# CLAUDE.md — Motion Night Lights (×6) build

Build-specific context. See root `/CLAUDE.md` for repo-wide rules. Current status in
`project.json` (app-owned).

## Goal
6 **standalone battery PIR night lights** — 3–4 at skirting height on the stairs, 1–2 in
the kitchen. **Deliberately NOT Home-Assistant connected** (Maaz chose standalone over
Zigbee/ESP32). Each is self-contained on a salvaged 18650. Easy build.

## Per-unit design
- **AM312** mini PIR (generic ₹59 — avoid branded SmartElex at ₹189; same sensor).
- **BC547 + LDR (GL5516)** daylight clamp so it only triggers in the dark.
- **AO3400** N-MOSFET low-side switch (replaces 2N7000 — no TO-92 stock at robu; fully on
  at 2.5 V). **Shared part with the presence build** — buy a strip of 10.
- **3× warm-white straw-hat LEDs**, ~47Ω each (or 68Ω for dual-voltage pack compatibility).
- **Salvaged 18650** + **TP4056 (PROTECTED, 6-pin DW01+FS8205 only)** Type-C/mini-USB + slide switch.
- Scrap enclosure.

## Key decisions / gotchas
- **TP4056 must be the protected version** — bare 4-pin will over-discharge salvaged cells.
- **Shield the LDR from the unit's own LEDs** or you get a flicker loop.
- **Vet salvaged 18650s:** ≥2.8 V good, <2.0 V bin. **Never charge alkaline AAs.**
- **Modular battery packs** via JST XH 2-pin: an 18650+TP4056 pack OR a 3×AA pack are
  interchangeable (68Ω LED resistors for dual-voltage compat).
- **Buy warm LEDs local (₹1–2)** — robu only stocks cool pre-wired packs.
- BOM quantities are pieces needed; buying packs (BC547 ×20, presets ×10) leaves extras in
  inventory — fine.

## State
Live robu cart scraped (in `project.html` §2): cart ≈₹1,196 (~₹199/unit); drops to ≈₹1,060
(~₹177/unit) buying warm LEDs local. Parts can ride the parked Daikin cart for free shipping
(≥₹1,000). This is the most build-ready project.

Docs here: `project.html` (full build guide + live cart), `bom.json`.
