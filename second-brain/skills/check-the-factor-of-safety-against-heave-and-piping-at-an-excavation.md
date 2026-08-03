---
title: Check the factor of safety against heave and piping at an excavation
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Check the factor of safety against heave and piping at an excavation

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 9, §9.6 (heaving in soil due to flow around sheet piles) and §9.7 (use of filters to increase the factor of safety against heave)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A factor of safety against upward heave or a quick condition at the downstream side of a cut-off or in the base of an excavation, and a filter or dewatering measure if it is inadequate.

## Inputs

- Flow net or seepage analysis giving the exit gradient or the head distribution near the excavation base
- Embedment depth of the sheet piles or cut-off and the excavation geometry
- Saturated and submerged unit weights of the soil in the heave zone
- Details of any proposed filter or surcharge layer (thickness and submerged unit weight)
- Depth to and piezometric head in any underlying confined aquifer, for the base-heave (uplift) case

## Procedure

1. Identify the prism of soil at risk. For flow around a cut-off, take the classical prism adjacent to the sheeting whose width is half the embedment depth and whose depth is the embedment depth.
2. Compute the average hydraulic gradient over that prism from the flow net (or from the published chart relating exit gradient to geometry).
3. Compute the destabilising uplift force as the average gradient times the unit weight of water times the prism volume, and the stabilising force as the submerged weight of the prism.
4. Take the factor of safety as the stabilising submerged weight divided by the seepage uplift force.
5. Separately, for an excavation over a confined aquifer, check base uplift: compare the total weight of the remaining soil plug against the uplift pressure from the aquifer piezometric head.
6. If the factor of safety is inadequate, place a filter of appropriate thickness over the heave zone and recompute, adding the submerged weight of the filter to the stabilising side (the filter adds weight without adding seepage resistance).
7. Alternatively deepen the cut-off, lengthen the seepage path, or relieve head by dewatering, and recompute the flow net.

## Decision rules

- A factor of safety of around 1 against heave means failure is imminent — the source notes that practice requires a substantially higher margin (of the order of 4 to 5) because of the inaccuracies inherent in the analysis. Confirm the required margin against the governing standard.
- Any filter used to add weight must itself satisfy the filter criteria against the soil below, or it will clog or allow piping.
- Piping and heave are different mechanisms from base uplift over a confined aquifer; check both where a confined layer is present.
- Do not rely on a factor of safety computed from a flow net that has not been checked for boundary conditions and orthogonality.

## Checks

- Check the exit gradient obtained from the flow net against an independent estimate from the published chart for the geometry.
- Check the water levels used are the design levels (flood, or the highest credible groundwater during construction), not the levels on the day of investigation.
- Check the analysis has considered loss of the cut-off's toe seal through scour or over-excavation.

## Common errors

- Computing the factor of safety from the exit gradient at a single point rather than an average over the heave prism.
- Adding a surcharge without checking it satisfies filter criteria, which can trap water and worsen the situation.
- Missing an underlying confined aquifer entirely, so a base-uplift failure is never checked.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The chart for exit gradient as a function of the excavation geometry, and the required factors of safety, are in the source and in project-specific standards — confirm the required margin from the standard, not the textbook.

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
