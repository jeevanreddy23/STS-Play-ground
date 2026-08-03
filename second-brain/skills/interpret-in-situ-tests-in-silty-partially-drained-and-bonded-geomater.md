---
title: Interpret in-situ tests in silty, partially drained and bonded geomaterials
type: skill
tags: [skill, parameters]
confidence: medium
updated: 2026-08-01
---

# Interpret in-situ tests in silty, partially drained and bonded geomaterials

> **Source:** `In Situ Testing in Geomechanics The Main Tests by Fernando Schnaid (z-lib.org).pdf` (Chapter 3 CPTU - Properties in silty soils (pp 134-137, Figures 3.42-3.43), Properties in bonded geomaterials (pp 137-140, Figure 3.45); Chapter 7 Residual soils (pp 286-287, Figure 7.11, Table 7.6)), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A defensible position on whether penetration in an intermediate-permeability or structured material was drained, undrained or partially drained, and a parameter set expressed as bounds rather than single values where structure dominates.

## Inputs

- Corrected tip resistance, pore pressure and derived pore pressure parameter profiles
- Estimated hydraulic conductivity of the layer, from dissipation testing or grading
- Penetration rate used and probe diameter
- Small-strain shear modulus from a seismic measurement
- Effective stress profile and any independent strength measurements
- Geological information on weathering, bonding and parent rock for residual profiles

## Procedure

1. Recognise the problem class. Materials with scattered grading, mixed mineralogy and variable clay content sit in an intermediate hydraulic conductivity band where neither the drained assumption used for sand nor the undrained assumption used for clay holds, and where existing analytical, numerical and empirical correlations can give unrealistic parameters. The book states there are no standardised recommendations for performing or interpreting in-situ tests in these materials.
2. Screen for drainage condition three ways. By hydraulic conductivity: above a stated upper threshold penetration is fully drained, below a stated lower threshold it is fully undrained, and between them partial drainage occurs. By the pore pressure parameter: below a stated value the direct use of cone factors for undrained strength becomes questionable, and full undrained penetration is indicated only above a higher value. And by the normalised strength ratio: a Cam-clay-type normally consolidated soil should give a narrow band of undrained strength ratio, so a value outside it indicates overconsolidation, partial drainage, or silt behaviour that does not follow the model.
3. Use the reported pattern as a diagnostic: as the pore pressure parameter falls below the fully undrained threshold, the apparent undrained strength ratio rises above the normally consolidated band; at very low values of the parameter the strength ratio becomes unreliable as a lower boundary. Separating overconsolidation from partial drainage from silt-specific behaviour is not straightforward and requires independent evidence.
4. Where partial drainage is suspected, consider a variable-rate approach - the drainage characterisation curve framework relates a non-dimensional shear or penetration rate (velocity times probe dimension over consolidation coefficient) to a degree of drainage, and can be applied to cone and to vane data alike. Slowing or speeding the probe changes the drainage condition deliberately rather than leaving it unknown.
5. For bonded and residual materials, take the site characterisation approach the book recommends: a mesh of boreholes with SPT or CPT to the depth the penetration tool can reach, continuous rotational coring below the soil-rock interface for the weathering pattern, and simultaneous geophysical survey. Rock degradation progresses from the surface downward so properties grade without sharp boundaries, and vertical and horizontal heterogeneity, metastability from decomposition and leaching, and rock blocks and boulders are all expected.
6. Identify bonding quantitatively. Bonded and cemented structure produces ratios of small-strain shear modulus to cone tip resistance, and to energy-corrected blow count, systematically higher than in cohesionless soils; residual soil datapoints fall above the band established for uncemented sands. Use that as the trigger for abandoning fresh-sediment correlations.
7. Express parameters in bonded soils as bounds. The book's recommendation, given the natural variation in bonded materials, is to express strength-stiffness correlations as lower and upper boundaries matched to the range of recorded small-strain modulus values, rather than as a single fitted relationship.
8. In bonded and unsaturated residual soils, carry both a friction angle and a cohesion intercept - the cementation component dominates behaviour at the low stress levels relevant to slopes, excavations and pavements, and cohesion varies over a much wider range than friction because it responds to suction and cementation.
9. Do not rely on index tests to characterise residual soils. Atterberg limits on the plasticity chart indicate clay mineral composition only and do not represent mechanical behaviour; the book states there are at present no suitable index tests for residual soils, and characterisation must be linked to the geological, pedological and engineering features of the deposit.
10. Combine techniques. In this highly variable environment the book's explicit recommendation is that a combination of different in-situ test techniques, rather than any single one, is what characterises stress-strain and strength properties.

## Decision rules

- Do not assume drained or undrained penetration in the intermediate permeability band - demonstrate it.
- Where the pore pressure parameter falls below the undrained threshold, the standard undrained strength interpretation is not usable.
- Where the stiffness-to-resistance ratio plots above the uncemented band, discard fresh-sediment correlations.
- In residual and bonded soils, report parameter bounds, not best-fit single values.
- Never characterise a residual soil on Atterberg limits alone.

## Checks

- Drainage condition assessed by at least two of the three screening routes
- Variable-rate penetration or dissipation testing used where drainage condition is critical
- Bonding screening plotted for every unit before correlations are applied
- Geological and weathering model built alongside the parameter model
- Independent strength measurement obtained where partial drainage is indicated

## Common errors

- Applying a clay cone factor to a silt and reporting a spuriously high undrained strength
- Interpreting a residual soil with sedimentary-soil correlations
- Reporting a single design line through scattered bonded-soil data
- Omitting the cohesion intercept in low-stress problems in cemented residual soils
- Using plasticity chart position as evidence of mechanical behaviour in residual soils

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- The book states explicitly that interpretation in intermediate-permeability soils is unresolved - treat results as bounded estimates.
- Residual soil strength databases cited are from specific tropical geologies and do not transfer to Australian weathered profiles without local validation.

## Standards cited

ISO 22476-1, AS 1726 (residual soil description), Eurocode 7 Part 2

## Related

- [[AS 1726 soil and rock description]]
- [[Rock weathering classes]]
- [[Borehole log conventions]]
- [[Soil description order]]
- [[Skills]]
