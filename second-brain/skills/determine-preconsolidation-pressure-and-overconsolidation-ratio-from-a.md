---
title: Determine preconsolidation pressure and overconsolidation ratio from an oedometer test
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Determine preconsolidation pressure and overconsolidation ratio from an oedometer test

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §§11.5–11.8 (one-dimensional consolidation test, void ratio-pressure plots, normally and overconsolidated clays, general comments on the test), with correlations for compression and swell index in §§11.11–11.12), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A preconsolidation pressure, overconsolidation ratio, compression index and swell index for a clay, with sample quality assessed.

## Inputs

- Oedometer (one-dimensional consolidation) test results: applied stress increments and the corresponding equilibrium dial readings
- Specimen initial height and area, dry mass and specific gravity of solids
- An unload-reload cycle in the test if swell index is required
- The in-situ effective overburden stress at the sample depth

## Procedure

1. Compute the height of solids from the dry mass, specimen area, specific gravity and density of water; obtain the initial height of voids and hence the initial void ratio.
2. For each load increment, convert the change in specimen height at end of primary consolidation into a change in void ratio by dividing by the height of solids, and accumulate to get the void ratio at the end of each increment.
3. Plot void ratio against effective stress on a logarithmic stress axis.
4. Apply the Casagrande construction for the preconsolidation pressure: locate the point of minimum radius of curvature, draw a horizontal line and a tangent at that point, bisect the angle between them, and project the straight virgin portion of the curve back to intersect the bisector; the stress at that intersection is the preconsolidation pressure.
5. Compute the overconsolidation ratio as preconsolidation pressure divided by the current in-situ effective overburden stress.
6. Measure the compression index as the slope of the straight virgin portion on the semi-log plot, and the swell index as the slope of the rebound (unload) curve.
7. Compare the derived indices with published correlations against liquid limit, natural moisture content or void ratio as a sanity check only.

## Decision rules

- An overconsolidation ratio of about 1 indicates a normally consolidated clay; substantially greater than 1 indicates overconsolidation from erosion, desiccation, groundwater lowering or ageing.
- The Casagrande construction is sensitive to the choice of the point of minimum curvature and to the load increment spacing — use closely spaced increments through the transition and report the construction on the plot.
- A poorly defined break in the curve is itself evidence of sample disturbance; report the preconsolidation pressure as a range in that case.
- Swell index is typically a small fraction of compression index; a swell index approaching compression index indicates either an unusually expansive clay or a testing error.

## Checks

- Check the derived preconsolidation pressure against the in-situ effective overburden stress and the site's geological history; an overconsolidation ratio inconsistent with the geology needs explanation.
- Check the initial void ratio computed from phase relations against the void ratio back-calculated from the final water content of the saturated specimen.
- Check the load increment ratio used was appropriate and that each increment was held to end of primary consolidation.

## Common errors

- Reading the compression index off the curved (recompression) portion rather than the straight virgin portion.
- Not correcting for apparatus compressibility, which flattens the early part of the curve.
- Reporting a preconsolidation pressure from a badly disturbed sample without flagging the disturbance.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Correlation equations and their coefficients for compression and swell index are in the source; they are screening tools, not substitutes for testing.

## Standards cited

ASTM D2435, AS 1289.6.6.1

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
