# Accessibility

Fable is committed to creating inclusive products that can be used by everyone, regardless of ability or context. We follow the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA as our baseline standard.

## Core Principles

We design and develop with these four principles in mind:

1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and the operation of the user interface must be understandable.
4. **Robust**: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.

## Visual Design

### Color and Contrast

- Text must have a contrast ratio of at least 4.5:1 against its background (Level AA)
- Large text (18pt or 14pt bold) must have a contrast ratio of at least 3:1
- UI components and graphic objects must have a contrast ratio of at least 3:1 against adjacent colors
- Never use color alone to convey information or distinguish elements

### Typography

- Use a minimum text size of 16px for body text
- Maintain proper heading hierarchy (H1 → H6)
- Avoid justified text or excessive use of all caps
- Ensure line height is at least 1.5 times the font size
- Maintain adequate spacing between paragraphs (at least 1.5 times larger than line spacing)

### Motion and Animation

- Provide mechanisms to pause, stop, or hide any animation that starts automatically
- Avoid content that flashes more than three times per second
- Consider reducing motion for users who have set their system preferences accordingly

## Interaction Design

### Keyboard Accessibility

- Ensure all functionality is operable through a keyboard
- Maintain a logical tab order that follows the visual layout
- Provide visible focus indicators
- Avoid keyboard traps where focus cannot move away from a component
- Implement shortcuts for frequent actions (with care to avoid conflicts)

### Touch Targets

- Touch targets should be at least 44px × 44px
- Provide adequate spacing between touch targets
- Ensure drag operations have keyboard alternatives

### Forms and Inputs

- Associate labels with form controls
- Group related form elements with fieldset and legend
- Provide clear error identification and instructions
- Support autocomplete for common fields
- Allow sufficient time to complete forms

## Content and Semantics

### Document Structure

- Use semantic HTML elements that reflect their purpose
- Implement proper heading hierarchy
- Use lists for groups of related items
- Provide descriptive page titles
- Ensure landmarks are properly used (header, nav, main, footer, etc.)

### Images and Media

- Provide alternative text for images
- Include captions and transcripts for audio and video content
- Ensure that media players have keyboard-accessible controls

### Writing and Language

- Use plain language and avoid jargon
- Explain idioms and complex terms
- Support screen readers with proper pronunciation guidance when needed
- Identify the primary language of the page and language changes within the content

## Testing and Validation

### Automated Testing

- Integrate accessibility testing into CI/CD pipelines
- Use tools like Axe, WAVE, or Lighthouse for automated checks
- Address all critical and serious issues before releasing

### Manual Testing

- Test with keyboard navigation only
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test with high contrast mode
- Test with text scaling (up to 200%)

### User Testing

- Include users with disabilities in usability testing
- Test with a variety of assistive technologies
- Document and prioritize accessibility issues discovered during testing