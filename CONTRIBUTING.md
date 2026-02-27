# Contributing to Wayfera

First off, thank you for considering contributing to Wayfera! It's people like you that make Wayfera such a great tool.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Workflow](#development-workflow)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

### Our Standards

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0 or later
- Git
- A code editor (VS Code recommended)

### Setup Development Environment

1. **Fork the repository**
   - Click the "Fork" button at the top right of the repository page

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/wayfera.git
   cd wayfera
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/wayfera.git
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples**
- **Describe the behavior you observed and what you expected**
- **Include screenshots if possible**
- **Include your environment details** (OS, browser, Node version)

**Bug Report Template:**

```markdown
**Describe the bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

**Expected behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
 - OS: [e.g. Windows 11]
 - Browser: [e.g. Chrome 120]
 - Node Version: [e.g. 18.17]
 - npm Version: [e.g. 9.6]

**Additional context**
Any other context about the problem.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- **Use a clear and descriptive title**
- **Provide a detailed description of the suggested enhancement**
- **Explain why this enhancement would be useful**
- **List any alternatives you've considered**

### Your First Code Contribution

Unsure where to begin? Look for issues labeled:
- `good first issue` - Simple issues perfect for beginners
- `help wanted` - Issues that need assistance
- `documentation` - Documentation improvements

### Pull Requests

1. Follow the [style guidelines](#style-guidelines)
2. Update documentation if needed
3. Add tests if applicable
4. Ensure all tests pass
5. Update CHANGELOG.md

## Development Workflow

### Branch Naming Convention

- `feature/` - New features (e.g., `feature/add-payment-gateway`)
- `fix/` - Bug fixes (e.g., `fix/locale-persistence`)
- `docs/` - Documentation (e.g., `docs/update-readme`)
- `refactor/` - Code refactoring (e.g., `refactor/optimize-images`)
- `test/` - Adding tests (e.g., `test/add-booking-tests`)
- `chore/` - Maintenance (e.g., `chore/update-dependencies`)

### Development Process

1. **Sync with upstream**
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature
   ```

3. **Make your changes**
   - Write clean, readable code
   - Follow the style guidelines
   - Add comments for complex logic
   - Test your changes thoroughly

4. **Run linting**
   ```bash
   npm run lint
   ```

5. **Build the project**
   ```bash
   npm run build
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

## Style Guidelines

### TypeScript Style Guide

- Use TypeScript for all new files
- Define proper types and interfaces
- Avoid `any` type unless absolutely necessary
- Use meaningful variable and function names
- Keep functions small and focused

**Example:**
```typescript
// Good
interface Destination {
  id: string;
  name: string;
  price: number;
}

function getDestinationById(id: string): Destination | undefined {
  return destinations.find(dest => dest.id === id);
}

// Bad
function getData(x: any): any {
  return data.find(d => d.id === x);
}
```

### React Component Guidelines

- Use functional components with hooks
- Use named exports instead of default exports
- Keep components small and reusable
- Use proper prop types
- Add JSDoc comments for complex components

**Example:**
```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// Bad
export default function Btn(props: any) {
  return <button onClick={props.click}>{props.text}</button>;
}
```

### CSS/Tailwind Guidelines

- Use Tailwind utility classes
- Centralize custom styles in `tailwind.config.ts`
- Avoid inline styles unless necessary
- Use semantic class names for custom CSS
- Follow mobile-first responsive design

**Example:**
```tsx
// Good
<div className="flex flex-col md:flex-row gap-4 p-6 bg-white dark:bg-gray-900">
  <h1 className="text-2xl font-bold">Title</h1>
</div>

// Bad
<div style={{ display: 'flex', padding: '24px' }}>
  <h1 style={{ fontSize: '24px' }}>Title</h1>
</div>
```

### File Organization

- Place components in appropriate directories
- Use index.ts for clean imports
- Keep related files together
- Follow the existing structure

```
components/
├── features/
│   └── booking/
│       ├── booking-section.tsx
│       ├── booking-form.tsx
│       └── index.ts
├── shared/
│   └── button.tsx
└── ui/
    └── card.tsx
```

## Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes

### Examples

```bash
feat(booking): add payment step to booking wizard

Add Stripe integration for payment processing in the booking flow.
Includes form validation and error handling.

Closes #123

---

fix(locale): persist selected language across navigation

Fixed issue where language would reset to English when navigating
between pages. Now properly maintains locale in URL.

Fixes #456

---

docs(readme): update installation instructions

Added prerequisites section and clarified setup steps.
```

### Rules

- Use present tense ("add feature" not "added feature")
- Use imperative mood ("move cursor to..." not "moves cursor to...")
- Limit first line to 72 characters
- Reference issues and PRs in the footer
- Provide context in the body for complex changes

## Pull Request Process

### Before Submitting

- [ ] Code follows the style guidelines
- [ ] Self-review of code completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No console.log or debugging code
- [ ] All tests pass
- [ ] Build succeeds without errors
- [ ] CHANGELOG.md updated

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
How has this been tested?

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-reviewed code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No breaking changes
- [ ] Tests pass
- [ ] Build succeeds
```

### Review Process

1. At least one maintainer must approve
2. All CI checks must pass
3. No merge conflicts
4. Code meets quality standards
5. Documentation is complete

### After Merge

- Delete your branch
- Update your local repository
- Celebrate! 🎉

## Questions?

Feel free to:
- Open an issue for questions
- Join our discussions
- Contact the maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Wayfera! 🌍✈️
