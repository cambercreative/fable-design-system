import React from 'react'
import Sidebar from '../../../components/sidebar'
import Header from '../../../components/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import CodeBlock from '../../../components/code-block'

// Import pattern-specific components
import StoryLayoutExample from './components/story-layout-example'
import CollectionLayoutExample from './components/collection-layout-example'

export default function ContentLayoutPatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Content Layout Patterns</h1>
              <p className="text-lg max-w-3xl mb-l">
                Responsive layout patterns for organizing and presenting content across different device sizes.
                These patterns ensure consistent, accessible, and visually appealing presentation of Fable's content.
              </p>
            </section>

            <section className="mb-xl" id="story-layout">
              <h2 className="mb-m">Story Presentation Layout</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <StoryLayoutExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For displaying detailed story content with media elements</li>
                      <li>When presenting a single, focused story experience</li>
                      <li>For layouts that combine audio playback with text transcripts</li>
                      <li>When users need to engage deeply with a specific story</li>
                      <li>For showcasing multimedia content in an accessible format</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Ensure clear content hierarchy with prominent story title and metadata</li>
                      <li>Position audio playback controls in an easily accessible location</li>
                      <li>Include chapter or segment navigation when appropriate</li>
                      <li>Present transcript in a readable format with proper typography</li>
                      <li>Use visual separation between story sections</li>
                      <li>Provide clear attribution for story sources</li>
                      <li>Incorporate appropriate spacing to enhance readability</li>
                      <li>Ensure responsive behavior adapts gracefully across device sizes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Layout structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Header: Title, metadata, and essential story context</li>
                      <li>Media Section: Audio player with visualization and controls</li>
                      <li>Content Body: Transcript or story text with appropriate formatting</li>
                      <li>Supplementary Content: Related information, images, or context</li>
                      <li>Actions: Share, download, or interaction options</li>
                      <li>Navigation: Chapter selection or timeline navigation when applicable</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Layout & Spacing</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Container max-width: 960px on desktop for optimal readability</li>
                        <li>Content padding: spacing-l (24px) on mobile, spacing-xl (32px) on desktop</li>
                        <li>Section spacing: spacing-xl (32px) between major sections</li>
                        <li>Header bottom margin: spacing-l (24px)</li>
                        <li>Media controls height: 80px</li>
                        <li>Content columns on desktop: 2/3 for main content, 1/3 for supplementary</li>
                        <li>Mobile layout: Single column with stacked sections</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Typography</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Story title: Title 1 in Faro Bold</li>
                        <li>Metadata: Caption in Atkinson Hyperlegible Next, text-tertiary color</li>
                        <li>Section headings: Title 3 in Faro Medium</li>
                        <li>Story text: Body in Atkinson Hyperlegible Next</li>
                        <li>Pull quotes: Title 4 in Faro, text-secondary with left border accent</li>
                        <li>Audio timestamp: Caption in monospace font</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Component Arrangement</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Audio player: Full width, positioned at the top of content</li>
                        <li>Transcript: Below player with paragraph-level timestamps</li>
                        <li>Images: Aligned with related content, optionally full-width</li>
                        <li>Action buttons: Positioned at top-right of header on desktop, below title on mobile</li>
                        <li>Chapter navigation: Horizontal scrolling on mobile, sidebar on larger screens</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Content Structure</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Use semantic HTML elements that reflect content hierarchy</li>
                        <li>Implement proper heading structure (h1-h6) for content sections</li>
                        <li>Apply ARIA landmarks for major sections (main, aside, navigation)</li>
                        <li>Ensure content can be navigated via keyboard</li>
                        <li>Maintain logical tab order through interactive elements</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Media Accessibility</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Provide text transcripts for all audio content</li>
                        <li>Ensure audio controls are keyboard accessible</li>
                        <li>Include appropriate ARIA attributes for media controls</li>
                        <li>Offer alternative control methods (keyboard shortcuts)</li>
                        <li>Synchronize transcript highlighting with audio playback</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Visual Considerations</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Maintain adequate text size for readability (minimum 16px body text)</li>
                        <li>Ensure sufficient color contrast throughout the layout</li>
                        <li>Provide clear visual differentiation between content sections</li>
                        <li>Support text resizing up to 200% without loss of content</li>
                        <li>Apply reduced-motion alternatives for animations</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PlayCircle, PauseCircle, SkipBack, SkipForward, Share, Download, Bookmark } from 'lucide-react'

