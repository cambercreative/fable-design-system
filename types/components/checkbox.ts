/**
 * Checkbox Component Types
 * 
 * Type definitions for the Checkbox component.
 */

import { ComponentPropsWithoutRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CommonProps } from '../shared';

export interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    CommonProps {
  /**
   * ID of the checkbox
   */
  id?: string;
  
  /**
   * Label text for the checkbox
   */
  label?: string;
  
  /**
   * Description or helper text
   */
  description?: string;
  
  /**
   * Size of the checkbox
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Whether the checkbox is indeterminate
   */
  indeterminate?: boolean;
  
  /**
   * Position of the label relative to the checkbox
   */
  labelPosition?: 'right' | 'left';
  
  /**
   * Whether the checkbox is currently in an error state
   */
  hasError?: boolean;
  
  /**
   * Visual appearance of the checkbox
   */
  variant?: 'default' | 'filled' | 'outline';
}

export interface CheckboxIndicatorProps
  extends ComponentPropsWithoutRef<typeof CheckboxPrimitive.Indicator>,
    CommonProps {
  /**
   * Icon to use as the indicator
   */
  icon?: React.ReactNode;
}

export interface CheckboxGroupProps extends CommonProps {
  /**
   * Value of the selected checkboxes
   */
  value?: string[];
  
  /**
   * Handler for when the selected checkboxes change
   */
  onValueChange?: (value: string[]) => void;
  
  /**
   * Default selected values
   */
  defaultValue?: string[];
  
  /**
   * Orientation of the checkbox group
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Label for the entire group
   */
  label?: string;
  
  /**
   * Description for the entire group
   */
  description?: string;
  
  /**
   * Error message for the entire group
   */
  error?: string;
  
  /**
   * Whether the checkbox group is disabled
   */
  disabled?: boolean;
  
  /**
   * Whether the checkbox group is required
   */
  required?: boolean;
}
