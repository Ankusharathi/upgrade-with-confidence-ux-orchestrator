# UX QA Checklist Template

```yaml
artifact: {id: ART-QA-002, type: ux-qa-checklist, version: 1, status: draft, project: project-name, phase: deliver, producer: ux-qa-agent}
checks:
  - id: QA-001
    category: interaction-and-state
    source_ids: []
    environment_ids: []
    setup_and_test_data: []
    steps: []
    expected_behavior: ""
    observed_behavior: null
    result: not-run # pass | fail | blocked | deferred | not-applicable | not-run
    evidence_ids: []
    defect_ids: []
categories:
  required: [visual-fidelity, responsive-and-platform, content, interaction-and-state, accessibility, analytics]
  covered: []
  uncovered: []
state_coverage:
  required: [standard, loading, empty, unavailable, permission, error, interruption, timeout, retry, cancellation, recovery, confirmation, completion, post-task]
  tested: []
  untested: []
```
