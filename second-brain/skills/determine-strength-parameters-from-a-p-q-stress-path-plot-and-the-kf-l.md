---
title: Determine strength parameters from a p-q stress path plot and the Kf line
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Determine strength parameters from a p-q stress path plot and the Kf line

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 11 (Shear Strength of Cohesionless Soil), on obtaining strength parameters from p-q diagrams and the Kf line, and on obtaining the friction angle from direct shear results; stress paths are introduced in Ch. 9), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Effective cohesion intercept and friction angle derived from a set of triaxial tests plotted as stress paths, together with a visual record of how each specimen approached failure.

## Inputs

- A series of triaxial tests on the same soil at different confining stresses, with the full stress-strain and (for undrained tests) pore pressure records
- A consistent definition of failure applied to every test
- Whether total or effective stresses are being plotted, stated explicitly

## Procedure

1. For each increment in each test, compute the two stress path coordinates the source uses: the average of the major and minor principal stresses, and half their difference. Use effective stresses for an effective stress path and total stresses for a total stress path.
2. Plot the stress path for each test from its consolidation point through to failure. The shape of the path immediately shows whether the specimen contracted or dilated and how pore pressure developed.
3. Mark the failure point on each path using the agreed failure definition, and plot the failure points for the series.
4. Fit a straight line through the failure points — the Kf line — over the stress range of interest, and read its slope angle and its intercept on the vertical axis.
5. Convert the Kf line's slope and intercept to the Mohr-Coulomb friction angle and cohesion intercept using the relationships given in the source (the sine of the friction angle equals the tangent of the Kf line's slope angle; the cohesion intercept follows from the Kf line intercept and the friction angle).
6. Cross-check by constructing Mohr circles for two or three of the tests and drawing the envelope; the two routes should agree.
7. Report the stress range over which the line was fitted, since the real failure locus is curved.

## Decision rules

- Prefer the p-q plot over Mohr circles when the series contains many tests — fitting a line through points is more reliable and less cluttered than drawing a common tangent to many circles.
- The Kf line is not the Mohr envelope; do not read the friction angle directly off its slope without the conversion.
- Because the real failure locus curves, fit only over the design stress range and never extrapolate to much higher or lower stresses.
- Keep total and effective stress paths on separate plots, or clearly distinguished; the horizontal separation between them at any strain is the pore pressure.
- Where the specimens were consolidated anisotropically, start each path at the at-rest point rather than on the isotropic axis.

## Checks

- Check that the derived friction angle from the p-q route matches the Mohr circle construction for the same data.
- Check the failure definition was applied identically to every test in the series.
- Check the fitted line covers the in-situ and post-construction stress range.

## Common errors

- Reading the friction angle as the Kf line's slope angle without converting.
- Mixing total and effective stress failure points on one line.
- Fitting a single straight line across a stress range wide enough that the curvature of the failure locus matters.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 1289.6.4.2

## Related

- [[Skills]]
- [[Skills]]
