# Quick Start Guide

Get your Medusa v2 backend up and running in minutes!

## Option 1: Using Docker (Recommended for Development)

1. **Start PostgreSQL and Redis with Docker:**

```bash
docker-compose up -d
```

This will start:
- PostgreSQL on port 5432
- Redis on port 6379

2. **Install dependencies:**

```bash
npm install
```

3. **Run migrations:**

```bash
npm run migrate
```

4. **Start the development server:**

```bash
npm run dev
```

5. **Access the application:**
- Admin Dashboard: http://localhost:9000/app
- API: http://localhost:9000

## Option 2: Local Installation

### Prerequisites

Install PostgreSQL and Redis on your system:

**macOS (using Homebrew):**
```bash
brew install postgresql@16 redis
brew services start postgresql@16
brew services start redis
```

**Ubuntu/Debian:**
```bash
sudo apt-get update
sudo apt-get install postgresql redis-server
sudo systemctl start postgresql
sudo systemctl start redis
```

### Setup

1. **Create the database:**

```bash
createdb medusa_store
```

2. **Install dependencies:**

```bash
npm install
```

3. **Configure environment:**

The `.env` file is already set up with default values. Update if needed.

4. **Run migrations:**

```bash
npm run migrate
```

5. **Seed the database (optional):**

```bash
npm run seed
```

6. **Start the server:**

```bash
npm run dev
```

## First-Time Setup

### Create Admin User

On first run, you'll need to create an admin user. Follow the prompts in the terminal or create one via the API:

```bash
curl -X POST http://localhost:9000/admin/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@example.com",
    "password": "supersecret"
  }'
```

### Access Admin Dashboard

1. Open http://localhost:9000/app
2. Login with your admin credentials
3. Start configuring your store!

## Next Steps

- Configure regions and currencies in the admin dashboard
- Set up payment providers (Stripe, PayPal, etc.)
- Add products and collections
- Configure shipping options
- Connect your storefront

## Troubleshooting

### Port 9000 already in use

```bash
# Check what's using port 9000
lsof -i :9000

# Or run on a different port
PORT=9001 npm run dev
```

### Database connection failed

- Verify PostgreSQL is running
- Check the `POSTGRES_URL` in `.env`
- Ensure the database exists

### Redis connection failed

- Verify Redis is running
- Check the `REDIS_URL` in `.env`

## Useful Commands

```bash
# Development
npm run dev              # Start with hot reload
npm run build            # Build for production
npm start                # Start production server

# Database
npm run migrate          # Run migrations
npm run seed             # Seed database

# Utilities
npm run type-check       # Check TypeScript types
```

## Need Help?

- [Medusa Documentation](https://docs.medusajs.com)
- [Medusa Discord](https://discord.gg/medusajs)
- Check the main README.md for detailed information
