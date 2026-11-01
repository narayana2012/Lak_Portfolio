import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  children: ReactNode
  tone?: 'default' | 'muted'
}

export function Section({ id, eyebrow, title, children, tone = 'default' }: SectionProps) {
  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={tone === 'muted' ? 'section-shell bg-slate-50' : 'section-shell'}
      id={id}
    >
      <div className="page-container">
        {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">{eyebrow}</p>}
        <h2 className="section-heading" id={`${id}-heading`}>{title}</h2>
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
