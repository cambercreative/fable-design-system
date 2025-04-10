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

## Future Enhancements

Planned enhancements to the dependency validation system include:

1. Component-level TypeScript type checking
2. Automated accessibility validation against WCAG 2.1 AA standards
3. Visual regression testing for component styling
4. Bundle size analysis and optimization recommendations

---

*Last Updated: April 10, 2025*  
*Owner: Chief Design Officer*