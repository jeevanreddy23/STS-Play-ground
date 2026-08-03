---
title: Predict pile bearing capacity and screen liquefaction directly from CPT data
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Predict pile bearing capacity and screen liquefaction directly from CPT data

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Pile bearing capacity (pp 140-141), LCPC method (pp 140-141, Table 3.6), Eurocode 7-3 method (pp 141-143), DIN 4014 method (pp 143-144), Liquefaction (pp 144-150)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Pile base and shaft resistances from cone data using named published methods with their averaging rules applied correctly, and a CPT-based liquefaction triggering assessment, both bracketed rather than taken from a single method.

## Inputs

- Corrected tip resistance profile through and below the proposed pile toe level
- Pile type (driven displacement, bored, cast in place, screw) and geometry
- Soil type and consistency bands along the shaft and around the base
- For liquefaction: design peak ground acceleration, magnitude, stress profiles, fines content and normalised cone resistance
- Groundwater profile

## Procedure

1. Start from the physical analogy the direct methods rest on: the cone is a model pile, so tip resistance near the pile base relates to unit end bearing and cone data along the shaft relates to unit shaft resistance. Note the book's practical point that sleeve friction is acquired over larger areas behind the tip, is considered less reliable and of lower resolution than tip resistance, and that in practice tip resistance alone is used to calculate both base and shaft components.
2. Apply the LCPC method by taking unit end bearing as a soil-and-pile-type bearing factor times an averaged cone resistance around the tip, and unit shaft resistance as the local cone resistance divided by a soil-and-pile-type factor, subject to a stated maximum unit shaft resistance for each soil class. The averaging window around the tip is defined as a stated multiple of pile diameter above and below the toe - apply that window, not a different one borrowed from another method.
3. Apply the Eurocode 7 Part 3 method and the DIN method as independent checks. Each has its own factors and its own averaging conventions; the value of running them is the spread, which is the honest uncertainty in a direct method.
4. Screen the profile before averaging. A single thin strong layer within the averaging window will lift the averaged cone resistance and the resulting base capacity; the profiling capability of the CPTu exists precisely so that such layers are visible, and the design decision is whether the pile toe should be founded relative to that layer at all.
5. Distinguish pile types rigorously. Bored and cast-in-place piles develop significantly smaller end bearing than driven displacement piles at the same cone resistance, and the published factors encode that. Using a driven-pile factor for a bored pile is the classic overprediction.
6. Check the design against the general framework in the parameter chapters rather than accepting a direct method alone - the book's stated preference throughout is to derive strength and stiffness parameters and design from them, with direct methods as empirical corroboration.
7. For liquefaction, build the cyclic demand exactly as for the SPT route: cyclic stress ratio from peak ground surface acceleration, total and effective overburden stresses and a depth-and-magnitude-dependent stress reduction factor, then a magnitude scaling factor to convert between the design event and the reference magnitude.
8. Build the capacity side from stress-normalised cone resistance, with a fines content correction, and enter the published CPT triggering curves. State which published version of the curves was used, since they have been revised repeatedly.
9. Use the CPT's continuity as its advantage in liquefaction work: unlike discrete SPTs, the cone gives a continuous profile so thin liquefiable seams and their lateral continuity between soundings can be identified, which changes the consequence assessment (lateral spread and settlement) even where the triggering assessment is similar.
10. Where the SPT and CPT liquefaction assessments disagree on the same site, treat it as a data problem - most often energy correction, fines characterisation or thin-layer effects on cone resistance - and resolve it rather than choosing the preferred answer.

## Decision rules

- Use each method's own averaging window; the windows are part of the method definition.
- Never apply displacement-pile factors to bored piles.
- Run at least two direct methods and report the range.
- Correct thin-layer effects on cone resistance before using values near strong-weak layer boundaries.
- Liquefaction assessment requires stress-normalised cone resistance with a fines correction - raw tip resistance is not usable.

## Checks

- Cone profile extended sufficiently below the proposed toe to cover the averaging window
- Averaging windows documented per method
- Pile type factor matched to the actual construction method to be specified
- Liquefaction curve version and fines assumption recorded
- Direct method capacity compared against a parameter-based calculation

## Common errors

- Terminating the sounding at the proposed toe level, leaving the base averaging window incomplete
- Mixing averaging conventions between methods
- Applying a method calibrated on driven piles to bored piles
- Using uncorrected tip resistance where thin stiff layers dominate the average
- Reporting one direct method's answer as the pile capacity

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Direct methods are empirical and calibrated on specific pile and ground databases; verify applicability before use in Australian conditions.
- Liquefaction triggering curves have been revised since publication - use the current recommended version.

## Standards cited

Eurocode 7 Part 3, DIN 4014, AS 2159 Piling, AS 1170.4

## Related

- [[Bored pier inspection]]
- [[AS 2159 piling]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
