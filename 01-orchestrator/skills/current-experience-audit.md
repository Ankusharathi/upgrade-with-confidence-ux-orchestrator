---
name: current-experience-audit
description: Inventory and assess the current product designs and end-to-end flow across screens, roles, states, channels, content, accessibility, dependencies, and known breaks before proposing a future experience.
---

# Current Experience Audit

## Goal

Create a traceable baseline of what the current experience contains, how its flow behaves, and where evidence or coverage is missing.

## Method

1. Record the product version, environment, artifacts, URLs, designs, roles, devices, markets, and access available.
2. Map entry points, steps, decisions, branches, handoffs, exits, and post-task states for each in-scope journey.
3. Inventory screens and components, including loading, empty, error, unavailable, permission, confirmation, and recovery states.
4. Assess observable navigation, content, hierarchy, consistency, account or role context, system feedback, accessibility cues, data exposure, and cross-channel continuity.
5. Record broken links, gaps, duplicate paths, uncertain behavior, inaccessible states, and dependencies on policy or backend rules.
6. Separate observed current-state facts, supplied claims, audit interpretations, and validation needs.

## Rules

- Review only supplied or authorized designs and environments.
- Do not claim a state is absent when it was merely inaccessible.
- Do not redesign the flow inside the audit; keep proposed improvements separate.
- Static designs cannot prove runtime behavior, accessibility conformance, or actual user difficulty.

## Output

Create `../templates/CURRENT-EXPERIENCE-AUDIT.md` and register the reviewed artifacts in the Evidence Register.

