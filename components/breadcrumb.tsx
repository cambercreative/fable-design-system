"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from './lib/utils'

interface BreadcrumbProps {
  className?: string
}

// Function to get breadcrumb items from pathname
function getBreadcrumbs(pathname: string) {
  const paths = pathname.split('/').filter(Boolean)
  
  // If it's the homepage, return just Home
  if (paths.length === 0) {
    return [{ label: 'Home', href: '/' }]
  }
  
  // Generate breadcrumb items with correct paths
  const breadcrumbs = paths.map((path, index) => {
    const href = `/${paths.slice(0, index + 1).join('/')}`
    
    // Format breadcrumb label
    const label = path
      .split('-')
      .map(segment => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(' ')
    
    return { label, href }
  })
  
  // Add home as the first item
  return [{ label: 'Home', href: '/' }, ...breadcrumbs]
}

export default function Breadcrumb({ className }: BreadcrumbProps) {
  const pathname = usePathname()
  const breadcrumbs = getBreadcrumbs(pathname)
  
  return (
    <nav aria-label="Breadcrumb" className={cn("mb-6", className)}>
      <ol className="flex items-center flex-wrap gap-1 text-sm">
        {breadcrumbs.map((crumb, index) => {
          const isLast = index === breadcrumbs.length - 1
          
          return (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={14} className="mx-1 text-muted-foreground" aria-hidden="true" />
              )}
              
              {isLast ? (
                <span className="font-medium" aria-current="page">
                  {index === 0 ? <Home size={16} /> : crumb.label}
                </span>
              ) : (
                <Link 
                  href={crumb.href}
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  {index === 0 ? <Home size={16} /> : crumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
