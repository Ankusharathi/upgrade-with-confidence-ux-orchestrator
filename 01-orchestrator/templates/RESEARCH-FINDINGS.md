# Research Findings Template

Use this as the primary Discover artifact. It reports what the evidence supports, how it was interpreted, why it matters, and what remains uncertain.

```yaml
artifact:
  id: ART-DISCOVER-002
  type: research-findings
  version: 1
  status: draft # draft | agent-reviewed | human-reviewed | approved | superseded
  project: project-name
  phase: discover
  producer: ux-research-agent

approved_context:
  ux_brief:
    id: ART-INTAKE-001
    version: 1
  research_plan:
    id: ART-DISCOVER-001
    version: 1
  evidence_register:
    id: EVIDREG-001
    version: 1
  decision_to_support: ""
  accountable_human: name-or-role

executive_summary: ""

study_account:
  methods_completed: []
  sources_reviewed: 0
  participants_or_records: ""
  collection_dates: ""
  deviations: []

supporting_analyses:
  competitor_analysis: null
  secondary_research: null
  current_experience_audit: null
  heuristic_evaluation: null
  industry_ux_standards_review: null
  product_data_evidence_request: null

question_coverage:
  - question_id: RQ-001
    status: unanswered # answered | partial | unanswered
    summary: ""
    evidence_ids: []
    remaining_gap: ""

findings:
  - id: FIND-001
    title: ""
    observation_or_sourced_fact: ""
    supporting_evidence_ids: []
    contradicting_evidence_ids: []
    interpretation: ""
    plausible_alternatives: []
    implication: ""
    confidence: low # high | medium | low
    confidence_basis: ""
    linked_question_ids: []

supported_user_needs: []
supported_behaviors: []
supported_pain_points: []
contradictions_and_outliers: []

recommendations:
  - id: REC-001
    recommendation: ""
    basis_finding_ids: []
    priority: medium # high | medium | low
    owner: unassigned
    decision_required: false

limitations: []
unanswered_questions: []
next_research_needs: []
risks: []
related_decisions: []

approval:
  required: true
  decision_id: null
  owner: name-or-role
  outcome: pending # pending | approved | revision-requested
  decided_at: null

next_consumer: ux-synthesis-agent
recommended_next_action: accountable human reviews the findings
```

## Findings rules

- A finding must have evidence; an unanswered question or hypothesis is not a finding.
- Qualitative recurrence does not establish prevalence.
- Keep observations, interpretations, implications, and recommendations separate.
- Confidence reflects evidence quality and consistency, not writing certainty.
- Human approval accepts the findings as input to Define; it does not make every recommendation mandatory.
