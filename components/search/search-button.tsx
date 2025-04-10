"use client"

import { useEffect } from 'react'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useSearch } from './search-provider'

export function SearchButton() {
  const { setIsSearchOpen } = useSearch()
  
  // Add keyboard shortcut (Cmd+K or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        setIsSearchOpen(true)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setIsSearchOpen])
  
  return (
    <Button
      variant="outline"
      className="w-full justify-between hidden md:flex"
      onClick={() => setIsSearchOpen(true)}
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
