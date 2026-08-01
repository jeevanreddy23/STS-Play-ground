---
title: Graph engineering
type: method
tags: [ai, workflow, orchestration]
aliases: [graphs, diamond pattern, fake edge, checker node]
updated: 2026-07-29
---

# Graph engineering

A way of laying out agent work as a dependency map rather than a list of steps.

- **Node** — one unit of work. One input, one output. The smaller and more
  defined, the more useful.
- **Edge** — a real dependency. It exists only when the second node consumes
  what the first produced.

## The fake-edge test

Write the steps as boxes, draw an arrow between each consecutive pair, then ask
of every arrow: *does data from A actually go into B?* If not, the arrow is an
artefact of the order you typed things in, and the wait it imposes is free time
you are giving away. Anything with no incoming arrow can start immediately.

Most workflows hold two or three fake edges. "Review file A, then review file B"
is the classic — B never reads A's output.

## The diamond

One node fans out to several independent nodes, which all converge on one node
that combines them. The convergence waits for the slowest branch rather than the
sum of all branches.

Two conditions. The parallel nodes must be genuinely independent, and the
convergence must actually need all of them. If it only needs one, the rest are
wasted work.

## Checker nodes

Parallelism removes the natural checkpoints where you would have spotted a bad
result. A branch that returns nothing, or hallucinates, feeds into synthesis
alongside good branches and the final answer is confidently wrong — with the
error diluted enough to be hard to trace.

A checker sits between the parallel layer and the convergence and does no work
of its own. It looks for empty outputs, outputs that contradict each other,
off-topic results, low confidence, and format errors that would break parsing.
Flagged branches are retried or dropped, never merged.

## Static vs dynamic

Static graphs are fixed before the run: fast, predictable, auditable. Dynamic
graphs grow as they run, with nodes deciding what comes next — flexible, but
what actually ran is not what you drew, which makes debugging and auditing
harder. Reach for static first. Never use dynamic where you need to audit
exactly what ran and why, which for engineering work is most of the time.

## Where this already exists in our work

The `geoflow-verify-graph` skill in this repo is a diamond: independent
read-only verifier agents fan out, a barrier collects their reports, findings
are reduced, fixed, and re-verified. The reduce step is the checker.

## Where graphs break

Three failure modes, all worth designing against before you hit them.

**Context collapse.** Fan out to hundreds of nodes and try to feed every raw
output into one synthesis step, and you exhaust the context window before
synthesis begins. Fix: layer the fan-in — group into batches, summarise each
batch, then consolidate the summaries rather than the raw outputs.

**False independence.** Two nodes look independent because neither prompt
mentions the other, but they write to the same file or share a rate-limited
API. That is a hidden edge. Audit for shared *resources*, not just shared data —
a write conflict needs an edge even with no data dependency.

**Silent node failure.** In a chain a failure stops everything, which is
annoying but obvious. In a graph one dead node among two hundred disappears into
a report that looks complete. Fix: the fan-in checks the count it received
against the count it expected and says so when they differ, rather than quietly
synthesising partial data. This is the same principle as
[[Socket compliance is indeterminate by default]] — missing input produces a
stated gap, never a confident answer.

## Loops versus graphs

A loop is one unit of self-improvement: try, measure, adjust, repeat. Its known
failure is Goodhart — it optimises the metric you named and nothing else, so a
bot tuned to close tickets fast closes them fast while satisfaction falls. A
graph mitigates this structurally: several nodes with different jobs check each
other, so no single metric drives the system.

The shift in practice is that you stop writing the agent that does everything
top to bottom and start designing the dependency structure. The agents fill in
the nodes; you own the edges.

## Caution for engineering use

The parallel-then-combine shape is right for review and search. It is wrong for
anything where one branch's finding should change what another branch looks for
— which happens often in ground investigation, where a single unexpected result
should redirect the whole enquiry rather than being averaged in with the rest.

## Related

- [[Reverse prompting]]
- [[Socket compliance is indeterminate by default]] — a checker in a different guise
