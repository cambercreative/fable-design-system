# Fable Design System

<p align="center">
  <img src="public/images/fable-logo.svg" alt="Fable Logo" width="180" />
</p>

<p align="center">
  Visual documentation of Fable's design language, components, and patterns that power our AI-driven life stories platform.
</p>

<p align="center">
  <a href="https://cambercreative.github.io/fable-design-system" target="_blank">View the Documentation</a>
</p>

## Overview

The Fable Design System provides a comprehensive collection of design guidelines, components, and patterns that ensure consistent, accessible, and delightful experiences across all Fable products. It serves as both documentation and implementation for Fable's design language.

## Key Features

- **Design Foundations**: Colors, typography, spacing, and other core design elements that form the visual language of Fable
- **Component Library**: Interactive UI components with live examples, code, and usage guidelines
- **Patterns & Templates**: Common UI patterns and page templates for rapid development
- **Accessibility**: WCAG 2.1 Level AA compliant components with detailed accessibility documentation
- **Responsive Design**: Comprehensive specifications for different screen sizes
- **Interactive Code Playground**: Live component manipulation with real-time code generation
- **Dark Mode Support**: Complete light and dark theme implementation

## Technology Stack

- **Framework**: Next.js with React
- **Styling**: Tailwind CSS
- **Component Library**: Modified ShadCN UI components
- **Typography**: Faro and Atkinson Hyperlegible Next
- **Animation**: Framer Motion
- **Code Highlighting**: Prism.js
- **Accessibility Testing**: axe-core

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/cambercreative/fable-design-system.git

# Navigate to the project directory
cd fable-design-system

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:3000` to view the design system in your browser.

## Project Structure

```
fable-design-system/
├── app/                       # Next.js application pages
│   ├── accessibility/         # Accessibility guidelines
│   ├── components/            # Component documentation
│   ├── design-foundations/    # Design foundation documentation
│   ├── getting-started/       # Getting started guides
│   ├── patterns/              # Pattern documentation
│   ├── platform-guidelines/   # Platform-specific guidelines
│   └── resources/             # Resources and downloads
├── components/                # Shared UI components
│   ├── a11y/                  # Accessibility-specific components
│   ├── code-playground/       # Interactive code playground
│   ├── layout/                # Layout components
│   └── ui/                    # Core UI components
├── config/                    # Configuration files
├── lib/                       # Utility functions
├── public/                    # Static assets
└── styles/                    # Global styles and themes
```

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Format code with Prettier
npm run format

# Run linter
npm run lint

# Deploy to GitHub Pages
npm run deploy
```

## Deployment

The design system is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## Accessibility

All components in the Fable Design System are designed and tested to meet WCAG 2.1 Level AA compliance. The website itself follows best practices for accessibility:

- Keyboard navigation support
- Screen reader optimization
- Sufficient color contrast
- Focus management
- Support for reduced motion preferences
- Alternative text for images
- Proper heading hierarchy
- ARIA attributes where appropriate
- Skip to content link

## Contributing

Please refer to the guidelines in the Design System Document (DSD) for contribution instructions. The DSD can be found in the `/docs/dsd` directory of the main [Fable repository](https://github.com/cambercreative/fable).

1. Create a feature branch off the main branch
2. Make your changes following the design system guidelines
3. Run tests and ensure accessibility compliance
4. Submit a pull request with a detailed description of changes
5. Request a review from the design system team

## License

This project is proprietary to Fable LLC. All rights reserved.

## Contact

For questions about the Fable Design System, please contact the design team or open an issue on GitHub.
