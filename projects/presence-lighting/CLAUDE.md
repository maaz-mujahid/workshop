# CLAUDE.md — Presence Lighting (bedroom) build

Build-specific context. See root `/CLAUDE.md` for repo-wide rules. Current status in
`project.json` (app-owned).

## Goal
mmWave **presence + time-of-day lighting** for the bedroom (same room as the Daikin AC),
10×10×9 ft, false ceiling, 6 concealed AC bulbs (4 warm + 2 cool on two switches), buried
wiring (no new wall runs possible). Medium build, mains work involved.

## Architecture
- **Node 1 (ceiling, in false ceiling):** ESP32 + **HLK-LD2410C** (24 GHz radar, faces down
  through a ~1 cm tile hole) + **2-ch relay** (in series AFTER the wall switches, which are
  **parked permanently ON** as master cut-offs) + **HLK-PM05** PSU tapped from the light-point
  switched-live + neutral.
- **Node 2 (desk):** **ESP32-C3 Super Mini** + **AO3400** low-side MOSFET inline in the USB
  of a Bluetooth LED strip. Strip auto-resumes on power → power-cut method chosen over BLE
  (BT remote kept for colours). AO3400 shared with the night-light build.

## Layout & sensor mount
- Group 1 = 4 WARM bulbs (corners), Group 2 = 2 COOL bulbs (center line), ceiling FAN at room
  center. **Sensor mount (Maaz's pick):** top corner of the entrance wall above the gate,
  ~30° down across the room; 4-wire drop (5V/GND/TX/RX) from the false ceiling, run ≤1.5 m,
  ≥30 cm from ESP32 antenna, out of AC airflow. Fallback: ceiling ~75 cm off the fan.

## Mode logic (Maaz-specified, in Home Assistant)
- **Day** (sunrise→sunset): presence → COOL group; strip off. Empty 3–5 min → all off.
- **Evening** (sunset→Sleep Focus): presence → WARM group only; strip off. Empty → warm off,
  strip on. Cool group manual-only.
- **Sleep** (iPhone Sleep Focus ON via HA Companion Focus sensor): one-shot all bulbs off +
  strip on, then presence automations DISABLED (walking in/out changes nothing). HA app +
  wall switches stay live for manual control.
- **Morning** (Focus off): back to Day/Evening. Fallback: HA schedule helper at bedtime.
- **All entities (2 relays + strip) must stay controllable from the HA app in every mode.**

## Safety
- Relays wired NO (normally-open) + default OFF at boot → power blip won't blast lights at
  3 AM; ESP32 death = lights just behave as "off".
- Wall switch OFF = circuit + module dead (maintenance cut-off).
- Mains work with both wall switches OFF **and** main MCB off; verify dead. Bench-flash and
  bench-test Node 1 before it touches mains.

## State
Design done; was awaiting Maaz's confirmation before BOM/sourcing. Est ₹900–1,300.
Docs here: `project.html`, `bom.json`, `circuit-diagram.svg`,
plus source notes `research.md` / `connections-and-how-it-works.md` in the original folder.
