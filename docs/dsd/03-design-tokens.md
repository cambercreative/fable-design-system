# Design Tokens

Design tokens are the visual design atoms of the design system—specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values to ensure flexibility and maintain a consistent visual language.

## Color Tokens

### Brand Colors

```
--color-primary: #6366F1;        /* Indigo */
--color-primary-light: #818CF8;
--color-primary-dark: #4F46E5;

--color-secondary: #10B981;      /* Emerald */
--color-secondary-light: #34D399;
--color-secondary-dark: #059669;
```

### Neutral Colors

```
--color-background: #FFFFFF;
--color-surface: #F9FAFB;
--color-border: #E5E7EB;

--color-text-primary: #1F2937;
--color-text-secondary: #6B7280;
--color-text-tertiary: #9CA3AF;
```

### Semantic Colors

```
--color-error: #EF4444;
--color-warning: #F59E0B;
--color-success: #10B981;
--color-info: #3B82F6;
```

## Spacing Tokens

Our spacing system is based on 4px increments, providing a harmonious and consistent rhythm throughout the interface.

```
--spacing-xs: 0.25rem;  /* 4px */
--spacing-sm: 0.5rem;   /* 8px */
--spacing-md: 1rem;     /* 16px */
--spacing-lg: 1.5rem;   /* 24px */
--spacing-xl: 2rem;     /* 32px */
--spacing-xxl: 3rem;    /* 48px */
```

## Typography Tokens

### Font Family

```
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-family-code: 'Source Code Pro', monospace;
```

### Font Sizes

```
--font-size-xs: 0.75rem;   /* 12px */
--font-size-sm: 0.875rem;  /* 14px */
--font-size-md: 1rem;      /* 16px */
--font-size-lg: 1.25rem;   /* 20px */
--font-size-xl: 1.5rem;    /* 24px */
--font-size-xxl: 2rem;     /* 32px */
--font-size-xxxl: 2.5rem;  /* 40px */
```

### Font Weights

```
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Line Heights

```
--line-height-tight: 1.2;   /* Headings */
--line-height-snug: 1.3;    /* Subheadings */
--line-height-normal: 1.5;  /* Body text */
--line-height-relaxed: 1.75; /* Long-form content */
```

## Border Radius Tokens

```
--border-radius-xs: 0.125rem;  /* 2px */
--border-radius-sm: 0.25rem;   /* 4px */
--border-radius-md: 0.5rem;    /* 8px */
--border-radius-lg: 1rem;      /* 16px */
--border-radius-xl: 2rem;      /* 32px */
--border-radius-full: 9999px;  /* Circular */
```

## Shadow Tokens

```
--shadow-none: none;
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

## Transition Tokens

```
--transition-default: 0.2s ease-in-out;
--transition-fast: 0.1s ease-in-out;
--transition-slow: 0.3s ease-in-out;
```

## Z-Index Tokens

```
--z-index-dropdown: 10;
--z-index-sticky: 20;
--z-index-fixed: 30;
--z-index-modal-backdrop: 40;
--z-index-modal: 50;
--z-index-popover: 60;
--z-index-tooltip: 70;
```

## Breakpoint Tokens

```
--breakpoint-xs: 0px;
--breakpoint-sm: 600px;
--breakpoint-md: 960px;
--breakpoint-lg: 1280px;
--breakpoint-xl: 1920px;
```