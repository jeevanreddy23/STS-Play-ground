---
title: Run a DIN 18134 plate load test on the AX 01a
type: skill
tags: [skill, testing, ocr-source]
confidence: high
updated: 2026-08-01
---

# Run a DIN 18134 plate load test on the AX 01a

> **Source:** `BedAnlAx01a_engl V40a.pdf` (Chapter 3, pp. 7-8), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can execute the full two-cycle DIN 18134 loading sequence on the AX 01a electronic box and obtain Ev1, Ev2 and their ratio on site.

## Inputs

- Fully set up AX 01a (plate, cylinder against reaction load, deflection beam, sensors plugged in with correct colour coding)
- SD card inserted if results must be saved
- Hand pump and load stage table for the plate in use

## Procedure

1. Insert the SD card before starting - without it results can only be printed and are lost at switch-off (p. 7).
2. Hold ON/OFF for at least a second to power up, then press OK to start a test.
3. At the Adjust prompt, bring the displacement transducer to roughly 0 mm with the tripod screws and press OK; the settlement reading auto-zeros. If the displayed stress is not zero, run the reset-force-to-zero function first.
4. Apply the preload of 0.01 MN/m2 (display 10 kN/m2), hold 30 s, press OK; settlement zeros again.
5. For a 300 mm plate, pump to each first-cycle stage in turn - 0.08, 0.16, 0.25, 0.33, 0.42, 0.50 MN/m2 - holding each for 60 s and pressing OK to store it (table, p. 7).
6. Unload in stages 0.25, 0.125, then back to about 0.01 MN/m2, each held 60 s and stored, using the pump vent to lower the load.
7. Run the second loading cycle to the penultimate stage only: 0.08, 0.16, 0.25, 0.33, 0.42 MN/m2, 60 s each.
8. Store the final 0.42 MN/m2 reading with OK before pressing MENU to finish and save; the display then shows Ev1, Ev2 and Ev2/Ev1, which can be printed or shown as a graph.

## Decision rules

- Holding ON/OFF for about 2 s aborts the test with nothing stored - use only to abandon a test.
- If the sequence is not completed, the device cannot compute Ev1/Ev2 and will show no moduli (p. 8).

## Checks

- Force reading is zero before preload; settlement auto-zeroed at Adjust and preload steps.
- Watch the tilt of the hydraulic cylinder and extension throughout loading (p. 7).
- Results screen shows record number, date/time, Ev1, Ev2 and the ratio.

## Common errors

- Pressing MENU before storing the last 0.42 MN/m2 point, losing the test result.
- Forgetting the SD card and losing data at power-off.
- Starting with a non-zero force reading instead of resetting it.

## Caveats

- The stage table shown is for the 300 mm plate; other plate diameters use different loads (see the Anix loading-stage sheet).
- The manual is a partial translation of a German original, so some wording is terse; one table entry ('0420') is an obvious OCR/typo for 0.420 MN/m2.

## Standards cited

DIN 18134:2012-04

## Related

- [[Library - plate load testing]]
- [[Skills]]
