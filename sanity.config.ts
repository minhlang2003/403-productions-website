import {defineConfig} from 'sanity'
import {schemaTypes} from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'configure-your-sanity-project'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  title: '403 Productions CMS',
  schema: {types: schemaTypes},
})
