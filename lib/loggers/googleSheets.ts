// @ts-nocheck
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { JWT } from 'google-auth-library'

const HEADERS = [
  'timestamp',
  'status',
  'sessionId',
  'name',
  'phone',
  'email',
  'address',
  'city',
  'reasonForSelling',
  'expectedPrice',
  'roofAge',
  'hvacAge',
  'timeline',
  'notes',
  'source',
  'userAgent',
]

export async function logToGoogleSheets(row: Record<string, any>) {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID
  const worksheetTitle = process.env.GOOGLE_SHEETS_WORKSHEET_TITLE || 'Leads'

  if (!clientEmail || !privateKey || !spreadsheetId) return { ok: false, reason: 'missing-env' }

  let doc: any
  try {
    const jwt = new JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })
    doc = new GoogleSpreadsheet(spreadsheetId, jwt)
  } catch (err) {
    console.error('[sheets] auth init failed', err)
    return { ok: false, reason: 'auth-failed' }
  }

  try {
    await doc.loadInfo()
    const sheet =
      doc.sheetsByTitle[worksheetTitle] ||
      (await doc.addSheet({ title: worksheetTitle, headerValues: HEADERS }))

    // Ensure headers exist (first run on an existing blank sheet).
    try {
      await sheet.loadHeaderRow()
    } catch {
      await sheet.setHeaderRow(HEADERS)
    }

    await sheet.addRow({
      timestamp: new Date().toISOString(),
      status: row.status || 'complete',
      sessionId: row.sessionId || '',
      name: row.name || '',
      phone: row.phone || '',
      email: row.email || '',
      address: row.address || '',
      city: row.city || '',
      reasonForSelling: row.reasonForSelling || '',
      expectedPrice: row.expectedPrice || '',
      roofAge: row.roofAge || '',
      hvacAge: row.hvacAge || '',
      timeline: row.timeline || '',
      notes: row.notes || '',
      source: row.source || '',
      userAgent: row.userAgent || '',
    })

    return { ok: true }
  } catch (err) {
    console.error('[sheets] write failed', err)
    return { ok: false, reason: 'write-failed', error: String(err) }
  }
}
