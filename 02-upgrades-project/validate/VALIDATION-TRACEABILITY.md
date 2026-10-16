# Validation Traceability

```yaml
artifact:
  id: TRACE-VALIDATE-001
  type: validation-traceability
  version: 2
  status: active
  project: upgrade-with-confidence
  phase: validate
  producer: ux-validation-agent

links:
  - design_requirement_id: REQ-002
    criterion_id: VAL-001
    method: structured-content-and-scenario-walkthrough
    scenario_ids: [VS-001, VS-003]
    source_ids: [VE-001, VE-002]
    observation_ids: [OBS-001, OBS-004, OBS-008, OBS-009]
    finding_ids: [VF-001]
    issue_ids: []
    decision_ids: [DEC-VALIDATION-PLAN-001]
    changed_artifact_ids: [CHG-VALIDATE-001]
    retest_result_ids: [OBS-009]
  - design_requirement_id: REQ-003
    criterion_id: VAL-002
    method: claim-and-status-language-inspection
    scenario_ids: [VS-001]
    source_ids: [VE-001, VE-002]
    observation_ids: [OBS-002, OBS-008, OBS-009]
    finding_ids: [VF-001]
    issue_ids: []
    decision_ids: [DEC-VALIDATION-PLAN-001]
    changed_artifact_ids: [CHG-VALIDATE-001]
    retest_result_ids: [OBS-009]
  - design_requirement_id: REQ-005
    criterion_id: VAL-003
    method: task-walkthrough-with-edit-loop-inspection
    scenario_ids: [VS-002, VS-003, VS-005]
    source_ids: [VE-001, VE-002]
    observation_ids: [OBS-003, OBS-004, OBS-007, OBS-010, OBS-011, OBS-012]
    finding_ids: [VF-002, VF-003]
    issue_ids: []
    decision_ids: [DEC-VALIDATION-PLAN-001]
    changed_artifact_ids: [CHG-VALIDATE-002]
    retest_result_ids: [OBS-010, OBS-011, OBS-012]
  - design_requirement_id: A11Y-DESIGN
    criterion_id: VAL-004
    method: preliminary-manual-accessibility-inspection
    scenario_ids: [VS-002, VS-003, VS-004]
    source_ids: [VE-001, VE-002]
    observation_ids: [OBS-005, OBS-006, OBS-007, OBS-010]
    finding_ids: [VF-004]
    issue_ids: []
    decision_ids: [DEC-VALIDATION-PLAN-001]
    changed_artifact_ids: [CHG-VALIDATE-002]
    retest_result_ids: [OBS-010]
  - design_requirement_id: STATE-COVERAGE
    criterion_id: VAL-005
    method: specification-to-prototype-state-coverage-review
    scenario_ids: [VS-004, VS-005]
    source_ids: [VE-001, VE-002]
    observation_ids: [OBS-004, OBS-007, OBS-010, OBS-011, OBS-012]
    finding_ids: [VF-003]
    issue_ids: []
    decision_ids: [DEC-VALIDATION-PLAN-001]
    changed_artifact_ids: [CHG-VALIDATE-002]
    retest_result_ids: [OBS-010, OBS-011, OBS-012]

coverage:
  criteria_total: 5
  criteria_with_method: 5
  criteria_with_eligible_evidence: 5
  criteria_met: 4
  criteria_partially_met: 1
  criteria_not_met: 0
  criteria_untested: 0

criterion_status:
  VAL-001: met-for-synthetic-interface-coverage
  VAL-002: met-for-synthetic-interface-coverage
  VAL-003: met-for-executed-prototype-paths
  VAL-004: partially-met
  VAL-005: met-for-integrated-synthetic-recovery

orphans:
  criteria_without_method: []
  tasks_without_criteria: []
  findings_without_evidence: []
  issues_without_owner: []
  changes_without_retest: []
  decisions_without_authority: []

evidence_validity_after_changes:
  - OBS-008 and OBS-007 remain valid records of the original local-v1-v7 gaps; OBS-009 through OBS-012 are the current evidence for local-v2-v8.
  - Any further change to impact initialization, validation, submission, or recovery invalidates the affected retest evidence and requires proportionate revalidation.
blocked_items: []
accepted_risks: []
revalidation_queue: []
```
