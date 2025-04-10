"use client"

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

// Define our component and token types
export type SearchableItem = {
  id: string
  title: string
  category: string
  subcategory?: string
  description?: string
  href: string
  tags?: string[]
  type: 'component' | 'token' | 'pattern' | 'foundation'
}

type SearchContextType = {
  searchQuery: string
  setSearchQuery: (query: string) => void
  activeFilters: {
    categories: string[]
    types: string[]
    properties: string[]
  }
  setActiveFilters: (filters: { categories?: string[], types?: string[], properties?: string[] }) => void
  results: SearchableItem[]
  isSearching: boolean
  isSearchOpen: boolean
  setIsSearchOpen: (isOpen: boolean) => void
  clearSearch: () => void
  toggleFilter: (filterType: 'categories' | 'types' | 'properties', value: string) => void
  availableFilters: {
    categories: string[]
    types: string[]
    properties: string[]
  }
}

// Create the context with a default value
const SearchContext = createContext<SearchContextType | undefined>(undefined)

// Define all searchable items - these would typically come from an API or generated file
const searchableItems: SearchableItem[] = [
  // Components
  { id: 'button-primary', title: 'Primary Button', category: 'Components', subcategory: 'Buttons', description: 'Primary call-to-action for screens', href: '/components/buttons', tags: ['interactive', 'input'], type: 'component' },
  { id: 'button-secondary', title: 'Secondary Button', category: 'Components', subcategory: 'Buttons', description: 'Alternative or supporting actions', href: '/components/buttons', tags: ['interactive', 'input'], type: 'component' },
  { id: 'button-tertiary', title: 'Tertiary Button', category: 'Components', subcategory: 'Buttons', description: 'Minimal emphasis actions', href: '/components/buttons', tags: ['interactive', 'input'], type: 'component' },
  { id: 'button-icon', title: 'Icon Button', category: 'Components', subcategory: 'Buttons', description: 'Compact control for common actions', href: '/components/buttons', tags: ['interactive', 'input'], type: 'component' },
  { id: 'text-input', title: 'Text Input', category: 'Components', subcategory: 'Inputs', description: 'Single-line text entry', href: '/components/inputs', tags: ['form', 'input'], type: 'component' },
  { id: 'text-area', title: 'Text Area', category: 'Components', subcategory: 'Inputs', description: 'Multi-line text entry', href: '/components/inputs', tags: ['form', 'input'], type: 'component' },
  { id: 'checkbox', title: 'Checkbox', category: 'Components', subcategory: 'Selection Controls', description: 'Binary selection or multiple selection from a set', href: '/components/checkboxes', tags: ['form', 'input'], type: 'component' },
  { id: 'radio-button', title: 'Radio Button', category: 'Components', subcategory: 'Selection Controls', description: 'Single selection from multiple options', href: '/components/radio-groups', tags: ['form', 'input'], type: 'component' },
  { id: 'toggle-switch', title: 'Toggle Switch', category: 'Components', subcategory: 'Selection Controls', description: 'Binary setting with immediate effect', href: '/components/switches', tags: ['form', 'input'], type: 'component' },
  { id: 'story-card', title: 'Story Card', category: 'Components', subcategory: 'Cards', description: 'Displays a single story entry with preview and metadata', href: '/components/cards', tags: ['content', 'container'], type: 'component' },
  
  // Design tokens
  { id: 'color-fable-red', title: 'Fable Red', category: 'Design Tokens', subcategory: 'Colors', description: 'Primary brand color - #FF3300', href: '/design-foundations/colors', tags: ['brand', 'color'], type: 'token' },
  { id: 'color-fable-amber', title: 'Fable Amber', category: 'Design Tokens', subcategory: 'Colors', description: 'Secondary brand color - #FFB800', href: '/design-foundations/colors', tags: ['brand', 'color'], type: 'token' },
  { id: 'font-faro', title: 'Faro Font', category: 'Design Tokens', subcategory: 'Typography', description: 'Primary typeface for headings and key UI elements', href: '/design-foundations/typography', tags: ['typography', 'font'], type: 'token' },
  { id: 'font-atkinson', title: 'Atkinson Hyperlegible', category: 'Design Tokens', subcategory: 'Typography', description: 'Secondary typeface optimized for maximum legibility', href: '/design-foundations/typography', tags: ['typography', 'font', 'accessibility'], type: 'token' },
  { id: 'spacing-scale', title: 'Spacing Scale', category: 'Design Tokens', subcategory: 'Spacing', description: 'Standardized spacing units from XS to XXL', href: '/design-foundations/spacing', tags: ['layout', 'spacing'], type: 'token' },
  
  // Design foundations
  { id: 'color-system', title: 'Color System', category: 'Design Foundations', subcategory: 'Colors', description: 'Comprehensive color palette for UI and branding', href: '/design-foundations/colors', tags: ['brand', 'visual'], type: 'foundation' },
  { id: 'typography-system', title: 'Typography System', category: 'Design Foundations', subcategory: 'Typography', description: 'Type scale, fonts, and text styles', href: '/design-foundations/typography', tags: ['visual', 'text'], type: 'foundation' },
  { id: 'motion-system', title: 'Motion System', category: 'Design Foundations', subcategory: 'Motion', description: 'Animation timings, easing, and principles', href: '/design-foundations/motion', tags: ['animation', 'interaction'], type: 'foundation' },
  
  // Patterns
  { id: 'form-pattern', title: 'Form Pattern', category: 'Patterns', subcategory: 'Forms', description: 'Best practices for form design and implementation', href: '/patterns/forms', tags: ['ux', 'layout'], type: 'pattern' },
  { id: 'navigation-pattern', title: 'Navigation Pattern', category: 'Patterns', subcategory: 'Navigation', description: 'Common navigation structures and implementation', href: '/patterns/navigation', tags: ['ux', 'layout'], type: 'pattern' },
]

