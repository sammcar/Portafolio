# Portfolio

[![CI](https://github.com/YOUR_GITHUB_USERNAME/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_GITHUB_USERNAME/portfolio/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/YOUR_GITHUB_USERNAME/portfolio)](https://github.com/YOUR_GITHUB_USERNAME/portfolio/releases)
[![License: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE)

Bilingual (EN/ES) portfolio — mechatronics, robotics & software. Built with Next.js (App Router, SSG), TypeScript strict, Tailwind and MDX content. Deployed on Vercel.

## Quickstart

```bash
npm install        # installs deps + husky hooks (prepare script)
npm run dev        # http://localhost:3000 (redirects to /en)
```

## Everyday commands

| Command | What it does |
|---|---|
| `npm run dev` | Dev server with hot reload |
| `npm run check` | Lint + typecheck + tests (run before pushing) |
| `npm run test:watch` | Tests in watch mode while developing |
| `npm run build` | Production build — also validates all MDX content |

## Adding a project

1. Create `content/projects/<slug>.en.mdx` and `<slug>.es.mdx`
2. Fill the frontmatter (`title`, `summary`, `date`, `tags`) — the build fails loudly if it's invalid
3. Commit (`feat: add <project> case study`) → PR → check the Vercel preview → merge

## Workflow

GitHub Flow: `main` is protected, every change goes through a PR with green CI and a Vercel preview. Commits follow [Conventional Commits](https://www.conventionalcommits.org) (enforced by commitlint). Releases, versioning and `CHANGELOG.md` are fully automated by semantic-release on every merge to `main`.

See `docs/` for requirements, architecture and decision records (ADRs). See `AGENTS.md` if you are an AI agent working on this repo.

## License

Code is [MIT](LICENSE). **Content is not**: all texts, images, project write-ups and personal assets under `content/` and `public/` are © the author, all rights reserved. See [LICENSE-CONTENT](LICENSE-CONTENT.md).
