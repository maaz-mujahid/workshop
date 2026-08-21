# Wiring Guide

## Controller
Use the ESP32-C3 Super Mini internal pull-ups.

```text
GPIO ───────── CAT6 ───────── Reed ───────── Common GND
```

| GPIO | Sensor |
|---|---|
| GPIO0 | Tank 0% |
| GPIO1 | Tank 25% |
| GPIO3 | Tank 50% |
| GPIO10 | Tank 75% |
| GPIO20 | Tank 100% |
| GPIO21 | Rooftop door |

One CAT6 conductor is common GND; one is spare.

## Tank assembly
Mount each reed at its target level. A magnet attached to the floating element moves beside the reeds. The float should move freely and not jam or rotate into the guide.

## Commissioning
1. Flash ESPHome.
2. Test all six reeds individually.
3. Test rising and falling tank levels.
4. Verify door state.
5. Measure normal motor filling times between levels.
6. Calibrate Home Assistant dry-run timeout from those measurements.
7. Test motor automation before unattended operation.
