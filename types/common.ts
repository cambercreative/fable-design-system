/**
 * @file Common type definitions used across components
 * @description This file contains shared types, interfaces, and utility types
 */

import { ReactNode } from 'react';

/**
 * Common props that are shared across most components
 */
export interface BaseProps {
  /** Additional CSS class names */
  className?: string;
  /** Child elements */
  children?: ReactNode;
  /** Data attributes for testing */
  'data-testid'?: string;
}

/**
 * Base component props with ref forwarding
 */
export interface BaseComponentProps<T = HTMLElement> extends BaseProps {
  /** Ref to the DOM element */
  ref?: React.Ref<T>;
}

/**
 * Base component props with common event handlers
 */
export interface InteractiveProps extends BaseProps {
  /** Whether the component is disabled */
  disabled?: boolean;
  /** Whether the component is in a loading state */
  loading?: boolean;
  /** Aria label for accessibility */
  'aria-label'?: string;
  /** OnClick event handler */
  onClick?: (event: React.MouseEvent) => void;
  /** OnFocus event handler */
  onFocus?: (event: React.FocusEvent) => void;
  /** OnBlur event handler */
  onBlur?: (event: React.FocusEvent) => void;
}

/**
 * Common design tokens for standardization across the design system
 */
export type Size = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Status states for components
 */
export type StatusState = 'default' | 'success' | 'warning' | 'error' | 'info';

/**
 * Animation timing tokens based on DSD specifications
 */
export type AnimationTiming = 'instant' | 'quick' | 'standard' | 'relaxed' | 'elaborate';

/**
 * Types for the variant prop across components
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'default' | 'outline' | 'ghost';

/**
 * Common form element props
 */
export interface FormElementProps extends InteractiveProps {
  /** Input name attribute */
  name?: string;
  /** Whether the element is required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Input label */
  label?: string;
  /** Help text shown below the input */
  helperText?: string;
}

/**
 * Common component state types
 */
export interface ComponentState {
  /** Whether the component is currently focused */
  isFocused?: boolean;
  /** Whether the component is currently hovered */
  isHovered?: boolean;
  /** Whether the component is currently pressed/active */
  isPressed?: boolean;
  /** Whether the component is disabled */
  isDisabled?: boolean;
  /** Whether the component is selected */
  isSelected?: boolean;
  /** Whether the component is in an error state */
  hasError?: boolean;
}
