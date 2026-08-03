---
title: Correct a laboratory e-log p curve for sample disturbance
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Correct a laboratory e-log p curve for sample disturbance

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §11.9 (effect of disturbance on the void ratio-pressure relationship), following the constructions attributed to Terzaghi and Peck and to Schmertmann), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A reconstructed field compression curve from a disturbed laboratory oedometer result, giving a compression index that does not understate field settlement.

## Inputs

- Laboratory e-log p curve including an unload-reload (rebound) branch for an overconsolidated soil
- Initial in-situ void ratio computed from phase relations
- In-situ effective overburden stress at the sample depth
- Preconsolidation pressure from the Casagrande construction

## Procedure

1. Plot the laboratory curve and mark the in-situ void ratio as a horizontal line and the relevant vertical stress lines (the effective overburden stress, and the preconsolidation pressure where different).
2. For a normally consolidated clay of low to medium sensitivity: the preconsolidation pressure equals the overburden stress; mark the intersection of the in-situ void ratio line with that stress line, then locate the point on the laboratory curve at a void ratio equal to 0.4 times the in-situ void ratio, and join the two points — that straight line is the field virgin compression curve.
3. For an overconsolidated clay: mark the intersection of the in-situ void ratio line with the overburden stress line; from that point draw a line parallel to the laboratory rebound curve out to the preconsolidation pressure line; from that intersection, join to the point on the laboratory curve at 0.4 times the in-situ void ratio. The field path is the recompression segment followed by the virgin segment.
4. Take the compression index from the slope of the reconstructed virgin segment and the recompression index from the rebound slope.
5. Use the reconstructed curve, not the raw laboratory curve, in settlement calculation.

## Decision rules

- Sample disturbance always flattens the laboratory curve near the preconsolidation pressure and depresses the apparent preconsolidation pressure — correcting for it increases predicted settlement, so skipping the correction is unconservative.
- Use the overconsolidated construction whenever the derived preconsolidation pressure exceeds the in-situ effective overburden stress by a meaningful margin.
- If the laboratory curve is so flat that no break is identifiable, the sample is too disturbed to reconstruct — obtain better samples rather than forcing the construction.
- The 0.4 void-ratio convergence point is an empirical construction, not a physical law; it should be treated as an approximation.

## Checks

- Check the reconstructed virgin curve is steeper than the laboratory one.
- Check the in-situ void ratio used came from the same specimen, not a nearby sample.
- Check sampling method and tube geometry (area ratio, recovery ratio) when disturbance appears large.

## Common errors

- Applying the normally consolidated construction to an overconsolidated clay, which omits the recompression segment.
- Using an in-situ void ratio computed with an assumed rather than measured specific gravity when the correction is sensitive to it.
- Reporting the raw laboratory compression index as the design value.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Borehole log conventions]]
- [[Skills]]
