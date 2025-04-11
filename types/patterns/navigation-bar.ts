/**
 * @file Navigation Bar component type definitions
 * @description Type interfaces for the Navigation Bar component
 */

import { BaseComponentProps } from '../common';

/**
 * Navigation action item structure
 */
export interface NavigationAction {
  /** Action identifier */
  id: string;
  /** Icon element */
  icon: React.ReactNode;
  /** Label for accessibility */
  label: string;
  /** Whether the action is disabled */
  disabled?: boolean;
  /** Called when action is clicked */
  onClick?: () => void;
  /** For dropdown actions, the dropdown content */
  dropdown?: React.ReactNode;
}

/**
 * Navigation Bar component props interface
 */
export interface NavigationBarProps extends BaseComponentProps<HTMLDivElement> {
  /** Title text */
  title: string;
  /** Whether to show a back button */
  showBackButton?: boolean;
  /** Label for back button (accessibility) */
  backButtonLabel?: string;
  /** Called when back button is clicked */
  onBackClick?: () => void;
  /** URL for back button (if using as a link) */
  backUrl?: string;
  /** Primary action buttons to display */
  actions?: NavigationAction[];
  /** Whether to use a large title that collapses on scroll */
  largeTitle?: boolean;
  /** Whether the navigation bar is translucent */
  translucent?: boolean;
  /** Whether to hide the border/shadow */
  borderless?: boolean;
  /** Background color style */
  variant?: 'default' | 'primary' | 'transparent';
  /** Platform adaptation style */
  platform?: 'auto' | 'ios' | 'android' | 'web';
  /** Subtitle text to display under the title */
  subtitle?: string;
  /** Whether the title should be centered (iOS style) or left-aligned (Android style) */
  centerTitle?: boolean;
  /** Custom logo to display instead of text title */
  logo?: React.ReactNode;
  /** Scroll position for large title animation */
  scrollPosition?: number;
}

/**
 * Navigation Bar back button props interface
 */
export interface NavigationBackButtonProps extends BaseComponentProps<HTMLButtonElement> {
  /** Label for accessibility */
  label?: string;
  /** Called when clicked */
  onClick?: () => void;
  /** URL when used as a link */
  href?: string;
  /** Custom icon to use */
  icon?: React.ReactNode;
  /** Platform style */
  platform?: 'ios' | 'android' | 'web';
}
