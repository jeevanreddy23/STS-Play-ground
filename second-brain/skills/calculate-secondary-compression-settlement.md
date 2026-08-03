---
title: Calculate secondary compression settlement
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate secondary compression settlement

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §11.13 (secondary consolidation settlement), following the rate calculation in §§11.14–11.15), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A secondary (creep) settlement estimate for a compressible layer over the design life, added to primary consolidation settlement.

## Inputs

- Secondary compression index from the straight-line portion of the deformation versus log time plot after primary consolidation, for the relevant stress increment
- Void ratio at the end of primary consolidation
- Layer thickness
- Time at the end of primary consolidation in the field, and the design life or time of interest
- Soil type, particularly whether organic

## Procedure

1. From the oedometer time-deformation plot for the appropriate stress increment, measure the slope of the straight portion after the end of primary consolidation, expressed as change in void ratio per log cycle of time.
2. Normalise that slope by one plus the void ratio at the end of primary consolidation to obtain the secondary compression index in strain terms.
3. Estimate the field time at which primary consolidation ends, from the rate-of-consolidation calculation.
4. Compute secondary settlement as the strain-form secondary compression index times the layer thickness times the logarithm of the ratio of the design time to the time at the end of primary consolidation.
5. Add this to primary consolidation and immediate settlement for the total.
6. Where the loading is preceded by surcharge, note that surcharging reduces but does not eliminate subsequent secondary compression.

## Decision rules

- Secondary compression dominates the long-term settlement of organic soils and peats, and is often the controlling component for them — do not omit it.
- The secondary compression index generally increases with the compressibility of the soil; check the derived value against the published relationship with compression index as a sanity test.
- Secondary compression is a function of log time, so the settlement between 10 and 100 years equals that between 1 and 10 years — the design life assumption matters.
- The field end-of-primary time is uncertain; report the sensitivity of the secondary settlement to it.

## Checks

- Check that the straight secondary portion of the log-time plot is genuinely straight over at least a log cycle.
- Check the stress increment used for the secondary index brackets the field stress change.
- Check whether the soil contains organic matter, which raises the secondary index substantially.

## Common errors

- Measuring the secondary index over a portion of the curve still influenced by primary consolidation.
- Using the laboratory end-of-primary time instead of the field end-of-primary time as the reference.
- Assuming secondary compression is negligible for soft clays over a long design life.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
