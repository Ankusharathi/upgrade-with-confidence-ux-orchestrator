# Business Requirements Document Template

Use this template to describe a project before it enters the UX Orchestrator. Keep confirmed facts, supplied business requirements, evidence, assumptions, and open questions visibly separate. Delete instructional text when creating a project BRD.

## Document Information

- **Project:** [Project name]
- **Product or service:** [Product, service, or journey]
- **Organization:** [Organization or business unit]
- **Market:** [Country, region, or market]
- **Product surfaces:** [Web, mobile app, service channel, or other surfaces]
- **Accountable owner:** [Name or role]
- **Document status:** Draft
- **Version:** 1
- **Last updated:** [Date]

## 1. Project Overview

Describe what is changing, who the project is for, and why the work is being initiated.

## 2. Business Problem

Describe the business problem without assuming that a proposed solution or unverified user need is correct.

### Evidence currently available

- [Evidence identifier, source, date, and relevant observation]

### Supplied claims or hypotheses

- [Stakeholder claim or hypothesis that still requires validation]

## 3. Business Goal and Decision

- **Goal:** [Desired business outcome]
- **Decision this work must support:** [Decision to be made]
- **Why the decision matters:** [Business consequence]

## 4. Target Users and Authorized Actors

List user groups, operational actors, administrators, or decision-makers. Label proposed segments or personas as hypotheses unless supported by evidence.

| User or actor | Context | Need or responsibility | Evidence status |
|---|---|---|---|
| [Name] | [Context] | [Need] | Confirmed / supplied claim / hypothesis / unknown |

## 5. Scope

### In scope

- [Included journey, channel, user, market, or capability]

### Out of scope

- [Explicit exclusion]

### Dependencies

- [Team, platform, policy, vendor, system, or external dependency]

## 6. Business Rules and Constraints

Record the rule, its source of truth, and whether it is approved. Do not convert assumptions into requirements.

| ID | Rule or constraint | Source | Status |
|---|---|---|---|
| BR-001 | [Rule] | [System, policy, or owner] | Approved / proposed / unverified |

## 7. Proposed Solution

Describe the proposed direction at the level needed to establish scope. Keep solution ideas separate from validated user needs.

## 8. Functional Requirements

| ID | Requirement | Priority | Source | Acceptance reference |
|---|---|---|---|---|
| FR-001 | [The solution must...] | Must / should / could | [Source] | [AC identifier] |

## 9. Non-Functional Requirements

Cover only relevant categories:

- performance and scalability;
- reliability and recovery;
- security and authorization;
- privacy and data handling;
- accessibility and inclusion;
- compatibility and localization;
- auditability and operational support.

Label numerical targets as proposed until a responsible owner approves them.

## 10. Experience Principles and Content Requirements

- [Principle, content rule, or prohibited pattern]

## 11. Example Scenarios

### Scenario 1: [Scenario name]

- **Actor:** [User or role]
- **Starting context:** [Relevant state]
- **Action:** [What the actor needs to do]
- **Expected outcome:** [Successful or safe failure outcome]

Include edge cases, permission failures, unavailable dependencies, and recovery paths where relevant.

## 12. Success Measures

| Measure | Baseline | Proposed target | Measurement source | Owner | Approval status |
|---|---:|---:|---|---|---|
| [Measure] | Unknown | [Target or unknown] | [Analytics or study] | [Role] | Proposed / approved |

Do not invent baselines or present proposed targets as commitments.

## 13. Risks

| ID | Risk | Basis | Likelihood | Impact | Owner | Treatment |
|---|---|---|---|---|---|---|
| RISK-001 | If [condition], then [impact], because [basis] | Evidence / claim / assumption / unknown | Low / medium / high / unknown | Low / medium / high / unknown | [Role] | [Action] |

## 14. Evidence and Policy References

- [Source title](https://example.com) — [What it supports]; accessed [date].

Identify stakeholder-supplied requirements separately from independently verified sources. Revalidate policies that can change over time.

## 15. Open Questions

- **Q-001:** [Question]
  - Why it matters: [Impact on scope, method, safety, or decision]
  - Owner: [Name, role, or unassigned]
  - Blocking: Yes / no

## 16. Acceptance Criteria

- **AC-001:** [Observable condition that must be true]

Acceptance criteria should be testable and traceable to a requirement. Launch approval remains with the accountable human owner.

## Intake Readiness Check

Before submitting this BRD to Intake, confirm:

- the accountable owner and decision are identified;
- facts, evidence, supplied claims, and assumptions are separated;
- users are supported by evidence or labeled as hypotheses;
- scope and exclusions are explicit;
- requirements identify their sources;
- proposed metrics are not presented as approved targets;
- privacy, security, accessibility, and safety implications were considered;
- open questions and blocking decisions are visible.
