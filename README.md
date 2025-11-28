# template-react-library

⚛️ Production-ready React library template with TypeScript, Storybook, automated testing, and optimized builds with tree-shaking and code splitting.

## Features

- **TypeScript** - Full type safety with modern TS features and React support
- **[tsdown](https://tsdown.dev/)** - Fast, zero-config bundler powered by Rolldown with tree-shaking and code splitting
- **[Vitest](https://vitest.dev/)** - Fast unit testing with React Testing Library
- **[Storybook](https://storybook.js.org/)** - Component development environment with visual testing
- **[Changesets](https://github.com/changesets/changesets)** - Automated version management and changelog generation
- **GitHub Actions** - Automated CI/CD workflows for testing and publishing
- **Pre-publish safety** - Automatic checks before publishing to prevent broken releases

## Quick Start

```bash
pnpm install
pnpm test
```

## Building Your Library

1. Add React components in `src/`
2. Create Storybook stories alongside your components (e.g., `component.stories.tsx`)
3. Add tests in `tests/`
4. Update `package.json` metadata (name, description, keywords, repository)

## Optimized Bundle

Automatic tree-shaking and code splitting ensure consumers only bundle what they use. Import components either from the main entry point or directly from individual paths:

```tsx
// Main entry point
import { Button } from 'template-react-library';

// Direct import
import { Button } from 'template-react-library/button';
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build library with tsdown |
| `pnpm test` | Run tests with vitest |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build-storybook` | Build Storybook for deployment |
| `pnpm check-types` | Run TypeScript type checking |
| `pnpm check` | Run linter checks |
| `pnpm fix` | Auto-fix linting issues |
| `pnpm changeset` | Create a new changeset |
| `pnpm changeset:version` | Update versions based on changesets |
| `pnpm changeset:publish` | Build and publish the package to npm |

## Project Structure

```
src/
├── button.tsx                  # Example Button component
├── button.stories.tsx          # Storybook stories for Button
├── index.ts                    # Main entry point
tests/
├── setup.ts                    # Test setup with jest-dom
├── button.test.tsx             # Component tests
.storybook/
├── main.ts                     # Storybook configuration
├── preview.ts                  # Storybook preview config
├── vitest.setup.ts             # Storybook Vitest integration
.github/
├── workflows/
│   ├── ci.yml                  # CI workflow (lint, test, build)
│   └── release.yml             # Automated release workflow
├── ISSUE_TEMPLATE/
│   ├── bug_report.yml          # Bug report template
│   └── feature_request.yml     # Feature request template
└── PULL_REQUEST_TEMPLATE.md   # PR template
```

## CI/CD

This template includes automated GitHub Actions workflows:

- **CI Workflow** - Runs on every PR and push to main
  - Linting with Biome
  - Type checking with TypeScript
  - Unit tests with Vitest
  - Build verification

- **Release Workflow** - Automated publishing with Changesets
  - Creates version bump PRs automatically
  - Publishes to npm when merged

### Setup for Automated Publishing

To enable automated npm publishing, add an `NPM_TOKEN` secret to your GitHub repository:

1. Create an npm access token at [npmjs.com](https://www.npmjs.com/settings/~/tokens)
2. Go to your GitHub repository settings → Secrets and variables → Actions
3. Add a new secret named `NPM_TOKEN` with your npm token

## Publishing

This template uses [Changesets](https://github.com/changesets/changesets) for version management.

### Manual Release

1. **Create a changeset** when you make changes:
   ```bash
   pnpm changeset
   ```
   Follow the prompts to describe your changes (patch, minor, or major).

2. **Commit and push your changes** including the changeset file

3. **Automated workflow will**:
   - Create a "Version Packages" PR with version bumps and changelog
   - When you merge that PR, automatically publish to npm

### Local Publishing (Alternative)

You can also publish manually:

```bash
pnpm version    # Update versions from changesets
pnpm release    # Build and publish to npm
```

> **Note**: The `prepublishOnly` script ensures all checks pass before publishing.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
