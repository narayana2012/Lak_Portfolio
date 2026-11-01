import type {
  ArticleEntry,
  ExperienceEntry,
  ExpertiseGroup,
  ProjectEntry,
} from '../types/portfolio'

// Add only information confirmed by the portfolio owner. Keep these collections
// empty until publishable details are provided; never render fabricated samples.
export const experience: ExperienceEntry[] = []
export const expertise: ExpertiseGroup[] = []
export const projects: ProjectEntry[] = []
export const articles: ArticleEntry[] = []

// TODO (development only): ask the owner for a professional summary and public
// profile/contact links before adding them to the site.