// Sample data - in a real app, would come from API or props
const storyData = {
  title: "Summer at Grandma's Farm",
  narrator: "John Smith",
  date: "April 5, 2025",
  duration: "12:47",
  imageUrl: "https://example.com/grandmas-farm.jpg",
  chapters: [
    { id: 1, title: "Arrival", timestamp: "00:00" },
    { id: 2, title: "The Animals", timestamp: "02:35" },
    { id: 3, title: "Helping with Chores", timestamp: "05:12" },
    { id: 4, title: "Evening Stories", timestamp: "08:45" },
    { id: 5, title: "Saying Goodbye", timestamp: "10:30" }
  ],
  transcript: [
    { id: 1, timestamp: "00:00", text: "I remember the first time I visited my grandmother's farm. It was the summer of 1985, and I was eight years old. The drive seemed to take forever, winding through country roads until we finally arrived at a place that would become my favorite childhood destination." },
    { id: 2, timestamp: "01:28", text: "The farmhouse itself was nothing special - a modest two-story home with white paint peeling at the corners. But to me, it was a castle full of mysteries to explore." },
    { id: 3, timestamp: "02:35", text: "The animals were what I loved most. Grandmother had two horses, a dozen chickens, and a cow named Bessie. Each morning, I'd wake up early to help feed them, learning their personalities and quirks." },
    { id: 4, timestamp: "03:52", text: "The horses were gentle giants named Star and Thunder. Star had a white mark on her forehead, and Thunder was completely black. I was terrified of them at first, but Grandma taught me how to approach them calmly, with an open palm and soft voice." },
    { id: 5, timestamp: "05:12", text: "Grandma believed in keeping me busy. 'Idle hands find trouble,' she'd say. So I learned to collect eggs without disturbing the hens too much, and how to milk Bessie (though I was terrible at it those first few summers)." }
  ]
}

