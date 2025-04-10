# Automated Dependency Checks

## Overview

This document provides details on the automated dependency validation system implemented for the Fable Design System. These automated checks ensure that all components and implementations adhere precisely to the requirements outlined in the Design System Document (DSD).

## Purpose

The dependency validation system serves to:

1. Ensure that all required dependencies specified in the DSD are properly installed
2. Verify that all package versions meet minimum requirements
3. Validate Next.js configuration for GitHub Pages deployment
4. Generate and maintain an interactive dependency graph for components
5. Enforce proper styling conventions in components

## Implementation

### CI/CD Workflow Integration

Dependency validation is integrated into our CI/CD workflows in two primary ways:

1. **Pre-deployment validation**: The deployment workflow runs dependency checks before building and deploying the design system website.
2. **Pull request validation**: Dependency checks run on every PR that modifies package.json or package-lock.json.

### Local Development Tools

For local development, the following tools are provided:

1. **Dependency check script**: Run with `npm run check-deps` to verify all required dependencies are installed.
2. **Pre-install hook**: Automatically checks dependencies before new packages are installed.
3. **Pre-build hook**: Runs dependency checks and generates the component dependency graph before building.
4. **Component dependency visualization**: Available at `/dependencies` on the design system website.

## Automated Validations

### Required Dependencies

The system validates the presence of:

#### Radix UI Components
- `@radix-ui/react-accordion`
- `@radix-ui/react-checkbox`
- `@radix-ui/react-dialog`
- `@radix-ui/react-dropdown-menu`
- `@radix-ui/react-label`
- `@radix-ui/react-navigation-menu`
- `@radix-ui/react-radio-group`
- `@radix-ui/react-scroll-area`
- `@radix-ui/react-select`
- `@radix-ui/react-slot`
- `@radix-ui/react-switch`
- `@radix-ui/react-tabs`
- `@radix-ui/react-toast`
- `@radix-ui/react-tooltip`

#### Support Libraries
- `class-variance-authority`
- `clsx`
- `lucide-react`
- `tailwind-merge`
- `tailwindcss-animate`

### Version Requirements

The system verifies minimum versions for:

- **Node.js**: v18.x or higher
- **React/React DOM**: ^18.2.0
- **Next.js**: ^14.0.0
- **Tailwind CSS**: ^3.3.5

### Next.js Configuration Validation

The system validates the presence of required Next.js configurations for GitHub Pages deployment:

```javascript
{
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/fable-design-system' : '',
  // ... other required configurations
}
```

### Component Styling Validation

The system checks for improper use of Tailwind CSS, specifically:

- Use of arbitrary values in class notation (e.g., `w-[42rem]`, `h-[600px]`, etc.)
- Proper use of design tokens instead of hardcoded values

## Package Lock File Management

### Maintaining package-lock.json Sync

The system includes automated tools to keep package.json and package-lock.json in sync:

1. **Self-healing deployment workflow**: The deployment workflow checks if package-lock.json is out of sync and automatically updates it if needed.

2. **Manual lock file update workflow**: A dedicated workflow (`update-lockfile.yml`) can be triggered manually to update the package-lock.json file without requiring local development environment.

3. **Local development best practices**:
   - Always run `npm install` after modifying package.json
   - Commit both package.json and package-lock.json together
   - Run `npm ci` for clean installs to verify lock file consistency

### Common Lock File Synchronization Issues

If you encounter errors like:

```
npm error `npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync.
```

You can resolve them by:

1. **Local fix**: Run `npm install --package-lock-only` to update the lock file without installing packages
2. **Remote fix**: Trigger the "Update Package Lock File" workflow from GitHub Actions

## Component Dependency Visualization

The system generates an interactive visualization of component dependencies, showing:

- Hierarchical relationships between components
- Categorization by component type (UI, pattern, theme, layout)
- Total component count and dependency metrics

This visualization helps developers understand the component architecture and identify potential refactoring opportunities.

## Troubleshooting

### Missing Dependencies

If the dependency check fails with missing dependencies:

1. Install the missing dependencies with `npm install`
2. Ensure you're using the correct versions as specified in the DSD

### Next.js Configuration Issues

If the Next.js configuration validation fails:

1. Check the next.config.js file against the requirements in the DSD
2. Ensure all required configurations are present and properly formatted

### Dependency Graph Generation Failure

If the dependency graph fails to generate:

1. Ensure the `scripts` directory is executable (run `chmod +x scripts/*.js`)
2. Verify that the `glob` package is installed
3. Make sure the `public/data` directory exists and is writable

### CI/CD Failures

If the CI/CD workflow fails with dependency issues:

1. Check the workflow logs for specific error messages
2. If package-lock.json is out of sync, trigger the "Update Package Lock File" workflow
3. Verify that all required dependencies are installed with the correct versions

## Future Enhancements

Planned enhancements to the dependency validation system include:

1. Component-level TypeScript type checking
2. Automated accessibility validation against WCAG 2.1 AA standards
3. Visual regression testing for component styling
4. Bundle size analysis and optimization recommendations

---

*Last Updated: April 10, 2025*  
*Owner: Chief Design Officer*