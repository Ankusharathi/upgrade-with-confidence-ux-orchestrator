# Validation Evidence Register

```yaml
artifact:
  id: ART-VALIDATE-003
  type: validation-evidence-register
  version: 2
  status: active
  project: upgrade-with-confidence
  phase: validate
  producer: ux-validation-agent

sources:
  - id: VE-001
    type: synthetic-dry-run
    source_artifact_id: SESSION-VALIDATE-001
    tested_artifact: {id: ART-DESIGN-007, version: 1, prototype_version: local-v1-v7}
    protocol_version: 1
    authorization_id: DEC-VALIDATION-PLAN-001
    evidence_classification: synthetic
    eligibility: conditional
    environment: Local HTTP prototype in Codex in-app browser; desktop, internal mobile mode, keyboard, accessibility tree, and 320-by-800 viewport
    deviations: [DEV-001]
    privacy_classification: invented-data-only
    quality: {method_fit: suitable-for-workflow-and-interface-inspection, completeness: partial, confidence: medium}
  - id: VE-002
    type: synthetic-retest
    source_artifact_id: SESSION-VALIDATE-002
    tested_artifact: {id: ART-DESIGN-007, version: 1, prototype_revision: local-v2-v8}
    protocol_version: 1
    authorization_id: DEC-VALIDATION-PLAN-001
    evidence_classification: synthetic
    eligibility: conditional
    environment: Local HTTP prototype in Codex in-app browser; keyboard and accessibility-tree inspection
    deviations: []
    privacy_classification: invented-data-only
    quality: {method_fit: suitable-for-targeted-workflow-retest, completeness: complete-for-affected-scenarios, confidence: high-for-observed-prototype-behavior}

observations:
  - {id: OBS-001, source_id: VE-001, criterion_ids: [VAL-001], scenario_id: VS-001, type: direct-observation, statement: Complete impact categories and expected synthetic values were present at Step 4, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-002, source_id: VE-001, criterion_ids: [VAL-002], scenario_id: VS-001, type: direct-observation, statement: Estimate condition delivery and delay were explicit, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-003, source_id: VE-001, criterion_ids: [VAL-003], scenario_id: VS-002, type: direct-observation, statement: Edit loop preserved context and recalculated affected values, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-004, source_id: VE-001, criterion_ids: [VAL-003, VAL-005], scenario_id: VS-003, type: direct-observation, statement: Commitment was explicit repeat activation was disabled and one synthetic confirmation appeared, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-005, source_id: VE-001, criterion_ids: [VAL-004], scenario_id: VS-001, type: direct-observation, statement: Mobile impact drawer exposed complete content and restored focus on close, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-006, source_id: VE-001, criterion_ids: [VAL-004], scenario_id: VS-002, type: measured-value, statement: 320-pixel viewport had no document-level horizontal overflow and sampled keyboard order was operable, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-007, source_id: VE-001, criterion_ids: [VAL-005], scenario_id: VS-004-and-VS-005, type: direct-observation, statement: Error and unknown-status behaviors were previewed or specified but not executable in the primary flow, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-008, source_id: VE-001, criterion_ids: [VAL-001, VAL-002], scenario_id: VS-001, type: direct-observation, statement: Initial impact values appeared before active device or trade-in selection, evidence_location: SESSION-VALIDATE-001, eligibility: conditional}
  - {id: OBS-009, source_id: VE-002, criterion_ids: [VAL-001, VAL-002], scenario_id: VS-001, type: direct-observation, statement: Revised initial state withheld financial values until choices were confirmed, evidence_location: SESSION-VALIDATE-002, eligibility: conditional}
  - {id: OBS-010, source_id: VE-002, criterion_ids: [VAL-003, VAL-004, VAL-005], scenario_id: VS-004, type: direct-observation, statement: Missing trade-in condition produced a focused visible error preserved context and recovered after correction, evidence_location: SESSION-VALIDATE-002, eligibility: conditional}
  - {id: OBS-011, source_id: VE-002, criterion_ids: [VAL-003, VAL-005], scenario_id: VS-005, type: direct-observation, statement: Unknown order status prevented retry until order status was checked, evidence_location: SESSION-VALIDATE-002, eligibility: conditional}
  - {id: OBS-012, source_id: VE-002, criterion_ids: [VAL-003, VAL-005], scenario_id: VS-005, type: direct-observation, statement: No-order result enabled one safe retry that produced one synthetic confirmation, evidence_location: SESSION-VALIDATE-002, eligibility: conditional}

metrics:
  - id: VM-001
    definition: Planned scenarios with a directly executable outcome in the pilot
    numerator: 3
    denominator: 5
    value: 60
    unit: percent-of-scenarios
    source_ids: [VE-001]
    interpretation_limit: Workflow coverage only; not a usability success rate and not participant evidence.
  - id: VM-002
    definition: Required validation criteria with at least one conditional dry-run observation
    numerator: 5
    denominator: 5
    value: 100
    unit: percent-of-criteria
    source_ids: [VE-001]
    interpretation_limit: Evidence presence does not mean each criterion was met; VAL-005 remains partially untested.
  - id: VM-003
    definition: Affected synthetic scenarios completed in the targeted retest
    numerator: 3
    denominator: 3
    value: 100
    unit: percent-of-retest-scenarios
    source_ids: [VE-002]
    interpretation_limit: Deterministic workflow coverage only; not a usability success rate, conversion result, or participant measure.

supersession_notes:
  - OBS-008 remains part of the original pilot record but is superseded for the current prototype by OBS-009.
  - OBS-007 remains evidence of the original gap but is superseded for the revised executable recovery behavior by OBS-010, OBS-011, and OBS-012.

excluded_sources:
  - Real customer research, production analytics, Figma comments, and unsupported evaluator opinions
missing_evidence:
  - Representative-user comprehension and task evidence
  - Screen-reader and live-region verification
  - 200-percent zoom and specialist accessibility review
  - Production feasibility, policy, analytics, and conversion evidence
```
