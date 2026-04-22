import { logToGoogleSheets } from './loggers/googleSheets'
import { logLocal } from './loggers/local'

export async function logLead(row: Record<string, any>) {
  const result = await logToGoogleSheets(row)
  if (result.ok) return { ok: true, via: 'google-sheets' }
  const local = await logLocal(row)
  return { ok: local.ok, via: local.ok ? 'local' : 'none' }
}
