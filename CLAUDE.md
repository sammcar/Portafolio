# Agent guide — portfolio

Context file for AI agents (and humans) working on this repo.

## What this is

Bilingual (EN default, ES) static portfolio. Next.js 15 App Router with
**SSG only** — there is no runtime backend in v1. Content lives as MDX files;
pages are generated at build time. Deployed on Vercel (previews per PR,
production on `main`).

## Commands

```bash
npm install            # deps + git hooks
npm run dev            # local dev server
npm run check          # lint + typecheck + tests — MUST pass before any PR
npm run test:watch     # TDD loop
npm run build          # full build; also validates every MDX file
```

## Architecture in 30 seconds

- `content/projects/<slug>.<locale>.mdx` → parsed by `lib/projects.ts` at
  build time → listed at `/[locale]/projects`, rendered at
  `/[locale]/projects/[slug]`.
- i18n via next-intl: routes are prefixed (`/en`, `/es`). UI strings live in
  `messages/{en,es}.json`. **Never hardcode user-facing strings in
  components** — always add keys to BOTH locale files.
- All logic goes in `lib/` (pure, unit-tested). Components stay thin.
- Internal links must use `Link` from `components/Link.tsx` (locale-aware),
  never `next/link` directly.

## Hard rules

1. Do not push to `main` — branch + PR always.
2. Conventional Commits (commitlint blocks anything else).
3. New logic in `lib/` requires unit tests in `tests/unit/`.
4. Frontmatter schema changes require updating `parseProjectFile` **and**
   its tests **and** `docs/architecture.md` in the same PR.
5. Do not add runtime dependencies without noting why in the PR description.
6. Do not introduce `any` (Biome blocks it) or disable lint rules inline
   without a comment explaining why.
7. Architectural decisions (new deps, structure changes, rendering strategy)
   get an ADR in `docs/adr/`.

## Definition of done

- [ ] `npm run check` green
- [ ] `npm run build` succeeds
- [ ] Both locales covered (UI strings and/or content)
- [ ] Docs/ADR updated if behavior or architecture changed
