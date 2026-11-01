import { SocialLinks } from '../ui/SocialLinks'
import { Section } from './Section'

export function ContactSection() {
  return (
    <Section eyebrow="Contact" id="contact" title="Connect with me" tone="muted">
      <p className="mb-5 max-w-2xl leading-7 text-slate-600">
        For professional conversations about data platforms, architecture and AI engineering, reach me through the links below.
      </p>
      <SocialLinks />
    </Section>
  )
}
