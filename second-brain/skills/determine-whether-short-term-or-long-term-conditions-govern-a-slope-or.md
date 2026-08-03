---
title: Determine whether short-term or long-term conditions govern a slope or retaining structure
type: skill
tags: [skill, slope-stability]
confidence: medium
updated: 2026-08-01
---

# Determine whether short-term or long-term conditions govern a slope or retaining structure

> **Source:** `Soil Mechanics (Wiley Series in Geotechnical Engineering) by T. William Lambe Robert V. Whitman.docx` (Lambe & Whitman, Ch. 31 (Earth Retaining Structures and Earth Slopes with Undrained Conditions), including the worked comparison of end-of-construction and long-term stress states, with the drained counterparts in Ch. 23 and Ch. 24), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A reasoned identification of the critical design case, so that the stability analysis is run with the right strengths and the right pore pressures, and the monitoring is aimed at the right period.

## Inputs

- The loading history: is the total stress on the soil increasing (fill, embankment, foundation) or decreasing (cut, excavation, unloading)?
- Permeability of the governing soil and the time scale of construction relative to the time for pore pressure equalisation
- Pore pressure parameters or measured piezometer trends
- Both undrained strengths and effective stress strength parameters for the governing soil
- The long-term steady seepage regime the structure will end up with

## Procedure

1. Classify the problem by the direction of total stress change. Loading problems (an embankment or a foundation on soft clay) generate positive excess pore pressures that dissipate with time, so effective stress and strength increase and the end-of-construction condition is usually critical. Unloading problems (a cut, an excavation, a dredged slope) generate negative excess pore pressures that dissipate with time, so effective stress and strength decrease and the long-term condition is usually critical.
2. Compute the stresses and pore pressures at both times, as the source does, and plot the stress state at end-of-construction and in the long term on the same axes together with the failure envelope; the case that plots closest to the envelope governs.
3. Run the end-of-construction case either as a total stress analysis with appropriate undrained strengths, or as an effective stress analysis with the pore pressures predicted from the pore pressure parameters.
4. Run the long-term case as an effective stress analysis with the steady seepage pore pressures the structure will finish with, including any raised water table caused by the works.
5. For an unloading problem, do not stop at the end-of-construction check: a cut that is stable when excavated can fail years later as pore pressures equalise. Analyse the long-term case with drained parameters and the ultimate groundwater condition.
6. For a loading problem on soft ground, consider staged construction: check stability at the end of each stage against the strength available at that stage, and verify the assumed consolidation with piezometers before loading further.
7. Where softening, fissuring or progressive failure can reduce strength over time, apply reduced (constant-volume or residual) strengths in the long-term case.
8. Set the monitoring plan from the answer: piezometers and settlement plates through construction for a loading problem, long-term piezometers and movement monitoring for an unloading problem.

## Decision rules

- Check both cases regardless; the general rule about loading and unloading is a guide, not a substitute for calculation, and layered or partly drained conditions can invert it.
- For an excavation in overconsolidated fissured clay, the long-term case with softened strengths and a recovered water table is almost always critical.
- Where construction is slow relative to the soil's consolidation time, neither the fully undrained nor the fully drained idealisation is right; use a staged analysis with the pore pressures actually expected.
- The long-term water table is often higher than the one measured during investigation, because construction alters drainage — choose the design groundwater deliberately and defend it.

## Checks

- Check the assumed drainage condition against the soil's permeability and the actual construction programme.
- Check the long-term groundwater assumption against the site's ultimate drainage arrangement, not the investigation-period levels.
- Check that undrained strengths were not used together with long-term pore pressures in the same analysis.

## Common errors

- Designing a permanent cut on end-of-construction undrained strength.
- Analysing an embankment on soft clay only for the long-term drained case and missing the critical end-of-construction failure.
- Mixing total stress strengths with effective stress pore pressures in one analysis.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- Lambe and Whitman was published in 1969; correlations, terminology and equipment described in it have been superseded in places — check current practice before using any value.

## Standards cited

AS 4678, AGS 2007 landslide risk management guidelines

## Related

- [[Groundwater observations]]
- [[Soil description order]]
- [[Skills]]
