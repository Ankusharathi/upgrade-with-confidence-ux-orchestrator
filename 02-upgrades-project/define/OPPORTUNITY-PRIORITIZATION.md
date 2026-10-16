# Opportunity Prioritization

```yaml
opportunity_prioritization:
  id: OPPRIO-DEFINE-001
  version: 1
  project: upgrade-with-confidence
  phase: define
  status: approved
  prepared_by: ux-opportunity-agent
  prepared_at: 2026-10-11
  evidence_classification: approved-real-evidence

decision:
  question: Which evidence-aligned outcome spaces should Design address first?
  accountable_human: Ankusha, Project Owner and UX Lead
  decision_id: DEC-DEFINE-001

criteria:
  scale:
    high: Strongly supported or consequential within the approved evidence and decision.
    medium: Relevant with material limits, variation, or uncertainty.
    low: Limited decision consequence or weak support in the approved scope.
    unknown: Not established; requires evidence or specialist decision.
  dimensions: [decision-relevance, evidence-strength, user-consequence, business-alignment, accessibility-inclusion-or-safety-risk, urgency-or-irreversibility, dependency-readiness, feasibility-confidence]
  weighting: none
  precision_warning: Ordinal judgments are not mathematical measurements and are not combined into a numeric score.

opportunities:
  - id: OPP-001
    outcome_space: Complete upgrade-impact understanding before commitment.
    problem_ids: [PROBLEM-001]
    insight_ids: [INSIGHT-001]
    finding_ids: [FIND-001]
    evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-004, EVID-006]
    contradicting_evidence_ids: []
    ratings:
      decision_relevance: high
      evidence_strength: high
      user_consequence: unknown
      business_alignment: high
      accessibility_inclusion_or_safety_risk: high
      urgency_or_irreversibility: high
      dependency_readiness: medium
      feasibility_confidence: unknown
    priority_band: now
    rationale: It directly addresses the approved project goal and is required for an informed financial commitment; behavioral impact and feasibility remain unproven.
    assumptions: [Understanding complete impact may support confidence and completion.]
    dependencies: [Synthetic scenario inputs, later real data integration if implemented]
    specialist_decisions: [Accessibility and content review]
    disagreements: []
    evidence_gap: Direct comprehension and behavior evidence.
    return_to_discover: false
  - id: OPP-002
    outcome_space: Clear understanding of value status, timing, and conditions.
    problem_ids: [PROBLEM-001]
    insight_ids: [INSIGHT-001]
    finding_ids: [FIND-002]
    evidence_ids: [EVID-002, EVID-004, EVID-005, EVID-006, EVID-007]
    contradicting_evidence_ids: []
    ratings:
      decision_relevance: high
      evidence_strength: high
      user_consequence: unknown
      business_alignment: high
      accessibility_inclusion_or_safety_risk: medium
      urgency_or_irreversibility: high
      dependency_readiness: medium
      feasibility_confidence: unknown
    priority_band: now
    rationale: It enables complete impact understanding and prevents estimates or conditions from being presented as certainty.
    assumptions: [Explicit status improves comprehension.]
    dependencies: [OPP-001, accurate scenario rules]
    specialist_decisions: [Content accuracy review]
    disagreements: []
    evidence_gap: Direct comprehension evidence.
    return_to_discover: false
  - id: OPP-003
    outcome_space: Accessible review, correction, and informed confirmation.
    problem_ids: [PROBLEM-001]
    insight_ids: [INSIGHT-002]
    finding_ids: [FIND-003, FIND-004]
    evidence_ids: [EVID-008, EVID-009, EVID-010]
    contradicting_evidence_ids: []
    ratings:
      decision_relevance: high
      evidence_strength: high
      user_consequence: medium
      business_alignment: high
      accessibility_inclusion_or_safety_risk: high
      urgency_or_irreversibility: high
      dependency_readiness: medium
      feasibility_confidence: medium
    priority_band: now
    rationale: It is a transaction safeguard and depends on having a complete impact available for review.
    assumptions: [Review and correction support confidence in this scenario.]
    dependencies: [OPP-001, OPP-002]
    specialist_decisions: [Accessibility review, interaction-state coverage]
    disagreements: []
    evidence_gap: Telecom-specific validation.
    return_to_discover: false

portfolio_notes:
  ties: [All three opportunities are required parts of one narrow outcome; OPP-001 is the primary framing.]
  sequencing_constraints: [Define the complete impact model, define status and conditions, then design review and correction.]
  cross_opportunity_dependencies: [OPP-002 enables OPP-001; OPP-001 and OPP-002 enable OPP-003.]
  excluded_feature_requests: []
  material_disagreements: []
  unresolved_decisions: [Human approval of OPP-001 as primary and OPP-002/OPP-003 as required supporting outcomes.]

approval:
  required: true
  owner: Ankusha, Project Owner and UX Lead
  outcome: approved
  decision_id: DEC-DEFINE-001
  decided_at: 2026-10-11
```
