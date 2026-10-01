'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Logo } from '@/components/ui/Logo'

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How it works' },
  { href: '/situations', label: 'Situations' },
  { href: '/areas', label: 'Areas' },
  { href: '/blog', label: 'FAQ' },
] as const

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[box-shadow,background] duration-200 ${
          scrolled ? 'shadow-md' : 'shadow-[0_1px_0_rgba(13,27,42,0.06)]'
        }`}
        style={{
          background: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.90)',
          backdropFilter: 'saturate(160%) blur(18px)',
          WebkitBackdropFilter: 'saturate(160%) blur(18px)',
        }}
      >
        <div className="max-w-container mx-auto px-5 sm:px-9 grid grid-cols-[auto_1fr_auto] items-center h-[88px] gap-6">
          <Link href="/" className="flex items-center gap-1.5 no-underline" onClick={() => setOpen(false)}>
            <Logo size="xl" withDba />
          </Link>

          <nav className="hidden md:flex items-center justify-center gap-12">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link relative font-body text-[14px] font-semibold tracking-[0.06em] text-ink-900 no-underline whitespace-nowrap transition-colors duration-150 hover:text-navy"
              >
                {l.label}
                <span className="nav-underline" aria-hidden />
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center justify-end">
            <Link
              href="/sell"
              className="inline-flex items-center gap-2 px-9 py-[18px] bg-amber text-white font-body text-[13px] font-bold tracking-[0.18em] uppercase rounded-sm no-underline whitespace-nowrap shadow-amber transition-all duration-150 hover:bg-amber-dark hover:text-white hover:-translate-y-px hover:shadow-[0_10px_28px_rgba(242,166,90,0.55)]"
            >
              Get My Offer →
            </Link>
          </div>

          <div className="md:hidden col-start-3 flex items-center gap-2.5">
            <button
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex flex-col items-center justify-center w-[44px] h-[44px] rounded-lg border border-[#D1DCE8] bg-transparent cursor-pointer"
            >
              <span className={`block w-[18px] h-0.5 bg-navy rounded-sm transition-all duration-200 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
              <span className={`block w-[18px] h-0.5 bg-navy rounded-sm my-1 transition-opacity duration-150 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-[18px] h-0.5 bg-navy rounded-sm transition-all duration-200 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed left-0 right-0 z-40 md:hidden bg-white border-b border-[#D1DCE8] shadow-md px-6 py-5 flex flex-col gap-1 transition-all duration-200 ease-out ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-3 opacity-0 pointer-events-none'}`}
        style={{ top: 88 }}
      >
        {NAV_LINKS.map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-body text-[16px] font-semibold text-ink-900 no-underline py-4 border-b border-[#D1DCE8] min-h-[44px] flex items-center"
          >
            {l.label}
          </Link>
        ))}
        <Link
          href="/sell"
          onClick={() => setOpen(false)}
          className="mt-4 bg-amber text-white rounded-sm px-5 py-4 font-body text-[12px] font-bold tracking-[0.14em] uppercase no-underline text-center shadow-amber hover:bg-amber-dark hover:text-white"
        >
          Get My Cash Offer
        </Link>
      </div>

      <style jsx>{`
        .nav-link .nav-underline {
          position: absolute;
          left: 50%;
          right: 50%;
          bottom: -8px;
          height: 2px;
          background: var(--amber);
          border-radius: 2px;
          transition: left 200ms cubic-bezier(0.16, 1, 0.3, 1), right 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover .nav-underline {
          left: 0;
          right: 0;
        }
      `}</style>
    </>
  )
}
