# Code Playground Component

The Code Playground is an interactive component explorer that allows designers and developers to adjust component properties in real-time and see the generated code. This documentation provides implementation details and usage examples for the Code Playground components.

## Features

- Interactive property controls for component props
- Real-time preview of the component with current props applied
- Syntax-highlighted code generation
- Copy-to-clipboard functionality
- Responsive device preview with orientation toggle
- Dark mode support
- Full accessibility features

## Component Types

### Basic Code Playground

The `CodePlayground` component provides a basic interactive playground with property controls and code generation.

```tsx
import { CodePlayground } from '@/components/code-playground';

// Sample component and properties
const ButtonComponent = (props) => <Button {...props}>{props.children || 'Button'}</Button>;

const buttonProperties = [
  {
    type: 'select',
    label: 'Variant',
    options: ['primary', 'secondary', 'tertiary'],
    defaultValue: 'primary',
    prop: 'variant'
  },
  {
    type: 'boolean',
    label: 'Disabled',
    defaultValue: false,
    prop: 'disabled'
  }
];

// Default code for the component
const buttonDefaultCode = `<Button
  variant="primary"
  disabled={false}
>
  Button
</Button>`;

// Usage
<CodePlayground
  component={ButtonComponent}
  componentName="Button"
  properties={buttonProperties}
  defaultCode={buttonDefaultCode}
  description="Try adjusting the properties of the Button component."
/>
```

### Responsive Preview Playground

The `ResponsivePreviewPlayground` extends the basic playground with device simulation capabilities.

```tsx
import { ResponsivePreviewPlayground } from '@/components/code-playground';

// Usage
<ResponsivePreviewPlayground
  component={ButtonComponent}
  componentName="Button"
  properties={buttonProperties}
  defaultCode={buttonDefaultCode}
  description="Explore the Button component properties."
  responsiveDescription="Check how the Button responds to different device sizes."
>
  <div className="mt-m">
    <h3>Additional component documentation</h3>
    <p>This section can contain usage guidelines, best practices, etc.</p>
  </div>
</ResponsivePreviewPlayground>
```

## Property Types

The Code Playground supports the following property types:

| Type | Description | Example |
|------|-------------|---------|
| `select` | Dropdown menu with predefined options | `{ type: 'select', label: 'Variant', options: ['primary', 'secondary'], defaultValue: 'primary', prop: 'variant' }` |
| `boolean` | Checkbox for boolean values | `{ type: 'boolean', label: 'Disabled', defaultValue: false, prop: 'disabled' }` |
| `string` | Text input for string values | `{ type: 'string', label: 'Label', defaultValue: 'Button', prop: 'children' }` |
| `number` | Number input | `{ type: 'number', label: 'Size', defaultValue: 16, prop: 'size' }` |
| `color` | Color picker with hex input | `{ type: 'color', label: 'Background', defaultValue: '#FF3300', prop: 'backgroundColor' }` |

## Responsive Device Options

The `ResponsivePreviewPlayground` component supports the following device presets:

| Device | Width | Height |
|--------|-------|--------|
| Mobile S | 320px | 570px |
| Mobile | 375px | 667px |
| Tablet | 768px | 1024px |
| Desktop | 1024px | 768px |
| Desktop L | 1440px | 900px |

Each device can be toggled between portrait and landscape orientations.

## Accessibility

The Code Playground components follow WCAG 2.1 AA guidelines:

- All controls have proper labels and ARIA attributes
- Keyboard navigation works for all interactive elements
- Proper color contrast is maintained in both light and dark modes
- Focus states are clearly visible
- Screen reader announcements for copy-to-clipboard actions

## Implementation Details

### Component Props

#### CodePlayground

| Prop | Type | Description |
|------|------|-------------|
| `component` | React.ComponentType<any> | The React component to render and manipulate |
| `componentName` | string | The display name of the component (used for generated code) |
| `properties` | PropertyControl[] | Array of property controls |
| `defaultCode` | string | Initial code example |
| `description` | string (optional) | Description of the component |
| `children` | React.ReactNode (optional) | Additional content to render below the playground |

#### ResponsivePreviewPlayground

| Prop | Type | Description |
|------|------|-------------|
| All props from CodePlayground | | Inherits all props from CodePlayground |
| `responsiveDescription` | string (optional) | Description for the responsive preview tab |

### Integration with Design System

The Code Playground uses Fable's design tokens and components:

- Colors follow the Fable color system
- Typography uses Faro and Atkinson Hyperlegible fonts
- Spacing follows the standardized spacing scale
- Animation timings use the defined motion system
- Dark mode support integrates with the theme system