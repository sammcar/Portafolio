# Contributing

This is a personal portfolio, but the workflow is run as a professional
project on purpose. If you open a PR (typo fixes welcome!) or if you are a
future me reading this:

## Setup

```bash
git clone <repo> && cd portfolio
npm install          # also installs git hooks via husky
npm run dev
```

## Rules of the road

1. **Never push to `main`.** Branch (`feat/…`, `fix/…`, `docs/…`, `chore/…`) → PR.
2. **Conventional Commits** — enforced by commitlint on every commit:
   `feat: add tag filtering to /projects`
3. `npm run check` must pass locally before pushing (hooks run part of it anyway).
4. Every PR needs: linked issue (`Closes #N`), green CI, reviewed Vercel preview.
5. Content changes must land in **both** locales, or the PR explains why not.
6. Update docs/ADRs in the same PR that changes behavior or architecture.

## Releases

Fully automated — never edit `CHANGELOG.md` or bump versions by hand.
semantic-release does it from the commit history on every merge to `main`.
