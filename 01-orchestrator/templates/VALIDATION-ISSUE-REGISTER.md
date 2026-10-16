# Validation Issue Register Template

```yaml
artifact: {id: ART-VALIDATE-005, type: validation-issue-register, version: 1, status: draft, project: project-name, phase: validate, producer: ux-validation-agent}
severity_rubric:
  factors: [consequence, recoverability, task-criticality, accessibility-or-compliance-risk, scope, observed-frequency]
  levels: [blocking, major, moderate, minor, observation, unresolved]
issues:
  - id: VI-001
    title: ""
    status: open # open | accepted | deferred | resolved | verified | duplicate
    affected_roles_or_needs: []
    context_and_barrier: ""
    consequence: ""
    recovery: ""
    evidence_ids: []
    criterion_ids: []
    design_element_ids: []
    scenario_ids: []
    severity: unresolved
    severity_rationale: ""
    observed_frequency: {count: null, denominator: null, interpretation: descriptive-only}
    confidence: low
    recommendation_intent: ""
    owner: name-or-role
    revision_route: {phase: design, artifact_ids: [], required_change: ""}
    revalidation_required: true
    residual_risk: ""
    acceptance: {status: not-requested, owner: name-or-role, decision_id: null, rationale: null}
related_issues: []
```

Severity and confidence are separate. Only an authorized human may accept residual risk.
