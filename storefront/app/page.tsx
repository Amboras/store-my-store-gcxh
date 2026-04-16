'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, Star, Zap, Shield, RefreshCw, Truck } from 'lucide-react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

// Floating particles component
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => i)
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 3 === 0 ? '#00E5C0' : i % 3 === 1 ? '#D4AF37' : '#8B3A5A',
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
}

// Glowing orb
function GlowOrb({ color, size, x, y, blur }: { color: string; size: number; x: string; y: string; blur: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${blur}px)`,
        opacity: 0.15,
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.2, 0.12] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

// Section heading with reveal animation
function SectionHeading({ label, title, subtitle, accent = 'gold' }: {
  label: string
  title: React.ReactNode
  subtitle?: string
  accent?: 'gold' | 'cyan'
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="text-center mb-16"
    >
      <span className={`inline-block text-xs tracking-luxury uppercase mb-4 font-semibold ${accent === 'gold' ? 'text-gold-DEFAULT' : 'text-cyan-neon'}`}>
        ✦ {label} ✦
      </span>
      <h2 className="font-heading text-h2 font-bold text-white">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">{subtitle}</p>}
    </motion.div>
  )
}

const ritualSteps = [
  { step: '01', title: 'Cleanse', desc: 'Begin with our sea salt glow scrub to purify and polish.', icon: '🌊', color: '#00E5C0' },
  { step: '02', title: 'Lift & Tone', desc: 'EMS jaw lifter sculpts your jawline with gentle microcurrents.', icon: '⚡', color: '#D4AF37' },
  { step: '03', title: 'Illuminate', desc: 'LED face mask floods skin with light therapy for glass skin.', icon: '💡', color: '#8B3A5A' },
  { step: '04', title: 'Restore', desc: 'Gua sha and ice roller seal moisture, reduce puffiness.', icon: '🧊', color: '#00E5C0' },
]

const testimonials = [
  {
    name: 'Amara V.',
    title: 'Model & Content Creator',
    text: 'Velour Noire completely transformed my morning routine. The LED mask gave me glass skin in 3 weeks.',
    stars: 5,
  },
  {
    name: 'Malik D.',
    title: 'Grooming Enthusiast',
    text: 'The EMS jaw lifter is unreal. My jawline has never looked sharper. Worth every penny.',
    stars: 5,
  },
  {
    name: 'Sofia L.',
    title: 'Luxury Beauty Editor',
    text: 'This is what high-end French skincare meets modern tech feels like. Obsessed with the gua sha ritual.',
    stars: 5,
  },
]

const featuredProducts = [
  {
    name: 'LED Photon Face Mask',
    subtitle: 'Light Therapy System',
    price: '$189',
    tag: 'BESTSELLER',
    tagColor: '#D4AF37',
    glow: '#00E5C0',
    emoji: '💡',
    category: 'Face Tech',
    benefit: '7-color LED therapy for glass skin',
  },
  {
    name: 'EMS Jaw & Neck Lifter',
    subtitle: 'Microcurrent Sculptor',
    price: '$149',
    tag: 'NEW',
    tagColor: '#00E5C0',
    glow: '#D4AF37',
    emoji: '⚡',
    category: 'Face Sculpting',
    benefit: 'Define jawline & lift neck skin',
  },
  {
    name: 'Rose Quartz Gua Sha',
    subtitle: 'Velour Edition',
    price: '$68',
    tag: 'RITUAL',
    tagColor: '#8B3A5A',
    glow: '#8B3A5A',
    emoji: '🌸',
    category: 'Tools',
    benefit: 'Lymphatic drainage & facial sculpt',
  },
  {
    name: 'Rosemary Growth Oil',
    subtitle: 'Hair Elixir',
    price: '$78',
    tag: 'GLOW-UP',
    tagColor: '#D4AF37',
    glow: '#00E5C0',
    emoji: '🌿',
    category: 'Hair',
    benefit: 'Stimulates growth & restores shine',
  },
]

const bundleData = {
  name: 'The Velour Ritual — Full Glow-Up Bundle',
  items: ['LED Photon Mask', 'EMS Jaw Lifter', 'Rose Quartz Gua Sha', 'Ice Roller', 'Sea Salt Glow Scrub'],
  originalPrice: '$534',
  bundlePrice: '$379',
  savings: 'Save $155',
}

export default function HomePage() {
  const { data: collections, isLoading } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-noir-black">
      {/* ═══════════════════════════════════════════════════
          CINEMATIC HERO
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Deep velvet background */}
        <div className="absolute inset-0 bg-hero-gradient" />

        {/* Glowing orbs */}
        <GlowOrb color="#00E5C0" size={600} x="-10%" y="20%" blur={120} />
        <GlowOrb color="#4A1C2F" size={500} x="60%" y="-10%" blur={100} />
        <GlowOrb color="#D4AF37" size={400} x="80%" y="60%" blur={100} />

        {/* Particles */}
        <Particles />

        {/* Decorative vertical lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[10%] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.2), transparent)' }} />
          <div className="absolute right-[10%] top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,229,192,0.2), transparent)' }} />
        </div>

        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute left-0 right-0 h-[1px]"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,192,0.15), transparent)' }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <div className="container-custom relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left — Text */}
            <div className="space-y-8">
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #00E5C0, transparent)' }} />
                <span className="text-xs tracking-luxury uppercase font-semibold text-cyan-neon">
                  Luxury Dark Ritual Care
                </span>
              </motion.div>

              {/* Main headline */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
              >
                <h1 className="font-heading text-display font-black leading-[1.02] text-balance">
                  <span className="block text-white">Your</span>
                  <span className="block text-gold-gradient italic">Glow-Up</span>
                  <span className="block text-white">Awaits.</span>
                </h1>
              </motion.div>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              >
                Premium LED therapy, microcurrent sculpting, gua sha rituals — 
                curated for the <em className="text-white not-italic font-medium">model-level glow</em> you deserve.
              </motion.p>

              {/* Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {['LED Therapy', 'EMS Sculpting', 'Gua Sha', 'Hair Growth'].map((badge) => (
                  <span key={badge} className="text-xs px-3 py-1.5 rounded-full font-medium tracking-wide"
                    style={{
                      background: 'rgba(0,229,192,0.08)',
                      border: '1px solid rgba(0,229,192,0.2)',
                      color: '#00E5C0',
                    }}>
                    {badge}
                  </span>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-4 pt-2"
              >
                <Link href="/products" className="btn-velour inline-flex items-center gap-2.5 px-8 py-4 text-sm rounded-sm">
                  Begin Your Ritual
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/collections" className="btn-cyan inline-flex items-center gap-2.5 px-8 py-4 text-sm rounded-sm">
                  Explore Collections
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex gap-8 pt-4 border-t border-white/5"
              >
                {[['50K+', 'Glowing Clients'], ['7', 'LED Wavelengths'], ['100%', 'Natural Actives']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold text-gold-DEFAULT font-heading">{num}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — 3D Product Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotateY: -20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              style={{ y: heroY, opacity: heroOpacity }}
              className="relative flex items-center justify-center"
            >
              {/* Outer glow ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(ellipse, rgba(0,229,192,0.1) 0%, rgba(74,28,47,0.2) 50%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Main product display */}
              <motion.div
                className="relative z-10 rounded-2xl overflow-hidden"
                style={{
                  width: 420,
                  height: 520,
                  background: 'linear-gradient(145deg, #1A1018 0%, #0F1714 50%, #161616 100%)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 60px rgba(0,229,192,0.1), 0 0 100px rgba(74,28,47,0.3)',
                }}
                animate={{
                  rotateY: [-3, 3, -3],
                  rotateX: [2, -1, 2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Inner glow */}
                <div className="absolute inset-0"
                  style={{
                    background: 'radial-gradient(ellipse at 30% 30%, rgba(0,229,192,0.06) 0%, transparent 60%)',
                  }} />

                {/* Top bar */}
                <div className="relative z-10 p-6 border-b border-white/5 flex items-center justify-between">
                  <span className="text-xs tracking-luxury text-gold-DEFAULT uppercase font-semibold">Velour Noire</span>
                  <span className="text-xs text-cyan-neon tracking-wide">✦ Premium</span>
                </div>

                {/* Product visual */}
                <div className="relative flex-1 flex flex-col items-center justify-center p-8 h-80">
                  {/* 3D product emoji/icon */}
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{ y: [-8, 8, -8], rotateZ: [-2, 2, -2] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    💡
                  </motion.div>

                  {/* Radial glow under product */}
                  <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-40 h-16 rounded-full"
                    style={{
                      background: 'radial-gradient(ellipse, rgba(0,229,192,0.3) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                    }} />

                  <h3 className="font-heading text-xl font-bold text-white text-center">LED Photon Mask</h3>
                  <p className="text-cyan-neon text-sm mt-1 text-center">7-Color Light Therapy</p>
                </div>

                {/* Bottom price bar */}
                <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5"
                  style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(10px)' }}>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gold-DEFAULT font-heading">$189</span>
                    <Link href="/products"
                      className="text-xs px-4 py-2 rounded-sm font-semibold tracking-wide transition-all"
                      style={{
                        background: 'linear-gradient(135deg, #D4AF37, #9A7E28)',
                        color: '#0A0A0A',
                      }}>
                      Shop Now
                    </Link>
                  </div>
                </div>

                {/* Scan line on card */}
                <motion.div
                  className="absolute left-0 right-0 h-px pointer-events-none"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,192,0.4), transparent)' }}
                  animate={{ top: ['5%', '95%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                />
              </motion.div>

              {/* Floating mini cards */}
              <motion.div
                className="absolute -right-4 top-16 rounded-xl px-4 py-3 text-sm"
                style={{
                  background: 'rgba(22,22,22,0.9)',
                  border: '1px solid rgba(0,229,192,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(0,229,192,0.1)',
                }}
                animate={{ x: [0, 6, 0], y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="text-cyan-neon font-bold text-base">⚡ EMS</div>
                <div className="text-white/60 text-xs mt-0.5">Jaw Sculpting</div>
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-32 rounded-xl px-4 py-3 text-sm"
                style={{
                  background: 'rgba(22,22,22,0.9)',
                  border: '1px solid rgba(212,175,55,0.3)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 0 20px rgba(212,175,55,0.1)',
                }}
                animate={{ x: [0, -6, 0], y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              >
                <div className="text-gold-DEFAULT font-bold text-base">🌸 Gua Sha</div>
                <div className="text-white/60 text-xs mt-0.5">Velour Edition</div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32"
          style={{ background: 'linear-gradient(0deg, #0A0A0A, transparent)' }} />
      </section>

      {/* ═══════════════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════════════ */}
      <div className="relative py-6 overflow-hidden">
        <div className="divider-glow mb-6" />
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: 'Free Shipping', sub: 'Orders over R1,500', color: '#00E5C0' },
              { icon: RefreshCw, label: '30-Day Returns', sub: 'Hassle-free', color: '#D4AF37' },
              { icon: Shield, label: 'Clinically Tested', sub: 'Dermatologist approved', color: '#8B3A5A' },
              { icon: Zap, label: 'Fast Results', sub: 'Visible in 2 weeks', color: '#00E5C0' },
            ].map(({ icon: Icon, label, sub, color }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon className="h-4 w-4" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-muted-foreground">{sub}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-glow mt-6" />
      </div>

      {/* ═══════════════════════════════════════════════════
          FEATURED PRODUCTS
      ═══════════════════════════════════════════════════ */}
      <section className="py-section relative overflow-hidden">
        <GlowOrb color="#D4AF37" size={400} x="70%" y="20%" blur={120} />

        <div className="container-custom relative z-10">
          <SectionHeading
            label="The Collection"
            title={<>Velour <span className="text-gold-gradient italic">Signature</span> Picks</>}
            subtitle="Curated tools and elixirs for your daily model-level ritual. Each piece designed to transform."
            accent="gold"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
              >
                <Link href="/products" className="group block card-3d">
                  <div className="rounded-xl overflow-hidden transition-all duration-500"
                    style={{
                      background: 'linear-gradient(145deg, #161616, #1A1018)',
                      border: `1px solid rgba(${product.glow === '#00E5C0' ? '0,229,192' : product.glow === '#D4AF37' ? '212,175,55' : '139,58,90'},0.15)`,
                      boxShadow: '0 4px 24px rgba(0,0,0,0.6)',
                    }}>
                    {/* Product image area */}
                    <div className="relative h-52 flex items-center justify-center overflow-hidden"
                      style={{
                        background: `radial-gradient(ellipse at center, ${product.glow}10 0%, transparent 70%)`,
                      }}>
                      {/* Tag */}
                      <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: `${product.tagColor}20`, color: product.tagColor, border: `1px solid ${product.tagColor}40` }}>
                        {product.tag}
                      </div>

                      {/* Product emoji */}
                      <motion.div
                        className="text-6xl"
                        animate={{ y: [-4, 4, -4] }}
                        transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                      >
                        {product.emoji}
                      </motion.div>

                      {/* Glow under product */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 rounded-full"
                        style={{ background: `radial-gradient(ellipse, ${product.glow}40, transparent)`, filter: 'blur(10px)' }} />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                        style={{ background: 'rgba(0,0,0,0.5)' }}>
                        <span className="text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full">
                          View Product
                        </span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="p-4 border-t border-white/5">
                      <div className="text-xs tracking-widest uppercase mb-1" style={{ color: product.glow }}>
                        {product.category}
                      </div>
                      <h3 className="font-heading font-bold text-white text-base leading-tight">{product.name}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{product.benefit}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold font-heading text-gold-DEFAULT">{product.price}</span>
                        <div className="flex items-center gap-1">
                          {[1,2,3,4,5].map(s => (
                            <Star key={s} className="h-3 w-3 fill-gold-DEFAULT text-gold-DEFAULT" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-velour inline-flex items-center gap-3 px-10 py-4 text-sm rounded-sm">
              <Sparkles className="h-4 w-4" />
              Explore Full Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          THE VELOUR RITUAL (4-step process)
      ═══════════════════════════════════════════════════ */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0F0813, #0A0A0A)' }} />
        <GlowOrb color="#4A1C2F" size={600} x="20%" y="30%" blur={150} />
        <GlowOrb color="#00E5C0" size={300} x="70%" y="60%" blur={100} />

        <div className="container-custom relative z-10">
          <SectionHeading
            label="The Daily Ritual"
            title={<>The Velour <span className="text-cyan-gradient">Ritual</span></>}
            subtitle="Four steps to model-level skin every single day. Master the glow-up."
            accent="cyan"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ritualSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.23, 1, 0.32, 1] }}
                className="relative group"
              >
                {/* Connector line */}
                {i < ritualSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(100%+8px)] right-0 h-px z-20"
                    style={{ width: 'calc(100% - 16px)', background: `linear-gradient(90deg, ${step.color}40, transparent)` }} />
                )}

                <div className="rounded-xl p-6 h-full transition-all duration-500 group-hover:transform group-hover:translateY-[-4px]"
                  style={{
                    background: 'linear-gradient(145deg, #161616, #1A1018)',
                    border: `1px solid ${step.color}25`,
                    boxShadow: `0 4px 20px rgba(0,0,0,0.5)`,
                  }}>
                  {/* Step number */}
                  <div className="text-xs font-bold tracking-luxury mb-4" style={{ color: step.color }}>
                    STEP {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Glow dot */}
                  <div className="w-1.5 h-1.5 rounded-full mb-4"
                    style={{ background: step.color, boxShadow: `0 0 8px ${step.color}` }} />

                  <h3 className="font-heading text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COLLECTIONS (from store)
      ═══════════════════════════════════════════════════ */}
      {collections && collections.length > 0 && (
        <section className="py-section">
          <div className="container-custom">
            <SectionHeading
              label="By Category"
              title={<>Shop by <span className="text-gold-gradient italic">Collection</span></>}
              subtitle="Explore our curated collections tailored to every glow-up goal."
              accent="gold"
            />
          </div>
          {collections.map((collection: any, index: number) => (
            <CollectionSection
              key={collection.id}
              collection={collection}
              alternate={index % 2 === 1}
            />
          ))}
        </section>
      )}

      {/* ═══════════════════════════════════════════════════
          VELOUR RITUAL BUNDLE
      ═══════════════════════════════════════════════════ */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F0813 0%, #0A0A0A 50%, #0D0F0E 100%)' }} />
        <GlowOrb color="#D4AF37" size={500} x="50%" y="50%" blur={150} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #1A1018 0%, #161616 50%, #1A1A12 100%)',
              border: '1px solid rgba(212,175,55,0.25)',
              boxShadow: '0 20px 80px rgba(0,0,0,0.8), 0 0 60px rgba(212,175,55,0.05)',
            }}
          >
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-DEFAULT/40" />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-DEFAULT/40" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-DEFAULT/40" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-DEFAULT/40" />

            {/* Inner glow */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 70%)' }} />

            <span className="inline-block text-xs tracking-luxury uppercase text-gold-DEFAULT font-semibold mb-6">
              ✦ Limited Offer — Velour Bundle ✦
            </span>

            <h2 className="font-heading text-h2 md:text-display font-black text-white mb-4 text-balance">
              The Complete<br /><span className="text-gold-gradient italic">Glow-Up Kit</span>
            </h2>

            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Everything you need for your full daily ritual — bundled and priced for the devoted.
            </p>

            {/* Bundle items */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {bundleData.items.map((item) => (
                <span key={item} className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{
                    background: 'rgba(212,175,55,0.08)',
                    border: '1px solid rgba(212,175,55,0.2)',
                    color: 'rgba(212,175,55,0.9)',
                  }}>
                  {item}
                </span>
              ))}
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <span className="text-muted-foreground line-through text-xl">{bundleData.originalPrice}</span>
              <span className="text-4xl font-black font-heading text-gold-DEFAULT">{bundleData.bundlePrice}</span>
              <span className="text-sm px-3 py-1 rounded-full font-bold text-cyan-neon"
                style={{ background: 'rgba(0,229,192,0.1)', border: '1px solid rgba(0,229,192,0.3)' }}>
                {bundleData.savings}
              </span>
            </div>

            <Link href="/products" className="btn-velour inline-flex items-center gap-3 px-12 py-5 text-sm rounded-sm">
              <Sparkles className="h-4 w-4" />
              Get The Bundle
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-section relative overflow-hidden">
        <GlowOrb color="#4A1C2F" size={400} x="20%" y="50%" blur={100} />

        <div className="container-custom relative z-10">
          <SectionHeading
            label="Velour Community"
            title={<>Real Results, <span className="text-cyan-gradient">Real Glow</span></>}
            subtitle="Join 50,000+ who've elevated their daily ritual with Velour Noire."
            accent="cyan"
          />

          {/* Testimonial slider */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl p-10 text-center relative"
              style={{
                background: 'linear-gradient(145deg, #161616, #1A1018)',
                border: '1px solid rgba(0,229,192,0.15)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,229,192,0.05)',
              }}
            >
              {/* Quote mark */}
              <div className="text-6xl text-gold-DEFAULT/20 font-heading leading-none mb-4">"</div>

              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => (
                  <Star key={s} className="h-4 w-4 fill-gold-DEFAULT text-gold-DEFAULT" />
                ))}
              </div>

              <p className="text-white/90 text-lg leading-relaxed mb-8 italic font-heading">
                "{testimonials[activeTestimonial].text}"
              </p>

              <div>
                <div className="font-bold text-gold-DEFAULT font-heading">{testimonials[activeTestimonial].name}</div>
                <div className="text-muted-foreground text-sm mt-1">{testimonials[activeTestimonial].title}</div>
              </div>
            </motion.div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === activeTestimonial ? 32 : 8,
                    background: i === activeTestimonial ? '#D4AF37' : 'rgba(212,175,55,0.25)',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          NEWSLETTER
      ═══════════════════════════════════════════════════ */}
      <section className="py-section relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0F0813)' }} />
        <div className="absolute inset-0 noise-texture" />

        <div className="container-custom relative z-10 max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs tracking-luxury uppercase text-gold-DEFAULT font-semibold mb-4 block">
              ✦ Inner Circle ✦
            </span>
            <h2 className="font-heading text-h2 font-black text-white mb-4">
              Enter the <span className="text-gold-gradient italic">Noir Circle</span>
            </h2>
            <p className="text-muted-foreground mb-10 text-base leading-relaxed">
              Early access to new rituals, exclusive bundles, and glow-up guides.
              No noise — only luxury.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => {
                e.preventDefault()
                setNewsletterEmail('')
              }}
            >
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 rounded-sm focus:outline-none focus:border-gold-DEFAULT/50 transition-colors"
              />
              <button type="submit" className="btn-velour px-8 py-4 text-sm rounded-sm whitespace-nowrap">
                Join the Circle
              </button>
            </form>

            <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime. Pure luxury only.</p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
