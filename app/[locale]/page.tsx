import { Link } from '@/components/Link'
import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('home')

  return (
    <section className="flex flex-col gap-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight">{t('title')}</h1>
      <p className="max-w-prose text-lg text-neutral-400">{t('subtitle')}</p>
      <Link
        href="/projects"
        className="w-fit rounded-md border border-neutral-700 px-5 py-2 hover:bg-neutral-900"
      >
        {t('cta')} →
      </Link>
    </section>
  )
}
