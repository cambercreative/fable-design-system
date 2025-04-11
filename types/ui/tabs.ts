/**
 * @file Tabs component type definitions
 * @description Type interfaces for Tabs component and its parts
 */

import { BaseComponentProps } from '../common';

/**
 * Tabs component props interface
 */
export interface TabsProps extends BaseComponentProps<HTMLDivElement> {
  /** Default value for uncontrolled tabs */
  defaultValue?: string;
  /** Current active value for controlled tabs */
  value?: string;
  /** Called when tab selection changes */
  onValueChange?: (value: string) => void;
  /** Orientation of the tabs */
  orientation?: 'horizontal' | 'vertical';
  /** Whether to activate tab on hover */
  activateOnHover?: boolean;
  /** Whether to maintain equal width tabs */
  equalWidth?: boolean;
}

/**
 * Tab list component props interface
 */
export interface TabsListProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether the tabs are rendered as a loop */
  loop?: boolean;
  /** Visual style of the tabs list */
  variant?: 'underline' | 'contained' | 'pills';
  /** Size of the tabs */
  size?: 'default' | 'sm' | 'lg';
  /** Whether to enable horizontal scrolling */
  scrollable?: boolean;
  /** Whether to center the active tab when scrollable */
  centerActiveTab?: boolean;
}

/**
 * Tab trigger component props interface
 */
export interface TabsTriggerProps extends BaseComponentProps<HTMLButtonElement> {
  /** Value of this tab */
  value: string;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Whether to fit to content rather than equal width */
  fitContent?: boolean;
  /** Icon to display with the tab */
  icon?: React.ReactNode;
  /** Icon position */
  iconPosition?: 'start' | 'end' | 'top';
}

/**
 * Tab content component props interface
 */
export interface TabsContentProps extends BaseComponentProps<HTMLDivElement> {
  /** Value this content belongs to */
  value: string;
  /** Whether to force mounting even when not active */
  forceMount?: boolean;
  /** Animation when tab becomes active */
  animationDirection?: 'left' | 'right' | 'up' | 'down' | 'fade' | 'none';
}
