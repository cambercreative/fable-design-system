/**
 * @file Alert component type definitions
 * @description Type interfaces for Alert component and its variants
 */

import { BaseComponentProps } from '../common';

/**
 * Alert component props interface
 */
export interface AlertProps extends BaseComponentProps<HTMLDivElement> {
  /** Visual variant of the alert */
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  /** Visual appearance of the alert */
  appearance?: 'filled' | 'outlined' | 'subtle';
  /** Whether the alert is dismissible */
  dismissible?: boolean;
  /** Called when the alert is dismissed */
  onDismiss?: () => void;
  /** Whether the alert should be automatically dismissed */
  autoDismiss?: boolean;
  /** Duration in ms before auto-dismissal */
  duration?: number;
  /** Icon to display with the alert */
  icon?: React.ReactNode;
  /** Whether to hide the icon */
  hideIcon?: boolean;
  /** Action to display in the alert */
  action?: React.ReactNode;
}

/**
 * Alert title component props interface
 */
export interface AlertTitleProps extends BaseComponentProps<HTMLHeadingElement> {
  /** Whether to hide the icon before the title */
  hideIcon?: boolean;
  /** Whether to center the title */
  center?: boolean;
}

/**
 * Alert description component props interface
 */
export interface AlertDescriptionProps extends BaseComponentProps<HTMLParagraphElement> {
  /** Whether to use emphasized styling */
  emphasized?: boolean;
}

/**
 * Alert action component props interface
 */
export interface AlertActionProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether to align actions to start, end or stretch */
  alignment?: 'start' | 'end' | 'stretch';
}
