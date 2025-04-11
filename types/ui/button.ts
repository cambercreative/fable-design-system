/**
 * @file Button component type definitions
 * @description Type interfaces for Button component and its variants
 */

import { ButtonHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import { BaseComponentProps, ButtonVariant, Size } from '../common';

/**
 * Button component props interface
 * Extended from HTML button element attributes and variant props
 */
export interface ButtonProps extends 
  ButtonHTMLAttributes<HTMLButtonElement>,
  BaseComponentProps<HTMLButtonElement> {
  /** Visual variant of the button */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: Size;
  /** Whether the button should take full width of its container */
  fullWidth?: boolean;
  /** Whether the button should render its children as a slot */
  asChild?: boolean;
  /** Whether the button is in a loading state */
  loading?: boolean;
  /** Icon to display before button text */
  leftIcon?: React.ReactNode;
  /** Icon to display after button text */
  rightIcon?: React.ReactNode;
}

/**
 * Button component state interface for advanced state handling
 */
export interface ButtonState {
  /** Whether the button is focused */
  isFocused: boolean;
  /** Whether the button is hovered */
  isHovered: boolean;
  /** Whether the button is pressed */
  isPressed: boolean;
  /** Whether the button is disabled */
  isDisabled: boolean;
  /** Whether the button is loading */
  isLoading: boolean;
}

/**
 * Icon button specific props
 */
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon'> {
  /** Icon to display */
  icon: React.ReactNode;
  /** Tooltip text for the icon button */
  tooltip?: string;
  /** Whether tooltip is disabled */
  disableTooltip?: boolean;
}
