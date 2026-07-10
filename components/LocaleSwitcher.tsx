'use client'

import { Link, usePathname } from '@/components/Link'
import { useLocale } from 'next-intl'

/** Toggles between EN and ES, preserving the current path. */
export function LocaleSwitcher() {
  const locale = useLocale()
  const pathname = usePathname()
  const other = locale === 'en' ? 'es' : 'en'

  return (
    <Link
      href={pathname}
      locale={other}
      aria-label={`Switch language to ${other.toUpperCase()}`}
      className="rounded border border-neutral-700 px-2 py-0.5 text-xs uppercase"
    >
      {other}
    </Link>
  )
}
