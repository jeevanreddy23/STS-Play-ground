---
title: Construct a flow net and calculate seepage quantity
type: skill
tags: [skill, drainage]
confidence: medium
updated: 2026-08-01
---

# Construct a flow net and calculate seepage quantity

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 8, §§8.2–8.6 (Laplace continuity, flow nets, seepage from a flow net, flow nets in anisotropic soil) and §8.9–8.10 for seepage through earth dams), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A graphical flow net for a two-dimensional seepage problem and the seepage quantity, head distribution and exit gradient derived from it.

## Inputs

- Cross-section of the structure and ground (dam, sheet pile wall, cut-off, excavation) drawn to scale
- Total head difference across the system, upstream and downstream water levels
- Hydraulic conductivity of the permeable layer(s); horizontal and vertical values separately if anisotropic
- Location of impervious boundaries and any filters or drains

## Procedure

1. Identify the boundary conditions before drawing anything: the upstream and downstream permeable surfaces are equipotential lines; the impervious base and the surface of any impervious cut-off are flow lines; flow lines meet equipotentials at right angles.
2. For anisotropic soil, first transform the section: keep the vertical scale and multiply the horizontal scale by the square root of the ratio of vertical to horizontal conductivity, then draw the flow net in the transformed section.
3. Sketch a first trial set of flow lines, then insert equipotential lines so that the elements formed are approximately square and intersections are orthogonal; adjust iteratively.
4. Count the number of flow channels and the number of equipotential drops; the head lost per drop is the total head difference divided by the number of drops.
5. Compute seepage per unit length as hydraulic conductivity times total head times the ratio of flow channels to potential drops. In a transformed anisotropic section, use the geometric mean of the horizontal and vertical conductivities in place of k.
6. If rectangular rather than square elements are used, apply the constant width-to-length ratio as a multiplier in the same expression.
7. Compute the head, and hence the pore pressure, at any point by counting the drops from the upstream boundary to that point.
8. Compute the exit hydraulic gradient at the downstream face as the head lost in the last element divided by that element's length.

## Decision rules

- Fractional flow channels are acceptable and normal — do not force an integer count by distorting the net.
- A flow net drawn in a transformed section is orthogonal in that section but not when redrawn in the true section; do not treat non-orthogonality in the true section as an error.
- Refining a net (more channels and drops) does not change the computed seepage quantity if the net is correct — use that as a check on your construction.
- Where a filter or drain is present, its face is an equipotential (or a free-discharge boundary) — model it explicitly rather than ignoring it.

## Checks

- Check every intersection is square-ish and orthogonal, especially near corners and the tip of a cut-off.
- Check the ratio of flow channels to drops is stable when you redraw the net with a different number of channels.
- Check the computed exit gradient against the critical gradient before using the net for anything else.

## Common errors

- Drawing equipotential lines first and flow lines second, which usually produces a non-orthogonal net.
- Forgetting to transform the section for anisotropic soil, which understates seepage and misplaces the exit gradient.
- Using the arithmetic rather than the geometric mean of conductivities in the transformed-section seepage expression.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Charts for seepage through earth dams (including L. Casagrande's solution) and for the phreatic surface geometry are in the source.

## Standards cited

None cited in the source passage.

## Related

- [[Groundwater observations]]
- [[Skills]]
