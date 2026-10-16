# Deliver Evaluation Template

```yaml
deliver_evaluation:
  id: EVAL-DELIVER-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  delivery_approval: pending # pending | approved | rejected | ineligible
  phase_gate: blocked # pass | revise | human-decision | blocked
  evidence_classification: synthetic-test-only
inputs: []
outputs: []
agent_checks:
  ux_delivery_agent: {result: not-run, notes: ""}
  ux_qa_agent: {result: not-run, notes: ""}
delivery_skill_checks:
  prepare_implementation_handoff: {result: not-run, notes: ""}
  specify_implementation_behavior: {result: not-run, notes: ""}
  map_design_system_components: {result: not-run, notes: ""}
  define_analytics_measurement: {result: not-run, notes: ""}
  manage_implementation_decisions: {result: not-run, notes: ""}
  control_delivery_changes_revalidation: {result: not-run, notes: ""}
  maintain_delivery_traceability: {result: not-run, notes: ""}
  assess_delivery_readiness: {result: not-run, notes: ""}
ux_qa_skill_checks:
  plan_ux_qa: {result: not-run, notes: ""}
  execute_design_fidelity_review: {result: not-run, notes: ""}
  verify_interaction_and_state_coverage: {result: not-run, notes: ""}
  verify_content_and_accessibility_implementation: {result: not-run, notes: ""}
  triage_ux_qa_defects: {result: not-run, notes: ""}
  assess_release_ux_readiness: {result: not-run, notes: ""}
contract_checks: []
automated_assertions: {total: 0, passed: 0, failed: 0, details: []}
defects: []
human_actions: []
next_action: ""
```

A correct workflow test may block because approved validation, a real build, QA execution, engineering evidence, or owner acceptance is missing. That is not a workflow-test failure.
