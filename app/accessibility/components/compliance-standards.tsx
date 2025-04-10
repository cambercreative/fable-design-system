"use client"

import { CheckCircle2, Info, Lightbulb, ExternalLink } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../../components/ui/accordion'
import { Card, CardContent } from '../../../components/ui/card'
import { Badge } from '../../../components/ui/badge'
import Link from 'next/link'

export default function ComplianceStandards() {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">WCAG 2.1 Compliance</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Fable's minimum compliance standard is WCAG 2.1 Level AA, with aspirational targets for WCAG 2.1 Level AAA where feasible. Our implementation addresses all four WCAG principles: Perceivable, Operable, Understandable, and Robust.
          </p>
        </div>
        
        <Accordion type="multiple" className="w-full">
          <AccordionItem value="perceivable">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">1</Badge>
                Perceivable
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>Information and user interface components must be presentable to users in ways they can perceive.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Text Alternatives
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>All non-text content has text alternatives</li>
                      <li>Decorative images use empty alt attributes</li>
                      <li>Complex images have extended descriptions</li>
                      <li>Form controls have appropriate labels</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Time-based Media
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Transcripts for all audio content</li>
                      <li>Synchronized highlighting in transcripts</li>
                      <li>Audio descriptions for visual content</li>
                      <li>Controls for all media playback</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Adaptable Content
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Semantic HTML structure</li>
                      <li>Proper reading sequence</li>
                      <li>Instructions don't rely solely on sensory characteristics</li>
                      <li>Content adapts to different orientations and viewport sizes</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Distinguishable Content
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>4.5:1 contrast ratio for normal text</li>
                      <li>3:1 contrast ratio for large text</li>
                      <li>Text resizable up to 200% without loss of content</li>
                      <li>No content restricted to a specific orientation unless essential</li>
                      <li>Non-text elements have 3:1 contrast with adjacent colors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="operable">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">2</Badge>
                Operable
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>User interface components and navigation must be operable.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Keyboard Accessible
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>All functionality available via keyboard</li>
                      <li>No keyboard traps</li>
                      <li>Keyboard shortcuts can be turned off or remapped</li>
                      <li>Logical tab order following visual layout</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Enough Time
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Adjustable time limits</li>
                      <li>Pause, stop, hide for moving content</li>
                      <li>No timing-essential interactions</li>
                      <li>Session persistence across interruptions</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Seizures and Physical Reactions
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>No content that flashes more than 3 times per second</li>
                      <li>Animation can be disabled via "prefers-reduced-motion"</li>
                      <li>Auto-playing motion content limited to 5 seconds</li>
                      <li>Manual controls for longer animations</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Navigable
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Skip navigation links</li>
                      <li>Descriptive page titles</li>
                      <li>Meaningful focus order</li>
                      <li>Purpose of links clear from context</li>
                      <li>Multiple ways to find content</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="understandable">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">3</Badge>
                Understandable
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>Information and the operation of user interface must be understandable.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Readable
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Language of page programmatically identified</li>
                      <li>Language of parts programmatically identified when different</li>
                      <li>Unusual words explained or defined</li>
                      <li>Abbreviations expanded on first use</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Predictable
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Consistent navigation across pages</li>
                      <li>Consistent identification of components</li>
                      <li>No context changes on focus alone</li>
                      <li>No context changes on input alone</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Input Assistance
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Error identification</li>
                      <li>Labels and instructions for user input</li>
                      <li>Error suggestion</li>
                      <li>Error prevention for legal commitments</li>
                      <li>Context-sensitive help available</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="robust">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-primary/10 text-primary">4</Badge>
                Robust
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-4">
              <p>Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Compatible
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Valid HTML/markup</li>
                      <li>Proper name, role, value for all UI components</li>
                      <li>Status messages programmatically determined</li>
                      <li>Compatible with current and future user tools</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4 space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                      Assistive Technology Support
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Screen reader compatibility</li>
                      <li>Support for platform accessibility features</li>
                      <li>Regular testing with latest assistive technologies</li>
                      <li>Proper ARIA implementation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Platform-Specific Standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">iOS Accessibility</h3>
            <p>In addition to WCAG compliance, all iOS implementations adhere to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Apple Human Interface Guidelines for Accessibility</li>
              <li>Support for Dynamic Type</li>
              <li>VoiceOver optimization</li>
              <li>Switch Control compatibility</li>
              <li>Support for Bold Text and Increased Contrast</li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-primary mt-4">
              <ExternalLink className="h-4 w-4" />
              <Link href="https://developer.apple.com/design/human-interface-guidelines/accessibility" target="_blank" rel="noopener">
                Apple Accessibility Guidelines
              </Link>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Android Accessibility</h3>
            <p>In addition to WCAG compliance, all Android implementations adhere to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Material Design Accessibility Guidelines</li>
              <li>TalkBack optimization</li>
              <li>Content scaling support</li>
              <li>Switch Access compatibility</li>
              <li>Support for high contrast text</li>
            </ul>
            <div className="flex items-center gap-2 text-sm text-primary mt-4">
              <ExternalLink className="h-4 w-4" />
              <Link href="https://m3.material.io/foundations/accessibility" target="_blank" rel="noopener">
                Material Design Accessibility
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Beyond Guidelines</h2>
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg border border-primary/10 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Lightbulb className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold">Aspirational AAA Targets</h3>
          </div>
          <p className="text-sm">
            While our baseline requirement is WCAG 2.1 AA compliance, we strive to implement AAA-level criteria where possible:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>7:1 contrast ratio for normal text</li>
            <li>Sign language interpretation for prerecorded audio</li>
            <li>Extended audio description for all prerecorded video content</li>
            <li>Reading level appropriate for lower secondary education level</li>
            <li>Ability to locate content in multiple ways</li>
            <li>Context-sensitive help available for all functionality</li>
            <li>Prevention of input errors for all user submissions</li>
          </ul>
          <div className="flex items-start gap-3 mt-4 text-sm">
            <Info className="h-4 w-4 text-primary mt-0.5" />
            <p>Implementing these AAA criteria improves the experience for all users, not just those with disabilities.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
