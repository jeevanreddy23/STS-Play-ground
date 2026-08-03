---
title: Select a geosynthetic by function, robustness class and filtration criteria
type: skill
tags: [skill, earthworks]
confidence: medium
updated: 2026-08-01
---

# Select a geosynthetic by function, robustness class and filtration criteria

> **Source:** `Handbook of Geotechnical Investigation and Design Tables_Bert Look 2014.pdf` (Chapter 16 Geosynthetics, Sections 16.1-16.23 (Tables 16.1 to 16.23), pp 237-248), held in the local reference library — see
> [[Reference library]]. This note is a paraphrased working aid, not the
> document. Values, clauses and criteria must be read from the source before
> they are relied on, and engineering conclusions need qualified review.

**Outcome.** A geosynthetic specified by the function it must perform, with a strength/robustness class that survives construction, filtration criteria matched to the base soil, and overlap and placement details stated.

## Inputs

- Required function: separation, reinforcement, filtration, drainage, containment, erosion control
- Subgrade strength (CBR or undrained strength) and its variability
- Aggregate nominal size and shape immediately adjacent to the geosynthetic
- Initial lift thickness over the geosynthetic and the construction plant that will run on it
- Base soil grading and uniformity coefficient for filter design
- Design life and chemical/UV exposure

## Procedure

1. Name the function first using Tables 16.1 and 16.3. A product usually performs a primary function plus secondary ones; the primary function sets the governing property (strength, permittivity, opening size, creep resistance).
2. Choose the polymer with Tables 16.2 and 16.3. Look notes polypropylene dominates geotextile manufacture on cost and chemical resistance, but loses effectiveness under high load and for critical structures because of creep, while polyester is increasingly used for geogrids; polypropylene and polyethylene need stabilising against ultraviolet exposure. Assess stiffness as strength divided by strain at a stated strain level, and apply a reduction for long design life.
3. Size for construction survivability, which frequently governs over the design function. Use Table 16.5 for static puncture resistance against stone size and subgrade strength, Table 16.6 for survivability rating from equipment pressure, aggregate and subgrade condition, and Table 16.7 for the corresponding physical property requirements (reported as minimum roll average values).
4. In Australian practice, use the G-rating robustness route. Table 16.8 defines the G-rating from the load on the plunger at failure and the drop height needed to make a hole of a stated size. Then use Table 16.9 for filters, drains and seals (non-woven required), Table 16.10 for ground conditions and construction equipment, and Table 16.11 for cover material and equipment.
5. Adjust robustness for lift thickness. Look's rule from Section 16.10 is that the base tables assume a modest initial lift, and the robustness requirement steps down as the initial lift thickness increases, in defined bands. Pre-rutting steps the requirement back up by one level. Check the maximum particle size implied by the lift thickness.
6. Convert to the road authority strength class using Table 16.12, which is the specification format used by Australian road authorities, noting the strength, tear and G-rating values are eightieth-percentile based while some manufacturers quote averages. The elongation threshold separates woven from non-woven.
7. Establish the strength class from the material immediately adjacent to the geosynthetic using Table 16.13 (aggregate above for horizontal placement, backfill size and trench depth for vertical placement) and Table 16.14 for placement against walls, where a smooth concrete facing allows a lower class than a rough one.
8. For reinforcement and separation in pavements, use Table 16.17 to decide which function applies at the subgrade strength in question - a separator adds little over sandy subgrades, a geogrid reduces displacement over loose sand - and Table 16.18 for placement location, observing the minimum cover over a geotextile and the minimum thickness required over very weak subgrades.
9. Quantify the benefit conservatively. Table 16.15 gives typical pavement thickness reduction as a function of design traffic, acceptable rut depth and the geotextile secant modulus and elongation; Table 16.16 gives bearing capacity factors for different rut depths and traffic conditions, with the subgrade strength taken from CBR by the stated relationship. Look notes the geosynthetic strength often does not govern, and that placing a geogrid at the subgrade surface does not deliver the expected benefit.
10. For filtration, apply the criteria in Table 16.19: opening size small enough to retain the base soil, large enough to pass water, using the base soil uniformity coefficient; permeability substantially greater than the soil being filtered; and adequate strength to survive placement stresses. Woven geotextiles clog less readily but have a narrower usable range.
11. For silt fences use Table 16.20 to set required strength against post spacing and impoundment height, with the stated ceiling on unreinforced impoundment height and post spacing above which mesh reinforcement is required.
12. Detail the overlap from Table 16.22 using load type and in-situ CBR, and use a larger minimum overlap when repairing damaged areas. Take typical achievable strengths from Table 16.21 and, where a stiffness benefit is being claimed for a composite layer, cross-check against the modulus improvement ranges in Table 16.23.

## Decision rules

- Specify the survivability class before the design-function class - most geosynthetics that fail, fail during construction.
- Robustness requirement is a function of lift thickness; do not carry a thin-lift specification into a thick-lift application (or the reverse).
- A separation geotextile over a sandy subgrade adds little; over a weak fine-grained subgrade it is the primary function.
- Filter opening size and permeability criteria must both be satisfied - meeting one and failing the other produces either piping or clogging.
- Apply a creep and design-life reduction to reinforcement strength; the short-term tensile strength is not the design strength.
- Do not place a geogrid directly at the subgrade surface expecting reinforcement benefit.

## Checks

- Function statement recorded and the governing property identified
- G-rating or strength class checked against both aggregate size and lift thickness
- Filter criteria checked against actual base soil grading, not an assumed one
- Overlap specified for the in-situ CBR and load type, with repair overlaps larger
- Ultraviolet exposure limited by a specified maximum time between placement and cover
- Claimed pavement thickness reduction supported by the modulus and elongation of the product actually supplied

## Common errors

- Specifying by product name rather than by class and property
- Comparing an eightieth-percentile specification value against a manufacturer's average value
- Assuming a geotextile gives reinforcement when it is only acting as a separator
- Leaving geosynthetics exposed to sunlight beyond the material's tolerance
- Selecting a filter on opening size alone and clogging it

## Caveats

- Reference text, not a design standard - verify against the source pages and Australian practice before use.
- This skill covers design selection; conformity testing and site placement are covered by the project's existing R63 geotextile skills.
- Robustness tables cite 1980s to 2009 sources; check the current road authority specification for the strength class values.

## Standards cited

TfNSW R63 Geotextiles (and the project's existing geotextile conformity skills), Austroads / AS 3706 geotextile test method series, AASHTO M288 geotextile specification

## Related

- [[Rock strength classes]]
- [[Borehole log conventions]]
- [[Library - RMS and TfNSW specifications]]
- [[Skills]]
