# Discover Evaluation Template

Use this test artifact to evaluate one Discover run against the approved workflow, phase, agent, skill, research, and artifact contracts. Test success, execution authorization, findings approval, and gate passage are separate states.

```yaml
discover_evaluation:
  id: EVAL-DISCOVER-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  execution_authorization: not-required # pending | approved | denied | not-required
  phase_gate: human-decision # pass | revise | human-decision | blocked
  findings_approval: pending # pending | approved | rejected

inputs:
  - id: ART-INTAKE-001
    path: ""
    type: ux-brief
    status: approved

outputs:
  - path: ""
    type: research-plan
    artifact_id: ART-DISCOVER-001
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
  frame_research_study: {result: not-run, notes: ""}
  select_research_methods: {result: not-run, notes: ""}
  manage_research_evidence: {result: not-run, notes: ""}
  competitor_analysis: {result: not-run, notes: ""}
  secondary_research: {result: not-run, notes: ""}
  current_experience_audit: {result: not-run, notes: ""}
  heuristic_evaluation: {result: not-run, notes: ""}
  industry_ux_standards_review: {result: not-run, notes: ""}
  product_data_evidence_intake: {result: not-run, notes: ""}
  conduct_responsible_research: {result: not-run, notes: ""}
  synthesize_research_findings: {result: not-run, notes: ""}

automated_assertions:
  total: 0
  passed: 0
  failed: 0
  details: []

defects: []
human_actions: []
next_action: ""
```

Do not mark a test failed merely because research execution correctly stopped for authorization or unavailable evidence; evaluate whether the workflow routed that condition correctly.
