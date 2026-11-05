export interface ExperienceItem {
  id: string
  period: string
  role: string
  company: string
  location: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  status: string
  details?: string
}

export interface LanguageItem {
  language: string
  level: string
  details: string
}

