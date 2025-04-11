/**
 * Shared Types
 * 
 * Common type definitions shared across multiple components.
 */

import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react';

/**
 * Represents an object of string values 
 */
export type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

/**
 * Array of class values
 */
export interface ClassArray extends Array<ClassValue> {}

/**
 * Dictionary of class values
 */
export interface ClassDictionary {
  [id: string]: any;
}

/**
 * Common props shared by many components
 */
export interface CommonProps {
  /** Additional CSS class names */
  className?: string;
  /** Children elements */
  children?: ReactNode;
}

/**
 * Component size options
 */
export type ComponentSize = 'default' | 'sm' | 'lg' | 'icon';

/**
 * Component variants
 */
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'icon' | 'default' | 'outline' | 'ghost';

/**
 * PolymorphicComponentProp
 * For components that can be rendered as different HTML elements
 */
export type PolymorphicComponentProp<C extends ElementType, Props = {}> = Props & {
  /** HTML element or component to render as */
  as?: C;
} & Omit<ComponentPropsWithoutRef<C>, keyof Props | 'as'>;

/**
 * PolymorphicRef
 * For components that can be rendered as different HTML elements
 */
export type PolymorphicRef<C extends ElementType> = 
  ComponentPropsWithoutRef<C>['ref'];

/**
 * Theme options
 */
export type Theme = 'light' | 'dark' | 'system';

/**
 * Responsive display options
 */
export type Breakpoint = 'mobile' | 'tablet' | 'laptop' | 'desktop';

/**
 * Status types
 */
export type StatusType = 'success' | 'warning' | 'error' | 'info';
