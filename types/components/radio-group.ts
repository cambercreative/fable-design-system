/**
 * Radio Group Component Types
 * 
 * Type definitions for the RadioGroup component.
 */

import { ComponentPropsWithoutRef } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CommonProps } from '../shared';

export interface RadioGroupProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>,
    CommonProps {
  /**
   * Label for the radio group
   */
  label?: string;
  
  /**
   * Description or helper text
   */
  description?: string;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Orientation of the radio buttons
   * @default 'vertical'
   */
  orientation?: 'horizontal' | 'vertical';
  
  /**
   * Visual design variant
   */
  variant?: 'default' | 'card';
  
  /**
   * Size of the radio buttons
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Whether the radio group is required
   */
  required?: boolean;
}

export interface RadioGroupItemProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>,
    CommonProps {
  /**
   * Label for the radio button
   */
  label?: string;
  
  /**
   * Description for the radio button
   */
  description?: string;
  
  /**
   * Icon to display with the radio button
   */
  icon?: React.ReactNode;
  
  /**
   * Size of the radio button
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Whether the radio button is disabled
   */
  disabled?: boolean;
}

export interface RadioGroupIndicatorProps
  extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Indicator>,
    CommonProps {}
