# Task Flow Template

```yaml
artifact:
  id: TASKFLOW-001
  type: task-flow
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define # define | design
  producer: ux-journey-architecture-agent
  mode: current-state # current-state | future-state | hypothesis
  evidence_classification: approved-real-evidence

task_scope:
  name: ""
  actor_or_role: ""
  goal: ""
  trigger: ""
  preconditions: []
  permissions: []
  input_information: []
  start_state: ""
  success_condition: ""
  failure_conditions: []
  in_scope: []
  out_of_scope: []

nodes:
  - id: NODE-001
    type: action # start | action | system | decision | wait | handoff | error | recovery | confirmation | end
    actor: user # user | system | service | support | other
    label: ""
    description: ""
    required_information: []
    controls_or_inputs: []
    system_feedback: []
    retained_context: []
    accessibility_requirements: []
    finding_ids: []
    evidence_ids: []
    decision_ids: []
    assumptions: []

connections:
  - from: NODE-001
    to: NODE-002
    condition: ""
    branch_label: default

consequential_actions:
  - node_id: NODE-001
    consequence: ""
    prevention: []
    review_and_correction: []
    reversibility: unknown
    duplicate_prevention: unknown

state_coverage:
  success: []
  loading: []
  empty: []
  permission: []
  unavailable: []
  error: []
  interruption: []
  timeout: []
  recovery: []
  confirmation: []
  post_task: []

handoffs_and_dependencies: []
analytics_and_observability_needs: []
missing_states: []
assumptions: []
limitations: []
validation_criteria: []
related_decisions: []
linked_journey_ids: []
linked_ia_ids: []
next_consumer: ux-synthesis-agent
```

A complete task flow includes failure, interruption, recovery, and post-task behavior where relevant. It is not limited to the happy path.
