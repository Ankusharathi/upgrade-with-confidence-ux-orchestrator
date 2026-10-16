# Insight Synthesis Template

Use this supporting Define artifact to show how approved findings were grouped and interpreted before problem statements were written.

```yaml
artifact:
  id: ART-DEFINE-001
  type: insight-synthesis
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: define
  producer: ux-synthesis-agent
  evidence_classification: approved-real-evidence # approved-real-evidence | synthetic-test-only | mixed-ineligible

approved_context:
  research_findings:
    id: ART-DISCOVER-002
    version: 1
    status: approved
  evidence_register:
    id: EVIDREG-001
    version: 1
  discover_gate:
    status: pass
    decision_id: DEC-DISCOVER-001
  decision_to_support: ""
  accountable_human: name-or-role

input_eligibility:
  eligible_finding_ids: []
  excluded_inputs:
    - id: INPUT-001
      reason: synthetic-or-unapproved
      allowed_use: none
  eligibility_notes: []

coding_frame:
  dimensions: [behavior, need, obstacle, motivation, context, role, journey-stage, consequence, constraint]
  coding_notes: []

clusters:
  - id: CLUSTER-001
    label: ""
    relationship: ""
    member_finding_ids: []
    supporting_evidence_ids: []
    contradicting_finding_ids: []
    negative_cases_and_outliers: []
    role_or_segment_variation: []
    evidence_types: []
    pattern_summary: ""
    supports: []
    does_not_support: []
    remaining_questions: []

insights:
  - id: INSIGHT-001
    statement: ""
    cluster_ids: []
    supporting_finding_ids: []
    supporting_evidence_ids: []
    contradicting_finding_ids: []
    evidence_pattern: ""
    interpretation: ""
    plausible_alternatives: []
    implication: ""
    confidence: low # high | medium | low
    confidence_basis: ""
    inference_boundary: ""
    evidence_needed_to_raise_confidence: []

cross_cluster_tensions: []
unresolved_questions: []
limitations: []
related_decisions: []
next_consumer: problem-definition
```

An insight is an interpretation grounded in approved evidence. It is not a quotation, a recommendation, a feature request, or a prevalence claim.

