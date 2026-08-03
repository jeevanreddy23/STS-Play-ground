---
title: Design a granular filter to protect against seepage-induced erosion
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Design a granular filter to protect against seepage-induced erosion

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 8, §8.11 (filter design; Terzaghi and Peck criteria and the U.S. Navy conditions), with §9.7 for the use of filters to raise the factor of safety against heave), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A filter grading envelope that retains the protected soil while remaining far more permeable than it, for use at a dam toe, behind a retaining wall, around a subsoil drain or under revetment.

## Inputs

- Particle-size distribution curve of the soil to be protected (the base soil), including its D15 and D85
- Available filter material gradings and their consistency of supply
- Function of the filter: purely protective, or also acting as a drainage layer with a required discharge capacity
- Whether a geotextile alternative or a graded multi-stage filter is being considered

## Procedure

1. Read D15 and D85 off the base soil grading curve.
2. Apply the retention criterion: the filter's D15 must be small enough relative to the base soil's D85 that base particles cannot migrate into the filter voids — the classical limiting ratio is given in the source.
3. Apply the permeability criterion: the filter's D15 must be large enough relative to the base soil's D15 that the filter drains freely and does not build up seepage pressure — again with the limiting ratio from the source.
4. Plot the two limiting points on the same grading chart as the base soil, and draw the acceptable filter envelope between them, keeping the filter curve roughly parallel in shape to the base soil curve.
5. Check the filter against any additional criteria the governing standard imposes (for example limits on the filter's own fines content, on its maximum size, and on its uniformity).
6. Where the base soil is very fine and a single filter cannot satisfy both criteria, design a two-stage (graded) filter with an intermediate layer, applying the criteria at each interface.
7. Check that the filter is thick enough to be constructible and to remain continuous after placement, and specify placement so segregation does not occur.

## Decision rules

- Both criteria must be satisfied simultaneously; a filter that only retains will clog and a filter that only drains will pipe.
- A filter must itself be internally stable — a broadly graded or gap-graded filter can lose its own fines. Prefer a uniformly graded filter with a curve roughly parallel to the base soil.
- Where the base soil is dispersive, standard filter criteria are not sufficient; specialist criteria apply.
- Filter fines content must be strictly limited in specification and checked on delivery, because a small increase in fines destroys the permeability criterion.

## Checks

- Check both criteria numerically on the actual supplied grading, not on the nominal product specification.
- Check the filter will not be contaminated during placement (separation from surrounding fill, protection from surface runoff).
- Check the filter's discharge capacity against the seepage quantity from the flow net if it also acts as a drain.

## Common errors

- Designing to the retention criterion alone and producing a filter that clogs.
- Accepting a filter aggregate whose supplied grading drifts outside the envelope over the course of the works.
- Using a geotextile in place of a granular filter without checking its opening size and permittivity against the same two functions.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The limiting D15/D85 and D15/D15 ratios are stated in the source — use the values there or the ratios in the governing standard, since different authorities set different limits.

## Standards cited

AS 3798, TfNSW R63

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
