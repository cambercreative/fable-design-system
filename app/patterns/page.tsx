import React from 'react'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

export default function PatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Patterns & Templates</h1>
              <p className="text-lg max-w-3xl">Common UI patterns and page templates that demonstrate how components work together to create cohesive experiences.</p>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Form Patterns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Sign-in Form</h3>
                  <p className="mb-m">Standard pattern for user authentication with validation.</p>
                  <a href="#" className="text-primary hover:underline">View pattern</a>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Multi-step Form</h3>
                  <p className="mb-m">Progressive disclosure pattern for collecting complex information.</p>
                  <a href="#" className="text-primary hover:underline">View pattern</a>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Navigation Patterns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Mobile Navigation</h3>
                  <p className="mb-m">Responsive navigation patterns for mobile devices.</p>
                  <a href="#" className="text-primary hover:underline">View pattern</a>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Desktop Navigation</h3>
                  <p className="mb-m">Navigation patterns optimized for desktop experiences.</p>
                  <a href="#" className="text-primary hover:underline">View pattern</a>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Page Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Story Capture</h3>
                  <p className="mb-m">Template for AI-driven life story collection.</p>
                  <a href="#" className="text-primary hover:underline">View template</a>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Story Review</h3>
                  <p className="mb-m">Template for reviewing and editing captured stories.</p>
                  <a href="#" className="text-primary hover:underline">View template</a>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">User Profile</h3>
                  <p className="mb-m">Template for user account management and settings.</p>
                  <a href="#" className="text-primary hover:underline">View template</a>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
