import type { ExperienceEntry } from '../../types/portfolio'

interface ExperienceTimelineProps {
  entries: ExperienceEntry[]
}

export function ExperienceTimeline({ entries }: ExperienceTimelineProps) {
  return (
    <ol className="relative space-y-8 border-l border-blue-200 pl-6 sm:pl-8">
      {entries.map((entry) => (
        <li className="relative" key={`${entry.organization}-${entry.period}`}>
          <span aria-hidden="true" className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600 ring-1 ring-blue-200 sm:-left-[2.45rem]" />
          <article className="content-card">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-lg font-semibold text-navy">{entry.organization}</h3>
                <p className="mt-1 font-medium text-slate-700">{entry.role}</p>
              </div>
              <p className="shrink-0 text-sm font-medium text-blue-800">{entry.period}</p>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
              {entry.highlights.map((highlight) => <li className="pl-4 before:-ml-4 before:mr-2 before:text-blue-600 before:content-['•']" key={highlight}>{highlight}</li>)}
            </ul>
          </article>
        </li>
      ))}
    </ol>
  )
}
