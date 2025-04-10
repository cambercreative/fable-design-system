# Fable Design System

A comprehensive design system for Fable - capturing life stories through AI.

## Overview

The Fable Design System is a collection of reusable components, design guidelines, and resources that ensure consistency and quality across all Fable products. This repository hosts the design system documentation website and component library.

## Features

- **Component Library**: A collection of React components built with styled-components
- **Design Guidelines**: Principles, best practices, and usage guidelines
- **Design Tokens**: Colors, typography, spacing, and other design variables
- **Resources**: Assets, tools, and templates for designers and developers

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cambercreative/fable-design-system.git
cd fable-design-system
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view the design system website.

### Storybook

To explore and develop components in isolation:

```bash
npm run storybook
```

This will start Storybook at [http://localhost:6006](http://localhost:6006).

## Using the Design System

### Installing as a Dependency

```bash
npm install @fable/design-system
```

### Importing Components

```jsx
import { Button } from '@fable/design-system';

function App() {
  return (
    <Button variant="primary" size="medium">
      Click Me
    </Button>
  );
}
```

### Theming

```jsx
import { ThemeProvider } from 'styled-components';
import { theme } from '@fable/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your application */}
    </ThemeProvider>
  );
}
```

## Contributing

### Development Workflow

1. Create a feature branch:
```bash
git checkout -b feature/component-name
```

2. Make your changes and test them in Storybook.

3. Submit a pull request.

### Directory Structure

```
/
├── .github/            # GitHub-specific files (workflows, templates)
├── .storybook/         # Storybook configuration
├── public/             # Static assets
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable UI components
│   ├── pages/          # Website pages
│   ├── styles/         # Global styles and themes
│   └── utils/          # Utility functions
└── docs/               # Additional documentation
```

## Deployment

The design system website is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

This project is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

## Contact

For any questions or issues, please contact the Fable design team.