'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingBag, User, Menu, X, LogIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/hooks/use-cart'
import { useAuth } from '@/hooks/use-auth'
import CartDrawer from '@/components/cart/cart-drawer'
import { useCollections } from '@/hooks/use-collections'

const LOGO_URL = 'https://fdkykcojwvimoabfaqjc.storage.supabase.co/storage/v1/object/public/product-user-files/default%2Fimage-2-01KPCFCBKXANQBG2WHER60MHYV.webp'

const navLinks = [
  { label: 'All Rituals', href: '/products' },
  { label: 'Collections', href: '/collections' },
  { label: 'Our Story', href: '/about' },
]

export default function Header() {
  const { itemCount } = useCart()
  const { isLoggedIn } = useAuth()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { data: collections } = useCollections()

  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const mobileMenuCloseRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) mobileMenuCloseRef.current?.focus()
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (!isMobileMenuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  const handleMobileMenuKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !mobileMenuRef.current) return
    const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus()
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-500 ${
          isScrolled
            ? 'border-b border-gold-DEFAULT/10'
            : 'border-b border-white/5'
        }`}
        style={{
          background: isScrolled
            ? 'rgba(10,10,10,0.95)'
            : 'rgba(10,10,10,0.7)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Top gold accent line */}
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), rgba(0,229,192,0.3), transparent)' }} />

        <div className="container-custom">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -ml-2 lg:hidden text-white/70 hover:text-white transition-colors"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center group flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative"
                style={{
                  filter: 'drop-shadow(0 0 12px rgba(212,175,55,0.35)) drop-shadow(0 0 4px rgba(0,229,192,0.15))',
                }}
              >
                <Image
                  src={LOGO_URL}
                  alt="Velour Noire"
                  width={110}
                  height={52}
                  className="object-contain"
                  style={{ maxHeight: '52px', width: 'auto' }}
                  priority
                  unoptimized
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs tracking-widest uppercase font-semibold text-white/60 hover:text-white transition-colors duration-300 relative group"
                  prefetch={true}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #00E5C0)' }} />
                </Link>
              ))}
              {collections?.slice(0, 2).map((collection: any) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.handle}`}
                  className="text-xs tracking-widest uppercase font-semibold text-white/60 hover:text-white transition-colors duration-300 relative group"
                  prefetch={true}
                >
                  {collection.title}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-400"
                    style={{ background: 'linear-gradient(90deg, #D4AF37, #00E5C0)' }} />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Link
                href="/search"
                className="p-2.5 text-white/60 hover:text-white transition-colors"
                aria-label="Search"
              >
                <Search className="h-4.5 w-4.5" strokeWidth={1.5} />
              </Link>
              <Link
                href={isLoggedIn ? '/account' : '/auth/login'}
                className="p-2.5 text-white/60 hover:text-white transition-colors hidden sm:block"
                aria-label={isLoggedIn ? 'Account' : 'Sign in'}
              >
                {isLoggedIn ? (
                  <User className="h-4.5 w-4.5" strokeWidth={1.5} />
                ) : (
                  <LogIn className="h-4.5 w-4.5" strokeWidth={1.5} />
                )}
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-white/60 hover:text-white transition-colors ml-1"
                aria-label="Shopping bag"
              >
                <ShoppingBag className="h-4.5 w-4.5" strokeWidth={1.5} />
                <AnimatePresence>
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-noir-black"
                      style={{ background: 'linear-gradient(135deg, #D4AF37, #9A7E28)' }}
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              onKeyDown={handleMobileMenuKeyDown}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute inset-y-0 left-0 w-80 max-w-[85vw]"
              style={{
                background: 'linear-gradient(135deg, #111111, #1A1018)',
                borderRight: '1px solid rgba(212,175,55,0.15)',
              }}
            >
              {/* Gold top line */}
              <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />

              <div className="flex items-center justify-between p-5 border-b border-white/5">
                <div className="flex items-center">
                  <Image
                    src={LOGO_URL}
                    alt="Velour Noire"
                    width={90}
                    height={42}
                    className="object-contain"
                    style={{ maxHeight: '42px', width: 'auto', filter: 'drop-shadow(0 0 8px rgba(212,175,55,0.3))' }}
                    unoptimized
                  />
                </div>
                <button
                  ref={mobileMenuCloseRef}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white/50 hover:text-white transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="p-5 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors"
                      prefetch={true}
                    >
                      {link.label}
                      <ArrowRightSmall />
                    </Link>
                  </motion.div>
                ))}
                {collections?.map((collection: any, i: number) => (
                  <motion.div
                    key={collection.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (navLinks.length + i) * 0.05 + 0.1 }}
                  >
                    <Link
                      href={`/collections/${collection.handle}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between py-3.5 text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors"
                      prefetch={true}
                    >
                      {collection.title}
                      <ArrowRightSmall />
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-6 space-y-2">
                  <Link
                    href={isLoggedIn ? '/account' : '/auth/login'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    {isLoggedIn ? '→ My Account' : '→ Sign In'}
                  </Link>
                  <Link
                    href="/search"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2.5 text-sm text-white/40 hover:text-white/70 transition-colors"
                  >
                    → Search Rituals
                  </Link>
                </div>
              </nav>

              {/* Bottom branding */}
              <div className="absolute bottom-6 left-5 right-5">
                <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }} />
                <p className="text-xs text-white/20 tracking-widest text-center">LUXURY DARK RITUAL CARE</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

function ArrowRightSmall() {
  return (
    <svg className="h-3 w-3 text-gold-DEFAULT/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}
