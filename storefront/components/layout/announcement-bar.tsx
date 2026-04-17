'use client'

import { useState, useEffect } from 'react'
import { X, Sparkles } from 'lucide-react'

const messages = [
  '✦ Free Shipping on Orders over R1,500 · Code: NOIR ✦',
  '✦ New: LED Photon Mask — Glass Skin in 3 Weeks ✦',
  '✦ Velour Ritual Bundle — Save R2,800 Today ✦',
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((p) => (p + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #0D0811, #1A1018, #0D0811)',
        borderBottom: '1px solid rgba(212,175,55,0.15)',
      }}
    >
      <div className="container-custom flex items-center justify-center py-2.5 relative">
        <Sparkles className="h-3 w-3 mr-2 flex-shrink-0" style={{ color: '#D4AF37' }} />

        <button
          onClick={() => setCurrent((p) => (p + 1) % messages.length)}
          className="text-xs tracking-widest font-semibold select-none transition-opacity duration-300"
          style={{ color: 'rgba(212,175,55,0.9)' }}
        >
          {messages[current]}
        </button>

        <div className="flex gap-1 ml-3">
          {messages.map((_, i) => (
            <div key={i} className="h-0.5 rounded-full transition-all duration-300"
              style={{ width: i === current ? 16 : 6, background: i === current ? '#D4AF37' : 'rgba(212,175,55,0.25)' }} />
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
    </div>
  )
}
