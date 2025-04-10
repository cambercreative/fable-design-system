import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PageTransitionDemo } from './page-transition-demo';

export const metadata = {
  title: 'Page Transitions | Fable Design System',
  description: 'Page transition design patterns for the Fable application'
};

export default function PageTransitionsPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="font-display text-4xl mb-4 font-bold">Page Transitions</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Page transitions create smooth, intuitive flows between different screens in the application, establishing spatial relationships and maintaining user context.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Transition Types</h2>
        <p className="text-lg mb-8 text-muted-foreground">
          Fable employs distinct transition patterns for different navigation scenarios, creating a consistent and predictable user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Forward Navigation</h3>
            <div className="mb-4">
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mr-2">Timing: timing-relaxed (300ms)</span>
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded">Easing: ease-in-out</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              When navigating forward in the application's information hierarchy (e.g., list to detail view), content transitions from right to left.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Previous screen fades out and slides left (30px offset)</li>
              <li>New screen enters from the right and fades in</li>
              <li>Creates a consistent "forward" directional metaphor</li>
            </ul>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Forward transition animation
const forwardVariants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { 
    duration: 0.3, 
    ease: [0.4, 0.0, 0.2, 1] 
  }
};`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Backward Navigation</h3>
            <div className="mb-4">
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mr-2">Timing: timing-standard (200ms)</span>
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded">Easing: ease-in-out</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              When navigating backward (e.g., returning to a previous screen), content transitions from left to right, reinforcing the spatial model.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Previous screen fades out and slides right (30px offset)</li>
              <li>New screen enters from the left and fades in</li>
              <li>Slightly faster than forward navigation (200ms vs 300ms)</li>
            </ul>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Backward transition animation
const backwardVariants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: { 
    duration: 0.2, 
    ease: [0.4, 0.0, 0.2, 1] 
  }
};`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Modal Presentation</h3>
            <div className="mb-4">
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mr-2">Timing: timing-relaxed (300ms)</span>
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded">Easing: ease-in-out</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Modals enter from the bottom of the screen, creating a layer on top of the current content. This establishes a clear hierarchical relationship.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Full screen modals slide up from bottom</li>
              <li>Modal backdrop fades in simultaneously</li>
              <li>Exit animation is slightly faster (200ms) than entrance</li>
            </ul>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Modal presentation animation
const modalVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { 
    duration: 0.3, 
    ease: [0.4, 0.0, 0.2, 1] 
  }
};

// Backdrop animation
const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Partial Sheets</h3>
            <div className="mb-4">
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mr-2">Timing: timing-standard (200ms)</span>
              <span className="inline-block bg-secondary text-xs px-2 py-1 rounded">Easing: ease-in-out</span>
            </div>
            <p className="mb-4 text-muted-foreground">
              Partial sheets (bottom sheets) slide up from the bottom but only cover part of the screen, allowing context to remain visible.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>Sheet slides up from bottom with slight acceleration</li>
              <li>Semi-transparent backdrop fades in</li>
              <li>Supports snap points with smooth transitions between positions</li>
            </ul>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Bottom sheet animation
const sheetVariants = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: { 
    duration: 0.2, 
    ease: [0.4, 0.0, 0.2, 1] 
  }
};

// Snap point transition
const snapPointVariants = {
  collapsed: { y: "70%" },
  partial: { y: "50%" },
  expanded: { y: 0 },
  transition: { 
    duration: 0.2, 
    ease: [0.4, 0.0, 0.2, 1] 
  }
};`}
            </pre>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Interactive Demo</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          Experience how different page transitions feel and see their implementations in context.
        </p>

        <PageTransitionDemo />
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Implementation Guidelines</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Consistent Direction</h3>
            <p className="text-muted-foreground mb-4">
              Maintain consistent directional transitions to establish a clear spatial model for the user:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Forward navigation moves right-to-left</li>
              <li>Backward navigation moves left-to-right</li>
              <li>Hierarchical overlays move bottom-to-top</li>
              <li>Keep this consistency across all platforms</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Performance Optimization</h3>
            <p className="text-muted-foreground mb-4">
              Ensure smooth transitions even on less powerful devices:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Use hardware-accelerated properties (transform, opacity)</li>
              <li>Avoid animating layout properties (width, height)</li>
              <li>Reduce complexity on lower-powered devices</li>
              <li>Implement will-change for smoother animations</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Accessibility</h3>
            <p className="text-muted-foreground mb-4">
              Make transitions accessible to all users:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Honor prefers-reduced-motion settings</li>
              <li>Replace directional animations with simple fades</li>
              <li>Maintain essential state change indications</li>
              <li>Ensure all animations can be interrupted</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Native Integration</h3>
            <p className="text-muted-foreground mb-4">
              Respect platform-specific behaviors:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Adapt to iOS navigation gestures</li>
              <li>Support Android back button behavior</li>
              <li>Use native animations when appropriate</li>
              <li>Maintain visual consistency across platforms</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Next.js Implementation</h3>
          <p className="mb-4 text-muted-foreground">
            The following example demonstrates how to implement smooth page transitions in a Next.js application using Framer Motion:
          </p>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// components/page-transition.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  
  // Determine if navigation is forward or backward
  // This could be more sophisticated based on navigation state
  const isForward = true; 
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: isForward ? 30 : -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: isForward ? -30 : 30 }}
        transition={{ 
          duration: isForward ? 0.3 : 0.2, 
          ease: [0.4, 0.0, 0.2, 1] 
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Usage in app/layout.tsx
import { PageTransition } from '@/components/page-transition';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}`}
          </pre>
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
        <Link href="/design-foundations/animation/timing" className="text-primary hover:underline flex items-center">
          Explore Timing & Easing
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}