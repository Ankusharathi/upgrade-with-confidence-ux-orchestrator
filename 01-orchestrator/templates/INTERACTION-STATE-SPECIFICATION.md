# Interaction and State Specification Template

```yaml
artifact:
  id: ART-DESIGN-002
  type: interaction-state-specification
  version: 1
  status: draft
  project: project-name
  phase: design
  producer: ux-design-agent

surfaces:
  - id: SURFACE-001
    name: ""
    platform: responsive-web
    roles: []
    entry_points: []
    linked_task_flow_ids: []

states:
  - id: STATE-001
    surface_id: SURFACE-001
    type: standard # standard | loading | empty | permission | unavailable | error | interruption | timeout | recovery | confirmation | post-task
    purpose: ""
    entry_conditions: []
    displayed_information: []
    controls_and_inputs: []
    defaults: []
    business_and_system_rules: []
    validation_rules: []
    system_feedback: []
    retained_context: []
    navigation_and_exits: []
    focus_intent: ""
    persistence_and_resume: ""
    responsive_behavior: []
    platform_differences: []
    content_ids: []
    accessibility_requirement_ids: []
    analytics_event_ids: []
    dependency_ids: []
    assumptions: []
    validation_criteria_ids: []

transitions:
  - {from: STATE-001, to: STATE-002, trigger: "", condition: "", system_response: ""}

consequential_actions:
  - id: ACTION-001
    state_id: STATE-001
    consequence: ""
    prevention: []
    review_and_correction: []
    confirmation: []
    reversibility: unknown
    idempotency: unknown
    status_verification: unknown
    owner: unassigned

state_coverage:
  required: [standard, loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation, post-task]
  covered: []
  deferred:
    - {state_type: "", reason: "", owner: unassigned, decision_id: null}

unresolved_behavior: []
limitations: []
next_consumer: design-specification
```

