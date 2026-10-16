# Intake Handoff Template

```yaml
handoff:
  phase: intake
  agent: ux-intake-agent
  status: complete

decision_addressed: Is the request framed well enough for human approval and Discover planning?
artifacts_created:
  - id: ART-###
    type: ux-brief
    version: 1
    status: agent-reviewed
  - id: SQP-###
    type: stakeholder-question-pack
    version: 1
    status: agent-reviewed
evidence_used: []
assumptions: []
limitations: []
open_questions: []
confidence: medium # low | medium | high
gate_recommendation: human-decision
recommended_next_action: accountable human reviews the UX Brief
human_decision_required: true
```

`handoff.status` reports whether the agent completed its assignment. It does not approve the artifact or pass the phase gate.

Before human approval, use `gate_recommendation: human-decision`, keep the artifact at `agent-reviewed`, and route the handoff to the accountable human. After approval, the orchestrator refreshes the artifact status and decision reference in this handoff, changes the gate recommendation to `pass`, sets `human_decision_required: false`, and routes it to the UX Research Agent.
