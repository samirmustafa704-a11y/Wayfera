// Re-export from lib utilities for backward compatibility
export { prisma } from './prisma'
export { cn } from './utils'
export { localStorage, sessionStorage, cache } from './storage'
export { generateOrganizationSchema } from './seo'
export {
  APP_NAME,
  APP_DESCRIPTION,
  LOCALES,
  DEFAULT_LOCALE,
  SOCIAL_LINKS,
  CONTACT_INFO,
} from './constants'
