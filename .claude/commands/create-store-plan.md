## Overview

Create a detailed ecommerce store plan in PLAN.md based on user's request.

## Instructions

When the user provides a store description, analyze it and create a comprehensive plan.

## Required Plan Sections

### Store Overview
- Store name
- Industry/niche (fashion, beauty, electronics, home, food, etc.)
- Target audience (demographics, preferences)
- Value proposition (what makes this store unique)
- Business model (B2C, B2B, marketplace, subscription)

### Design Direction
- Visual style (minimal, bold, luxury, playful, modern, rustic, etc.)
- Color palette (primary, secondary, accent colors)
- Typography direction (modern sans-serif, elegant serif, bold display, etc.)
- Layout preference (spacious, compact, grid-based, asymmetric)
- Overall aesthetic (clean, vibrant, elegant, edgy, warm, etc.)

### Commerce Features

Specify which features are needed:
- Multi-region support? (list regions and currencies)
- Promotions/discounts engine?
- B2B features? (quotes, approval workflows, bulk ordering)
- Marketplace/multi-vendor?
- Product reviews and ratings?
- Wishlist functionality?
- Gift cards?
- Loyalty program?
- Subscription products?
- Digital products/downloads?

### Medusa Configuration

#### Regions & Currencies
List all regions needed with their currencies:
- US - USD
- EU - EUR
- UK - GBP
- etc.

#### Payment Providers
- Stripe (default)
- PayPal (if needed)
- Other providers

#### Product Types
Define product types based on industry:
- Fashion: clothing, accessories, shoes
- Beauty: skincare, makeup, fragrance
- Electronics: computers, phones, accessories
- etc.

#### Product Categories
Define category hierarchy:
```
Electronics
├── Computers
│   ├── Laptops
│   └── Desktops
├── Phones
└── Accessories
```

#### Shipping Configuration
- Shipping zones
- Carriers (standard, express)
- Fulfillment providers

#### Tax Settings
- Tax calculation method
- Regional tax rates

### Storefront Layout

#### Template Selection
Choose from available templates:
- **minimal**: Clean, spacious, modern
- **bold**: Vibrant, energetic, statement-making
- **luxury**: Elegant, sophisticated, premium

#### Homepage Sections
List sections in order:
1. Hero (full-width image, video, split, minimal)
2. Featured products
3. Category showcase
4. Testimonials/social proof
5. Newsletter signup
6. etc.

#### Product Page Layout
- Sidebar layout (image gallery + details sidebar)
- Centered layout (image top, details below)
- Split layout (50/50 image and details)

#### Collection Page Layout
- Grid (2, 3, or 4 columns)
- Masonry (Pinterest-style)
- List view with large images

#### Cart & Checkout
- Cart style (sidebar drawer, dedicated page, modal)
- Checkout flow (single-page, multi-step)

#### Custom Pages Needed
- About Us
- Contact
- FAQ
- Shipping & Returns
- Privacy Policy
- Terms of Service
- etc.

### Theme Customization

Specify exact design tokens:

#### Colors
```
Primary: #1a1a1a (or specific hex)
Secondary: #e8d5b5
Accent: #c9a875
Background: #ffffff
Text: #333333
```

#### Typography
```
Headings: "Playfair Display" or similar
Body: "Inter" or similar
Sizes: Base 16px, Scale: 1.25
```

#### Spacing
- Compact (smaller gaps)
- Normal (standard spacing)
- Spacious (generous whitespace)

#### Border Radius
- Sharp (0px)
- Subtle (4px)
- Rounded (8px)
- Pill (999px)

### Implementation Tasks

Break down into phases:

#### Phase 1: Medusa Backend Configuration
- Set up PostgreSQL and Redis
- Configure regions and currencies
- Set up payment providers
- Create product types and categories
- Configure shipping options
- Set up tax settings

#### Phase 2: Storefront Generation
- Copy selected template (minimal/bold/luxury)
- Configure Medusa client connection
- Set up environment variables
- Verify connection to backend

#### Phase 3: Theme Customization
- Apply color palette to Tailwind config
- Configure typography
- Update spacing scale
- Set border radius values
- Apply to components

#### Phase 4: Component Composition
- Customize homepage sections
- Configure product page layout
- Set up collection page
- Customize cart and checkout
- Add custom pages

#### Phase 5: Content & Testing
- Add sample products (optional)
- Test checkout flow
- Verify responsive design
- Test payment integration
- Performance optimization

#### Phase 6: Deployment
- Deploy Medusa backend (Railway/Medusa Cloud/AWS)
- Deploy Next.js storefront (Vercel/Netlify)
- Configure custom domain
- Set up SSL
- Production testing

## Example Plan Structure

```markdown
# Store Plan: [Store Name]

## Store Overview
**Name**: Premium Skincare Co
**Industry**: Beauty/Skincare
**Target Audience**: Women 25-45, health-conscious, premium buyers
**Value Proposition**: Clean, science-backed skincare with transparency
**Business Model**: B2C with subscription options

## Design Direction
**Visual Style**: Luxury minimal
**Color Palette**:
- Primary: #1a1a1a (deep black)
- Secondary: #e8d5b5 (warm cream)
- Accent: #c9a875 (muted gold)
**Typography**: Playfair Display (headings), Inter (body)
**Layout**: Spacious with generous whitespace
**Aesthetic**: Clean, elegant, trustworthy

## Commerce Features
- ✅ Multi-region (US, EU, UK)
- ✅ Promotions/discounts
- ✅ Product reviews
- ✅ Wishlist
- ✅ Subscription products
- ❌ B2B features
- ❌ Marketplace

[... continue with all sections ...]
```

## Important Notes

1. **Be Specific**: Use exact hex colors, font names, specific regions
2. **Think User Journey**: Plan the customer experience from landing to checkout
3. **Consider Scale**: Plan for growth (multi-region, multiple products)
4. **Stay Realistic**: Use features that Medusa v2 actually supports
5. **Ask Questions**: If user's request is vague, ask clarifying questions

## After Creating Plan

1. Save as `PLAN.md` in project root
2. Review with user for confirmation
3. Wait for user approval before running `/implement-store`
4. Make adjustments if needed

## Next Command

After plan is approved: `/implement-store`
