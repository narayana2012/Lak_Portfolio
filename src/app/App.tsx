import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { ContentSection } from '../components/sections/ContentSection'
import { HeroSection } from '../components/sections/HeroSection'
import { Section } from '../components/sections/Section'
import { DevelopmentPlaceholder } from '../components/ui/DevelopmentPlaceholder'
import { articles, experience, expertise, projects } from '../data/portfolio'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <HeroSection />
        <Section eyebrow="Profile" id="about" title="Engineering with a systems perspective" tone="muted">
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            Senior Staff Data &amp; AI Engineer, with a career direction toward Principal Data &amp; AI Engineering.
          </p>
          <DevelopmentPlaceholder>add an owner-approved professional summary before launch.</DevelopmentPlaceholder>
        </Section>
        <ContentSection id="experience" title="Professional experience">
          {experience.length > 0 ? (
            <ul className="space-y-5">{experience.map((entry) => <li className="content-card" key={`${entry.organization}-${entry.role}-${entry.startDate}`}><h3 className="text-lg font-semibold text-navy">{entry.role}</h3><p className="mt-1 text-slate-600">{entry.organization}</p></li>)}</ul>
          ) : <DevelopmentPlaceholder>add confirmed corporate experience details approved for publication.</DevelopmentPlaceholder>}
        </ContentSection>
        <ContentSection id="expertise" title="Technical expertise" tone="muted">
          {expertise.length > 0 ? <div className="grid gap-5 md:grid-cols-2">{expertise.map((group) => <article className="content-card" key={group.name}><h3 className="font-semibold text-navy">{group.name}</h3><p className="mt-2 text-slate-600">{group.skills.join(' · ')}</p></article>)}</div> : <DevelopmentPlaceholder>add owner-confirmed technologies and expertise groups.</DevelopmentPlaceholder>}
        </ContentSection>
        <ContentSection id="projects" title="Architecture &amp; engineering projects">
          {projects.length > 0 ? <div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <article className="content-card" key={project.title}><p className="text-xs font-bold uppercase tracking-wide text-blue-700">{project.category === 'corporate' ? 'Corporate experience' : 'Independent project'}</p><h3 className="mt-2 text-lg font-semibold text-navy">{project.title}</h3><p className="mt-2 text-slate-600">{project.summary}</p></article>)}</div> : <DevelopmentPlaceholder>add verified projects with confidential employer details removed.</DevelopmentPlaceholder>}
        </ContentSection>
        <ContentSection id="writing" title="Technical writing" tone="muted">
          {articles.length > 0 ? <ul className="space-y-4">{articles.map((article) => <li className="content-card" key={article.href}><a className="font-semibold text-navy hover:text-blue-700" href={article.href}>{article.title}</a><p className="mt-2 text-slate-600">{article.summary}</p></li>)}</ul> : <DevelopmentPlaceholder>add links to confirmed published technical writing.</DevelopmentPlaceholder>}
        </ContentSection>
        <ContentSection id="github" title="GitHub">
          <DevelopmentPlaceholder>add the owner's public GitHub profile or selected repositories.</DevelopmentPlaceholder>
        </ContentSection>
        <Section eyebrow="Get in touch" id="contact" title="Contact" tone="muted">
          <DevelopmentPlaceholder>add a contact method selected by the owner for public display.</DevelopmentPlaceholder>
        </Section>
      </main>
      <Footer />
    </>
  )
}
