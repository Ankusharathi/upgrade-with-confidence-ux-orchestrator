---
name: model-task-flows
description: Model current or proposed task flows with actors, preconditions, triggers, steps, decisions, branches, permissions, errors, recovery, exits, completion, and evidence or validation status.
---

# Model Task Flows

## Goal

Describe how a bounded task progresses across decisions and states so consequential paths can be designed, reviewed, and validated.

## Method

1. Declare flow mode: `current-state`, `future-state`, or `hypothesis`.
2. Define actor, goal, trigger, preconditions, permissions, input data, start state, success condition, and failure conditions.
3. Map each step, decision, branch, loop, wait, handoff, system response, error, recovery, cancellation, timeout, and post-task state.
4. Identify required information, controls, feedback, retained context, irreversible actions, and duplicate-prevention behavior.
5. Link current-state behavior to evidence and proposed behavior to approved design decisions or hypotheses.
6. Record missing states, dependencies, analytics needs, accessibility requirements, and validation criteria.

## Rules

- Include unhappy and interrupted paths, not only the happy path.
- Do not invent backend behavior, permission rules, or recovery outcomes.
- Keep a user task flow distinct from a technical sequence diagram.
- A textual flow may define logic but cannot prove runtime usability or accessibility.
- Use stable node and decision identifiers so designs and tests can trace back to the flow.

## Output

Create `../templates/TASK-FLOW.md` with traceable nodes, branches, states, dependencies, and validation requirements.

