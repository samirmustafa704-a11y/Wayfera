# Setup & Installation

## Prerequisites

- Node.js 18.17+
- npm 9.0+
- Git

## Installation

```bash
# Clone repository
git clone https://github.com/Mostafa-SAID7/Wayfera.git
cd Wayfera

# Install dependencies
npm install

# Setup environment
cp .env.example .env.local

# Start dev server
npm run dev
```

Visit `http://localhost:3000`

## Environment Variables

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Wayfera
```

## Build & Deploy

```bash
npm run build    # Production build
npm start        # Start production server
npm run lint     # Code quality check
```
