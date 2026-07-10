import { Link } from '@/components/Link'
import type { Project } from '@/lib/projects'
import { formatDate } from '@/lib/utils'

export function ProjectCard({ project, locale }: { project: Project; locale: string }) {
  return (
    <li className="rounded-lg border border-neutral-800 p-5 transition-colors hover:border-neutral-600">
      <Link href={`/projects/${project.slug}`} className="flex flex-col gap-2">
        <span className="text-xs text-neutral-500">{formatDate(project.date, locale)}</span>
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-neutral-400">{project.summary}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded bg-neutral-900 px-2 py-0.5 text-xs text-neutral-400">
              {tag}
            </li>
          ))}
        </ul>
      </Link>
    </li>
  )
}
