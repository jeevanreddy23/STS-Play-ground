# GeoLogs: Automated Rock-Defect Logging with Computer Vision

## 1. Case-study purpose

This document describes a proposed GeoLogs workflow for converting core photographs, face scans, SfM photogrammetry and mobile LiDAR into auditable rock-defect logs. The objective is to reduce repetitive manual interpretation while keeping a geotechnical engineer in control of the final classification.

The workflow is inspired by the IMDEX presentation *Computer Vision and Rock Imagery: Making the Most of Core Imagery, Chip Imagery and Televiewer* and is intended as an implementation and validation planâ€”not as a claim that every algorithm below is demonstrated in that presentation.

## 2. Customer problem

Engineering teams often have a large historical backlog of core trays, core runs or face scans. The images may be captured at different times, with inconsistent scale, lighting, overlap, orientation and image quality. Manual logging is slow and can vary between operators, especially when a visible line may be a genuine structural defect, a blast-induced fracture, a saw cut, or surface contamination.

GeoLogs addresses this by producing a standardised, reviewable first pass:

- consolidate overlapping core photographs into one geometrically aligned view;
- detect and segment candidate defects and non-geological artefacts;
- estimate orientation and spacing from 2D imagery or 3D geometry;
- classify rock condition and defect terminology using an AS 1726:2017-aligned vocabulary;
- expose confidence, evidence images and reviewer edits for every log entry.

## 3. Product claim to test

> GeoLogs can accelerate rock-defect logging while preserving engineering review, and can achieve a greater than 85% agreement with an experienced manual log on a representative, labelled project dataset.

The 85% figure is a validation target. It must not be presented as achieved until it has been measured on held-out project data with a pre-agreed scoring method.

## 4. End-to-end workflow

```text
Historical core photos / face scans / SfM / mobile LiDAR
                         |
                         v
       Ingest, quality checks, scale and coordinate metadata
                         |
                         v
  Same-view consolidation and geometric registration of images
                         |
                         v
     Semantic segmentation: rock / defect / artefact / occlusion
                         |
               +---------+----------+
               |                    |
               v                    v
       2D line and texture       3D normals and point cloud
       feature extraction        feature extraction
               |                    |
               +---------+----------+
                         v
          Defect candidate linking and joint-set clustering
                         |
                         v
          AS 1726 vocabulary, confidence and draft log output
                         |
                         v
             Engineer review, correction and sign-off
                         |
                         v
                 Validation and model improvement
```

## 5. Phase 1 â€” Historical backlog processing

### 5.1 Ingestion and metadata

Each asset receives a stable identifier and is linked to project, borehole or face, run/chainage, depth or spatial coordinates, capture device, scale reference, orientation and image timestamp. Images without reliable scale or orientation are retained, but their outputs are marked as qualitative until calibrated.

Quality checks should flag blur, glare, saturation, missing overlap, motion distortion, mud coverage, duplicated images and insufficient texture for photogrammetry.

### 5.2 Consolidating multiple core photographs into one same-view image

The same core interval is often photographed in several overlapping frames. GeoLogs should create a single high-detail composite while preserving provenance:

1. Detect local features or learned keypoints in each photograph.
2. Match features only within the same tray/run and reject geometrically inconsistent matches with RANSAC.
3. Estimate a homography for a near-planar tray view or a cylindrical/unwrapped model for core.
4. Register the images into a common run coordinate system.
5. Estimate exposure and colour differences, then blend with seam suppression.
6. Prefer the sharpest, least-obscured pixels in overlapping regions; retain alternate pixels when the preferred view contains glare, dust or mud.
7. Preserve an uncertainty mask and links from every composite pixel back to its source image.
8. Export one canonical view plus a contact sheet of source images for audit.

The composite should increase visible detail, not manufacture geological detail. Super-resolution may be used only as a display aid and must never be the sole evidence for a logged defect.

### 5.3 Semantic segmentation under occlusion

The first model should segment at least:

