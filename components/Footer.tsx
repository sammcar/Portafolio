import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  return (
    <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-600">
      © {new Date().getFullYear()} — {t('rights')} · Code under MIT.
    </footer>
  )
}
