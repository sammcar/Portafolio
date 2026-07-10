import { ProjectCard } from '@/components/ProjectCard'
import type { Project } from '@/lib/projects'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

// The locale-aware Link needs next-intl context; a plain anchor is enough here.
vi.mock('@/components/Link', () => ({
  Link: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}))

const project: Project = {
  slug: 'tum-quad',
  locale: 'en',
  content: '',
  title: 'TUM Quad Robot',
  summary: 'Quadruped control stack',
  date: '2026-03-01',
  tags: ['robotics', 'c++'],
}

describe('<ProjectCard />', () => {
  it('renders title, summary and tags', () => {
    render(
      <ul>
        <ProjectCard project={project} locale="en" />
      </ul>,
    )
    expect(screen.getByRole('heading', { name: 'TUM Quad Robot' })).toBeInTheDocument()
    expect(screen.getByText('Quadruped control stack')).toBeInTheDocument()
    expect(screen.getByText('robotics')).toBeInTheDocument()
  })

  it('links to the project page', () => {
    render(
      <ul>
        <ProjectCard project={project} locale="en" />
      </ul>,
    )
    expect(screen.getByRole('link')).toHaveAttribute('href', '/projects/tum-quad')
  })
})
