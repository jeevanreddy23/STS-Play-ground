---
title: Design a shallow foundation on clay for both undrained and drained conditions
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Design a shallow foundation on clay for both undrained and drained conditions

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 32 (Shallow Foundations with Undrained Conditions) with the drained counterpart in Ch. 25 and the dry-soil treatment in Ch. 14), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A footing size and founding level that satisfies bearing capacity in the short term, bearing capacity in the long term, and settlement (immediate plus consolidation plus secondary) over the design life.

## Inputs

- Structural loads including eccentricity and any horizontal component
- Undrained shear strength profile and effective strength parameters for the clay
- Compressibility parameters and preconsolidation profile
- Groundwater level, present and long-term
- Tolerable total and differential settlement for the structure

## Procedure

1. Compute short-term bearing capacity using undrained strength with the undrained bearing capacity factor and the appropriate shape and depth factors, and compare the net applied pressure against it with the required margin.
2. Compute long-term bearing capacity using effective strength parameters and the drained bearing capacity factors with the long-term groundwater condition, and check that too.
3. Recognise which governs: for a normally consolidated clay under a loading foundation the undrained case usually governs capacity; for a heavily overconsolidated clay the drained case can govern.
4. Compute immediate settlement using an undrained modulus and a constant-volume Poisson's ratio, with the elastic solution for the foundation shape, rigidity and embedment.
5. Compute consolidation settlement layer by layer from the stress increase profile and the compression or recompression indices, checking each layer against its preconsolidation pressure.
6. Add secondary compression over the design life.
7. Sum the components, compare against the tolerable total settlement, and then compute differential settlement across the structure by repeating for footings of different size and load.
8. Iterate on footing size and founding depth: increasing the size reduces contact pressure but increases the depth of influence and can increase consolidation settlement, so the optimum is not simply the largest footing.
9. Consider the effect of the excavation for the foundation itself: removing overburden unloads the clay and part of the applied pressure is compensated, which is the basis of a compensated raft.
10. Set out a monitoring provision where settlement predictions are uncertain.

## Decision rules

- On clay, settlement almost always governs the design; check capacity but expect settlement to control, particularly consolidation settlement for a wide foundation over a thick compressible layer.
- A footing whose net applied pressure (after allowing for the weight of soil removed) is close to zero causes little consolidation settlement — exploit that with a compensated or partially compensated design where settlement is critical.
- Differential settlement rather than total settlement damages structures; size adjacent footings to equalise settlement, not to equalise bearing pressure.
- Check the effect of adjacent foundations: stress increases from neighbouring footings overlap at depth and add to consolidation settlement.
- Check the long-term groundwater condition; a rise reduces effective stress and capacity, a fall causes regional settlement independent of the structure.

## Checks

- Check the depth of influence of the footing covers all compressible layers identified in the investigation.
- Check the short-term and long-term capacity checks were run with matching stress states and parameters.
- Check settlement predictions against measured performance of similar structures on the same deposit where available.

## Common errors

- Checking undrained bearing capacity only and never running the long-term case.
- Computing consolidation settlement from the gross rather than the net applied pressure.
- Ignoring the overlap of stress increases from adjacent footings.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 5100.3, AS 2870, AS 3798

## Related

- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
