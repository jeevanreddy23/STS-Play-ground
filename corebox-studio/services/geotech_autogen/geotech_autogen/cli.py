from __future__ import annotations

import argparse
import asyncio
import json
from pathlib import Path

from .models import WorkflowRequest
from .workflow import run_workflow


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the offline AutoGen core-box workflow.")
    parser.add_argument("job", type=Path, help="Path to a workflow job JSON file.")
    parser.add_argument("--output", type=Path, help="Optional path for the result JSON.")
    return parser.parse_args()


async def main() -> None:
    args = parse_args()
    request = WorkflowRequest.model_validate_json(args.job.read_text(encoding="utf-8"))
    result = await run_workflow(request)
    payload = result.model_dump_json(indent=2)
    if args.output:
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(payload + "\n", encoding="utf-8")
    print(payload)


if __name__ == "__main__":
    asyncio.run(main())