export default function StoryLayout() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState("00:00")
  const [activeChapter, setActiveChapter] = useState(1)
  const [bookmarked, setBookmarked] = useState(false)
  
  // Audio player controls
  const togglePlayback = () => {
    setIsPlaying(!isPlaying)
  }
  
  // For demonstration purposes only
  const goToChapter = (chapterId) => {
    setActiveChapter(chapterId)
    // In a real app, would seek to the chapter's timestamp
    const chapter = storyData.chapters.find(c => c.id === chapterId)
    if (chapter) {
      setCurrentTime(chapter.timestamp)
    }
  }
  
  // Audio waveform visualizer
  const renderWaveform = () => (
    <div className="h-16 w-full relative">
      <div className="absolute inset-0 flex items-center">
        {/* Generate random bars for waveform visualization */}
        {Array.from({ length: 80 }).map((_, i) => {
          const height = Math.floor(Math.random() * 60) + 10
          return (
            <div
              key={i}
              className="w-1 mx-px bg-primary opacity-50 rounded-full"
              style={{ 
                height: \`\${height}%\`, 
                opacity: isPlaying ? (i % 3 === 0 ? 0.8 : 0.4) : 0.4 
              }}
            ></div>
          )
        })}
      </div>
    </div>
  )
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Story Header */}
      <div className="mb-l">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-xs">{storyData.title}</h1>
            <p className="text-text-tertiary">
              Narrated by {storyData.narrator} • {storyData.date} • {storyData.duration}
            </p>
          </div>
          <div className="flex space-x-s mt-s md:mt-0">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setBookmarked(!bookmarked)} 
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
              className={bookmarked ? 'text-primary' : ''}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Share story">
              <Share className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Download story">
              <Download className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Audio Player */}
      <Card className="mb-l p-m bg-gradient-to-r from-primary to-primary-amber">
        <div className="text-white space-y-m">
          {/* Waveform */}
          {renderWaveform()}
          
          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-m">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white hover:bg-opacity-10"
                aria-label="Skip backward 15 seconds"
              >
                <SkipBack className="h-6 w-6" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white hover:bg-opacity-10" 
                onClick={togglePlayback} 
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? 
                  <PauseCircle className="h-10 w-10" /> : 
                  <PlayCircle className="h-10 w-10" />
                }
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white hover:bg-opacity-10"
                aria-label="Skip forward 15 seconds"
              >
                <SkipForward className="h-6 w-6" />
              </Button>
            </div>
            
            <div className="flex items-center space-x-s">
              <span className="text-sm font-mono">{currentTime}</span>
              <span className="text-sm font-mono">/</span>
              <span className="text-sm font-mono">{storyData.duration}</span>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Content Tabs */}
      <Tabs defaultValue="transcript" className="mb-l">
        <TabsList>
          <TabsTrigger value="transcript">Transcript</TabsTrigger>
          <TabsTrigger value="chapters">Chapters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="transcript" className="pt-m">
          <div className="space-y-m">
            {storyData.transcript.map(segment => (
              <div key={segment.id} className="group">
                <div className="flex">
                  <span className="text-sm font-mono text-text-tertiary w-12 shrink-0 pt-xs">
                    {segment.timestamp}
                  </span>
                  <p className="text-text-primary">
                    {segment.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="chapters" className="pt-m">
          <div className="space-y-xs">
            {storyData.chapters.map(chapter => (
              <button 
                key={chapter.id}
                className={\`w-full text-left p-s rounded-md hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary flex justify-between items-center \${
                  activeChapter === chapter.id ? 'bg-surface-secondary dark:bg-dark-surface-secondary' : ''
                }\`}
                onClick={() => goToChapter(chapter.id)}
              >
                <span className="font-medium">{chapter.title}</span>
                <span className="text-sm font-mono text-text-tertiary">{chapter.timestamp}</span>
              </button>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-xl" id="collection-layout">
              <h2 className="mb-m">Collection Layout Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <CollectionLayoutExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For presenting multiple related stories or content items</li>
                      <li>When users need to browse and discover content</li>
                      <li>For showcasing thematic or chronological collections</li>
                      <li>When providing an overview of available content</li>
                      <li>For creating curated sets of related stories</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Use clear collection titles and descriptions</li>
                      <li>Apply consistent card styling for collection items</li>
                      <li>Provide appropriate filtering and sorting options</li>
                      <li>Include visual indicators for item status (new, completed, etc.)</li>
                      <li>Ensure responsive grid adapts well across device sizes</li>
                      <li>Use progressive loading for larger collections</li>
                      <li>Include empty and loading states for collections</li>
                      <li>Provide clear calls-to-action when appropriate</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Layout variations</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Grid layout: Equal sized cards in a responsive grid</li>
                      <li>List layout: Horizontal rows with consistent information hierarchy</li>
                      <li>Featured layout: Highlight important items with larger cards</li>
                      <li>Masonry layout: Variable height items in an optimized grid</li>
                      <li>Carousel layout: Horizontally scrolling items with pagination</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Grid Layout</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Card dimensions: Maintain consistent width, variable height</li>
                        <li>Grid gap: spacing-l (24px) both horizontally and vertically</li>
                        <li>Grid columns: 1 (mobile), 2 (tablet), 3 (desktop), 4 (large desktop)</li>
                        <li>Card padding: spacing-m (16px) internal padding</li>
                        <li>Card radius: radius-m (8px)</li>
                        <li>Card elevation: elevation-2 default, elevation-3 on hover</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Collection Header</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Title: Title 1 in Faro Bold</li>
                        <li>Description: Body in Atkinson Hyperlegible Next, max 2 lines</li>
                        <li>Controls: Right-aligned on desktop, below description on mobile</li>
                        <li>Spacing: spacing-xl (32px) between header and grid</li>
                        <li>Filter/sort: Positioned on opposite side from main controls</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Card Components</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Thumbnail: 16:9 aspect ratio, radius-m (8px) top corners</li>
                        <li>Title: Title 3 in Faro Bold, 2 lines maximum with ellipsis</li>
                        <li>Metadata: Caption text in Atkinson Hyperlegible Next, text-tertiary</li>
                        <li>Status indicators: Top-right position, appropriate status colors</li>
                        <li>Progress: 4px height bar at bottom with Fable Amber color</li>
                        <li>Action buttons: Bottom-right corner, compact styling</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Semantic Structure</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Use <code>section</code> with appropriate <code>aria-labelledby</code> for collections</li>
                        <li>Apply <code>ul</code>/<code>li</code> structure for grid items in collections</li>
                        <li>Ensure proper heading structure for collection and item titles</li>
                        <li>Use <code>article</code> elements for individual story cards</li>
                        <li>Apply appropriate ARIA roles for custom controls</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Navigation & Interaction</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Ensure keyboard navigation through grid items</li>
                        <li>Provide clear focus indicators for interactive elements</li>
                        <li>Implement logical tab order through collection items</li>
                        <li>Make filtering and sorting controls screen reader accessible</li>
                        <li>Support alternative input methods for interaction</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Information Access</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Avoid relying solely on visual layout for meaning</li>
                        <li>Ensure filter and sort controls clearly indicate their current state</li>
                        <li>Provide text alternatives for status indicators</li>
                        <li>Announce meaningful state changes via <code>aria-live</code> regions</li>
                        <li>Support screen reader announcement of collection statistics (e.g., "Showing 12 of 24 items")</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState } from 'react'
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
    coverImage: "https://example.com/childhood.jpg",
    isNew: false
  },
  {
    id: 2,
    title: "Family Traditions",
    itemCount: 12,
    progress: 25,
    coverImage: "https://example.com/family.jpg",
    isNew: true
  },
  {
    id: 3,
    title: "Career Journey",
    itemCount: 5,
    progress: 100,
    coverImage: "https://example.com/career.jpg",
    isNew: false
  },
  {
    id: 4,
    title: "Travel Adventures",
    itemCount: 15,
    progress: 40,
    coverImage: "https://example.com/travel.jpg",
    isNew: false
  },
  {
    id: 5,
    title: "Relationship Stories",
    itemCount: 7,
    progress: 0,
    coverImage: "https://example.com/relationships.jpg",
    isNew: true
  },
  {
    id: 6,
    title: "Life Lessons",
    itemCount: 10,
    progress: 50,
    coverImage: "https://example.com/lessons.jpg",
    isNew: false
  }
]

export default function CollectionLayout() {
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
          <h1 className="text-3xl font-bold">Your Story Collections</h1>
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
                      style={{ width: \`\${collection.progress}%\` }}
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
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
