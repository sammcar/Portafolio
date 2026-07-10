import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { routing } from '@/i18n/routing'
import type { Metadata } from 'next'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: { default: 'Portfolio', template: '%s · Portfolio' },
  description: 'Mechatronics, robotics & software portfolio',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <NextIntlClientProvider>
          <Navbar />
          <main className="mx-auto max-w-4xl px-6 py-12">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
