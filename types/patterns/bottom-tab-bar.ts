/**
 * @file Bottom Tab Bar component type definitions
 * @description Type interfaces for the Bottom Tab Bar navigation component
 */

import { BaseComponentProps } from '../common';

/**
 * Tab item data structure
 */
export interface BottomTabItem {
  /** Unique identifier for this tab */
  id: string;
  /** Label text */
  label: string;
  /** Icon element */
  icon: React.ReactNode;
  /** Active icon element (optional) */
  activeIcon?: React.ReactNode;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Badge count or dot */
  badge?: number | boolean;
  /** URL to navigate to (for link tabs) */
  href?: string;
}

/**
 * Bottom Tab Bar component props interface
 */
export interface BottomTabBarProps extends BaseComponentProps<HTMLDivElement> {
  /** Array of tab items */
  tabs: BottomTabItem[];
  /** Currently active tab ID */
  activeId: string;
  /** Called when active tab changes */
  onChange: (tabId: string) => void;
  /** Whether to show labels */
  showLabels?: boolean;
  /** Whether to animate transitions */
  animated?: boolean;
  /** Whether to use floating style with elevation */
  floating?: boolean;
  /** Background color style */
  variant?: 'default' | 'subtle' | 'transparent';
  /** Platform adaptation style */
  platform?: 'auto' | 'ios' | 'android' | 'web';
  /** Maximum tabs to display */
  maxTabs?: number;
}

/**
 * Bottom Tab component props interface
 */
export interface BottomTabProps extends BaseComponentProps<HTMLButtonElement> {
  /** Tab identifier */
  id: string;
  /** Label text */
  label: string;
  /** Icon element */
  icon: React.ReactNode;
  /** Active icon element */
  activeIcon?: React.ReactNode;
  /** Whether this tab is currently active */
  active?: boolean;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Whether to show the label */
  showLabel?: boolean;
  /** Badge count or dot */
  badge?: number | boolean;
  /** Called when tab is selected */
  onClick?: () => void;
  /** URL for link tabs */
  href?: string;
}
