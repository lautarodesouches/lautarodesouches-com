export interface ServicePackage {
  id: string
  index: string
  badge: string
  title: string
  targetAudience: string
  summary: string
  deliverables: string[]
  techStack: string[]
  deliveryTime: string
  investmentTier: string
}

export interface ProcessStep {
  step: string
  name: string
  desc: string
}

export interface ServicesTelemetry {
  status: string
  model: string
  responseLatency: string
  ipOwnership: string
}

export interface ServicesData {
  packages: ServicePackage[]
  process: ProcessStep[]
  telemetry: ServicesTelemetry
}
