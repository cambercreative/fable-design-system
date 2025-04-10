"use client"

import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'
import AxeHelper from './axe-helper'
import Header from '../components/header'
import MainNavigation from '../components/main-navigation'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import Providers from './providers'
import StyledComponentsRegistry from '../lib/registry'

export const metadata: Metadata = {
  title: 'Fable Design System',
  description: "Visual documentation of Fable's design language",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  
  // Close sidebar on mobile by default
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false)
      } else {
        setIsSidebarOpen(true)
      }
    }
    
    // Initial check
    handleResize()
    
    // Listen for window resize
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  // Close sidebar on route change on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false)
    }
  }, [pathname])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="bg-surface-primary dark:bg-dark-surface-primary antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <StyledComponentsRegistry>
            <Providers>
              <div className="flex h-screen flex-col">
                <Header 
                  isSidebarOpen={isSidebarOpen} 
                  toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
                />
                <div className="flex flex-1 overflow-hidden">
                  <MainNavigation isOpen={isSidebarOpen} />
                  <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
              <AxeHelper />
            </Providers>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}