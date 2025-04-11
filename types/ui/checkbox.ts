/**
 * @file Checkbox component type definitions
 * @description Type interfaces for Checkbox component
 */

import { FormElementProps, BaseComponentProps } from '../common';

/**
 * Checkbox component props interface
 */
export interface CheckboxProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
  FormElementProps,
  BaseComponentProps<HTMLInputElement> {
  /** Size of the checkbox */
  size?: 'default' | 'sm' | 'lg';
  /** Whether the checkbox is in an indeterminate state */
  indeterminate?: boolean;
  /** Called when the checkbox state changes */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether to align the label to the start */
  labelPosition?: 'start' | 'end';
  /** Whether to align the checkbox vertically with the label */
  alignCenter?: boolean;
  /** ID for the input element */
  id?: string;
}

/**
 * Checkbox group component props interface
 */
export interface CheckboxGroupProps extends Omit<FormElementProps, 'onChange'> {
  /** The selected values */
  value?: string[];
  /** Called when the selection changes */
  onChange?: (value: string[]) => void;
  /** Layout direction of the checkboxes */
  direction?: 'horizontal' | 'vertical';
  /** Spacing between checkboxes */
  spacing?: 'default' | 'compact' | 'loose';
  /** Label for the group (for accessibility) */
  label?: string;
  /** Options for the checkbox group */
  options?: Array<{
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    id?: string;
  }>;
}
