from __future__ import annotations

from autogen_core import AgentId, MessageContext, RoutedAgent, SingleThreadedAgentRuntime, message_handler

from .models import (
    AssuranceTask,
    CaptureStageBundle,
    CaptureTask,
    LoggingTask,
    MeasurementTask,
    StageResult,
    VisionTask,
    WorkflowRequest,
    WorkflowResult,
)
from .skills import (
    assess_capture_quality,
    build_assurance_gate,
    calculate_rqd,
    plan_detection_and_segmentation,
    plan_rectification,
    validate_engineering_logs,
)


class CaptureAgent(RoutedAgent):
    @message_handler
    async def qualify(self, message: CaptureTask, ctx: MessageContext) -> CaptureStageBundle:
        return CaptureStageBundle(
            stages=[assess_capture_quality(message.evidence), plan_rectification(message.evidence)]
        )


class VisionAgent(RoutedAgent):
    @message_handler
    async def configure(self, message: VisionTask, ctx: MessageContext) -> StageResult:
        return plan_detection_and_segmentation(message.evidence)


class MeasurementAgent(RoutedAgent):
    @message_handler
    async def measure(self, message: MeasurementTask, ctx: MessageContext) -> StageResult:
        return calculate_rqd(message.runs)


class LoggingAgent(RoutedAgent):
    @message_handler
    async def compile(self, message: LoggingTask, ctx: MessageContext) -> StageResult:
        return validate_engineering_logs(message.intervals, message.discontinuities)


class AssuranceAgent(RoutedAgent):
    @message_handler
    async def gate(self, message: AssuranceTask, ctx: MessageContext) -> StageResult:
        return build_assurance_gate(message.stages, message.reviewer_approved)


class WorkflowCoordinator(RoutedAgent):
    @message_handler
    async def orchestrate(self, message: WorkflowRequest, ctx: MessageContext) -> WorkflowResult:
        capture_results = await self.send_message(
            CaptureTask(evidence=message.capture),
            AgentId("capture_agent", self.id.key),
        )
        vision_result = await self.send_message(
            VisionTask(evidence=message.capture),
            AgentId("vision_agent", self.id.key),
        )
        measurement_result = await self.send_message(
            MeasurementTask(runs=message.runs),
            AgentId("measurement_agent", self.id.key),
        )
        logging_result = await self.send_message(
            LoggingTask(intervals=message.intervals, discontinuities=message.discontinuities),
            AgentId("logging_agent", self.id.key),
        )

        stages = [*capture_results.stages, vision_result, measurement_result, logging_result]
        assurance = await self.send_message(
            AssuranceTask(stages=stages, reviewer_approved=message.reviewer_approved),
            AgentId("assurance_agent", self.id.key),
        )
        stages.append(assurance)

        blockers = [finding for stage in stages if stage.status != "pass" for finding in stage.findings]
        if assurance.status == "fail":
            issue_status = "blocked"
        elif assurance.status == "review":
            issue_status = "review_required"
        else:
            issue_status = "approved"

        return WorkflowResult(
            job_id=message.job_id,
            borehole_id=message.borehole_id,
            issue_status=issue_status,
            stages=stages,
            blockers=blockers,
            audit_events=[
                f"{index + 1:02d}:{stage.action}:{stage.status}"
                for index, stage in enumerate(stages)
            ],
        )


async def run_workflow(request: WorkflowRequest) -> WorkflowResult:
    """Run the local AutoGen Core workflow without a model client or cloud request."""
    runtime = SingleThreadedAgentRuntime()
    await CaptureAgent.register(runtime, "capture_agent", lambda: CaptureAgent("Core-box capture qualification"))
    await VisionAgent.register(runtime, "vision_agent", lambda: VisionAgent("Detection and segmentation contract"))
    await MeasurementAgent.register(runtime, "measurement_agent", lambda: MeasurementAgent("Core recovery and RQD measurement"))
    await LoggingAgent.register(runtime, "logging_agent", lambda: LoggingAgent("Engineering geology logging"))
    await AssuranceAgent.register(runtime, "assurance_agent", lambda: AssuranceAgent("Human review and issue assurance"))
    await WorkflowCoordinator.register(runtime, "workflow_coordinator", lambda: WorkflowCoordinator("Corebox workflow coordinator"))

    runtime.start()
    try:
        result = await runtime.send_message(request, AgentId("workflow_coordinator", request.job_id))
        if not isinstance(result, WorkflowResult):
            raise TypeError("AutoGen workflow returned an unexpected result type.")
        return result
    finally:
        await runtime.stop_when_idle()