- intact rock;
- candidate structural defect;
- blast-induced or handling fracture;
- saw cut or mechanical edge;
- dust, mud, drilling residue and glare;
- tray, scale, labels and other capture artefacts;
- unknown/occluded region.

The segmentation model should be trained with masks for partial visibility and hard negatives. Occluded regions should remain explicitly unknown rather than being filled with a confident geological interpretation. A defect candidate that disappears behind mud, a label or a core break should be represented as a discontinuous observation with an uncertainty flag.

### 5.4 Distinguishing structural joints from look-alikes

Semantic segmentation alone is not enough. The classifier should combine image evidence, continuity and geometry:

| Candidate | Evidence supporting a structural defect | Evidence against / artefact cues |
|---|---|---|
| Joint | persistent planar or gently curved trace; consistent aperture, roughness or infill; recurrence across adjacent core pieces or 3D surface | isolated low-contrast mark with no geometric support |
| Sheared surface / zone | polished or slickensided texture, displacement, crushed or closely spaced defect band, bounded zone | thin uniform line caused by capture or cutting |
| Blast/handling fracture | fresh irregular break, matching damage at core end, limited continuity, no consistent plane in 3D |â€”|
| Saw cut | straight, uniformly wide, high-contrast kerf; parallel to cutting direction; repeated mechanical texture |â€”|
| Dust/mud | low-frequency surface coverage, colour/texture inconsistent with exposed rock, removable or non-planar appearance |â€”|

The output should be a ranked classification with evidence, not an irreversible binary decision. Structural candidates should be linked across images and 3D observations before they become log records.

## 6. Phase 2 â€” Point-cloud and photogrammetry pipelines

### 6.1 SfM photogrammetry

For overlapping face or core imagery, the pipeline should:

1. perform camera calibration and feature matching;
2. solve camera poses with bundle adjustment;
3. generate a dense point cloud and mesh;
4. scale and georeference the model using survey targets, known dimensions or control points;
5. calculate robust local surface normals and normal confidence;
6. project segmentation labels from images onto the 3D surface;
7. link 2D defect traces to 3D planes or surfaces.

### 6.2 Mobile LiDAR

For mobile LiDAR, GeoLogs should ingest point coordinates, intensity/colour where available and the device trajectory or registration metadata. Noise removal must be conservative around narrow defects. The pipeline should estimate normals using an adaptive neighbourhood, because a fixed radius can erase small joints on dense data or produce unstable normals on sparse data.

### 6.3 Joint-set isolation

Candidate defect points can be represented by position, normal, roughness, curvature, intensity/colour, segmentation class and local confidence. Joint-set clustering can then use:

- Mean-Shift or density-based clustering over pole-space/orientation features;
- robust plane fitting or RANSAC for individual surfaces;
- learned embeddings and a custom neural network where the training set is large enough;
- spatial continuity constraints so that unrelated parallel marks are not merged automatically.

Each cluster should report mean orientation, dispersion, trace length, spacing, persistence, aperture proxy, confidence and the images/points that support it. The algorithm must allow multiple joint sets to intersect and must not force every line into a joint set.

## 7. AS 1726:2017-aligned output vocabulary

The user-facing export should use Australian geotechnical terms and codes, with the project configuration recording the applicable edition and any client-specific extensions. The minimum controlled vocabulary should include:

### Weathering / material condition

Residual Soil (RS), Extremely Weathered (XW), Highly Weathered (HW), Moderately Weathered (MW), Slightly Weathered (SW), Distinctly Weathered (DW), and Fresh (FR).

The model should treat Residual Soil and Extremely Weathered material as soil-like outcomes where appropriate, while retaining parent-rock information when it can be supported by the evidence. Where an image cannot distinguish adjacent weathering states, the draft log should say so and request review.

### Rock strength

Very Low, Low, Medium, High and Very High should be emitted only when supported by field observations, point-load results, UCS data or a project-approved correlation. A vision model may propose a class from visual evidence, but it should not imply that image appearance replaces a point-load or laboratory test. The source test, correlation version and uncertainty should be recorded with every strength result.

