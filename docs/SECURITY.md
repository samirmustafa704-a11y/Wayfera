# Security Policy

## Reporting Vulnerabilities

**Do not** open a public GitHub issue for security vulnerabilities. Instead, email security details to the maintainers privately.

Include:
- Description of vulnerability
- Location (file, line number)
- Potential impact
- Suggested fix (if available)

## Security Best Practices

### Environment Variables
- Never commit `.env.local` or `.env.production`
- Use strong secrets for `NEXTAUTH_SECRET`
- Rotate credentials regularly
- Keep database URLs private

### Dependencies
- Keep packages updated: `npm audit fix`
- Review security advisories: `npm audit`
- Lock versions in `package-lock.json`

### Data Protection
- Validate all user inputs
- Use parameterized queries (Prisma handles this)
- Implement rate limiting on API routes
- Hash passwords with bcrypt

### Authentication
- Use NextAuth with secure session secrets
- Implement CSRF protection
- Set secure HTTP-only cookies
- Validate tokens server-side

## Security Headers

Configured in `next.config.js`:
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Updates

Subscribe to security advisories:
- GitHub Security Alerts
- npm Security Advisories
- OWASP Top 10 updates

