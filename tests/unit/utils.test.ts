import { formatDate, slugify } from '@/lib/utils'
import { describe, expect, it } from 'vitest'

describe('slugify', () => {
  it('lowercases and hyphenates', () => {
    expect(slugify('TUM Quad Robot')).toBe('tum-quad-robot')
  })

  it('strips accents (Spanish content)', () => {
    expect(slugify('Láser GRBL 80W — versión 2')).toBe('laser-grbl-80w-version-2')
  })

  it('trims leading/trailing separators', () => {
    expect(slugify('  hello world!  ')).toBe('hello-world')
  })
})

describe('formatDate', () => {
  it('formats per locale', () => {
    expect(formatDate('2026-06-01', 'en')).toMatch(/June 2026/)
    expect(formatDate('2026-06-01', 'es')).toMatch(/junio/)
  })

  it('throws on invalid dates instead of rendering garbage', () => {
    expect(() => formatDate('not-a-date', 'en')).toThrow(/invalid ISO date/)
  })
})
