/**
 * Input Component Types
 * 
 * Type definitions for the Input component.
 */

import { InputHTMLAttributes, ReactNode } from 'react';
import { CommonProps } from '../shared';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, CommonProps {
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Icon to display before the input
   */
  leftIcon?: ReactNode;
  
  /**
   * Icon to display after the input
   */
  rightIcon?: ReactNode;
  
  /**
   * Label for the input
   */
  label?: string;
  
  /**
   * Helper text to display below the input
   */
  helperText?: string;
  
  /**
   * Whether the input is full width
   */
  fullWidth?: boolean;
  
  /**
   * Size of the input
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Whether the input has a compact design
   */
  compact?: boolean;
  
  /**
   * Visual variant of the input
   */
  variant?: 'default' | 'filled' | 'outlined';
}

// Input wrapper (container for input, label, and error)
export interface InputWrapperProps extends CommonProps {
  /**
   * ID for the input (for label association)
   */
  id?: string;
  
  /**
   * Label text
   */
  label?: string;
  
  /**
   * Whether the field is required
   */
  required?: boolean;
  
  /**
   * Error message
   */
  error?: string;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Whether the wrapper is full width
   */
  fullWidth?: boolean;
}
