# Opportunity Prioritization Template

```yaml
opportunity_prioritization:
  id: OPPRIO-DEFINE-001
  version: 1
  project: project-name
  phase: define
  status: draft # draft | agent-reviewed | human-reviewed | approved
  prepared_by: ux-synthesis-agent
  prepared_at: YYYY-MM-DD
  evidence_classification: approved-real-evidence

decision:
  question: "Which evidence-supported outcome spaces should Design address first?"
  accountable_human: name-or-role
  decision_id: null

criteria:
  scale:
    high: "Strongly supported or consequential within the approved evidence and decision."
    medium: "Relevant with material limits, variation, or uncertainty."
    low: "Limited decision consequence or weak support in the approved scope."
    unknown: "Not established; requires evidence or specialist decision."
  dimensions:
    - decision-relevance
    - evidence-strength
    - user-consequence
    - business-alignment
    - accessibility-inclusion-or-safety-risk
    - urgency-or-irreversibility
    - dependency-readiness
    - feasibility-confidence
  weighting: none
  precision_warning: "Ordinal judgments are not mathematical measurements and must not be multiplied into a composite score."

opportunities:
  - id: OPP-001
    outcome_space: ""
    problem_ids: []
    insight_ids: []
    finding_ids: []
    evidence_ids: []
    contradicting_evidence_ids: []
    ratings:
      decision_relevance: unknown
      evidence_strength: unknown
      user_consequence: unknown
      business_alignment: unknown
      accessibility_inclusion_or_safety_risk: unknown
      urgency_or_irreversibility: unknown
      dependency_readiness: unknown
      feasibility_confidence: unknown
    priority_band: pending # now | next | later | investigate | blocked | pending
    rationale: ""
    assumptions: []
    dependencies: []
    specialist_decisions: []
    disagreements: []
    evidence_gap: null
    return_to_discover: false

portfolio_notes:
  ties: []
  sequencing_constraints: []
  cross_opportunity_dependencies: []
  excluded_feature_requests: []
  material_disagreements: []
  unresolved_decisions: []

approval:
  required: true
  owner: name-or-role
  outcome: pending
  decision_id: null
  decided_at: null
```

Priority expresses a decision under uncertainty. It does not prove prevalence, business value, technical feasibility, or solution effectiveness.

