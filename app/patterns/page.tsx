import React from 'react'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Patterns Library</h1>
              <p className="text-lg max-w-3xl mb-l">
                Common UI patterns and compositions that demonstrate how components work together to create cohesive, accessible, and delightful user experiences. 
                These patterns follow the Fable interaction principles and accessibility standards.
              </p>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Form Patterns</h2>
              <p className="mb-m">Consistent and accessible form patterns for data collection, validation, and submission.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Sign-in & Authentication</h3>
                  <p className="mb-m">Authentication flows including sign-in, sign-up, password recovery, and multi-factor authentication.</p>
                  <Link href="/patterns/authentication" className="text-primary hover:underline inline-flex items-center">
                    View authentication patterns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Data Collection</h3>
                  <p className="mb-m">Patterns for collecting user data, from simple forms to complex multi-step processes.</p>
                  <Link href="/patterns/forms" className="text-primary hover:underline inline-flex items-center">
                    View form patterns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Content Layouts</h2>
              <p className="mb-m">Responsive layout patterns for organizing and presenting content across different device sizes.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Story Presentation</h3>
                  <p className="mb-m">Layouts for displaying life stories, audio playback, and story collections.</p>
                  <Link href="/patterns/content-layouts" className="text-primary hover:underline inline-flex items-center">
                    View content layouts
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Navigation Structures</h3>
                  <p className="mb-m">Navigation patterns and responsive adaptations for different screen sizes.</p>
                  <Link href="/patterns/navigation" className="text-primary hover:underline inline-flex items-center">
                    View navigation patterns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Interactive Patterns</h2>
              <p className="mb-m">Patterns for interactive elements and complex interactions.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Data Visualization</h3>
                  <p className="mb-m">Patterns for visualizing data in accessible and intuitive ways.</p>
                  <Link href="/patterns/data-visualization" className="text-primary hover:underline inline-flex items-center">
                    View data visualization patterns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Voice Interaction</h3>
                  <p className="mb-m">Patterns for voice-based interview interactions and feedback.</p>
                  <Link href="/patterns/voice-interaction" className="text-primary hover:underline inline-flex items-center">
                    View voice interaction patterns
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Page Templates</h2>
              <p className="mb-m">Full page templates that combine components and patterns into complete experiences.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Story Capture</h3>
                  <p className="mb-m">Complete interfaces for AI-driven life story collection.</p>
                  <Link href="/patterns/templates#story-capture" className="text-primary hover:underline inline-flex items-center">
                    View template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">Story Review</h3>
                  <p className="mb-m">Templates for reviewing and editing captured stories.</p>
                  <Link href="/patterns/templates#story-review" className="text-primary hover:underline inline-flex items-center">
                    View template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border hover:shadow-md transition-shadow">
                  <h3 className="mb-s">User Profile</h3>
                  <p className="mb-m">Templates for user account management and settings.</p>
                  <Link href="/patterns/templates#user-profile" className="text-primary hover:underline inline-flex items-center">
                    View template
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
