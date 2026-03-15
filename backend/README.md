# Medusa v2 Backend

This is a production-ready Medusa v2 backend for the eCommerce store builder platform.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js v20 or later
- PostgreSQL (v14 or later recommended)
- Redis (v6 or later recommended)

## Installation

1. **Install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Copy the example environment file and update with your actual values:

```bash
cp .env.example .env
```

Edit `.env` and update the following variables:
- `POSTGRES_URL`: Your PostgreSQL connection string
- `REDIS_URL`: Your Redis connection string
- `JWT_SECRET`: A secure random string for JWT tokens
- `COOKIE_SECRET`: A secure random string for session cookies
- `STRIPE_API_KEY`: Your Stripe API key (if using Stripe payments)

3. **Set up the database:**

Run database migrations:

```bash
npm run migrate
```

4. **Seed the database (optional):**

```bash
npm run seed
```

## Development

Start the development server:

```bash
npm run dev
```

The backend will be available at:
- API: http://localhost:9000
- Admin Dashboard: http://localhost:9000/app

## Production

1. **Build the application:**

```bash
npm run build
```

2. **Start the production server:**

```bash
npm start
```

## Database Setup

### PostgreSQL

Create a new PostgreSQL database:

```sql
CREATE DATABASE medusa_store;
```

### Connection String Format

```
postgres://username:password@localhost:5432/medusa_store
```

## Redis Setup

Ensure Redis is running on your system:

```bash
# On macOS with Homebrew
brew services start redis

# On Ubuntu/Debian
sudo systemctl start redis
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `POSTGRES_URL` | PostgreSQL connection string | Required |
| `REDIS_URL` | Redis connection string | `redis://localhost:6379` |
| `JWT_SECRET` | Secret for JWT token generation | Required for production |
| `COOKIE_SECRET` | Secret for session cookies | Required for production |
| `STORE_CORS` | CORS origin for storefront | `http://localhost:3000` |
| `ADMIN_CORS` | CORS origin for admin | `http://localhost:9000` |
| `MEDUSA_WORKER_MODE` | Worker mode (shared/worker/server) | `shared` |

## API Endpoints

### Store API
- **Base URL:** `http://localhost:9000/store`
- **Documentation:** Available in the Medusa admin dashboard

### Admin API
- **Base URL:** `http://localhost:9000/admin`
- **Dashboard:** `http://localhost:9000/app`

### Custom Routes

#### Store Builder API
- **GET** `/store-builder` - Get API information
- **POST** `/store-builder` - Create store builder resources

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the application for production
- `npm start` - Start production server
- `npm run migrate` - Run database migrations
- `npm run seed` - Seed the database with sample data
- `npm run type-check` - Run TypeScript type checking

## Architecture

```
backend/
├── src/
│   ├── api/              # Custom API routes
│   │   └── store-builder/
│   │       └── route.ts  # Store builder endpoints
│   ├── modules/          # Custom modules (add as needed)
│   └── workflows/        # Custom workflows (add as needed)
├── medusa-config.ts      # Medusa configuration
├── package.json          # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## Adding Payment Providers

### Stripe

1. Install the Stripe payment provider:

```bash
npm install @medusajs/medusa-payment-stripe
```

2. Add to `medusa-config.ts`:

```typescript
modules: [
  // ... other modules
  {
    resolve: "@medusajs/medusa-payment-stripe",
    options: {
      apiKey: process.env.STRIPE_API_KEY,
    },
  },
]
```

## Troubleshooting

### Database Connection Issues

- Ensure PostgreSQL is running
- Verify the connection string format
- Check database user permissions

### Redis Connection Issues

- Ensure Redis is running
- Verify the Redis URL
- Check firewall settings

### Port Already in Use

If port 9000 is already in use, you can change it by setting the `PORT` environment variable:

```bash
PORT=9001 npm run dev
```

## Support

For more information, visit:
- [Medusa Documentation](https://docs.medusajs.com)
- [Medusa GitHub](https://github.com/medusajs/medusa)

## License

MIT
