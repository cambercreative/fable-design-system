/**
 * @file Memory Collection Card component type definitions
 * @description Type interfaces for the Memory Collection Card component
 */

import { BaseComponentProps } from '../common';

/**
 * Memory collection metadata
 */
export interface MemoryCollection {
  /** Unique ID for the collection */
  id: string;
  /** Collection title */
  title: string;
  /** Collection description */
  description?: string;
  /** Cover image URL */
  coverImage?: string;
  /** Total number of items in the collection */
  totalItems: number;
  /** Number of completed items */
  completedItems: number;
  /** Collection creation date */
  createdAt: string | Date;
  /** Collection last update date */
  updatedAt: string | Date;
  /** Collection creation status */
  status?: 'draft' | 'in-progress' | 'completed';
  /** Collection tags */
  tags?: string[];
}

/**
 * Memory Collection Card component props interface
 */
export interface MemoryCollectionCardProps extends BaseComponentProps<HTMLDivElement> {
  /** Collection data */
  collection: MemoryCollection;
  /** Whether the card is selected */
  selected?: boolean;
  /** Whether to show the progress indicator */
  showProgress?: boolean;
  /** Whether the card is in a loading state */
  loading?: boolean;
  /** Whether the card is clickable */
  clickable?: boolean;
  /** Maximum description length before truncating */
  maxDescriptionLength?: number;
  /** Called when the card is clicked */
  onClick?: (collectionId: string) => void;
  /** Whether to show a menu/more options button */
  showOptions?: boolean;
  /** Called when options button is clicked */
  onOptionsClick?: (collectionId: string, event: React.MouseEvent) => void;
  /** Custom actions to display on the card */
  actions?: React.ReactNode;
  /** Card size variant */
  size?: 'default' | 'compact' | 'expanded';
  /** Custom progress indicator color */
  progressColor?: string;
}
