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
        self.assertIn("vision", [stage.stage for stage in result.stages])
        self.assertEqual(len(result.audit_events), len(result.stages))

    def test_missing_scale_blocks_issue(self) -> None:
        request = self.load_request()
        request.capture.scale_marker_mm = None
        result = asyncio.run(run_workflow(request))
        self.assertEqual(result.issue_status, "blocked")
        self.assertEqual(result.stages[0].status, "fail")


if __name__ == "__main__":
    unittest.main()
