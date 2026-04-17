'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles, Star, Zap, Shield, RefreshCw, Truck } from 'lucide-react'
import CollectionSection from '@/components/marketing/collection-section'
import { useCollections } from '@/hooks/use-collections'

const LOGO_URL = 'https://fdkykcojwvimoabfaqjc.storage.supabase.co/storage/v1/object/public/product-user-files/default%2Fimage-2-01KPCFCBKXANQBG2WHER60MHYV.webp'

const ritualSteps = [
  { step: '01', title: 'Cleanse', desc: 'Begin with our sea salt glow scrub to purify and polish.', icon: '🌊', color: '#00E5C0' },
  { step: '02', title: 'Lift & Tone', desc: 'EMS jaw lifter sculpts your jawline with gentle microcurrents.', icon: '⚡', color: '#D4AF37' },
  { step: '03', title: 'Illuminate', desc: 'LED face mask floods skin with light therapy for glass skin.', icon: '💡', color: '#8B3A5A' },
  { step: '04', title: 'Restore', desc: 'Gua sha and ice roller seal moisture, reduce puffiness.', icon: '🧊', color: '#00E5C0' },
]

const testimonials = [
  { name: 'Amara V.', title: 'Model & Content Creator', text: 'Velour Noire completely transformed my morning routine. The LED mask gave me glass skin in 3 weeks.', stars: 5 },
  { name: 'Malik D.', title: 'Grooming Enthusiast', text: 'The EMS jaw lifter is unreal. My jawline has never looked sharper. Worth every penny.', stars: 5 },
  { name: 'Sofia L.', title: 'Luxury Beauty Editor', text: 'This is what high-end French skincare meets modern tech feels like. Obsessed with the gua sha ritual.', stars: 5 },
]

const featuredProducts = [
  { name: 'LED Photon Face Mask', subtitle: 'Light Therapy System', price: 'R3,399', tag: 'BESTSELLER', tagColor: '#D4AF37', glow: '#00E5C0', emoji: '💡', category: 'Face Tech', benefit: '7-color LED therapy for glass skin' },
  { name: 'EMS Jaw & Neck Lifter', subtitle: 'Microcurrent Sculptor', price: 'R2,699', tag: 'NEW', tagColor: '#00E5C0', glow: '#D4AF37', emoji: '⚡', category: 'Face Sculpting', benefit: 'Define jawline & lift neck skin' },
  { name: 'Rose Quartz Gua Sha', subtitle: 'Velour Edition', price: 'R1,249', tag: 'RITUAL', tagColor: '#8B3A5A', glow: '#8B3A5A', emoji: '🌸', category: 'Tools', benefit: 'Lymphatic drainage & facial sculpt' },
  { name: 'Rosemary Growth Oil', subtitle: 'Hair Elixir', price: 'R1,399', tag: 'GLOW-UP', tagColor: '#D4AF37', glow: '#00E5C0', emoji: '🌿', category: 'Hair', benefit: 'Stimulates growth & restores shine' },
]

const bundleItems = ['LED Photon Mask', 'EMS Jaw Lifter', 'Rose Quartz Gua Sha', 'Ice Roller', 'Sea Salt Glow Scrub']

