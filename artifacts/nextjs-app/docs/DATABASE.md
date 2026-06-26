# Database Setup

## Prisma + PostgreSQL

### Quick Start

```bash
npm install                    # Auto-generates Prisma client
npx prisma generate          # Manual generation
npm run db:push              # Sync schema to database
npm run db:seed              # Seed initial data
npm run db:studio            # Open Prisma GUI
```

### Schema

Located at `prisma/schema.prisma`. Update schema and run:

```bash
npm run db:push
```

### Environment

Set `DATABASE_URL` in `.env.local`:

```env
DATABASE_URL="postgresql://user:password@host:5432/dbname"
```

### Migration

```bash
npm run db:migrate -- --name add_new_table
```

### Seed Script

Edit `prisma/seed.js` to populate initial data, then run:

```bash
npm run db:seed
```

### Usage

```typescript
import prisma from '@/lib/prisma'

const users = await prisma.user.findMany()
```
