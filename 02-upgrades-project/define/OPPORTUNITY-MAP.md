# Opportunity Map

```yaml
artifact:
  id: OPPMAP-DEFINE-001
  type: opportunity-map
  version: 1
  status: approved
  project: upgrade-with-confidence
  phase: define
  producer: ux-opportunity-agent
  evidence_classification: approved-real-evidence

evidence_boundary: Opportunities are evidence-aligned outcome hypotheses. They are not validated user needs or preselected features.

decision_context:
  decision_to_support: Which outcome spaces should the synthetic Design phase address first?
  accountable_human: Ankusha, Project Owner and UX Lead
  problem_definition_id: ART-DEFINE-002
  problem_definition_version: 1

outcome_hierarchy:
  desired_outcomes:
    - id: OUTCOME-001
      desired_change: Accurately understand immediate, monthly, delayed, estimated, and conditional upgrade effects.
      affected_users_or_roles: [Eligible consumer customers in the synthetic scenario]
      problem_ids: [PROBLEM-001]
      evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-004, EVID-005, EVID-006, EVID-007]
      guardrails: [No material omission, no guarantee applied to an estimate]
    - id: OUTCOME-002
      desired_change: Review, correct, and knowingly confirm the upgrade.
      affected_users_or_roles: [Eligible consumer customers in the synthetic scenario]
      problem_ids: [PROBLEM-001]
      evidence_ids: [EVID-008, EVID-009, EVID-010]
      guardrails: [Accessible operation, explicit commitment]
  opportunities:
    - id: OPP-001
      parent_outcome_id: OUTCOME-001
      outcome_space: Complete upgrade-impact understanding before commitment.
      status: hypothesis
      affected_users_or_roles: [Eligible consumer customers in the synthetic scenario]
      journey_stage_ids: [STAGE-004]
      problem_ids: [PROBLEM-001]
      insight_ids: [INSIGHT-001]
      finding_ids: [FIND-001]
      evidence_ids: [EVID-001, EVID-002, EVID-003, EVID-004, EVID-006]
      contradicting_evidence_ids: []
      user_value: Understand what is paid now, monthly, and later.
      business_relevance: Supports the approved completion goal without claiming a numeric lift.
      accessibility_inclusion_or_safety_implications: [Readable hierarchy, semantic relationships, non-color status cues]
      constraints: [Offer accuracy, no omitted material terms]
      dependencies: [Complete scenario data]
      assumptions: [Clearer understanding supports confidence.]
      evidence_gap: Direct comprehension and behavior evidence.
      success_signal_ids: [SIGNAL-001, SIGNAL-003]
    - id: OPP-002
      parent_outcome_id: OUTCOME-001
      outcome_space: Clear understanding of value status, timing, and conditions.
      status: hypothesis
      affected_users_or_roles: [Eligible consumer customers in the synthetic scenario]
      journey_stage_ids: [STAGE-003, STAGE-004]
      problem_ids: [PROBLEM-001]
      insight_ids: [INSIGHT-001]
      finding_ids: [FIND-002]
      evidence_ids: [EVID-002, EVID-004, EVID-005, EVID-006, EVID-007]
      contradicting_evidence_ids: []
      user_value: Know whether trade-in and promotional value is estimated, confirmed, conditional, or delayed.
      business_relevance: Supports informed offer adoption.
      accessibility_inclusion_or_safety_implications: [Plain language, persistent status labels]
      constraints: [Rules vary by offer]
      dependencies: [Accurate promotion and trade-in status]
      assumptions: [Explicit status reduces false certainty.]
      evidence_gap: Direct comprehension evidence.
      success_signal_ids: [SIGNAL-001]
    - id: OPP-003
      parent_outcome_id: OUTCOME-002
      outcome_space: Accessible review, correction, and informed confirmation.
      status: supported
      affected_users_or_roles: [Eligible consumer customers in the synthetic scenario]
      journey_stage_ids: [STAGE-004, STAGE-005]
      problem_ids: [PROBLEM-001]
      insight_ids: [INSIGHT-002]
      finding_ids: [FIND-003, FIND-004]
      evidence_ids: [EVID-008, EVID-009, EVID-010]
      contradicting_evidence_ids: []
      user_value: Inspect and correct consequential choices before placing the order.
      business_relevance: Reduces preventable transaction errors and supports completion.
      accessibility_inclusion_or_safety_implications: [Keyboard operation, clear focus, explicit labels, announced updates]
      constraints: [WCAG 2.2, financial transaction safeguards]
      dependencies: [Complete error, correction, and confirmation states]
      assumptions: [The selected safeguard is appropriate for the scenario.]
      evidence_gap: Telecom-specific validation of the proposed presentation.
      success_signal_ids: [SIGNAL-002]

relationships:
  - from_opportunity_id: OPP-002
    to_opportunity_id: OPP-001
    relationship: enabling
    rationale: Complete impact cannot be understood if value status and timing are ambiguous.
  - from_opportunity_id: OPP-001
    to_opportunity_id: OPP-003
    relationship: prerequisite
    rationale: Review and confirmation require a complete impact to review.

tensions_and_tradeoffs:
  - id: TENSION-001
    opportunity_ids: [OPP-001, OPP-002]
    tension: Complete disclosure can increase reading burden; progressive disclosure must not hide material conditions.
    affected_outcomes: [OUTCOME-001]
    decision_owner: Ankusha, Project Owner and UX Lead
    decision_id: DEC-DEFINE-001

unsupported_feature_requests: []
portfolio_gaps: [Direct user evidence, real analytics, authenticated current-flow evidence]
scope_exclusions: [Production integration, real carrier policy redesign, assisted channels]
specialist_decisions_needed: [Accessibility review in Design, content accuracy review for synthetic offer terms]
limitations: [Opportunity value and feasibility remain unmeasured.]
related_decisions: [DEC-DEFINE-001]
next_consumer: opportunity-prioritization
```
