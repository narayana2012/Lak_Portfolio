import { expertise } from '../../data/expertise'
import { Section } from './Section'

export function ExpertiseSection() {
  return (
    <Section eyebrow="Capabilities" id="expertise" title="Technical expertise" tone="muted">
      <p className="mb-6 max-w-3xl leading-7 text-slate-600">
        Domains and technologies are grouped by engineering work. This list does not imply equal depth across every tool.
      </p>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {expertise.map((domain) => (
          <article className="content-card" key={domain.name}>
            <h3 className="font-semibold text-navy">{domain.name}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{domain.summary}</p>
            <ul aria-label={`${domain.name} technologies`} className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5">
              {domain.technologies.map((technology) => (
                <li className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700" key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  )
}
