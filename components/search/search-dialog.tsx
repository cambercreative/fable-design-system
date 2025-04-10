"use client"

import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { useSearch } from './search-provider'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Search, X, Filter, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { cn } from '../lib/utils'

export function SearchDialog() {
  const {
    searchQuery,
    setSearchQuery,
    results,
    isSearching,
    isSearchOpen,
    setIsSearchOpen,
    clearSearch,
    activeFilters,
    toggleFilter,
    availableFilters
  } = useSearch()
  
  const [showFilters, setShowFilters] = useState(false)
  const [activeTab, setActiveTab] = useState('all')
  
  // Close dialog when pressing escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setIsSearchOpen])
  
  // Filter results by active tab
  const filteredResults = activeTab === 'all'
    ? results
    : results.filter(item => {
        if (activeTab === 'components') return item.type === 'component'
        if (activeTab === 'tokens') return item.type === 'token'
        if (activeTab === 'foundations') return item.type === 'foundation'
        if (activeTab === 'patterns') return item.type === 'pattern'
        return true
      })
      
  // Group results by category for better display
  const groupedResults = filteredResults.reduce((acc, item) => {
    const category = item.subcategory || item.category
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, typeof results>)
  
  // Handle dialog close
  const handleClose = () => {
    setIsSearchOpen(false)
    // Don't clear the search immediately to avoid UI flicker
    setTimeout(() => {
      if (!isSearchOpen) {
        clearSearch()
      }
    }, 300)
  }
  
  // Get the total count of active filters
  const activeFilterCount = activeFilters.categories.length + 
    activeFilters.types.length + 
    activeFilters.properties.length
    
  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent 
        className="max-w-4xl p-0 gap-0 h-[80vh] overflow-hidden" 
        onInteractOutside={handleClose}
        onEscapeKeyDown={handleClose}
      >
        <div className="flex items-center gap-3 p-4 border-b border-border">
          <Search className="text-muted-foreground flex-shrink-0" size={18} />
          <Input
            placeholder="Search components, tokens, patterns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none shadow-none focus-visible:ring-0 h-10 text-base bg-transparent"
            autoFocus
          />
          {searchQuery && (
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setSearchQuery('')}
              className="flex-shrink-0"
            >
              <X size={18} className="text-muted-foreground" />
              <span className="sr-only">Clear search</span>
            </Button>
          )}
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowFilters(!showFilters)}
            className={cn(
              "flex-shrink-0 relative",
              showFilters && "bg-primary/10 text-primary"
            )}
          >
            <Filter size={18} />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
        
        <div className="flex">
          {/* Filters sidebar */}
          {showFilters && (
            <div className="w-64 border-r border-border p-4 flex-shrink-0 h-[calc(80vh-4rem-52px)] overflow-y-auto">
              <div className="font-medium mb-2">Categories</div>
              <div className="space-y-1 mb-4">
                {availableFilters.categories.map(category => (
                  <div key={category} className="flex items-center">
                    <label 
                      className="flex items-center space-x-2 text-sm cursor-pointer w-full py-1 px-2 rounded hover:bg-surface-primary"
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.categories.includes(category)}
                        onChange={() => toggleFilter('categories', category)}
                        className="rounded text-primary"
                      />
                      <span>{category}</span>
                    </label>
                  </div>
                ))}
              </div>
              
              <div className="font-medium mb-2">Types</div>
              <div className="space-y-1 mb-4">
                {availableFilters.types.map(type => (
                  <div key={type} className="flex items-center">
                    <label 
                      className="flex items-center space-x-2 text-sm cursor-pointer w-full py-1 px-2 rounded hover:bg-surface-primary"
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.types.includes(type)}
                        onChange={() => toggleFilter('types', type)}
                        className="rounded text-primary"
                      />
                      <span className="capitalize">{type}s</span>
                    </label>
                  </div>
                ))}
              </div>
              
              <div className="font-medium mb-2">Properties</div>
              <div className="space-y-1">
                {availableFilters.properties.map(property => (
                  <div key={property} className="flex items-center">
                    <label 
                      className="flex items-center space-x-2 text-sm cursor-pointer w-full py-1 px-2 rounded hover:bg-surface-primary"
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.properties.includes(property)}
                        onChange={() => toggleFilter('properties', property)}
                        className="rounded text-primary"
                      />
                      <span className="capitalize">{property}</span>
                    </label>
                  </div>
                ))}
              </div>
              
              {activeFilterCount > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setActiveFilters({
                      categories: [],
                      types: [],
                      properties: []
                    })
                  }}
                  className="mt-4 w-full"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          )}
          
          {/* Results area */}
          <div className={cn(
            "flex-1 overflow-hidden flex flex-col",
            !results.length && !isSearching && "items-center justify-center"
          )}>
            {/* Tabs for filtering results by type */}
            {(results.length > 0 || searchQuery) && (
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="px-4 pt-4">
                  <TabsList className="grid grid-cols-5 mb-4">
                    <TabsTrigger value="all" className="text-xs">
                      All ({results.length})
                    </TabsTrigger>
                    <TabsTrigger value="components" className="text-xs">
                      Components ({results.filter(r => r.type === 'component').length})
                    </TabsTrigger>
                    <TabsTrigger value="tokens" className="text-xs">
                      Tokens ({results.filter(r => r.type === 'token').length})
                    </TabsTrigger>
                    <TabsTrigger value="foundations" className="text-xs">
                      Foundations ({results.filter(r => r.type === 'foundation').length})
                    </TabsTrigger>
                    <TabsTrigger value="patterns" className="text-xs">
                      Patterns ({results.filter(r => r.type === 'pattern').length})
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                {/* All tab contents use the same rendering, but with filtered data */}
                <TabsContent value={activeTab} className="m-0">
                  <ScrollArea className="h-[calc(80vh-4rem-52px-54px)]">
                    <div className="p-4">
                      {isSearching ? (
                        <div className="flex items-center justify-center py-8">
                          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
                        </div>
                      ) : (
                        <>
                          {filteredResults.length === 0 && searchQuery ? (
                            <div className="text-center py-8 text-muted-foreground">
                              <p>No results found for "{searchQuery}"</p>
                              <p className="text-sm mt-2">Try a different search term or adjust your filters.</p>
                            </div>
                          ) : (
                            <>
                              {Object.entries(groupedResults).map(([category, items]) => (
                                <div key={category} className="mb-6">
                                  <h3 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wider">
                                    {category}
                                  </h3>
                                  <div className="space-y-2">
                                    {items.map(item => (
                                      <Card key={item.id} className="border hover:border-primary transition-colors">
                                        <Link href={item.href} onClick={handleClose}>
                                          <CardContent className="p-4">
                                            <div className="flex justify-between">
                                              <div>
                                                <h4 className="text-base font-semibold">{item.title}</h4>
                                                {item.description && (
                                                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                                )}
                                              </div>
                                              {item.tags && (
                                                <div className="flex gap-1 self-start ml-4 flex-shrink-0">
                                                  {item.tags.slice(0, 2).map(tag => (
                                                    <Badge key={tag} variant="secondary" className="capitalize text-xs">
                                                      {tag}
                                                    </Badge>
                                                  ))}
                                                  {item.tags.length > 2 && (
                                                    <Badge variant="secondary" className="text-xs">
                                                      +{item.tags.length - 2}
                                                    </Badge>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          </CardContent>
                                        </Link>
                                      </Card>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            )}
            
            {/* Empty state */}
            {!results.length && !isSearching && !searchQuery && (
              <div className="text-center p-8">
                <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <h2 className="text-xl font-semibold mb-2">Search Fable Design System</h2>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Find components, design tokens, foundations, and patterns by searching for names, descriptions, or properties.
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
