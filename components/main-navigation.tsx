"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ScrollArea } from './ui/scroll-area'
import { cn } from './lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'
import { ChevronRight, Home, Palette, Components, Layout, FileText, Layers, Settings, Smartphone, Search, Code } from 'lucide-react'

// Navigation item type
type NavItem = {
  title: string
  href?: string
  icon?: React.ReactNode
  children?: NavItem[]
}

// Navigation structure based on DSD
const navigationItems: NavItem[] = [
  {
    title: 'Home',
    href: '/',
    icon: <Home size={18} />,
  },
  {
    title: 'Getting Started',
    href: '/getting-started',
    icon: <ChevronRight size={18} />,
  },
  {
    title: 'Design Foundations',
    icon: <Palette size={18} />,
    children: [
      { title: 'Colors', href: '/design-foundations/colors' },
      { title: 'Typography', href: '/design-foundations/typography' },
      { title: 'Spacing', href: '/design-foundations/spacing' },
      { title: 'Shape System', href: '/design-foundations/shape-system' },
      { title: 'Motion', href: '/design-foundations/motion' },
      { title: 'Light & Dark Mode', href: '/design-foundations/themes' },
      { title: 'Code Playground', href: '/design-foundations/playground', icon: <Code size={16} /> },
    ],
  },
  {
    title: 'Component Library',
    icon: <Components size={18} />,
    children: [
      { title: 'Buttons', href: '/components/buttons' },
      { title: 'Inputs', href: '/components/inputs' },
      { title: 'Checkboxes', href: '/components/checkboxes' },
      { title: 'Radio Groups', href: '/components/radio-groups' },
      { title: 'Select', href: '/components/select' },
      { title: 'Cards', href: '/components/cards' },
      { title: 'Dialogs', href: '/components/dialogs' },
      { title: 'Tooltips', href: '/components/tooltips' },
      { title: 'Navigation', href: '/components/navigation' },
      { title: 'Progress', href: '/components/progress' },
      { title: 'Notifications', href: '/components/notifications' },
      { title: 'Voice UI', href: '/components/voice-ui' },
    ],
  },
  {
    title: 'Platform Guidelines',
    icon: <Smartphone size={18} />,
    children: [
      { title: 'Overview', href: '/platform-guidelines' },
      { title: 'Component Adaptations', href: '/platform-guidelines/component-adaptations' },
    ],
  },
  {
    title: 'Patterns & Templates',
    icon: <Layout size={18} />,
    children: [
      { title: 'Form Patterns', href: '/patterns/forms' },
      { title: 'Navigation Patterns', href: '/patterns/navigation' },
      { title: 'Data Display', href: '/patterns/data-display' },
      { title: 'Page Layouts', href: '/patterns/page-layouts' },
      { title: 'Interactive Workflows', href: '/patterns/workflows' },
      { title: 'Responsive Layouts', href: '/patterns/responsive' },
    ],
  },
  {
    title: 'Resources',
    icon: <FileText size={18} />,
    children: [
      { title: 'Design Tokens', href: '/resources/design-tokens' },
      { title: 'Fonts', href: '/resources/fonts' },
      { title: 'Design Files', href: '/resources/design-files' },
      { title: 'Code Repository', href: '/resources/code-repository' },
      { title: 'Implementation Guide', href: '/resources/implementation-guide' },
    ],
  },
  {
    title: 'Accessibility',
    href: '/accessibility',
    icon: <Layers size={18} />,
  },
  {
    title: 'System Settings',
    icon: <Settings size={18} />,
    children: [
      { title: 'General Settings', href: '/system-settings' },
      { title: 'Search & Filter', href: '/system-settings/search', icon: <Search size={16} /> },
    ],
  },
]

interface MainNavigationProps {
  isOpen: boolean
}

export default function MainNavigation({ isOpen }: MainNavigationProps) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>([])

  // Determine which sections should be open based on the current path
  useEffect(() => {
    const matchingGroups = navigationItems
      .filter(item => 
        item.children?.some(child => 
          pathname === child.href || pathname?.startsWith(`${child.href}/`)
        )
      )
      .map(item => item.title)
    
    setOpenSections(matchingGroups)
  }, [pathname])

  // Handle single or multiple accordion items based on need
  const handleAccordionChange = (value: string) => {
    setOpenSections(prev => 
      prev.includes(value) 
        ? prev.filter(item => item !== value)
        : [...prev, value]
    )
  }

  if (!isOpen) return null

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-20 w-full md:w-72 h-screen border-r border-border bg-surface-secondary dark:bg-surface-secondary transition-all duration-300 ease-in-out",
      "md:sticky md:top-16 md:h-[calc(100vh-4rem)]",
      isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
    )}>
      <div className="h-16 md:hidden border-b border-border flex items-center px-6">
        <Link href="/" className="text-xl font-semibold">
          Fable Design System
        </Link>
      </div>
      
      <ScrollArea className="h-[calc(100vh-4rem)]">
        <div className="px-4 py-6">
          <div className="hidden md:block mb-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-md"></div>
              <span className="text-lg font-semibold">Fable Design</span>
            </Link>
          </div>
          
          <nav className="space-y-2">
            {navigationItems.map((item, index) => {
              // For items with children, render as accordion
              if (item.children) {
                return (
                  <Accordion
                    key={index}
                    type="multiple"
                    value={openSections}
                    onValueChange={(value) => handleAccordionChange(item.title)}
                    className="border-none"
                  >
                    <AccordionItem value={item.title} className="border-none">
                      <AccordionTrigger className="py-2 px-3 text-sm hover:bg-surface-primary dark:hover:bg-surface-primary rounded-md group">
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.title}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pl-9 space-y-1 mt-1">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              href={child.href || '#'}
                              className={cn(
                                "block py-2 px-3 text-sm rounded-md transition-colors",
                                pathname === child.href
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "hover:bg-surface-primary dark:hover:bg-surface-primary"
                              )}
                            >
                              <div className="flex items-center gap-2">
                                {child.icon}
                                <span>{child.title}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                )
              }
              
              // For simple items, render as links
              return (
                <Link
                  key={index}
                  href={item.href || '#'}
                  className={cn(
                    "flex items-center gap-3 py-2 px-3 text-sm rounded-md transition-colors",
                    pathname === item.href
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-surface-primary dark:hover:bg-surface-primary"
                  )}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </ScrollArea>
    </div>
  )
}