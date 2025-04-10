"use client"

import React, { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import CodeBlock from './code-block'

interface ComponentExampleProps {
  title: string
  description?: string
  code: string
  language?: string
  children: React.ReactNode
}

export default function ComponentExample({
  title,
  description,
  code,
  language = 'jsx',
  children
}: ComponentExampleProps) {
  const [viewState, setViewState] = useState<'preview' | 'code'>('preview')
  
  return (
    <div className="mb-l">
      {title && <h3 className="mb-s">{title}</h3>}
      {description && <p className="mb-m">{description}</p>}
      
      <div className="p-l bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg border border-border">
        <Tabs defaultValue="preview" onValueChange={(value) => setViewState(value as 'preview' | 'code')}>
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="p-m">
            <div className={viewState === 'preview' ? 'block' : 'hidden'}>
              {children}
            </div>
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock 
              language={language} 
              code={code} 
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}