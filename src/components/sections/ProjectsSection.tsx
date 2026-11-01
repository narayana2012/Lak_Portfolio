import { projects } from '../../data/projects'
import { ProjectCaseStudyCard } from '../projects/ProjectCaseStudyCard'
import { Section } from './Section'

export function ProjectsSection() {
  return (
    <Section eyebrow="Architecture in practice" id="projects" title="Architecture & engineering projects">
      <p className="mb-7 max-w-3xl leading-7 text-slate-600">
        Professional case studies drawn from the supplied resume. Diagrams show only the named systems and processing steps; no internal schemas, customer data or employer materials are reproduced.
      </p>
      <div className="space-y-6">
        {projects.map((project, index) => <ProjectCaseStudyCard index={index} key={project.title} project={project} />)}
      </div>
    </Section>
  )
}
