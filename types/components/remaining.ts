/**
 * Remaining Component Types
 * 
 * Stub type definitions for components that will be implemented in more detail later.
 * This file ensures that imports in the main components.ts file don't cause errors.
 */

import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { CommonProps } from '../shared';

// Accordion
export interface AccordionProps extends ComponentPropsWithoutRef<typeof AccordionPrimitive.Root>, CommonProps {}

// Navigation Menu
export interface NavigationMenuProps extends ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>, CommonProps {}

// Scroll Area
export interface ScrollAreaProps extends ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>, CommonProps {}

// Tooltip
export interface TooltipProps extends ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>, CommonProps {}

// Tabs
export interface TabsProps extends ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, CommonProps {}

// Export all stub types
export {
  AccordionProps,
  NavigationMenuProps,
  ScrollAreaProps,
  TooltipProps,
  TabsProps
};
