/**
 * @file Badge component type definitions
 * @description Type interfaces for Badge component
 */

import { BaseComponentProps } from '../common';

/**
 * Badge component props interface
 */
export interface BadgeProps extends BaseComponentProps<HTMLDivElement> {
  /** Visual variant of the badge */
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error' | 'info';
  /** Size of the badge */
  size?: 'default' | 'sm' | 'lg';
  /** Whether the badge is rounded or pill-shaped */
  shape?: 'rounded' | 'pill';
  /** Whether the badge is removable */
  removable?: boolean;
  /** Called when the remove button is clicked */
  onRemove?: () => void;
  /** Icon to display at the start of the badge */
  startIcon?: React.ReactNode;
  /** Icon to display at the end of the badge */
  endIcon?: React.ReactNode;
  /** Count number to display (for notification badges) */
  count?: number;
  /** Maximum count to display before showing '+' */
  maxCount?: number;
  /** Whether the badge is visually hidden but remains accessible */
  invisible?: boolean;
  /** Whether the badge should be displayed as a dot */
  dot?: boolean;
  /** Whether to show the badge as overlaid on another element */
  overlay?: boolean;
  /** Custom backgroundColor (overrides variant) */
  backgroundColor?: string;
  /** Custom textColor (overrides variant) */
  textColor?: string;
}
