'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { SearchProvider } from '../components/search';
import { SearchDialog } from '../components/search';

// Default theme that provides basic styling tokens
const defaultTheme = {
  colors: {
    textPrimary: '#000000',
    textSecondary: '#404040',
    surface: '#FFEFD9',
  },
  spacing: {
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  shadows: {
    md: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  }
};

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchProvider>
        {children}
        <SearchDialog />
      </SearchProvider>
    </ThemeProvider>
  );
}
