---
title: Choose Active vs Passive support force application and diagnose invalid surfaces in Slide2
type: skill
tags: [skill, slope-stability]
confidence: high
updated: 2026-08-01
---

# Choose Active vs Passive support force application and diagnose invalid surfaces in Slide2

> **Source:** `Tutorial_06_Support.pdf` (Pages 6-11 to 6-13 (error -108, Info Viewer) and 6-17 to 6-18 (Active vs Passive equations)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** Correct choice of how support force enters the factor of safety equation, and correct reading of the Info Viewer invalid-surface counts (notably Error Code -108) in supported models

## Inputs

- A supported Slide2 model
- Info Viewer summary of valid/invalid surfaces per analysis method

## Procedure

1. Understand the two formulations: Active support subtracts the shear component of support force from the driving force in the FS denominator and adds the normal component times tan(phi) to resistance; Passive support adds both normal times tan(phi) and shear components to the resisting force in the numerator
2. Set Force Application (Active or Passive) per support type in Define Support Properties (Grouted Tieback defaults to Active)
3. After computing, open Analysis > Info Viewer and review valid vs invalid surface counts per method
4. Use Data > Filter Surfaces > Surfaces With Error Code -108 to display surfaces where driving force/moment fell below 0.1, meaning no valid FS could be computed
5. If many shallow surfaces return -108 under Active application and their results are needed, re-run with Passive application and confirm the invalid count collapses (from thousands to about 32 in the worked example)

## Decision rules

- Treat pre-tensioned elements (tensioned tiebacks, cables, rock bolts) that load the mass before movement as Active; treat elements mobilised by slope movement (soil nails, geotextiles) as Passive
- The loading/movement sequence is never known exactly, so the Active/Passive choice is somewhat arbitrary and is the engineer's call
- Passive application always yields a lower (more conservative) FS than Active where Active produces a valid FS

## Checks

- Error -108 surfaces cluster near the ground surface where small driving moments are easily negated by Active support forces — their presence is expected behaviour, not necessarily a modelling error
- Confirm which error codes dominate the invalid count before blaming geometry (code 1000 = no valid slip surface is separate)

## Common errors

- Interpreting a large invalid-surface count under Active support as a broken model
- Reporting the Active-support FS without noting Passive would be lower

## Caveats

- Software tutorial — a worked teaching example, not a design procedure; validate models against the project brief and a qualified reviewer

## Standards cited

None cited in the source passage.

## Related

- [[Skills]]
- [[Skills]]
