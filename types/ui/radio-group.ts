/**
 * @file Radio Group component type definitions
 * @description Type interfaces for Radio Group and Radio components
 */

import { FormElementProps, BaseComponentProps } from '../common';

/**
 * Radio component props interface
 */
export interface RadioProps extends 
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>, 
  BaseComponentProps<HTMLInputElement> {
  /** ID for the input element */
  id?: string;
  /** Value of the radio */
  value: string;
  /** Called when the radio is selected */
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Size of the radio */
  size?: 'default' | 'sm' | 'lg';
  /** Label for the radio */
  label?: React.ReactNode;
  /** Whether to align the label to the start */
  labelPosition?: 'start' | 'end';
  /** Whether to align the radio vertically with the label */
  alignCenter?: boolean;
}

/**
 * Radio group component props interface
 */
export interface RadioGroupProps extends 
  Omit<FormElementProps, 'onChange'>,
  BaseComponentProps<HTMLDivElement> {
  /** Currently selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Called when the selection changes */
  onChange?: (value: string) => void;
  /** Name attribute for the radio inputs */
  name: string;
  /** Layout direction of the radios */
  direction?: 'horizontal' | 'vertical';
  /** Spacing between radios */
  spacing?: 'default' | 'compact' | 'loose';
  /** Options for the radio group */
  options?: Array<{
    label: React.ReactNode;
    value: string;
    disabled?: boolean;
    id?: string;
  }>;
}
