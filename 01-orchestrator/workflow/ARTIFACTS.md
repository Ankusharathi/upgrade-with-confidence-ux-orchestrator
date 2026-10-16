# Artifact Contract

Artifacts are the interface between agents and phases.

All artifacts also follow `ARTIFACT-FORMATS.md`. Each project maintains `../templates/PROJECT-ARTIFACT-MANIFEST.md` so Figma, FigJam, Word/PDF, Excel/CSV, Markdown, and Jira/Linear-compatible records remain versioned and connected.

## Required metadata

Every artifact records:

- artifact type and unique identifier;
- project and phase;
- producing agent;
- version and status;
- inputs and evidence used;
- assumptions and limitations;
- open questions;
- related decisions;
- intended next consumer.
- format, location, exact external version, source-of-truth role, owner, access, and synchronization status when stored outside Markdown.

## Statuses

- `draft`: created but not reviewed;
- `agent-reviewed`: checked against automated quality criteria;
- `human-reviewed`: reviewed by the responsible person;
- `approved`: accepted as an input to later phases;
- `superseded`: replaced by a newer approved version.

Only approved artifacts may be treated as settled project context.

## Minimum artifact envelope

```yaml
artifact:
  id: ART-001
  type: ux-brief
  version: 1
  status: draft
  project: project-name
  phase: intake
  producer: ux-intake-agent

inputs: []
evidence: []
assumptions: []
limitations: []
open_questions: []
related_decisions: []
next_consumer: ux-research-agent
```
