import { routing } from '@/i18n/routing'
/** Locale-aware Link: keeps the current locale prefix automatically. */
import { createNavigation } from 'next-intl/navigation'

export const { Link, redirect, usePathname, useRouter } = createNavigation(routing)
