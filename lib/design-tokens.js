/**
 * Design Tokens Utility
 * This file provides structured access to all design tokens from the Fable Design System
 */

export const colorTokens = {
  brand: [
    { name: 'Fable Red', value: '#FF3300', variable: '--color-fable-red', tailwind: 'fable-red' },
    { name: 'Fable Amber', value: '#FFB800', variable: '--color-fable-amber', tailwind: 'fable-amber' },
    { name: 'Fable Peach', value: '#FFEFD9', variable: '--color-fable-peach', tailwind: 'fable-peach' },
    { name: 'Fable Deep Purple', value: '#5B267B', variable: '--color-fable-deep-purple', tailwind: 'fable-deep-purple' },
    { name: 'Fable Deep Blue', value: '#1A5FB4', variable: '--color-fable-deep-blue', tailwind: 'fable-deep-blue' },
  ],
  semantic: [
    { name: 'Success', value: '#2D7D6F', variable: '--color-success', tailwind: 'success' },
    { name: 'Warning', value: '#F6B64B', variable: '--color-warning', tailwind: 'warning' },
    { name: 'Error', value: '#D64D52', variable: '--color-error', tailwind: 'error' },
    { name: 'Info', value: '#1E4D78', variable: '--color-info', tailwind: 'info' },
  ],
  surfaces: [
    { name: 'Surface Primary (Light)', value: '#FFEFD9', variable: '--color-surface-primary-light', tailwind: 'surface-primary' },
    { name: 'Surface Secondary (Light)', value: '#FFF5E6', variable: '--color-surface-secondary-light', tailwind: 'surface-secondary' },
    { name: 'Surface Tertiary (Light)', value: '#FFF9F0', variable: '--color-surface-tertiary-light', tailwind: 'surface-tertiary' },
    { name: 'Surface Primary (Dark)', value: '#1A1A1A', variable: '--color-surface-primary-dark', tailwind: 'dark-surface-primary' },
    { name: 'Surface Secondary (Dark)', value: '#2A2A2A', variable: '--color-surface-secondary-dark', tailwind: 'dark-surface-secondary' },
    { name: 'Surface Tertiary (Dark)', value: '#3A3A3A', variable: '--color-surface-tertiary-dark', tailwind: 'dark-surface-tertiary' },
  ],
  text: [
    { name: 'Text Primary (Light)', value: '#000000', variable: '--color-text-primary-light', tailwind: 'text-primary' },
    { name: 'Text Secondary (Light)', value: '#404040', variable: '--color-text-secondary-light', tailwind: 'text-secondary' },
    { name: 'Text Tertiary (Light)', value: '#666666', variable: '--color-text-tertiary-light', tailwind: 'text-tertiary' },
    { name: 'Text Primary (Dark)', value: '#FFFFFF', variable: '--color-text-primary-dark', tailwind: 'dark-text-primary' },
    { name: 'Text Secondary (Dark)', value: '#D9D9D9', variable: '--color-text-secondary-dark', tailwind: 'dark-text-secondary' },
    { name: 'Text Tertiary (Dark)', value: '#ABABAB', variable: '--color-text-tertiary-dark', tailwind: 'dark-text-tertiary' },
  ],
  border: [
    { name: 'Border Default (Light)', value: '#FFCA80', variable: '--color-border-default-light', tailwind: 'border-default' },
    { name: 'Border Strong (Light)', value: '#FF8000', variable: '--color-border-strong-light', tailwind: 'border-strong' },
    { name: 'Border Default (Dark)', value: '#FF6600', variable: '--color-border-default-dark', tailwind: 'dark-border-default' },
    { name: 'Border Strong (Dark)', value: '#FF9900', variable: '--color-border-strong-dark', tailwind: 'dark-border-strong' },
  ],
  status: [
    { name: 'Status Success (Light)', value: '#2D7D6F', variable: '--color-status-success-light', tailwind: 'status-success' },
    { name: 'Status Warning (Light)', value: '#F6B64B', variable: '--color-status-warning-light', tailwind: 'status-warning' },
    { name: 'Status Error (Light)', value: '#D64D52', variable: '--color-status-error-light', tailwind: 'status-error' },
    { name: 'Status Info (Light)', value: '#1E4D78', variable: '--color-status-info-light', tailwind: 'status-info' },
    { name: 'Status Success (Dark)', value: '#5ABEAC', variable: '--color-status-success-dark', tailwind: 'dark-status-success' },
    { name: 'Status Warning (Dark)', value: '#FFD080', variable: '--color-status-warning-dark', tailwind: 'dark-status-warning' },
    { name: 'Status Error (Dark)', value: '#FF7A7E', variable: '--color-status-error-dark', tailwind: 'dark-status-error' },
    { name: 'Status Info (Dark)', value: '#5B94D6', variable: '--color-status-info-dark', tailwind: 'dark-status-info' },
  ],
  gradients: [
    { 
      name: 'Primary Gradient (Light)',
      value: 'linear-gradient(to right, #FF3300, #FFB800)',
      variable: '--gradient-primary',
      class: 'gradient-primary-light'
    },
    { 
      name: 'Primary Gradient (Dark)',
      value: 'linear-gradient(to right, #5B267B, #1A5FB4)',
      variable: '--gradient-primary',
      class: 'gradient-primary-dark'
    }
  ]
};

