# Accessibility Validation Template

```yaml
artifact: {id: ART-VALIDATE-004, type: accessibility-validation, version: 1, status: draft, project: project-name, phase: validate, producer: ux-validation-agent}
tested_artifact: {id: ART-DESIGN-001, version: 1}
conformance_claim: none
specialist_review: {required: true, status: pending, reviewer: name-or-role, decision_id: null}
environments:
  - {platform: "", browser: "", viewport: "", assistive_technology: [], settings: []}
requirement_results:
  - requirement_id: A11Y-001
    criterion_ids: []
    methods: []
    result: untested # met | partially-met | not-met | untested
    evidence_ids: []
    limitations: []
    issue_ids: []
method_summary:
  automated: {status: not-run, tools: [], evidence_ids: []}
  manual: {status: not-run, checks: [], evidence_ids: []}
  assistive_technology: {status: not-run, combinations: [], evidence_ids: []}
  participant: {status: not-run, coverage: [], evidence_ids: []}
untested_requirements: []
limitations: []
next_action: "Complete applicable tests and named specialist review without claiming certification."
```

Automated checks, expert review, prototypes, and limited participant coverage cannot independently establish accessibility conformance.
