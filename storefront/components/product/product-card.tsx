import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { getProductImage } from '@/lib/utils/placeholder-images'
import ProductPrice, { isProductSoldOut, type VariantExtension } from './product-price'

interface ProductCardProps {
  product: any
  variantExtensions?: Record<string, VariantExtension>
}

// Map product to glow color based on category/title keywords
function getProductGlow(title: string): { glow: string; accent: string } {
  const t = title.toLowerCase()
  if (t.includes('led') || t.includes('light') || t.includes('mask')) return { glow: '#00E5C0', accent: 'rgba(0,229,192,' }
  if (t.includes('ems') || t.includes('jaw') || t.includes('lift')) return { glow: '#D4AF37', accent: 'rgba(212,175,55,' }
  if (t.includes('gua') || t.includes('rose') || t.includes('quartz')) return { glow: '#8B3A5A', accent: 'rgba(139,58,90,' }
  if (t.includes('hair') || t.includes('rosemary') || t.includes('oil')) return { glow: '#00E5C0', accent: 'rgba(0,229,192,' }
  if (t.includes('scrub') || t.includes('salt') || t.includes('sea')) return { glow: '#D4AF37', accent: 'rgba(212,175,55,' }
  if (t.includes('ice') || t.includes('roller')) return { glow: '#00E5C0', accent: 'rgba(0,229,192,' }
  if (t.includes('soap') || t.includes('natural')) return { glow: '#8B3A5A', accent: 'rgba(139,58,90,' }
  return { glow: '#D4AF37', accent: 'rgba(212,175,55,' }
}

export default function ProductCard({ product, variantExtensions }: ProductCardProps) {
  const variant = product.variants?.[0]
  const calculatedPrice = variant?.calculated_price
  const currency = calculatedPrice?.currency_code || 'usd'
  const currentAmount = calculatedPrice?.calculated_amount
  const ext = variant?.id ? variantExtensions?.[variant.id] : null
  const soldOut = isProductSoldOut(product.variants || [], variantExtensions)
  const { glow, accent } = getProductGlow(product.title || '')

  return (
    <Link href={`/products/${product.handle}`} className="group block" prefetch={true}>
      <div className="rounded-xl overflow-hidden transition-all duration-500 group-hover:transform group-hover:translate-y-[-4px]"
        style={{
          background: 'linear-gradient(145deg, #161616, #1A1018)',
          border: `1px solid ${accent}0.12)`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${accent}0.3)`
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px rgba(0,0,0,0.7), 0 0 20px ${accent}0.08)`
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.borderColor = `${accent}0.12)`
          ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)'
        }}
      >
        {/* Product Image */}
        <div className="relative aspect-[3/4] overflow-hidden"
          style={{
            background: `radial-gradient(ellipse at center, ${accent}0.06) 0%, #0A0A0A 70%)`,
          }}>
          <Image
            src={getProductImage(product.thumbnail, product.id)}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${soldOut ? 'opacity-40' : ''}`}
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

          {/* Sold out badge */}
          {soldOut && (
            <div className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}>
              Sold Out
            </div>
          )}

          {/* Glow gradient at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{ background: `linear-gradient(0deg, ${accent}0.15) 0%, transparent 100%)` }} />

          {/* Quick view overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-400">
            <span className="text-xs font-semibold tracking-widest uppercase px-5 py-2 rounded-full text-white"
              style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              View Ritual
            </span>
          </div>

          {/* Scan line on hover */}
          <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="absolute left-0 right-0 h-px animate-[scan-line_2s_linear_infinite]"
              style={{ background: `linear-gradient(90deg, transparent, ${glow}60, transparent)` }} />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 border-t border-white/5">
          <h3 className={`font-heading font-bold text-sm leading-tight mb-1 line-clamp-1 transition-colors duration-300 ${soldOut ? 'text-white/30' : 'text-white group-hover:text-gold-DEFAULT'}`}>
            {product.title}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <ProductPrice
              amount={currentAmount}
              currency={currency}
              compareAtPrice={ext?.compare_at_price}
              soldOut={soldOut}
              size="card"
            />
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map(s => (
                <Star key={s} className="h-2.5 w-2.5 fill-gold-DEFAULT text-gold-DEFAULT" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
