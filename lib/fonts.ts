import { Playfair_Display, Montserrat } from 'next/font/google'

// New design system fonts. Loaded once in app/layout.tsx and exposed as
// CSS variables so Tailwind's font-display / font-body classes resolve to
// the local-hosted (next/font) families instead of the legacy CDN ones.
export const fontDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

export const fontBody = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})
