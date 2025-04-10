import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ButtonAnimations } from './button-animations';
import { CardAnimations } from './card-animations';
import { FormAnimations } from './form-animations';

export const metadata = {
  title: 'Component Animations | Fable Design System',
  description: 'Animation behaviors for specific components in the Fable design system'
};

export default function ComponentAnimationsPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="font-display text-4xl mb-4 font-bold">Component Animations</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Each component in Fable's design system features carefully crafted animations that enhance usability and create a cohesive, responsive feel.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <Tabs defaultValue="buttons">
          <TabsList className="mb-8">
            <TabsTrigger value="buttons">Buttons</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="forms">Form Controls</TabsTrigger>
          </TabsList>
          
          <TabsContent value="buttons">
            <h2 className="font-display text-2xl font-semibold mb-6">Button Animations</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Buttons are core interactive elements that use animation to provide immediate feedback, confirm actions, and indicate state changes.
            </p>
            <ButtonAnimations />
          </TabsContent>
          
          <TabsContent value="cards">
            <h2 className="font-display text-2xl font-semibold mb-6">Card Animations</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Cards use subtle animations to indicate interactivity, show selection states, and enhance content presentation.
            </p>
            <CardAnimations />
          </TabsContent>
          
          <TabsContent value="forms">
            <h2 className="font-display text-2xl font-semibold mb-6">Form Control Animations</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Form controls use animation to provide feedback, guide user input, and communicate validation results.
            </p>
            <FormAnimations />
          </TabsContent>
        </Tabs>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Animation Consistency Principles</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          These principles ensure animations feel cohesive across all components in the Fable design system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Timing Consistency</h3>
            <p className="text-muted-foreground">
              Similar interaction types use consistent timing tokens across different components. For example, all hover states use the <code>timing-quick</code> (100ms) token, regardless of component type.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Animation Purpose</h3>
            <p className="text-muted-foreground">
              Components use animation for specific functional purposes: indicating interactivity, confirming actions, showing state changes, revealing content, or guiding attention. Animation is never purely decorative.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Hierarchical Approach</h3>
            <p className="text-muted-foreground">
              Animation intensity scales with component importance. Primary actions use more pronounced animations, while secondary or tertiary elements use more subtle motion to avoid overwhelming the interface.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Implementation Guidelines</h2>
        
        <div className="bg-card border border-border rounded-lg overflow-hidden">
          <div className="border-b border-border">
            <Tabs defaultValue="react">
              <TabsList className="p-0 h-12">
                <TabsTrigger className="rounded-none h-12 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none" value="react">React + Framer Motion</TabsTrigger>
                <TabsTrigger className="rounded-none h-12 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none" value="css">CSS Transitions</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="p-6">
            <h3 className="font-display text-xl font-medium mb-4">Component Animation Patterns</h3>
            <p className="mb-6 text-muted-foreground">
              When implementing component animations, follow these patterns to ensure consistency with the design system:
            </p>

            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto mb-6">
{`// Button component with consistent animation pattern
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

function Button({ children, variant = 'primary', ...props }) {
  // Honor reduced motion preferences
  const prefersReducedMotion = useReducedMotion();
  
  // Scale values based on variant
  const scale = variant === 'primary' ? 0.98 : 0.99;
  
  return (
    <motion.button
      className={\`button button-\${variant}\`}
      whileHover={prefersReducedMotion ? {} : { 
        scale: 1.01,
        transition: { duration: 0.1 } // timing-quick
      }}
      whileTap={prefersReducedMotion ? { 
        opacity: 0.9,
        transition: { duration: 0.1 }
      } : { 
        scale,
        transition: { duration: 0.1 } // timing-quick
      }}
      transition={{ 
        duration: 0.2 // timing-standard for all other transitions
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}`}
            </pre>

            <h3 className="font-display text-xl font-medium mb-4">Component Token Application</h3>
            <p className="mb-4 text-muted-foreground">
              Apply animation timing tokens consistently based on the interaction type:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-6">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4">Interaction Type</th>
                    <th className="text-left py-3 px-4">Token</th>
                    <th className="text-left py-3 px-4">Duration</th>
                    <th className="text-left py-3 px-4">Easing</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Hover state</td>
                    <td className="py-3 px-4"><code>timing-quick</code></td>
                    <td className="py-3 px-4">100ms</td>
                    <td className="py-3 px-4">ease-out</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Pressed state</td>
                    <td className="py-3 px-4"><code>timing-quick</code></td>
                    <td className="py-3 px-4">100ms</td>
                    <td className="py-3 px-4">ease-out</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Focus state</td>
                    <td className="py-3 px-4"><code>timing-standard</code></td>
                    <td className="py-3 px-4">200ms</td>
                    <td className="py-3 px-4">ease-in-out</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Error/Success state</td>
                    <td className="py-3 px-4"><code>timing-standard</code></td>
                    <td className="py-3 px-4">200ms</td>
                    <td className="py-3 px-4">ease-in-out</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 px-4">Content change</td>
                    <td className="py-3 px-4"><code>timing-standard</code></td>
                    <td className="py-3 px-4">200ms</td>
                    <td className="py-3 px-4">ease-in-out</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Celebration/Highlight</td>
                    <td className="py-3 px-4"><code>timing-elaborate</code></td>
                    <td className="py-3 px-4">500ms</td>
                    <td className="py-3 px-4">ease-in-out-cubic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-display text-xl font-medium mb-4">Accessibility Checklist</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Always respect <code>prefers-reduced-motion</code> by using simpler animations or static alternatives</li>
              <li>Ensure all animated components can receive focus and are keyboard accessible</li>
              <li>Provide alternative indicators alongside animation for all state changes</li>
              <li>Test component animations with screen readers to ensure they don't interfere with accessibility</li>
              <li>Avoid animations that could trigger vestibular disorders (large movement, flashing, etc.)</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="flex justify-between items-center">
        <Link href="/design-foundations/animation" className="text-primary hover:underline flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M19 12H5"></path>
            <path d="M12 19l-7-7 7-7"></path>
          </svg>
          Back to Animation Overview
        </Link>
        <Link href="/design-foundations/animation/motion-concepts" className="text-primary hover:underline flex items-center">
          Explore Motion Concepts
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}