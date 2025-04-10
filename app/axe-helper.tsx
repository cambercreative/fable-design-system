"use client"

import { useEffect } from 'react'
import { initializeAxe } from '../lib/axe-helper'

export default function AxeHelper() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      initializeAxe()
    }
  }, [])

  return null
}