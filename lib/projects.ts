/**
 * Content layer: reads project MDX files from `content/projects`.
 *
 * Each file is named `<slug>.<locale>.mdx` (e.g. `laser-grbl.en.mdx`)
 * and must include the frontmatter defined by {@link ProjectFrontmatter}.
 * This module is pure Node (fs) logic — it runs at build time only.
 */
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export interface ProjectFrontmatter {
  title: string
  summary: string
  date: string // ISO 8601 (YYYY-MM-DD)
  tags: string[]
  /** Optional cover image path under /public */
  image?: string
  /** Feature on the home page */
  featured?: boolean
}

export interface Project extends ProjectFrontmatter {
  slug: string
  locale: string
  content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'projects')

/** Validates frontmatter and throws a clear error pointing at the file. */
export function parseProjectFile(filePath: string, raw: string): Project {
  const { data, content } = matter(raw)
  const file = path.basename(filePath)
  const match = file.match(/^(?<slug>.+)\.(?<locale>[a-z]{2})\.mdx$/)
  if (!match?.groups) {
    throw new Error(`Invalid project filename "${file}". Expected "<slug>.<locale>.mdx".`)
  }
  for (const field of ['title', 'summary', 'date', 'tags'] as const) {
    if (data[field] === undefined) {
      throw new Error(`Missing frontmatter field "${field}" in ${file}`)
    }
  }
  if (Number.isNaN(Date.parse(data.date))) {
    throw new Error(`Invalid date "${data.date}" in ${file}. Use YYYY-MM-DD.`)
  }
  return {
    slug: match.groups.slug as string,
    locale: match.groups.locale as string,
    content,
    title: data.title,
    summary: data.summary,
    date: data.date,
    tags: data.tags,
    image: data.image,
    featured: data.featured ?? false,
  }
}

/** All projects for a locale, newest first. */
export function getProjects(locale: string): Project[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(`.${locale}.mdx`))
    .map((f) => parseProjectFile(f, fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8')))
    .sort(byDateDesc)
}

export function getProject(locale: string, slug: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug)
}

export function byDateDesc(a: Pick<Project, 'date'>, b: Pick<Project, 'date'>): number {
  return Date.parse(b.date) - Date.parse(a.date)
}

export function filterByTag(projects: Project[], tag: string): Project[] {
  return projects.filter((p) => p.tags.includes(tag))
}
