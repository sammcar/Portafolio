import { Link } from '@/components/Link'
import { LocaleSwitcher } from '@/components/LocaleSwitcher'
import { useTranslations } from 'next-intl'

export function Navbar() {
  const t = useTranslations('nav')
  return (
    <header className="border-b border-neutral-900">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          ~/portfolio
        </Link>
        <div className="flex items-center gap-6 text-sm text-neutral-300">
          <Link href="/projects">{t('projects')}</Link>
          <Link href="/about">{t('about')}</Link>
          <LocaleSwitcher />
        </div>
      </nav>
    </header>
  )
}
