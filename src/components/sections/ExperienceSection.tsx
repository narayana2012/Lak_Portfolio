import { experience } from '../../data/experience'
import { ExperienceTimeline } from '../experience/ExperienceTimeline'
import { Section } from './Section'

export function ExperienceSection() {
  return (
    <Section eyebrow="Career" id="experience" title="Professional experience">
      <ExperienceTimeline entries={experience} />
    </Section>
  )
}
