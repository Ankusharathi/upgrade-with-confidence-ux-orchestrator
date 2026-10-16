# Deliver Handoff Template

```yaml
handoff:
  phase: deliver
  agent: ux-delivery-agent
  supporting_agents: [ux-qa-agent]
  status: complete
approved_inputs:
  validation_report: {id: ART-VALIDATE-001, version: 1, status: approved}
  validate_gate_decision_id: DEC-VALIDATE-001
artifacts_created:
  handoff_package: ART-DELIVER-001
  implementation_specification: ART-DELIVER-002
  component_map: ART-DELIVER-003
  analytics_plan: ART-DELIVER-004
  question_log: ART-DELIVER-005
  change_log: ART-DELIVER-006
  delivery_traceability: TRACE-DELIVER-001
  ux_qa_plan: ART-QA-001
  ux_qa_checklist: ART-QA-002
  defect_register: ART-QA-003
  fidelity_review: ART-QA-004
  release_ux_readiness: ART-QA-005
implementation_readiness: uncertain
ux_qa_readiness: pending
engineering_qa_dependencies: []
blocking_defect_ids: []
accepted_risks: []
known_debt: []
untested_scope: []
revalidation_requirements: []
ux_owner_acceptance: {status: pending, decision_id: null}
implementation_owner_acceptance: {status: pending, decision_id: null}
gate_recommendation: human-decision
recommended_next_action: "UX and implementation owners review the current package and QA evidence."
```

Handoff completion does not approve the package, close defects, pass the gate, or authorize production release.
