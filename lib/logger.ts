import { logToGoogleSheets } from './loggers/googleSheets'

// Attempt the external Sheets log. Local file logging is handled by the API
// route as a guaranteed separate step, so this function no longer falls back
// to disk — doing so would double-write every lead.
export async function logLead(row: Record<string, any>) {
  const result = await logToGoogleSheets(row)
  if (result.ok) return { ok: true, via: 'google-sheets' as const }
  return { ok: false, via: 'sheets-unavailable' as const, reason: result.reason }
}
