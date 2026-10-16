# Design Evaluation Template

```yaml
design_evaluation:
  id: EVAL-DESIGN-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  design_approval: pending # pending | approved | rejected | ineligible
  phase_gate: human-decision # pass | revise | human-decision | blocked
  evidence_classification: approved-real-evidence

inputs: []
outputs: []

agent_checks:
  ux_design_agent: {result: not-run, notes: ""}
  ux_journey_architecture_agent: {result: not-run, notes: ""}

skill_checks:
  translate_problems_to_design_directions: {result: not-run, notes: ""}
  model_future_state_experience: {result: not-run, notes: ""}
  specify_interactions_and_states: {result: not-run, notes: ""}
  write_ux_content_specification: {result: not-run, notes: ""}
  specify_accessible_design: {result: not-run, notes: ""}
  maintain_design_traceability: {result: not-run, notes: ""}
  assess_design_feasibility_inputs: {result: not-run, notes: ""}
  prepare_design_validation: {result: not-run, notes: ""}

contract_checks: []
automated_assertions: {total: 0, passed: 0, failed: 0, details: []}
defects: []
human_actions: []
next_action: ""
```

Do not mark a workflow test failed merely because Design correctly blocks on an unapproved Define input or missing specialist decision. Test success, design approval, feasibility, and gate passage are separate.
