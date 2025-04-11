/**
 * Component Types
 * 
 * Type definitions for all components in the Fable Design System.
 */

import React from 'react';
import { VariantProps } from 'class-variance-authority';
import { CommonProps, ComponentSize, Variant, StatusType } from './shared';

// Import specific UI component types
import { ButtonProps } from './components/button';
import { CardProps } from './components/card';
import { DialogProps } from './components/dialog';
import { InputProps } from './components/input';
import { CheckboxProps } from './components/checkbox';
import { RadioGroupProps } from './components/radio-group';
import { SelectProps } from './components/select';
import { SwitchProps } from './components/switch';
import { TabsProps } from './components/tabs';
import { ToastProps } from './components/toast';
import { AccordionProps } from './components/accordion';
import { NavigationMenuProps } from './components/navigation-menu';
import { ScrollAreaProps } from './components/scroll-area';
import { TooltipProps } from './components/tooltip';

// Re-export component types
export {
  ButtonProps,
  CardProps,
  DialogProps,
  InputProps,
  CheckboxProps,
  RadioGroupProps,
  SelectProps,
  SwitchProps,
  TabsProps,
  ToastProps,
  AccordionProps,
  NavigationMenuProps,
  ScrollAreaProps,
  TooltipProps
};

// Pattern component types
export interface StoryCardProps extends CommonProps {
  /** Title of the story */
  title: string;
  /** Timestamp when the story was created/modified */
  timestamp: Date | string;
  /** Duration of the story in seconds */
  duration: number;
  /** Optional thumbnail image URL */
  thumbnail?: string;
  /** Whether the card is currently selected */
  selected?: boolean;
  /** Handler for when the card is pressed/clicked */
  onPress?: () => void;
}

export interface VoiceVisualizationOrbProps extends CommonProps {
  /** Size of the orb */
  size?: 'standard' | 'compact';
  /** Current state of the visualization */
  state?: 'idle' | 'listening' | 'processing' | 'speaking';
  /** Audio amplitude (0-100) for visualization */
  amplitude?: number;
}

// Layout component types
export interface PageWrapperProps extends CommonProps {
  /** Whether to display full width layout */
  fullWidth?: boolean;
  /** Additional padding */
  padding?: boolean;
}

export interface SidebarProps extends CommonProps {
  /** Whether the sidebar is currently open (for mobile viewports) */
  isOpen?: boolean;
  /** Callback for when the sidebar is toggled */
  onToggle?: () => void;
}

export interface HeaderProps extends CommonProps {
  /** Show or hide the logo */
  showLogo?: boolean;
  /** Show or hide the theme toggle */
  showThemeToggle?: boolean;
}

// Website-specific component types
export interface BreadcrumbProps extends CommonProps {}

export interface PageHeaderProps extends CommonProps {
  /** Title of the page */
  title?: string;
  /** Description of the page */
  description?: string;
}

export interface ComponentExampleProps extends CommonProps {
  /** Title of the example */
  title?: string;
  /** Code to display */
  code?: string;
  /** Whether the code is expanded by default */
  codeExpanded?: boolean;
  /** Language of the code */
  language?: string;
}

export interface ResponsivePreviewProps extends CommonProps {
  /** Current selected breakpoint */
  breakpoint?: 'mobile' | 'tablet' | 'laptop' | 'desktop';
  /** Handler for when the breakpoint changes */
  onBreakpointChange?: (breakpoint: string) => void;
}

export interface MainNavigationProps extends CommonProps {
  /** Items to display in the navigation */
  items?: {
    title: string;
    href: string;
    icon?: React.ReactNode;
    items?: Array<{
      title: string;
      href: string;
      description?: string;
    }>;
  }[];
}

export interface CodeBlockProps extends CommonProps {
  /** Code content to display */
  code: string;
  /** Language of the code */
  language?: string;
  /** Whether to show line numbers */
  showLineNumbers?: boolean;
  /** Whether to highlight specific lines */
  highlightLines?: number[];
}

// Theme-related component types
export interface ThemeProviderProps {
  /** Child components */
  children: React.ReactNode;
  /** Default theme to use */
  defaultTheme?: 'light' | 'dark' | 'system';
  /** Whether to force a specific theme */
  forcedTheme?: 'light' | 'dark';
  /** Whether to disable CSS transitions when switching themes */
  disableTransitionOnChange?: boolean;
}

export interface ThemeToggleProps {
  /** Variant style of the toggle */
  variant?: 'icon' | 'select';
  /** Size of the toggle */
  size?: 'sm' | 'default';
}
