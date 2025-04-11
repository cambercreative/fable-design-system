/**
 * @file Dialog component type definitions
 * @description Type interfaces for Dialog component and its subcomponents
 */

import { BaseComponentProps } from '../common';

/**
 * Dialog (Modal) component props interface
 */
export interface DialogProps extends BaseComponentProps {
  /** Whether the dialog is currently open */
  open?: boolean;
  /** Callback when the open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Whether to disable closing when clicking outside or pressing escape */
  disableCloseActions?: boolean;
  /** Whether to disable close on escape key press */
  disableEscapeClose?: boolean;
  /** Whether to disable close on outside click */
  disableOutsideClick?: boolean;
  /** ID used for accessibility */
  id?: string;
}

/**
 * Dialog trigger component props
 */
export interface DialogTriggerProps extends BaseComponentProps {
  /** Whether to treat the child as a slot */
  asChild?: boolean;
}

/**
 * Dialog content component props
 */
export interface DialogContentProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether to force the focus inside dialog */
  trapFocus?: boolean;
  /** Whether to restore focus when dialog closes */
  restoreFocus?: boolean;
  /** Whether to close when escape is pressed */
  closeOnEscape?: boolean;
  /** Whether to close when clicking outside */
  closeOnOutsideClick?: boolean;
  /** Whether to show the close button */
  showCloseButton?: boolean;
  /** Width of the dialog */
  width?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Height of the dialog */
  height?: 'auto' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Whether the content should have a scrollbar */
  scrollable?: boolean;
}

/**
 * Dialog header component props
 */
export interface DialogHeaderProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether the header is sticky when scrolling */
  sticky?: boolean;
}

/**
 * Dialog footer component props
 */
export interface DialogFooterProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether the footer is sticky when scrolling */
  sticky?: boolean;
  /** Whether to justify actions to the end (right) */
  justifyEnd?: boolean;
}

/**
 * Dialog title component props
 */
export interface DialogTitleProps extends BaseComponentProps<HTMLHeadingElement> {
  /** ID for accessibility */
  id?: string;
}

/**
 * Dialog description component props
 */
export interface DialogDescriptionProps extends BaseComponentProps<HTMLParagraphElement> {
  /** ID for accessibility */
  id?: string;
}
