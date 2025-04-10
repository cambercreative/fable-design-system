/**
 * This file sets up axe-core accessibility testing for development mode
 * It should only be imported on the client side in development mode
 */

import React from 'react'

export function initializeAxe() {
  if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
    import('@axe-core/react').then(({ default: axe }) => {
      axe(React, { elementRef: true }, 1000)
    })
  }
}
