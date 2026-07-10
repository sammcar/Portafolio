# ADR-001: Project content as MDX files, not a CMS

- Status: accepted
- Date: 2026-07-10

## Context

Project case studies need to live somewhere: a headless CMS (Contentful,
Sanity), a database, or files in the repo.

## Decision

MDX files in `content/projects/`, one per project per locale, validated at
build time.

## Consequences

- (+) Docs-as-code: content is versioned, reviewed in PRs, deploys atomically
  with the code that renders it.
- (+) Zero external services, zero cost, zero runtime failures.
- (+) Build-time validation makes broken content impossible to ship.
- (−) Non-technical editing is not possible — acceptable: the author is the
  only editor.
- (−) Each project must be written twice (EN/ES) — accepted for quality
  control over machine translation.
