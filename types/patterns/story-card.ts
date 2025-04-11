/**
 * @file Story Card component type definitions
 * @description Type interfaces for the Story Card component
 */

import { BaseComponentProps } from '../common';

/**
 * Story metadata structure
 */
export interface Story {
  /** Unique ID for the story */
  id: string;
  /** Story title */
  title: string;
  /** Story thumbnail image URL */
  thumbnail?: string;
  /** Creation timestamp */
  timestamp: string | Date;
  /** Audio duration in seconds */
  duration: number;
  /** Story status */
  status?: 'draft' | 'recorded' | 'published' | 'archived';
  /** Author or creator name */
  creator?: string;
  /** Tags or categories */
  tags?: string[];
  /** Number of listens/views */
  views?: number;
}

/**
 * Story Card component props interface
 */
export interface StoryCardProps extends BaseComponentProps<HTMLDivElement> {
  /** Story data */
  story: Story;
  /** Whether the card is selected */
  selected?: boolean;
  /** Whether to truncate title after certain number of lines */
  titleLines?: 1 | 2 | 3;
  /** Called when the card is clicked */
  onPress?: (storyId: string) => void;
  /** Whether the card supports swipe actions */
  swipeActions?: boolean;
  /** Left swipe actions */
  leftActions?: React.ReactNode;
  /** Right swipe actions */
  rightActions?: React.ReactNode;
  /** Whether to show story metadata (timestamp, duration) */
  showMetadata?: boolean;
  /** Called when star/favorite action is triggered */
  onFavorite?: (storyId: string) => void;
  /** Whether the story is favorited */
  isFavorite?: boolean;
  /** Whether the card is in a loading state */
  loading?: boolean;
  /** Whether to show a menu/more options button */
  showOptions?: boolean;
  /** Called when options button is clicked */
  onOptionsClick?: (storyId: string, event: React.MouseEvent) => void;
}
