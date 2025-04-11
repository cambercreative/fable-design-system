/**
 * Card Component Types
 * 
 * Type definitions for the Card, CardHeader, CardContent, CardFooter, and CardTitle components.
 */

import { HTMLAttributes, ReactNode } from 'react';
import { CommonProps } from '../shared';

export interface CardProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Whether the card has a hover effect
   */
  hover?: boolean;
  
  /**
   * Whether the card has a border
   */
  bordered?: boolean;
  
  /**
   * Level of elevation (shadow) for the card
   */
  elevation?: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Whether to add default spacing between child elements
   */
  spaced?: boolean;
}

export interface CardContentProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Whether to remove padding from the content area
   */
  noPadding?: boolean;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement>, CommonProps {
  /**
   * Whether to separate the footer visually from the content
   */
  separated?: boolean;
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement>, CommonProps {
  /**
   * Heading level to render (h1-h6)
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface CardDescriptionProps extends HTMLAttributes<HTMLParagraphElement>, CommonProps {}
