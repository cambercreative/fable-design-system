import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
          
          <div className="mt-6">
            <Link href="/design-foundations/animation/motion-concepts">
              <Button variant="outline" className="flex items-center">
                Explore Motion Concepts
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          
          <Link href="/design-foundations/animation/page-transitions" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Page Transitions</h3>
            <p className="text-muted-foreground">
              Smooth, contextual animations for navigating between different screens and states in the application.
            </p>
          </Link>
          
          <Link href="/design-foundations/animation/component-animations" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Component Animations</h3>
            <p className="text-muted-foreground">
              Specific animation patterns for different UI components that enhance usability and provide feedback.
            </p>
          </Link>
          
          <Link href="/design-foundations/animation/motion-concepts" className="block p-6 bg-card rounded-lg border border-border hover:border-primary transition-colors duration-200">
            <h3 className="font-display text-xl font-medium mb-2">Motion Concepts</h3>
            <p className="text-muted-foreground">
              Core concepts about how movement works in Fable, including motion curves, patterns, and principles.
            </p>
          </Link>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Animation Timing at a Glance</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4">Token</th>
                <th className="text-left py-3 px-4">Duration</th>
                <th className="text-left py-3 px-4">Easing</th>
                <th className="text-left py-3 px-4">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">timing-instant</td>
                <td className="py-3 px-4">0ms</td>
                <td className="py-3 px-4">linear</td>
                <td className="py-3 px-4">Immediate feedback, real-time visualization</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">timing-quick</td>
                <td className="py-3 px-4">100ms</td>
                <td className="py-3 px-4">ease-out</td>
                <td className="py-3 px-4">Micro-interactions, button presses, hover states</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">timing-standard</td>
                <td className="py-3 px-4">200ms</td>
                <td className="py-3 px-4">ease-in-out</td>
                <td className="py-3 px-4">Standard transitions, focus states, selection changes</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 px-4 font-medium">timing-relaxed</td>
                <td className="py-3 px-4">300ms</td>
                <td className="py-3 px-4">ease-in-out</td>
                <td className="py-3 px-4">Content transitions, page changes, expansions</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-medium">timing-elaborate</td>
                <td className="py-3 px-4">500ms</td>
                <td className="py-3 px-4">ease-in-out-cubic</td>
                <td className="py-3 px-4">Complex animations, celebrations, attention-drawing moments</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 flex justify-end">
          <Link href="/design-foundations/animation/timing">
            <Button variant="outline" className="flex items-center">
              View Detailed Timing Documentation
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Button>
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
          
          <div className="mt-6 flex justify-end">
            <Link href="/design-foundations/animation/component-animations">
              <Button variant="outline" className="flex items-center">
                See Component-Specific Guidelines
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Separator className="my-10" />
      
      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Animation Implementation</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-3">Recommended Libraries</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Framer Motion</strong>: Primary animation library for React components</li>
              <li><strong>CSS Transitions</strong>: For simple state changes and hover effects</li>
              <li><strong>CSS Animations</strong>: For repeating or keyframe-based animations</li>
              <li><strong>React Spring</strong>: Alternative physics-based animation library</li>
            </ul>
            
            <p className="mt-4 text-sm text-muted-foreground">
              For complex sequences and orchestrated animations, Framer Motion is recommended. For simple state transitions, CSS may be sufficient.
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-3">Animation Best Practices</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Use CSS transforms and opacity for performance</li>
              <li>Avoid animating layout properties when possible</li>
              <li>Always provide fallbacks for reduced motion</li>
              <li>Keep animations under 500ms unless absolutely necessary</li>
              <li>Test animations on lower-powered devices</li>
              <li>Ensure all animations can be interrupted by user input</li>
            </ul>
            
            <p className="mt-4 text-sm text-muted-foreground">
              For detailed implementation guides, see the component-specific and page transition documentation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}