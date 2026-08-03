---
title: Specify compaction plant, layer thickness, compaction level and field control
type: skill
tags: [skill, earthworks]
confidence: high
updated: 2026-08-01
---

# Specify compaction plant, layer thickness, compaction level and field control

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 12 Sections 12.14-12.30 (Tables 12.14 to 12.30) pp 166-177; Chapter 17 Sections 17.14-17.20 (Tables 17.14 to 17.20) pp 257-261; Chapter 4 Section 4.16 (Table 4.16) p 55), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A compaction specification that names a plant type suited to the material, a layer thickness the plant can actually compact, a compaction level matched to the application and fill height, and a field control regime that measures what the specification requires.

## Inputs

- Material classification, fines content, plasticity and weighted plasticity index
- Application (subgrade, embankment body, structural fill, pavement layer, backfill, trench)
- Height of fill and depth below formation
- Available plant and any vibration constraints from nearby structures or services
- Laboratory compaction reference (standard or modified) and optimum moisture content
- Site climate: annual rainfall and equilibrium moisture condition

## Procedure

1. Choose the compaction level from the application. Table 12.17 sets compaction levels by application and Table 12.18 gives required relative compaction by soil type; Table 17.16 gives typical compaction requirements from the specification side. Look warns against defaulting every layer to a single relative compaction figure, and specifically against very high compaction on highly reactive clay, which can make later movement worse.
2. Vary the requirement with depth of fill using Table 12.25 - the number of roller passes for a given layer thickness and the required compaction both change with the height of fill above and below.
3. Choose relative compaction or relative density on the basis of fines: relative compaction applies to material with some fines, relative density to predominantly granular material. Table 12.19 relates the two approximately. Table 17.16 notes the same split from the specification side.
4. Select plant from the material. Table 12.22 gives suitability of compaction plant by material; Table 12.16 gives ease of compaction (granular easier than fine grained, clean material best compacted saturated, difficulty rising with fines and plasticity); Table 12.15 sets out the large plant classes and notes static rollers have a shallower influence depth than vibratory or impact rollers.
5. Set layer thickness from plant and material, not from habit. Table 12.14 gives practical maximum layer thickness by roller type for large open areas; Table 12.21 gives compaction characteristics and layer thicknesses by material class; Table 12.23 gives typical lift thickness including for confined work; and Table 17.18 challenges the common fixed-thickness specification directly - Look attributes the conventional two-hundred-to-three-hundred millimetre figure largely to the depth field density testing can measure, notes it is too thick for light plant and too thin for heavy plant, and sets out thickness by material and equipment. In confined areas cap the loose lift, and for small plant reduce the thickness to a fraction of the large-plant value.
6. Apply vibration constraints. Table 12.24 and Table 17.20 give minimum distances from vibrating rollers by roller weight for a stated permissible peak particle velocity - and Look notes the criterion used is at the level occupants will find unpleasant, so a comfort criterion may be tighter than a damage criterion.
7. Decide standard versus modified compaction consciously. Tables 12.28 and 12.29 give the approximate equivalence and the applications. Look's position is that modified compaction does not improve compaction, it changes the reference, that maximum dry density and optimum moisture content are reference units rather than soil fundamentals, and that modified over-compaction should be avoided on highly reactive clays because of the high suctions induced.
8. Set the placement moisture relative to equilibrium moisture content, not to optimum. Chapter 17 Section 17.14 and Table 17.16 make the point that optimum moisture content is a construction expedient while equilibrium moisture content is the state the fill reaches years later, and that for reactive material (high weighted plasticity index) the difference drives long-term movement. Where placement at equilibrium moisture is impractical, specify an equilibration period, stabilisation or a moisture-conditioning regime.
9. Set the field control method with Table 12.27: sand replacement is destructive and suits large holes and rock fill via water replacement, the nuclear gauge is non-destructive with direct transmission or backscatter modes. Book the calibration regime the table requires - a periodic manufacturer certificate, regular standard-count checks, material-specific calibration, plus a stated proportion of moisture and density results cross-checked against oven and sand-replacement respectively.
10. Account for oversize. Table 12.30 gives stone size effects - compaction tests are run on material passing a stated sieve, so including the stone fraction raises apparent density and CBR, and a field density test can pass because of stone content while the matrix is under-compacted. Correct for oversize rather than ignoring it.
11. Where the design is checked by stiffness rather than density, use Table 17.17 compacted modulus values and Table 4.16 light falling weight deflectometer relationships - Look's point is that density is not used directly in design, modulus is.

## Decision rules

- Match plant type to material first, then set layer thickness to the plant's influence depth - not the reverse.
- Never specify a single relative compaction across all zones and fill heights.
- Modified compaction is mainly for pavement layers; do not apply it to reactive subgrade or embankment fill by default.
- A field density test result on material containing significant oversize must be corrected before it is compared with the laboratory reference.
- Specify moisture relative to optimum as a band, and state the equilibrium moisture expectation separately for reactive material.
- Where the percentage of large stone exceeds the stated threshold, standard density control ceases to be meaningful and a method specification or test section applies.

## Checks

- Layer thickness achievable by the nominated plant per Tables 12.14, 12.23 and 17.18
- Nuclear gauge calibration and cross-check frequency against Table 12.27 requirements
- Oversize correction applied where the stone fraction is significant
- Vibration standoff distances checked for the heaviest roller against nearby structures and services
- Compaction level checked against both application (12.17) and fill height (12.25)
- Achievable compaction checked against the support beneath (Table 17.19) - high compaction cannot be achieved over a weak subgrade without added thickness or a capping layer

## Common errors

- Specifying a fixed layer thickness independent of plant and material
- Treating optimum moisture content and maximum dry density as targets rather than reference points
- Using modified compaction on a high weighted plasticity index clay and inducing high suctions
- Passing a lot on a field density test inflated by stone content
- Specifying heavy vibratory plant in urban areas without a vibration assessment
- Expecting specified compaction over a weak subgrade without increasing thickness or providing a capping layer

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- Equilibrium moisture content data cited was established for Queensland conditions; recalibrate for other climates.
- Vibration standoff distances are based on a single peak particle velocity criterion and one dated source - use a project-specific vibration assessment near sensitive structures.

## Standards cited

AS 1289.5 series (compaction and density), TfNSW R44 Earthworks, AS 1289.5.8.1 (nuclear gauge)

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
