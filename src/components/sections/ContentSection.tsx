import type { ReactNode } from 'react'
import { Section } from './Section'

interface ContentSectionProps {
  id: string
  title: string
  children: ReactNode
  tone?: 'default' | 'muted'
}

export function ContentSection({ id, title, children, tone }: ContentSectionProps) {
  return (
    <Section id={id} title={title} tone={tone}>
      {children}
    </Section>
  )
}
