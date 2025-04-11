"use client"

import React from 'react'
import { Search, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useSearch } from './search'

/**
 * Header component props interface
 */
export interface HeaderProps {
  /**
   * Whether the sidebar is currently open
   */
  isSidebarOpen: boolean;
  
  /**
   * Function to toggle the sidebar open/closed state
   */
  toggleSidebar: () => void;
}

/**
 * Main application header component
 * 
 * @param props - The component props
 * @returns The header component
 */
export function Header({ isSidebarOpen, toggleSidebar }: HeaderProps): React.ReactElement {
  const { theme, setTheme } = useTheme()
  const { openDialog } = useSearch()
  
  /**
   * Handle theme toggle click
   */
  const handleThemeToggle = (): void => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-surface-primary/80 dark:bg-dark-surface-primary/80 backdrop-blur-md py-3 px-4 md:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center">
          <button 
            onClick={toggleSidebar}
            className="p-2 mr-2 rounded-md hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary transition-colors"
            aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
            aria-expanded={isSidebarOpen}
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <Link href="/" className="text-lg font-medium md:hidden">
            Fable Design
          </Link>
        </div>
        
        <div className="w-full max-w-md hidden md:block">
          <SearchButton />
        </div>
        
        <button
          className="flex md:hidden items-center justify-center p-2 rounded-md hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary transition-colors"
          onClick={openDialog}
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        
        <div className="flex items-center ml-auto space-x-2 md:space-x-4">
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-md hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

/**
 * Search button component
 * 
 * @returns The search button component
 */
function SearchButton(): React.ReactElement {
  const { openDialog } = useSearch()
  
  return (
    <button
      className="flex w-full items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-text-secondary hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary"
      onClick={openDialog}
    >
      <Search className="h-4 w-4" />
      <span className="flex-1 text-left">Search documentation...</span>
      <kbd className="hidden sm:flex h-5 select-none items-center gap-1 rounded border bg-surface-tertiary px-1.5 font-mono text-[10px] font-medium text-text-secondary">
        <span className="text-xs">⌘</span>K
      </kbd>
    </button>
  )
}
