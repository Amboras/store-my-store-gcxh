# Component Library

Reusable commerce components for ecommerce storefronts.

## Status

🚧 **Planned** - Component library will be implemented in future versions.

## Planned Components

### Product Components
- ProductCard - Individual product card
- ProductGrid - Grid layout for products
- ProductList - List layout for products
- ProductCarousel - Carousel/slider for featured products
- QuickView - Modal for quick product preview

### Hero Components
- HeroFullWidth - Full-width background image hero
- HeroSplit - Split layout (image + content)
- HeroVideo - Video background hero
- HeroMinimal - Text-focused minimal hero

### PDP (Product Detail Page) Layouts
- PDPSidebar - Image gallery with sidebar details
- PDPCentered - Centered layout with stacked content
- PDPSplit - 50/50 split layout

### Cart Components
- CartDrawer - Slide-out cart drawer
- CartPage - Full-page cart view
- MiniCart - Header cart preview
- CartItem - Individual cart item component

### Navigation Components
- Header - Site header with navigation
- MobileMenu - Mobile navigation menu
- Footer - Site footer
- Breadcrumbs - Navigation breadcrumbs

### Form Components
- SearchBar - Product search
- NewsletterSignup - Email capture form
- ContactForm - Contact page form

### Collection Components
- CollectionGrid - Grid of collection cards
- CollectionHero - Collection header/banner
- ProductFilters - Filtering sidebar/dropdown
- ProductSort - Sort options dropdown

## Usage (Future)

```typescript
import { ProductCard, ProductGrid } from '@ecom/components'

<ProductGrid>
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</ProductGrid>
```

## Contributing

When this component library is built, we'll accept contributions following these guidelines:

1. All components must be TypeScript
2. Use Tailwind CSS for styling
3. Support both light and dark modes
4. Include JSDoc documentation
5. Provide usage examples
6. Test with Medusa backend data

## Roadmap

- [ ] Set up component library package
- [ ] Implement product components
- [ ] Implement hero components
- [ ] Implement PDP layouts
- [ ] Implement cart components
- [ ] Implement navigation components
- [ ] Add Storybook for documentation
- [ ] Publish to npm

---

For now, components are included directly in storefront templates.
