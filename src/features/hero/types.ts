export interface TelemetryMetric {
  id: string
  label: string
  value: string
  detail?: string
}

export interface HeroData {
  availability: string
  locationTimezone: string
  name: string
  role: string
  headline: string
  description: string
  metrics: TelemetryMetric[]
  cta: {
    primary: {
      label: string
      href: string
    }
    secondary: {
      label: string
      href: string
    }
  }
}
