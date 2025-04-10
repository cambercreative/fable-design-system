"use client"

import { Search, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useSearch } from './search/search-provider'
import { SearchButton } from './search/search-button'

interface HeaderProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const { setIsSearchOpen } = useSearch()
  
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
          onClick={() => setIsSearchOpen(true)}
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        
        <div className="flex items-center ml-auto space-x-2 md:space-x-4">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
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
