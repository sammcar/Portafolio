# Architecture

## Rendering model: SSG

Everything is generated at build time. There is no server logic in v1.

```mermaid
flowchart LR
    A[content/*.mdx] -->|build time| B[lib/projects.ts\nparse + validate]
    B --> C[Next.js App Router\ngenerateStaticParams]
    C --> D[Static HTML per page\nper locale]
    D --> E[Vercel CDN]
    F[messages/en.json\nmessages/es.json] --> C
```

## Content pipeline

One MDX file per project **per locale**: `content/projects/<slug>.<locale>.mdx`.
`lib/projects.ts` validates frontmatter at build time — invalid content fails
the build (and therefore CI), so broken content can never reach production.

## i18n

next-intl with locale-prefixed routes (`/en/...`, `/es/...`), default `en`.
UI strings in `messages/`; long-form content in MDX per locale.

## Delivery pipeline

```mermaid
flowchart LR
    A[push branch] --> B[PR]
    B --> C{CI: lint, types,\ntests, audit, build}
    B --> D[Vercel preview URL]
    C -->|green| E[review + merge]
    D --> E
    E --> F[main]
    F --> G[semantic-release:\nversion + changelog + tag]
    F --> H[Vercel production deploy]
```
