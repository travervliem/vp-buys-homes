import { NextResponse } from 'next/server'
import { leadSchema } from '@/lib/validation'
import { sendLeadEmail } from '@/lib/email'
import { logLead } from '@/lib/logger'

const CITIES = ['Statesboro','Rincon','Savannah','Metter','Springfield','Swainsboro','Claxton','Vidalia','Millen','Waynesboro','Jesup','Dublin']

function detectCity(address: string): string | null {
  const hit = CITIES.find(c => address.toLowerCase().includes(c.toLowerCase()))
  return hit ?? null
}

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const parsed = leadSchema.safeParse(json)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 })
    }

    const payload = parsed.data
    const city = detectCity(payload.address)

    const [emailRes, logRes] = await Promise.all([
      sendLeadEmail({ ...payload, city }),
      logLead({ ...payload, city, source: 'website', userAgent: req.headers.get('user-agent') }),
    ])

    return NextResponse.json({ ok: true, email: emailRes, logged: logRes })
  } catch (e) {
    console.error('[lead/route]', e)
    return NextResponse.json({ ok: false, message: 'Unexpected error' }, { status: 500 })
  }
}
