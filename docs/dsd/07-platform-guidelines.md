# Platform Guidelines

Fable is designed to work seamlessly across different platforms while respecting platform-specific conventions and capabilities. These guidelines ensure a consistent yet platform-appropriate experience.

## Web Guidelines

### Responsive Design

- Implement a mobile-first responsive approach
- Use flexible grids and layouts that adapt to different screen sizes
- Design break points:
  - Mobile: 320px - 599px
  - Tablet: 600px - 959px
  - Desktop: 960px+

### Browser Support

- Support the latest two versions of modern browsers (Chrome, Firefox, Safari, Edge)
- Ensure core functionality works in older browsers with graceful degradation
- Test on both desktop and mobile browsers

### Performance

- Aim for a page load time under 3 seconds
- Implement lazy loading for images and non-critical content
- Optimize assets (images, scripts, styles)
- Use appropriate caching strategies

### Web-Specific Interactions

- Implement hover states for interactive elements on desktop
- Support both click and touch interactions
- Ensure keyboard navigation works intuitively
- Use standard web patterns for form validation and submission

## iOS Guidelines

### iOS Design Principles

While maintaining Fable's design language, follow these iOS-specific principles:

- Defer to content, letting the content guide the experience
- Provide clear feedback for interactions
- Use depth and hierarchy to enhance understanding

### Navigation Patterns

- Use standard iOS navigation controls where appropriate:
  - Tab bars for main sections
  - Navigation bars with back buttons
  - Modal sheets for focused tasks

### UI Components

- Adapt Fable components to follow iOS Human Interface Guidelines:
  - Buttons should look tappable
  - Form controls should match iOS native appearance
  - Lists should support standard iOS gestures

### iOS-Specific Features

- Support Dynamic Type for text sizing
- Implement Dark Mode support
- Use standard iOS icons where appropriate
- Support native sharing functionality

## Android Guidelines

### Material Design Integration

Align Fable's design language with Material Design principles:

- Use appropriate elevation and shadows
- Implement motion that feels natural and purposeful
- Follow Material Design grid and spacing systems

### Navigation Patterns

- Use standard Android navigation where appropriate:
  - Bottom navigation for main sections
  - App bars with navigation icons
  - Navigation drawer for complex navigation
  - Floating action buttons for primary actions

### UI Components

- Adapt Fable components to follow Material Design guidelines:
  - Use Material-style ripple effects for touch feedback
  - Implement Material-style input fields
  - Support Android-specific gestures

### Android-Specific Features

- Support different screen densities
- Implement proper back button behavior
- Design for both portrait and landscape orientations
- Support system dark theme

## Cross-Platform Considerations

### Consistency vs. Platform Fidelity

- Maintain consistent branding, color scheme, and typography across platforms
- Adapt interaction patterns to match platform conventions
- Use platform-specific animations and transitions
- Ensure features work appropriately for each platform's capabilities

### Feature Parity

- Core functionality should be available on all platforms
- Platform-specific features should be implemented where they add value
- When a feature is not available on a platform, provide an appropriate alternative

### Transitions Between Platforms

- Ensure user data and progress sync seamlessly between platforms
- Maintain consistent naming and terminology across platforms
- Design for multi-device user journeys