from __future__ import annotations

from autogen_core import AgentId, MessageContext, RoutedAgent, SingleThreadedAgentRuntime, message_handler

from .models import (
    AssuranceTask,
    CaptureStageBundle,
    CaptureTask,
    ConditioningTask,
    LoggingTask,
    MeasurementTask,
    ReportTask,
    StageResult,
    VisionTask,
    WorkflowRequest,
    WorkflowResult,
)
from .policy import default_workflow_policy
from .skills import (
    assess_capture_quality,
    assess_multimodal_conditions,
    build_assurance_gate,
    build_report_contract,
    calculate_rqd,
    evaluate_vision_stage,
    measure_recovery,
    plan_rectification,
    skipped_stage,
    validate_engineering_logs,
)


class ConditioningAgent(RoutedAgent):
    @message_handler
    async def bind(self, message: ConditioningTask, ctx: MessageContext) -> StageResult:
        return assess_multimodal_conditions(message.conditions, message.confidence_threshold)


class CaptureAgent(RoutedAgent):
    @message_handler
    async def qualify(self, message: CaptureTask, ctx: MessageContext) -> CaptureStageBundle:
        return CaptureStageBundle(stages=[
            assess_capture_quality(message.evidence, message.confidence_threshold),
            plan_rectification(message.evidence, message.confidence_threshold),
        ])


class VisionAgent(RoutedAgent):
    @message_handler
    async def inspect(self, message: VisionTask, ctx: MessageContext) -> StageResult:
        return evaluate_vision_stage(
            message.evidence,
            message.vision,
            message.action,
            message.confidence_threshold,
        )


class MeasurementAgent(RoutedAgent):
    @message_handler
    async def measure(self, message: MeasurementTask, ctx: MessageContext) -> StageResult:
        if message.action == "measure_recovery":
            return measure_recovery(message.runs, message.confidence_threshold)
        return calculate_rqd(message.runs, message.confidence_threshold)


class RuleEngineAgent(RoutedAgent):
    @message_handler
    async def classify(self, message: LoggingTask, ctx: MessageContext) -> StageResult:
        return validate_engineering_logs(
            message.intervals,
            message.discontinuities,
            message.confidence_threshold,
        )


class ReportAgent(RoutedAgent):
    @message_handler
    async def prepare(self, message: ReportTask, ctx: MessageContext) -> StageResult:
        return build_report_contract(message.stages, message.borehole_id)


class ValidationAgent(RoutedAgent):
    @message_handler
    async def gate(self, message: AssuranceTask, ctx: MessageContext) -> StageResult:
        return build_assurance_gate(message.stages, message.reviewer_approved)


