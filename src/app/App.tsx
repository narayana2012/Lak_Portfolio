import { Footer } from '../components/layout/Footer'
import { Header } from '../components/layout/Header'
import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ExperienceSection } from '../components/sections/ExperienceSection'
import { ExpertiseSection } from '../components/sections/ExpertiseSection'
import { GitHubSection } from '../components/sections/GitHubSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { WritingSection } from '../components/sections/WritingSection'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ExpertiseSection />
        <ProjectsSection />
        <WritingSection />
        <GitHubSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
