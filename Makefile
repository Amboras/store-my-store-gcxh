.PHONY: help install dev dev-backend dev-storefront build type-check clean db-up db-down db-reset logs tail-logs stop

help:
	@echo "Available commands:"
	@echo "  make install        - Install all dependencies"
	@echo "  make dev           - Start backend + storefront (with log rotation)"
	@echo "  make dev-backend   - Start Medusa backend only"
	@echo "  make dev-storefront - Start Next.js storefront only"
	@echo "  make build         - Build all workspaces"
	@echo "  make type-check    - TypeScript type checking"
	@echo "  make db-up         - Start PostgreSQL + Redis containers"
	@echo "  make db-down       - Stop database containers"
	@echo "  make db-reset      - Reset database (migrations)"
	@echo "  make logs          - View current dev logs"
	@echo "  make tail-logs     - Tail dev logs in real-time"
	@echo "  make stop          - Stop all running services"
	@echo "  make clean         - Remove node_modules"

install:
	@echo "📦 Installing dependencies..."
	npm install
	npm run install:all
	@echo "✅ Dependencies installed"

dev:
	@echo "🚀 Starting development environment..."
	@./scripts/dev.sh

dev-backend:
	@echo "🔧 Starting Medusa backend..."
	cd backend && npm run dev

dev-storefront:
	@echo "🎨 Starting Next.js storefront..."
	cd storefront-templates/minimal && npm run dev

build:
	@echo "🏗️  Building all workspaces..."
	npm run build

type-check:
	@echo "🔍 Type checking..."
	npm run type-check

db-up:
	@echo "🐳 Starting database services..."
	cd backend && docker-compose up -d
	@echo "✅ Database services started"

db-down:
	@echo "🛑 Stopping database services..."
	cd backend && docker-compose down
	@echo "✅ Database services stopped"

db-reset:
	@echo "🔄 Resetting database..."
	cd backend && npm run migrate
	@echo "✅ Database reset complete"

logs:
	@if [ -f "dev.log" ]; then \
		cat dev.log; \
	else \
		echo "No dev.log found. Run 'make dev' first."; \
	fi

tail-logs:
	@if [ -f "dev.log" ]; then \
		tail -f dev.log; \
	else \
		echo "No dev.log found. Run 'make dev' first."; \
	fi

stop:
	@echo "🛑 Stopping all services..."
	@pkill -f "medusa develop" || true
	@pkill -f "next dev" || true
	@echo "✅ All services stopped"

clean:
	@echo "🧹 Cleaning node_modules..."
	npm run clean
	@echo "✅ Cleaned"
