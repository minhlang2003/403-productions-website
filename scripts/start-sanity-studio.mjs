import {readFileSync} from 'node:fs'
import {spawn} from 'node:child_process'
import {resolve} from 'node:path'

const localEnv = resolve(process.cwd(), '.env.local')
const lines = readFileSync(localEnv, 'utf8').split(/\r?\n/)
for (const line of lines) {
  const match = line.match(/^([A-Z0-9_]+)=(.*)$/)
  if (match) process.env[match[1]] = match[2]
}

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
  process.exit(1)
}

process.env.SANITY_STUDIO_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
process.env.SANITY_STUDIO_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const studioCli = resolve(process.cwd(), 'node_modules', 'sanity', 'bin', 'sanity')
const studio = spawn(process.execPath, [studioCli, 'dev', '--port', '3333'], {stdio: 'inherit', env: process.env})
studio.on('exit', code => process.exit(code ?? 0))
