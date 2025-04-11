/**
 * @file Switch component type definitions
 * @description Type interfaces for Switch (Toggle) component
 */

import { FormElementProps, BaseComponentProps } from '../common';

/**
 * Switch component props interface
 */
export interface SwitchProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'size'>, 
  FormElementProps,
  BaseComponentProps<HTMLInputElement> {
  /** Whether the switch is checked */
  checked?: boolean;
  /** Default checked state for uncontrolled component */
  defaultChecked?: boolean;
  /** Called when the switch state changes */
  onChange?: (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Size of the switch */
  size?: 'default' | 'sm' | 'lg';
  /** Content shown next to the switch */
  label?: React.ReactNode;
  /** Whether the label is positioned at the start */
  labelPosition?: 'start' | 'end';
  /** Whether to align the switch vertically with the label */
  alignCenter?: boolean;
  /** Visual appearance of the switch */
  variant?: 'default' | 'subtle';
  /** Icons to display in thumb */
  thumbIcon?: {
    checked?: React.ReactNode;
    unchecked?: React.ReactNode;
  };
  /** Whether the switch should have loading state */
  loading?: boolean;
}

/**
 * Switch group component props interface
 */
export interface SwitchGroupProps extends Omit<FormElementProps, 'onChange'> {
  /** Currently selected values */
  value?: string[];
  /** Called when selection changes */
  onChange?: (values: string[]) => void;
  /** Direction of switches */
  direction?: 'horizontal' | 'vertical';
  /** Space between switches */
  spacing?: 'default' | 'compact' | 'loose';
  /** Group label (for accessibility) */
  label?: string;
  /** Options for the switch group */
  options?: Array<{
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    id?: string;
  }>;
}
