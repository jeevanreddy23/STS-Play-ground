---
title: Determine relative density of a granular soil and rate its denseness
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Determine relative density of a granular soil and rate its denseness

> **Source:** `Principles of Geotechnical Engineering 8th Edition.pdf` (Das 8th ed., Ch. 3, §3.6 (relative density) and §§3.7–3.8 (controls on e_max and e_min)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A relative density (density index) for a sand or gravel with a qualitative denseness description, suitable for judging compaction adequacy or liquefaction susceptibility screening.

## Inputs

- In-situ dry unit weight or void ratio of the granular soil
- Maximum dry unit weight (minimum void ratio) from the standard vibrating-table procedure
- Minimum dry unit weight (maximum void ratio) from the standard loose-pour procedure
- Fines content and grading, which strongly control the limiting void ratios

## Procedure

1. Determine minimum dry unit weight by pouring oven-dry sand loosely into a mould of known volume from a small-diameter spout, keeping the fall height small and constant, and weighing.
2. Determine maximum dry unit weight by vibrating the filled mould under a surcharge on a vibrating table for the specified duration, then weighing.
3. Measure the in-situ dry unit weight (or void ratio) by an appropriate field density method.
4. Compute relative density either as (e_max - e)/(e_max - e_min) or, in unit weight form, as the ratio expression combining the field and limiting dry unit weights.
5. Convert to a qualitative denseness description using the standard banding (very loose through very dense) tabulated in the source.

## Decision rules

- Relative density is only meaningful for cohesionless soils; do not compute it for soils with appreciable plastic fines.
- Relative density and relative compaction are different measures — relative compaction refers to a Proctor maximum, relative density to the vibratory maximum and loose minimum. Convert between them only with the published relationship, and state which was specified.
- Non-plastic fines change both limiting void ratios substantially, so re-run the limiting tests whenever the fines content of the source material changes.

## Checks

- Check the field dry unit weight lies between the measured minimum and maximum — a value outside that range means the limiting tests were run on unrepresentative material or the vibratory energy differed.
- Check the tested material has been screened to the same maximum particle size as the field material.
- Check whether the specification calls for relative density or relative compaction before reporting.

## Common errors

- Reporting relative density from limiting values obtained by a non-standard energy (larger moulds or heavier surcharges give a higher maximum).
- Applying relative density banding to a silty sand where the limiting tests are not reproducible.
- Using moist rather than dry unit weights.

## Caveats

- Textbook learning material, not a design standard — verify method currency and all values against the source and Australian practice before use
- The denseness banding table and the emax/emin correlation charts are in the source; read the numeric bands there.
- Australian practice uses the density index test AS 1289.5.6.1, whose apparatus and energy differ from the ASTM procedure described here.

## Standards cited

ASTM D4253 / D4254, AS 1289.5.5.1, AS 1289.5.6.1

## Related

- [[Skills]]
- [[Skills]]
