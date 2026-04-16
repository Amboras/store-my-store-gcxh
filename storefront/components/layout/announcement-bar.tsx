'use client'

import { useState } from 'react'
import { X, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const messages = [
  '✦ Free Shipping on Orders over R1,500 · Code: NOIR ✦',
  '✦ New: LED Photon Mask — Glass Skin in 3 Weeks ✦',
  '✦ Velour Ritual Bundle — Save R1,550 Today ✦',
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [current, setCurrent] = useState(0)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #0D0811, #1A1018, #0D0811)',
          borderBottom: '1px solid rgba(212,175,55,0.15)',
        }}
      >
        {/* Animated gold shimmer */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.06) 50%, transparent 100%)',
          }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        <div className="container-custom flex items-center justify-center py-2.5 relative">
          {/* Sparkle icon */}
          <Sparkles className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#D4AF37' }} />

          <div className="overflow-hidden" style={{ height: '1.25rem' }}>
            <motion.div
              key={current}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setCurrent((p) => (p + 1) % messages.length)}
              className="text-xs tracking-widest font-semibold cursor-pointer select-none"
              style={{ color: 'rgba(212,175,55,0.9)' }}
            >
              {messages[current]}
            </motion.div>
          </div>

          {/* Dot indicators */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex gap-1 pointer-events-none opacity-0">
            {messages.map((_, i) => (
              <div key={i} className={`h-0.5 rounded-full transition-all ${i === current ? 'w-4 bg-gold-DEFAULT' : 'w-1.5 bg-white/20'}`} />
            ))}
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="absolute right-4 p-1 text-white/30 hover:text-white/70 transition-colors"
            aria-label="Dismiss announcement"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
