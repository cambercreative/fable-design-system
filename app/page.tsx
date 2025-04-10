import Link from 'next/link'
import { ArrowRight, Palette, Components, Layout, FileText } from 'lucide-react'

export default function Home() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <section className="py-12 md:py-20">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 mb-6 bg-gradient-to-r from-primary to-secondary rounded-xl"></div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Fable Design System
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8">
            A comprehensive collection of design guidelines, components, and patterns that power our AI-driven life stories platform.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started <ArrowRight size={18} />
            </Link>
            <Link
              href="/components"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-secondary/80 dark:hover:bg-dark-surface-secondary/80 transition-colors"
            >
              Explore Components
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard 
          icon={<Palette size={24} />}
          title="Design Foundations"
          description="Core design elements including colors, typography, spacing, and shapes."
          href="/design-foundations"
        />
        <FeatureCard 
          icon={<Components size={24} />}
          title="Component Library"
          description="Reusable UI components with documentation and code examples."
          href="/components"
        />
        <FeatureCard 
          icon={<Layout size={24} />}
          title="Patterns & Templates"
          description="Common UI patterns and page templates for rapid development."
          href="/patterns"
        />
        <FeatureCard 
          icon={<FileText size={24} />}
          title="Resources"
          description="Design tokens, fonts, design files, and implementation guides."
          href="/resources"
        />
      </section>

      <section className="py-16 border-t border-border">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Latest Updates</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            Stay up to date with the latest improvements and additions to our design system.
          </p>
          <div className="w-full max-w-3xl">
            <UpdateCard 
              date="April 9, 2025"
              title="New Voice UI Components"
              description="Added new voice interaction components for enhanced conversational experiences."
              href="/components/voice-ui"
            />
            <UpdateCard 
              date="April 7, 2025"
              title="Improved Accessibility"
              description="Enhanced focus states and keyboard navigation across all components."
              href="/accessibility"
            />
            <UpdateCard 
              date="April 5, 2025"
              title="Dark Mode Refinements"
              description="Updated color contrast and component states for dark mode."
              href="/design-foundations/themes"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: { 
  icon: React.ReactNode
  title: string
  description: string
  href: string
}) {
  return (
    <Link 
      href={href}
      className="group p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-xl hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
    >
      <div className="mb-4 p-3 bg-background dark:bg-dark-background inline-block rounded-lg text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Link>
  )
}

function UpdateCard({ date, title, description, href }: {
  date: string
  title: string
  description: string
  href: string
}) {
  return (
    <Link 
      href={href}
      className="block p-6 mb-4 text-left bg-surface-secondary dark:bg-dark-surface-secondary rounded-xl hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
    >
      <span className="text-sm text-muted-foreground">{date}</span>
      <h3 className="text-lg font-semibold mt-1 mb-2">{title}</h3>
      <p className="text-muted-foreground mb-2">{description}</p>
      <span className="inline-flex items-center text-primary font-medium">
        Learn more <ArrowRight size={16} className="ml-1" />
      </span>
    </Link>
  )
}
