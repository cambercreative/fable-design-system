import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import dynamic from 'next/dynamic';

// Dynamic import for client components with interactivity
const TransitionShowcase = dynamic(() => import('./transition-showcase'), { ssr: false });

export const metadata = {
  title: 'Animation Transitions | Fable Design System',
  description: 'Common transition patterns for elements entering, exiting, or changing state within the Fable interface'
};

export default function TransitionsPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/design-foundations/animation" className="hover:text-primary transition-colors">Animation</Link>
          <span>/</span>
          <span>Transitions</span>
        </div>
        <h1 className="font-display text-4xl mb-4 font-bold">Transitions</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Strategic transitions help users understand interface changes, establish relationships between elements, and create a cohesive experience.
        </p>
      </div>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-4">Element Transitions</h2>
        <p className="mb-6 max-w-3xl">
          Element transitions define how UI components appear, disappear, or change states. These patterns create a consistent motion language throughout the application.
        </p>

        <div className="grid grid-cols-1 gap-8">
          <TransitionShowcase />
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Element Entry</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Pattern</th>
                <th className="text-left p-4 font-display font-medium">Description</th>
                <th className="text-left p-4 font-display font-medium">Timing</th>
                <th className="text-left p-4 font-display font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Fade In</td>
                <td className="p-4">Simple opacity transition from 0 to 1</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">General purpose, works for most elements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Scale Up</td>
                <td className="p-4">Scale from 95% to 100% with fade</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Cards, dialogs, modals, tooltips</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Rise Up</td>
                <td className="p-4">Slide up from below (10-20px) with fade</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Content sections, list items, cards</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Slide In</td>
                <td className="p-4">Slide in from edge of container</td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4">Page transitions, drawer menus, panels</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Staggered Reveal</td>
                <td className="p-4">Sequential entry of related elements</td>
                <td className="p-4 font-mono text-sm">timing-standard <br/>(50ms stagger)</td>
                <td className="p-4">Lists, grid items, dialog options</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="font-display text-xl font-medium mb-4">Implementation Example: Fade In with Rise</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// Framer Motion component implementation
const fadeInUp = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: {
    duration: 0.2,  // timing-standard
    ease: 'easeInOut'
  }
};

// Usage
<motion.div
  initial="initial"
  animate="animate"
  exit="exit"
  variants={fadeInUp}
>
  Content
</motion.div>

