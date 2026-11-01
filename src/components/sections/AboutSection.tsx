import { Section } from './Section'
import { portfolioProfile } from '../../data/portfolio'

export function AboutSection() {
  return (
    <Section eyebrow="Profile" id="about" title="A systems perspective on data and AI" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="space-y-4 text-base leading-8 text-slate-600">
          {portfolioProfile.experienceSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside aria-label="Education and certifications" className="content-card h-fit">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Career direction</p>
          <p className="mt-2 text-lg font-semibold text-navy">{portfolioProfile.targetRole}</p>
          <h3 className="text-base font-semibold text-navy">Credentials</h3>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {portfolioProfile.credentials.map((credential) => <li className="border-l-2 border-blue-200 pl-3" key={credential}>{credential}</li>)}
          </ul>
          <h3 className="mt-7 text-base font-semibold text-navy">Education</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{portfolioProfile.education}</p>
        </aside>
      </div>
    </Section>
  )
}
