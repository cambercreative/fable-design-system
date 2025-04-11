/**
 * Toast Component Types
 * 
 * Type definitions for Toast components.
 */

import { ReactNode } from 'react';

export interface ToastProps {
  /**
   * Unique identifier for the toast
   */
  id: string;
  
  /**
   * Optional classname for toast styling
   */
  className?: string;
  
  /**
   * Toast variant (changes appearance)
   */
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  
  /**
   * The title of the toast
   */
  title?: string;
  
  /**
   * The description/content of the toast
   */
  description?: string;
  
  /**
   * Optional action component (like a button)
   */
  action?: ReactNode;
  
  /**
   * Duration in milliseconds for the toast to be displayed
   */
  duration?: number;
}

export interface ToastContextType {
  /**
   * Array of toasts currently active
   */
  toasts: ToastProps[];
  
  /**
   * Add a new toast
   */
  toast: (props: Omit<ToastProps, 'id'>) => string;
  
  /**
   * Dismiss a specific toast by ID
   */
  dismiss: (toastId: string) => void;
  
  /**
   * Dismiss all toasts
   */
  dismissAll: () => void;
}

export interface ToastProviderProps {
  /**
   * Children components
   */
  children: ReactNode;
  
  /**
   * Optional duration for all toasts in milliseconds
   */
  duration?: number;
  
  /**
   * Optional limit of toasts to show at once
   */
  limit?: number;
}

export interface ToastActionElement {
  altText: string;
  element: ReactNode;
}
