# Validate Evaluation Template

```yaml
validate_evaluation:
  id: EVAL-VALIDATE-001
  project: project-name
  scenario: scenario-name
  run_id: RUN-001
  evaluated_at: YYYY-MM-DD
  evaluator: ux-orchestrator
  test_result: partial # pass | fail | partial
  validation_approval: pending # pending | approved | rejected | ineligible
  phase_gate: blocked # pass | revise | human-decision | blocked
  evidence_classification: synthetic-test-only
inputs: []
outputs: []
agent_checks:
  ux_validation_agent: {result: not-run, notes: ""}
  ux_research_agent: {result: not-run, notes: ""}
skill_checks:
  frame_validation_plan: {result: not-run, notes: ""}
  design_validation_scenarios: {result: not-run, notes: ""}
  assess_validation_readiness: {result: not-run, notes: ""}
  conduct_validation_sessions: {result: not-run, notes: ""}
  analyze_validation_evidence: {result: not-run, notes: ""}
  evaluate_accessibility_validation: {result: not-run, notes: ""}
  classify_validation_issues: {result: not-run, notes: ""}
  maintain_validation_traceability: {result: not-run, notes: ""}
contract_checks: []
automated_assertions: {total: 0, passed: 0, failed: 0, details: []}
defects: []
human_actions: []
next_action: ""
```

A correct workflow test may block execution because authorization, readiness, eligible evidence, or an approved Design input is missing. That is not a test failure.
