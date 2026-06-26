# Wayfera Folder Structure - Complete Guide

## 📁 Root Level Organization

```
Wayfera/
├── app/                    # ⭐ Main application - ALL app-related code inside
├── prisma/                 # Database schema and migrations
├── messages/               # i18n translations (EN, AR, FR, ES)
├── public/                 # Static assets (images, icons)
├── docs/                   # 📚 Documentation
├── .github/                # 🤖 GitHub configuration
├── node_modules/           # Dependencies (gitignored)
├── .env*                   # Environment variables (local overrides)
├── .editorconfig           # Editor configuration
├── .eslintrc.json          # ESLint configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.cjs      # PostCSS configuration
├── package.json            # Dependencies and scripts
├── README.md               # Project overview
└── LICENSE                 # MIT License
```

## 🎯 `/app` - Application Root (CENTRALIZED)

All application logic is organized inside `/app` using Next.js conventions:

```
app/
├── _components/            # 🔄 Reusable React components (with underscore - not a route)
│   ├── layout/             # Layout components (Header, Footer, Hero)
│   ├── features/           # Feature-specific components
│   │   ├── booking/        # Booking feature components
│   │   ├── destinations/   # Destination feature components
│   │   ├── services/       # Service feature components
│   │   └── testimonials/   # Testimonial feature components
│   ├── shared/             # Shared utilities (ErrorBoundary, Toast, etc)
│   ├── ui/                 # UI components (60+)
│   ├── providers/          # Context providers (Theme, etc)
│   └── index.ts            # Component exports
│
├── _config/                # ⚙️ Application configuration (with underscore - not a route)
│   ├── site.ts             # Site config, constants, API endpoints
│   ├── navigation.ts       # Navigation structure
│   └── index.ts            # Config exports
│
├── _lib/                   # 🛠️ Utilities and helpers (with underscore - not a route)
│   ├── prisma.ts           # Prisma Client singleton
│   ├── constants.ts        # Constants re-exports
│   ├── seo.ts              # SEO utilities
│   ├── storage.ts          # localStorage, sessionStorage, cache
│   ├── utils.ts            # General utilities (cn, etc)
│   └── index.ts            # Utils exports
│
├── _hooks/                 # 🎣 Custom React hooks (with underscore - not a route)
│   ├── use-toast.ts        # Toast notifications hook
│   ├── use-local-storage.ts # localStorage hook
│   ├── use-session-storage.ts # sessionStorage hook
│   ├── use-cache.ts        # Cache hook
│   └── index.ts            # Hooks exports
│
├── _types/                 # 📝 TypeScript type definitions (with underscore - not a route)
│   ├── index.ts            # Type exports
│   └── (other type files)
│
├── api/                    # 🌐 API routes
│   ├── destinations/       # GET /api/destinations, /api/destinations/[id]
│   ├── features/           # GET /api/features
│   ├── testimonials/       # GET /api/testimonials
│   ├── regions/            # GET /api/regions
│   ├── pricing-plans/      # GET /api/pricing-plans
│   ├── travel-tips/        # GET /api/travel-tips
│   ├── social-links/       # GET /api/social-links
│   ├── contact-info/       # GET /api/contact-info
│   ├── packages/           # GET /api/packages
│   ├── process-steps/      # GET /api/process-steps
│   └── page-stats/         # GET /api/page-stats
│
├── [locale]/               # 🌍 Locale-specific routes (EN, AR, FR, ES)
│   ├── (pages)             # Locale-specific pages
│   │   ├── page.tsx        # Home page (/en, /ar, /fr, /es)
│   │   ├── about/          # About page
│   │   ├── services/       # Services page
│   │   ├── destinations/   # Destinations listing
│   │   ├── destinations/[id]/ # Destination detail
│   │   ├── booking/        # Booking page
│   │   ├── contact/        # Contact page
│   │   ├── cookies/        # Cookie policy
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   │
│   ├── layout.tsx          # Locale layout with i18n provider
│   ├── loading.tsx         # Loading state
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
│
├── i18n.ts                 # i18n configuration (Next.js root level)
├── middleware.ts           # Next.js middleware (i18n routing)
├── layout.tsx              # Root layout
├── page.tsx                # Root redirect page
├── icon.svg                # Favicon
├── robots.ts               # robots.txt generator
├── sitemap.ts              # sitemap.xml generator
├── global-error.tsx        # Global error boundary
└── (other root files)
```

## 🗂️ Other Root Folders

