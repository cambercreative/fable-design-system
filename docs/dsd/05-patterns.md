# Patterns

Design patterns are reusable solutions to common design problems. They help create a consistent and usable experience across the application.

## Navigation Patterns

### Primary Navigation

- **Mobile**: Bottom navigation bar with up to 5 key destinations
- **Desktop**: Left sidebar navigation with collapsible sections
- **Tablet**: Responsive combination - collapsible sidebar that can minimize to icons

#### Best Practices

- Highlight the current section
- Provide clear, descriptive labels
- Use recognizable icons paired with text labels
- Maintain consistent order and structure

### Story Navigation

Specialized navigation for moving through a story or narrative.

- Linear progress indicator showing completion
- Previous/Next controls for sequential navigation
- Chapter/section jumps for non-linear access
- Breadcrumb trail showing narrative path

## Form Patterns

### Progressive Forms

Break long forms into manageable steps to reduce cognitive load.

- Clear step indicators showing progress
- Logical grouping of related fields
- Save progress automatically between steps
- Allow backward navigation without losing data

### Inline Validation

Provide immediate feedback as users complete form fields.

- Validate fields on blur (when focus leaves the field)
- Show success indicators for correctly completed fields
- Display clear error messages with guidance on how to fix issues
- Use appropriate timing to avoid interrupting the user's flow

## Content Patterns

### Story Cards

Display story previews in a consistent, scannable format.

- Consistent card size and structure
- Clear visual hierarchy with title prominence
- Preview text that gives meaningful context
- Relevant metadata (date, length, topics)
- Clear affordance for interaction

### Content Loading

Manage expectations during content loading.

- Skeleton screens that reflect the upcoming content structure
- Maintain layout stability when content loads
- Progressive loading for long-form content
- Clear loading states with estimated time for longer operations

## Interaction Patterns

### Voice Input

Provide clear affordances and feedback for voice interactions.

- Visual indicators showing when system is listening
- Transcription feedback showing what was heard
- Clear error states when voice input fails
- Seamless fallback to text input when needed

### Conversational UI

Design patterns for AI-driven conversation flows.

- Clear distinction between user and AI messages
- Typing indicators when AI is generating responses
- Context preservation between sessions
- Natural conversation controls (interrupt, clarify, restart)

## Empty States

Provide helpful guidance when no content exists.

- Clear explanation of what the empty section is for
- Actionable next steps to fill the empty state
- Illustrative visuals that reinforce the purpose
- Encouraging tone that motivates action

## Error Handling

### Error Prevention

- Confirm destructive actions
- Provide clear constraints and requirements upfront
- Use appropriate input types to minimize errors
- Offer suggestions and auto-correction when possible

### Error Recovery

- Clear, non-technical error messages
- Specific guidance on how to resolve the issue
- Maintain entered data when errors occur
- Provide alternative paths or fallbacks when available