/**
 * Sidebar Component Types
 * 
 * Type definitions for the Sidebar component.
 */

import { HTMLAttributes } from 'react';

export interface SidebarProps extends HTMLAttributes<HTMLElement> {
  /**
   * Additional class names to apply to the sidebar
   */
  className?: string;
}
