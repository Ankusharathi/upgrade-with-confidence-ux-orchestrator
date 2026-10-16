---
name: heuristic-evaluation
description: Evaluate an existing interface or flow against an explicit usability-heuristic framework, documenting evidence, affected users and tasks, severity, rationale, and limitations without presenting expert review as user research.
---

# Heuristic Evaluation

## Goal

Identify likely usability problems systematically so they can be prioritized for validation and design work.

## Method

1. Define the product version, surfaces, roles, tasks, states, devices, and environment reviewed.
2. Select and cite the heuristic framework; add domain-specific criteria only when their source and rationale are explicit.
3. Walk the experience task by task, including success, error, empty, loading, permission, interruption, and recovery states that are available.
4. Record each issue with location, evidence, violated heuristic, likely consequence, affected users or roles, frequency or reach when known, and confidence.
5. Assign severity using the template scale and keep severity separate from evidence confidence.
6. Record strengths, inaccessible states, disagreements between evaluators, and issues requiring user validation or specialist review.

## Rules

- A heuristic issue is an expert evaluation finding, not an observed user failure.
- Do not invent screens, system behavior, frequency, or business impact that was not observed or supplied.
- Accessibility observations are not certification; route material issues to qualified review.
- Combine duplicate symptoms only when their cause and affected task are genuinely the same.

## Output

Create `../templates/HEURISTIC-EVALUATION.md` and link each issue to supporting screen, flow, or source evidence.

