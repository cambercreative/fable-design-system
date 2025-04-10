"use client"

import { ReactNode } from 'react'
import Breadcrumb from './breadcrumb'
import { cn } from './lib/utils'

interface PageWrapperProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export default function PageWrapper({
  title,
  description,
  children,
  className,
}: PageWrapperProps) {
  return (
    <div className={cn("w-full max-w-7xl mx-auto", className)}>
      <Breadcrumb />
      
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">{title}</h1>
        {description && (
          <p className="text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      
      <div>
        {children}
      </div>
    </div>
  )
}
