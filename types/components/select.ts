/**
 * Select Component Types
 * 
 * Type definitions for the Select component and its parts.
 */

import React, { ComponentPropsWithoutRef } from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CommonProps } from '../shared';

// Select Root
export interface SelectProps 
  extends Omit<ComponentPropsWithoutRef<typeof SelectPrimitive.Root>, 'children'>, 
    CommonProps {
  /**
   * Label for the select
   */
  label?: string;
  
  /**
   * Placeholder text
   */
  placeholder?: string;
  
  /**
   * Whether the select is disabled
   */
  disabled?: boolean;
  
  /**
   * Size variant
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Whether the select is required
   */
  required?: boolean;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Whether the select has an error state
   */
  hasError?: boolean;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Children elements (SelectItem components)
   */
  children: React.ReactNode;
  
  /**
   * Whether the select is full width
   */
  fullWidth?: boolean;
  
  /**
   * Custom trigger element
   */
  customTrigger?: React.ReactNode;
}

// Select Trigger
export interface SelectTriggerProps 
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 
    CommonProps {
  /**
   * Size variant
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Visual appearance
   */
  variant?: 'default' | 'outline' | 'ghost';
  
  /**
   * Whether the trigger has an error state
   */
  hasError?: boolean;
  
  /**
   * Icon to display at the end of the trigger
   */
  icon?: React.ReactNode;
}

// Select Value
export interface SelectValueProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Value>,
    CommonProps {
  /**
   * Placeholder text when no value is selected
   */
  placeholder?: string;
}

// Select Content
export interface SelectContentProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    CommonProps {
  /**
   * Position of the content
   */
  position?: 'popper' | 'item-aligned';
  
  /**
   * Maximum height of the content in pixels
   */
  maxHeight?: number;
}

// Select Item
export interface SelectItemProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Item>,
    CommonProps {
  /**
   * Description to display with the item
   */
  description?: string;
  
  /**
   * Icon to display with the item
   */
  icon?: React.ReactNode;
  
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

// Select Group
export interface SelectGroupProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Group>,
    CommonProps {}

// Select Label
export interface SelectLabelProps
  extends ComponentPropsWithoutRef<typeof SelectPrimitive.Label>,
    CommonProps {}

// Composite Select interface for exporting
export type {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
  SelectGroupProps,
  SelectLabelProps
};
