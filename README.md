# Fable Design System

Visual documentation of Fable's design language, components, and patterns that power our AI-driven life stories platform.

## Overview

The Fable Design System provides a comprehensive collection of design guidelines, components, and patterns that ensure consistent, accessible, and delightful experiences across all Fable products.

## Features

- **Design Foundations**: Colors, typography, spacing, and other core design elements
- **Component Library**: Interactive UI components with documentation and code examples
- **Patterns & Templates**: Common UI patterns and page templates for rapid development
- **Accessibility**: WCAG 2.1 Level AA compliant components and guidelines
- **Responsive Design**: Comprehensive specifications for different screen sizes

## Technology

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

## Usage

Visit `http://localhost:3000` to view the design system in your browser.

## Structure

- `/app` - Next.js application pages
- `/components` - Reusable UI components
  - `/ui` - Core UI components
  - `/lib` - Utility functions
- `/public` - Static assets

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
```

## Deployment

The design system is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## Contributing

Please refer to the guidelines in the Design System Document (DSD) for contribution instructions.

## License

This project is proprietary to Fable LLC. All rights reserved.
