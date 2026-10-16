# Artifact Format Contract

## Purpose

Define which tools and file formats hold each kind of UX work, while keeping versions, decisions, evidence eligibility, ownership, and gate state traceable across systems.

## Format roles

| Format or system | Primary use | Authority rule |
|---|---|---|
| Figma Design | UI designs, component usage, interaction specifications, prototypes, and implementation annotations | Canonical for approved visual and interactive design when its file, node, branch or version, owner, and approval are recorded in the manifest |
| FigJam | Journeys, service or task flows, information-architecture maps, opportunity maps, workshop maps, and collaborative diagrams | Canonical for the mapped view when its file, node, version or snapshot, mode, and evidence status are recorded |
| Word or PDF | Stakeholder-ready briefs, findings, definitions, design reviews, validation reports, and handoff reports | Publication or review copy; it does not silently replace the structured workflow record or editable source |
| Excel or CSV | Requirements, evidence, traceability, issue, defect, coverage, and measurement registers | Structured working or export format; definitions, IDs, formulas, filters, and source version must be recorded |
| Markdown | Reusable templates, agent contracts, phase records, metadata, gates, decisions, handoffs, evaluations, and project state | Canonical workflow system of record |
| Jira or Linear compatible list | Implementation questions, UX QA defects, changes, owners, priority, status, fix, and retest execution | Execution mirror; every item retains the orchestrator ID and links back to its source and evidence |

## Required controls

Every external or generated artifact must record:

- stable artifact ID and artifact type;
- project and phase;
- format and system;
- file path, URL, file ID, node ID, sheet or table name, or issue key as applicable;
- exact version, branch, revision, export date, or last-updated timestamp;
- owner and access status;
- source-of-truth role: `canonical`, `publication`, `structured-export`, `execution-mirror`, or `reference`;
- input or output purpose and intended consumers;
- approval, review, evidence, sensitivity, and retention status;
- upstream source IDs and downstream linked IDs;
- synchronization status and known divergence.

## Synchronization rules

1. Markdown stores workflow status, artifact metadata, decisions, gates, and cross-system links.
2. Figma and FigJam visual content is not considered approved merely because a link exists; record the exact approved version and decision.
3. Word and PDF exports record the source artifact versions and export timestamp. An edited export becomes a new source or revision rather than silently changing the canonical record.
4. Excel and CSV exports preserve stable IDs. Spreadsheet calculations do not become approved facts without provenance and owner review.
5. Jira or Linear items preserve the UX issue ID, expected and observed behavior, evidence, environment, severity, owner, source artifact, fix, and retest status.
6. A change in any system that affects approved behavior, evidence validity, risk, or acceptance must update the manifest and follow the phase revision route.
7. Inaccessible, missing, stale, or permission-blocked sources are marked `blocked`; agents do not infer their contents.
8. When live integrations are unavailable, create a compatible export and record `sync_status: not-connected` rather than claiming successful synchronization.

## Default phase mapping

| Phase | Default visual or working format | Stakeholder format | Structured or execution format |
|---|---|---|---|
| Intake | Markdown | Word/PDF | Excel/CSV for requirements and questions when needed |
| Discover | Markdown and FigJam for evidence maps or current flows | Word/PDF | Excel/CSV for evidence, data requests, and findings registers |
| Define | FigJam for journeys, IA, task flows, and opportunity maps | Word/PDF | Excel/CSV for prioritization and traceability |
| Design | Figma Design for designs and prototypes; FigJam for supporting flows | Word/PDF | Excel/CSV for traceability and review registers |
| Validate | Figma prototype or identified build as the test object | Word/PDF | Excel/CSV for sessions, evidence, issues, and traceability |
| Deliver | Figma Design for approved implementation reference | Word/PDF | Excel/CSV and Jira/Linear-compatible defect and change lists |

Projects may override defaults in the Project Artifact Manifest, but the override must name the owner, reason, source of truth, versioning method, and downstream consumers.
