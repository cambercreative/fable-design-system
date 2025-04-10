/**
 * Code Playground Components Index
 * 
 * This file exports all components and utilities related to the interactive
 * code playground for easy importing throughout the application.
 */

// Export the original code playground component
export { default as CodePlayground } from './code-playground';

// Export the enhanced code playground with additional features
export { default as EnhancedCodePlayground } from './enhanced-code-playground';

// Export code generation utilities
export * from './code-generator';

// Types
export interface PropertyControl {
  type: 'select' | 'boolean' | 'string' | 'number' | 'color' | 'radio' | 'range';
  label: string;
  options?: string[] | { label: string; value: string }[];
  defaultValue: any;
  prop: string;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

export interface StateVariant {
  name: string;
  label: string;
  props: Record<string, any>;
}

export interface CodePlaygroundProps {
  component: React.ComponentType<any>;
  componentName: string;
  properties: PropertyControl[];
  stateVariants?: StateVariant[];
  defaultCode: string;
  description?: string;
  importStatement?: string;
  children?: React.ReactNode;
  responsivePreview?: boolean;
}
