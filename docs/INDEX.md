# Wayfera Documentation Index

## Project Overview
- **Name:** Wayfera
- **Type:** Next.js Travel Agency Platform
- **Stack:** Next.js 14, TypeScript, Tailwind CSS, Prisma, next-intl
- **Database:** Vercel PostgreSQL
- **Deployment:** Netlify

## Documentation Structure

### 📚 Core Documentation
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Project structure and tech stack
- **[DATABASE.md](./DATABASE.md)** - Database schema and relationships
- **[SETUP.md](./SETUP.md)** - Development setup and installation
- **[ORGANIZATION.md](./ORGANIZATION.md)** - Project folder organization
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and changes

### 👥 Community & Governance
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Contribution guidelines
- **[CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)** - Community code of conduct
- **[SECURITY.md](./SECURITY.md)** - Security policy

### 📋 Root Level Documentation
- **[../README.md](../README.md)** - Project overview and quick start (root)
- **[../LICENSE](../LICENSE)** - MIT License (root)

### ⚙️ Configuration Reference
- **config/site.ts** - Site configuration and constants
- **config/navigation.ts** - Navigation structure
- **config/index.ts** - Centralized config exports
- **.env** - Environment variables template
- **next.config.js** - Next.js configuration
- **tailwind.config.ts** - Tailwind CSS configuration
- **tsconfig.json** - TypeScript configuration

### 🤖 CI/CD & Deployment
- **[../.github/README.md](../.github/README.md)** - GitHub configuration
- **[../.github/DEPLOYMENT.md](../.github/DEPLOYMENT.md)** - Deployment guide
- **[../.github/workflows/ci.yml](../.github/workflows/ci.yml)** - CI pipeline
- **[../.github/ISSUE_TEMPLATE/](../.github/ISSUE_TEMPLATE/)** - Issue templates
- **[../.github/PULL_REQUEST_TEMPLATE.md](../.github/PULL_REQUEST_TEMPLATE.md)** - PR template

### 📁 Project Folder Structure
```
wayfera/
├── app/               # Next.js App Router (pages & API routes)
├── components/        # React components
├── config/           # ⭐ Configuration (CENTRALIZED)
├── lib/              # Utilities and helpers
├── messages/         # i18n translations (EN, AR, FR, ES)
├── prisma/           # Database schema and migrations
├── public/           # Static assets and images
├── types/            # TypeScript type definitions
├── docs/             # 📚 All documentation (THIS FOLDER)
├── .github/          # 🤖 GitHub configuration
└── .vscode/          # Editor configuration
```

## Quick Links

### Getting Started
1. [SETUP.md](./SETUP.md) - Installation & environment setup
2. [ARCHITECTURE.md](./ARCHITECTURE.md) - Understand project structure
3. [ORGANIZATION.md](./ORGANIZATION.md) - Folder organization

### Development
- [DATABASE.md](./DATABASE.md) - Database design and models
- [CONTRIBUTING.md](./CONTRIBUTING.md) - How to contribute

### Deployment & DevOps
- [../.github/DEPLOYMENT.md](../.github/DEPLOYMENT.md) - Deployment guide
- [SECURITY.md](./SECURITY.md) - Security best practices

### Community
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Community guidelines
- [SECURITY.md](./SECURITY.md) - Reporting vulnerabilities

## Key Features
✅ Multi-language support (EN, FR, ES, AR)
✅ Database-driven content (Prisma + PostgreSQL)
✅ API-first architecture (13 endpoints)
✅ Type-safe with TypeScript
✅ Fully responsive design (mobile-first)
✅ Centralized configuration (no duplicates)
✅ Clean code organization
✅ RTL support for Arabic
✅ Dark mode support
✅ SEO optimized

## Project Statistics
- **14 Database Models** (Destination, Booking, User, Feature, etc.)
- **19 Pages** (Home, About, Services, Destinations, Contact, etc.)
- **13 API Endpoints** for dynamic data
- **4 Languages** fully supported
- **60+ React Components**
- **100% TypeScript** type-safe

## Important Files
- **[SETUP.md](./SETUP.md)** - Start here for local development
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Before contributing
- **[SECURITY.md](./SECURITY.md)** - Security guidelines
- **[../README.md](../README.md)** - Project overview

## Support & Issues
- For bugs: [GitHub Issues](https://github.com/freetwo7300-hash/Wayfera/issues)
- For security: See [SECURITY.md](./SECURITY.md)
- For contributions: [CONTRIBUTING.md](./CONTRIBUTING.md)
- For community: [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md)
