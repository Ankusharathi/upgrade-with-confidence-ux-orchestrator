# Design Gate Result Template

```yaml
gate_result:
  phase: design
  artifact_id: ART-DESIGN-###
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-design-agent
  accountable_human: name-or-role
  status: human-decision # pass | revise | human-decision | blocked
  specification_completeness: uncertain # sufficient | insufficient | uncertain
  feasibility_status: pending # confirmed | conditional | pending | blocked
  accessibility_review_status: pending # reviewed | conditional | pending | blocked
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  revision_route:
    owner: ux-design-agent
    artifact_id: ART-DESIGN-###
    required_changes: []
  human_decision:
    question: "Approve this Design Specification for validation?"
    options: [approve, request-revision, return-to-define]
    owner: name-or-role
    decision_id: null
  blocking_inputs: []
  accepted_risks: []
  next_phase: null
  next_action: "Accountable human reviews the design direction, coverage, feasibility, and validation readiness."
```

Use `pass` only after the Design Specification is approved. Expert review, stakeholder preference, and feasibility discussion do not replace validation evidence.

