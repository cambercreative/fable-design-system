import React from 'react'
import Sidebar from '../../components/sidebar'
import Header from '../../components/header'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs'
import { Button } from '../../components/ui/button'
import CodeBlock from '../../components/code-block'

export default function ComponentsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Components</h1>
              <p className="text-lg max-w-3xl">Interactive UI components designed for Fable's applications with accessibility and responsiveness built-in.</p>
            </section>
            
            <section className="mb-xl">
              <h2 className="mb-m">Button</h2>
              <p className="mb-l">Buttons allow users to trigger actions or events with a single click or tap.</p>
              
              <div className="p-l bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg mb-l">
                <Tabs defaultValue="preview">
                  <TabsList>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                    <TabsTrigger value="code">Code</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview" className="p-m">
                    <div className="flex flex-wrap gap-4">
                      <Button variant="default">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="code">
                    <CodeBlock 
                      language="jsx" 
                      code={`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`} 
                    />
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="space-y-m">
                <div>
                  <h3 className="mb-s">Properties</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-surface-secondary dark:bg-dark-surface-secondary">
                          <th className="border border-border p-s text-left">Prop</th>
                          <th className="border border-border p-s text-left">Type</th>
                          <th className="border border-border p-s text-left">Default</th>
                          <th className="border border-border p-s text-left">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-border p-s">variant</td>
                          <td className="border border-border p-s">string</td>
                          <td className="border border-border p-s">default</td>
                          <td className="border border-border p-s">Visual style of the button: default, destructive, outline, secondary, ghost, link</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-s">size</td>
                          <td className="border border-border p-s">string</td>
                          <td className="border border-border p-s">default</td>
                          <td className="border border-border p-s">Size of the button: default, sm, lg, icon</td>
                        </tr>
                        <tr>
                          <td className="border border-border p-s">asChild</td>
                          <td className="border border-border p-s">boolean</td>
                          <td className="border border-border p-s">false</td>
                          <td className="border border-border p-s">Whether to render as child element instead of a button</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="mb-s">Accessibility</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Buttons use native <code className="text-sm bg-surface-secondary dark:bg-dark-surface-secondary px-1 py-0.5 rounded">button</code> elements by default</li>
                    <li>Focus indicators are visible for keyboard navigation</li>
                    <li>Color contrast ratios meet WCAG AA standards</li>
                    <li>Touch target sizing follows responsive design specifications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="mb-s">Usage Guidelines</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Use Primary variant for main actions</li>
                    <li>Use Secondary variant for alternate actions</li>
                    <li>Use Destructive variant for irreversible or potentially harmful actions</li>
                    <li>Limit the number of primary buttons per screen to maintain clear visual hierarchy</li>
                    <li>Button text should be concise and clearly communicate the action</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
