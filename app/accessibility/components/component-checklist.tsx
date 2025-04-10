"use client"

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/table'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert'
import { CheckCircle, Info, AlertTriangle, Code, FileCog, FileCode, Tag, Share2 } from 'lucide-react'
import { Badge } from '../../../components/ui/badge'
import { ScrollArea } from '../../../components/ui/scroll-area'

export default function ComponentChecklist() {
  // State for copy functionality (would be implemented fully in production)
  const [copied, setCopied] = useState(false)
  
  // Mock function to simulate copying to clipboard
  const copyToClipboard = () => {
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Component Accessibility Requirements</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            All components in the Fable design system must follow our standardized accessibility specification format. This ensures consistent implementation of accessibility features across platforms and provides clear documentation for developers.
          </p>
        </div>
        
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Required Documentation</AlertTitle>
          <AlertDescription>
            Every component in the Fable design system must include the accessibility specifications detailed below. New components cannot be added to the system without this documentation.
          </AlertDescription>
        </Alert>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Accessibility Specification Template</h2>
        
        <Tabs defaultValue="template" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
            <TabsTrigger value="template">Template Structure</TabsTrigger>
            <TabsTrigger value="example">Example: Button</TabsTrigger>
            <TabsTrigger value="code">Markdown Template</TabsTrigger>
          </TabsList>
          
          <TabsContent value="template" className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Tag className="h-5 w-5 text-primary" />
                    <span>Semantic Structure</span>
                  </CardTitle>
                  <CardDescription>How the component is identified by assistive technologies</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Role</div>
                    <div className="text-sm text-muted-foreground">The appropriate ARIA role or HTML element</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Name</div>
                    <div className="text-sm text-muted-foreground">How the component is named (aria-label, visible text, etc.)</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Description</div>
                    <div className="text-sm text-muted-foreground">Extended description if needed (aria-describedby)</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Required HTML Semantics</div>
                    <div className="text-sm text-muted-foreground">The proper HTML elements to use</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileCog className="h-5 w-5 text-primary" />
                    <span>ARIA Attributes</span>
                  </CardTitle>
                  <CardDescription>Required attributes for proper screen reader support</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Required Attributes</div>
                    <div className="text-sm text-muted-foreground">Base ARIA attributes needed for accessibility</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">State Attributes</div>
                    <div className="text-sm text-muted-foreground">Attributes for component states (expanded, checked, etc.)</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Relationship Attributes</div>
                    <div className="text-sm text-muted-foreground">Attributes that connect components (controls, owns, etc.)</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5 text-primary" />
                    <span>Keyboard Interaction</span>
                  </CardTitle>
                  <CardDescription>How users navigate and use the component with a keyboard</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Focus Management</div>
                    <div className="text-sm text-muted-foreground">How focus behaves with the component</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Key Commands</div>
                    <div className="text-sm text-muted-foreground">Expected behavior for Tab, Enter, Space, etc.</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Keyboard Shortcuts</div>
                    <div className="text-sm text-muted-foreground">Any component-specific keyboard shortcuts</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <FileCode className="h-5 w-5 text-primary" />
                    <span>Screen Reader Announcements</span>
                  </CardTitle>
                  <CardDescription>What should be announced to screen reader users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Component Entry</div>
                    <div className="text-sm text-muted-foreground">What's announced when component receives focus</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">State Changes</div>
                    <div className="text-sm text-muted-foreground">What's announced when component state changes</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Error States</div>
                    <div className="text-sm text-muted-foreground">What's announced for error conditions</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Completion/Success</div>
                    <div className="text-sm text-muted-foreground">What's announced when actions complete</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5 text-primary" />
                    <span>Touch and Pointer Considerations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Touch Target Size</div>
                    <div className="text-sm text-muted-foreground">Minimum 44×44px physically accessible area</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Gesture Alternatives</div>
                    <div className="text-sm text-muted-foreground">Alternatives for any gesture interactions</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Hover Alternatives</div>
                    <div className="text-sm text-muted-foreground">How hover-dependent features can be accessed without hover</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span>Specific Platform Considerations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Web (React/ShadCN)</div>
                    <div className="text-sm text-muted-foreground">Web-specific implementation details</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">iOS</div>
                    <div className="text-sm text-muted-foreground">iOS-specific implementation details</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Android</div>
                    <div className="text-sm text-muted-foreground">Android-specific implementation details</div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Testing Criteria</span>
                </CardTitle>
                <CardDescription>Specific tests that should be performed</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Automated Tests</div>
                    <div className="text-sm text-muted-foreground">Tests that can be automated for this component</div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-sm font-medium">Manual Testing</div>
                    <div className="text-sm text-muted-foreground">Manual testing procedures for this component</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="example" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Button Example</CardTitle>
                <CardDescription>Comprehensive accessibility specification for the Primary Button component</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[600px] rounded-md border p-4">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Semantic Structure</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Role</TableCell>
                            <TableCell>button (native HTML button element preferred)</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Name</TableCell>
                            <TableCell>Provided by the button's text content or explicit <code>aria-label</code> if icon-only</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Description</TableCell>
                            <TableCell>Optional <code>aria-describedby</code> for additional context when needed</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Required HTML Semantics</TableCell>
                            <TableCell>Use native <code>&lt;button&gt;</code> element instead of non-semantic elements with button roles</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">ARIA Attributes</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Required Attributes</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>No additional ARIA attributes required when using native button element with visible text</li>
                                <li><code>aria-label</code>: Required only for icon-only buttons to provide accessible name</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">State Attributes</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li><code>aria-disabled="true"</code>: Applied when the button is visually disabled but needs to remain in the DOM for screen readers</li>
                                <li><code>aria-pressed</code>: Only for toggle buttons that maintain a pressed state</li>
                                <li><code>aria-expanded</code>: Only for buttons that control the visibility of another element</li>
                                <li><code>aria-haspopup</code>: Only for buttons that open menus or dialogs</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Relationship Attributes</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li><code>aria-controls</code>: Only when the button directly controls the visibility of another element</li>
                                <li><code>aria-describedby</code>: When additional description is needed beyond the button's label</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Keyboard Interaction</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Focus Management</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Must visibly display focus state with 3:1 contrast ratio against adjacent colors</li>
                                <li>Focus must follow logical tab order in the visual layout</li>
                                <li>Should not automatically move focus after activation unless opening a modal dialog</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Key Commands</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li><code>Tab</code>/<code>Shift+Tab</code>: Move focus to/from the button</li>
                                <li><code>Enter</code>/<code>Space</code>: Activate the button</li>
                                <li><code>Escape</code>: If the button opened a menu or dialog, closes it and returns focus to the button</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Keyboard Shortcuts</TableCell>
                            <TableCell>No component-specific shortcuts for standard buttons</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Screen Reader Announcements</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Component Entry</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Announces button name, role, and state (e.g., "Continue, button")</li>
                                <li>If disabled, announces "Continue, button, disabled"</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">State Changes</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Loading state: "Loading" or more specific message should be announced when button enters loading state</li>
                                <li>If toggle button, new state should be announced when pressed state changes</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Error States</TableCell>
                            <TableCell>If button action results in error, error message should be announced via a related live region</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Completion/Success</TableCell>
                            <TableCell>Success feedback should be announced via a related live region</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Touch and Pointer Considerations</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Touch Target Size</TableCell>
                            <TableCell>Minimum 44×44px touch target area</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Gesture Alternatives</TableCell>
                            <TableCell>Standard tap/press only; no complex gestures</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Hover Alternatives</TableCell>
                            <TableCell>All hover effects must have equivalent focus states</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Platform Considerations</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Web (React/ShadCN)</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Use <code>disabled</code> attribute rather than <code>aria-disabled</code> when possible</li>
                                <li>Ensure custom focus styling doesn't remove browser focus indicators</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">iOS</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Use UIKit <code>UIButton</code> or SwiftUI <code>Button</code> with appropriate accessibility traits</li>
                                <li>Support VoiceOver, Dynamic Type, and Bold Text accessibility features</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Android</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Use Material Design button components with appropriate accessibility attributes</li>
                                <li>Ensure compatibility with TalkBack and dynamic text sizing</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Testing Criteria</h3>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell className="font-medium">Automated Tests</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Verify proper semantic HTML structure</li>
                                <li>Confirm sufficient color contrast for both text and focus indicators</li>
                                <li>Validate presence of required ARIA attributes for all button states</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell className="font-medium">Manual Testing</TableCell>
                            <TableCell>
                              <ul className="list-disc ml-6 space-y-1">
                                <li>Test keyboard navigation to and activation of the button</li>
                                <li>Verify screen reader announces correct name, role, and state</li>
                                <li>Confirm focus styling is visible at 200% zoom</li>
                                <li>Test with: VoiceOver + Safari (macOS/iOS), NVDA/JAWS + Chrome (Windows), TalkBack + Chrome (Android)</li>
                              </ul>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="code" className="pt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Markdown Template for Component Documentation</span>
                  <button
                    className="flex items-center gap-1 text-primary text-sm"
                    onClick={copyToClipboard}
                  >
                    <code className="text-xs bg-primary/10 rounded px-2 py-1">
                      {copied ? "Copied!" : "Copy"}
                    </code>
                  </button>
                </CardTitle>
                <CardDescription>Use this template in component documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted dark:bg-muted/50 p-4 rounded-md overflow-x-auto">
                  <pre className="text-xs text-muted-foreground whitespace-pre-wrap">
{`### Accessibility Specifications

#### Semantic Structure
- **Role**: [appropriate ARIA role]
- **Name**: How the component is named for assistive technology (e.g., \`aria-label\`, \`aria-labelledby\`, or visible text)
- **Description**: How the component's purpose is described (e.g., \`aria-describedby\` reference, if applicable)
- **Required HTML Semantics**: The proper HTML elements to use (e.g., \`<button>\` instead of \`<div>\`)

#### ARIA Attributes
- **Required Attributes**:
  - [List all required ARIA attributes with explanations of proper usage]
- **State Attributes**:
  - [List all state-related ARIA attributes (e.g., \`aria-expanded\`, \`aria-checked\`) with explanations of when each state applies]
- **Relationship Attributes**:
  - [List all relationship ARIA attributes (e.g., \`aria-controls\`, \`aria-owns\`) with explanations]

#### Keyboard Interaction
- **Focus Management**:
  - [Detailed explanation of focus behavior, including initial focus, focus order, and focus restoration]
- **Key Commands**:
  - \`Tab\`: [Expected behavior]
  - \`Enter\`/\`Space\`: [Expected behavior]
  - [Add other relevant key commands with their expected behaviors]
- **Keyboard Shortcuts**:
  - [List any component-specific keyboard shortcuts with explanations]

#### Screen Reader Announcements
- **Component Entry**:
  - [What should be announced when the component receives focus]
- **State Changes**:
  - [What should be announced when the component's state changes]
- **Error States**:
  - [What should be announced when the component enters an error state]
- **Completion/Success**:
  - [What should be announced when an action completes successfully]

#### Touch and Pointer Considerations
- **Touch Target Size**: Minimum 44x44px physically accessible area
- **Gesture Alternatives**: [Alternative methods for any gesture interactions]
- **Hover Alternatives**: [How hover-dependent functionality can be accessed without hover]

#### Specific Platform Considerations
- **Web (React/ShadCN)**:
  - [Any web-specific implementation details]
- **iOS**:
  - [Any iOS-specific implementation details]
- **Android**:
  - [Any Android-specific implementation details]

#### Testing Criteria
- **Automated Tests**:
  - [Specific tests that should pass for this component]
- **Manual Testing**:
  - [Manual testing procedures specific to this component]`}
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Implementing Component Documentation</h2>
        
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Documentation Workflow</CardTitle>
              <CardDescription>Follow this process when creating or updating component documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <Badge className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center">1</Badge>
                  <div>
                    <h3 className="font-semibold text-base">Create Accessibility Specifications</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Use the standard template to document all accessibility requirements for the component. This should be done during the component design phase.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Badge className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center">2</Badge>
                  <div>
                    <h3 className="font-semibold text-base">Include in Component Documentation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Add the completed accessibility specifications to the component's documentation. This section should be included alongside other component documentation.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Badge className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center">3</Badge>
                  <div>
                    <h3 className="font-semibold text-base">Reference in Implementation Tickets</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Include a link to the accessibility specifications in development tickets. All implementation work should reference these requirements.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Badge className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center">4</Badge>
                  <div>
                    <h3 className="font-semibold text-base">Verify Implementation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Test the implemented component against the accessibility specifications using both automated and manual testing. Update documentation if technical constraints require alternative approaches.
                    </p>
                  </div>
                </li>
                
                <li className="flex items-start gap-3">
                  <Badge className="mt-0.5 h-6 w-6 rounded-full flex items-center justify-center">5</Badge>
                  <div>
                    <h3 className="font-semibold text-base">Maintain and Update</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Review and update the accessibility specifications whenever the component functionality changes or when new accessibility best practices emerge.
                    </p>
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>
          
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-6 space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
              <div>
                <h3 className="font-medium text-amber-800 dark:text-amber-300">Common Implementation Pitfalls</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-amber-700 dark:text-amber-400 mt-2">
                  <li>Using non-semantic elements with ARIA roles instead of native HTML elements</li>
                  <li>Missing keyboard support for interactive elements</li>
                  <li>Insufficient focus indicators (must have 3:1 contrast ratio)</li>
                  <li>Improper focus management in modals and custom widgets</li>
                  <li>Missing screen reader announcements for state changes</li>
                  <li>Touch targets that are too small on mobile devices</li>
                  <li>Hover-only functionality without keyboard or touch alternatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
