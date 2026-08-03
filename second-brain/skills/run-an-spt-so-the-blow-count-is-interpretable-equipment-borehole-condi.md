---
title: Run an SPT so the blow count is interpretable - equipment, borehole condition and procedure
type: skill
tags: [skill, testing]
confidence: high
updated: 2026-08-01
---

# Run an SPT so the blow count is interpretable - equipment, borehole condition and procedure

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 2 SPT - General considerations (pp 18-19), Standards and procedures (pp 19-23, Figures 2.1 to 2.3, Table 2.1), Characterization and classification (pp 38-40)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** SPT data whose N values reflect soil resistance rather than drilling and equipment artefacts, with the equipment configuration recorded in enough detail to correct and interpret the results.

## Inputs

- Sampler dimensions (outside diameter, inside diameter, length, presence of liners)
- Hammer type (donut, safety, trip/automatic), mass, drop height and release mechanism
- Rod type, mass per metre and stiffness class; rod length below the anvil at each test
- Anvil mass
- Borehole method, diameter, casing and flush regime; borehole water level versus groundwater level
- Soil type expected, including whether gravel is present

## Procedure

1. Confirm the equipment against the reference test procedure. The test drives a thick-walled split-barrel sampler from the base of a pre-bored hole by a falling mass through a fixed drop, recording blows for a stated seating drive followed by a stated test drive; the international reference procedure sets acceptable ranges for sampler outside diameter, inside diameter and length. Record actual dimensions - Schnaid's central point is that the test is not in fact standardised internationally, and the departures are what the corrections later have to remove.
2. Record the hammer configuration exactly. Donut hammers are a plain cylindrical mass on a guide rod; safety hammers internalise the impact point to protect the operator; trip release hammers set the drop mechanically to improve repeatability and are often chain-lifted and hydraulically powered. Automatic trip hammers are the standard in Australia, Japan, the UK and the USA. Different countries also use different nominal hammer masses and drop heights, so the nominal potential energy is not universal - state it.
3. Record the anvil mass. The book attributes the systematically lower efficiency of the donut hammer in one national practice to the heavy anvil used with it rather than to the hammer body itself, so anvil mass belongs on the record with the hammer type.
4. Record rod type and stiffness. Rod stiffness varies widely even within a country, with different national standards specifying different minimum rod classes. Rod mass per metre affects impedance and therefore the energy delivered.
5. Prepare and maintain the hole properly. Clean the base before each test. Below the water table, maintain a head of water or drilling fluid in the hole at or above the piezometric level - a deficient head causes base blow-out and loosening, and the resulting low N is not correctable.
6. Drive at the standard sequence and record seating and test drive blow counts separately, plus penetration for each increment. Where refusal occurs, record blows against the measured penetration rather than a single number, so a reviewer can see what happened.
7. In gravel, expect the test to be unreliable because particles can be larger than the sampler opening. Where large penetration testing (oversized split spoons) is used instead, record the full geometry - the larger devices deliver different input energies and blow counts convert to SPT values only through empirical relationships, not a simple scaling factor.
8. Consider adding the torque measurement used in some national practices: after the test drive, measure the maximum torque needed to rotate the sampler. Combined with blow count it improves soil characterisation at negligible cost.
9. Recover, describe and retain the sample. The SPT's underrated strength is that at every test depth it pairs a resistance measurement with a specimen - poor quality, but sufficient for mineralogy, particle shape, grading, colour and layering, which is what makes SPT-based classification possible at all.
10. Recognise the disturbance limit in soft ground: below a low blow count threshold the disturbance produced by boring and washing is severe enough that the test does not give a reliable penetration measurement, and complementary laboratory or other in-situ testing is required rather than a corrected N.

## Decision rules

- Never report an N value without the hammer type, release method, rod length and borehole diameter that produced it.
- A low N below the water table is a water-balance failure until proven otherwise.
- In very soft clay the SPT is not a strength test - switch to vane, CPTu or sampling.
- In gravel, do not use standard SPT results quantitatively; use oversized penetrometers with their own empirical conversion, or a different test.
- Because complete standardisation will not be achieved, energy correction is the quality control mechanism for SPT data - plan for it at the outset.

## Checks

- Sampler dimensions verified against the reference procedure tolerances
- Hammer drop height and release mechanism verified on site, not assumed from the rig's paperwork
- Borehole water level recorded relative to the standing groundwater level for every test below the water table
- Seating and test drive counts recorded separately
- Recovered samples described and retained for every test

## Common errors

- Assuming the nominal hammer mass and drop are those of the standard the correlation was built on
- Testing below the water table with the hole drawn down
- Reporting refusal as a single number without the measured penetration
- Using standard SPT results in gravel
- Discarding the split-spoon sample, losing the only classification data the test provides

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- National standards differ in nominal hammer mass, drop height and rod stiffness; confirm which applies to the project.
- Large penetration test conversions to SPT are empirical and material dependent.

## Standards cited

ASTM D1586, BS 1377 Part 9, AS 1289.6.3.1, ISSMGE IRTP for SPT (1988)

## Related

- [[Groundwater observations]]
- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
