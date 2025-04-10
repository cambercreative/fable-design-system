"use client"

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'

interface ResponsivePreviewProps {
  children: React.ReactNode
}

export default function ResponsivePreview({ children }: ResponsivePreviewProps) {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')
  
  return (
    <div className="space-y-m">
      <Tabs defaultValue="desktop">
        <div className="flex justify-between items-center mb-m">
          <TabsList>
            <TabsTrigger value="mobile-s">Mobile S</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="tablet">Tablet</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="desktop-l">Desktop L</TabsTrigger>
          </TabsList>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setOrientation('portrait')}
              className={`p-1 rounded ${orientation === 'portrait' ? 'bg-primary text-white' : 'bg-surface-secondary dark:bg-dark-surface-secondary'}`}
              aria-label="Portrait orientation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /></svg>
            </button>
            <button 
              onClick={() => setOrientation('landscape')}
              className={`p-1 rounded ${orientation === 'landscape' ? 'bg-primary text-white' : 'bg-surface-secondary dark:bg-dark-surface-secondary'}`}
              aria-label="Landscape orientation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2" ry="2" /></svg>
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-dark-surface-primary border border-border rounded-md overflow-hidden">
          <TabsContent value="mobile-s">
            <div className={`mx-auto p-4 border-4 border-surface-secondary dark:border-dark-surface-secondary rounded-lg transition-all duration-300 ${orientation === 'portrait' ? 'w-[320px] h-[568px]' : 'w-[568px] h-[320px]'}`}>
              {children}
            </div>
          </TabsContent>
          
          <TabsContent value="mobile">
            <div className={`mx-auto p-4 border-4 border-surface-secondary dark:border-dark-surface-secondary rounded-lg transition-all duration-300 ${orientation === 'portrait' ? 'w-[375px] h-[667px]' : 'w-[667px] h-[375px]'}`}>
              {children}
            </div>
          </TabsContent>
          
          <TabsContent value="tablet">
            <div className={`mx-auto p-4 border-4 border-surface-secondary dark:border-dark-surface-secondary rounded-lg transition-all duration-300 ${orientation === 'portrait' ? 'w-[768px] h-[1024px]' : 'w-[1024px] h-[768px]'}`}>
              {children}
            </div>
          </TabsContent>
          
          <TabsContent value="desktop">
            <div className={`mx-auto p-4 border-4 border-surface-secondary dark:border-dark-surface-secondary rounded-lg transition-all duration-300 ${orientation === 'portrait' ? 'w-[1024px] h-[768px]' : 'w-[1200px] h-[800px]'}`}>
              {children}
            </div>
          </TabsContent>
          
          <TabsContent value="desktop-l">
            <div className={`mx-auto p-4 border-4 border-surface-secondary dark:border-dark-surface-secondary rounded-lg transition-all duration-300 ${orientation === 'portrait' ? 'w-[1440px] h-[900px]' : 'w-[1440px] h-[900px]'}`}>
              {children}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}