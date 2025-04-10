import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fable Design System',
  description: "Visual documentation of Fable's design language",
}

export default function Home() {
  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-4xl font-bold">Fable Design System</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          A comprehensive design system for building consistent, accessible and delightful user experiences.
        </p>
      </header>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Getting Started</h2>
        <p>
          The Fable Design System provides a robust set of design guidelines, components, and patterns
          to ensure consistency across the Fable ecosystem.
        </p>
        <p>
          Navigate through the sidebar to explore our full component library, design tokens, and usage guidelines.
        </p>
      </section>
    </div>
  )
}