import { ArrowUpRight, Github } from 'lucide-react'
import { portfolioProfile } from '../../data/portfolio'
import { Section } from './Section'

export function GitHubSection() {
  return (
    <Section eyebrow="GitHub" id="github" title="Explore my GitHub">
      <div className="content-card flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-lg font-semibold text-navy">GitHub profile</h3>
          <p className="mt-2 leading-7 text-slate-600">Visit my GitHub profile.</p>
        </div>
        <a className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-semibold text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700" href={portfolioProfile.links.github} rel="noreferrer" target="_blank">
          <Github aria-hidden="true" size={17} /> Explore my GitHub profile <ArrowUpRight aria-hidden="true" size={16} />
        </a>
      </div>
    </Section>
  )
}
