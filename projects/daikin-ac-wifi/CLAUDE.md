# CLAUDE.md — Daikin AC WiFi (S403) build

Build-specific context. See root `/CLAUDE.md` for repo-wide rules. Current status lives
in `project.json` (app-owned) — check it, don't assume.

## Goal
Control a **Daikin MTKL50UV16VA** split AC over WiFi via its **S403 service port**
(Daikin **S21** protocol), exposed to Home Assistant through ESPHome. Plus an **IR blaster**
to control the **Orient Zeno BLDC fan** — one shared ESP32, living fully inside the AC.

## Hard constraints & safety (this is a HARD build)
- The S403 port is **NON-isolated**: its GND sits at mains potential and **pin 10 ≈ 320 V**.
  An **isolation barrier is mandatory** — ADuM1201 digital isolator, or 2× 6N139 optos.
- Powered from the AC's internal **14 V rail** (no external adapter — no socket near the unit).
  Accepted trade-off: **fan IR control is dead during a mains outage.**
- **Bench-test harness voltages BEFORE connecting to the AC** and report them:
  pin1↔6 ≈ 14 V, pin4↔6 ≈ 5 V, pin5↔6 ≈ 5 V.
- All work with the AC **unplugged**.

## Key design decisions
- **S21 UART:** 2400 baud, 8E2, 5 V logic. ESP32 GPIO16/17 (UART2).
- **Isolation options:**
  - *ADuM1201* (robu ₹214, only robu stocks it) — needs SOIC→DIP8 adapter.
  - *2× 6N139 optos* (quartz ₹42 ea) — DIP-8 so **drop the SOIC adapter**; adds 2 LED
    resistors (~1k) + 2 pull-ups (~4.7k), and requires `inverted: true` on **both** UART
    pins in ESPHome (optos invert). 5000 Vrms isolation (vs ADuM 2500).
- **Power chain retained** (module on 14V rail): Mini560/LM2596 buck → 5V, HLK-B0505S for
  isolated hot-side 5V, RXEF020 polyfuse + SMBJ18A TVS + 1N5819 on the rail.
- **IR:** VS1838B receiver to learn Zeno codes; discrete 940nm IR LED + 2N2222 for max range.
- **Remote access:** Tailscale for HA (Nextcloud stays on Cloudflare tunnel at cloud.maaztr.com).
- The **10-pin JST/CJT S403 harness (A2508H, robu ₹33) MUST come from robu** — no good
  substitute; it's the one part where "fits properly" matters most.

## Sourcing
robu.in cart ~₹1,475 (all verified) OR split: quartz for ESP32+B0505S+passives (~₹600,
free ship >₹500) + robu for ADuM1201 + JST harness only. Nothing ordered yet.

## State / next steps
- Cart parked; no order placed. Black-tape IR test on Zeno remote skipped — IR-850nm treated
  as confirmed from board photos.
- Next: finalize isolation route (ADuM vs 6N139) → order → bench build → harness voltage
  checks (report before connecting) → ESPHome config → HA.
- Docs here: `project.html` (build guide), `bom.json`, `circuit-diagram.svg`.
