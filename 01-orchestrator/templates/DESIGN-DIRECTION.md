# Design Direction Template

```yaml
artifact:
  id: ART-DESIGN-001
  type: design-direction
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: design
  producer: ux-design-agent

approved_context:
  problem_definition: {id: ART-DEFINE-002, version: 1, status: approved}
  define_gate_decision_id: DEC-DEFINE-001
  accountable_human: name-or-role

design_intent:
  decision_to_support: ""
  problem_ids: []
  opportunity_ids: []
  desired_outcome_ids: []
  design_principles: []
  non_negotiable_requirements: []
  scope: {in: [], out: [], deferred: []}

directions:
  - id: DIRECTION-001
    name: ""
    status: candidate # candidate | selected | deferred | rejected
    summary: ""
    problem_ids: []
    opportunity_ids: []
    outcome_ids: []
    design_hypotheses: []
    differentiating_choices: []
    tradeoffs: []
    accessibility_implications: []
    privacy_security_safety_implications: []
    operational_implications: []
    dependencies: []
    feasibility_status: pending
    validation_needs: []

direction_decision:
  selected_direction_id: null
  rationale: ""
  alternatives_considered: []
  decision_owner: name-or-role
  decision_id: null
  status: pending

assumptions: []
limitations: []
risks: []
next_consumer: future-state-experience
```

Selection approves a direction for specification and validation. It does not prove usability, accessibility, feasibility, or product impact.

