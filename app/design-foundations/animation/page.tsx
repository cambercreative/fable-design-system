import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata = {
  title: 'Animation and Motion | Fable Design System',
  description: 'Animation and motion design principles for the Fable application'
};

export default function AnimationPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="font-display text-4xl mb-4 font-bold">Animation and Motion</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Animation in Fable brings our brand to life through fluid, purposeful motion that guides users, enhances feedback, and delights with subtle moments of magic.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="font-display text-2xl font-semibold mb-4">Core Animation Principles</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Purposeful</h3>
              <p className="text-muted-foreground">
                Every animation serves a clear purpose, enhancing understanding and guiding attention rather than simply decorating.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Natural</h3>
              <p className="text-muted-foreground">
                Motion follows natural physics with appropriate easing, creating a sense of weight and physicality that feels organic.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Cohesive</h3>
              <p className="text-muted-foreground">
                Consistent timing and easing across similar interactions creates a unified, predictable experience.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Subtle</h3>
              <p className="text-muted-foreground">
                Animation complements content without overwhelming it, using restraint to enhance rather than distract.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Accessible</h3>
              <p className="text-muted-foreground">
                All animations respect user preferences, including reduced motion settings, ensuring everyone has an appropriate experience.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold mb-4">When to Use Animation</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-display text-lg font-medium mb-2">State Changes</h3>
              <p className="text-muted-foreground">
                Smooth transitions between UI states help users understand what's happening and maintain context.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Feedback</h3>
              <p className="text-muted-foreground">
                Micro-animations provide immediate feedback to user actions, confirming that input was received.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Focus Direction</h3>
              <p className="text-muted-foreground">
                Motion guides attention to important elements or changes, helping users track what matters.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Storytelling</h3>
              <p className="text-muted-foreground">
                Strategic animation reveals information in a narrative sequence, enhancing understanding and emotional connection.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-medium mb-2">Branding</h3>
              <p className="text-muted-foreground">
                Signature animations reinforce brand personality and create memorable moments that delight users.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Animation Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/design-foundations/animation/timing" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Timing & Easing</h3>
            <p className="text-muted-foreground">
              Standard duration tokens and easing curves that create consistent motion throughout the interface.
            </p>
          </Link>
          <Link href="/design-foundations/animation/transitions" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Transitions</h3>
            <p className="text-muted-foreground">
              Common transition patterns for elements entering, exiting, or changing state within the interface.
            </p>
          </Link>
          <Link href="/design-foundations/animation/microinteractions" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Micro-interactions</h3>
            <p className="text-muted-foreground">
              Small, focused animations that provide feedback and enhance the feeling of direct manipulation.
            </p>
          </Link>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Accessibility Considerations</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Respecting User Preferences</h3>
          <p className="mb-4">
            All animations in Fable must respect the user's motion preferences, particularly the <code>prefers-reduced-motion</code> media query. 
            When this setting is enabled, animations should be minimal or eliminated entirely.
          </p>

          <h3 className="font-display text-xl font-medium mb-4 mt-6">Implementation Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Replace animations with simple opacity changes when reduced motion is enabled</li>
            <li>Keep essential state transitions under 100ms when motion is reduced</li>
            <li>Avoid animations that could trigger vestibular disorders</li>
            <li>Ensure all animations can be interrupted by user input</li>
            <li>Test with screen readers to verify animations don't interfere with accessibility</li>
          </ul>

          <h3 className="font-display text-xl font-medium mb-4 mt-6">Code Example</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
            {`// Example of respecting reduced motion preferences
const animationSettings = useReducedMotion()
  ? { duration: 0.1, ease: "linear" }
  : { duration: 0.3, ease: "easeInOut" };

return (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={animationSettings}
  >
    Content
  </motion.div>
);`}
          </pre>
        </div>
      </div>
    </div>
  );
}