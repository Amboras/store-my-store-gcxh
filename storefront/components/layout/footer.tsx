'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Play } from 'lucide-react'

// X (formerly Twitter) icon as lucide-react doesn't export it
function XIcon({ className, strokeWidth }: { className?: string; strokeWidth?: number }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const LOGO_URL = 'https://fdkykcojwvimoabfaqjc.storage.supabase.co/storage/v1/object/public/product-user-files/default%2Fimage-2-01KPCFCBKXANQBG2WHER60MHYV.webp'

const footerLinks = {
  rituals: [
    { label: 'All Products', href: '/products' },
    { label: 'LED Face Masks', href: '/products?q=led' },
    { label: 'Gua Sha Tools', href: '/products?q=gua+sha' },
    { label: 'Hair Growth Oils', href: '/products?q=hair' },
    { label: 'Bundle Kits', href: '/products?q=bundle' },
  ],
  support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping Info', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Returns', href: '/shipping' },
  ],
}

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram', color: '#D4AF37' },
  { icon: XIcon, href: '#', label: 'X / Twitter', color: '#00E5C0' },
  { icon: Play, href: '#', label: 'TikTok', color: '#8B3A5A' },
]

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'About', href: '/about' },
  ]
  if (policies?.privacy_policy) companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  if (policies?.terms_of_service) companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  if (policies?.refund_policy) companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  if (policies?.cookie_policy) companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })

  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0D0811)' }}>
      {/* Top border glow */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.4), rgba(0,229,192,0.3), transparent)' }} />

      {/* Background orbs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(74,28,47,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-0 right-0 w-60 h-60 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(0,229,192,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-custom py-16 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex mb-6 group">
              <Image
                src={LOGO_URL}
                alt="Velour Noire"
                width={130}
                height={62}
                className="object-contain transition-all duration-300"
                style={{
                  maxHeight: '62px',
                  width: 'auto',
                  filter: 'drop-shadow(0 0 14px rgba(212,175,55,0.3)) drop-shadow(0 0 5px rgba(0,229,192,0.1))',
                }}
                unoptimized
              />
            </Link>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-8">
              Premium dark luxury personal care for those who live at model level. 
              Your daily glow-up, elevated.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mb-8">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}50`
                    ;(e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${color}20`
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)'
                    ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                  }}
                >
                  <Icon className="h-4 w-4 text-white/50" strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* Tagline pill */}
            <div className="inline-flex items-center gap-2 text-xs px-4 py-2 rounded-full"
              style={{
                background: 'rgba(212,175,55,0.06)',
                border: '1px solid rgba(212,175,55,0.15)',
                color: 'rgba(212,175,55,0.7)',
              }}>
              <span>✦</span>
              <span className="tracking-widest uppercase">Luxury Dark Ritual Care</span>
              <span>✦</span>
            </div>
          </div>

          {/* Rituals */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-luxury text-gold-DEFAULT mb-5">
              Rituals
            </h3>
            <ul className="space-y-3">
              {footerLinks.rituals.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 group-hover:w-3 transition-all duration-300 flex-shrink-0"
                      style={{ background: '#00E5C0' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-luxury text-gold-DEFAULT mb-5">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 group-hover:w-3 transition-all duration-300 flex-shrink-0"
                      style={{ background: '#00E5C0' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-luxury text-gold-DEFAULT mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 group-hover:w-3 transition-all duration-300 flex-shrink-0"
                      style={{ background: '#00E5C0' }} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20 tracking-wide">
              &copy; {new Date().getFullYear()} Velour Noire. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  clearConsent()
                  window.dispatchEvent(new Event('manage-cookies'))
                }}
                className="text-xs text-white/20 hover:text-white/50 transition-colors"
              >
                Manage Cookies
              </button>
              <span className="text-xs text-white/10 tracking-widest uppercase">Powered by Amboras</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
