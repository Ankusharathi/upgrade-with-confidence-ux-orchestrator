# Design-System Component Map

> Components are implemented in the local browser prototype and are ready to recreate as editable Figma components later. Availability in any production design system is unconfirmed.

```yaml
artifact:
  id: ART-DESIGN-008
  type: design-system-component-map
  version: 1
  status: approved-for-synthetic-validation
  project: upgrade-with-confidence
  phase: design
  producer: ux-design-agent

library:
  name: Upgrade With Confidence local prototype system
  version: local-v1-v7
  source: interactive-prototype/styles.css
  owner: Ankusha, Project Owner and UX Lead

foundations:
  color_tokens:
    - {id: COLOR-INK, value: "#111111", purpose: Primary text and high-emphasis surfaces}
    - {id: COLOR-ACTION, value: "#C92B32", purpose: Primary brand-action emphasis}
    - {id: COLOR-SIGNAL, value: "#F4FF5E", purpose: Selective upgrade signal and conditional emphasis}
    - {id: COLOR-DIVIDER, value: "#D9D9D5", purpose: Borders and separation}
    - {id: COLOR-CANVAS, value: "#F3F3F1", purpose: Neutral page canvas}
    - {id: COLOR-SURFACE, value: "#FFFFFF", purpose: Content surface}
  typography: [Display 56/58, Heading 28/34, Body 16/24]
  status_vocabulary: [Confirmed, Estimated, Conditional, Delayed, One-time]

mappings:
  - id: CMAP-001
    design_element_ids: [CMP-001, ACTION-001]
    implementation_rule_ids: [STATE-005, STATE-006, STATE-013]
    component: Action controls
    variant_and_properties: [primary, secondary, text, disabled, processing]
    token_ids: [COLOR-INK, COLOR-SURFACE, COLOR-DIVIDER]
    interaction_states: [default, hover, focus-visible, disabled, processing]
    responsive_rules: [Full-width actions allowed on narrow screens]
    accessibility_behavior: [Visible label, accessible name includes visible text, keyboard activation, visible focus]
    mapping_type: new
    availability: confirmed-in-local-prototype
    owner: ux-design-agent
    contribution_or_approval_path: Recreate as Figma variants when transfer resumes.
  - id: CMAP-002
    design_element_ids: [CMP-002]
    implementation_rule_ids: [STATE-002, STATE-003]
    component: Selection card
    variant_and_properties: [default, selected, unavailable, error]
    token_ids: [COLOR-SURFACE, COLOR-DIVIDER, COLOR-ACTION]
    interaction_states: [default, hover, focus-visible, selected, disabled]
    responsive_rules: [Stack label price and supporting details without losing radio semantics]
    accessibility_behavior: [Native selection control, programmatic group label, selected state announced]
    mapping_type: new
    availability: confirmed-in-local-prototype
    owner: ux-design-agent
    contribution_or_approval_path: Validate labels and target size before production mapping.
  - id: CMAP-003
    design_element_ids: [CMP-003]
    implementation_rule_ids: [STATE-001, STATE-002, STATE-003, STATE-004, STATE-005]
    component: Progress stepper
    variant_and_properties: [completed, current, upcoming]
    token_ids: [COLOR-INK, COLOR-ACTION, COLOR-DIVIDER]
    interaction_states: [informational]
    responsive_rules: [Collapse text labels on narrow screens while retaining accessible names]
    accessibility_behavior: [Current step is programmatically indicated; progress does not imply invalid steps are complete]
    mapping_type: new
    availability: confirmed-in-local-prototype
    owner: ux-design-agent
    contribution_or_approval_path: Confirm semantic pattern during implementation.
  - id: CMAP-004
    design_element_ids: [CMP-004, INFO-008]
    implementation_rule_ids: [STATE-002, STATE-003, STATE-004, STATE-005, STATE-006]
    component: Upgrade Impact
    variant_and_properties: [desktop-sticky, mobile-summary-bar, mobile-drawer, calculating, changed, unavailable]
    token_ids: [COLOR-INK, COLOR-SURFACE, COLOR-SIGNAL]
    interaction_states: [partial, calculating, current, changed, unavailable]
    responsive_rules: [Sticky desktop companion; user-controlled mobile drawer; one-column reflow at narrow widths]
    accessibility_behavior: [Semantic labeled values, meaningful update announcement, no unexpected focus movement, non-color status]
    mapping_type: new
    availability: confirmed-in-local-prototype
    owner: ux-design-agent
    contribution_or_approval_path: Specialist review required for live-region behavior.
  - id: CMAP-005
    design_element_ids: [CMP-005]
    implementation_rule_ids: [INFO-002, INFO-003, INFO-004, INFO-005, INFO-007]
    component: Status tag
    variant_and_properties: [confirmed, estimated, conditional, delayed, one-time]
    token_ids: [COLOR-INK, COLOR-SIGNAL, COLOR-DIVIDER]
    interaction_states: [informational]
    responsive_rules: [Wrap with associated label and value; never truncate status word]
    accessibility_behavior: [Meaning appears as text and does not rely on color]
    mapping_type: new
    availability: confirmed-in-local-prototype
    owner: ux-design-agent
    contribution_or_approval_path: Validate vocabulary comprehension.
  - id: CMAP-006
    design_element_ids: [CMP-006]
    implementation_rule_ids: [STATE-007, STATE-008, STATE-009, STATE-010, STATE-011, STATE-012, STATE-013, STATE-014]
    component: Feedback panel
    variant_and_properties: [loading, empty, permission, unavailable, error, interruption, timeout, recovery, confirmation]
    token_ids: [COLOR-INK, COLOR-SURFACE, COLOR-ACTION, COLOR-SIGNAL]
    interaction_states: [informational, actionable, blocking]
    responsive_rules: [Place message before recovery action in reading order]
    accessibility_behavior: [Appropriate status or alert semantics, concise heading, actionable recovery, managed focus]
    mapping_type: new
    availability: conditional
    owner: ux-design-agent
    contribution_or_approval_path: Some states are documented but not fully interactive in the local prototype.

unmapped_design_elements: []
unavailable_components: [Confirmed production-library equivalents]
exceptions:
  - The original Figma file is a preserved reference and is not the source of component availability.
  - The local implementation is not evidence of production code readiness or accessibility conformance.
```

