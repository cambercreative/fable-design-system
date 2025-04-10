import React from 'react'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'

export default function DesignFoundations() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Design Foundations</h1>
              <p className="text-lg max-w-3xl">The core design elements that form the foundation of Fable's visual language and inform all product experiences.</p>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Color System</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-m">
                <div className="bg-surface-primary dark:bg-dark-surface-primary p-m rounded-md border border-border">
                  <h3 className="mb-s">Surface Primary</h3>
                  <div className="flex justify-between items-center">
                    <span>Light: #FFEFD9</span>
                    <span>Dark: #1A1A1A</span>
                  </div>
                </div>
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border">
                  <h3 className="mb-s">Surface Secondary</h3>
                  <div className="flex justify-between items-center">
                    <span>Light: #FFF5E6</span>
                    <span>Dark: #2A2A2A</span>
                  </div>
                </div>
                <div className="bg-primary text-primary-foreground p-m rounded-md">
                  <h3 className="mb-s">Primary</h3>
                  <span>#FF6B00</span>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Typography</h2>
              <div className="space-y-m">
                <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary rounded-md">
                  <h1>Heading 1</h1>
                  <p className="text-sm text-muted-foreground">Faro / 36px (Desktop)</p>
                </div>
                <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary rounded-md">
                  <h2>Heading 2</h2>
                  <p className="text-sm text-muted-foreground">Faro / 30px (Desktop)</p>
                </div>
                <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary rounded-md">
                  <h3>Heading 3</h3>
                  <p className="text-sm text-muted-foreground">Faro / 24px (Desktop)</p>
                </div>
                <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary rounded-md">
                  <p>Body Text</p>
                  <p className="text-sm text-muted-foreground">Atkinson Hyperlegible Next / 16px</p>
                </div>
              </div>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Spacing</h2>
              <div className="space-y-m">
                <div className="flex flex-wrap gap-m">
                  <div className="w-xs h-xs bg-primary rounded"></div>
                  <div>
                    <p className="font-medium">Extra Small (xs)</p>
                    <p className="text-sm text-muted-foreground">4px</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-m">
                  <div className="w-s h-s bg-primary rounded"></div>
                  <div>
                    <p className="font-medium">Small (s)</p>
                    <p className="text-sm text-muted-foreground">8px</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-m">
                  <div className="w-m h-m bg-primary rounded"></div>
                  <div>
                    <p className="font-medium">Medium (m)</p>
                    <p className="text-sm text-muted-foreground">16px</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-m">
                  <div className="w-l h-l bg-primary rounded"></div>
                  <div>
                    <p className="font-medium">Large (l)</p>
                    <p className="text-sm text-muted-foreground">24px</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-m">
                  <div className="w-xl h-xl bg-primary rounded"></div>
                  <div>
                    <p className="font-medium">Extra Large (xl)</p>
                    <p className="text-sm text-muted-foreground">32px</p>
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
