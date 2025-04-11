/**
 * @file Toast component type definitions
 * @description Type interfaces for Toast notification component and its parts
 */

import { BaseComponentProps } from '../common';

/**
 * Toast notification variant types
 */
export type ToastVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

/**
 * Toast component props interface
 */
export interface ToastProps extends BaseComponentProps<HTMLDivElement> {
  /** Unique ID for this toast */
  id?: string;
  /** Visual variant of the toast */
  variant?: ToastVariant;
  /** Title text */
  title?: React.ReactNode;
  /** Main toast content */
  description?: React.ReactNode;
  /** Action button text */
  action?: React.ReactNode;
  /** Handler for the action button */
  onAction?: () => void;
  /** Whether to display a close button */
  closable?: boolean;
  /** Handler when toast is closed */
  onClose?: () => void;
  /** Duration in ms before auto-dismissal (0 for no auto-dismiss) */
  duration?: number;
  /** Whether the toast should be visible */
  open?: boolean;
  /** Icon to display with the toast */
  icon?: React.ReactNode;
}

/**
 * Props for the toast provider component
 */
export interface ToastProviderProps extends BaseComponentProps {
  /** Duration in ms before toast auto-dismissal */
  duration?: number;
  /** Maximum number of toasts to display simultaneously */
  limit?: number;
  /** Swipe direction to dismiss toast */
  swipeDirection?: 'up' | 'down' | 'left' | 'right';
  /** Distance in pixels to swipe before dismissal */
  swipeThreshold?: number;
  /** Label for the toast region (for screen readers) */
  label?: string;
}

/**
 * Props for the toast viewport component
 */
export interface ToastViewportProps extends BaseComponentProps<HTMLOListElement> {
  /** Position of toasts */
  position?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';
  /** Whether the viewport is visible */
  hidden?: boolean;
}

/**
 * Interface for the useToast hook return value
 */
export interface ToastAPI {
  /** Current toast list */
  toasts: ToastProps[];
  /** Function to create and display a toast */
  toast: (props: Omit<ToastProps, 'id'>) => string;
  /** Function to dismiss a specific toast */
  dismiss: (id: string) => void;
  /** Function to dismiss all toasts */
  dismissAll: () => void;
}