export default function HomePage() {
  const { data: collections } = useCollections()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((p) => (p + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-noir-black">

      {/* ═══════════════════════════════════════════
          CINEMATIC HERO
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Deep velvet background */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(74,28,47,0.45) 0%, #0A0A0A 60%), radial-gradient(ellipse at 80% 20%, rgba(0,229,192,0.06) 0%, transparent 50%)' }} />

        {/* Animated glow orbs */}
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 600, height: 600, left: '-10%', top: '20%', background: 'radial-gradient(ellipse, rgba(0,229,192,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 500, height: 500, right: '-5%', top: '-10%', background: 'radial-gradient(ellipse, rgba(74,28,47,0.3) 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '1s' }} />
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 400, height: 400, right: '5%', bottom: '10%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.08) 0%, transparent 70%)', filter: 'blur(80px)', animationDelay: '2s' }} />

        {/* Vertical accent lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-[10%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.2), transparent)' }} />
          <div className="absolute right-[10%] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(180deg, transparent, rgba(0,229,192,0.2), transparent)' }} />
        </div>

        {/* Scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute left-0 right-0 h-px scan-line" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,229,192,0.15), transparent)' }} />
        </div>

        <div className="container-custom relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-px w-12" style={{ background: 'linear-gradient(90deg, #00E5C0, transparent)' }} />
                <span className="text-xs tracking-widest uppercase font-semibold" style={{ color: '#00E5C0' }}>
                  Luxury Dark Ritual Care
                </span>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <h1 className="font-heading font-black leading-[1.02]" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)' }}>
                  <span className="block text-white">Your</span>
                  <span className="block italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D875, #9A7E28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Glow-Up</span>
                  <span className="block text-white">Awaits.</span>
                </h1>
              </div>

              <p className="text-lg text-white/50 max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                Premium LED therapy, microcurrent sculpting, gua sha rituals —
                curated for the <em className="text-white not-italic font-medium">model-level glow</em> you deserve.
              </p>

              <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                {['LED Therapy', 'EMS Sculpting', 'Gua Sha', 'Hair Growth'].map((badge) => (
                  <span key={badge} className="text-xs px-3 py-1.5 rounded-full font-medium tracking-wide"
                    style={{ background: 'rgba(0,229,192,0.08)', border: '1px solid rgba(0,229,192,0.2)', color: '#00E5C0' }}>
                    {badge}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                <Link href="/products" className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:gap-4"
                  style={{ background: 'linear-gradient(135deg, #4A1C2F, #6B2943)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', boxShadow: '0 0 30px rgba(74,28,47,0.5)' }}>
                  Begin Your Ritual <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/collections" className="inline-flex items-center gap-2.5 px-8 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
                  style={{ background: 'rgba(0,229,192,0.08)', border: '1px solid rgba(0,229,192,0.3)', color: '#00E5C0' }}>
                  Explore Collections
                </Link>
              </div>

              <div className="flex gap-8 pt-4 border-t border-white/5 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                {[['50K+', 'Glowing Clients'], ['7', 'LED Wavelengths'], ['100%', 'Natural Actives']].map(([num, label]) => (
                  <div key={label}>
                    <div className="text-xl font-bold font-heading" style={{ color: '#D4AF37' }}>{num}</div>
                    <div className="text-xs text-white/40 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Cinematic Logo */}
            <div className="relative flex items-center justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {/* Pulsing ambient glow */}
              <div className="absolute rounded-full pointer-events-none animate-pulse"
                style={{ width: 520, height: 520, background: 'radial-gradient(ellipse, rgba(74,28,47,0.55) 0%, rgba(0,229,192,0.06) 50%, transparent 75%)', filter: 'blur(60px)' }} />

              {/* Rotating outer ring */}
              <div className="absolute rounded-full border pointer-events-none" style={{ width: 440, height: 440, borderColor: 'rgba(212,175,55,0.12)', animation: 'spin 40s linear infinite' }} />
              {/* Counter-rotating inner ring */}
              <div className="absolute rounded-full border border-dashed pointer-events-none" style={{ width: 380, height: 380, borderColor: 'rgba(0,229,192,0.08)', animation: 'spin 28s linear infinite reverse' }} />

              {/* Logo — floating animation */}
              <div className="relative z-10 float-animation"
                style={{ filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.5)) drop-shadow(0 0 80px rgba(74,28,47,0.8)) drop-shadow(0 0 20px rgba(0,229,192,0.15))' }}>
                <Image src={LOGO_URL} alt="Velour Noire" width={380} height={480}
                  className="object-contain" style={{ maxHeight: '480px', width: 'auto' }} priority unoptimized />
              </div>

              {/* Floating badge — EMS */}
              <div className="absolute -right-2 top-20 rounded-xl px-4 py-3 badge-float"
                style={{ background: 'rgba(10,10,10,0.92)', border: '1px solid rgba(0,229,192,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 0 25px rgba(0,229,192,0.12)' }}>
                <div className="font-bold text-sm" style={{ color: '#00E5C0' }}>⚡ EMS Lift</div>
                <div className="text-white/50 text-xs mt-0.5">Jaw Sculpting</div>
              </div>

              {/* Floating badge — Gua Sha */}
              <div className="absolute -left-2 bottom-28 rounded-xl px-4 py-3 badge-float-alt"
                style={{ background: 'rgba(10,10,10,0.92)', border: '1px solid rgba(212,175,55,0.35)', backdropFilter: 'blur(12px)', boxShadow: '0 0 25px rgba(212,175,55,0.12)', animationDelay: '1s' }}>
                <div className="font-bold text-sm" style={{ color: '#D4AF37' }}>🌸 Gua Sha</div>
                <div className="text-white/50 text-xs mt-0.5">Velour Edition</div>
              </div>

              {/* Floating badge — LED */}
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 rounded-xl px-5 py-3 badge-float"
                style={{ background: 'rgba(10,10,10,0.92)', border: '1px solid rgba(139,58,90,0.4)', backdropFilter: 'blur(12px)', boxShadow: '0 0 25px rgba(139,58,90,0.15)', animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="font-bold text-sm" style={{ color: '#8B3A5A' }}>💡 LED Photon Mask</div>
                  <div className="text-xs font-bold mt-0.5" style={{ color: '#D4AF37' }}>From R3,399</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(0deg, #0A0A0A, transparent)' }} />
      </section>

      {/* ═══════════════════════════════════════════
          TRUST BAR
      ═══════════════════════════════════════════ */}
      <div className="relative py-6 overflow-hidden">
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), rgba(0,229,192,0.2), transparent)' }} />
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Truck, label: 'Free Shipping', sub: 'Orders over R1,500', color: '#00E5C0' },
              { icon: RefreshCw, label: '30-Day Returns', sub: 'Hassle-free', color: '#D4AF37' },
              { icon: Shield, label: 'Clinically Tested', sub: 'Dermatologist approved', color: '#8B3A5A' },
              { icon: Zap, label: 'Fast Results', sub: 'Visible in 2 weeks', color: '#00E5C0' },
            ].map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon className="h-4 w-4" style={{ color }} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{label}</div>
                  <div className="text-xs text-white/40">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), rgba(0,229,192,0.2), transparent)' }} />
      </div>

      {/* ═══════════════════════════════════════════
          FEATURED PRODUCTS
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 400, height: 400, right: '10%', top: '10%', background: 'radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold" style={{ color: '#D4AF37' }}>✦ The Collection ✦</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Velour <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D875, #9A7E28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Signature</span> Picks
            </h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto text-base leading-relaxed">Curated tools and elixirs for your daily model-level ritual. Each piece designed to transform.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <Link key={product.name} href="/products"
                className="group block rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: 'linear-gradient(145deg, #161616, #1A1018)', border: `1px solid rgba(${product.glow === '#00E5C0' ? '0,229,192' : product.glow === '#D4AF37' ? '212,175,55' : '139,58,90'},0.15)`, boxShadow: '0 4px 24px rgba(0,0,0,0.6)', animationDelay: `${i * 0.1}s` }}>
                {/* Product image area */}
                <div className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{ background: `radial-gradient(ellipse at center, ${product.glow}10 0%, transparent 70%)` }}>
                  <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full"
                    style={{ background: `${product.tagColor}20`, color: product.tagColor, border: `1px solid ${product.tagColor}40` }}>
                    {product.tag}
                  </div>
                  <span className="text-6xl float-animation" style={{ animationDelay: `${i * 0.5}s` }}>{product.emoji}</span>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-8 rounded-full"
                    style={{ background: `radial-gradient(ellipse, ${product.glow}40, transparent)`, filter: 'blur(10px)' }} />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"
                    style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <span className="text-white text-xs font-semibold tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full">View Product</span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 border-t border-white/5">
                  <div className="text-xs tracking-widest uppercase mb-1" style={{ color: product.glow }}>{product.category}</div>
                  <h3 className="font-heading font-bold text-white text-base leading-tight">{product.name}</h3>
                  <p className="text-white/40 text-xs mt-1">{product.benefit}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xl font-bold font-heading" style={{ color: '#D4AF37' }}>{product.price}</span>
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-3 w-3 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-3 px-10 py-4 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #4A1C2F, #6B2943)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', boxShadow: '0 0 30px rgba(74,28,47,0.5)' }}>
              <Sparkles className="h-4 w-4" /> Explore Full Collection <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          THE VELOUR RITUAL (4-step)
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0F0813, #0A0A0A)' }} />
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 600, height: 600, left: '10%', top: '20%', background: 'radial-gradient(ellipse, rgba(74,28,47,0.2) 0%, transparent 70%)', filter: 'blur(100px)' }} />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold" style={{ color: '#00E5C0' }}>✦ The Daily Ritual ✦</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              The Velour <span className="italic" style={{ background: 'linear-gradient(135deg, #00E5C0, #00FFAA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Ritual</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto text-base">Four steps to model-level skin every single day. Master the glow-up.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ritualSteps.map((step, i) => (
              <div key={step.step} className="relative group rounded-xl p-6 transition-all duration-500 hover:-translate-y-2"
                style={{ background: 'linear-gradient(145deg, #161616, #1A1018)', border: `1px solid ${step.color}25`, boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                <div className="text-xs font-bold tracking-widest mb-4" style={{ color: step.color }}>STEP {step.step}</div>
                <div className="text-4xl mb-4 float-animation" style={{ animationDelay: `${i * 0.7}s` }}>{step.icon}</div>
                <div className="w-1.5 h-1.5 rounded-full mb-4" style={{ background: step.color, boxShadow: `0 0 8px ${step.color}` }} />
                <h3 className="font-heading text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          COLLECTIONS (from store)
      ═══════════════════════════════════════════ */}
      {collections && collections.length > 0 && (
        <section className="py-24">
          <div className="container-custom mb-4">
            <div className="text-center mb-16">
              <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold" style={{ color: '#D4AF37' }}>✦ By Category ✦</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
                Shop by <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D875, #9A7E28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Collection</span>
              </h2>
              <p className="mt-4 text-white/40 max-w-xl mx-auto">Explore our curated collections tailored to every glow-up goal.</p>
            </div>
          </div>
          {collections.map((collection: any, index: number) => (
            <CollectionSection key={collection.id} collection={collection} alternate={index % 2 === 1} />
          ))}
        </section>
      )}

      {/* ═══════════════════════════════════════════
          VELOUR RITUAL BUNDLE
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0F0813 0%, #0A0A0A 50%, #0D0F0E 100%)' }} />
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 500, height: 500, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', background: 'radial-gradient(ellipse, rgba(212,175,55,0.05) 0%, transparent 70%)', filter: 'blur(100px)' }} />

        <div className="container-custom relative z-10">
          <div className="rounded-2xl p-8 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #1A1018 0%, #161616 50%, #1A1A12 100%)', border: '1px solid rgba(212,175,55,0.25)', boxShadow: '0 20px 80px rgba(0,0,0,0.8), 0 0 60px rgba(212,175,55,0.05)' }}>
            {/* Corner ornaments */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t border-l" style={{ borderColor: 'rgba(212,175,55,0.4)' }} />
            <div className="absolute top-4 right-4 w-8 h-8 border-t border-r" style={{ borderColor: 'rgba(212,175,55,0.4)' }} />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l" style={{ borderColor: 'rgba(212,175,55,0.4)' }} />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r" style={{ borderColor: 'rgba(212,175,55,0.4)' }} />

            <span className="inline-block text-xs tracking-widest uppercase font-semibold mb-6" style={{ color: '#D4AF37' }}>✦ Limited Offer — Velour Bundle ✦</span>
            <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
              The Complete<br />
              <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D875, #9A7E28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Glow-Up Kit</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-8 leading-relaxed">Everything you need for your full daily ritual — bundled and priced for the devoted.</p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {bundleItems.map((item) => (
                <span key={item} className="text-sm px-4 py-2 rounded-full font-medium"
                  style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)', color: 'rgba(212,175,55,0.9)' }}>
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-center gap-6 mb-10">
              <span className="text-white/40 line-through text-xl">R9,649</span>
              <span className="text-4xl font-black font-heading" style={{ color: '#D4AF37' }}>R6,849</span>
              <span className="text-sm px-3 py-1 rounded-full font-bold" style={{ background: 'rgba(0,229,192,0.1)', border: '1px solid rgba(0,229,192,0.3)', color: '#00E5C0' }}>Save R2,800</span>
            </div>

            <Link href="/products" className="inline-flex items-center gap-3 px-12 py-5 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #4A1C2F, #6B2943)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', boxShadow: '0 0 40px rgba(74,28,47,0.6)' }}>
              <Sparkles className="h-4 w-4" /> Get The Bundle <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute rounded-full pointer-events-none animate-pulse" style={{ width: 400, height: 400, left: '10%', top: '30%', background: 'radial-gradient(ellipse, rgba(74,28,47,0.2) 0%, transparent 70%)', filter: 'blur(80px)' }} />

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-xs tracking-widest uppercase mb-4 font-semibold" style={{ color: '#00E5C0' }}>✦ Velour Community ✦</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
              Real Results, <span className="italic" style={{ background: 'linear-gradient(135deg, #00E5C0, #00FFAA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Glow</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto">Join 50,000+ who've elevated their daily ritual with Velour Noire.</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl p-10 text-center relative"
              style={{ background: 'linear-gradient(145deg, #161616, #1A1018)', border: '1px solid rgba(0,229,192,0.15)', boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,229,192,0.05)' }}>
              <div className="text-6xl font-heading leading-none mb-4" style={{ color: 'rgba(212,175,55,0.2)' }}>"</div>
              <div className="flex justify-center gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-yellow-500 text-yellow-500" />)}
              </div>
              <p className="text-white/90 text-lg leading-relaxed mb-8 italic font-heading transition-all duration-700">
                "{testimonials[activeTestimonial].text}"
              </p>
              <div>
                <div className="font-bold font-heading" style={{ color: '#D4AF37' }}>{testimonials[activeTestimonial].name}</div>
                <div className="text-white/40 text-sm mt-1">{testimonials[activeTestimonial].title}</div>
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveTestimonial(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{ width: i === activeTestimonial ? 32 : 8, background: i === activeTestimonial ? '#D4AF37' : 'rgba(212,175,55,0.25)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          NEWSLETTER
      ═══════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0A0A, #0F0813)' }} />
        <div className="container-custom relative z-10 max-w-2xl text-center">
          <span className="text-xs tracking-widest uppercase font-semibold mb-4 block" style={{ color: '#D4AF37' }}>✦ Inner Circle ✦</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-white mb-4">
            Enter the <span className="italic" style={{ background: 'linear-gradient(135deg, #D4AF37, #F4D875, #9A7E28)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Noir Circle</span>
          </h2>
          <p className="text-white/40 mb-10 text-base leading-relaxed">Early access to new rituals, exclusive bundles, and glow-up guides. No noise — only luxury.</p>

          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => { e.preventDefault(); setNewsletterEmail('') }}>
            <input type="email" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-4 text-sm text-white placeholder:text-white/30 bg-white/5 border border-white/10 rounded-sm focus:outline-none transition-colors"
              style={{ borderColor: 'rgba(255,255,255,0.1)' }}
              onFocus={(e) => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button type="submit" className="px-8 py-4 text-sm font-bold tracking-widest uppercase whitespace-nowrap transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #4A1C2F, #6B2943)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37' }}>
              Join the Circle
            </button>
          </form>
          <p className="text-white/30 text-xs mt-4">No spam. Unsubscribe anytime. Pure luxury only.</p>
        </div>
      </section>

    </div>
  )
}
