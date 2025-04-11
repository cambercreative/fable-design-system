/**
 * @file Textarea component type definitions
 * @description Type interfaces for Textarea component
 */

import { TextareaHTMLAttributes } from 'react';
import { FormElementProps, BaseComponentProps } from '../common';

/**
 * Textarea component props interface
 */
export interface TextareaProps extends 
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  FormElementProps,
  BaseComponentProps<HTMLTextAreaElement> {
  /** Whether to auto-resize based on content */
  autoResize?: boolean;
  /** Maximum number of rows when auto-resizing */
  maxRows?: number;
  /** Minimum number of rows */
  minRows?: number;
  /** Maximum character count */
  maxLength?: number;
  /** Whether to show character counter */
  showCharCount?: boolean;
  /** Whether to show a resizing handle */
  resizable?: boolean;
  /** Whether the textarea is in a loading state */
  loading?: boolean;
  /** Icon to display at the start of the textarea */
  leftIcon?: React.ReactNode;
  /** Icon to display at the end of the textarea */
  rightIcon?: React.ReactNode;
}

/**
 * Character counter component props
 */
export interface CharacterCounterProps extends BaseComponentProps<HTMLDivElement> {
  /** Current value length */
  currentLength: number;
  /** Maximum allowed length */
  maxLength: number;
  /** Whether to show warning/error state when approaching/exceeding limit */
  showLimit?: boolean;
  /** Percentage at which to show warning state */
  warningThreshold?: number;
}
