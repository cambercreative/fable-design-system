import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { Search, Filter, Plus, MoreVertical, PlayCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'

// Sample data for story collections
const collections = [
  {
    id: 1,
    title: "Childhood Memories",
    itemCount: 8,
    progress: 75,
    isNew: false
  },
  {
    id: 2,
    title: "Family Traditions",
    itemCount: 12,
    progress: 25,
    isNew: true
  },
  {
    id: 3,
    title: "Career Journey",
    itemCount: 5,
    progress: 100,
    isNew: false
  },
  {
    id: 4,
    title: "Travel Adventures",
    itemCount: 15,
    progress: 40,
    isNew: false
  },
  {
    id: 5,
    title: "Relationship Stories",
    itemCount: 7,
    progress: 0,
    isNew: true
  },
  {
    id: 6,
    title: "Life Lessons",
    itemCount: 10,
    progress: 50,
    isNew: false
  }
]

export default function CollectionLayoutExample() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all') // all, in-progress, completed, new
  
  // Filter collections based on search and filter
  const filteredCollections = collections.filter(collection => {
    // Search filter
    const matchesSearch = collection.title.toLowerCase().includes(searchQuery.toLowerCase())
    
    // Status filter
    let matchesFilter = true
    if (filter === 'in-progress') {
      matchesFilter = collection.progress > 0 && collection.progress < 100
    } else if (filter === 'completed') {
      matchesFilter = collection.progress === 100
    } else if (filter === 'new') {
      matchesFilter = collection.isNew
    }
    
    return matchesSearch && matchesFilter
  })
  
  // Placeholder for collection card images
  const getImagePlaceholder = (id) => {
    const colors = ['#FF5757', '#FFB443', '#43A047', '#2196F3', '#9C27B0', '#607D8B']
    return (
      <div 
        className="w-full aspect-video rounded-t-md flex items-center justify-center"
        style={{ backgroundColor: colors[id % colors.length] }}
      >
        <PlayCircle className="h-12 w-12 text-white opacity-50" />
      </div>
    )
  }
  
  return (
    <div className="space-y-xl">
      {/* Collection Header */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-m">
          <h2 className="text-3xl font-bold">Your Story Collections</h2>
          <Button className="mt-s md:mt-0">
            <Plus className="h-4 w-4 mr-s" />
            New Collection
          </Button>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row space-y-s md:space-y-0 md:space-x-s">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-text-tertiary" />
            <Input
              placeholder="Search collections"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="gap-s">
                <Filter className="h-4 w-4" />
                {filter === 'all' ? 'All Collections' : 
                 filter === 'in-progress' ? 'In Progress' :
                 filter === 'completed' ? 'Completed' : 'New'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setFilter('all')}>
                All Collections
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('in-progress')}>
                In Progress
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('completed')}>
                Completed
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setFilter('new')}>
                New
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Collection Grid */}
      {filteredCollections.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
          {filteredCollections.map(collection => (
            <Card key={collection.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
              {/* Card image */}
              {getImagePlaceholder(collection.id)}
              
              <div className="p-m flex-grow">
                <div className="flex justify-between items-start mb-xs">
                  <h3 className="text-xl font-bold line-clamp-2">{collection.title}</h3>
                  
                  <div className="flex items-center space-x-xs">
                    {collection.isNew && (
                      <span className="inline-block px-2 py-px text-xs bg-primary text-white rounded-full">
                        New
                      </span>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Collection</DropdownMenuItem>
                        <DropdownMenuItem>Share Collection</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-status-error">
                          Delete Collection
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                
                <p className="text-text-tertiary text-sm mb-m">
                  {collection.itemCount} {collection.itemCount === 1 ? 'story' : 'stories'}
                </p>
                
                {/* Progress bar */}
                <div className="mt-auto">
                  <div className="w-full h-1 bg-surface-tertiary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary-amber rounded-full"
                      style={{ width: `${collection.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-text-tertiary mt-xs">
                    {collection.progress}% complete
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-xl">
          <h2 className="text-xl font-medium mb-s">No matching collections found</h2>
          <p className="text-text-tertiary mb-m">Try adjusting your search or filter criteria</p>
          <Button variant="outline" onClick={() => {setSearchQuery(''); setFilter('all');}}>
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  )
}