export const typographyTokens = {
  fontFamilies: [
    { name: 'Faro', value: "'Faro', 'SF Pro', 'Roboto', sans-serif", variable: '--font-family-faro', tailwind: 'font-faro' },
    { name: 'Atkinson Hyperlegible Next', value: "'Atkinson Hyperlegible Next', 'SF Pro', 'Roboto', sans-serif", variable: '--font-family-atkinson', tailwind: 'font-atkinson' },
  ],
  fontSizes: [
    { name: 'Display', value: '36px', variable: '--font-size-display', tailwind: 'text-display' },
    { name: 'Title 1', value: '28px', variable: '--font-size-title-1', tailwind: 'text-title-1' },
    { name: 'Title 2', value: '22px', variable: '--font-size-title-2', tailwind: 'text-title-2' },
    { name: 'Headline', value: '17px', variable: '--font-size-headline', tailwind: 'text-headline' },
    { name: 'Body', value: '16px', variable: '--font-size-body', tailwind: 'text-body' },
    { name: 'Caption', value: '13px', variable: '--font-size-caption', tailwind: 'text-caption' },
    { name: 'Footnote', value: '11px', variable: '--font-size-footnote', tailwind: 'text-footnote' },
  ],
  lineHeights: [
    { name: 'Display', value: '1.1', variable: '--line-height-display', tailwind: 'leading-display' },
    { name: 'Title 1', value: '1.2', variable: '--line-height-title-1', tailwind: 'leading-title-1' },
    { name: 'Title 2', value: '1.2', variable: '--line-height-title-2', tailwind: 'leading-title-2' },
    { name: 'Headline', value: '1.3', variable: '--line-height-headline', tailwind: 'leading-headline' },
    { name: 'Body', value: '1.5', variable: '--line-height-body', tailwind: 'leading-body' },
    { name: 'Caption', value: '1.3', variable: '--line-height-caption', tailwind: 'leading-caption' },
    { name: 'Footnote', value: '1.2', variable: '--line-height-footnote', tailwind: 'leading-footnote' },
  ],
  fontWeights: [
    { name: 'Light', value: '300', variable: '--font-weight-light', tailwind: 'font-light' },
    { name: 'Regular', value: '400', variable: '--font-weight-regular', tailwind: 'font-regular' },
    { name: 'Semi Bold', value: '600', variable: '--font-weight-semi-bold', tailwind: 'font-semi-bold' },
    { name: 'Bold', value: '700', variable: '--font-weight-bold', tailwind: 'font-bold' },
    { name: 'Extra Bold', value: '800', variable: '--font-weight-extra-bold', tailwind: 'font-extra-bold' },
  ],
  textStyles: [
    { 
      name: 'Display', 
      fontFamily: 'Faro',
      fontSize: '36px',
      lineHeight: '1.1',
      fontWeight: 'Bold',
      class: 'text-display',
      usage: 'Major headings'
    },
    { 
      name: 'Title 1', 
      fontFamily: 'Faro',
      fontSize: '28px',
      lineHeight: '1.2',
      fontWeight: 'Bold',
      class: 'text-title-1',
      usage: 'Section headers'
    },
    { 
      name: 'Title 2', 
      fontFamily: 'Faro',
      fontSize: '22px',
      lineHeight: '1.2',
      fontWeight: 'Bold',
      class: 'text-title-2',
      usage: 'Card titles'
    },
    { 
      name: 'Headline', 
      fontFamily: 'Faro',
      fontSize: '17px',
      lineHeight: '1.3',
      fontWeight: 'Semi Bold',
      class: 'text-headline',
      usage: 'Content headers'
    },
    { 
      name: 'Body', 
      fontFamily: 'Atkinson Hyperlegible Next',
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 'Regular',
      class: 'text-body',
      usage: 'Primary content'
    },
    { 
      name: 'Caption', 
      fontFamily: 'Atkinson Hyperlegible Next',
      fontSize: '13px',
      lineHeight: '1.3',
      fontWeight: 'Regular',
      class: 'text-caption',
      usage: 'Supporting text'
    },
    { 
      name: 'Footnote', 
      fontFamily: 'Atkinson Hyperlegible Next',
      fontSize: '11px',
      lineHeight: '1.2',
      fontWeight: 'Regular',
      class: 'text-footnote',
      usage: 'Metadata'
    },
  ]
};

