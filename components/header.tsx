"use client"

import { Search, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useState } from 'react'

interface HeaderProps {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}

export default function Header({ isSidebarOpen, toggleSidebar }: HeaderProps) {
  const { theme, setTheme } = useTheme()
  const [searchQuery, setSearchQuery] = useState('')
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality
    console.log('Searching for:', searchQuery)
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
        
        <div className="relative hidden md:block w-full max-w-md">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <input 
              type="search" 
              placeholder="Search components..." 
              className="w-full bg-surface-secondary dark:bg-dark-surface-secondary border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search components"
            />
          </form>
        </div>
        
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
