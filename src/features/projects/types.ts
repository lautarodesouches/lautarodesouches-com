export interface ProjectMetric {
  label: string
  value: string
}

export interface Project {
  id: string
  title: string
  type: string
  badge: string
  description: string
  problem: string
  solution: string
  impact: string
  metrics: ProjectMetric[]
  tech: string[]
  demoUrl: string
  repoUrl: string
  isPrivateRepo: boolean
  image: string
}
