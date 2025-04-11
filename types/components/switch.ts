/**
 * Switch Component Types
 * 
 * Type definitions for the Switch component.
 */

import { ComponentPropsWithoutRef } from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { CommonProps } from '../shared';

export interface SwitchProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>,
    CommonProps {
  /**
   * ID of the switch
   */
  id?: string;
  
  /**
   * Label for the switch
   */
  label?: string;
  
  /**
   * Description or helper text
   */
  description?: string;
  
  /**
   * Size of the switch
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Position of the label relative to the switch
   */
  labelPosition?: 'left' | 'right';
  
  /**
   * Visual appearance of the switch
   */
  variant?: 'default' | 'outline' | 'solid';
  
  /**
   * Color scheme of the switch
   */
  color?: 'primary' | 'success' | 'warning' | 'error' | 'info';
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Whether the switch has an error state
   */
  hasError?: boolean;
  
  /**
   * Whether the switch is required
   */
  required?: boolean;
}

export interface SwitchThumbProps
  extends ComponentPropsWithoutRef<typeof SwitchPrimitive.Thumb>,
    CommonProps {
  /**
   * Icon to display in the thumb
   */
  icon?: React.ReactNode;
}