// Define the provider component
export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [activeFilters, setActiveFilters] = useState<{
    categories: string[]
    types: string[]
    properties: string[]
  }>({
    categories: [],
    types: [],
    properties: []
  })
  const [results, setResults] = useState<SearchableItem[]>([])
  const [isSearching, setIsSearching] = useState<boolean>(false)
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false)
  
  // Generate available filters from searchable items
  const availableFilters = {
    categories: Array.from(new Set(searchableItems.map(item => item.category))),
    types: Array.from(new Set(searchableItems.map(item => item.type))),
    properties: Array.from(new Set(searchableItems.flatMap(item => item.tags || [])))
  }
  
  // Function to toggle a filter value
  const toggleFilter = useCallback((filterType: 'categories' | 'types' | 'properties', value: string) => {
    setActiveFilters(prev => {
      const filters = [...prev[filterType]]
      const index = filters.indexOf(value)
      
      if (index === -1) {
        filters.push(value)
      } else {
        filters.splice(index, 1)
      }
      
      return {
        ...prev,
        [filterType]: filters
      }
    })
  }, [])
  
  // Update the active filters function
  const updateActiveFilters = useCallback((filters: { categories?: string[], types?: string[], properties?: string[] }) => {
    setActiveFilters(prev => ({
      categories: filters.categories !== undefined ? filters.categories : prev.categories,
      types: filters.types !== undefined ? filters.types : prev.types,
      properties: filters.properties !== undefined ? filters.properties : prev.properties
    }))
  }, [])
  
  // Function to clear search
  const clearSearch = useCallback(() => {
    setSearchQuery('')
    setActiveFilters({
      categories: [],
      types: [],
      properties: []
    })
    setResults([])
    setIsSearchOpen(false)
  }, [])
  
  // Search function
  useEffect(() => {
    // Only perform search if we have a query or filters
    const hasQuery = searchQuery.trim().length > 0
    const hasFilters = Object.values(activeFilters).some(filter => filter.length > 0)
    
    if (!hasQuery && !hasFilters) {
      setResults([])
      setIsSearching(false)
      return
    }
    
    setIsSearching(true)
    
    // Debounce search for better performance
    const timer = setTimeout(() => {
      // Prepare search terms
      const terms = searchQuery.toLowerCase().trim().split(/\s+/)
      
      // Filter items based on query and active filters
      const filteredResults = searchableItems.filter(item => {
        // First check filters
        if (activeFilters.categories.length > 0 && !activeFilters.categories.includes(item.category)) {
          return false
        }
        
        if (activeFilters.types.length > 0 && !activeFilters.types.includes(item.type)) {
          return false
        }
        
        if (activeFilters.properties.length > 0 && 
            !activeFilters.properties.some(prop => item.tags?.includes(prop))) {
          return false
        }
        
        // If no search query, return all items that match filters
        if (!hasQuery) {
          return true
        }
        
        // Check if item matches search terms
        return terms.every(term => {
          return (
            item.title.toLowerCase().includes(term) ||
            item.description?.toLowerCase().includes(term) ||
            item.subcategory?.toLowerCase().includes(term) ||
            item.tags?.some(tag => tag.toLowerCase().includes(term))
          )
        })
      })
      
      setResults(filteredResults)
      setIsSearching(false)
    }, 300)
    
    return () => clearTimeout(timer)
  }, [searchQuery, activeFilters])
  
  // Context value
  const value = {
    searchQuery,
    setSearchQuery,
    activeFilters,
    setActiveFilters: updateActiveFilters,
    results,
    isSearching,
    isSearchOpen,
    setIsSearchOpen,
    clearSearch,
    toggleFilter,
    availableFilters
  }
  
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

// Custom hook to use the search context
export function useSearch() {
  const context = useContext(SearchContext)
  
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  
  return context
}
