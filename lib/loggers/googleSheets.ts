// @ts-nocheck
import { GoogleSpreadsheet } from 'google-spreadsheet'

export async function logToGoogleSheets(row: Record<string, any>) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const worksheetTitle = process.env.GOOGLE_SHEETS_WORKSHEET_TITLE || 'Leads'

  if (!clientEmail || !privateKey || !spreadsheetId) return { ok: false, reason: 'missing-env' }

  // google-spreadsheet v4 accepts auth as second arg
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const doc = new (GoogleSpreadsheet as any)(spreadsheetId, {
    apiKey: undefined,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any)
  // Fallback for v3 API shape
  if (typeof doc.useServiceAccountAuth === 'function') {
    await doc.useServiceAccountAuth({ client_email: clientEmail, private_key: privateKey! })
  }
  await doc.loadInfo()
  const sheet = doc.sheetsByTitle[worksheetTitle] || await doc.addSheet({ title: worksheetTitle, headerValues: [
    'timestamp','name','phone','email','address','situation','timeline','notes','city','source','userAgent'
  ]})

  await sheet.addRow({
    timestamp: new Date().toISOString(),
    ...row,
  })

  return { ok: true }
}
