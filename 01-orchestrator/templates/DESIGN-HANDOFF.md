# Design Handoff Template

```yaml
handoff:
  phase: design
  agent: ux-design-agent
  supporting_agents: [ux-journey-architecture-agent]
  status: complete

decision_addressed: ""
approved_inputs:
  problem_definition: {id: ART-DEFINE-002, version: 1, status: approved}
  define_gate_decision_id: DEC-DEFINE-001

artifacts_created:
  design_direction: ART-DESIGN-001
  future_state_journey_map: null
  information_architecture: null
  task_flow: null
  interaction_state_specification: ART-DESIGN-002
  ux_content_specification: ART-DESIGN-003
  accessibility_design_specification: ART-DESIGN-004
  design_traceability: TRACE-DESIGN-001
  design_specification: ART-DESIGN-005

selected_direction_id: null
design_hypotheses: []
validation_questions: []
critical_tasks_and_states: []
accessibility_and_specialist_checks: []
confirmed_feasibility_inputs: []
conditional_feasibility_inputs: []
blocking_feasibility_inputs: []
assumptions: []
limitations: []
risks: []
open_questions: []
decisions_needed: []
gate_recommendation: human-decision
recommended_next_action: "Accountable human reviews the Design Specification for validation."
human_decision_required: true
```

Handoff completion does not approve the design or pass the Design gate.