### Defect types

The defect schema should support Joint, Bedding plane (BP), Parting, Sheared Surface, Sheared Zone and Seam, plus project-approved subtypes such as infilled or crushed material. Bedding plane is treated as a project-level structural-fabric label and should be reviewed against the applicable AS 1726 term for the final issued log. The schema should also record orientation form (planar, curved, undulating, stepped or irregular), aperture, roughness, infilling, weathering/alteration, persistence and confidence.

## 8. Human-in-the-loop review

Every proposed record should open to a review panel containing:

- canonical consolidated image;
- source-image thumbnails and pixel provenance;
- segmentation overlay;
- 3D point-cloud/mesh view where available;
- proposed AS 1726 term and confidence;
- competing hypotheses, such as joint vs saw cut;
- editable trace, interval, orientation and defect attributes;
- reviewer identity, timestamp and reason for override.

Low-confidence and high-consequence defects should be routed to review first. Corrections should be captured as labelled training data only after the reviewer confirms the final interpretation.

## 9. Validation plan

### 9.1 Dataset design

Use representative Sydney Hawkesbury Sandstone and Ashfield Shale where available, plus varied lighting, moisture, mud, blast damage, saw-cut surfaces, core breaks and occlusion. Split by borehole, face or projectâ€”not by neighbouring imagesâ€”to prevent leakage between training and test data.

### 9.2 Comparison against manual logs

Create a locked reference log by at least one experienced geotechnical logger, with adjudication for disagreements. Compare automation against the reference at several levels:

- segmentation: per-class precision, recall and intersection-over-union;
- candidate detection: recall of true defects and false positives per metre or square metre;
- defect type: macro-F1 and confusion matrix;
- interval/trace agreement: tolerance-bounded overlap and positional error;
- orientation: angular error and joint-set assignment agreement;
- AS 1726 vocabulary: exact-code agreement and reviewer acceptance;
- productivity: human minutes per metre before and after assistance.

The headline â€œgreater than 85% accuracy matchâ€ should be defined before testing. A recommended acceptance gate is at least 85% exact or tolerance-bounded agreement on the primary defect-log record, with separate minimum recall requirements for shears and seams and a published abstention rate for uncertain cases.

### 9.3 Error analysis

Report failures by cause: occlusion, poor scale, glare, mud, blast damage, saw cuts, core breaks, weak texture, registration drift, ambiguous geology and vocabulary mismatch. The system should be allowed to abstain; a transparent â€œneeds reviewâ€ output is preferable to a confident wrong defect.

## 10. Commercial transition

### Phase 1: Backlog pilot

Process a defined historical sample using the customer's existing images and logs. Deliver consolidated views, draft defect logs, confidence overlays and an exception list.

### Phase 2: Validation

Compare the AI-assisted outputs with manual logs, publish the agreed metrics and document failure modes. A successful pilot should show both quality and time saved, not accuracy alone.

### Phase 3: Enterprise licensing

Offer annual subscription or per-project/API licensing for GeoLogs, with options for managed processing, private deployment, data retention, model retraining and engineering review. The commercial proposal should define responsibility for final professional interpretation and sign-off.

## 11. Suggested case-study evidence package

1. One-page problem and outcome summary.
2. Before/after example of multiple core photos consolidated into one same-view image.
3. Segmentation overlay showing a genuine joint, blast fracture, saw cut and mud occlusion.
4. 3D view showing normals, candidate planes and clustered joint sets.
5. AS 1726-aligned log export with confidence and reviewer edits.
6. Validation table against the manual reference log.
7. Error-analysis examples and known limitations.
8. Productivity and backlog-throughput comparison.
9. Pilot-to-licensing deployment plan.

## 12. Important limitations

Computer vision can prioritise and standardise logging, but it cannot establish geological truth from an image alone. Scale, orientation, 3D registration, test data and engineering review remain essential. The product should never silently infer a defect through an occluded region or convert a visual strength estimate into a certified point-load result.
