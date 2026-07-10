# Requirements — v1

## Audience

Primary: recruiters and engineering hiring managers (EN).
Secondary: FLUX prospects in Colombia (ES).

## Functional (each item becomes a GitHub issue)

- [ ] Home: hero with value proposition + featured projects
- [ ] Projects index with cards (title, summary, date, tags)
- [ ] Project detail pages rendered from MDX case studies
- [ ] About page with bio
- [ ] Downloadable CV (PDF in `public/`)
- [ ] Full EN/ES support; default EN; visible locale switcher

## Non-functional

- Lighthouse ≥ 90 in all categories
- Fully static output (SSG) — no runtime server in v1
- Responsive down to 360px; keyboard-navigable; dark theme
- SEO basics: per-page metadata, sitemap, OG tags

## Out of scope for v1 (v2 backlog)

- Contact form (first Route Handler + API tests)
- Blog
- Analytics
- Auto-generated OG images