export const spacingTokens = [
  { name: 'None', value: '0', variable: '--spacing-none', tailwind: 'none' },
  { name: 'Extra Small (xs)', value: '4px', variable: '--spacing-xs', tailwind: 'xs' },
  { name: 'Small (s)', value: '8px', variable: '--spacing-s', tailwind: 's' },
  { name: 'Medium (m)', value: '16px', variable: '--spacing-m', tailwind: 'm' },
  { name: 'Large (l)', value: '24px', variable: '--spacing-l', tailwind: 'l' },
  { name: 'Extra Large (xl)', value: '32px', variable: '--spacing-xl', tailwind: 'xl' },
  { name: 'Extra Extra Large (xxl)', value: '48px', variable: '--spacing-xxl', tailwind: '2xl' },
];

export const borderRadiusTokens = [
  { name: 'None', value: '0', variable: '--radius-none', tailwind: 'rounded-none' },
  { name: 'Extra Small (xs)', value: '4px', variable: '--radius-xs', tailwind: 'rounded-xs' },
  { name: 'Small (s)', value: '8px', variable: '--radius-s', tailwind: 'rounded-s' },
  { name: 'Medium (m)', value: '16px', variable: '--radius-m', tailwind: 'rounded-m' },
  { name: 'Large (l)', value: '24px', variable: '--radius-l', tailwind: 'rounded-l' },
  { name: 'Full', value: '50%', variable: '--radius-full', tailwind: 'rounded-full' },
];

export const elevationTokens = [
  { name: 'Elevation 0', value: 'none', variable: '--elevation-0', tailwind: 'shadow-elevation-0', description: 'Flat elements, backgrounds' },
  { name: 'Elevation 1', value: '0px 1px 2px rgba(0, 0, 0, 0.05)', variable: '--elevation-1', tailwind: 'shadow-elevation-1', description: 'Subtle lift, cards, sections' },
  { name: 'Elevation 2', value: '0px 2px 4px rgba(0, 0, 0, 0.08)', variable: '--elevation-2', tailwind: 'shadow-elevation-2', description: 'Standard elevation, interactive cards' },
  { name: 'Elevation 3', value: '0px 4px 8px rgba(0, 0, 0, 0.1)', variable: '--elevation-3', tailwind: 'shadow-elevation-3', description: 'Prominent elements, dialogs' },
  { name: 'Elevation 4', value: '0px 8px 16px rgba(0, 0, 0, 0.12)', variable: '--elevation-4', tailwind: 'shadow-elevation-4', description: 'Floating elements, modals' },
  { name: 'Elevation 5', value: '0px 16px 24px rgba(0, 0, 0, 0.15)', variable: '--elevation-5', tailwind: 'shadow-elevation-5', description: 'Maximum elevation, critical elements' },
];

export const motionTokens = {
  durations: [
    { name: 'Instant', value: '0ms', variable: '--timing-instant', tailwind: 'duration-instant', description: 'Immediate feedback' },
    { name: 'Quick', value: '100ms', variable: '--timing-quick', tailwind: 'duration-quick', description: 'Micro-interactions, button presses' },
    { name: 'Standard', value: '200ms', variable: '--timing-standard', tailwind: 'duration-standard', description: 'Standard transitions, focus states' },
    { name: 'Relaxed', value: '300ms', variable: '--timing-relaxed', tailwind: 'duration-relaxed', description: 'Content transitions, page changes' },
    { name: 'Elaborate', value: '500ms', variable: '--timing-elaborate', tailwind: 'duration-elaborate', description: 'Complex animations, celebrations' },
  ],
  easings: [
    { name: 'Standard', value: 'ease-in-out', variable: '--easing-standard', tailwind: 'ease-standard' },
    { name: 'Quick', value: 'ease-out', variable: '--easing-quick', tailwind: 'ease-quick' },
    { name: 'Elaborate', value: 'cubic-bezier(0.33, 1, 0.68, 1)', variable: '--easing-elaborate', tailwind: 'ease-elaborate' },
  ],
  transitions: [
    { name: 'Standard Transition', class: 'transition-standard', duration: '200ms', easing: 'ease-in-out' },
    { name: 'Quick Transition', class: 'transition-quick', duration: '100ms', easing: 'ease-out' },
    { name: 'Relaxed Transition', class: 'transition-relaxed', duration: '300ms', easing: 'ease-in-out' },
    { name: 'Elaborate Transition', class: 'transition-elaborate', duration: '500ms', easing: 'cubic-bezier(0.33, 1, 0.68, 1)' },
  ]
};
