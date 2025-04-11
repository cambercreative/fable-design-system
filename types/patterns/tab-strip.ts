/**
 * @file Tab Strip component type definitions
 * @description Type interfaces for the Tab Strip component
 */

import { BaseComponentProps } from '../common';

/**
 * Tab item structure
 */
export interface TabItem {
  /** Unique identifier for this tab */
  id: string;
  /** Label text */
  label: string;
  /** Icon to display with label */
  icon?: React.ReactNode;
  /** Badge count or dot */
  badge?: number | boolean;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Custom content for the tab */
  content?: React.ReactNode;
}

/**
 * Tab Strip component props interface
 */
export interface TabStripProps extends BaseComponentProps<HTMLDivElement> {
  /** Array of tab items */
  tabs: TabItem[];
  /** Currently active tab ID */
  activeId: string;
  /** Called when active tab changes */
  onChange: (tabId: string) => void;
  /** Whether the tabs are scrollable horizontally */
  scrollable?: boolean;
  /** Whether the active tab should be centered when scrollable */
  centerActive?: boolean;
  /** Visual variant of the tabs */
  variant?: 'underline' | 'pills' | 'contained';
  /** Alignment of tabs within the container */
  alignment?: 'start' | 'center' | 'end' | 'stretch';
  /** Whether to show icons */
  showIcons?: boolean;
  /** Position of icons relative to labels */
  iconPosition?: 'start' | 'end' | 'top';
  /** Whether to animate the active indicator */
  animated?: boolean;
  /** Size of the tabs */
  size?: 'default' | 'sm' | 'lg';
  /** Whether the tab strip is full width */
  fullWidth?: boolean;
  /** Whether to show tab content in the same component */
  withContent?: boolean;
  /** Custom render function for tab content */
  renderContent?: (tabId: string) => React.ReactNode;
}

/**
 * Individual tab component props interface
 */
export interface TabProps extends BaseComponentProps<HTMLButtonElement> {
  /** Tab identifier */
  id: string;
  /** Label text */
  label: string;
  /** Icon element */
  icon?: React.ReactNode;
  /** Whether this tab is active */
  active?: boolean;
  /** Whether this tab is disabled */
  disabled?: boolean;
  /** Called when tab is clicked */
  onClick?: () => void;
  /** Badge count or boolean for dot */
  badge?: number | boolean;
  /** Icon position */
  iconPosition?: 'start' | 'end' | 'top';
  /** Whether to stretch tab to fill space */
  stretch?: boolean;
}
