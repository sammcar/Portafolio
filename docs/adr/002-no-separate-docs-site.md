# ADR-002: GitHub-rendered docs instead of a docs site

- Status: accepted
- Date: 2026-07-10

## Context

The reference template (data-science-project-template) publishes a MkDocs
Material site. Here, the product itself IS a website.

## Decision

Repo documentation stays as Markdown + Mermaid in `docs/`, rendered natively
by GitHub. Code-level docs live as TSDoc comments in `lib/` and `components/`.

## Consequences

- (+) No duplicate publishing pipeline for a site nobody would visit.
- (+) TSDoc is consumed where it matters: the editor and AI agents.
- (−) No auto-generated API reference — revisit (TypeDoc or Storybook) if
  reusable packages/components are extracted (would supersede this ADR).
