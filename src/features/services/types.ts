export interface ServiceBenefit {
  title: string
  description: string
}

export interface ServiceItem {
  id: string
  iconName: 'Globe' | 'Layers' | 'Zap'
  badge: string
  title: string
  summary: string
  deliverables: string[]
  clientImpact: string
}

