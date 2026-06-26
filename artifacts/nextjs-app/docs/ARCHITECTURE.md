# Project Architecture

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **next-intl** - Internationalization
- **Prisma** - Database ORM

## Project Structure

```
app/                    # App Router
├── [locale]/          # i18n routes
│   ├── about/
│   ├── booking/
│   ├── destinations/
│   ├── services/
│   └── ...
components/
├── features/          # Feature components
├── layout/            # Layout components
├── shared/            # Shared utilities
└── ui/               # shadcn/ui components
lib/
├── prisma.ts         # DB client
├── utils.ts          # Utilities
└── ...
config/
├── navigation.ts     # Routes
└── site.ts          # Metadata
messages/             # i18n translations
prisma/              # Database schema
types/               # TypeScript types
```

## Key Patterns

### i18n
Routes use `[locale]` parameter for language switching (en, ar, fr, es)

### Animations
Framer Motion for 60fps animations with GPU acceleration

### Forms
React Hook Form + Zod for validated, performant forms

### Database
Prisma singleton pattern in `lib/prisma.ts` for safe client usage
