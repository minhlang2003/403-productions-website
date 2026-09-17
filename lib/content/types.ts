export type Localized = {vi: string; en: string}
export type NavigationItem = {label: Localized; href: string}
export type Project = {title: string; subtitle?: string; slug: string; year: number; category: Localized; tagline?: Localized; featured: boolean}
export type SiteContent = {
  brand: string
  brandDescriptor: string
  navMeta: Localized
  tagline: Localized
  supportingLine: Localized
  positioning: Localized
  navigation: NavigationItem[]
  home: {
    productionHouse: Localized
    viewProjects: Localized
    aboutLink: Localized
    featuredLabel: Localized
    featuredHeading: Localized
    capabilitiesLabel: Localized
    capabilitiesHeading: Localized
  }
  about: {label: Localized; statement: Localized; footnote: Localized}
  services: Array<{title: Localized; description: Localized}>
  contact: {eyebrow: Localized; heading: Localized; email: string}
  featuredProjects: Project[]
}
