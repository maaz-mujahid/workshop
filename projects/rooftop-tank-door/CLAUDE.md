# Rooftop Tank + Door Security
- Standard controller: ESP32-C3 Super Mini.
- Five reed switches: 0/25/50/75/100%.
- Sixth reed: rooftop door.
- All reeds share common GND.
- Use internal GPIO pull-ups.
- No external pull-up resistors or capacitors in the current design.
- One CAT6: six signals + common GND + one spare.
- Do not hard-code the motor MCB entity until the real Home Assistant entity is known.
