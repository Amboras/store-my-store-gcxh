# Ecommerce AI Builder - Starter Template

AI-powered ecommerce store builder using Medusa v2 and Next.js.

## Quick Start

### Prerequisites
- Node.js 20+
- PostgreSQL
- Redis (optional but recommended)

### Installation

```bash
# Install dependencies
make install

# Start development servers
make dev
```

Backend runs at: http://localhost:9000
Storefront runs at: http://localhost:3000

## Claude Code Commands

```bash
# Create a new store plan
/create-store-plan

# Implement the store
/implement-store

# Edit an existing store
/edit-store

# Deploy store
/deploy-store
```

## Architecture

- **Backend**: Medusa v2 (TypeScript/Node.js)
- **Storefront**: Next.js 15
- **Database**: PostgreSQL
- **Payments**: Stripe (built-in)
- **AI**: Claude Code slash commands

## Project Structure

```
ecom-starter-template/
├── backend/              # Medusa backend
├── storefront-templates/ # Next.js templates
├── component-library/    # Reusable components
├── .claude/             # Claude commands & agents
└── generated-stores/    # Generated stores output
```

## Documentation

See `docs/` for detailed documentation.
