'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/areas', label: 'Areas We Serve' },
  { href: '/blog', label: 'Resources' },
]

function Logo() {
  return (
    <span style={{
      fontFamily: "'Barlow Semi Condensed','Arial Narrow',sans-serif",
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase' as const,
      color: 'white',
      lineHeight: 1,
    }}>
      VP <span style={{ color: '#F2A65A' }}>Equities</span>
    </span>
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

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: '72px',
          background: '#1B365D',
          transition: 'box-shadow 200ms',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 2px 16px rgba(13,27,42,0.18)' : 'none',
        }}
      >
        <div className="wrap flex items-center justify-between h-full">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wider transition-colors duration-100"
                style={{ color: 'rgba(255,255,255,0.75)', letterSpacing: '0.06em', fontFamily: "'Nunito Sans',sans-serif" }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F2A65A')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.75)')}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+19125156060"
              className="hidden lg:block text-sm font-semibold transition-colors"
              style={{ color: 'rgba(255,255,255,0.70)', fontFamily: "'Nunito Sans',sans-serif" }}
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
                <span key={i} className="block w-6 h-0.5 bg-white transition-all duration-200" />
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

      <div style={{ height: '72px' }} aria-hidden="true" />
    </>
  )
}
