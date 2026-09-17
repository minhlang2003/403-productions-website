export type Localized = {vi: string; en: string}
export type NavigationItem = {label: Localized; href: string}
export type FooterContent = {
  availability: Localized
  address: Localized
  followLabel: Localized
  socialLinks: Array<{label: string; href: string}>
  copyright: Localized
  topLabel: Localized
}
export type TeamShowcase = {
  label: Localized
  heading: Localized
  members: Array<{name: string; role: Localized; image: string; position?: string}>
}
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
  footer: FooterContent
  teamShowcase: TeamShowcase
  pages: {
    work: {meta:Localized;kicker:Localized;heading:Localized;filters:Localized[];nextLabel:Localized;nextLink:Localized}
    films: {meta:Localized;kicker:Localized;subKicker:Localized;heading:Localized;intro:Localized;projectGenre:Localized;ctaLabel:Localized;ctaLink:Localized}
    about: {meta:Localized;kicker:Localized;heading:Localized;heroCopy:Localized;established:Localized;viewpointLabel:Localized;viewpointHeading:Localized;paragraphs:Localized[];teamLabel:Localized;team:Array<{name:string;role:Localized}>;capabilitiesLabel:Localized;nextLabel:Localized;nextLink:Localized}
    contact: {meta:Localized;availability:Localized;heading:Localized;businessLabel:Localized;locationLabel:Localized;location:Localized;enquiriesLabel:Localized;enquiries:Localized;socialLabel:Localized;social:string;copyright:Localized}
    filmDetail: {meta:Localized;byline:Localized;genre:Localized;location:Localized;filmLabel:Localized;creditsLabel:Localized;credits:Array<{role:Localized;name:string}>;ctaLabel:Localized;ctaLink:Localized}
  }
  featuredProjects: Project[]
}
