# Validation Evidence Register Template

```yaml
artifact: {id: ART-VALIDATE-003, type: validation-evidence-register, version: 1, status: draft, project: project-name, phase: validate, producer: ux-validation-agent}
sources:
  - id: VE-001
    type: usability-session
    source_artifact_id: SESSION-VALIDATE-001
    tested_artifact: {id: ART-DESIGN-001, version: 1}
    protocol_version: 1
    authorization_id: null
    evidence_classification: planned # executed-primary | executed-secondary | expert | specialist | product-data | synthetic | planned
    eligibility: ineligible # eligible | conditional | ineligible
    environment: ""
    deviations: []
    privacy_classification: restricted
    quality: {method_fit: unknown, completeness: unknown, confidence: low}
observations:
  - id: OBS-001
    source_id: VE-001
    criterion_ids: [VC-001]
    scenario_id: VS-001
    type: direct-observation
    statement: ""
    evidence_location: ""
    eligibility: ineligible
metrics:
  - id: VM-001
    definition: ""
    numerator: null
    denominator: null
    value: null
    unit: ""
    source_ids: []
    interpretation_limit: ""
excluded_sources: []
missing_evidence: []
```

Planned and synthetic sources cannot support real validation findings.
