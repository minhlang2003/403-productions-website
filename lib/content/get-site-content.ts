import {client} from '@/sanity/lib/client'
import {fallbackContent} from './fallback'
import type {SiteContent} from './types'

const query = `*[_type == "siteSettings"][0]{brand,brandDescriptor,navMeta,tagline,supportingLine,positioning,navigation,home,about,services,contact,"featuredProjects": *[_type == "project" && featured == true]{title,subtitle,"slug":slug.current,year,category,tagline,featured}}`

export async function getSiteContent(): Promise<SiteContent> {
  if (!client) return fallbackContent
  const content = await client.fetch<SiteContent | null>(query, {}, {next: {revalidate: 60}})
  return content || fallbackContent
}
