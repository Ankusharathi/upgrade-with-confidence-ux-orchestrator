# Implementation Fidelity Review Template

```yaml
artifact: {id: ART-QA-004, type: implementation-fidelity-review, version: 1, status: draft, project: project-name, phase: deliver, producer: ux-qa-agent}
comparison: {approved_design: {id: ART-DESIGN-001, version: 1}, implementation_specification: {id: ART-DELIVER-002, version: 1}, tested_build: {id: null, version: null}}
result: not-run # conforming | conditional | nonconforming | not-run | blocked
reviews:
  - id: FID-001
    source_ids: []
    environment_ids: []
    category: hierarchy
    expected: ""
    observed: null
    result: not-run
    evidence_ids: []
    defect_ids: []
approved_variances: []
untested_areas: []
limitations: []
reviewer: ux-qa-agent
reviewed_at: null
```

Visual similarity does not establish behavioral, accessibility, data, or backend correctness.
