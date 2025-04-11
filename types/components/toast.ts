/**
 * Toast Component Types
 * 
 * Type definitions for the Toast component and its parts.
 */

import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { CommonProps } from '../shared';

// Toast (Root)
export interface ToastProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Root>,
    CommonProps {
  /**
   * Variant that controls the visual appearance
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
  
  /**
   * Size of the toast
   */
  size?: 'sm' | 'default' | 'lg';
  
  /**
   * Whether to display a close button
   */
  showCloseButton?: boolean;
  
  /**
   * Icon to display at the beginning of the toast
   */
  icon?: ReactNode;
  
  /**
   * Number of milliseconds toast remains visible
   */
  duration?: number;
  
  /**
   * Whether the toast should be visible
   */
  open?: boolean;
  
  /**
   * Handler for when toast visibility changes
   */
  onOpenChange?: (open: boolean) => void;
  
  /**
   * Whether the toast is interactive (prevents auto-dismiss when hovering)
   */
  interactive?: boolean;
}

// Toast Provider
export interface ToastProviderProps 
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Provider>,
    CommonProps {
  /**
   * Duration in milliseconds that toast should remain visible
   */
  duration?: number;
  
  /**
   * Maximum number of toasts to show at once
   */
  limit?: number;
}

// Toast Viewport
export interface ToastViewportProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Viewport>,
    CommonProps {
  /**
   * Toast viewport position
   */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center';
  
  /**
   * Number of pixels from the edge
   */
  offset?: number;
  
  /**
   * Width of the viewport
   */
  width?: string | number;
}

// Toast Action
export interface ToastActionProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Action>,
    CommonProps {
  /**
   * Visual appearance of the action button
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
  
  /**
   * Size of the action button
   */
  size?: 'sm' | 'default' | 'lg';
}

// Toast Close
export interface ToastCloseProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Close>,
    CommonProps {
  /**
   * Custom close icon
   */
  icon?: ReactNode;
  
  /**
   * Size of the close button
   */
  size?: 'sm' | 'default' | 'lg';
}

// Toast Title
export interface ToastTitleProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Title>,
    CommonProps {}

// Toast Description
export interface ToastDescriptionProps
  extends ComponentPropsWithoutRef<typeof ToastPrimitive.Description>,
    CommonProps {}

// Composite Toast interface for exporting
export type {
  ToastProps,
  ToastProviderProps,
  ToastViewportProps,
  ToastActionProps,
  ToastCloseProps,
  ToastTitleProps,
  ToastDescriptionProps
};
