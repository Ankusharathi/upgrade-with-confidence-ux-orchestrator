---
name: product-data-evidence-intake
description: Identify, request, receive, and assess product evidence from Product Owners and tool owners across session analytics, VoC, KPI dashboards, product analytics, support systems, and related data sources.
---

# Product Data Evidence Intake

## Goal

Turn a general request for “the data” into a decision-linked evidence request that the Product Owner can route to the correct tool and data owners.

## Source discovery

Ask the Product Owner to identify the tools, dashboards, reports, owners, access routes, data periods, populations, and governance restrictions available for the journey. Common source categories include:

- session and journey analytics such as Quantum Metric;
- Voice of Customer surveys, feedback, and coded verbatims;
- KPI and product-analytics dashboards;
- funnel, event, error, performance, and operational telemetry;
- support contacts, call reasons, escalations, and case categories;
- experimentation, accessibility, quality, and incident data.

Do not assume the Product Owner personally owns or can authorize every source. Record the Product Owner as request coordinator and the analytics, VoC, platform, support, privacy, or tool administrator as the source owner when appropriate.

## Request design

For every request, specify:

- the research question and decision it informs;
- the signal, metric, report, or record needed;
- operational definition, numerator, denominator, event logic, and owner where applicable;
- population, eligibility, role or account segment, channel, device, market, and journey step;
- date range, comparison period, granularity, and known release or instrumentation changes;
- preferred delivery: governed read-only access, saved report, or de-identified aggregate export;
- required fields and acceptable file format;
- privacy, masking, retention, access, and sharing restrictions;
- due date, status, and fallback if the ideal source is unavailable.

## Tool-specific checks

### Session and journey analytics

Request funnel or path definitions, traffic coverage, journey steps, friction-signal definitions, technical errors, device and channel segments, and the sampling or capture rate. Session replay access requires explicit authorization, masking confirmation, and a documented reason; prefer aggregated evidence when it can answer the question.

### Voice of Customer

Request the exact question wording, invitation trigger, channel, response period, eligible population, response or coverage information, coding taxonomy, and de-identified verbatims. Self-selected feedback does not establish prevalence.

### KPIs and product analytics

Request the metric definition, numerator, denominator, data source, event logic, reporting cadence, baseline, target status, segments, exclusions, data-quality notes, and accountable metric owner. A dashboard label alone is not a usable definition.

## Assessment

When evidence arrives, verify provenance, completeness, definitions, time range, segmentation, quality, instrumentation changes, missingness, and privacy status. Register each accepted source in the Evidence Register and record what it supports and cannot support.

## Rules

- Tool signals show recorded behavior or feedback; they do not by themselves explain user intent or causality.
- Do not request raw credentials, payment information, unnecessary personal data, or unrestricted session recordings.
- Do not connect to a tool, expand access, export restricted data, or share it outside approved storage without authorization.
- Preserve conflicting signals across tools rather than forcing agreement.
- Mark unavailable, undefined, or low-quality data explicitly and propose the smallest credible fallback.

## Output

Create and maintain `../templates/PRODUCT-DATA-EVIDENCE-REQUEST.md`, then add received and accepted sources to `../templates/EVIDENCE-REGISTER.md`.

