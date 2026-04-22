'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/areas', label: 'Areas We Serve' },
  { href: '/blog', label: 'Resources' },
]

function LogoMark({ white = false }: { white?: boolean }) {
  const c = white ? '#FFFFFF' : '#1B365D'
  const sub = white ? 'rgba(255,255,255,0.45)' : '#9CA3AF'
  return (
    <svg viewBox="0 0 200 60" width="180" height="54" xmlns="http://www.w3.org/2000/svg" aria-label="VP Buys Homes">
      <text x="0" y="52" fontFamily="'Barlow Semi Condensed','Arial Narrow',sans-serif" fontSize="56" fontWeight="700" fill={c} letterSpacing="1">VP</text>
      <polygon points="88,4 110,18 110,56 66,56 66,18" fill={c} />
      <rect x="78" y="36" width="22" height="20" rx="2" fill={white ? '#1B365D' : '#FFFFFF'} />
      <line x1="122" y1="12" x2="122" y2="52" stroke={c} strokeWidth="2" opacity="0.25" />
      <text x="132" y="36" fontFamily="'Barlow Semi Condensed','Arial Narrow',sans-serif" fontSize="22" fontWeight="700" fill={c} letterSpacing="3">VP EQUITIES</text>
      <text x="133" y="52" fontFamily="'Nunito Sans','Helvetica Neue',sans-serif" fontSize="10" fontWeight="600" fill={sub} letterSpacing="3">VPBUYSHOMES.COM</text>
    </svg>
  )
}

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const textClass = scrolled
    ? 'text-navy-900 hover:text-amber'
    : 'text-white/80 hover:text-white'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: '72px',
          transition: 'background 200ms, box-shadow 200ms, border-color 200ms',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(140%) blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #D1DCE8' : '1px solid rgba(255,255,255,0.10)',
          boxShadow: scrolled ? '0 2px 12px rgba(13,27,42,0.07)' : 'none',
        }}
      >
        <div className="wrap flex items-center justify-between h-full">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            {scrolled ? <LogoMark white={false} /> : <LogoMark white={true} />}
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wider transition-colors duration-100"
                style={{ color: scrolled ? '#0D1B2A' : 'rgba(255,255,255,0.80)', letterSpacing: '0.06em', fontFamily: "'Nunito Sans',sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F2A65A')}
                onMouseLeave={e => (e.currentTarget.style.color = scrolled ? '#0D1B2A' : 'rgba(255,255,255,0.80)')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+19125156060"
              className="hidden lg:block text-sm font-semibold transition-colors"
              style={{ color: scrolled ? '#1B365D' : 'rgba(255,255,255,0.75)', fontFamily: "'Nunito Sans',sans-serif" }}
            >
              (912) 515-6060
            </a>
            <Link href="/sell" className="btn-amber text-sm hidden md:inline-flex">
              Get My Cash Offer
            </Link>
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(m => !m)}
            >
              {[0,1,2].map(i => (
                <span
                  key={i}
                  className="block w-6 h-0.5 transition-all duration-200"
                  style={{ background: scrolled ? '#1B365D' : 'white' }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: '#1B365D', paddingTop: '72px' }}
        >
          <nav className="flex flex-col p-6 gap-0" aria-label="Mobile navigation">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-4 border-b text-white font-semibold uppercase tracking-widest text-sm"
                style={{ borderColor: 'rgba(255,255,255,0.10)', fontFamily: "'Nunito Sans',sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:+19125156060" className="text-white/70 text-sm text-center">(912) 515-6060</a>
              <Link href="/sell" className="btn-amber text-center" onClick={() => setMenuOpen(false)}>
                Get My Cash Offer
              </Link>
            </div>
          </nav>
        </div>
      )}

      {/* Spacer so content doesn't hide behind fixed nav */}
      <div style={{ height: '72px' }} aria-hidden="true" />
    </>
  )
}
