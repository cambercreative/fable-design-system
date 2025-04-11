"use client"

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SidebarProps } from '@/types/components/sidebar'
import { cn } from './lib/utils'

export function Sidebar({ className, ...props }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md md:hidden bg-surface-secondary dark:bg-dark-surface-secondary"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside 
        className={cn(
          "fixed top-0 left-0 z-40 w-64 h-full bg-surface-secondary dark:bg-dark-surface-secondary border-r border-border transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? 'translate-x-0' : '-translate-x-full',
          "md:relative md:flex",
          className
        )}
        {...props}
      >
        <div className="h-full overflow-y-auto p-6">
          <div className="mb-8">
            <h2 className="text-xl font-semibold">Fable Design System</h2>
          </div>
          
          <nav>
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <div className="p-2 font-medium">Design Foundations</div>
                <ul className="pl-4 space-y-1">
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Colors
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Typography
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Spacing
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="p-2 font-medium">Components</div>
                <ul className="pl-4 space-y-1">
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Buttons
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Forms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Cards
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <div className="p-2 font-medium">Patterns</div>
                <ul className="pl-4 space-y-1">
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Navigation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                      Forms
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" className="block p-2 rounded-md hover:bg-white dark:hover:bg-dark-surface-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}
