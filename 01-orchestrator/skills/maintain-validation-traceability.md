# Skill: Maintain Validation Traceability

## Purpose

Keep an auditable chain from approved design intent through validation evidence, issues, decisions, revisions, and retest.

## Required links

`design requirement -> validation criterion -> method -> scenario/task -> session or source -> observation -> finding -> issue -> recommendation -> decision -> changed artifact -> retest result`

## Method

1. Use stable identifiers and exact artifact versions.
2. Preserve many-to-many links rather than collapsing evidence into a summary claim.
3. Identify criteria with no method, tasks with no criterion, findings with no evidence, issues with no owner, changes with no retest, and decisions with no authority.
4. Keep superseded and contradicted evidence visible with status and rationale.
5. Record whether evidence remains valid after every design, content, code, data, environment, or protocol change.
6. Export uncovered, untested, blocked, accepted-risk, and revalidation queues for the gate.

## Output requirements

The traceability artifact reports coverage and orphan counts, exact gaps, revision routes, and the evidence-validity impact of changes. Missing links block unsupported conclusions; they are not filled by inference.
