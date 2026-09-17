import {client} from '@/sanity/lib/client'
import {fallbackContent} from './fallback'
import type {SiteContent} from './types'

const query = `*[_type == "siteSettings"][0]{brand,brandDescriptor,navMeta,tagline,supportingLine,positioning,navigation,home,about,services,contact,footer,"teamShowcase":teamShowcase{label,heading,members[]{name,role,"image":image.asset->url,position}},pages,"featuredProjects": *[_type == "project" && featured == true]{title,subtitle,"slug":slug.current,year,category,tagline,featured}}`

export async function getSiteContent(): Promise<SiteContent> {
  if (!client) return fallbackContent
  const content = await client.fetch<SiteContent | null>(query, {}, {next: {revalidate: 60}})
  return content ? mergeContent(fallbackContent, content) : fallbackContent
}

function mergeContent<T>(fallback: T, override: Partial<T>): T {
  if (Array.isArray(fallback)) return (Array.isArray(override) && override.length ? override : fallback) as T
  if (fallback && typeof fallback === 'object') {
    const output = {...fallback as object} as Record<string, unknown>
    for (const [key, value] of Object.entries(override)) {
      if (value === undefined || value === null) continue
      const base = output[key]
      output[key] = base && typeof base === 'object' && !Array.isArray(base) && typeof value === 'object' && !Array.isArray(value)
        ? mergeContent(base, value)
        : value
    }
    return output as T
  }
  return (override ?? fallback) as T
}
