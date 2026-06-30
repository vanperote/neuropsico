import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '../..')
const dest = resolve(import.meta.dirname, '../public/assets')

mkdirSync(dest, { recursive: true })

const patterns = ['.jpg', '.jpeg', '.mp4', '.png', '.webp']

for (const file of readdirSync(root)) {
  if (!patterns.some((ext) => file.toLowerCase().endsWith(ext))) continue
  const src = join(root, file)
  const target = join(dest, file)
  if (!existsSync(target)) {
    cpSync(src, target)
    console.log(`copied ${file}`)
  }
}
