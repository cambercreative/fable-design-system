/**
 * @file Accordion component type definitions
 * @description Type interfaces for Accordion component and its parts
 */

import { BaseComponentProps } from '../common';

/**
 * Accordion component props interface
 */
export interface AccordionProps extends BaseComponentProps<HTMLDivElement> {
  /** Type of accordion behavior */
  type?: 'single' | 'multiple';
  /** Default open value(s) (uncontrolled) */
  defaultValue?: string | string[];
  /** Current open value(s) (controlled) */
  value?: string | string[];
  /** Called when open state changes */
  onValueChange?: (value: string | string[]) => void;
  /** Whether to collapse when clicking an open item */
  collapsible?: boolean;
  /** Whether to disable all items */
  disabled?: boolean;
  /** Visual appearance variant */
  variant?: 'default' | 'bordered' | 'ghost';
  /** Size variant */
  size?: 'default' | 'sm' | 'lg';
}

/**
 * Accordion item component props interface
 */
export interface AccordionItemProps extends BaseComponentProps<HTMLDivElement> {
  /** Unique value for this item */
  value: string;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Icon for the trigger button */
  icon?: React.ReactNode;
}

/**
 * Accordion trigger component props interface
 */
export interface AccordionTriggerProps extends BaseComponentProps<HTMLButtonElement> {
  /** Whether to place icon at the start */
  iconPosition?: 'start' | 'end';
  /** Custom icon to show instead of default */
  icon?: React.ReactNode;
}

/**
 * Accordion content component props interface
 */
export interface AccordionContentProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether to force mounting even when closed */
  forceMount?: boolean;
}
