/**
 * Dialog Component Types
 * 
 * Type definitions for the Dialog component and its subcomponents.
 */

import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, ReactNode } from 'react';
import { CommonProps } from '../shared';
import * as DialogPrimitive from '@radix-ui/react-dialog';

// Dialog Root
export interface DialogProps extends DialogPrimitive.DialogProps, CommonProps {}

// Dialog Trigger
export interface DialogTriggerProps extends DialogPrimitive.DialogTriggerProps, CommonProps {
  /**
   * Whether to use the child as the trigger element
   */
  asChild?: boolean;
}

// Dialog Content
export interface DialogContentProps extends DialogPrimitive.DialogContentProps, CommonProps {
  /**
   * Width of the dialog
   */
  width?: 'default' | 'wide' | 'full';
  
  /**
   * Whether to remove the close button
   */
  hideCloseButton?: boolean;
  
  /**
   * Whether to add a border to the dialog
   */
  bordered?: boolean;
}

// Dialog Header
export interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Center the header content
   */
  centered?: boolean;
}

// Dialog Footer
export interface DialogFooterProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Direction of footer buttons
   * @default 'row'
   */
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

// Dialog Title
export interface DialogTitleProps extends DialogPrimitive.DialogTitleProps, CommonProps {}

// Dialog Description
export interface DialogDescriptionProps extends DialogPrimitive.DialogDescriptionProps, CommonProps {}

// Dialog Close
export interface DialogCloseProps extends DialogPrimitive.DialogCloseProps, CommonProps {
  /**
   * Whether to use the child as the close element
   */
  asChild?: boolean;
}

// Composite Dialog interface for exporting
export type {
  DialogProps,
  DialogTriggerProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogFooterProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps
};
