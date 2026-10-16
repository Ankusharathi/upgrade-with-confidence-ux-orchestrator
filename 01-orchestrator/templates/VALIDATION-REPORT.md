# Validation Report Template

```yaml
artifact:
  id: ART-VALIDATE-006
  type: validation-report
  version: 1
  status: draft
  project: project-name
  phase: validate
  producer: ux-validation-agent
  evidence_classification: real-authorized-evidence
approved_inputs:
  design_specification: {id: ART-DESIGN-001, version: 1, status: approved}
  design_gate_decision_id: DEC-DESIGN-001
  validation_plan: {id: ART-VALIDATE-001, version: 1, status: approved}
  execution_authorization_ids: []
tested_artifact: {id: ART-DESIGN-001, version: 1, fidelity: "", environment: ""}
executive_summary:
  decision_addressed: ""
  result: uncertain # criteria-met | criteria-partially-met | criteria-not-met | uncertain
  strongest_evidence: []
  blocking_issue_ids: []
methods:
  executed: []
  participant_or_source_summary: ""
  inclusion_and_exclusion: []
  environments: []
  deviations: []
  limitations: []
criterion_results:
  - criterion_id: VC-001
    result: untested # met | partially-met | not-met | untested
    evidence_ids: []
    finding_ids: []
    issue_ids: []
    confidence: low
    limitations: []
findings:
  - id: VF-001
    observation_summary: ""
    participant_words_or_measures: []
    interpretation: ""
    implication: ""
    evidence_ids: []
    contradictions_and_outliers: []
    confidence: low
successful_behavior: []
accessibility_summary: {artifact_id: ART-VALIDATE-004, result: untested, conformance_claim: none}
issue_summary: {artifact_id: ART-VALIDATE-005, blocking: [], major: [], moderate: [], minor: []}
changes_during_validation: []
evidence_validity: []
recommendations: []
revision_routes: []
revalidation_required: []
residual_risks: []
open_questions: []
approval: {required: true, status: pending, owner: name-or-role, decision_id: null}
gate_recommendation: blocked # pass | revise | human-decision | blocked
next_consumer: ux-orchestrator
```

Findings describe evidence; recommendations describe proposed action; risk acceptance records a human decision. None substitutes for another.
