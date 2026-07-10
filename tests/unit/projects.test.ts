import { byDateDesc, filterByTag, getProjects, parseProjectFile } from '@/lib/projects'
import type { Project } from '@/lib/projects'
import { describe, expect, it } from 'vitest'

const validMdx = `---
title: 'Test'
summary: 'A test project'
date: '2026-01-15'
tags: ['robotics']
---
Body content.
`

describe('parseProjectFile', () => {
  it('parses valid frontmatter and extracts slug + locale from filename', () => {
    const p = parseProjectFile('my-robot.en.mdx', validMdx)
    expect(p.slug).toBe('my-robot')
    expect(p.locale).toBe('en')
    expect(p.title).toBe('Test')
    expect(p.featured).toBe(false)
  })

  it('rejects filenames that do not follow <slug>.<locale>.mdx', () => {
    expect(() => parseProjectFile('bad-name.mdx', validMdx)).toThrow(/Invalid project filename/)
  })

  it('rejects missing required frontmatter with a clear message', () => {
    const missingDate = validMdx.replace("date: '2026-01-15'\n", '')
    expect(() => parseProjectFile('x.en.mdx', missingDate)).toThrow(
      /Missing frontmatter field "date"/,
    )
  })

  it('rejects invalid dates', () => {
    const badDate = validMdx.replace('2026-01-15', 'someday')
    expect(() => parseProjectFile('x.en.mdx', badDate)).toThrow(/Invalid date/)
  })
})

describe('sorting and filtering', () => {
  const mk = (date: string, tags: string[]): Project => ({
    slug: 's',
    locale: 'en',
    content: '',
    title: 't',
    summary: 's',
    date,
    tags,
  })

  it('sorts newest first', () => {
    const sorted = [mk('2024-01-01', []), mk('2026-01-01', [])].sort(byDateDesc)
    expect(sorted[0]?.date).toBe('2026-01-01')
  })

  it('filters by tag', () => {
    const list = [mk('2026-01-01', ['robotics']), mk('2026-01-02', ['web'])]
    expect(filterByTag(list, 'robotics')).toHaveLength(1)
  })
})

describe('getProjects (integration: real content/ directory)', () => {
  it('loads example content for both locales without throwing', () => {
    // This doubles as a content validator: a broken MDX file fails CI here.
    expect(getProjects('en').length).toBeGreaterThan(0)
    expect(getProjects('es').length).toBeGreaterThan(0)
  })
})
