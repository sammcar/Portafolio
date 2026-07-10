/** Locale-aware date formatting for display (e.g. "March 2026" / "marzo de 2026"). */
export function formatDate(iso: string, locale: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) {
    throw new Error(`formatDate: invalid ISO date "${iso}"`)
  }
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date)
}

/** URL-safe slug from any string ("Láser GRBL 80W" -> "laser-grbl-80w"). */
export function slugify(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
