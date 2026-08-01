---
title: Verify external stability of reinforced soil wall
type: skill
tags: [skill, earthworks]
confidence: high
updated: 2026-08-01
---

# Verify external stability of reinforced soil wall

> **Source:** `r057.pdf` (Clauses 4.2, 4.4, 4.7 (Ed 2 / Rev 9, June 2017)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A reinforced soil wall (RSW) external design certified by a geotechnical engineer against bearing, sliding, overall slip and eccentricity limit states.

## Inputs

- Wall geometry (mechanical height H, reinforcement length L, facing inclination)
- Characteristic foundation soil parameters (friction angle, cohesion, undrained strength) from site investigation
- Load combinations A-F with factored loads per the specification's load table
- Material and economic ramification factors from the specification tables
- RSW classification (major/minor) and design life from the project annexure

## Procedure

1. Derive design soil strength values by applying material factors to characteristic values (e.g. tan(phi*) = factor x tan(phi)).
2. Check bearing: compute design bearing pressure using an idealised Meyerhof distribution on an effective width reduced for eccentricity, and confirm the factored ultimate bearing capacity (calculated per Geoguide 1 Appendix A for soil or very weak rock foundations) is not less than it.
3. Check sliding at the base for both long-term (drained, soil-to-soil and reinforcement-to-soil interfaces with interaction coefficients) and short-term (undrained) conditions.
4. Run overall slip stability analyses on circular and non-circular surfaces with an extensive set of trial surfaces, using unfactored serviceability loads and constant-volume soil strengths, including reinforcement resistance where surfaces cut the block.
5. Check base eccentricity under serviceability loads and post-construction movements against the project annexure limits.
6. Have all external (geotechnical) design work carried out and certified by a geotechnical engineer; internal design is certified separately by the RSW designer.

## Decision rules

- Minimum overall slip factor of safety: 1.35 for walls not supporting bridge abutments, 1.6 for walls supporting abutments (constant-volume strength method); alternative peak-strength method requires 1.6 with capped peak parameters (r057 Clause 4.7.4).
- Serviceability eccentricity ratio e/L must stay below 1/6 (r057 Clause 4.7.6).
- Without site-specific test data, cap design friction angles for fills at 34 degrees; with pre-placement testing the reinforced fill may use up to 36 degrees; foundation soil cohesion and friction are capped at 20 kPa and 40 degrees (r057 Clause 4.2(l)).
- Ignore passive resistance in front of the toe when it would improve sliding safety; only count that material for bearing if excavation in front of the wall is restricted (r057 Clause 4.2(p)).
- Sill-beam abutments: serviceability bearing under the sill beam and sill-beam eccentricity are capped per Clause 4.6.7 (dead-load-only vs combined-load limits).

## Checks

- Confirm the design water table assumption: ground surface level in front of the wall unless flooded/submerged cases apply (r057 Clause 4.2(f)).
- Confirm liquefaction screening of granular foundations against the density-index/SPT thresholds in Clause 4.3.1.6 where earthquake load cases apply.
- Confirm all material factors used are stated in the design output and are no less stringent than the specification tables.

## Common errors

- Applying ultimate material factors in the overall slip check, which the specification requires to run with load factors of 1.0 and no material factors, judged instead on a factor of safety.
- Taking full passive toe resistance in the sliding check.
- Using peak friction angles where constant-volume values are required for the fills.

## Caveats

- Verify the edition is still current before use; R57 is periodically revised and successor TfNSW specifications may apply.
- Contract documents and the project-specific annexure override the base specification.
- Numeric limits above are cited from the referenced clauses only; confirm against the controlled document.

## Standards cited

AS 5100.3, BS 8006, AS 1170.4, Geoguide 1 (Hong Kong)

## Related

- [[Skills]]
- [[Skills]]
