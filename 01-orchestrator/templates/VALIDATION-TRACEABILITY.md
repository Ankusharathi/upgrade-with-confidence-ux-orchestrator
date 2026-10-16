# Validation Traceability Template

```yaml
artifact: {id: TRACE-VALIDATE-001, type: validation-traceability, version: 1, status: draft, project: project-name, phase: validate, producer: ux-validation-agent}
links:
  - design_requirement_id: REQ-001
    criterion_id: VC-001
    method: moderated-usability-test
    scenario_ids: [VS-001]
    source_ids: []
    observation_ids: []
    finding_ids: []
    issue_ids: []
    decision_ids: []
    changed_artifact_ids: []
    retest_result_ids: []
coverage:
  criteria_total: 0
  criteria_with_method: 0
  criteria_with_eligible_evidence: 0
  criteria_met: 0
  criteria_partially_met: 0
  criteria_not_met: 0
  criteria_untested: 0
orphans:
  criteria_without_method: []
  tasks_without_criteria: []
  findings_without_evidence: []
  issues_without_owner: []
  changes_without_retest: []
  decisions_without_authority: []
evidence_validity_after_changes: []
blocked_items: []
accepted_risks: []
revalidation_queue: []
```

Every conclusion and gate-relevant decision must remain traceable to eligible evidence and authority.
