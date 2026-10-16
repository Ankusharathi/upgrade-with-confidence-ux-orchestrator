---
name: maintain-design-traceability
description: Maintain bidirectional links among approved requirements, problems, opportunities, outcomes, design decisions, journeys, flows, states, content, accessibility requirements, dependencies, and validation criteria.
---

# Maintain Design Traceability

## Goal

Show why every material design element exists and whether every approved requirement and problem has a designed and testable response.

## Method

1. Create stable IDs for design decisions, flows, states, content, and accessibility requirements.
2. Map upstream requirements, problems, opportunities, outcomes, evidence, and decisions to downstream design elements.
3. Map every design element forward to validation questions, tasks, criteria, analytics, and specialist checks.
4. Identify unsupported design elements, uncovered requirements, orphaned states, conflicting decisions, deferred scope, and superseded versions.
5. Keep status and version links current as artifacts change.

## Rules

- Traceability does not make an unsupported design choice evidence-based.
- Do not delete a requirement or finding because it lacks a design response.
- Record deferrals with owner and decision ID.
- Material changes after approval require gate review and possible revalidation.

## Output

Create `../templates/DESIGN-TRACEABILITY.md` and reference it from the Design Specification and handoff.

