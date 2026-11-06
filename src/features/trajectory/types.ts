export type CareerCategory = 'experience' | 'education' | 'certification'

export interface CareerMilestone {
  id: string
  period: string
  role: string
  organization: string
  location: string
  category: CareerCategory
  categoryLabel: string
  status: string
  summary: string
  highlights: string[]
  tags: string[]
}

export interface CareerLanguage {
  language: string
  level: string
  detail: string
}

export interface CareerTelemetry {
  experienceYears: string
  experiencePeriod: string
  degreeTitle: string
  degreeInstitution: string
  degreeStatus: string
  languages: CareerLanguage[]
  availability: string
}

export interface TrajectoryCategory {
  id: 'all' | CareerCategory
  label: string
  count: number
}

export interface TrajectoryData {
  telemetry: CareerTelemetry
  categories: TrajectoryCategory[]
  milestones: CareerMilestone[]
}

export type CareerData = TrajectoryData
