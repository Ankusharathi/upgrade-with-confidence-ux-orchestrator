# Validation Plan Template

```yaml
artifact:
  id: ART-VALIDATE-001
  type: validation-plan
  version: 1
  status: draft
  project: project-name
  phase: validate
  producer: ux-validation-agent

approved_inputs:
  design_specification: {id: ART-DESIGN-001, version: 1, status: approved}
  design_gate_decision_id: DEC-DESIGN-001
decision_to_support: ""
research_and_validation_questions: []
criteria:
  - id: VC-001
    source_ids: []
    statement: ""
    result_scale: [met, partially-met, not-met, untested]
    critical_error_definition: ""
method_matrix:
  - criterion_id: VC-001
    method: moderated-usability-test
    evidence_source: representative-participants
    environment: ""
    analysis_rule: ""
participant_or_source_plan:
  population_or_source: ""
  inclusion: []
  exclusion: []
  role_and_accessibility_coverage: []
  sample_rationale: ""
  inference_limit: ""
execution:
  mode: planned # planned | authorized | executing | complete | blocked
  owner: name-or-role
  locations_and_tools: []
  timeline: ""
authorizations:
  participant_contact: {required: true, status: pending, decision_id: null}
  session_execution: {required: true, status: pending, decision_id: null}
  recording: {required: true, status: pending, decision_id: null}
  incentives: {required: false, status: not-applicable, decision_id: null}
  sensitive_data: {required: false, status: not-applicable, decision_id: null}
responsible_research:
  consent: ""
  voluntary_participation: ""
  privacy_and_minimization: ""
  accessibility_accommodations: []
  storage_and_access: ""
  retention_and_deletion: ""
  incident_and_stop_rules: []
analysis_plan:
  measures: []
  qualitative_coding: ""
  confidence_method: ""
  contradictions_and_outliers: "preserve"
dependencies: []
risks: []
limitations: []
protocol_change_rules: []
approval: {required: true, status: pending, owner: name-or-role, decision_id: null}
next_consumer: ux-validation-agent
```

Participant research remains planned until every applicable authorization is recorded.
