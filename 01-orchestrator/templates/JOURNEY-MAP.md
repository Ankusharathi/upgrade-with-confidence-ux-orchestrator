# Journey Map Template

```yaml
artifact:
  id: JOURNEY-001
  type: journey-map
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define # define | design
  producer: ux-journey-architecture-agent
  mode: current-state # current-state | future-state | hypothesis
  evidence_classification: approved-real-evidence # approved-real-evidence | approved-design-direction | synthetic-test-only | hypothesis

journey_scope:
  name: ""
  actor_or_role: ""
  actor_evidence_ids: []
  context: ""
  trigger: ""
  goal: ""
  start_condition: ""
  end_condition: ""
  channels: []
  devices: []
  account_or_segment_context: []
  in_scope: []
  out_of_scope: []

stages:
  - id: STAGE-001
    name: ""
    user_goal: ""
    actions: []
    decisions: []
    touchpoints: []
    information_needed: []
    system_or_service_responses: []
    handoffs: []
    waits_or_delays: []
    barriers: []
    needs: []
    emotions:
      value: null
      evidence_ids: []
      status: not-established # supported | hypothesis | not-established
    success_or_progress_signal: ""
    failure_and_recovery: []
    finding_ids: []
    evidence_ids: []
    assumptions: []
    unknowns: []
    confidence: low # high | medium | low

journey_relationships:
  linked_task_flow_ids: []
  linked_ia_ids: []
  operational_dependencies: []
  cross_channel_handoffs: []
  loops_and_reentry: []

moments_that_matter:
  - id: MOMENT-001
    stage_ids: []
    moment: ""
    evidence_ids: []
    consequence: ""
    confidence: low

variations_and_contradictions: []
missing_stages_or_evidence: []
accessibility_and_inclusion_implications: []
privacy_security_and_safety_implications: []
limitations: []
validation_needs: []
related_decisions: []
next_consumer: ux-synthesis-agent
```

Only evidence-supported current-state maps may describe real needs, barriers, pain points, or emotions. Future-state and hypothesis maps must not be presented as observed journeys.
