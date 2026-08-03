---
title: Use SPT results directly for shallow foundation and pile design and for liquefaction screening
type: skill
tags: [skill, piling-rock]
confidence: high
updated: 2026-08-01
---

# Use SPT results directly for shallow foundation and pile design and for liquefaction screening

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 2 SPT - Direct design methods (pp 59-60), Shallow foundations (pp 60-66), Bearing capacity of piles (pp 66-70, Tables 2.12-2.13), Soil liquefaction (pp 70-73, Figures 2.30-2.33), Concluding remarks (pp 73-75)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Bearing capacity, settlement, pile capacity and liquefaction triggering assessments made from SPT data through published direct methods, with the energy basis of each method matched to the data.

## Inputs

- Corrected blow count profile with the energy reference stated
- Footing geometry, embedment, shape and load inclination; or pile type, geometry and soil profile
- Groundwater conditions
- For liquefaction: design peak ground acceleration, earthquake magnitude, total and effective overburden stress profiles, and fines content
- Tolerable settlement

## Procedure

1. Fix the energy basis before applying any published method. Original publications generally do not state a reference potential energy; the book's rule is that methods reflecting American and British practice should be read as energy-corrected to the sixty percent reference, while some other national practices correlate to a different energy reference. Applying a method at the wrong energy basis introduces a systematic bias.
2. For shallow foundations, compute ultimate bearing capacity from the standard three-term bearing capacity formulation with shape, depth, load inclination, ground inclination and base inclination factors, using strength parameters derived from the SPT rather than an N-to-bearing-pressure shortcut where possible. The formulation is the one adopted in Eurocode 7.
3. Check settlement separately, since in granular soil settlement usually governs a shallow foundation, and use the published SPT settlement methods appropriate to footing width and applied pressure.
4. For piles, compute ultimate capacity as base capacity plus shaft capacity, each as an area times a unit resistance. Take unit shaft resistance and unit end bearing from the published SPT correlations, which are expressed as linear functions of blow count with coefficients that differ by pile type and soil type - most importantly, bored and cast-in-place piles develop significantly smaller end bearing than driven displacement piles at the same blow count, and small-displacement piles carry reduced shaft resistance relative to full-displacement piles.
5. Define the averaging windows explicitly: shaft resistance uses an average blow count along the shaft, end bearing uses blow counts in the vicinity of the tip. State the windows used - different published methods define them differently and the answer moves with the definition.
6. For liquefaction, build the demand side first: compute the cyclic stress ratio from peak ground surface acceleration, total and effective overburden stress and a depth-dependent stress reduction factor, using the standard conversion from peak to representative cyclic stress. The stress reduction factor is a function of depth and earthquake magnitude.
7. Scale for magnitude. The cyclic stress ratio computed corresponds to a reference moment magnitude; apply a magnitude scaling factor to convert between the design event and the reference event, subject to the stated ceiling on the factor.
8. Build the capacity side from stress-normalised, energy-corrected blow counts, since separating density from confining stress is essential for a strength index to be used for liquefaction. Enter the published triggering curves with that normalised value, using the curve appropriate to the fines content - the clean sand curve and the higher fines content curves diverge substantially.
9. Recognise that the triggering curves have been revised repeatedly over decades and that different published versions give materially different answers at the same normalised blow count. State which version was used.
10. Where the assessment is marginal, do not resolve it by refining the SPT correlation - obtain independent evidence (CPT, shear wave velocity, sampling) as the book recommends across all its direct design discussions.

## Decision rules

- Match the energy reference of the data to the energy reference implicit in the published method.
- Do not use driven-pile end-bearing correlations for bored piles.
- State the blow-count averaging window for both shaft and base; it is part of the method.
- Liquefaction assessment requires stress-normalised and energy-corrected blow counts - raw N is not usable.
- Fines content changes the liquefaction resistance materially; a clean sand curve applied to a silty sand is unconservative in one direction and over-conservative in the other depending on the version used.

## Checks

- Energy reference of the SPT data stated and matched to each method used
- Pile capacity computed by more than one published correlation and the spread reported
- Settlement check performed alongside the bearing capacity check for shallow foundations
- Liquefaction triggering curve version and fines content assumption recorded
- Marginal liquefaction results supported by an independent test type

## Common errors

- Applying a method calibrated on one national energy reference to data corrected to another
- Using the same blow count averaging window as a different published method
- Assessing liquefaction on field N without normalisation
- Ignoring fines content in the triggering assessment
- Treating a single direct method's answer as the capacity rather than one of a bracketed set

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Liquefaction triggering curves have changed repeatedly; use the current recommended version for the jurisdiction.
- The project's existing SPT direct pile capacity skill covers a different set of published methods - run both.

## Standards cited

Eurocode 7 (bearing capacity formulation), AS 2159 Piling, AS 1170.4 / NCEER-NSF liquefaction workshop recommendations

## Related

- [[Bored pier inspection]]
- [[AS 2159 piling]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
