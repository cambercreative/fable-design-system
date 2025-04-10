# Components

## Button

Buttons are used to initiate actions and guide users through the interface. They are one of the most important interactive elements in our design system.

### Variants

1. **Primary Button**
   - Background: var(--color-primary)
   - Text: White
   - Used for the main call-to-action on a page
   - Example: "Save Story", "Continue"

2. **Secondary Button**
   - Background: White
   - Border: 1px solid var(--color-primary)
   - Text: var(--color-primary)
   - Used for secondary actions
   - Example: "Cancel", "Back"

3. **Tertiary Button**
   - Background: Transparent
   - Text: var(--color-primary)
   - Used for less prominent actions
   - Example: "Learn More", "View Details"

### Sizes

1. **Small**
   - Padding: var(--spacing-xs) var(--spacing-md)
   - Font Size: var(--font-size-sm)
   - Used in tight spaces or for less important actions

2. **Medium (Default)**
   - Padding: var(--spacing-sm) var(--spacing-lg)
   - Font Size: var(--font-size-md)
   - Used for most button instances

3. **Large**
   - Padding: var(--spacing-md) var(--spacing-xl)
   - Font Size: var(--font-size-lg)
   - Used for prominent calls to action

### States

1. **Default**
2. **Hover**: Slightly darker background
3. **Active/Pressed**: Darker background, slight scale down
4. **Focused**: Focus ring for keyboard navigation
5. **Disabled**: Reduced opacity, not clickable

### Accessibility

- Minimum touch target size of 44px × 44px for mobile
- Color contrast ratio of at least 4.5:1 between text and background
- Visible focus states for keyboard navigation
- Descriptive button text that clearly indicates the action

### Best Practices

- Use verb-led labels that clearly describe the action
- Maintain consistent button positioning across the application
- Limit the number of primary buttons on a page to avoid confusion
- Consider the visual hierarchy of multiple buttons in a group

## Input

Text inputs allow users to enter text information, used for forms and search.

### Variants

1. **Standard Input**
   - Used for most text input needs

2. **Search Input**
   - Includes search icon and clear button

3. **Text Area**
   - Multi-line text input for longer content

4. **Password Input**
   - Includes show/hide password toggle

### States

1. **Default**
2. **Focused**
3. **Filled**
4. **Error**
5. **Disabled**

### Anatomy

- Label
- Input field
- Helper text
- Error message (when applicable)
- Icon (optional)

### Accessibility

- Always use labels for form controls
- Provide clear error messages
- Support keyboard navigation
- Use sufficient color contrast

## Card

Cards are containers that group related content and actions.

### Variants

1. **Standard Card**
   - Used for most content display needs

2. **Interactive Card**
   - Entire card is clickable

3. **Elevated Card**
   - More prominent shadow for emphasis

### Anatomy

- Container
- Header (optional)
- Media (optional)
- Content area
- Actions (optional)

### Best Practices

- Use cards to group related information
- Maintain consistent padding within and between cards
- Limit the amount of information in a single card
- Consider the card hierarchy on the page

## More components will be added as they are developed.