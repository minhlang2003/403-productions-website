import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || 'configure-your-sanity-project'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  title: '403 Productions CMS',
  plugins: [structureTool()],
  schema: {types: schemaTypes},
})
