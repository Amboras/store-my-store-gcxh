'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductGrid from '@/components/product/product-grid'

interface CollectionSectionProps {
  collection: any
  alternate?: boolean
}

export default function CollectionSection({ collection, alternate }: CollectionSectionProps) {
  const description = collection.metadata?.description
  const hasDescription = typeof description === 'string' && description

  return (
    <section className="py-12 relative">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10 animate-fade-in">
          <div>
            <span className="text-xs tracking-widest uppercase font-semibold mb-2 block"
              style={{ color: alternate ? '#00E5C0' : '#D4AF37' }}>
              ✦ Collection
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">
              {collection.title}
            </h2>
            {hasDescription && (
              <p className="text-white/40 mt-2 max-w-lg text-sm leading-relaxed">{description}</p>
            )}
          </div>
          <Link
            href={`/collections/${collection.handle}`}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group whitespace-nowrap hover:gap-3"
            style={{ color: alternate ? '#00E5C0' : '#D4AF37' }}
            prefetch={true}
          >
            View All
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <ProductGrid collectionId={collection.id} limit={4} />
      </div>
    </section>
  )
}