### `/prisma` - Database
```
prisma/
├── schema.prisma           # Database schema (14 models)
└── seed.js                 # Seed data script
```

### `/messages` - Internationalization
```
messages/
├── en/                     # English translations
│   ├── nav.json
│   ├── footer.json
│   ├── legal.json
│   └── (other feature files)
├── ar/                     # Arabic translations (with RTL)
├── fr/                     # French translations
└── es/                     # Spanish translations
```

### `/docs` - Documentation
```
docs/
├── INDEX.md                # Documentation index
├── ARCHITECTURE.md         # Project architecture
├── DATABASE.md             # Database schema details
├── SETUP.md                # Development setup
├── STRUCTURE.md            # This file
├── CHANGELOG.md            # Version history
├── CONTRIBUTING.md         # Contribution guidelines
├── CODE_OF_CONDUCT.md      # Community code of conduct
└── SECURITY.md             # Security policy
```

### `/.github` - GitHub Configuration
```
.github/
├── README.md               # GitHub config guide
├── DEPLOYMENT.md           # Deployment instructions
├── workflows/              # GitHub Actions
│   └── ci.yml              # CI/CD pipeline
├── ISSUE_TEMPLATE/         # Issue templates
│   ├── bug_report.md
│   └── feature_request.md
└── PULL_REQUEST_TEMPLATE.md
```

### `/public` - Static Assets
```
public/
├── assets/
│   └── images/             # Image files
├── favicon.ico             # Favicon
└── og-image.jpg            # Open Graph image
```

## 🎯 Key Principles Applied

### ✅ 1. CENTRALIZATION
- **All app code in `/app`** - Components, config, utils, hooks, types
- **Single source of truth** - No duplicates across the codebase
- **Clear organization** - Underscore prefix for non-route folders

### ✅ 2. NEXT.JS CONVENTIONS
- **Underscore folders** - `_components`, `_config`, `_lib`, `_hooks`, `_types` are not routes
- **API routes in `/api`** - RESTful endpoints
- **Dynamic routes with brackets** - `[locale]`, `[id]`
- **Nested routing** - Proper folder structure for pages

### ✅ 3. CLEAN SEPARATION
- **Routes** - Pages only in `/[locale]` and `/api`
- **Shared code** - In `_components`, `_lib`, `_hooks`
- **Configuration** - Centralized in `_config`
- **Types** - All in `_types`

### ✅ 4. NO DUPLICATES
- **One config file** - `_config/site.ts`
- **One navigation** - `_config/navigation.ts`
- **One utils lib** - `_lib/utils.ts`
- **All constants** - `_lib/constants.ts`

## 📊 Import Patterns

### Correct (New)
```typescript
// Components
import { Header } from '@/app/_components/layout'
import { Button } from '@/app/_components/ui/button'

// Configuration
import { siteConfig } from '@/app/_config'
import { LOCALES } from '@/app/_config/site'

// Utilities
import { cn } from '@/app/_lib/utils'
import { prisma } from '@/app/_lib/prisma'

// Custom hooks
import { useToast } from '@/app/_hooks'

// Types
import type { User } from '@/app/_types'
```

## 🚀 File Organization Rules

1. **One responsibility per file**
2. **Group related files in folders**
3. **Use `index.ts` for exports** - Export barrel files
4. **Max 3 levels deep** - Avoid deeply nested structures
5. **Clear naming conventions**:
   - Components: `PascalCase` (Button.tsx)
   - Utilities: `camelCase` (utils.ts)
   - Constants: `UPPER_CASE` (LOCALES)
   - Types: `PascalCase` (User.types.ts)

## 📝 Adding New Features

1. **Create component** → `_components/features/[feature]/`
2. **Add configuration** → `_config/` if needed
3. **Add translations** → `messages/[locale]/`
4. **Add types** → `_types/index.ts`
5. **Add API route** → `api/[endpoint]/` if needed
6. **Create page** → `[locale]/[feature]/page.tsx`
7. **Update documentation** → `docs/`

## 🔄 Migration Complete

✅ All `/components` → `/app/_components/`
✅ All `/lib` → `/app/_lib/`
✅ All `/config` → `/app/_config/`
✅ All `/hooks` → `/app/_hooks/`
✅ All `/types` → `/app/_types/`
✅ `middleware.ts` → `/app/middleware.ts`
✅ `i18n.ts` → `/app/i18n.ts`
✅ All import paths updated
✅ No duplicate code
✅ Single source of truth

