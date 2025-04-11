"use client"

import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useSearch } from './index'

/**
 * SearchButton properties
 */
export interface SearchButtonProps {
  /**
   * Additional class names for the button
   */
  className?: string;
}

/**
 * Search button component that opens the search dialog
 * Also adds keyboard shortcut (Cmd+K or Ctrl+K)
 *
 * @returns The search button component
 */
export function SearchButton({ className }: SearchButtonProps = {}): React.ReactElement {
  const { openDialog } = useSearch()
  
  /**
   * Handle keyboard shortcut for search
   * 
   * @param event - Keyboard event
   */
  const handleKeyDown = (event: KeyboardEvent): void => {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault()
      openDialog()
    }
  }
  
  // Add keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [openDialog])
  
  return (
    <Button
      variant="outline"
      className={`w-full justify-between hidden md:flex ${className || ''}`}
      onClick={(): void => openDialog()}
    >
      <div className="flex items-center gap-2">
        <Search className="w-4 h-4" />
        <span>Search components...</span>
      </div>
      <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  )
}
