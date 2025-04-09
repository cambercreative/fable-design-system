# Button Component

## Overview

Buttons are interactive elements that allow users to take actions throughout the interface. They are one of the most fundamental components in the Fable design system and come in various styles and sizes to accommodate different contexts and importance levels.

## Design Specifications

### Anatomy

1. **Container** - The visible button shape that provides the clickable area
2. **Label** - Text that communicates the action
3. **Icon** (optional) - Visual reinforcement of the action
4. **Focus state** - Visual indicator when the button receives keyboard focus

### Variants

#### Primary Button

The primary button uses our brand gradient background to draw attention to the main action on a screen.

- **Background**: Primary gradient (from fable-600 to fable-500)
- **Text Color**: White
- **Border**: None
- **Border Radius**: 9999px (fully rounded)
- **Hover State**: Slightly darker gradient (from fable-700 to fable-600)
- **Focus State**: 2px outline in fable-300 with 2px offset
- **Active/Pressed State**: Scale transform to 98%

#### Secondary Button

Secondary buttons are used for alternative, equal, or complementary actions to the primary button.

- **Background**: White
- **Text Color**: fable-600
- **Border**: 2px solid fable-500
- **Border Radius**: 9999px (fully rounded)
- **Hover State**: fable-50 background color
- **Focus State**: 2px outline in fable-300 with 2px offset
- **Active/Pressed State**: Scale transform to 98%

#### Tertiary Button

Tertiary buttons are used for less prominent actions or in space-constrained environments.

- **Background**: Transparent
- **Text Color**: fable-600
- **Border**: None
- **Border Radius**: 9999px (fully rounded)
- **Hover State**: fable-100 background
- **Focus State**: 2px outline in fable-300 with 2px offset
- **Active/Pressed State**: fable-200 background

#### Destructive Button

Destructive buttons indicate actions that may have destructive consequences, such as deleting or removing content.

- **Background**: error-500
- **Text Color**: White
- **Border**: None
- **Border Radius**: 9999px (fully rounded)
- **Hover State**: error-600 background
- **Focus State**: 2px outline in error-300 with 2px offset
- **Active/Pressed State**: Scale transform to 98%

### Sizes

#### Large

- **Height**: 48px
- **Horizontal Padding**: 24px
- **Font Size**: 16px (body)
- **Font Weight**: 600 (Semibold)
- **Icon Size** (if present): 20px

#### Medium (Default)

- **Height**: 40px
- **Horizontal Padding**: 20px
- **Font Size**: 16px (body)
- **Font Weight**: 600 (Semibold)
- **Icon Size** (if present): 18px

#### Small

- **Height**: 32px
- **Horizontal Padding**: 16px
- **Font Size**: 14px (body-small)
- **Font Weight**: 600 (Semibold)
- **Icon Size** (if present): 16px

#### Icon Only

- **Dimensions**: 40px × 40px (default), 48px × 48px (large), 32px × 32px (small)
- **Icon Size**: 18px (default), 20px (large), 16px (small)

## States

### Enabled

The default state of the button when it's interactive and available for user action.

### Hover

Visual feedback when a pointing device is positioned over the button.

### Focus

Visual feedback when the button receives keyboard focus, typically via tabbing.

### Active/Pressed

Momentary visual feedback during the click/tap action.

### Disabled

Visual indication that the button is not currently interactive.

- **Opacity**: 50%
- **Cursor**: not-allowed
- **No hover/active states**

### Loading

Indicates that the action is in progress.

- **Spinner**: Replaces text or appears alongside
- **Text**: May change to "Loading..." or maintain original label
- **Disabled interaction**: Prevents multiple clicks during processing

## Accessibility

### Requirements

- **Contrast Ratio**: Button text must maintain a minimum 4.5:1 contrast ratio against its background
- **Focus Indication**: Visible focus state with minimum 3:1 contrast against adjacent colors
- **Touch Target**: Minimum 44px × 44px touch target size for mobile interfaces
- **Screen Readers**: Proper role and state information

### Code Considerations

- Use native `<button>` elements whenever possible
- Include `aria-disabled="true"` on disabled buttons rather than the `disabled` attribute when maintaining focus is important
- For icon-only buttons, include `aria-label` to provide a textual alternative
- Loading buttons should include `aria-busy="true"`

## Usage Guidelines

### Do

- Use primary buttons for the main action on a screen
- Group related buttons together
- Use descriptive verbs for button labels ("Save" instead of "OK")
- Position the primary action on the right in button groups (for left-to-right languages)
- Consider using icons to reinforce meaning when appropriate

### Don't

- Avoid using multiple primary buttons on a single screen
- Don't use buttons for navigation (use links instead)
- Avoid generic labels like "Click Here"
- Don't place too many buttons together without visual hierarchy
- Avoid changing the button width based on label length (use consistent widths within a group)

## Implementation

### React Component API

```tsx
<Button
  variant="primary" | "secondary" | "tertiary" | "destructive"
  size="small" | "medium" | "large" | "icon"
  disabled={boolean}
  loading={boolean}
  icon={ReactNode}
  iconPosition="left" | "right"
  onClick={Function}
  type="button" | "submit" | "reset"
  {...props}
>
  Button Label
</Button>
```

### CSS Variables

```css
--button-primary-start: var(--fable-600);
--button-primary-end: var(--fable-500);
--button-primary-hover-start: var(--fable-700);
--button-primary-hover-end: var(--fable-600);
--button-border-radius: 9999px;
--button-focus-ring-color: var(--fable-300);
--button-focus-ring-offset: 2px;
--button-transition-duration: 150ms;
```

## Design Tokens

```json
{
  "button": {
    "borderRadius": {
      "value": "9999px"
    },
    "primary": {
      "background": {
        "default": {
          "start": {
            "value": "{color.fable.600}"
          },
          "end": {
            "value": "{color.fable.500}"
          }
        },
        "hover": {
          "start": {
            "value": "{color.fable.700}"
          },
          "end": {
            "value": "{color.fable.600}"
          }
        }
      },
      "text": {
        "value": "{color.neutral.50}"
      }
    },
    "secondary": {
      "background": {
        "default": {
          "value": "{color.neutral.50}"
        },
        "hover": {
          "value": "{color.fable.50}"
        }
      },
      "text": {
        "value": "{color.fable.600}"
      },
      "border": {
        "value": "{color.fable.500}"
      },
      "borderWidth": {
        "value": "2px"
      }
    }
  }
}
```