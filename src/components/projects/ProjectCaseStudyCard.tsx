import { ArchitectureFlow } from './ArchitectureFlow'
import type { ProjectCaseStudy } from '../../types/portfolio'

interface ProjectCaseStudyCardProps {
  project: ProjectCaseStudy
  index: number
}

export function ProjectCaseStudyCard({ project, index }: ProjectCaseStudyCardProps) {
  return (
    <article className="content-card p-5 sm:p-7">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Case study {String(index + 1).padStart(2, '0')}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-navy">{project.title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-500">{project.context}</p>
        </div>
      </div>

      <dl className="mt-6 grid gap-5 md:grid-cols-2">
        <div>
          <dt className="text-sm font-semibold text-navy">Problem and context</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-600">{project.problem}</dd>
        </div>
        <div>
          <dt className="text-sm font-semibold text-navy">Architecture approach</dt>
          <dd className="mt-2 text-sm leading-6 text-slate-600">{project.approach}</dd>
        </div>
      </dl>

      {project.flow && <ArchitectureFlow title={project.flowLabel ?? 'Resume-described data flow'} steps={project.flow} illustrative={project.flowIsIllustrative} />}
      {project.secondaryFlow && <ArchitectureFlow title={project.flowLabel ?? 'Telemetry components'} steps={project.secondaryFlow} illustrative={project.flowIsIllustrative} />}

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <section aria-label="Architecture decisions">
          <h4 className="text-sm font-semibold text-navy">Design decisions</h4>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
            {project.decisions.map((decision) => <li className="pl-4 before:-ml-4 before:mr-2 before:text-blue-600 before:content-['•']" key={decision}>{decision}</li>)}
          </ul>
        </section>
        <section aria-label="Engineering considerations">
          <h4 className="text-sm font-semibold text-navy">Engineering considerations</h4>
          <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-600">
            {project.considerations.map((consideration) => <li className="pl-4 before:-ml-4 before:mr-2 before:text-blue-600 before:content-['•']" key={consideration}>{consideration}</li>)}
          </ul>
        </section>
      </div>

      <section aria-label="Outcomes" className="mt-6 rounded-lg bg-slate-50 p-4">
        <h4 className="text-sm font-semibold text-navy">Verified outcomes</h4>
        {project.outcomes.length > 0 ? (
          <ul className="mt-2 grid gap-2 sm:grid-cols-2">
            {project.outcomes.map((outcome) => <li className="text-sm font-medium leading-6 text-slate-700" key={outcome}>{outcome}</li>)}
          </ul>
        ) : <p className="mt-2 text-sm text-slate-600">The resume does not provide a measured outcome for this initiative.</p>}
      </section>

      <ul aria-label="Technologies used" className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => <li className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-600" key={technology}>{technology}</li>)}
      </ul>
    </article>
  )
}
