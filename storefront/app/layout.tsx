import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import { Providers } from './providers'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import AnnouncementBar from '@/components/layout/announcement-bar'
import { AnalyticsProvider } from '@/components/analytics-provider'
import { MetaPixelProvider } from '@/components/meta-pixel-provider'
import { Toaster } from 'sonner'
import { ElementPickerListener } from '@/components/element-picker-listener'
import { ErrorBoundary } from '@/components/error-boundary'
import dynamic from 'next/dynamic'

const CookieConsent = dynamic(() => import('@/components/cookie-consent'))

// Playfair Display — cinematic editorial serif for headings
const heading = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

// Jost — sleek geometric sans for body
const body = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Velour Noire — Luxury Glow-Up Rituals',
    template: '%s | Velour Noire',
  },
  description:
    'Velour Noire — Premium dark luxury personal care and grooming for the modern model. LED face masks, gua sha, sea salt scrubs, rosemary growth oils and more.',
  keywords: ['luxury skincare', 'LED face mask', 'gua sha', 'grooming', 'self care', 'glow up', 'velour noire'],
  openGraph: {
    title: 'Velour Noire — Luxury Glow-Up Rituals',
    description: 'Premium dark luxury personal care and grooming essentials for men and women.',
    siteName: 'Velour Noire',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
(function() {
  'use strict';
  if (window.parent === window) return;
  var origin = window.location.origin;
  function startRecording() {
    var record = window.rrweb && window.rrweb.record;
    if (!record) return;
    record({
      emit: function(event) {
        try { window.parent.postMessage({ type: 'rrweb', event: event, origin: origin, isCheckout: event.type === 2 }, '*'); } catch(e) {}
      },
      collectFonts: true,
      sampling: { scroll: 150 }
    });
  }
  var s = document.createElement('script');
  s.src = 'https://unpkg.com/rrweb@2.0.0-alpha.20/dist/rrweb.umd.min.cjs';
  s.onload = startRecording;
  s.onerror = function() {
    var f = document.createElement('script');
    f.src = 'https://cdn.jsdelivr.net/npm/rrweb@2.0.0-alpha.20/dist/rrweb.umd.min.cjs';
    f.onload = startRecording;
    document.head.appendChild(f);
  };
  document.head.appendChild(s);
})();
        `}} />
      </head>
      <body className="bg-noir-black">
        <Providers>
          <ElementPickerListener />
          <AnnouncementBar />
          <Header />
          <main className="min-h-screen">
            <ErrorBoundary>
              <AnalyticsProvider>
                <MetaPixelProvider>
                  {children}
                </MetaPixelProvider>
              </AnalyticsProvider>
            </ErrorBoundary>
          </main>
          <Footer />
          <CookieConsent />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#161616',
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
