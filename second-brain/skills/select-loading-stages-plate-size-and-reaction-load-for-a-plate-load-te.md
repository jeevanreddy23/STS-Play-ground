---
title: Select loading stages, plate size and reaction load for a plate load test
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Select loading stages, plate size and reaction load for a plate load test

> **Source:** `f69406cd-07d7-4d53-bf33-79a48c9c755b.pdf` (Single-sheet loading-stage table with footnotes), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can pick the plate diameter and jack capacity that suit the target bearing pressure, set out a compliant six-stage loading schedule, and size the reaction weight.

## Inputs

- Required maximum normal stress for the test
- Available plates (300 / 600 / 762 mm) and jack capacity (100 kN, or non-standard 200 kN)
- Available reaction mass (truck, roller, excavator)

## Procedure

1. Check the plate/jack combination can reach the target stress: maximum bearing capacities are about 1.4 MPa for 300 mm/100 kN, 0.4 MPa for 600 mm/100 kN, 0.2 MPa for 762 mm/100 kN, and roughly double with a 200 kN jack (bottom table).
2. Adopt the recommended six-stage schedule for the chosen plate - e.g. 300 mm/100 kN: preload 0.010 then 0.080/0.160/0.250/0.330/0.420/0.500 MN/m2, held 30 s for preload and 60 s per stage; unload via 0.250 and 0.125 back to 0.010; reload through 0.080-0.420 MN/m2 for the second cycle.
3. Follow the DIN principle behind the table: at least 6 approximately equal increments to maximum stress, each load change completed within one minute, unloading in 3 stages to 50%, 25% and about 2% of maximum, and a second cycle taken only to the penultimate first-cycle stage (DIN18134-2012 clause 7.5.2, quoted in the sheet).
4. Convert between jack load and plate stress with the plate factor (kN per MN/m2): 70.68 for 300 mm, 282.76 for 600 mm, 456.05 for 762 mm.
5. Provide a reaction load at least 10 kN greater than the maximum test load (DIN18134-2012 clause 5.2); prefer unsprung reaction masses such as rollers or excavators, since a sprung truck lifting off its springs demands extra margin (Anix remark).

## Decision rules

- Larger plates suit weaker ground and lower target stresses; the 300 mm plate is needed for high-pressure verification.
- 200 kN devices fall outside DIN 18134 - their stage values are recommendations only.
- DIN itself fixes no stage list; the tabulated stages are a recommendation satisfying the standard's rules.

## Checks

- Maximum stage load plus 10 kN does not exceed the reaction mass available.
- Stage loads divided by the plate factor reproduce the intended stresses.

## Common errors

- Using a sprung truck with barely sufficient mass, so it lifts off its springs during peak load.
- Carrying the second cycle to full maximum load instead of stopping at the penultimate stage.

## Caveats

- The sheet itself stresses these stages are recommendations, not fixed by DIN 18134.
- Some tabulated loads (e.g. 762 mm column) imply stresses rounded to the nearest 0.005-0.01 MN/m2; use the factors for exact conversion.

## Standards cited

DIN 18134

## Related

- [[Library - plate load testing]]
- [[Skills]]
