# CLAUDE.md — Daikin AC WiFi (S403) build

Build-specific context. See root `/CLAUDE.md` for repo-wide rules. Current status lives in `project.json`.

## Goal
Control a **Daikin MTKL50UV16VA** split AC over WiFi via its **S403 service port** (Daikin **S21** protocol), exposed to Home Assistant through ESPHome. The controller is an **ESP32-C3 Super Mini**. The previous Orient Zeno IR fan-blaster has been removed.

## Hard constraints & safety
- The S403 port is **NON-isolated**: its GND sits at mains potential and **pin 10 ≈ 320 V DC**. An **ADuM1201 digital isolation barrier is mandatory**.
- Powered from the AC's internal **14 V rail** through the existing protected/buck/isolation power chain.
- Bench-test harness voltages BEFORE connecting to the AC: pin1↔6 ≈ 14 V, pin4↔6 ≈ 5 V, pin5↔6 ≈ 5 V.
- Pin 10 must remain empty and insulated.
- All work with the AC de-energized except controlled voltage verification by a competent person.

## Key design decisions
- **Controller:** ESP32-C3 Super Mini (P0036).
- **S21 UART:** 2400 baud, 8 data bits, EVEN parity, 2 stop bits.
- **UART pins:** GPIO20 = RX, GPIO21 = TX. These are the C3 UART0 pins; disable the ESPHome hardware logger (`logger: baud_rate: 0`).
- **Status LED:** Super Mini onboard LED on GPIO8, active-low on the target board.
- **Isolation:** ADuM1201, with its hot side powered from 5V_hot and cold side powered from ESP32 3.3V.
- **Power chain:** S403 14V → 200mA PTC → 1N5819 → SMBJ18A protected rail → Mini560 5V → HLK-B0505S-2WR3 isolated 5V for the cold side.
- **IR:** intentionally removed. Do not re-add the Orient Zeno IR receiver/transmitter circuitry to this project.
- **I²C header:** removed from this revision because GPIO21 is used by S21 TX and the old ESP32 GPIO22 is not part of the design.
- **S403 harness:** 10-pin A2508H/CJT connector remains required.

## Files
- `project.html` — build guide and ESPHome starting configuration.
- `bom.json` — project-only BOM; IR parts are removed.
- `circuit-diagram.svg` — updated ESP32-C3 schematic.
- `project.json` — project metadata and safety constraints.