// CSS implementation
.fade-in-up {
  animation: fadeInUp 200ms ease-in-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`}
          </pre>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Element Exit</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Pattern</th>
                <th className="text-left p-4 font-display font-medium">Description</th>
                <th className="text-left p-4 font-display font-medium">Timing</th>
                <th className="text-left p-4 font-display font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Fade Out</td>
                <td className="p-4">Simple opacity transition from 1 to 0</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">General purpose, works for most elements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Scale Down</td>
                <td className="p-4">Scale from 100% to 95% with fade</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Cards, dialogs, modals, tooltips</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Sink Down</td>
                <td className="p-4">Slide down slightly (10-20px) with fade</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Content sections, list items, cards</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Slide Out</td>
                <td className="p-4">Slide out to edge of container</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Page transitions, drawer menus, panels</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Quick Dissolve</td>
                <td className="p-4">Rapid fade to transparent</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Temporary elements, toasts, overlays</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground mb-4">
          <strong>Note:</strong> Exit animations are generally quicker than entries to avoid making the interface feel sluggish. 
          Elements that are being dismissed or replaced should exit promptly to make way for new content.
        </p>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Page and Screen Transitions</h2>
        <p className="mb-6 max-w-3xl">
          Page transitions help users maintain context when navigating between major sections of the application. They create spatial relationships and provide continuity.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Transition Type</th>
                <th className="text-left p-4 font-display font-medium">Description</th>
                <th className="text-left p-4 font-display font-medium">Timing</th>
                <th className="text-left p-4 font-display font-medium">Direction</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Forward Navigation</td>
                <td className="p-4">
                  Current page slides left and fades out (30px)<br/>
                  New page slides in from right (30px) and fades in
                </td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4">Left to right</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Backward Navigation</td>
                <td className="p-4">
                  Current page slides right and fades out (30px)<br/>
                  Previous page slides in from left (30px) and fades in
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Right to left</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Modal Screen</td>
                <td className="p-4">
                  Background scales slightly down and dims<br/>
                  Modal slides up from bottom or scales up from center
                </td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4">Bottom to top or center out</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Tab Switch</td>
                <td className="p-4">
                  Crossfade between tab contents<br/>
                  Tab indicator animates position
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Crossfade with indicator motion</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="font-display text-xl font-medium mb-4">Implementation Example: Forward Navigation</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// Next.js + Framer Motion implementation for page transitions
import { motion } from 'framer-motion';

// Page wrapper component
const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -30 }}
    transition={{
      duration: 0.3,  // timing-relaxed
      ease: 'easeInOut'
    }}
  >
    {children}
  </motion.div>
);

// Usage in page component
export default function Page() {
  return (
    <PageTransition>
      <h1>Page Content</h1>
      ...
    </PageTransition>
  );
}`}
          </pre>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Common State Changes</h2>
        <p className="mb-6 max-w-3xl">
          State changes provide feedback when components respond to user interaction. Consistent state transitions create a predictable interface.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">State Change</th>
                <th className="text-left p-4 font-display font-medium">Animation</th>
                <th className="text-left p-4 font-display font-medium">Timing</th>
                <th className="text-left p-4 font-display font-medium">Components</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Hover</td>
                <td className="p-4">
                  Subtle color change, slight elevation increase, background appearance
                </td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Buttons, cards, interactive elements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Press / Active</td>
                <td className="p-4">
                  Scale reduction (95-98%), color darkening, elevation decrease
                </td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Buttons, tabs, cards, controls</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Focus</td>
                <td className="p-4">
                  Focus ring appearance, subtle highlight color change
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">All interactive elements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Disabled</td>
                <td className="p-4">
                  Opacity reduction, desaturation
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Buttons, form controls, tabs</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Error</td>
                <td className="p-4">
                  Color change to error state, slight shake for invalid input
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Form fields, validation messages</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Loading</td>
                <td className="p-4">
                  Pulse or shimmer effect, spinner appearance
                </td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4">Buttons, content areas, cards</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Success</td>
                <td className="p-4">
                  Color change to success state, checkmark animation
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Form submissions, completed actions</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Accessibility Considerations</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Respecting Reduced Motion</h3>
          <p className="mb-4">
            All transitions must adapt appropriately for users who prefer reduced motion. When implementing transitions:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Replace movement-based transitions with simple opacity changes</li>
            <li>Reduce duration times by 50% or more when reduced motion is enabled</li>
            <li>Eliminate non-essential animations entirely</li>
            <li>Ensure all transitions can be interrupted by user input</li>
          </ul>

          <h3 className="font-display text-xl font-medium mb-4 mt-6">Example Implementation</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// React + Framer Motion implementation
import { motion, useReducedMotion } from 'framer-motion';

function AccessibleTransition({ children }) {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = shouldReduceMotion 
    ? {
        // Reduced motion variants - opacity only
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 } // Shortened duration
      }
    : {
        // Standard motion variants
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 20 },
        transition: { duration: 0.3, ease: 'easeInOut' }
      };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={variants.transition}
      {...variants}
    >
      {children}
    </motion.div>
  );
}`}
          </pre>
        </div>
      </section>
      
      <div className="flex gap-4 mt-12">
        <Link 
          href="/design-foundations/animation/timing" 
          className="py-2 px-4 border border-border rounded-md hover:bg-accent transition-colors duration-200"
        >
          ← Timing & Easing
        </Link>
        <Link 
          href="/design-foundations/animation/microinteractions" 
          className="py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          Next: Micro-interactions →
        </Link>
      </div>
    </div>
  );
}