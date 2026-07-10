import { routing } from '@/i18n/routing'
import { getProject, getProjects } from '@/lib/projects'
import { formatDate } from '@/lib/utils'
import { setRequestLocale } from 'next-intl/server'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'

/** Pre-generate every project page for every locale at build time (SSG). */
export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((p) => ({ locale, slug: p.slug })),
  )
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const project = getProject(locale, slug)
  if (!project) notFound()

  return (
    <article className="prose prose-invert max-w-none">
      <p className="text-sm text-neutral-500">{formatDate(project.date, locale)}</p>
      <h1>{project.title}</h1>
      <p className="lead">{project.summary}</p>
      <MDXRemote source={project.content} />
    </article>
  )
}
