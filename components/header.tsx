"use client"

import { Search, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()
  
  return (
    <header className="sticky top-0 z-30 w-full border-b border-border bg-surface-primary/80 dark:bg-dark-surface-primary/80 backdrop-blur-md py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="relative hidden md:block w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <input 
            type="search" 
            placeholder="Search components..." 
            className="w-full bg-surface-secondary dark:bg-dark-surface-secondary border border-border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="flex items-center ml-auto space-x-4">
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
