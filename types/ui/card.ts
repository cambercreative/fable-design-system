/**
 * @file Card component type definitions
 * @description Type interfaces for Card component and its subcomponents
 */

import { HTMLAttributes } from 'react';
import { BaseComponentProps } from '../common';

/**
 * Card component props interface
 */
export interface CardProps extends 
  HTMLAttributes<HTMLDivElement>,
  BaseComponentProps<HTMLDivElement> {
  /** Whether the card has hover effect */
  hoverable?: boolean;
  /** Whether the card has a border */
  bordered?: boolean;
  /** Level of elevation shadow */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Whether the card is in a selected state */
  selected?: boolean;
  /** Whether the card is clickable */
  clickable?: boolean;
}

/**
 * Card header component props
 */
export interface CardHeaderProps extends BaseComponentProps<HTMLDivElement> {
  /** Title content */
  title?: React.ReactNode;
  /** Subtitle content */
  subtitle?: React.ReactNode;
  /** Actions to display in the header */
  actions?: React.ReactNode;
}

/**
 * Card content component props
 */
export interface CardContentProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether to remove default padding */
  noPadding?: boolean;
}

/**
 * Card footer component props
 */
export interface CardFooterProps extends BaseComponentProps<HTMLDivElement> {
  /** Whether to align content to the end (right) */
  alignEnd?: boolean;
}

/**
 * Card media component props
 */
export interface CardMediaProps extends BaseComponentProps<HTMLDivElement> {
  /** Source URL for the image */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Whether the media should be displayed at the top */
  top?: boolean;
  /** Aspect ratio of the media */
  aspectRatio?: '1:1' | '16:9' | '4:3' | '3:2' | string;
}
