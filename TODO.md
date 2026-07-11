# TODO — informal scratchpad

> Quick personal notes. Anything real graduates to a GitHub Issue with
> acceptance criteria.

- [ ] Replace YOUR_GITHUB_USERNAME / YOUR NAME placeholders (README, LICENSE, CODEOWNERS, package.json)
- [ ] Write real content: hero copy, about bio (EN + ES)
- [ ] Port first 3 real projects to MDX (laser GRBL, TUM quad, FLUX)
- [ ] Design pass: typography + palette (see docs/adr — record decisions)
- [ ] v2 ideas: contact form (first Route Handler + API tests), blog, OG images

## Security — accepted risks (review on each Dependabot pass)

- [ ] `postcss` <8.5.10 (moderate, GHSA-qx2v-qp2m-jg93) via `next` → `next-intl`.
      Vector: XSS through unescaped `</style>` in CSS output. Not exploitable
      here: SSG-only site, CSS is repo-controlled and PR-reviewed, no user
      input reaches the CSS pipeline. No sane fix upstream yet (forced "fix"
      downgrades to Next 9). Closes itself when Next bumps its internal postcss.
- [x] ~18 vulns inside node_modules/npm/\*\* via semantic-release (devDependency).
      CLOSED 2026-07-10: semantic-release 25 upgrade (PR #4) modernized its
      embedded npm. Audit dropped from 21 to 2 moderate.
- [ ] @vitejs/plugin-react 6.x blocked: requires vite@8, but vitest@3 pins
      vite@≤7. Dependabot told to ignore the major. Revisit when vitest 4 lands.Accepted: 2026-07-10 · Review: next major of semantic-release.
