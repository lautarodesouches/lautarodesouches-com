export interface ContactChannel {
  id: string
  label: string
  value: string
  href: string
  actionLabel: string
  isExternal: boolean
  highlight?: boolean
}

export interface ContactData {
  title: string
  subtitle: string
  channels: ContactChannel[]
}

