import Sidebar from '../components/sidebar'
import Header from '../components/header'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Fable Design System</h1>
              <p className="text-lg max-w-3xl">Visual documentation of Fable's design language, components, and patterns that power our AI-driven life stories platform.</p>
            </section>
            
            <section className="mb-xl p-l bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
              <h2 className="mb-m">Getting Started</h2>
              <p className="mb-m">The Fable Design System provides a comprehensive library of components, patterns, and guidelines for creating consistent, accessible, and delightful experiences across all Fable products.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-m">
                <a href="#" className="p-m bg-white dark:bg-dark-surface-primary rounded border border-border hover:shadow-md transition-shadow">
                  <h4 className="mb-s">Design Foundations</h4>
                  <p>Colors, typography, spacing, and other core design elements</p>
                </a>
                <a href="#" className="p-m bg-white dark:bg-dark-surface-primary rounded border border-border hover:shadow-md transition-shadow">
                  <h4 className="mb-s">Component Library</h4>
                  <p>Interactive UI components with documentation and code examples</p>
                </a>
                <a href="#" className="p-m bg-white dark:bg-dark-surface-primary rounded border border-border hover:shadow-md transition-shadow">
                  <h4 className="mb-s">Patterns & Templates</h4>
                  <p>Common UI patterns and page templates for rapid development</p>
                </a>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Latest Updates</h2>
              <div className="border border-border rounded-lg overflow-hidden">
                <div className="p-m border-b border-border bg-surface-secondary dark:bg-dark-surface-secondary">
                  <span className="text-sm font-medium">April 10, 2025</span>
                </div>
                <div className="p-m">
                  <h3 className="mb-s">Design System Website Launch</h3>
                  <p>Initial release of the Fable Design System website with core documentation and component library.</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
