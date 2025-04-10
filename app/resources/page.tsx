import React from 'react'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { Button } from '../../components/ui/button'

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Resources</h1>
              <p className="text-lg max-w-3xl">Downloads, tools, and documentation to help you implement the Fable Design System.</p>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Design Assets</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Figma Design Kit</h3>
                  <p className="mb-m">Complete component library and design templates for Figma.</p>
                  <Button variant="outline" className="w-full">Download (Coming Soon)</Button>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Logo Package</h3>
                  <p className="mb-m">Fable logo files in various formats and color variations.</p>
                  <Button variant="outline" className="w-full">Download (Coming Soon)</Button>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Font Files</h3>
                  <p className="mb-m">Faro and Atkinson Hyperlegible Next font files.</p>
                  <Button variant="outline" className="w-full">Download (Coming Soon)</Button>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Development Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Design Tokens</h3>
                  <p className="mb-m">JSON and CSS variable definitions for colors, typography, and spacing.</p>
                  <Button variant="outline" className="w-full">Download (Coming Soon)</Button>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Component Code</h3>
                  <p className="mb-m">React component library with Tailwind CSS styling.</p>
                  <Button variant="outline" className="w-full">View on GitHub</Button>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Implementation Guide</h3>
                  <p className="mb-m">Documentation for integrating the design system.</p>
                  <Button variant="outline" className="w-full">View Guide (Coming Soon)</Button>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Accessibility Resources</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-lg">
                <h3 className="mb-s">WCAG Compliance Documentation</h3>
                <p className="mb-m">Comprehensive documentation on how the Fable Design System meets WCAG 2.1 Level AA requirements.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
                  <div>
                    <h4 className="mb-xs">Includes:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Color contrast analysis</li>
                      <li>Keyboard navigation specifications</li>
                      <li>Screen reader compatibility</li>
                      <li>Touch target size guidelines</li>
                      <li>Responsive design considerations</li>
                    </ul>
                  </div>
                  <div>
                    <Button variant="outline" className="w-full mb-m">View Documentation (Coming Soon)</Button>
                    <p className="text-sm text-muted-foreground">For specific accessibility questions, please contact the Design Team.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
