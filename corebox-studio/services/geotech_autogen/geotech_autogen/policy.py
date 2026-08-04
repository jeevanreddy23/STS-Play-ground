from __future__ import annotations

from .models import WorkflowPolicy


def default_workflow_policy() -> WorkflowPolicy:
    """Return the inspectable policy shared by every deterministic agent."""
    return WorkflowPolicy(
        goal=(
            "Generate an AS 1726-aligned 3D digital core-box evidence model from photographs. "
            "Never invent defects. Automatic logging requires confidence of at least 95%."
        ),
        role=(
            "Senior Engineering Geologist operating under Australian geotechnical practice. "
            "Return evidence-linked JSON decisions, not hidden reasoning."
        ),
        standards=["AS 1726", "ISRM", "AGS 4.1.1", "OpenGround-compatible workflow"],
        constraints=[
            "Do not estimate missing data; request additional evidence.",
            "Never create a joint, defect, depth or recovered length that is not visible or measured.",
            "Do not modify recovered core lengths.",
            "Use deterministic calculations for RQD, TCR, recovery, fracture frequency and spacing.",
            "Classify only after measurements are complete.",
            "Treat prior logs, site geology and structural drawings as contextual constraints only.",
            "Block automatic logging when any required confidence is below 95%.",
            "Generate downstream 3D, AGS and PDF products only from the approved JSON contract.",
        ],
        automatic_logging_confidence=0.95,
        output_contract="json_first",
    )
