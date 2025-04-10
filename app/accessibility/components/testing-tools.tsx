"use client"

import { Code, Monitor, ExternalLink, Check, Search, Laptop, Code2, Shield } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import Link from 'next/link'

export default function TestingTools() {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Testing Approach</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            A comprehensive accessibility testing strategy combines automated tools, manual testing, and testing with assistive technologies. No single testing method is sufficient, and each plays a critical role in ensuring our products are accessible.
          </p>
          
          <Tabs defaultValue="automated" className="w-full mt-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 h-auto">
              <TabsTrigger value="automated">Automated Testing</TabsTrigger>
              <TabsTrigger value="manual">Manual Testing</TabsTrigger>
              <TabsTrigger value="assistive">Assistive Technology</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automated" className="space-y-6 pt-6">
              <p>
                Automated testing catches many common issues but can only identify about 30-40% of accessibility problems. Use these tools as a first line of defense but don't rely on them exclusively.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      axe DevTools
                    </CardTitle>
                    <CardDescription>Browser extension &amp; API</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Our primary automated testing tool. Detects common WCAG issues with minimal false positives. Integrated into our CI/CD pipeline and available as browser extension.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                        <Check className="h-3 w-3 mr-1" /> Low false-positive rate
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                        <Check className="h-3 w-3 mr-1" /> CI/CD integration
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="https://www.deque.com/axe/" target="_blank" rel="noopener" className="text-xs text-primary flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" /> Visit axe Website
                    </Link>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      ESLint a11y Plugin
                    </CardTitle>
                    <CardDescription>Static code analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Catches accessibility issues during development with the eslint-plugin-jsx-a11y package. Integrated into our linting workflow to prevent issues before they're committed.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-950 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                        <Check className="h-3 w-3 mr-1" /> Early detection
                      </span>
                      <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                        <Check className="h-3 w-3 mr-1" /> IDE integration
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y" target="_blank" rel="noopener" className="text-xs text-primary flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" /> GitHub Repository
                    </Link>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Monitor className="h-5 w-5 text-primary" />
                      WAVE
                    </CardTitle>
                    <CardDescription>Visual accessibility evaluation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Provides visual feedback about accessibility issues directly on the page. Useful for content editors and visual checks of rendered content.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-950 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                        <Check className="h-3 w-3 mr-1" /> Visual overlay
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                        <Check className="h-3 w-3 mr-1" /> Contrast checker
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="https://wave.webaim.org/" target="_blank" rel="noopener" className="text-xs text-primary flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" /> Visit WAVE Website
                    </Link>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Search className="h-5 w-5 text-primary" />
                      Lighthouse
                    </CardTitle>
                    <CardDescription>Performance and accessibility</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Built into Chrome DevTools, Lighthouse provides accessibility audits along with performance, best practices, and SEO checks. Used in our CI pipeline for general health checks.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center rounded-md bg-green-50 dark:bg-green-950 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300">
                        <Check className="h-3 w-3 mr-1" /> Built into Chrome
                      </span>
                      <span className="inline-flex items-center rounded-md bg-amber-50 dark:bg-amber-950 px-2 py-1 text-xs font-medium text-amber-700 dark:text-amber-300">
                        <Check className="h-3 w-3 mr-1" /> CI/CD integration
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="https://developers.google.com/web/tools/lighthouse" target="_blank" rel="noopener" className="text-xs text-primary flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" /> Lighthouse Documentation
                    </Link>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2">
                      <Code2 className="h-5 w-5 text-primary" />
                      Storybook a11y Addon
                    </CardTitle>
                    <CardDescription>Component-level testing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">
                      Integrates accessibility checks directly into our Storybook component library, allowing for component-level testing during development.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex items-center rounded-md bg-purple-50 dark:bg-purple-950 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300">
                        <Check className="h-3 w-3 mr-1" /> Component-focused
                      </span>
                      <span className="inline-flex items-center rounded-md bg-blue-50 dark:bg-blue-950 px-2 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                        <Check className="h-3 w-3 mr-1" /> Developer-friendly
                      </span>
                    </div>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="https://storybook.js.org/addons/@storybook/addon-a11y" target="_blank" rel="noopener" className="text-xs text-primary flex items-center">
                      <ExternalLink className="h-3 w-3 mr-1" /> Addon Documentation
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="manual" className="space-y-6 pt-6">
              <p>
                Manual testing catches issues that automated tests cannot identify, particularly those related to context, semantics, and user experience. Include these approaches in your testing routine.
              </p>
              
              <div className="space-y-6">
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Keyboard Navigation Testing</h3>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li><strong>Navigate with Tab key only</strong> - Ensure all interactive elements are reachable and in a logical order</li>
                    <li><strong>Verify focus indicators</strong> - All focused elements should have a visible indicator with sufficient contrast</li>
                    <li><strong>Test keyboard interaction</strong> - All controls should be fully operable with keyboard alone</li>
                    <li><strong>Check for keyboard traps</strong> - Focus should never become trapped in any component</li>
                    <li><strong>Test modal interactions</strong> - Focus should be properly managed in dialogs and returned when closed</li>
                  </ol>
                </div>
                
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Visual Inspection</h3>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li><strong>Check color contrast</strong> - Verify text and UI elements meet contrast requirements</li>
                    <li><strong>Test different zoom levels</strong> - Content should remain usable at 200% zoom</li>
                    <li><strong>Verify responsive behavior</strong> - Test across various viewport sizes</li>
                    <li><strong>Check text resizing</strong> - Content should handle text size increases without breaking</li>
                    <li><strong>Validate hover and focus states</strong> - Ensure they meet contrast requirements and provide clear feedback</li>
                  </ol>
                </div>
                
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Semantic Structure Analysis</h3>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li><strong>Inspect heading hierarchy</strong> - Headings should form a logical outline structure</li>
                    <li><strong>Check form labels</strong> - All inputs should have properly associated labels</li>
                    <li><strong>Validate landmark regions</strong> - Ensure proper use of HTML5 landmarks or ARIA landmarks</li>
                    <li><strong>Review document structure</strong> - Content should have a logical reading order</li>
                    <li><strong>Verify link text quality</strong> - Links should make sense out of context</li>
                  </ol>
                </div>
                
                <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-4">Content Review</h3>
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li><strong>Check alt text quality</strong> - Review alt text for appropriateness and accuracy</li>
                    <li><strong>Verify error messaging</strong> - Error messages should be clear and suggest corrections</li>
                    <li><strong>Evaluate reading level</strong> - Content should be as simple as appropriate</li>
                    <li><strong>Check for instructions</strong> - Instructions should not rely solely on sensory characteristics</li>
                    <li><strong>Review for plain language</strong> - Avoid or explain jargon and technical terms</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="assistive" className="space-y-6 pt-6">
              <p>
                Testing with actual assistive technologies is essential to understand how users with disabilities experience your product. These tools should be part of your regular testing process.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg">Screen Readers</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          VoiceOver (macOS/iOS)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Built into Apple devices. Primary testing tool for iOS applications and also used for web testing on Safari.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CMD
                          </kbd>
                          <span>+</span>
                          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            F5
                          </kbd>
                          <span>to toggle on macOS</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          NVDA (Windows)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Free, open-source screen reader for Windows. Used by approximately 30% of screen reader users. Primary testing tool for Windows.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            CTRL
                          </kbd>
                          <span>+</span>
                          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            ALT
                          </kbd>
                          <span>+</span>
                          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                            N
                          </kbd>
                          <span>to start</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          JAWS (Windows)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Commercial screen reader with significant market share among professional users. More complex but offers advanced features.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <span>Commercial software requiring purchase</span>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          TalkBack (Android)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Built-in screen reader for Android devices. Used for testing Android applications and web content on Android browsers.
                        </p>
                        <div className="mt-3 flex items-center gap-1 text-xs text-muted-foreground">
                          <span>Usually enabled in Accessibility settings</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="font-semibold text-lg">Other Assistive Technologies</h3>
                  <div className="space-y-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          Voice Control
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Built into macOS and iOS, allows controlling devices with voice commands. Test to ensure all interactive elements can be identified and activated.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          Switch Control
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Built into iOS and macOS, allows control with adaptive switches. Verify that all functionality can be accessed through sequential navigation.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          Display Accommodations
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Test with color filters, increased contrast, reduced motion, and other display accommodations across platforms to ensure usability.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-center gap-2 text-base">
                          <Laptop className="h-4 w-4 text-primary" />
                          Browser Extensions
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm">
                        <p>
                          Tools like Dark Reader, accessibility simulators, and extensions that emulate different visual impairments can provide additional testing insights.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Testing Checklist</h2>
        
        <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg border space-y-6">
          <p>Use this checklist to ensure thorough accessibility testing of components and pages:</p>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Automated Testing</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Run axe DevTools and fix all critical and serious issues</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Check for ESLint accessibility rule violations</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Run WAVE to identify potential issues missed by other tools</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Verify contrast ratios with the color contrast analyzer</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Manual Testing</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test keyboard navigation and interaction for all functionality</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Verify focus indicators and focus order</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test at 200% zoom and verify content reflow</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with browser text resizing to verify layout stability</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Check semantic structure (headings, landmarks, lists)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Verify form elements have proper labels and error states</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with reduced motion preference enabled</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Verify touch target sizes for mobile (minimum 44×44px)</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg border-b pb-2">Assistive Technology</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with VoiceOver on Safari (macOS)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with NVDA on Chrome (Windows)</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with TalkBack on Android devices</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Verify state changes are properly announced</span>
              </li>
              <li className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-md border flex items-center justify-center">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span>Test with high contrast mode enabled</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10 space-y-4">
        <h3 className="text-lg font-semibold">Add Testing to Development Workflow</h3>
        <p className="text-sm">
          The most effective accessibility testing happens throughout the development process, not just at the end. Integrate these testing methods into your workflow:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-sm pl-4">
          <li>Use automated tools and linters during development</li>
          <li>Include accessibility acceptance criteria in tickets</li>
          <li>Perform keyboard testing on components during development</li>
          <li>Test with screen readers before marking work as complete</li>
          <li>Include accessibility testing in code reviews</li>
        </ol>
      </div>
    </div>
  )
}
