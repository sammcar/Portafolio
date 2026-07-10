import { ProjectCard } from '@/components/ProjectCard'
import { getProjects } from '@/lib/projects'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations('projects')
  const projects = getProjects(locale)

  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">{t('title')}</h1>
      {projects.length === 0 ? (
        <p className="text-neutral-400">{t('empty')}</p>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} locale={locale} />
          ))}
        </ul>
      )}
    </section>
  )
}
