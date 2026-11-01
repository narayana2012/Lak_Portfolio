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

export interface ExperienceEntry {
  organization: string
  role: string
  startDate: string
  endDate: string | null
  summary: string
  category: 'corporate'
}

export interface ProjectEntry {
  title: string
  summary: string
  technologies: string[]
  href?: string
  category: 'corporate' | 'independent'
}

export interface ArticleEntry {
  title: string
  summary: string
  href: string
  publishedAt?: string
}

export interface ExpertiseGroup {
  name: string
  skills: string[]
}
