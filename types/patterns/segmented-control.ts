/**
 * @file Segmented Control component type definitions
 * @description Type interfaces for the Segmented Control component
 */

import { BaseComponentProps } from '../common';

/**
 * Segment option structure
 */
export interface SegmentOption {
  /** Unique identifier for this segment */
  value: string;
  /** Label text */
  label: string;
  /** Icon to display with label */
  icon?: React.ReactNode;
  /** Whether this segment is disabled */
  disabled?: boolean;
}

/**
 * Segmented Control component props interface
 */
export interface SegmentedControlProps extends BaseComponentProps<HTMLDivElement> {
  /** Array of segment options */
  options: SegmentOption[];
  /** Currently selected value */
  value: string;
  /** Called when selection changes */
  onChange: (value: string) => void;
  /** Size of the control */
  size?: 'default' | 'sm' | 'lg';
  /** Whether all segments should have equal width */
  equalWidth?: boolean;
  /** Whether to disable all segments */
  disabled?: boolean;
  /** Visual style variant */
  variant?: 'default' | 'subtle' | 'outline';
  /** Whether to use pill shape */
  pill?: boolean;
  /** Whether to show icons only (no text) */
  iconsOnly?: boolean;
  /** Position for icons relative to text */
  iconPosition?: 'start' | 'end' | 'top';
  /** Platform adaptation style */
  platform?: 'auto' | 'ios' | 'android' | 'web';
  /** Name for the radio inputs (accessibility) */
  name?: string;
}

/**
 * Individual segment component props interface
 */
export interface SegmentProps extends BaseComponentProps<HTMLLabelElement> {
  /** Segment value */
  value: string;
  /** Segment label */
  label: string;
  /** Whether this segment is currently selected */
  checked: boolean;
  /** Whether this segment is disabled */
  disabled?: boolean;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Icon position */
  iconPosition?: 'start' | 'end' | 'top';
  /** Called when this segment is selected */
  onChange: (value: string) => void;
  /** Radio group name */
  name: string;
  /** Whether to show icon only */
  iconsOnly?: boolean;
}
