export interface HeroMetric {
  value: string
  label: string
  sublabel: string
}

export interface HeroData {
  roleBadge: string
  titleLine1: string
  titleLine2: string
  subtitle: string
  metrics: HeroMetric[]
}
