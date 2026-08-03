---
title: Calculate characteristic surface movement and AS 2870 site classification from a layered profile
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Calculate characteristic surface movement and AS 2870 site classification from a layered profile

> **Source:** `DES-C031 AS2870 App H Footings near trees (1).xlsx` (Sheet 'Input Sheet' (per-borehole layer block, columns for Ips, alpha, Ipt, thickness, Usi and yi; Ys and site class output rows) and sheet 'Notes' (input requirements and the shallow-rock instruction)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can build the design suction-change profile for a borehole, sum the layer-by-layer shrink-swell movements into a characteristic surface movement Ys, and read the resulting site classification.

## Inputs

- Depth of design suction change Hs for the climatic zone
- Surface suction change (pF) for the site
- Borehole log split into layers: description, depth to base of each layer
- Shrinkage index Ips for each layer (measured, or estimated from soil classification, plasticity and the correlations in the governing standard)
- Nomination of the cracked zone depth versus the uncracked zone for each layer
- Depth to rock or to any horizon that truncates the suction profile

## Procedure

1. Set out one calculation block per borehole, with one row per soil layer, and enter the layer base depths so the sheet can derive layer top depths and thicknesses.
2. Truncate every layer thickness at the depth of design suction change Hs - no movement is counted below Hs.
3. Mark each layer as lying in the cracked zone or the uncracked zone.
4. Convert the shrinkage index Ips to the instability index Ipt for each layer by applying the standard's lateral-restraint (alpha) adjustment: alpha is unity in the cracked zone and varies with depth in the uncracked zone. Confirm from the standard whether alpha multiplies or divides Ips - see the checks.
5. Build the suction-change profile: the suction change is the full surface value at ground level and reduces linearly to zero at Hs. Evaluate it at the mid-depth of each layer to get that layer's design suction change Usi.
6. Compute each layer's movement as yi = Ipt x layer thickness x Usi, keeping the unit factor consistent (with thickness in metres and yi in millimetres the factor is 10; the standard's own form uses thickness in millimetres and a factor of one hundredth).
7. Sum the layer movements to obtain the characteristic surface movement Ys in millimetres.
8. Look Ys up against the standard's site classification bands to obtain the class (stable through to extreme).
9. Where rock or another non-reactive horizon truncates the profile above Hs, enter that horizon as a layer with a shrinkage index of zero so the profile terminates cleanly instead of leaving a gap.
10. Repeat for every borehole and adopt the governing (most reactive) result for the site, or classify by area where the site is demonstrably variable.

## Decision rules

- Hs is a climate-zone value taken from the standard, not a site measurement; using the wrong zone changes both the profile depth and the tree-effect lookups downstream.
- The cracked zone is where seasonal cracking allows the full shrinkage index to act; below it the lateral restraint of intact soil reduces the effective index.
- Layers of sand, gravel, fill with no clay fraction, and rock all take a shrinkage index of zero.
- Where the shrinkage index is estimated rather than measured, state the correlation used and treat the classification as provisional; a shrink-swell test on the governing layers is the defensible basis.
- A perched or shallow permanent water table, deep fill, or an abnormal moisture condition takes the site outside the normal classification and requires a site-specific assessment.

## Checks

- Confirm the sum of layer thicknesses (after truncation) equals Hs, or equals the depth to the truncating horizon.
- Confirm the mid-depth suction change reduces monotonically from the surface value to zero at Hs.
- Confirm the alpha treatment is consistent across all layers and matches the standard. The source sheet uses a multiplier, and the top two layer rows use a different expression from the rows below them (one omits the depth divisor). Physically, lateral restraint below the cracked zone should reduce the effective instability index, so verify the direction of the adjustment against the standard before trusting any output.
- Confirm no layer with zero shrinkage index has been given a non-zero movement.
- Cross-check the resulting Ys against the classification expected from the soil descriptions and local experience - a heavily reactive clay profile returning a low-movement class means an input error.

## Common errors

- Applying the cracked-zone treatment to the whole profile, which overstates movement.
- Failing to truncate layers at Hs, so material below the design suction depth contributes movement.
- Mixing thickness units between metres and millimetres and losing or gaining a factor of a thousand.
- Copying a calculation block for an extra borehole without re-pointing its formulas, so it silently reproduces the first borehole's inputs.
- Leaving a gap in the layer sequence where rock was met, instead of entering that horizon with a zero index.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- All numerical values - Hs by climate zone, the alpha relationship, surface suction change, shrinkage index correlations and the Ys classification bands - must be taken from the current AS 2870, not from the spreadsheet.
- The calculation sheet's own notes reference an older edition of the standard than its title block; confirm which edition the constants belong to.
- The method covers normal residential sites only; abnormal moisture conditions, deep fill, sloping sites and unusual foundation types fall outside it.

## Standards cited

AS 2870, AS 1289.7.1.1

## Related

- [[AS 2870 residential site classification]]
- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
