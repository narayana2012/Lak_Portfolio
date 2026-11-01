export type SectionId =
  | 'about'
  | 'experience'
  | 'expertise'
  | 'projects'
  | 'writing'
  | 'github'
  | 'contact'

export interface NavigationItem {
  id: SectionId
  label: string
}

export interface PortfolioLinks {
  github: string
  linkedin: string
  email: string
}

export interface PortfolioProfile {
  name: string
  currentTitle: string
  targetRole: string
  headline: string
  introduction: string
  experienceSummary: string[]
  location: string
  links: PortfolioLinks
  credentials: string[]
  education: string
}

export interface ExperienceEntry {
  organization: string
  role: string
  period: string
  highlights: string[]
}

export interface ProjectCaseStudy {
  title: string
  context: string
  problem: string
  approach: string
  decisions: string[]
  considerations: string[]
  outcomes: string[]
  technologies: string[]
  flow?: string[]
  secondaryFlow?: string[]
  flowLabel?: string
  flowIsIllustrative?: boolean
}

export interface ArticleEntry {
  title: string
  summary: string
  href: string
  publishedAt?: string
}

export interface ExpertiseDomain {
  name: string
  summary: string
  technologies: string[]
}
