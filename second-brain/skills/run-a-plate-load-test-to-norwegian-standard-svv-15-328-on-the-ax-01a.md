---
title: Run a plate load test to Norwegian standard SVV 15.328 on the AX 01a
type: skill
tags: [skill, testing, ocr-source]
confidence: medium
updated: 2026-08-01
---

# Run a plate load test to Norwegian standard SVV 15.328 on the AX 01a

> **Source:** `BedAnlAx01a_engl V40a.pdf` (Chapter 4, pp. 9-10), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can switch the AX 01a to the SVV 15.328 procedure, hold stages to a settlement-rate criterion instead of fixed times, and read E1/E2 from the printout.

## Inputs

- AX 01a set up as for any test, with the norm setting changed to SVV 15.328
- Hand pump and the SVV stage table for the 300 mm plate

## Procedure

1. Set up the system as usual, switch on and press OK to begin; adjust the displacement sensor manually to within about -2 to +2 mm and confirm.
2. Apply a preload of 0.02 MN/m2 for several seconds and confirm; displacement auto-zeros.
3. Load the first cycle through 0.05, 0.18, 0.30, 0.42, 0.50, 0.60 MN/m2, holding each stage until the settlement rate falls below the 0.02 mm criterion; the box auto-stores after 60 s and underlines the reading if settlement is still moving more than 0.02 mm, then press OK to store (p. 9).
4. Unload to zero and repeat the same stages for the second cycle.
5. Press MENU to finish, OK to browse result pages, PRINT for the sheet.
6. Read E1, computed from readings at 30% and 70% of maximum load (180 and 420 kN/m2), and E2, from 30% and 100% (180 and 600 kN/m2); alternate E2 values for lower stages are also listed.
7. Select the governing E2 using the Norwegian guidance: take the second-cycle settlement between 180 kN/m2 and the highest stage where the curve is still approximately straight (p. 9).

## Decision rules

- Use SVV mode when the project specifies Norwegian road-administration testing; stage holds are settlement-rate governed, unlike DIN's fixed 60 s.
- Pick the alternate E2 for a lower stage when the upper part of the second-cycle curve departs from straight.

## Checks

- No underlined readings should be stored - underlining flags settlement still exceeding 0.02 mm since the last reading.
- Printout lists E1, E2 and alternate E2 values for review.

## Common errors

- Storing a stage while settlement is still creeping (underlined display).
- Applying DIN hold times instead of the settlement-rate criterion.

## Caveats

- The source's table writes the criterion as <=0.02 mm/s while the text says lower than 0.02 mm/min - an internal inconsistency (likely OCR/translation); the cited Norwegian manual should be checked for the authoritative rate.
- Stages listed are for the 300 mm plate only.

## Standards cited

SVV 15.328

## Related

- [[Library - plate load testing]]
- [[Skills]]
