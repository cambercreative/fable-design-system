# Fable Color System

## Primary Color Palette

The Fable color system is built around a distinctive purple hue that conveys creativity, imagination, and a sense of wonder—all fundamental qualities of our brand essence.

| Token Name | Hex Value | HSL Value | Description |
|-----------|-----------|-----------|-------------|
| fable-50 | #F9F5FE | hsl(280, 75%, 98%) | Lightest tint, used for subtle backgrounds |
| fable-100 | #F3EBFD | hsl(280, 75%, 95%) | Ultra light tint, used for card backgrounds |
| fable-200 | #E7D7FB | hsl(280, 72%, 90%) | Very light tint, used for hover states |
| fable-300 | #D1B3F8 | hsl(280, 69%, 80%) | Light tint, used for tertiary elements |
| fable-400 | #B47EF2 | hsl(280, 66%, 65%) | Medium tint, used for secondary elements |
| fable-500 | #9040E9 | hsl(280, 60%, 50%) | Primary brand color, used for primary buttons and accents |
| fable-600 | #7231BA | hsl(280, 56%, 40%) | Medium shade, used for hover states on primary elements |
| fable-700 | #56258C | hsl(280, 52%, 30%) | Dark shade, used for text on light backgrounds |
| fable-800 | #38185E | hsl(280, 48%, 20%) | Very dark shade, used for headings on light backgrounds |
| fable-900 | #2B1247 | hsl(280, 44%, 15%) | Ultra dark shade, used for emphasized text |
| fable-950 | #1C0C2E | hsl(280, 40%, 10%) | Darkest shade, used for high-contrast text |

## Supporting Color Palette

In addition to our primary purple palette, Fable utilizes a carefully selected range of supporting colors to create a cohesive and balanced visual system.

### Neutrals

Neutral colors provide the canvas for our UI components and ensure readability and hierarchy.

| Token Name | Hex Value | HSL Value | Description |
|-----------|-----------|-----------|-------------|
| neutral-50 | #FAFAFA | hsl(0, 0%, 98%) | Background color for light mode |
| neutral-100 | #F5F5F5 | hsl(0, 0%, 96%) | Subtle dividers, disabled states |
| neutral-200 | #E5E5E5 | hsl(0, 0%, 90%) | Borders, dividers |
| neutral-300 | #D4D4D4 | hsl(0, 0%, 83%) | Disabled text, icons |
| neutral-400 | #A3A3A3 | hsl(0, 0%, 64%) | Placeholder text |
| neutral-500 | #737373 | hsl(0, 0%, 45%) | Secondary text |
| neutral-600 | #525252 | hsl(0, 0%, 32%) | Primary text on light backgrounds |
| neutral-700 | #404040 | hsl(0, 0%, 25%) | Emphasized text |
| neutral-800 | #262626 | hsl(0, 0%, 15%) | High-contrast text |
| neutral-900 | #171717 | hsl(0, 0%, 9%) | Ultra high-contrast text |
| neutral-950 | #0A0A0A | hsl(0, 0%, 4%) | Background color for dark mode |

### Semantic Colors

These colors convey specific meanings across the interface.

| Token Name | Hex Value | HSL Value | Description |
|-----------|-----------|-----------|-------------|
| success-50 | #ECFDF5 | hsl(145, 80%, 96%) | Success background |
| success-500 | #10B981 | hsl(162, 84%, 39%) | Success foreground, confirmation messages |
| success-900 | #064E3B | hsl(170, 83%, 16%) | Dark success for text on light backgrounds |
| warning-50 | #FFFBEB | hsl(49, 100%, 96%) | Warning background |
| warning-500 | #F59E0B | hsl(38, 92%, 50%) | Warning foreground, cautionary messages |
| warning-900 | #78350F | hsl(26, 77%, 26%) | Dark warning for text on light backgrounds |
| error-50 | #FEF2F2 | hsl(0, 86%, 97%) | Error background |
| error-500 | #EF4444 | hsl(0, 84%, 60%) | Error foreground, negative messages |
| error-900 | #7F1D1D | hsl(0, 63%, 31%) | Dark error for text on light backgrounds |
| info-50 | #EFF6FF | hsl(217, 100%, 97%) | Information background |
| info-500 | #3B82F6 | hsl(217, 91%, 60%) | Information foreground, helpful messages |
| info-900 | #1E3A8A | hsl(222, 65%, 33%) | Dark info for text on light backgrounds |

## Gradients

Gradients add depth and visual interest to our interface. They're particularly useful for call-to-action elements and decorative accents.

| Gradient Name | Value | Usage |
|--------------|-------|-------|
| primary-gradient | linear-gradient(135deg, #7231BA 0%, #9040E9 100%) | Primary buttons, featured elements |
| subtle-gradient | linear-gradient(135deg, #F3EBFD 0%, #F9F5FE 100%) | Cards, panels, section backgrounds |
| vibrant-gradient | linear-gradient(135deg, #56258C 0%, #9040E9 100%) | Illustrations, decorative elements |

## Color Usage Guidelines

### Text Colors

- Primary text: neutral-800 on light backgrounds, neutral-50 on dark backgrounds
- Secondary text: neutral-600 on light backgrounds, neutral-200 on dark backgrounds
- Tertiary text: neutral-500 on light backgrounds, neutral-400 on dark backgrounds

### Component-Specific Colors

- Primary buttons: primary-gradient
- Secondary buttons: neutral-200 background with neutral-800 text
- Input fields: white background, neutral-300 border, neutral-800 text
- Cards: white background, optional subtle-gradient for featured cards

### Accessibility Considerations

All color combinations meet WCAG 2.1 AA standards for contrast ratio. When using colors from the palette:

- Ensure text on colored backgrounds has sufficient contrast (minimum 4.5:1 for normal text, 3:1 for large text)
- Don't rely solely on color to convey meaning; always include supporting text or icons
- Provide alternative visual cues for users with color vision deficiencies

### Dark Mode Adaptations

In dark mode:

- Background colors shift to darker values (neutral-950 as base)
- Text colors invert (neutral-50 becomes primary text)
- Purple palette adjusts saturation slightly to maintain visual comfort
- Gradients remain consistent but with adjusted opacity
