# Define Handoff Template

```yaml
handoff:
  phase: define
  agent: ux-synthesis-agent
  status: complete

decision_addressed: ""
approved_inputs:
  research_findings:
    id: ART-DISCOVER-002
    version: 1
    status: approved
  discover_gate_decision_id: DEC-DISCOVER-001

artifacts_created:
  - id: ART-DEFINE-001
    type: insight-synthesis
    version: 1
    status: agent-reviewed
  - id: ART-DEFINE-002
    type: problem-definition
    version: 1
    status: agent-reviewed
  - id: OPPRIO-DEFINE-001
    type: opportunity-prioritization
    version: 1
    status: agent-reviewed

supporting_agent_outputs:
  opportunity_map: null
  journey_map: null
  information_architecture: null
  task_flow: null

supported_problem_ids: []
hypothesis_problem_ids: []
blocked_problem_ids: []
priority_opportunity_ids: []
desired_outcome_ids: []
evidence_used: []
excluded_inputs: []
assumptions: []
limitations: []
contradictions: []
risks: []
open_questions: []
return_to_discover: []
decisions_needed: []
confidence: medium # high | medium | low
gate_recommendation: human-decision
recommended_next_action: "Accountable human reviews the Problem Definition and opportunity priorities."
human_decision_required: true
```

`handoff.status` reports agent completion only. It does not approve the Problem Definition or pass the Define gate.
