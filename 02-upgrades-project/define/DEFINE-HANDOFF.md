# Define Handoff

```yaml
handoff:
  id: HANDOFF-DEFINE-001
  phase: define
  agent: ux-synthesis-agent
  status: complete

decision_addressed: Which narrow, evidence-aligned outcome space should synthetic Design address first?

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
    status: approved
  - id: OPPRIO-DEFINE-001
    type: opportunity-prioritization
    version: 1
    status: approved

supporting_agent_outputs:
  opportunity_map: OPPMAP-DEFINE-001
  journey_map: JOURNEY-DEFINE-001
  information_architecture: deferred-to-design
  task_flow: deferred-to-design

supported_problem_ids: []
hypothesis_problem_ids: [PROBLEM-001]
blocked_problem_ids: []
priority_opportunity_ids: [OPP-001, OPP-002, OPP-003]
desired_outcome_ids: [OUTCOME-001, OUTCOME-002]
evidence_used: [FIND-001, FIND-002, FIND-003, FIND-004, EVID-001, EVID-002, EVID-003, EVID-004, EVID-005, EVID-006, EVID-007, EVID-008, EVID-009, EVID-010]
excluded_inputs:
  - SYN-001 as evidence of behavior or impact
  - ASM-001 and ASM-002 as findings
assumptions:
  - Cost and condition clarity affects upgrade confidence and completion.
  - The selected information categories are sufficient for the synthetic scenario.
limitations:
  - No direct customer evidence, real analytics, or authenticated current-flow audit.
  - The journey sequence and customer consequences are hypotheses.
contradictions:
  - Program rules vary across carriers and offers.
risks:
  - Simplification could omit a material condition.
  - Too much disclosure could increase reading burden.
  - Synthetic validation could be mistaken for predicted business impact.
open_questions:
  - Which information must remain visible and which can be progressively disclosed?
  - What wording best supports accurate explanation of the full impact?
return_to_discover: []
decisions_needed:
  - None; the Define gate decision is recorded.
decisions_recorded:
  - id: DEC-DEFINE-001
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
    decision: Approved PROBLEM-001 as the synthetic design hypothesis and OPP-001 as primary, with OPP-002 and OPP-003 as required supporting outcomes.
confidence: medium
gate_recommendation: pass
recommended_next_action: UX Design Agent begins Design using approved ART-DEFINE-002 version 1.
human_decision_required: false
```
