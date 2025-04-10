"use client"

import PageWrapper from '../../../components/page-wrapper'
import { Button } from '../../../components/ui/button'
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../../../components/ui/tooltip'
import { Info, HelpCircle, Settings, AlertCircle } from 'lucide-react'

export default function TooltipsPage() {
  return (
    <PageWrapper
      title="Tooltips"
      description="Contextual information shown on hover or focus to help explain elements."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Tooltips display additional information when users hover over, focus, or touch an element.
            They help clarify the purpose or provide extra context for UI elements, especially for
            those with minimal text or icon-only interfaces.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex justify-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Hover for Info
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This is a tooltip that provides additional information</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </section>

        <section id="anatomy" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Anatomy</h2>
          <p>
            Tooltips consist of a trigger element and a content container that appears
            when the trigger is hovered or focused.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="h-48 flex items-center justify-center border border-dashed border-border p-6 rounded-md">
              <div className="w-full max-w-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">1</span>
                    TooltipTrigger - Element that activates the tooltip
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">2</span>
                    TooltipContent - Container for the tooltip information
                  </div>
                </div>
                
                <div className="flex items-center justify-center">
                  <TooltipProvider>
                    <Tooltip open>
                      <TooltipTrigger asChild>
                        <Button variant="secondary" className="flex items-center gap-2">
                          <Info className="h-4 w-4" />
                          Trigger
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Tooltip Content</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Examples</h2>
          
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Basic Tooltip</h3>
              <p className="mb-4 text-muted-foreground">
                A standard tooltip shown on hover, providing additional information.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex justify-center">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button>Hover Me</Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Basic information tooltip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Icon Tooltips</h3>
              <p className="mb-4 text-muted-foreground">
                Tooltips used with icon-only elements to provide necessary context.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex justify-center">
                <div className="flex space-x-6">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="icon" aria-label="Settings">
                          <Settings className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Settings</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="icon" aria-label="Help">
                          <HelpCircle className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Help and documentation</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button size="icon" variant="icon" aria-label="Important information">
                          <AlertCircle className="h-5 w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Important information about this feature</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Tooltip Positions</h3>
              <p className="mb-4 text-muted-foreground">
                Tooltips can be positioned in different directions relative to the trigger.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex flex-wrap justify-center gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>Tooltip on top</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                      <p>Tooltip on right</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Tooltip on bottom</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="secondary">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                      <p>Tooltip on left</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            Tooltips provide vital context for users but must be implemented accessibly to ensure all users 
            can benefit from the additional information.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Keyboard Support</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Tooltips are accessible via keyboard focus</li>
                <li>Appear when the trigger element receives focus</li>
                <li>Remain visible while the element maintains focus</li>
                <li>Disappear when focus moves to another element</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Screen Readers</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Tooltips use appropriate ARIA attributes for non-visual access</li>
                <li>Icon buttons with tooltips always have an <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-label</code></li>
                <li>Tooltip content is linked to the trigger with <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-describedby</code></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Touch and Mobile</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>On touch devices, tooltips appear on tap and dismiss on second tap</li>
                <li>Critical information is never hidden exclusively in tooltips on mobile devices</li>
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
                <li>Keep tooltip content brief and focused</li>
                <li>Use tooltips to explain icon-only controls</li>
                <li>Provide helpful context that's not essential for primary tasks</li>
                <li>Ensure tooltips appear quickly on hover/focus (within 300ms)</li>
                <li>Position tooltips to avoid obscuring related content</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Don't</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Hide essential information exclusively in tooltips</li>
                <li>Use tooltips for complex content that requires interaction</li>
                <li>Trigger tooltips with mouse movement alone (should be on hover/focus)</li>
                <li>Create tooltips that cover important UI elements or controls</li>
                <li>Use tooltips for obvious functionality or repetitive information</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="implementation" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Implementation</h2>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <pre className="bg-surface-tertiary dark:bg-dark-surface-tertiary p-4 rounded-md overflow-x-auto text-sm">
              <code>{`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="icon" aria-label="Settings">
            <Settings className="h-4 w-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Adjust your settings</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
