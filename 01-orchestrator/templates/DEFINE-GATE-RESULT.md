# Define Gate Result Template

```yaml
gate_result:
  phase: define
  artifact_id: ART-DEFINE-###
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-synthesis-agent
  accountable_human: name-or-role
  status: human-decision # pass | revise | human-decision | blocked
  evidence_alignment: uncertain # sufficient | insufficient | uncertain
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  revision_route:
    owner: ux-synthesis-agent
    artifact_id: ART-DEFINE-###
    required_changes: []
  human_decision:
    question: "Approve this Problem Definition as the basis for Design?"
    options: [approve, request-revision, return-to-discover]
    owner: name-or-role
    decision_id: null
  blocking_inputs: []
  accepted_risks: []
  next_phase: null
  next_action: "Accountable human reviews the problem framing and evidence alignment."
```

Use `pass` only after the current Problem Definition is approved and its decision is recorded. If the framing requires evidence that Discover did not supply, return to Discover rather than filling the gap with assumptions.

