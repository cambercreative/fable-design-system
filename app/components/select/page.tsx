"use client"

import PageWrapper from '../../../components/page-wrapper'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { useState } from 'react'

export default function SelectPage() {
  const [value, setValue] = useState("")

  return (
    <PageWrapper
      title="Select"
      description="A dropdown menu that allows users to choose one option from a predefined list."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Select menus enable users to choose one option from a list. When collapsed, they display the 
            currently selected option. Select is preferable to Radio Groups when space is limited or when 
            the list of options is extensive.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex items-center justify-center">
            <div className="w-64">
              <Select value={value} onValueChange={setValue}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="orange">Orange</SelectItem>
                    <SelectItem value="grape">Grape</SelectItem>
                    <SelectItem value="strawberry">Strawberry</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section id="anatomy" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Anatomy</h2>
          <p>
            The Select component consists of a trigger element that opens a dropdown menu containing 
            selectable options. The component supports grouping options with labels for better organization.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="h-64 flex items-start justify-center border border-dashed border-border p-6 rounded-md">
              <div className="w-full max-w-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">1</span>
                    SelectTrigger - The button that opens the dropdown
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">2</span>
                    SelectValue - Displays the currently selected value
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">3</span>
                    SelectContent - Container for the dropdown content
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">4</span>
                    SelectGroup - Groups related options
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">5</span>
                    SelectLabel - Provides a label for a group of options
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">6</span>
                    SelectItem - An individual selectable option
                  </div>
                </div>
                
                <div className="w-64 mx-auto">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Group Label</SelectLabel>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="variants" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Examples</h2>
          
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Default</h3>
              <p className="mb-4 text-muted-foreground">
                The standard select component with a single group of options.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="w-64">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Multiple Groups</h3>
              <p className="mb-4 text-muted-foreground">
                Select with multiple option groups for better organization of related items.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="w-64">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a food" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Fruits</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="orange">Orange</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Vegetables</SelectLabel>
                        <SelectItem value="carrot">Carrot</SelectItem>
                        <SelectItem value="broccoli">Broccoli</SelectItem>
                        <SelectItem value="spinach">Spinach</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Disabled</h3>
              <p className="mb-4 text-muted-foreground">
                Select with disabled state and disabled individual options.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex flex-wrap gap-4">
                <div className="w-64">
                  <Select disabled>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Disabled select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="w-64">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2" disabled>Option 2 (Disabled)</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            Select components must be accessible to all users, including those using screen 
            readers and keyboard navigation.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Keyboard Support</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Press <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Space</code> or <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Enter</code> to open/close the dropdown</li>
                <li>Use <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Arrow Up/Down</code> to navigate between options</li>
                <li>Press <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Enter</code> to select the focused option</li>
                <li>Press <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Escape</code> to close the dropdown without changing selection</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Screen Readers</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>The component uses ARIA roles including <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">combobox</code>, <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">listbox</code> and <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">option</code></li>
                <li>The trigger element has <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-expanded</code> and <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-controls</code> attributes</li>
                <li>Selected options have <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-selected="true"</code></li>
                <li>Group labels use <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">role="group"</code> and <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-labelledby</code> associations</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="usage-guidelines" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
          
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-medium">Do</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Use Select when you need to conserve space and have multiple options</li>
                <li>Organize options into logical groups when they exceed 7-10 items</li>
                <li>Provide clear, descriptive labels for options and groups</li>
                <li>Use a meaningful placeholder that describes what the user should select</li>
                <li>Consider using Radio Groups instead when there are fewer than 5 options and space permits</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Don't</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Use Select for binary choices (use a Toggle or Checkbox instead)</li>
                <li>Create excessively long lists without organization or search capability</li>
                <li>Use as a replacement for navigation (use proper navigation menus instead)</li>
                <li>Nest Select components within each other</li>
                <li>Use generic or unclear labels like "Choose" or "Select" as placeholders</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="implementation" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Implementation</h2>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <pre className="bg-surface-tertiary dark:bg-dark-surface-tertiary p-4 rounded-md overflow-x-auto text-sm">
              <code>{`import { Select, SelectContent, SelectGroup, SelectItem, 
  SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
