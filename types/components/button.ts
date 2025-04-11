/**
 * Button Component Types
 * 
 * Type definitions for the Button component.
 */

import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '../../components/ui/button';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Whether to render the component as its child (using Radix UI Slot)
   */
  asChild?: boolean;
  
  /**
   * Whether the button should take full width of its container
   */
  fullWidth?: boolean;
  
  /**
   * Button content
   */
  children?: ReactNode;
  
  /**
   * Optional icon to display within the button
   */
  icon?: ReactNode;
  
  /**
   * Position of the icon relative to the text
   */
  iconPosition?: 'left' | 'right';
}
