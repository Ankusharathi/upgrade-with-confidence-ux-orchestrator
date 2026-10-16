# Project Artifact Manifest

```yaml
artifact_manifest:
  id: MAN-001
  project: upgrade-with-confidence
  phase: intake
  version: 1
  status: active
  prepared_by: ux-intake-agent
  prepared_at: 2026-10-11

project_evidence_status:
  classification: synthetic-academic-project
  real_customer_research_supplied: false
  real_product_analytics_supplied: false
  real_business_results_supplied: false
  rule: All simulated data, quotations, findings, targets, and results must be labeled synthetic.

sources:
  - id: SRC-001
    title: Upgrade With Confidence Project Brief
    path: ../project-brief/PROJECT-BRIEF.md
    version: 1
    owner: Ankusha
    status: approved-input
    role: source-of-project-framing
    evidence_note: This is an approved synthetic project direction, not customer or market evidence.

artifacts:
  - id: REQINV-001
    type: requirement-inventory
    path: REQUIREMENT-INVENTORY.md
    version: 1
    status: human-reviewed
  - id: ART-001
    type: ux-brief
    path: UX-BRIEF.md
    version: 1
    status: approved
  - id: SQP-001
    type: stakeholder-question-pack
    path: STAKEHOLDER-QUESTIONS.md
    version: 1
    status: closed
  - id: GATE-INTAKE-001
    type: intake-gate-result
    path: INTAKE-GATE-RESULT.md
    version: 1
    status: pass
  - id: HANDOFF-INTAKE-001
    type: intake-handoff
    path: INTAKE-HANDOFF.md
    version: 1
    status: complete
  - id: ART-DISCOVER-001
    type: research-plan
    path: ../discover/RESEARCH-PLAN.md
    version: 1
    status: agent-reviewed
  - id: EVIDREG-001
    type: evidence-register
    path: ../discover/EVIDENCE-REGISTER.md
    version: 1
    status: frozen
  - id: ART-DISCOVER-002
    type: research-findings
    path: ../discover/RESEARCH-FINDINGS.md
    version: 1
    status: approved
  - id: GATE-DISCOVER-001
    type: discover-gate-result
    path: ../discover/DISCOVER-GATE-RESULT.md
    version: 1
    status: pass
  - id: HANDOFF-DISCOVER-001
    type: discover-handoff
    path: ../discover/DISCOVER-HANDOFF.md
    version: 1
    status: complete
  - id: ART-DEFINE-001
    type: insight-synthesis
    path: ../define/INSIGHT-SYNTHESIS.md
    version: 1
    status: agent-reviewed
  - id: ART-DEFINE-002
    type: problem-definition
    path: ../define/PROBLEM-DEFINITION.md
    version: 1
    status: approved
  - id: OPPMAP-DEFINE-001
    type: opportunity-map
    path: ../define/OPPORTUNITY-MAP.md
    version: 1
    status: approved
  - id: OPPRIO-DEFINE-001
    type: opportunity-prioritization
    path: ../define/OPPORTUNITY-PRIORITIZATION.md
    version: 1
    status: approved
  - id: JOURNEY-DEFINE-001
    type: hypothesis-journey-map
    path: ../define/HYPOTHESIS-JOURNEY-MAP.md
    version: 1
    status: human-reviewed
  - id: GATE-DEFINE-001
    type: define-gate-result
    path: ../define/DEFINE-GATE-RESULT.md
    version: 1
    status: pass
  - id: HANDOFF-DEFINE-001
    type: define-handoff
    path: ../define/DEFINE-HANDOFF.md
    version: 1
    status: complete
  - id: ART-DESIGN-001
    type: design-direction
    path: ../design/DESIGN-DIRECTION.md
    version: 1
    status: human-reviewed
  - id: ART-DESIGN-002
    type: interaction-state-specification
    path: ../design/INTERACTION-STATE-SPECIFICATION.md
    version: 1
    status: agent-reviewed
  - id: ART-DESIGN-003
    type: ux-content-specification
    path: ../design/UX-CONTENT-SPECIFICATION.md
    version: 1
    status: agent-reviewed
  - id: ART-DESIGN-004
    type: accessibility-design-specification
    path: ../design/ACCESSIBILITY-DESIGN-SPECIFICATION.md
    version: 1
    status: agent-reviewed
  - id: ART-DESIGN-007
    type: design-specification
    path: ../design/DESIGN-SPECIFICATION.md
    version: 1
    status: approved
  - id: ART-DESIGN-008
    type: design-system-component-map
    path: ../design/DESIGN-SYSTEM-COMPONENT-MAP.md
    version: 1
    status: approved-for-synthetic-validation
  - id: TRACE-DESIGN-001
    type: design-traceability
    path: ../design/DESIGN-TRACEABILITY.md
    version: 1
    status: approved
  - id: GATE-DESIGN-001
    type: design-gate-result
    path: ../design/DESIGN-GATE-RESULT.md
    version: 1
    status: pass
  - id: HANDOFF-DESIGN-001
    type: design-handoff
    path: ../design/DESIGN-HANDOFF.md
    version: 1
    status: complete
  - id: ART-VALIDATE-001
    type: validation-plan
    path: ../validate/VALIDATION-PLAN.md
    version: 1
    status: agent-reviewed
  - id: ART-VALIDATE-002
    type: validation-scenarios
    path: ../validate/VALIDATION-SCENARIOS.md
    version: 1
    status: agent-reviewed
  - id: READY-VALIDATE-001
    type: validation-readiness-check
    path: ../validate/VALIDATION-READINESS-CHECK.md
    version: 1
    status: conditional
  - id: SESSION-VALIDATE-001
    type: synthetic-dry-run-session-record
    path: ../validate/VALIDATION-SESSION-RECORD.md
    version: 1
    status: synthetic-dry-run-complete
  - id: ART-VALIDATE-003
    type: validation-evidence-register
    path: ../validate/VALIDATION-EVIDENCE-REGISTER.md
    version: 2
    status: active
  - id: ART-VALIDATE-004
    type: accessibility-validation
    path: ../validate/ACCESSIBILITY-VALIDATION.md
    version: 2
    status: revised-preliminary-complete
  - id: ART-VALIDATE-005
    type: validation-issue-register
    path: ../validate/VALIDATION-ISSUE-REGISTER.md
    version: 2
    status: active
  - id: TRACE-VALIDATE-001
    type: validation-traceability
    path: ../validate/VALIDATION-TRACEABILITY.md
    version: 2
    status: active
  - id: SESSION-VALIDATE-002
    type: synthetic-dry-run-retest-record
    path: ../validate/VALIDATION-RETEST-RECORD.md
    version: 1
    status: synthetic-dry-run-complete
  - id: ART-VALIDATE-006
    type: validation-report
    path: ../validate/VALIDATION-REPORT.md
    version: 1
    status: approved-for-academic-delivery
  - id: GATE-VALIDATE-001
    type: validate-gate-result
    path: ../validate/VALIDATE-GATE-RESULT.md
    version: 1
    status: pass
  - id: HANDOFF-VALIDATE-001
    type: validate-handoff
    path: ../validate/VALIDATE-HANDOFF.md
    version: 1
    status: complete
  - id: ART-PRESENT-001
    type: connected-case-study
    path: ../../04-presentation/case-study/CONNECTED-CASE-STUDY.md
    version: 1
    status: draft-for-human-review
  - id: ART-PRESENT-002
    type: presentation-outline
    path: ../../04-presentation/PRESENTATION-OUTLINE.md
    version: 1
    status: draft-for-human-review
  - id: ART-PRESENT-003
    type: demo-script
    path: ../../04-presentation/demo-script/DEMO-SCRIPT.md
    version: 1
    status: draft-for-human-review
  - id: ART-PRESENT-004
    type: interactive-case-study-website
    path: ../../04-presentation/website/dist/index.html
    version: 3
    status: local-preview-complete
  - id: ART-PRESENT-005
    type: website-version-comparison
    path: ../../04-presentation/website/dist/compare.html
    version: 1
    status: local-preview-complete
  - id: ART-PRESENT-006
    type: interactive-final-submission-website
    path: ../../04-presentation/final-submission-website/dist/index.html
    version: 1
    status: draft-for-human-review
  - id: ART-CHATBOT-001
    type: upgrades-faq-chatbot-source-copy
    path: ../../03-chatbot/working-application
    version: 1
    status: integrated-local-demo
  - id: ART-CHATBOT-002
    type: upgrade-guide-final-submission-copy
    path: ../../04-presentation/final-submission-website/chatbot-app
    version: 1
    status: integrated-local-demo

excluded_sources:
  - Real Verizon customer research
  - Real Verizon product analytics
  - Records from the earlier Verizon workflow demonstration

decisions:
  - id: DEC-INTAKE-001
    decision: Approve ART-001 version 1 and advance from Intake to Discover using the recorded target, funnel boundary, and platform scope.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
  - id: DEC-DISCOVER-001
    decision: Approve ART-DISCOVER-002 version 1 as the evidence basis for synthetic Define, with its limitations retained.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
  - id: DEC-DEFINE-001
    decision: Approve PROBLEM-001 as the synthetic design hypothesis and OPP-001 as primary, with OPP-002 and OPP-003 as required supporting outcomes.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
  - id: DEC-DESIGN-GATE-001
    decision: Approve ART-DESIGN-007 version 1 and local prototype v1-v7 for synthetic validation, with Figma transfer and production feasibility deferred.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
  - id: DEC-VALIDATION-PLAN-001
    decision: Approve ART-VALIDATE-001 and ART-VALIDATE-002 version 1 for a non-participant synthetic dry run only.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-11
  - id: DEC-VALIDATE-GATE-001
    decision: Approve ART-VALIDATE-006 and advance local-v2-v8 into Deliver for the academic synthetic demonstration, accepting the documented limitations only within that scope and making no real-user conversion accessibility-conformance or production-readiness claim.
    owner: Ankusha, Project Owner and UX Lead
    decided_at: 2026-10-12

next_action: Accountable human reviews ART-PRESENT-001 through ART-PRESENT-003 before visual slide production begins.
```
