/**
 * @file Input component type definitions
 * @description Type interfaces for Input component and related form controls
 */

import { InputHTMLAttributes } from 'react';
import { FormElementProps, BaseComponentProps, Size } from '../common';

/**
 * Input component props interface
 */
export interface InputProps extends 
  InputHTMLAttributes<HTMLInputElement>,
  FormElementProps,
  BaseComponentProps<HTMLInputElement> {
  /** Size variant of the input */
  size?: Size;
  /** Icon to display at the start of the input */
  leftIcon?: React.ReactNode;
  /** Icon to display at the end of the input */
  rightIcon?: React.ReactNode;
  /** Whether to show a clear button when the input has a value */
  clearable?: boolean;
  /** Callback when the clear button is clicked */
  onClear?: () => void;
  /** Whether the input has a custom error state */
  error?: string;
  /** Maximum character count */
  maxLength?: number;
  /** Whether to display a character counter */
  showCharCount?: boolean;
  /** Prefix text displayed before the input value */
  prefix?: string;
  /** Suffix text displayed after the input value */
  suffix?: string;
  /** Whether the input is in a loading state */
  loading?: boolean;
}

/**
 * Specialized interfaces for different input types
 */
export interface SearchInputProps extends Omit<InputProps, 'type'> {
  /** Callback when search is submitted */
  onSearch?: (value: string) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Whether to submit search on clear */
  submitOnClear?: boolean;
}

/**
 * Props for the label component that accompanies inputs
 */
export interface LabelProps extends BaseComponentProps<HTMLLabelElement> {
  /** The form element ID this label is connected to */
  htmlFor: string;
  /** Whether the field is required */
  required?: boolean;
  /** Whether the label should be visually hidden but accessible to screen readers */
  visuallyHidden?: boolean;
}

/**
 * Props for helper text component that displays below inputs
 */
export interface HelperTextProps extends BaseComponentProps<HTMLParagraphElement> {
  /** The associated input id */
  inputId?: string;
  /** Whether this is an error message */
  isError?: boolean;
}
