# Form Component Dependencies

## Overview

This document outlines the form-related dependencies required for the Fable Design System. These dependencies ensure consistent implementation of form components with proper validation, accessibility compliance, and data handling capabilities.

## Required Form Dependencies

The following dependencies have been added to align with the requirements specified in the Fable Design System Document (DSD):

### react-hook-form

A performance-focused form management library that provides a consistent approach to form state management, validation, and submission.

- **Version**: ^7.50.0
- **Purpose**: Manages form state, validation, error handling, and submission in a React-friendly way
- **Key Features**:
  - Uncontrolled form handling for improved performance
  - Field registration and validation
  - Error state management
  - Form submission handling
  - Support for form arrays and nested fields

### @hookform/resolvers

Adapters that allow react-hook-form to integrate with validation libraries.

- **Version**: ^3.3.4
- **Purpose**: Connects react-hook-form with validation libraries like Zod
- **Key Features**:
  - Seamless integration with validation schemas
  - Error message handling and transformation
  - Type-safe form validation

### zod

A TypeScript-first schema validation library.

- **Version**: ^3.22.4
- **Purpose**: Provides robust, type-safe validation schemas for form inputs
- **Key Features**:
  - TypeScript integration with static type inference
  - Composable validation schemas
  - Comprehensive error messages
  - Runtime type checking

### date-fns

A modern JavaScript date utility library.

- **Version**: ^3.3.1
- **Purpose**: Provides date formatting, parsing, and manipulation utilities
- **Key Features**:
  - Format dates for display in forms and UI components
  - Parse user input dates
  - Date validation
  - Date arithmetic for relative times in components

## Integration with ShadCN UI Components

These dependencies are essential for implementing form-related ShadCN UI components in a way that aligns with the Fable Design System specifications:

1. **Text Input Component**:
   - Uses react-hook-form for state management
   - Uses zod for input validation
   - Ensures proper error state handling

2. **Select/Dropdown Component**:
   - Integrates with form state via react-hook-form
   - Validates selections with zod schemas

3. **Checkbox/Radio Components**:
   - Manages selection state with react-hook-form
   - Validates against zod schemas

4. **Date Picker Component**:
   - Uses date-fns for date formatting and parsing
   - Validates date inputs with zod schemas
   - Manages state with react-hook-form

## Implementation Example

Here's an example of how these dependencies work together to create a validated form:

```jsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";

// Define validation schema with zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  birthdate: z.date({
    required_error: "Please select a date",
    invalid_type_error: "That's not a date!",
  }),
  agreeToTerms: z.literal(true, {
    errorMap: () => ({ message: "You must agree to terms and conditions" }),
  }),
});

// Form component using these dependencies
function UserRegistrationForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      birthdate: undefined,
      agreeToTerms: false,
    },
  });

  function onSubmit(values) {
    // Handle form submission with validated data
    console.log(values);
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...form.register("name")}
            className={`input ${form.formState.errors.name ? "input-error" : ""}`}
          />
          {form.formState.errors.name && (
            <p className="text-red-500">{form.formState.errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...form.register("email")}
            className={`input ${form.formState.errors.email ? "input-error" : ""}`}
          />
          {form.formState.errors.email && (
            <p className="text-red-500">{form.formState.errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="birthdate">Birthdate</label>
          <input
            id="birthdate"
            type="date"
            {...form.register("birthdate", {
              valueAsDate: true,
            })}
            className={`input ${form.formState.errors.birthdate ? "input-error" : ""}`}
          />
          {form.formState.errors.birthdate && (
            <p className="text-red-500">{form.formState.errors.birthdate.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-center">
            <input
              type="checkbox"
              {...form.register("agreeToTerms")}
              className="mr-2"
            />
            <span>I agree to the terms and conditions</span>
          </label>
          {form.formState.errors.agreeToTerms && (
            <p className="text-red-500">{form.formState.errors.agreeToTerms.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>
    </form>
  );
}
```

## Conclusion

These dependencies ensure that all form components in the Fable Design System adhere to best practices for:

- Type safety and validation
- Accessibility compliance
- Performance optimization
- Consistent error handling
- Date and time management

By standardizing on these technologies, we maintain consistent behavior across all form interfaces in the Fable ecosystem.

---

*Last Updated: April 11, 2025*  
*Owner: Chief Design Officer*
