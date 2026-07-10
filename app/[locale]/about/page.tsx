import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = use(params)
  setRequestLocale(locale)
  const t = useTranslations('about')

  return (
    <section>
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      {/* TODO(#issue): write bio content — see docs/requirements.md */}
    </section>
  )
}
