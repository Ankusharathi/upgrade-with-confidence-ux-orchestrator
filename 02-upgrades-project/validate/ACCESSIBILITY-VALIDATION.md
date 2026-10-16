# Accessibility Validation

> Preliminary manual inspection only. This is not an accessibility audit, certification, or conformance claim.

```yaml
artifact:
  id: ART-VALIDATE-004
  type: accessibility-validation
  version: 2
  status: revised-preliminary-complete
  project: upgrade-with-confidence
  phase: validate
  producer: ux-validation-agent
tested_artifact: {id: ART-DESIGN-007, version: 1, prototype_revision: local-v2-v8}
conformance_claim: none
specialist_review: {required: true, status: pending, reviewer: unassigned, decision_id: null}

environments:
  - {platform: macOS, browser: Codex in-app browser, viewport: default desktop and 320-by-800, assistive_technology: [keyboard, accessibility-tree inspection], settings: [default motion]}

requirement_results:
  - requirement_id: A11Y-001
    criterion_ids: [VAL-001, VAL-004]
    methods: [Accessibility-tree heading and label inspection, responsive reading-order inspection]
    result: partially-met
    evidence_ids: [OBS-001, OBS-005, OBS-006]
    limitations: [Not tested with a screen reader]
    issue_ids: []
  - requirement_id: A11Y-002
    criterion_ids: [VAL-004]
    methods: [Accessible-name and form-label inspection]
    result: partially-met
    evidence_ids: [OBS-002, OBS-006]
    limitations: [Not every control and state was exercised]
    issue_ids: []
  - requirement_id: A11Y-003
    criterion_ids: [VAL-003, VAL-004]
    methods: [Keyboard focus sequence, step-navigation focus, drawer open-and-close focus]
    result: met
    evidence_ids: [OBS-003, OBS-005, OBS-006]
    limitations: [Result applies only to executed paths]
    issue_ids: []
  - requirement_id: A11Y-004
    criterion_ids: [VAL-004]
    methods: [Sampled keyboard navigation and activation]
    result: partially-met
    evidence_ids: [OBS-006]
    limitations: [Full keyboard completion of every branch was not performed]
    issue_ids: []
  - requirement_id: A11Y-005
    criterion_ids: [VAL-004, VAL-005]
    methods: [Keyboard-triggered integrated-error inspection, accessibility-tree state inspection]
    result: met
    evidence_ids: [OBS-010]
    limitations: [Prototype-only result; screen-reader announcement was not verified]
    issue_ids: []
  - requirement_id: A11Y-006
    criterion_ids: [VAL-004]
    methods: [Accessibility-tree live text inspection, source-backed status-region inspection]
    result: partially-met
    evidence_ids: [OBS-003, OBS-004]
    limitations: [Announcement timing and verbosity were not verified with a screen reader]
    issue_ids: []
  - requirement_id: A11Y-007
    criterion_ids: [VAL-004]
    methods: [320-by-800 viewport measurement]
    result: partially-met
    evidence_ids: [OBS-006]
    limitations: [200-percent browser zoom was not executed]
    issue_ids: []
  - requirement_id: A11Y-008
    criterion_ids: [VAL-002, VAL-004]
    methods: [Text-status and visual inspection]
    result: partially-met
    evidence_ids: [OBS-002]
    limitations: [No numeric contrast measurement or grayscale check]
    issue_ids: []
  - requirement_id: A11Y-009
    criterion_ids: [VAL-003, VAL-005]
    methods: [Commitment-path walkthrough, executable unknown-status recovery retest]
    result: met
    evidence_ids: [OBS-004, OBS-011, OBS-012]
    limitations: [Prototype-only logic; production order lookup and idempotency were not tested]
    issue_ids: []
  - requirement_id: A11Y-010
    criterion_ids: [VAL-004]
    methods: []
    result: untested
    evidence_ids: []
    limitations: [Target dimensions were not measured]
    issue_ids: []
  - requirement_id: A11Y-011
    criterion_ids: [VAL-004]
    methods: [Source inspection for reduced-motion rule]
    result: partially-met
    evidence_ids: [OBS-006]
    limitations: [Operating-system reduced-motion behavior was not executed]
    issue_ids: []

method_summary:
  automated: {status: not-run, tools: [], evidence_ids: []}
  manual: {status: complete-for-sampled-paths, checks: [Keyboard focus, accessible names, focus restoration, integrated error recovery, unknown-order retry prevention, 320-pixel reflow, non-color status text, explicit commitment], evidence_ids: [OBS-002, OBS-003, OBS-004, OBS-005, OBS-006, OBS-010, OBS-011, OBS-012]}
  assistive_technology: {status: partial, combinations: [Accessibility-tree inspection only], evidence_ids: [OBS-001, OBS-005, OBS-006]}
  participant: {status: not-run, coverage: [], evidence_ids: []}
untested_requirements: [A11Y-010 target size, screen-reader announcements, 200-percent zoom, specialist review]
limitations:
  - Prototype-level manual checks cannot establish WCAG conformance.
  - Results apply only to directly executed paths and the exact local-v2-v8 revision.
next_action: Complete screen-reader, 200-percent zoom, target-size, contrast, and specialist review before any accessibility or conformance claim.
```
