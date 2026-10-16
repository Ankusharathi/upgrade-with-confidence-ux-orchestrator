# Validate Handoff Template

```yaml
handoff:
  phase: validate
  agent: ux-validation-agent
  supporting_agents: [ux-research-agent]
  status: complete
decision_addressed: ""
approved_inputs:
  design_specification: {id: ART-DESIGN-001, version: 1, status: approved}
  design_gate_decision_id: DEC-DESIGN-001
artifacts_created:
  validation_plan: ART-VALIDATE-001
  validation_scenarios: ART-VALIDATE-002
  readiness_check: READY-VALIDATE-001
  evidence_register: ART-VALIDATE-003
  accessibility_validation: ART-VALIDATE-004
  issue_register: ART-VALIDATE-005
  traceability: TRACE-VALIDATE-001
  validation_report: ART-VALIDATE-006
tested_artifact: {id: ART-DESIGN-001, version: 1}
criteria_summary: {met: [], partially_met: [], not_met: [], untested: []}
strongest_findings: []
blocking_issue_ids: []
accepted_risk_ids: []
open_issue_ids: []
limitations: []
revalidation_requirements: []
implementation_stage_checks: []
revision_routes: []
gate_recommendation: human-decision
recommended_next_action: "Accountable human reviews validation evidence and residual risk."
human_decision_required: true
```

Handoff completion does not approve the report, accept risk, or pass the Validate gate.
