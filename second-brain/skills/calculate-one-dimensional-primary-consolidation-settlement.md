---
title: Calculate one-dimensional primary consolidation settlement
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Calculate one-dimensional primary consolidation settlement

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 11, §11.10 (settlement from one-dimensional primary consolidation) and §11.16 (settlement under a foundation), with the case history in §11.17), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A primary consolidation settlement for a compressible layer or profile under a foundation, embankment or fill, with the correct branch of the compression curve used for each layer.

## Inputs

- Thickness and initial void ratio of each compressible layer
- In-situ effective overburden stress at the mid-depth (or top, middle and bottom) of each layer
- Preconsolidation pressure for each layer
- Compression index and swell (recompression) index, or the coefficient of volume compressibility
- Stress increase at the top, middle and bottom of each layer from the applied loading

## Procedure

1. Subdivide the compressible profile into layers thin enough that the stress increase and soil properties are near-constant within each.
2. For each layer, compute the average stress increase using the top, middle and bottom values with the weighted (Simpson) average.
3. Compare the sum of the in-situ effective stress and the average stress increase with the preconsolidation pressure for that layer.
4. If the layer is normally consolidated (final stress and initial stress both on the virgin line), compute settlement from the compression index, the layer thickness, the initial void ratio and the logarithm of the ratio of final to initial effective stress.
5. If the layer stays overconsolidated (final stress below the preconsolidation pressure), use the swell/recompression index in the same expression.
6. If the loading takes the layer from overconsolidated through the preconsolidation pressure, split the calculation into a recompression part (from initial stress to preconsolidation pressure, using the swell index) and a virgin part (from preconsolidation pressure to final stress, using the compression index), and add them.
7. Sum the settlements of all layers, and add elastic (immediate) settlement and secondary compression separately as required.
8. Report the total, the split between components, and the depth over which the calculation was truncated.

## Decision rules

- Always test each layer separately against its own preconsolidation pressure — a profile can be normally consolidated at depth and overconsolidated in a desiccated crust.
- Consolidation settlement calculated this way is one-dimensional; where the loaded width is small relative to the layer thickness the real settlement includes lateral strain and this method overestimates it. Apply a correction or use an appropriate three-dimensional method where that applies.
- Use the reconstructed (disturbance-corrected) field compression curve rather than the raw laboratory indices.
- For fills and embankments placed over a long period, allow for consolidation occurring during construction rather than assuming instantaneous loading.

## Checks

- Check that the effective stresses used are effective, not total, and consistent with the design groundwater level.
- Check the truncation depth captures the layers contributing meaningful settlement (typically where the stress increase falls to a small fraction of the in-situ effective stress).
- Check the computed settlement against the structure's tolerance and against differential settlement across the footprint, not only the total.

## Common errors

- Applying the compression index to a layer that stays overconsolidated throughout, which grossly overestimates settlement.
- Using the stress increase at the layer's mid-depth as the average for a thick layer.
- Forgetting that lowering groundwater to build increases effective stress across the whole profile and causes settlement independent of the structural load.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
