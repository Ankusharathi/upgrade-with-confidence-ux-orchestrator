# Deliver Gate Result Template

```yaml
gate_result:
  phase: deliver
  artifact_id: ART-DELIVER-###
  artifact_version: 1
  evaluated_at: YYYY-MM-DD
  reviewer: ux-delivery-agent
  accountable_human: name-or-role
  status: human-decision # pass | revise | human-decision | blocked
  implementation_readiness: uncertain # ready | conditional | not-ready | uncertain
  traceability_status: uncertain # complete | partial | missing | uncertain
  design_qa_status: pending # complete | conditional | pending | blocked
  experience_qa_status: pending # complete | conditional | pending | blocked
  release_ux_readiness: blocked # ready | conditional | not-ready | blocked
  engineering_qa_evidence: {functional: pending, integration: pending, security: pending, performance: pending, regression: pending, operational: pending}
  blocking_ux_defect_ids: []
  untested_scope: []
  passed_criteria: []
  failed_criteria: []
  revision_request: null
  revision_route:
    destination: ux-delivery-agent # ux-delivery-agent | design | validate | define | discover
    reason: null
    affected_artifact_ids: []
    required_changes: []
  human_decision:
    question: "Accept this Handoff Package as implementation-ready?"
    options: [accept, request-handoff-revision, return-to-design, return-to-validate]
    owner: name-or-role
    decision_id: null
  implementation_owner_acceptance:
    owner: name-or-role
    status: pending # accepted | conditional | pending | declined
    decision_id: null
  accepted_risks: []
  known_debt: []
  revalidation_required: []
  production_release_authority: outside-ux-workflow
  blocking_inputs: []
  next_phase: null
  next_action: "UX and implementation owners review completeness, traceability, feasibility, and QA readiness."
```

Use `pass` only after the accountable UX owner and implementation owner accept the current Handoff Package. On pass, set `next_phase: complete`; acceptance does not erase known debt or accepted risks.

Workflow completion is not production-release approval. Critical UX QA defects must be resolved, explicitly deferred, or accepted by authorized humans, and any material change must complete its required revalidation before `pass`.
