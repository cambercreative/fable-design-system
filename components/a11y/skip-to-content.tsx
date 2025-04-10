'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export function SkipToContent() {
  const handleSkip = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const content = document.getElementById('content');
    if (content) {
      // Set tabindex to make the content focusable
      content.tabIndex = -1;
      content.focus({ preventScroll: false });
      
      // Remove tabindex after blur to keep the DOM clean
      content.addEventListener('blur', () => {
        content.removeAttribute('tabindex');
      }, { once: true });
    }
  };

  return (
    <a
      href="#content"
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
    >
      <Button variant="default" className="ring-2 ring-primary">
        Skip to content
      </Button>
    </a>
  );
}