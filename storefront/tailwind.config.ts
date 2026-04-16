import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        border: 'hsl(var(--border))',
        ring: 'hsl(var(--ring))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        // Velour Noire brand palette
        noir: {
          black: '#0A0A0A',
          dark: '#111111',
          card: '#161616',
          border: '#2A2A2A',
        },
        burgundy: {
          DEFAULT: '#4A1C2F',
          light: '#6B2D47',
          dark: '#2E1020',
          glow: '#8B3A5A',
        },
        cyan: {
          neon: '#00E5C0',
          glow: '#00C4A7',
          dim: '#007A6B',
        },
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CC6A',
          dim: '#9A7E28',
          pale: '#F5E6A3',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'serif'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['6.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'h1': ['3.25rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'h3': ['1.75rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
      },
      maxWidth: {
        'content': '1320px',
      },
      spacing: {
        'section': '7rem',
        'section-sm': '4rem',
      },
      backgroundImage: {
        'velvet-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A0A14 40%, #0A0A0A 100%)',
        'hero-gradient': 'linear-gradient(160deg, #0A0A0A 0%, #1E0A18 35%, #0A0A0A 70%, #070D0C 100%)',
        'card-gradient': 'linear-gradient(145deg, #161616 0%, #1A1018 100%)',
        'burgundy-gradient': 'linear-gradient(135deg, #4A1C2F 0%, #2E1020 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #9A7E28 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #00E5C0 0%, #007A6B 100%)',
        'glow-radial': 'radial-gradient(ellipse at center, rgba(0,229,192,0.08) 0%, transparent 70%)',
        'burgundy-radial': 'radial-gradient(ellipse at center, rgba(74,28,47,0.3) 0%, transparent 70%)',
        'gold-radial': 'radial-gradient(ellipse at center, rgba(212,175,55,0.06) 0%, transparent 70%)',
      },
      boxShadow: {
        'cyan-glow': '0 0 30px rgba(0,229,192,0.25), 0 0 60px rgba(0,229,192,0.08)',
        'cyan-sm': '0 0 15px rgba(0,229,192,0.2)',
        'gold-glow': '0 0 30px rgba(212,175,55,0.3), 0 0 60px rgba(212,175,55,0.1)',
        'gold-sm': '0 0 15px rgba(212,175,55,0.2)',
        'burgundy-glow': '0 0 40px rgba(74,28,47,0.6)',
        'card': '0 4px 24px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.8)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.8), 0 0 20px rgba(0,229,192,0.08)',
        'luxury': '0 20px 60px rgba(0,0,0,0.9), 0 0 40px rgba(212,175,55,0.05)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-slow': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(0,229,192,0.3)' },
          '50%': { borderColor: 'rgba(0,229,192,0.8)' },
        },
        'text-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        'particle-rise': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0)' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(-60px) scale(0.5)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-slow': 'fade-in-slow 1.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-out-right': 'slide-out-right 0.3s ease-out',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
        'particle-rise': 'particle-rise 3s ease-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
