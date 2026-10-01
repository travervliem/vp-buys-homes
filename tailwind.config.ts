import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx,css}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Existing brand tokens — kept identical so existing pages continue to render
        navy: {
          DEFAULT: '#1B365D',
          deep: '#0F2040',
          mid: '#264D80',
          900: '#0D1B2A',
        },
        amber: {
          DEFAULT: '#F2A65A',
          dark: '#D4862E',
        },
        brand: {
          DEFAULT: '#1B365D',
          light: '#264D80',
          accent: '#F2A65A',
        },
        light: '#EEF2F7',
        'border-ink': '#D1DCE8',
        // New design-system tokens
        paper: '#F5F2ED',
        hairline: '#E5E0D8',
        ink: {
          100: '#F0EDE6',
          400: '#8A8275',
          500: '#6B6558',
          700: '#3F3B33',
          900: '#0D1B2A',
        },
        success: {
          DEFAULT: '#3FCF8E',
          dark: '#15803D',
          bg: '#DCFCE7',
        },
        warning: { DEFAULT: '#B45309', bg: '#FEF3E2' },
        danger: { DEFAULT: '#B42318', bg: '#FEE4E2' },
      },
      fontFamily: {
        // New design fonts (loaded via next/font in app/layout.tsx). Existing
        // pages mostly use inline `fontFamily: "'Barlow…'"` declarations, so
        // repurposing these Tailwind keys does not affect them.
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        body: ['var(--font-body)', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        // Legacy aliases — kept for any code still referencing font-head/font-body-old
        head: ['"Barlow Semi Condensed"', '"Arial Narrow"', '"Helvetica Neue"', 'sans-serif'],
        'body-old': ['"Nunito Sans"', '"Helvetica Neue"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
        tight: '960px',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '14px',
        pill: '999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(13,27,42,0.06)',
        sm: '0 2px 6px rgba(13,27,42,0.06), 0 1px 2px rgba(13,27,42,0.04)',
        md: '0 4px 14px rgba(13,27,42,0.10), 0 2px 4px rgba(13,27,42,0.04)',
        lg: '0 10px 30px rgba(13,27,42,0.12), 0 4px 10px rgba(13,27,42,0.06)',
        xl: '0 24px 48px rgba(13,27,42,0.18), 0 10px 20px rgba(13,27,42,0.08)',
        amber: '0 6px 20px rgba(242,166,90,0.35)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-1': 'fadeUp 0.6s 0.08s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-2': 'fadeUp 0.6s 0.16s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-3': 'fadeUp 0.6s 0.24s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in':   'fadeIn 0.4s cubic-bezier(0.2,0,0,1) both',
        'scale-in':  'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both',
      },
    }
  },
  plugins: []
} satisfies Config
