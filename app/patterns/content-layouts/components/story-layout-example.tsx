import React, { useState } from 'react'
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

export default function StoryLayoutExample() {
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
              className="w-1 mx-px bg-white opacity-50 rounded-full"
              style={{ 
                height: `${height}%`, 
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
            <h2 className="text-3xl font-bold mb-xs">{storyData.title}</h2>
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
                className={`w-full text-left p-s rounded-md hover:bg-surface-secondary dark:hover:bg-dark-surface-secondary flex justify-between items-center ${
                  activeChapter === chapter.id ? 'bg-surface-secondary dark:bg-dark-surface-secondary' : ''
                }`}
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
}
