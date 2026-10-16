# Current Experience Audit Template

```yaml
current_experience_audit:
  id: CEA-001
  project: project-name
  phase: discover
  status: draft # draft | agent-reviewed | human-reviewed
  audited_by: ux-research-agent
  audited_at: YYYY-MM-DD
  product_version: unknown
  environments: []
  markets: []
  roles: []
  devices: []

reviewed_artifacts:
  - id: CURR-001
    type: design-file # design-file | prototype | production-flow | screenshot | specification | other
    source_or_location: ""
    version_or_date: unknown
    access_status: available # available | partial | unavailable
    evidence_id: EVID-001

flow_inventory:
  - id: FLOW-001
    name: ""
    entry_points: []
    steps: []
    decisions_and_branches: []
    cross_channel_handoffs: []
    exits_and_confirmations: []
    post_task_states: []
    unavailable_or_unknown_states: []

screen_and_state_inventory:
  - id: STATE-001
    flow_id: FLOW-001
    screen_or_state: ""
    state_type: standard # standard | loading | empty | error | unavailable | permission | confirmation | recovery
    purpose: ""
    primary_actions: []
    account_or_role_context: ""
    content_and_feedback: ""
    accessibility_observations: []
    data_exposure_observations: []
    evidence_ids: []

audit_findings:
  - id: AUDIT-001
    classification: observed-current-state # observed-current-state | supplied-claim | audit-interpretation | validation-need
    finding: ""
    affected_flow_or_state_ids: []
    evidence_ids: []
    implication: ""
    confidence: medium # high | medium | low

gaps_and_unknowns: []
dependencies: []
limitations: []
next_action: ""
```

Keep the audit descriptive. Proposed future-state changes belong in recommendations or later Design artifacts, not in the current-state inventory.

