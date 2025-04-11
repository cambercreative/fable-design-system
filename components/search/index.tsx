'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { SearchProviderProps, SearchDialogProps, SearchContextType } from '@/types/components/search';

// Create a context for search functionality
const SearchContext = createContext<SearchContextType>({
  isOpen: false,
  openDialog: () => {},
  closeDialog: () => {},
  toggleDialog: () => {},
  query: '',
  setQuery: () => {},
});

// Export a hook to use the search context
export const useSearch = () => useContext(SearchContext);

// Export the search provider component
export function SearchProvider({ children }: SearchProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Handle keyboard shortcut to open search dialog
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(open => !open);
      }
      
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const contextValue: SearchContextType = {
    isOpen,
    openDialog: () => setIsOpen(true),
    closeDialog: () => setIsOpen(false),
    toggleDialog: () => setIsOpen(prev => !prev),
    query,
    setQuery
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

// Export the search dialog component
export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const { isOpen, closeDialog, query, setQuery } = useSearch();
  const dialogOpen = open ?? isOpen;
  
  // Handle changes in dialog open state
  const handleOpenChange = (state: boolean) => {
    if (onOpenChange) {
      onOpenChange(state);
    } else {
      if (!state) closeDialog();
    }
  };

  // Reset query when dialog closes
  useEffect(() => {
    if (!dialogOpen) {
      setQuery('');
    }
  }, [dialogOpen, setQuery]);

  if (!dialogOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center pt-16 sm:pt-0">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => handleOpenChange(false)}
      />
      <div className="relative z-50 w-full max-w-lg p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="flex items-center border-b px-3">
            <div className="mr-2 text-gray-400">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              className="flex-1 py-3 px-2 w-full outline-none bg-transparent"
              placeholder="Search documentation..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <div className="border text-xs rounded px-1 py-0.5 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
              Esc
            </div>
          </div>
          
          <div className="max-h-[300px] overflow-y-auto py-2">
            {/* Search results would go here */}
            {!query && (
              <div className="px-4 py-8 text-center text-gray-500">
                Start typing to search...
              </div>
            )}
            {query && (
              <div className="px-4 py-2">
                {/* This would be populated with actual search results */}
                <div className="text-sm text-gray-500">Search functionality to be implemented</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
