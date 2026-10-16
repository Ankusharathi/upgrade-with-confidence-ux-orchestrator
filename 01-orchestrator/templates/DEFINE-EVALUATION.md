# Define Evaluation Template

Use this to test a Define run. Test success, artifact approval, and product-gate passage remain separate states.

```yaml
define_evaluation:
  id: EVAL-DEFINE-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  problem_definition_approval: pending # pending | approved | rejected
  phase_gate: human-decision # pass | revise | human-decision | blocked
  evidence_classification: approved-real-evidence # approved-real-evidence | synthetic-test-only | mixed-ineligible

inputs:
  - id: ART-DISCOVER-002
    path: ""
    type: research-findings
    version: 1
    status: approved

outputs:
  - path: ""
    type: insight-synthesis
    artifact_id: ART-DEFINE-001
    version: 1
    status: draft
    validation_result: not-run # pass | fail | not-run
  - path: ""
    type: problem-definition
    artifact_id: ART-DEFINE-002
    version: 1
    status: draft
    validation_result: not-run
  - path: ""
    type: opportunity-prioritization
    artifact_id: OPPRIO-DEFINE-001
    version: 1
    status: draft
    validation_result: not-run
  - path: ""
    type: define-gate-result
    artifact_id: ART-DEFINE-002
    version: 1
    status: human-decision
    validation_result: not-run
  - path: ""
    type: define-handoff
    artifact_id: null
    version: 1
    status: draft
    validation_result: not-run

contract_checks:
  - id: CHECK-DEFINE-001
    criterion: ""
    result: not-run # pass | fail | not-run
    evidence: ""
    notes: ""

skill_checks:
  cluster_research_evidence: {result: not-run, notes: ""}
  formulate_ux_insights: {result: not-run, notes: ""}
  frame_ux_problems: {result: not-run, notes: ""}
  prioritize_ux_opportunities: {result: not-run, notes: ""}
  define_outcomes_success_signals: {result: not-run, notes: ""}
  map_ux_opportunities: {result: not-run, notes: ""}
  map_user_journeys: {result: not-run, notes: ""}
  define_information_architecture: {result: not-run, notes: ""}
  model_task_flows: {result: not-run, notes: ""}

supporting_agent_checks:
  ux_journey_architecture_agent: {result: not-run, notes: ""}
  ux_opportunity_agent: {result: not-run, notes: ""}

automated_assertions:
  total: 0
  passed: 0
  failed: 0
  details: []

defects: []
human_actions: []
next_action: ""
```

Do not mark the workflow test failed merely because Define correctly blocks on an unapproved or insufficient Discover input. Evaluate whether the agent preserves the evidence boundary and routes the condition correctly.
