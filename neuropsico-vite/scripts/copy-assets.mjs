import { cpSync, existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, resolve, extname, basename } from 'node:path'

const root = resolve(import.meta.dirname, '../..')
const dest = resolve(import.meta.dirname, '../public/assets')
const rasterExt = new Set(['.jpg', '.jpeg', '.png'])
const copyExt = ['.jpg', '.jpeg', '.mp4', '.png', '.webp']

mkdirSync(dest, { recursive: true })

let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  sharp = null
}

for (const file of readdirSync(root)) {
  if (!copyExt.some((ext) => file.toLowerCase().endsWith(ext))) continue

  const src = join(root, file)
  const target = join(dest, file)

  if (!existsSync(target) || statSync(src).mtimeMs > statSync(target).mtimeMs) {
    cpSync(src, target)
    console.log(`copied ${file}`)
  }

  const ext = extname(file).toLowerCase()
  if (!sharp || !rasterExt.has(ext)) continue

  const webpName = `${basename(file, extname(file))}.webp`
  const webpTarget = join(dest, webpName)
  const needsWebp = !existsSync(webpTarget) || statSync(src).mtimeMs > statSync(webpTarget).mtimeMs

  if (!needsWebp) continue

  try {
    await sharp(src)
      .webp({ quality: 82, effort: 4 })
      .toFile(webpTarget)
    console.log(`webp ${webpName}`)
  } catch (error) {
    console.warn(`webp skip ${file}:`, error instanceof Error ? error.message : error)
  }
}
