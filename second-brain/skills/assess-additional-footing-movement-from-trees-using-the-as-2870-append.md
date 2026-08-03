---
title: Assess additional footing movement from trees using the AS 2870 Appendix H method
type: skill
tags: [skill, general]
confidence: medium
updated: 2026-08-01
---

# Assess additional footing movement from trees using the AS 2870 Appendix H method

> **Source:** `DES-C031 AS2870 App H Footings near trees (1).xlsx` (Sheet 'Input Sheet' (tree arrangement, influence-distance and reduction-factor block, tree suction profile and additional movement columns, centre-heave output) and sheet 'Lookup Tables' (Hs-indexed single tree / tree group columns)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** The engineer can quantify the extra drying and the extra design movement that existing or proposed trees impose on a footing site, apply the distance-based reduction, and combine it with the no-tree characteristic movement.

## Inputs

- The completed no-tree calculation for the same borehole: layer instability indices, thicknesses and the characteristic surface movement Ys
- Depth of design suction change Hs for the climate zone
- Mature height H of the tree or trees
- Distance Dt from the tree to the building
- Tree arrangement: a single tree, a group of trees, or a row of more than four trees
- The Appendix H lookup values for that Hs: the maximum design drying depth Ht and the maximum extra suction change at the base of the drying profile, tabulated separately for a single tree and for a tree group

## Procedure

1. Classify the tree arrangement and set the design influence distance Di as a multiple of the mature tree height: one times the height for a single tree, one and a half times for a group, twice for a row of more than four. Take these multipliers from the standard.
2. Look up, against Hs, the maximum design drying depth Ht and the maximum extra suction change at the base of the profile, choosing the single-tree or tree-group column to match the arrangement. Both come from the AS 2870 Appendix H tables.
3. Extend the suction-change profile from Hs down to Ht, and superimpose the extra suction change so that the profile carries the additional drying with depth down to the maximum design drying depth.
4. Re-slice the soil layers against the deeper profile: layer thicknesses are now truncated at Ht rather than at Hs, so layers that were partly or wholly below the no-tree profile now contribute.
5. Compute the extra movement of each layer as the layer instability index times the modified thickness times the extra suction change at that layer's mid-depth, in the same units as the no-tree calculation, and sum them to get the maximum tree-induced movement yt(max) - the value that applies when the tree is right against the building.
6. Compute the distance reduction factor from the ratio of tree distance to tree height, scaled between the design influence distance and the near-field limit: the factor falls to zero at the design influence distance and rises towards unity as the tree approaches the building.
7. Apply the reduction factor to yt(max) to get the design tree movement yt. Where the tree is closer than the near-field limit, apply no reduction and use yt(max) in full.
8. Combine with the no-tree movement to get the design centre heave: take the standard's combination of the characteristic surface movement and the tree movement (the sheet uses seven tenths of Ys plus yt).
9. Repeat per borehole and per tree scenario (existing trees, proposed trees, trees to be removed), and report which scenario governs.

## Decision rules

- Trees beyond the design influence distance produce no reduction-factor contribution and can be screened out.
- Where the tree-to-height ratio falls below the near-field limit the reduction formula is not applicable and the full maximum tree movement applies - the sheet raises a warning flag at this point rather than returning a value.
- Assess proposed trees at mature height, not planted height.
- Removing an established tree causes long-term reswelling rather than drying, and must be assessed as a heave case in its own right, not by setting the tree movement to zero.
- A group or row is not the same as several single trees - the arrangement changes both the influence distance and the drying-depth lookup.
- Where the tree-affected design movement pushes the site into a higher classification, either design the footing for the higher class, adopt root barriers or a greater founding depth, or remove and allow for the reswelling.

## Checks

- Confirm the drying depth Ht used is greater than Hs; if the lookup returns a warning because Hs is below the table's lower bound, the method does not apply as tabulated.
- Confirm the arrangement selected drives both the influence distance and the lookup column consistently - it is easy to change one and not the other.
- Confirm the reduction factor sits between zero and one; a negative factor means the tree is beyond the influence distance and a factor above one means the distance-to-height ratio is below the near-field limit.
- Confirm layer thicknesses in the tree case are truncated at Ht and that no layer is double counted between the no-tree and tree calculations.
- Confirm the tree movement is added to the correct proportion of the no-tree movement per the standard's combination rule, not simply added to Ys.

## Common errors

- Using planted height instead of mature height, which understates both the influence distance and the movement.
- Reading the single-tree column of the Appendix H table for a group of trees.
- Forgetting that the deeper profile re-opens layers that the no-tree calculation had truncated at Hs.
- Applying the distance reduction when the tree is closer than the near-field limit.
- Assessing only the trees currently on site and ignoring proposed landscaping or neighbouring trees within the influence distance.
- Treating tree removal as simply deleting the tree case.

## Caveats

- Reconstructed from a working calculation file - verify the method against the governing standard before reuse.
- Take every tabulated value - drying depths, extra suction changes, influence-distance multipliers and the combination rule - from the current AS 2870 Appendix H, not from the spreadsheet copy.
- The tool's own notes cite an earlier edition of the standard and supplementary tree-effect papers; confirm which edition the constants belong to before use.
- Appendix H is an assessment of design movement only; footing design, articulation and drainage measures follow separately.
- The distance reduction is an empirical simplification of a strongly three-dimensional root and moisture problem.

## Standards cited

AS 2870

## Related

- [[AS 2870 residential site classification]]
- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
