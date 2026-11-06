export interface ContactChannel {
  id: string
  label: string
  title: string
  description: string
  value: string
  href: string
  isExternal: boolean
  actionText: string
  isCopyable?: boolean
}

export interface SocialLink {
  id: string
  platform: string
  handle: string
  url: string
  badge: string
}

export interface ContactTelemetry {
  status: string
  statusDetail: string
  location: string
  timezone: string
  responseLatency: string
  languages: string
  availability: string
}

export interface ContactSignature {
  year: number
  author: string
  role: string
  techStack: string
}

export interface ContactData {
  tag: string
  title: string
  description: string
  channels: ContactChannel[]
  socials: SocialLink[]
  telemetry: ContactTelemetry
  signature: ContactSignature
}
