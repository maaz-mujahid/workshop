# Rooftop Tank Level Detector + Door Security

One ESP32-C3 Super Mini handles five water-tank level reed switches and one rooftop-door reed switch.

## Tank
Five normally-open reeds are installed at 0%, 25%, 50%, 75% and 100%. A magnet attached to a floating element moves vertically in a guide. The firmware reports individual reed states and a stable tank level.

## Door
The sixth reed detects rooftop door/gate open/closed state.

## Wiring
Each sensor is simply:

`GPIO → CAT6 → Reed switch → Common GND`

The ESP32-C3 internal pull-up is enabled, so no external 10k resistors or 100nF capacitors are used.

One CAT6 cable carries six signal conductors, one common GND conductor and one spare.

## GPIO map
| GPIO | Function |
|---|---|
| GPIO0 | Tank 0% |
| GPIO1 | Tank 25% |
| GPIO3 | Tank 50% |
| GPIO10 | Tank 75% |
| GPIO20 | Tank 100% |
| GPIO21 | Rooftop door |
| GPIO8 | Built-in status LED |

## Home Assistant
Use the reported level and transition timing to control the existing motor smart MCB and detect abnormal filling/dry-run conditions. Replace the placeholder `switch.water_motor_mcb` with the actual entity ID before enabling automatic control.

## Safety
ESP32 GPIOs must never connect directly to mains. The motor remains controlled through the existing properly-rated smart MCB/switch.