class WorkflowCoordinator(RoutedAgent):
    @message_handler
    async def orchestrate(self, message: WorkflowRequest, ctx: MessageContext) -> WorkflowResult:
        policy = message.policy or default_workflow_policy()
        threshold = policy.automatic_logging_confidence
        stages: list[StageResult] = []

        conditioning = await self.send_message(
            ConditioningTask(conditions=message.conditions, confidence_threshold=threshold),
            AgentId("conditioning_agent", self.id.key),
        )
        stages.append(conditioning)

        capture = await self.send_message(
            CaptureTask(evidence=message.capture, confidence_threshold=threshold),
            AgentId("capture_agent", self.id.key),
        )
        stages.extend(capture.stages)

        capture_ready = conditioning.status == "pass" and all(
            stage.status == "pass" for stage in capture.stages
        )
        if capture_ready:
            piece_detection = await self.send_message(
                VisionTask(
                    evidence=message.capture,
                    vision=message.vision,
                    action="detect_core_pieces",
                    confidence_threshold=threshold,
                ),
                AgentId("vision_agent", self.id.key),
            )
        else:
            dependency = conditioning.stage if conditioning.status != "pass" else next(
                stage.stage for stage in capture.stages if stage.status != "pass"
            )
            piece_detection = skipped_stage("core_piece_detection", "detect_core_pieces", dependency)
        stages.append(piece_detection)

        if piece_detection.status == "pass":
            recovery = await self.send_message(
                MeasurementTask(
                    runs=message.runs,
                    action="measure_recovery",
                    confidence_threshold=threshold,
                ),
                AgentId("measurement_agent", self.id.key),
            )
        else:
            recovery = skipped_stage("recovery_measurement", "measure_core_recovery", piece_detection.stage)
        stages.append(recovery)

        if recovery.status == "pass":
            defect_detection = await self.send_message(
                VisionTask(
                    evidence=message.capture,
                    vision=message.vision,
                    action="find_defects",
                    confidence_threshold=threshold,
                ),
                AgentId("vision_agent", self.id.key),
            )
        else:
            defect_detection = skipped_stage("defect_detection", "find_defects", recovery.stage)
        stages.append(defect_detection)

        if defect_detection.status == "pass":
            classification = await self.send_message(
                LoggingTask(
                    intervals=message.intervals,
                    discontinuities=message.discontinuities,
                    confidence_threshold=threshold,
                ),
                AgentId("rule_engine_agent", self.id.key),
            )
        else:
            classification = skipped_stage(
                "geotechnical_logging",
                "classify_defects_and_rock",
                defect_detection.stage,
            )
        stages.append(classification)

        if classification.status == "pass":
            rqd_tcr = await self.send_message(
                MeasurementTask(
                    runs=message.runs,
                    action="compute_rqd_tcr",
                    confidence_threshold=threshold,
                ),
                AgentId("measurement_agent", self.id.key),
            )
        else:
            rqd_tcr = skipped_stage("measurement", "calculate_rqd_tcr_fracture_metrics", classification.stage)
        stages.append(rqd_tcr)

        report = await self.send_message(
            ReportTask(stages=stages, borehole_id=message.borehole_id),
            AgentId("report_agent", self.id.key),
        )
        stages.append(report)

        assurance = await self.send_message(
            AssuranceTask(stages=stages, reviewer_approved=message.reviewer_approved),
            AgentId("validation_agent", self.id.key),
        )
        stages.append(assurance)

        blockers = [finding for stage in stages if stage.status != "pass" for finding in stage.findings]
        requested_evidence = [
            finding for finding in blockers
            if "request" in finding.lower() or "additional evidence" in finding.lower()
        ]
        issue_status = (
            "blocked" if assurance.status == "fail"
            else "review_required" if assurance.status == "review"
            else "approved"
        )
        outputs = {
            "json": "ready" if report.status != "fail" else "blocked",
            "ags_4_1_1": "review_required" if report.status != "fail" else "blocked",
            "openground_pdf": "review_required" if report.status != "fail" else "blocked",
            "three_d_evidence": "review_required" if report.status != "fail" else "blocked",
        }
        return WorkflowResult(
            job_id=message.job_id,
            borehole_id=message.borehole_id,
            issue_status=issue_status,
            stages=stages,
            blockers=blockers,
            audit_events=[f"{index + 1:02d}:{stage.action}:{stage.status}" for index, stage in enumerate(stages)],
            policy=policy,
            requested_evidence=requested_evidence,
            report_outputs=outputs,
        )


async def run_workflow(request: WorkflowRequest) -> WorkflowResult:
    """Run the local, JSON-first AutoGen Core workflow without a model client."""
    runtime = SingleThreadedAgentRuntime()
    await ConditioningAgent.register(runtime, "conditioning_agent", lambda: ConditioningAgent("Multimodal evidence binder"))
    await CaptureAgent.register(runtime, "capture_agent", lambda: CaptureAgent("Scale and rectification gate"))
    await VisionAgent.register(runtime, "vision_agent", lambda: VisionAgent("Core-piece and defect evidence detection"))
    await MeasurementAgent.register(runtime, "measurement_agent", lambda: MeasurementAgent("Deterministic recovery, RQD and TCR"))
    await RuleEngineAgent.register(runtime, "rule_engine_agent", lambda: RuleEngineAgent("AS 1726 and ISRM classification rules"))
    await ReportAgent.register(runtime, "report_agent", lambda: ReportAgent("JSON-derived AGS, PDF and 3D products"))
    await ValidationAgent.register(runtime, "validation_agent", lambda: ValidationAgent("Confidence, consistency and issue assurance"))
    await WorkflowCoordinator.register(runtime, "workflow_coordinator", lambda: WorkflowCoordinator("Sequential verification coordinator"))

    runtime.start()
    try:
        result = await runtime.send_message(request, AgentId("workflow_coordinator", request.job_id))
        if not isinstance(result, WorkflowResult):
            raise TypeError("AutoGen workflow returned an unexpected result type.")
        return result
    finally:
        await runtime.stop_when_idle()
