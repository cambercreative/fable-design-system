# Fable Typography System

## Font Families

Fable employs a dual-font strategy to create a dynamic, memorable, and highly functional typographic system.

### Display Font: Fraunces

Fraunces is our primary display typeface, used for headings and emphasis. It brings personality and a distinctive editorial quality to our brand voice.

**Characteristics:**
- Warm, friendly serifs with high contrast
- Variable font with optical size and weight axes
- Distinctive personality without sacrificing legibility
- Gives a storytelling, literary quality to our interfaces

**Usage:**
- Headings (h1, h2, h3)
- Featured quotes or testimonials
- Brand statements and key messages
- Section titles

### Body Font: Inter

Inter is our workhorse sans-serif, designed specifically for digital interfaces with excellent legibility at all sizes.

**Characteristics:**
- Neutral, clean sans-serif
- Optimized for screen reading
- Excellent legibility even at small sizes
- Large x-height for improved readability
- Comprehensive character set and OpenType features

**Usage:**
- Body text
- UI elements
- Navigation
- Form elements
- Secondary and tertiary headings (h4, h5, h6)
- Captions and metadata

## Type Scale

Fable uses a purposeful type scale to create clear hierarchy while maintaining harmony and rhythm throughout the interface.

| Token Name | Font Size | Line Height | Font Weight | Font Family | Use Case |
|------------|-----------|-------------|-------------|-------------|------------|
| display-1  | 4rem (64px) | 1.1 (70px) | 700 | Fraunces | Hero headings, major page titles |
| display-2  | 3rem (48px) | 1.1 (53px) | 700 | Fraunces | Section headings, featured content |
| display-3  | 2.25rem (36px) | 1.2 (43px) | 600 | Fraunces | Card titles, secondary page headings |
| heading-1  | 2rem (32px) | 1.2 (38px) | 600 | Fraunces | Main headings within content |
| heading-2  | 1.5rem (24px) | 1.3 (31px) | 600 | Fraunces | Subheadings, section dividers |
| heading-3  | 1.25rem (20px) | 1.4 (28px) | 600 | Fraunces | Minor headings, featured metadata |
| heading-4  | 1.125rem (18px) | 1.4 (25px) | 600 | Inter | Subsection headings |
| heading-5  | 1rem (16px) | 1.5 (24px) | 600 | Inter | Small headings, form section labels |
| heading-6  | 0.875rem (14px) | 1.5 (21px) | 700 | Inter | Minor labels, category tags |
| body-large | 1.125rem (18px) | 1.6 (29px) | 400 | Inter | Featured body text, introductions |
| body       | 1rem (16px) | 1.6 (26px) | 400 | Inter | Standard body text |
| body-small | 0.875rem (14px) | 1.6 (22px) | 400 | Inter | Secondary information, captions |
| caption    | 0.75rem (12px) | 1.5 (18px) | 400 | Inter | Meta information, timestamps |
| overline   | 0.75rem (12px) | 1.6 (19px) | 600 | Inter | Labels, all-caps section markers |

## Font Weights

Fable utilizes a purposeful range of font weights to create emphasis and hierarchy:

| Weight Name | Numeric Value | Usage |
|-------------|---------------|----------|
| Regular     | 400          | Body text, general UI elements |
| Medium      | 500          | Mild emphasis, active states |
| Semibold    | 600          | Subheadings, important UI elements |
| Bold        | 700          | Primary headings, strong emphasis |
| Extrabold   | 800          | Used sparingly for extreme emphasis |

## Typography in UI Components

### Buttons

- Primary buttons: `body` size (16px), Semibold (600) weight, Inter
- Secondary buttons: `body` size (16px), Medium (500) weight, Inter
- Text buttons: `body` size (16px), Medium (500) weight, Inter
- Small buttons: `body-small` size (14px), Medium (500) weight, Inter

### Form Elements

- Input labels: `body-small` size (14px), Medium (500) weight, Inter
- Input text: `body` size (16px), Regular (400) weight, Inter
- Helper text: `caption` size (12px), Regular (400) weight, Inter
- Error messages: `caption` size (12px), Regular (400) weight, Inter

### Cards

- Card titles: `heading-3` size (20px), Semibold (600) weight, Fraunces
- Card body: `body` size (16px), Regular (400) weight, Inter
- Card metadata: `body-small` size (14px), Regular (400) weight, Inter

### Navigation

- Primary navigation: `body` size (16px), Medium (500) weight, Inter
- Secondary navigation: `body-small` size (14px), Medium (500) weight, Inter
- Navigation section headings: `overline` size (12px), Semibold (600) weight, Inter, all-caps

## Typography Implementation Guidelines

### Font Loading Strategy

To ensure optimal performance:

- Preload Fraunces and Inter with only the necessary weights
- Implement a font-display strategy of 'swap' to prevent invisible text during loading
- Consider subsetting fonts to include only required characters

### Responsive Behavior

Our typography scales appropriately across breakpoints:

- Mobile breakpoint: Base sizes are maintained for readability, but display sizes are reduced by ~10-20%
- Tablet breakpoint: Sizes scale to approximately 95% of desktop values
- Desktop and larger: Full type scale as defined above

### Accessibility Requirements

- All text must maintain a minimum contrast ratio of 4.5:1 against its background (WCAG AA)
- Body text should not be smaller than 16px (1rem) for primary reading experiences
- Line heights should be at least 1.5x font size for body text to support readability
- Text spacing (letter-spacing, word-spacing, line height) must be adjustable without breaking layouts
- Font sizes should be defined using relative units (rem) to respect user preferences

### Internationalization Considerations

- Both Fraunces and Inter support extended Latin, Greek, and Cyrillic character sets
- Line heights and container sizes should accommodate languages with taller characters
- Text containers should allow for expansion of text when translated (approximately 30% extra space)
- Right-to-left (RTL) language support requires careful consideration of text alignment and direction
