---
title: Configure the plate load tester electronic box before testing
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Configure the plate load tester electronic box before testing

> **Source:** `PLT Electronic Menu Structure Training.pptx` (Start-screen slide, menu-structure slide, reset-force slide, settings slide and the clock parts-per-million adjustment slide), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The operator can navigate the device menu, zero the force sensor, set the test parameters that control how results are calculated, and confirm card and battery state before starting the first test of the day.

## Inputs

- The electronic box with a formatted memory card inserted and the battery charged
- The plate diameter and lever ratio actually in use
- The standard the test is to be run and evaluated against
- An accurate external time reference where the clock is being adjusted

## Procedure

1. On power-up, read the start screen: device type, day and date, time, memory-card symbol confirming the card is plugged in, battery-state symbol, and charger symbol which flashes while charging. No card symbol means no card, and the test will have nowhere to store.
2. Press the menu key from the start screen to reach the additional functions. The menu offers, in order: reset force, read card, card info, delete card, settings, set clock, info, demo, forced battery charge, update firmware and calibration.
3. Use card info to check used and free space before a long day of testing, and remember that the delete function erases all stored data at once - there is no per-record delete.
4. Zero the force sensor with reset force. The device asks for the sensor to be unloaded, then displays the residual reading; confirm to set it permanently to zero and exit. Temperature change is the normal reason the zero drifts.
5. Open settings and step through the parameters with the scroll keys, changing values with the plus and minus keys: display language, plate diameter, lever ratio, the evaluation standard, print mode and display contrast. Store and exit with the on/off key.
6. Set the plate diameter and lever ratio to match the equipment physically in use - these two values drive the modulus calculation and the printed record, and the device cannot detect them.
7. Set the evaluation standard to the one the results will be reported against, because it determines which moduli the firmware computes and prints.
8. Set the clock against an accurate reference. Where long-term drift needs correcting, use the parts-per-million adjustment: set the clock accurately, wait at least a week and preferably a month, reopen the adjustment with the cursor left on the parts-per-million field, change that setting until the displayed time is correct again, then store and exit.
9. Use info to record the firmware version and device number for the test records, and use calibration only to read raw sensor values and calibration factors - not to alter them outside a formal calibration.

## Decision rules

- Always zero the force sensor with the load train unloaded; zeroing under load bakes an offset into every subsequent test.
- Change plate diameter and lever ratio in the settings whenever the physical setup changes, before the first test with the new configuration.
- Do not delete the card mid-project - deletion is all-or-nothing, so transfer and back up the data first.
- Use the parts-per-million clock adjustment only after a genuine elapsed period; adjusting it immediately after setting the clock corrupts both.
- Treat the demo function as training only; demo series are not test records.

## Checks

- Confirm the card symbol and an adequate free-space figure before starting.
- Confirm the battery state, and charge before the day rather than mid-lot.
- Confirm the displayed force reads zero with the train unloaded, immediately before the first test.
- Confirm the plate diameter and lever ratio on the display match the plate and linkage on the ground.
- Confirm the date and time on the printed record are correct, since they are the traceability link back to the field.

## Common errors

- Zeroing the force sensor while the load train is still bearing on the plate.
- Leaving the previous job's plate diameter in the settings after changing plates, which silently scales every modulus.
- Starting a day's testing with a nearly full card and losing later records.
- Deleting the card to free space before the data has been transferred and verified.
- Reporting against one standard while the device was set to evaluate against another.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- Menu wording and key labels are firmware-version dependent; confirm against the device in hand.
- Calibration adjustment is a workshop function - annual calibration and post-repair recalibration are covered by the equipment maintenance procedure.

## Standards cited

DIN 18134

## Related

- [[Library - plate load testing]]
- [[Skills]]
