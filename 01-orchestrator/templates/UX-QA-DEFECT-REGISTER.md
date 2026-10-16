# UX QA Defect Register Template

```yaml
artifact: {id: ART-QA-003, type: ux-qa-defect-register, version: 1, status: active, project: project-name, phase: deliver, producer: ux-qa-agent}
defects:
  - id: UXQA-001
    title: ""
    status: open # open | in-progress | fixed | retest-failed | verified | deferred | accepted | duplicate | not-a-defect
    type: unresolved # implementation | design | content | accessibility | analytics | environment | approved-variance | unresolved
    source_ids: []
    environment_id: ENV-001
    build_version: ""
    setup_and_reproduction: []
    expected_behavior: ""
    observed_behavior: ""
    evidence_ids: []
    affected_roles_flows_and_states: []
    consequence_and_recovery: ""
    severity: unresolved # blocker | critical | major | moderate | minor | unresolved
    priority: unassigned
    confidence: low
    owner: name-or-role
    route: implementation # implementation | design | validate | content | analytics | accessibility | environment
    target_fix: ""
    decision_id: null
    fix_evidence_ids: []
    retest: {required: true, status: pending, evidence_ids: []}
    risk_acceptance: {status: not-requested, owner: name-or-role, decision_id: null, rationale: null}
summary: {open_blocker: 0, open_critical: 0, open_major: 0, unverified_fixes: 0, deferred: 0, accepted: 0}
```
