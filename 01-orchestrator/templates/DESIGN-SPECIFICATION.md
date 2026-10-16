# Design Specification Template

Use this as the primary Design artifact.

```yaml
artifact:
  id: ART-DESIGN-005
  type: design-specification
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: design
  producer: ux-design-agent

approved_context:
  problem_definition: {id: ART-DEFINE-002, version: 1, status: approved}
  define_gate: {status: pass, decision_id: DEC-DEFINE-001}
  design_direction: {id: ART-DESIGN-001, version: 1}
  accountable_human: name-or-role

executive_summary: ""
selected_direction_id: DIRECTION-001

source_of_truth:
  design_file: null
  prototype: null
  version_or_snapshot: null
  access_status: unavailable

supporting_artifacts:
  future_state_journey_map: null
  information_architecture: null
  task_flow: null
  interaction_state_specification: ART-DESIGN-002
  ux_content_specification: ART-DESIGN-003
  accessibility_design_specification: ART-DESIGN-004
  design_traceability: TRACE-DESIGN-001

experience_scope:
  users_or_roles: []
  account_or_segment_variations: []
  channels: []
  devices_and_platforms: []
  entry_points: []
  success_and_exit_conditions: []
  in: []
  out: []
  deferred: []

design_decisions:
  - id: DESIGN-DEC-001
    decision: ""
    rationale: ""
    problem_ids: []
    outcome_ids: []
    requirement_ids: []
    alternatives_considered: []
    assumptions: []
    tradeoffs: []
    owner: name-or-role
    decision_status: proposed # proposed | approved | rejected | superseded
    decision_id: null

component_and_pattern_usage: []
responsive_and_platform_rules: []
commercial_and_consequential_action_rules: []
privacy_security_and_data_exposure_rules: []
analytics_and_observability: []
operational_and_support_handoffs: []

feasibility_inputs:
  - id: DEP-001
    category: technical # technical | data | identity | policy | legal | privacy | security | accessibility | analytics | content | operational | support | commercial
    requirement: ""
    owner: unassigned
    source: null
    status: pending # confirmed | conditional | pending | blocked
    conditions: []
    affected_artifact_ids: []
    decision_id: null
    risk: ""

validation_readiness:
  design_hypotheses: []
  validation_questions: []
  representative_roles_and_contexts: []
  tasks_and_state_ids: []
  success_criteria_ids: []
  critical_error_definitions: []
  accessibility_and_specialist_checks: []
  prototype_fidelity_required: ""
  test_data_required: []
  execution_authorization_status: pending
  limitations: []

assumptions: []
limitations: []
risks: []
open_questions: []
decisions_needed: []
related_decisions: []

approval:
  required: true
  owner: name-or-role
  outcome: pending
  decision_id: null
  decided_at: null

next_consumer: ux-validation-agent
recommended_next_action: "Accountable human reviews direction, coverage, feasibility, accessibility, and validation readiness."
```

An approved Design Specification authorizes validation of the design direction. It does not prove usability, accessibility, feasibility, or product impact.

