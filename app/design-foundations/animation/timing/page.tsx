import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import dynamic from 'next/dynamic';

// Dynamic import for client components with interactivity
const TimingVisualizer = dynamic(() => import('./timing-visualizer'), { ssr: false });
const EasingCurves = dynamic(() => import('./easing-curves'), { ssr: false });

export const metadata = {
  title: 'Animation Timing & Easing | Fable Design System',
  description: 'Standard duration tokens and easing curves for consistent motion throughout the Fable interface'
};

export default function AnimationTimingPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/design-foundations/animation" className="hover:text-primary transition-colors">Animation</Link>
          <span>/</span>
          <span>Timing & Easing</span>
        </div>
        <h1 className="font-display text-4xl mb-4 font-bold">Timing & Easing</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Consistent durations and easing functions create predictable, natural-feeling motion across the Fable experience.
        </p>
      </div>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Duration Tokens</h2>
        <p className="mb-6 max-w-3xl">
          Duration tokens establish a consistent timing system for all animated elements. Each token is appropriate for 
          different types of transitions, from micro-interactions to more complex animations.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-10">
          <TimingVisualizer />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Token</th>
                <th className="text-left p-4 font-display font-medium">Duration</th>
                <th className="text-left p-4 font-display font-medium">Default Easing</th>
                <th className="text-left p-4 font-display font-medium">Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-mono text-sm">timing-instant</td>
                <td className="p-4">0ms</td>
                <td className="p-4">linear</td>
                <td className="p-4">Immediate feedback, real-time visualizations</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">100ms</td>
                <td className="p-4">ease-out</td>
                <td className="p-4">Micro-interactions, button presses, hover states</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">200ms</td>
                <td className="p-4">ease-in-out</td>
                <td className="p-4">Standard transitions, focus states, most UI components</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4">300ms</td>
                <td className="p-4">ease-in-out</td>
                <td className="p-4">Content transitions, page changes, larger UI shifts</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-mono text-sm">timing-elaborate</td>
                <td className="p-4">500ms</td>
                <td className="p-4">ease-in-out-cubic</td>
                <td className="p-4">Complex animations, celebrations, emphasis moments</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="font-display text-xl font-medium mb-4">Implementation</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// Tailwind CSS configuration
{
  theme: {
    extend: {
      transitionDuration: {
        'instant': '0ms',
        'quick': '100ms',
        'standard': '200ms',
        'relaxed': '300ms',
        'elaborate': '500ms',
      }
    }
  }
}

// CSS variables
:root {
  --timing-instant: 0ms;
  --timing-quick: 100ms;
  --timing-standard: 200ms;
  --timing-relaxed: 300ms;
  --timing-elaborate: 500ms;
}

// Example usage in CSS
.element {
  transition: opacity var(--timing-standard) ease-in-out,
              transform var(--timing-standard) ease-in-out;
}

// Example usage with Framer Motion
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.2 }} // 200ms (timing-standard)
>
  Content
</motion.div>`}
          </pre>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Easing Functions</h2>
        <p className="mb-6 max-w-3xl">
          Easing functions define how animations accelerate and decelerate, giving motion a sense of natural physics. 
          Different easing curves create different feelings and should be chosen based on the context and purpose.
        </p>

        <div className="grid grid-cols-1 gap-6 mb-10">
          <EasingCurves />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Easing Type</th>
                <th className="text-left p-4 font-display font-medium">CSS Function</th>
                <th className="text-left p-4 font-display font-medium">Cubic-Bezier</th>
                <th className="text-left p-4 font-display font-medium">Best For</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4">Linear</td>
                <td className="p-4 font-mono text-sm">linear</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0, 0, 1, 1)</td>
                <td className="p-4">Real-time updates, progress indicators, loading bars</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Ease</td>
                <td className="p-4 font-mono text-sm">ease</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0.25, 0.1, 0.25, 1)</td>
                <td className="p-4">General purpose, default for simple transitions</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Ease In</td>
                <td className="p-4 font-mono text-sm">ease-in</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0.42, 0, 1, 1)</td>
                <td className="p-4">Elements exiting a screen, fading out</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Ease Out</td>
                <td className="p-4 font-mono text-sm">ease-out</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0, 0, 0.58, 1)</td>
                <td className="p-4">Elements entering a screen, buttons, hover states</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Ease In Out</td>
                <td className="p-4 font-mono text-sm">ease-in-out</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0.42, 0, 0.58, 1)</td>
                <td className="p-4">Transitions with both entry and exit, most components</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Ease In Out Cubic</td>
                <td className="p-4 font-mono text-sm">-</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0.65, 0, 0.35, 1)</td>
                <td className="p-4">More pronounced easing for emphasis and celebratory moments</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Slight Bounce</td>
                <td className="p-4 font-mono text-sm">-</td>
                <td className="p-4 font-mono text-sm">cubic-bezier(0.3, 1.05, 0.5, 1.05)</td>
                <td className="p-4">Playful elements, notifications, badges</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="font-display text-xl font-medium mb-4">Implementation</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// Tailwind CSS configuration
{
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
        'bounce-subtle': 'cubic-bezier(0.3, 1.05, 0.5, 1.05)'
      }
    }
  }
}

// CSS variables
:root {
  --ease-linear: cubic-bezier(0, 0, 1, 1);
  --ease-in: cubic-bezier(0.42, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.58, 1);
  --ease-in-out: cubic-bezier(0.42, 0, 0.58, 1);
  --ease-in-out-cubic: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce-subtle: cubic-bezier(0.3, 1.05, 0.5, 1.05);
}

// Example usage with Framer Motion
<motion.div
  initial={{ scale: 0.95, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ 
    duration: 0.3, // timing-relaxed
    ease: [0.65, 0, 0.35, 1] // ease-in-out-cubic
  }}
>
  Modal Content
</motion.div>`}
          </pre>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Combining Duration and Easing</h2>
        <p className="mb-6 max-w-3xl">
          The right combination of duration and easing creates motion that feels appropriate for the context.
          These pairings are recommended for common UI scenarios:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">UI Element</th>
                <th className="text-left p-4 font-display font-medium">Recommended Timing</th>
                <th className="text-left p-4 font-display font-medium">Recommended Easing</th>
                <th className="text-left p-4 font-display font-medium">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4">Button press</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4 font-mono text-sm">ease-out</td>
                <td className="p-4">Quick feedback with natural deceleration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Modal appearance</td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4 font-mono text-sm">ease-in-out-cubic</td>
                <td className="p-4">Smoothly brings attention to an important overlay</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Page transition</td>
                <td className="p-4 font-mono text-sm">timing-relaxed</td>
                <td className="p-4 font-mono text-sm">ease-in-out</td>
                <td className="p-4">Smooth flow between major content areas</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Hover state</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4 font-mono text-sm">ease</td>
                <td className="p-4">Quick, subtle feedback for mouse interaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Accordion expand</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4 font-mono text-sm">ease-out</td>
                <td className="p-4">Content reveals with natural deceleration</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Toast notification</td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4 font-mono text-sm">ease-bounce-subtle</td>
                <td className="p-4">Subtle bounce adds attention without distraction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4">Focus ring</td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4 font-mono text-sm">ease-in-out</td>
                <td className="p-4">Smooth transition for accessibility highlight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex gap-4 mt-12">
        <Link 
          href="/design-foundations/animation" 
          className="py-2 px-4 border border-border rounded-md hover:bg-accent transition-colors duration-200"
        >
          ← Back to Animation
        </Link>
        <Link 
          href="/design-foundations/animation/transitions" 
          className="py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          Next: Transitions →
        </Link>
      </div>
    </div>
  );
}