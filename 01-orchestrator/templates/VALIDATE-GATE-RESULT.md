# Validate Gate Result Template

```yaml
gate_result:
  phase: validate
  artifact_id: ART-VALIDATE-###
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-validation-agent
  accountable_human: name-or-role
  tested_artifact: {id: ART-DESIGN-001, version: 1}
  evidence_classification: real-authorized-evidence
  status: human-decision # pass | revise | human-decision | blocked
  validation_criteria_result: uncertain # met | partially-met | not-met | uncertain
  evidence_sufficiency: uncertain # sufficient | insufficient | uncertain
  execution_authorization_status: pending # approved | pending | blocked | not-applicable
  accessibility_validation_status: untested # reviewed | conditional | untested | blocked
  criterion_summary: {met: [], partially_met: [], not_met: [], untested: []}
  blocking_issue_ids: []
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  revision_route:
    destination: ux-validation-agent # ux-validation-agent | design | discover | define
    reason: null
    affected_artifact_ids: []
    required_changes: []
    revalidation_required: true
  human_decision:
    question: "Approve the validated design for delivery, request more validation, or return it for revision?"
    options: [approve, conduct-more-validation, return-to-design, accept-documented-risk]
    owner: name-or-role
    decision_id: null
  accepted_risks: []
  unresolved_risks: []
  evidence_invalidated_by_changes: []
  revalidation_required: []
  blocking_inputs: []
  next_phase: null
  next_action: "Accountable human reviews validation evidence, unresolved issues, and residual risk."
```

Use `pass` only when the agreed validation criteria are met, or an authorized human explicitly accepts each residual risk with a recorded rationale. A design change that could affect validated behavior requires proportionate revalidation.

Synthetic fixtures, dry runs, planned sessions, expert opinion, and workflow-test approval cannot substitute for eligible executed evidence or approve the real gate.
