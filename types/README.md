# Fable Design System Type Definitions

This directory contains centralized TypeScript type definitions for all components in the Fable Design System. These types ensure consistent prop interfaces across components and provide comprehensive type safety and autocompletion in your development environment.

## Structure

The type definitions are organized as follows:

- `common.ts` - Shared types, interfaces, and utility types used across components
- `ui/` - Types for core UI components (buttons, inputs, etc.)
- `patterns/` - Types for composite pattern components (navigation, cards, etc.)
- `index.ts` - Central export file that re-exports all types

## Usage

### Importing Types

You can import types either from the central export file or directly from specific component type files:

```typescript
// Import from central export
import { ButtonProps, CardProps, FormElementProps } from '@/types';

// Or import directly from specific files
import { ButtonProps } from '@/types/ui/button';
import { StoryCardProps } from '@/types/patterns/story-card';
```

### Using Component Props Types

When creating components, extend the appropriate interface:

```typescript
import { FC } from 'react';
import { ButtonProps } from '@/types';

const CustomButton: FC<ButtonProps> = ({ 
  variant = 'primary',
  size = 'default',
  children,
  ...props
}) => {
  return (
    <button 
      className={`custom-button custom-button--${variant} custom-button--${size}`}
      {...props}
    >
      {children}
    </button>
  );
};
```

### Common Type Usage Examples

#### Base Props

The `BaseProps` interface provides common properties available on all components:

```typescript
import { BaseProps } from '@/types';

interface MyComponentProps extends BaseProps {
  customProp: string;
}
```

#### Form Element Props

The `FormElementProps` interface provides properties common to form elements:

```typescript
import { FormElementProps } from '@/types';

interface CustomInputProps extends FormElementProps {
  maxLength?: number;
}
```

#### Interactive Props

The `InteractiveProps` interface provides properties for interactive elements:

```typescript
import { InteractiveProps } from '@/types';

interface CustomButtonProps extends InteractiveProps {
  variant?: 'primary' | 'secondary';
}
```

## Type Extension

When creating new components or extending existing ones, follow these guidelines:

1. Extend the appropriate base interfaces (`BaseProps`, `FormElementProps`, etc.)
2. Use existing type definitions for common prop patterns
3. Add specific props with detailed JSDoc comments
4. Keep prop names consistent with the design system conventions

Example:

```typescript
/**
 * Props for a custom date picker component
 */
export interface DatePickerProps extends FormElementProps {
  /** Selected date value */
  value?: Date;
  /** Default date for uncontrolled component */
  defaultValue?: Date;
  /** Called when date selection changes */
  onChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Format for displaying the date */
  displayFormat?: string;
}
```

## Design Tokens

The type system includes type definitions for design tokens to ensure consistency:

```typescript
// Size tokens
type Size = 'default' | 'sm' | 'lg' | 'icon';

// Animation timing tokens
type AnimationTiming = 'instant' | 'quick' | 'standard' | 'relaxed' | 'elaborate';

// Status states
type StatusState = 'default' | 'success' | 'warning' | 'error' | 'info';

// Button variants
type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'default' | 'outline' | 'ghost';
```

## Component Prop Pattern

The component prop pattern follows this structure:

1. **Base props** - Common to all components (className, children, etc.)
2. **Behavior props** - Control component functionality (onChange, value, etc.)
3. **Appearance props** - Control visual styling (variant, size, etc.)
4. **State props** - Control component state (disabled, loading, error, etc.)
5. **Accessibility props** - Support a11y features (aria-*, role, etc.)

Following this pattern ensures consistency across the design system.
