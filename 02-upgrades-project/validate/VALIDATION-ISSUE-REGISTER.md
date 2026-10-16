# Validation Issue Register

```yaml
artifact:
  id: ART-VALIDATE-005
  type: validation-issue-register
  version: 2
  status: active
  project: upgrade-with-confidence
  phase: validate
  producer: ux-validation-agent

severity_rubric:
  factors: [consequence, recoverability, task-criticality, accessibility-or-compliance-risk, scope, observed-frequency]
  levels: [blocking, major, moderate, minor, observation, unresolved]

issues:
  - id: VI-001
    title: Consequential error and unknown-submission recovery are not executable in the primary flow
    status: verified
    affected_roles_or_needs: [Customers correcting invalid inputs, customers facing uncertain order status, keyboard and assistive-technology users]
    context_and_barrier: Error and recovery copy appears in supporting-state previews and specifications, but VS-004 could not trigger an integrated input error and VS-005 could not enter an unknown order state from submission.
    consequence: The pilot cannot verify correction, focus, announcement, retry prevention, or duplicate-order safety where risk is highest.
    recovery: Revised flow focuses a missing-input error, preserves state, prevents retry during unknown status, checks order status, and enables one retry only after no order is found.
    evidence_ids: [OBS-007, OBS-010, OBS-011, OBS-012]
    criterion_ids: [VAL-004, VAL-005]
    design_element_ids: [STATE-010, STATE-013, NODE-010, NODE-011, A11Y-005, A11Y-009]
    scenario_ids: [VS-004, VS-005]
    severity: major
    severity_rationale: Unknown submission and inaccessible error recovery can cause duplicate commitment or block completion; implementation is absent from the test path.
    observed_frequency: {count: 2, denominator: 2, interpretation: Both planned recovery scenarios lacked an integrated executable path; descriptive pilot evidence only.}
    confidence: high
    recommendation_intent: Add deterministic prototype triggers for an invalid trade-in input and unknown submission result, with focus, status, safe retry, and return-to-review behavior.
    owner: ux-design-agent
    revision_route: {phase: design, artifact_ids: [interactive-prototype/index.html, interactive-prototype/prototype.js, ART-DESIGN-002], required_change: Integrate representative STATE-010 and STATE-013 paths into the primary prototype.}
    revalidation_required: true
    resolution: Implemented in local-v2-v8 and verified through VS-004 and VS-005 in SESSION-VALIDATE-002.
    residual_risk: Screen-reader announcement behavior and production duplicate-order safeguards remain unverified.
    acceptance: {status: not-requested, owner: Ankusha, Project Owner and UX Lead, decision_id: null, rationale: null}
  - id: VI-002
    title: Upgrade Impact shows configured values before an active device or trade-in choice
    status: verified
    affected_roles_or_needs: [Customers orienting at eligibility confirmation]
    context_and_barrier: Step 1 displays populated due-today, next-bill, ongoing, and trade-in values although the active selection steps have not yet occurred and the values are not labeled as defaults or a saved configuration.
    consequence: Reviewers may assume a price or trade-in has already been selected, weakening the distinction between eligibility context and customer choice.
    recovery: Later selection steps expose and allow changes to the defaults.
    evidence_ids: [OBS-008, OBS-009]
    criterion_ids: [VAL-001, VAL-002]
    design_element_ids: [STATE-001, INFO-008, CMP-004]
    scenario_ids: [VS-001]
    severity: moderate
    severity_rationale: The issue does not block completion, but it can create early financial misunderstanding in the primary decision aid.
    observed_frequency: {count: 1, denominator: 1, interpretation: Present in the single deterministic initial state; not a population frequency.}
    confidence: high
    recommendation_intent: Initialize Upgrade Impact as incomplete until choices are made, or explicitly label and explain preselected defaults before showing their financial effects.
    owner: ux-design-agent
    revision_route: {phase: design, artifact_ids: [interactive-prototype/prototype.js, ART-DESIGN-002], required_change: Define and implement an honest partial or clearly preselected initial impact state.}
    revalidation_required: true
    resolution: Revised Step 1 now states Not calculated and explains that eligibility alone does not determine financial impact; verified in SESSION-VALIDATE-002.
    residual_risk: Representative-user comprehension has not been tested.
    acceptance: {status: not-requested, owner: Ankusha, Project Owner and UX Lead, decision_id: null, rationale: null}

related_issues: [VI-001 and VI-002 are verified for deterministic prototype behavior; their remaining risks require participant, specialist, and production validation.]
```
