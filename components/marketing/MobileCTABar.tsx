'use client'

import Link from 'next/link'
import { SITE } from '@/lib/site'

type Props = {
  phone?: string
  primaryHref?: string
  smsBody?: string
}

// Fixed bottom bar visible on mobile. Three actions: Call, Text (SMS prefilled),
// and primary "Get Offer" amber button.
export function MobileCTABar({
  phone = SITE.phoneDisplay,
  primaryHref = '/sell',
  smsBody = "Hi VP Buys Homes — I'd like a cash offer on my house.",
}: Props) {
  const tel = `tel:${phone.replace(/\D/g, '')}`
  const sms = `sms:${phone.replace(/\D/g, '')}?&body=${encodeURIComponent(smsBody)}`
  return (
    <div
      className="fixed left-0 right-0 bottom-0 z-50 md:hidden bg-white border-t flex items-center gap-2 px-3 py-2.5"
      style={{ borderTopColor: '#D1DCE8', boxShadow: '0 -8px 20px rgba(13,27,42,0.08)' }}
    >
      <a
        href={tel}
        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 border border-[#D1DCE8] rounded-md font-body text-[12px] font-bold uppercase tracking-[0.10em] text-navy no-underline"
      >
        Call
      </a>
      <a
        href={sms}
        className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-3 border border-[#D1DCE8] rounded-md font-body text-[12px] font-bold uppercase tracking-[0.10em] text-navy no-underline"
      >
        Text
      </a>
      <Link
        href={primaryHref}
        className="flex-[1.2] inline-flex items-center justify-center gap-1.5 px-3 py-3 bg-amber text-white rounded-md font-body text-[12px] font-bold uppercase tracking-[0.12em] no-underline shadow-amber"
      >
        Get Offer
      </Link>
    </div>
  )
}
