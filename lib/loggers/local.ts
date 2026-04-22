import fs from 'fs'
import path from 'path'

export async function logLocal(data: any) {
  try {
    const dir = path.join(process.cwd(), '.data')
    if (!fs.existsSync(dir)) fs.mkdirSync(dir)
    const file = path.join(dir, 'leads.json')
    const existing = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : []
    existing.push({ ...data, createdAt: new Date().toISOString() })
    fs.writeFileSync(file, JSON.stringify(existing, null, 2))
    return { ok: true, storage: 'local' }
  } catch (e) {
    console.error('Local log error', e)
    return { ok: false, storage: 'local' }
  }
}
