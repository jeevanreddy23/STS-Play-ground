from __future__ import annotations

import asyncio
import json
import sys
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))

from geotech_autogen.models import WorkflowRequest
from geotech_autogen.workflow import run_workflow


class WorkflowTests(unittest.TestCase):
    def load_request(self) -> WorkflowRequest:
        payload = json.loads((ROOT / "example_job.json").read_text(encoding="utf-8"))
        return WorkflowRequest.model_validate(payload)

    def test_local_workflow_requires_review(self) -> None:
        result = asyncio.run(run_workflow(self.load_request()))
        self.assertEqual(result.issue_status, "review_required")
        self.assertEqual(result.stages[-1].stage, "assurance")
        self.assertEqual(
            [stage.stage for stage in result.stages],
            [
                "multimodal_conditioning",
                "capture_qa",
                "rectification",
                "core_piece_detection",
                "detection_box_review",
                "core_mask_segmentation",
                "segmentation_mask_review",
                "recovery_measurement",
                "defect_detection",
                "geotechnical_logging",
                "measurement",
                "rqd_engineering_comparison",
                "report_products",
                "assurance",
            ],
        )
        self.assertEqual(len(result.audit_events), len(result.stages))
        self.assertEqual(result.policy.automatic_logging_confidence, 0.95)
        self.assertEqual(result.policy.output_contract, "json_first")
        self.assertEqual(result.report_outputs["ags_4_1_1"], "review_required")

    def test_missing_scale_blocks_issue(self) -> None:
        request = self.load_request()
        request.capture.scale_marker_mm = None
        result = asyncio.run(run_workflow(request))
        self.assertEqual(result.issue_status, "blocked")
        self.assertEqual(result.stages[1].stage, "capture_qa")
        self.assertEqual(result.stages[1].status, "fail")
        self.assertTrue(result.stages[3].metrics["skipped"])

    def test_bh7_requests_additional_evidence_without_inventing_measurements(self) -> None:
        payload = json.loads((ROOT / "bh7_job.json").read_text(encoding="utf-8"))
        result = asyncio.run(run_workflow(WorkflowRequest.model_validate(payload)))
        self.assertEqual(result.issue_status, "blocked")
        self.assertTrue(result.requested_evidence)
        recovery = next(stage for stage in result.stages if stage.stage == "recovery_measurement")
        self.assertTrue(recovery.metrics["skipped"])
        self.assertEqual(result.report_outputs["three_d_evidence"], "blocked")

    def test_sub_95_percent_classification_blocks_automatic_logging(self) -> None:
        request = self.load_request()
        request.discontinuities[0].classification_confidence = 0.94
        result = asyncio.run(run_workflow(request))
        logging = next(stage for stage in result.stages if stage.stage == "geotechnical_logging")
        self.assertEqual(logging.status, "fail")
        self.assertEqual(result.issue_status, "blocked")

    def test_box_edit_gate_blocks_segmentation(self) -> None:
        request = self.load_request()
        request.vision.detection_review_complete = False
        result = asyncio.run(run_workflow(request))
        box_review = next(stage for stage in result.stages if stage.stage == "detection_box_review")
        mask_stage = next(stage for stage in result.stages if stage.stage == "core_mask_segmentation")
        self.assertEqual(box_review.status, "fail")
        self.assertTrue(mask_stage.metrics["skipped"])

    def test_rqd_comparison_is_a_hard_issue_gate(self) -> None:
        request = self.load_request()
        request.vision.rqd_comparison_within_tolerance = None
        result = asyncio.run(run_workflow(request))
        comparison = next(stage for stage in result.stages if stage.stage == "rqd_engineering_comparison")
        self.assertEqual(comparison.status, "fail")
        self.assertEqual(result.issue_status, "blocked")


if __name__ == "__main__":
    unittest.main()
