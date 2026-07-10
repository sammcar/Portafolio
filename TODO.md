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
- [ ] ~18 vulns inside `node_modules/npm/**` via `semantic-release` (devDependency).
      Run only in ephemeral CI runners during release; never shipped to prod.
      Excluded from CI gate via `npm audit --omit=dev`. Dependabot monitors.
      Accepted: 2026-07-10 · Review: next major of semantic-release.
