---
title: Calculate equivalent hydraulic conductivity of a stratified deposit
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Calculate equivalent hydraulic conductivity of a stratified deposit

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 7, §7.9 (equivalent hydraulic conductivity in stratified soil) with §7.8 on directional variation of permeability), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Single equivalent horizontal and vertical hydraulic conductivities for a layered soil profile, and the anisotropy ratio needed for seepage analysis.

## Inputs

- Thickness of each layer in the profile
- Hydraulic conductivity of each layer in the direction of interest
- Direction of the flow problem being solved (parallel or perpendicular to the layering)

## Procedure

1. Set out the profile as a stack of layers with thickness and conductivity for each, and identify the total thickness.
2. For flow parallel to the layering (horizontal in a horizontally bedded deposit), compute the equivalent conductivity as the thickness-weighted arithmetic mean of the layer conductivities — the gradient is common to all layers and the discharges add.
3. For flow perpendicular to the layering (vertical), compute the equivalent conductivity as the total thickness divided by the sum of each layer's thickness divided by its conductivity — the discharge velocity is common and the head losses add.
4. Form the anisotropy ratio (horizontal equivalent over vertical equivalent) for use in transformed-section flow net construction.
5. Where the problem involves both directions (for example flow around a cut-off), carry both values and use the transformed-section method.

## Decision rules

- Horizontal equivalent conductivity is dominated by the most permeable layer; vertical equivalent conductivity is dominated by the least permeable layer. Sanity-check both results against that expectation.
- A thin clay seam that is easily missed in logging can control vertical drainage of an entire profile — confirm the profile's completeness before relying on a vertical equivalent value.
- Varved and rhythmically layered deposits can be strongly anisotropic; do not assume isotropy for glacial or alluvial laminated soils.

## Checks

- Check that the horizontal equivalent value is greater than or equal to the vertical equivalent value; the reverse indicates an arithmetic error.
- Check that each layer's conductivity was measured or estimated in the relevant direction, since individual layers may themselves be anisotropic.
- Check the profile thicknesses sum to the total assumed in the analysis.

## Common errors

- Averaging conductivities arithmetically for vertical flow, which grossly overstates drainage.
- Omitting a thin low-permeability seam from the profile.
- Using laboratory values from disturbed samples for a mass permeability calculation without acknowledging the scale effect.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Skills]]
