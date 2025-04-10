"use client"

import { Card, CardContent } from '../../../components/ui/card'
import { AlertTriangle, CheckCircle, Users, Shapes, Braces, Workflow } from 'lucide-react'

export default function AccessibilityOverview() {
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Accessibility Philosophy</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            Accessibility is a fundamental aspect of Fable's design philosophy, ensuring all users can capture and preserve their life stories regardless of ability. Our accessibility approach is based on these core principles:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Universal Access</h3>
                </div>
                <p>
                  Fable is designed for users of all abilities. We consider accessibility a primary requirement, not a secondary consideration. All features must be accessible through multiple interaction methods, ensuring no user story is impossible due to disability.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Proactive Compliance</h3>
                </div>
                <p>
                  We meet or exceed WCAG 2.1 AA requirements and regularly test with assistive technologies. Accessibility is addressed throughout the design process, with continuous improvement of accessibility features.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Key Focus Areas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Shapes className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Visual Accessibility</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Color contrast ratios that exceed WCAG AA standards</li>
                <li>Information never conveyed by color alone</li>
                <li>Support for text resizing up to 200%</li>
                <li>Proper alt text for all images</li>
                <li>Respects reduced motion preferences</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Braces className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Interactive Accessibility</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Keyboard-only navigation for all features</li>
                <li>Logical focus order and visible focus indicators</li>
                <li>Support for alternative input methods</li>
                <li>Proper ARIA attributes and semantic HTML</li>
                <li>Touch targets of at least 44×44px</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-3">
                <Workflow className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">Cognitive Accessibility</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Clear, consistent UI patterns</li>
                <li>Simplified interfaces to reduce cognitive load</li>
                <li>Clear error messages with resolution steps</li>
                <li>Content chunking for easier processing</li>
                <li>Progressive disclosure for complex interactions</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Implementation Approach</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our accessibility implementation is guided by a systematic approach that integrates accessibility requirements at every stage of the design and development process:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Design Phase:</strong> Accessibility requirements included in initial specifications, with accessibility reviews during design critiques
            </li>
            <li>
              <strong>Development Phase:</strong> Accessibility acceptance criteria for all features, regular automated testing, and component-level validation
            </li>
            <li>
              <strong>Testing Protocol:</strong> Combination of automated testing tools and manual testing with assistive technologies
            </li>
            <li>
              <strong>Documentation:</strong> Each component includes detailed accessibility specifications following our standardized format
            </li>
            <li>
              <strong>Continuous Improvement:</strong> Regular accessibility audits and user feedback mechanisms
            </li>
          </ul>
        </div>
      </section>
      
      <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-amber-600 dark:text-amber-400 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-800 dark:text-amber-300">Important Note</h3>
            <p className="text-sm text-amber-700 dark:text-amber-400 mt-1">
              All Fable components must follow our standardized accessibility specification format. Review the Component Checklist tab for implementation requirements and the Testing Tools tab for validation methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
