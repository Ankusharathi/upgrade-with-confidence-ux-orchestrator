# Intake Evaluation Template

Use this test artifact to evaluate one Intake run against the approved workflow, phase, agent, skill, and artifact contracts. A passing test does not approve the UX Brief or pass the phase gate.

```yaml
intake_evaluation:
  id: EVAL-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  phase_gate: human-decision # pass | revise | human-decision | blocked
  artifact_approval: pending # pending | approved | rejected

inputs:
  - id: INP-001
    path: ""
    type: brd
    status: supplied

outputs:
  - path: ""
    type: ux-brief
    artifact_id: UXB-001
    version: 1
    status: draft
    validation_result: not-run # pass | fail | not-run

contract_checks:
  - id: CHECK-001
    criterion: ""
    result: not-run # pass | fail | not-run
    evidence: ""
    notes: ""

skill_checks:
  prd_brd_analysis:
    result: not-run
    notes: ""
  requirement_extraction:
    result: not-run
    notes: ""
  ux_question_framing:
    result: not-run
    notes: ""

automated_assertions:
  total: 0
  passed: 0
  failed: 0
  details: []

comparison_to_prior_run:
  prior_run_id: null
  improvements: []
  regressions: []

defects:
  - id: DEFECT-001
    severity: medium # critical | high | medium | low
    description: ""
    affected_artifact: ""
    required_fix: ""

human_actions:
  - owner: unassigned
    action: ""
    required_before: discover

next_action: ""
```

## Evaluation rules

- Evaluate generated work against the contracts that existed when the run began.
- Cite artifact paths or identifiers as evidence for each check.
- Record defects without silently repairing the evaluated output.
- Keep test status, artifact approval, and phase-gate status separate.

