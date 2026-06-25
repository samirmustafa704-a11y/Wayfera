# Wayfera Database Setup Guide

## Overview
This guide explains the Prisma ORM setup for Wayfera with PostgreSQL database on Vercel.

## What's Been Set Up

### 1. Prisma Configuration
- **File**: `prisma/schema.prisma`
- **Database**: PostgreSQL via Vercel
- **Provider**: `@prisma/adapter-pg` for optimized connection pooling

### 2. Environment Variables
Created `.env.local` with:
- `DATABASE_URL` - Main connection string
- `POSTGRES_URL` - Fallback connection string
- `PRISMA_DATABASE_URL` - Prisma-specific URL

### 3. NPM Scripts
```bash
npm run db:push          # Push schema changes to database
npm run db:migrate       # Create and run migrations
npm run db:studio        # Open Prisma Studio GUI
npm run db:seed          # Run seed scripts
npm run build            # Build (includes `prisma generate`)
npm run postinstall      # Auto-generates Prisma client
```

### 4. File Structure
```
prisma/
├── schema.prisma        # Database schema definitions
└── seed.js             # Initial data seeding script
lib/
└── prisma.ts           # Prisma singleton client
```

## Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```
This automatically runs `postinstall` which generates the Prisma client.

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Apply Schema to Database
```bash
npm run db:push
```

### 4. Seed Initial Data (Optional)
```bash
npm run db:seed
```

### 5. Open Prisma Studio (Optional)
```bash
npm run db:studio
```
This opens a GUI at http://localhost:5555 to manage your database.

## Using Prisma in Your Code

### Example: Fetch Users
```typescript
import prisma from '@/lib/prisma'

async function getUsers() {
  const users = await prisma.user.findMany()
  return users
}
```

### Example: Create User
```typescript
const newUser = await prisma.user.create({
  data: {
    email: 'user@example.com',
    name: 'John Doe',
  },
})
```

## Deploying to Vercel

### 1. Add Environment Variables to Vercel
Go to Vercel Dashboard → Settings → Environment Variables and add:
- `DATABASE_URL` - (already in Vercel)
- `POSTGRES_URL` - (already in Vercel)
- `PRISMA_DATABASE_URL` - (already in Vercel)

### 2. Build Process
The build script automatically:
1. Runs `prisma generate` to create the client
2. Builds your Next.js app
3. All Prisma types are ready for use

### 3. Running Migrations in Production
```bash
# Local: Create migration
npm run db:migrate -- --name add_new_table

# This creates a migration file in prisma/migrations/
# Commit and push to GitHub
# Vercel will apply migrations during build (with proper setup)
```

## Schema Example: Adding More Models

Edit `prisma/schema.prisma`:
```prisma
model Post {
  id    Int     @id @default(autoincrement())
  title String
  content String?
  author User @relation(fields: [authorId], references: [id])
  authorId Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Then push the changes:
```bash
npm run db:push
```

## Troubleshooting

### "Prisma Client not found"
```bash
npm install
# or manually:
npx prisma generate
```

### Connection Refused
- Verify `DATABASE_URL` in `.env.local`
- Check if PostgreSQL is running
- Ensure network access to Vercel database

### Migration Conflicts
```bash
# Reset local database (careful - deletes all data)
npx prisma migrate reset
```

## Resources
- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Adapter](https://www.prisma.io/docs/orm/overview/databases/postgresql)
- [Vercel Postgres + Prisma](https://vercel.com/docs/storage/postgres)
- [Prisma Migration Guide](https://www.prisma.io/docs/orm/prisma-migrate)
