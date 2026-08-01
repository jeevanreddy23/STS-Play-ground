---
title: Determine the California Bearing Ratio of remoulded road construction material to RMS T117
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Determine the California Bearing Ratio of remoulded road construction material to RMS T117

> **Source:** `t117a.pdf` (RMS Test Method T117 Ed 3 Rev 0 (October 2012), Clauses 2-7), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A reported CBR (with swell, densities and moisture ratios) for a laboratory-compacted, optionally soaked specimen of the passing-19 mm fraction of a road construction material.

## Inputs

- Sample prepared per T105, passing the 19.0 mm sieve (record percentage retained)
- OMC and MDD of the -19 mm material from T111 or T112
- CBR mould, spacer disc, perforated plate/stem and surcharges to the dimensional/mass tolerances of Clause 3
- Loading machine with controlled penetration rate ~1 mm/min and force device meeting AS 2193 Grade C for the expected CBR range
- Target LMR and LDR (defaults: LMRt 100% with -3/+2% tolerance, LDRt 100% +/- 1%, standard compaction, 10-day soak — Clause 2(f))

## Procedure

1. Determine moisture content (T120) and OMC of a -19 mm sub-sample; calculate the Laboratory Moisture Ratio LMR = w/OMC x 100 and adjust moisture and cure (per T105 curing) if outside tolerance (Clause 5.1).
2. Clamp mould with collar to base plate, insert spacer disc and filter paper; determine moulding moisture content around compaction time (Clause 5.2).
3. Compact in the specified number of equal layers with the specified rammer mass, drop height and blows per layer (standard vs modified table in Clause 5.2(d)); adjust blow count via T105 Process A.12 where target LDR is not 100%; overfill by no more than ~5 mm.
4. Remove collar, level with straightedge, weigh mould plus specimen, invert onto filter paper on the perforated base plate.
5. For soaked tests: fit perforated plate/stem and full surcharge mass, immerse with free water access top and bottom, record initial swell reading, soak for the specified days keeping water above the mould, record final swell reading, drain ~15 minutes (Clause 5.3). For unsoaked: surcharge, cover, and stand at least 4 hours for pore pressure dissipation.
6. Seat the penetration piston at the small seating load appropriate to expected CBR (Clause 5.4(c)), zero devices, and penetrate at 1 +/- 0.2 mm/min recording loads at the scheduled penetrations up to 7.5 mm (extend to 12.5 mm if the curve stays concave-up).
7. After the test, take moisture contents of a full-depth vertical slice and of the top ~30 mm layer.
8. Calculate dry density, LMR, LDR and swell per Clause 6; plot the load-penetration curve, correct the zero point by tangent if initially concave-up, read loads at 2.5 and 5.0 mm and compute CBR as the greater of the two ratios to the standard loads given in Clause 6(g); report per Clause 7 including the rounding table.

## Decision rules

- Static compaction is not permitted for this test (Clause 2(c)).
- If penetration of at least 2.5 mm cannot be achieved, stop and report maximum penetration only.
- Report CBR to the rounding interval that depends on its magnitude (table in Clause 7(j)); attach the load-penetration plot when zero correction exceeds the stated amount.
- Plan moulding so penetration testing falls on a working day given the soak period.

## Checks

- LMR and LDR of the moulded specimen within target tolerances; report both target and achieved values.
- Force device calibrated over the range appropriate to the expected CBR.
- Layer thickness uniformity within ~5 mm; specimen not underfilled/overfilled beyond limits (else remould with fresh material).

## Common errors

- Removing a large oversize fraction and ignoring its effect — large retained-on-19 mm proportions can materially change the CBR versus the whole material.
- Inadequate curing after moisture adjustment, giving non-uniform moisture at moulding.
- Not correcting the zero point of a concave-up load-penetration curve, biasing CBR low.
- Displacement gauge mounted so machine compliance contaminates the penetration measurement.

## Caveats

- The file named t117a contains Test Method T117 — T117a was withdrawn and amalgamated into T117 (Ed 2/Rev 0, 2007); cite T117, not T117a.
- Verify masses, tolerances and default soak period against the current TfNSW issue before laboratory use.

## Standards cited

AS 1289.6.1.1 (CBR standard laboratory method), RMS/TfNSW T105, T111, T112, T120, AS 2193 (force-measuring systems), AS 2103 (dial gauges)

## Related

- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
