---
title: Run a method-of-slices slope stability analysis
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Run a method-of-slices slope stability analysis

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 15, §§15.11–15.17 (ordinary method of slices, Bishop's simplified method, method of slices for steady-state seepage, solutions for steady-state seepage, case history of slope failure, Morgenstern's method for rapid drawdown, fluctuation of factor of safety)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A factor of safety for a general slope with layered soils, pore pressures and a non-circular or circular slip surface, using the ordinary method of slices and Bishop's simplified method.

## Inputs

- Slope geometry and the stratigraphy of each layer intersected by the trial surface
- Effective cohesion and friction angle for each layer (or undrained strength for a total stress analysis)
- Unit weights, and a pore pressure distribution (piezometric line, pore pressure ratio, or a seepage analysis)
- External loads, surcharge and any reinforcement
- A search scheme over trial slip surfaces

## Procedure

1. Divide the mass above the trial slip surface into vertical slices, thin enough that the base of each slice is approximately straight and lies within one soil layer.
2. For each slice compute the weight, the base inclination, the base length, and the pore pressure at the base centre.
3. Ordinary (Fellenius) method: assume the interslice forces are parallel to the base of each slice so they cancel; obtain the effective normal force on each base by resolving the slice weight normal to the base and subtracting the pore water force, then sum resisting and driving contributions around the arc to get the factor of safety directly.
4. Bishop's simplified method: assume the interslice forces are horizontal; the effective normal force on each base then depends on the factor of safety, so the equation must be solved iteratively — start from the ordinary method result, recompute, and repeat until the factor of safety converges.
5. Repeat for a grid of circle centres and radii (or a search over non-circular surfaces) and report the minimum factor of safety and its surface.
6. For a steady seepage case, take the pore pressures from a flow net or seepage analysis, or use a pore pressure ratio where the source's charts apply.
7. For rapid drawdown, use the appropriate treatment (the source presents Morgenstern's charts for the drawdown case) rather than simply lowering the external water level.
8. Present the critical surface, the factor of safety, and the parameters and pore pressures used.

## Decision rules

- Bishop's simplified method is more accurate than the ordinary method for circular surfaces with high pore pressures; the ordinary method can be substantially conservative there. Report which method was used.
- Neither method satisfies all equilibrium conditions — for non-circular surfaces or unusual geometry use a rigorous method (Morgenstern-Price, Spencer, Janbu with correction).
- Pore pressure is usually the dominant uncertainty. Run the analysis for the design wettest credible condition and check the sensitivity of the factor of safety to the piezometric assumption.
- Use effective stress parameters with realistic pore pressures for long-term conditions and undrained strengths for short-term conditions; never mix them in one analysis without a deliberate reason.
- Required minimum factors of safety come from the governing standard or from a risk assessment; the source quotes a commonly used value for a stable slope but the project requirement governs.

## Checks

- Check the critical surface found is a genuine minimum and not at the edge of the search grid.
- Check slice base inclinations near the toe: steeply upward-inclined bases can produce negative effective normal forces in the ordinary method, a sign the method is being pushed beyond its validity.
- Check the factor of safety against an independent hand calculation for a simple sub-case, and against back-analysis of any existing failure at the site.

## Common errors

- Reporting a factor of safety without stating the pore pressure assumption.
- Searching only circular surfaces where a weak layer dictates a non-circular mechanism.
- Using peak strengths on a slope with a pre-existing shear surface, where residual strengths apply.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Charts for steady seepage and rapid drawdown cases are reproduced in the source.

## Standards cited

AS 4678, AGS 2007 landslide risk management guidelines

## Related

- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
