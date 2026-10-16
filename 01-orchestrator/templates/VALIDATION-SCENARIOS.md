# Validation Scenarios Template

```yaml
artifact: {id: ART-VALIDATE-002, type: validation-scenarios, version: 1, status: draft, project: project-name, phase: validate, producer: ux-validation-agent}
protocol_version: 1
scenarios:
  - id: VS-001
    criterion_ids: [VC-001]
    design_element_ids: []
    role_and_context: ""
    starting_state: ""
    test_data: []
    neutral_prompt: ""
    branches_and_states: []
    completion_evidence: []
    partial_completion: ""
    failure: ""
    critical_errors: []
    assistance_rule: ""
    recovery_rule: ""
    probes: []
    accessibility_accommodations: []
    end_state: ""
moderator_guidance:
  introduction: []
  non_leading_behavior: []
  incident_and_stop_rules: []
  closing: []
pilot:
  status: not-run # not-run | passed | revised | blocked
  evidence_ids: []
  changes: []
coverage:
  criteria: {required: [], covered: [], uncovered: []}
  roles: {required: [], covered: [], uncovered: []}
  states: {required: [], covered: [], uncovered: []}
limitations: []
approval: {status: pending, owner: name-or-role, decision_id: null}
```

Prompts state goals rather than interface steps or labels.
