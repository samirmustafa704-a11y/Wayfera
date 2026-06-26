# GitHub Configuration

This directory contains GitHub-specific configuration files for the Wayfera project.

## Contents

### CI/CD Pipeline
- **workflows/ci.yml** - Continuous Integration workflow
  - Runs tests on pull requests
  - Builds the project
  - Validates TypeScript
  - Runs linting

### Issue Templates
- **ISSUE_TEMPLATE/bug_report.md** - Template for reporting bugs
- **ISSUE_TEMPLATE/feature_request.md** - Template for feature requests

### Pull Request
- **PULL_REQUEST_TEMPLATE.md** - Template for pull requests
  - Ensures PRs include proper descriptions
  - Links to related issues
  - Documents changes

### Deployment
- **DEPLOYMENT.md** - Netlify and other platform deployment configuration
  - Build and publish settings
  - Environment variables
  - Caching strategy
  - Security headers

### Root Configuration
- **netlify.toml** - Netlify deployment configuration (kept in root for auto-detection)
  - Build configuration
  - Redirects and headers
  - Caching rules

## Workflows

### CI Workflow (ci.yml)
Triggers on:
- Pull requests to main/master
- Pushes to main/master

Actions:
- Install dependencies
- Build project
- Run tests
- Type checking

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Netlify deployment configuration
- Platform-specific deployment steps
- Security headers and caching strategy

## Contributing
See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
