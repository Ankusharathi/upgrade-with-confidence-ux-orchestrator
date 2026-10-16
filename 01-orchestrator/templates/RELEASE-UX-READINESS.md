# Release UX Readiness Template

```yaml
artifact: {id: ART-QA-005, type: release-ux-readiness, version: 1, status: draft, project: project-name, phase: deliver, producer: ux-qa-agent}
tested_build: {id: null, version: null}
recommendation: blocked # ready | conditional | not-ready | blocked
coverage: {planned: 0, executed: 0, passed: 0, failed: 0, blocked: 0, deferred: 0, not_applicable: 0, untested: 0}
critical_flow_and_state_status: []
content_status: pending
accessibility_status: pending
analytics_status: pending
defect_status: {blocker_open: 0, critical_open: 0, major_open: 0, unverified_fixes: 0}
change_and_revalidation_status: {material_changes: [], revalidation_pending: []}
engineering_qa_evidence: {functional: pending, integration: pending, security: pending, performance: pending, regression: pending, operational: pending}
accepted_risks: []
unaccepted_risks: []
untested_scope: []
monitoring_and_rollback_needs: []
required_actions: []
ux_qa_owner: name-or-role
accountable_ux_decision: {status: pending, decision_id: null}
implementation_owner_decision: {status: pending, decision_id: null}
release_authority_decision: {status: outside-ux-workflow, decision_id: null}
```

This artifact recommends UX readiness; it does not authorize production release.
