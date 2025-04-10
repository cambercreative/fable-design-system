import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MotionCurveVisualizer } from "./motion-curve-visualizer";
import { AnimationPrinciples } from "./animation-principles";

export const metadata = {
  title: 'Motion Concepts | Fable Design System',
  description: 'Core motion concepts and principles for the Fable application'
};

export default function MotionConceptsPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <h1 className="font-display text-4xl mb-4 font-bold">Motion Concepts</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Learn about the fundamental concepts that guide our approach to animation and motion in the Fable application.
        </p>
      </div>

      <Separator className="my-8" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Motion Patterns</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          Our motion patterns establish a consistent visual language for how elements should move. These patterns guide users through the interface, reinforce relationships, and create a cohesive experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Enter</h3>
            <p className="mb-4 text-muted-foreground">
              Elements enter the interface from their logical origin point, creating a sense of natural flow and hierarchy.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Bottom sheets slide up from the bottom</li>
              <li>Dialog boxes scale up from center</li>
              <li>Side drawers slide in from their respective sides</li>
              <li>List items fade in with subtle upward movement</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Exit</h3>
            <p className="mb-4 text-muted-foreground">
              Elements exit the interface toward their logical destination, maintaining spatial consistency.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Bottom sheets slide down and out of view</li>
              <li>Dialog boxes scale down and fade out</li>
              <li>Side drawers return to their original position</li>
              <li>Dismissed items fade out with subtle motion</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Transform</h3>
            <p className="mb-4 text-muted-foreground">
              Elements transform in place with appropriate easing to indicate state changes and maintain context.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Buttons change appearance when pressed</li>
              <li>Cards elevate on hover to indicate interactivity</li>
              <li>Toggle switches animate between states</li>
              <li>Form fields change state with smooth transitions</li>
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Transition</h3>
            <p className="mb-4 text-muted-foreground">
              Screen transitions follow directional logic based on navigation flow, reinforcing the user's mental model.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Forward navigation slides from right to left</li>
              <li>Backward navigation slides from left to right</li>
              <li>Hierarchical transitions use scale and opacity</li>
              <li>Modal presentations slide up from bottom</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <AnimationPrinciples />
      </div>

      <Separator className="my-10" />

      <div className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Motion Curves</h2>
        <p className="text-lg mb-6 text-muted-foreground">
          Motion curves define how elements accelerate and decelerate through animation, giving them a natural, physical feel that enhances the user experience.
        </p>

        <MotionCurveVisualizer />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Ease Out</h3>
            <p className="mb-4 text-muted-foreground">
              Elements start quickly and decelerate to a stop, creating a sense of responsiveness and reducing the feeling of waiting. Used primarily for entrance animations and immediate feedback.
            </p>
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
              {`// CSS implementation
transition: all 100ms cubic-bezier(0.0, 0.0, 0.2, 1);

// Framer Motion implementation
transition={{ 
  duration: 0.1, 
  ease: [0.0, 0.0, 0.2, 1] 
}}`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Ease In-Out</h3>
            <p className="mb-4 text-muted-foreground">
              Elements accelerate and decelerate smoothly, creating balanced, natural-feeling transitions. Used for state changes and standard transitions between screens or states.
            </p>
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
              {`// CSS implementation
transition: all 200ms cubic-bezier(0.4, 0.0, 0.2, 1);

// Framer Motion implementation
transition={{ 
  duration: 0.2, 
  ease: [0.4, 0.0, 0.2, 1] 
}}`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Ease In-Out Cubic</h3>
            <p className="mb-4 text-muted-foreground">
              A more pronounced acceleration and deceleration curve, for more emphatic transitions that draw attention. Used for important state changes and celebratory animations.
            </p>
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
              {`// CSS implementation
transition: all 500ms cubic-bezier(0.33, 0.0, 0.67, 1);

// Framer Motion implementation
transition={{ 
  duration: 0.5, 
  ease: [0.33, 0.0, 0.67, 1] 
}}`}
            </pre>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-medium mb-4">Linear</h3>
            <p className="mb-4 text-muted-foreground">
              Constant rate of change with no acceleration or deceleration. Used sparingly for continuous animations like loading spinners or cases where instant feedback is needed.
            </p>
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
              {`// CSS implementation
transition: all 0ms linear;

// Framer Motion implementation
transition={{ 
  duration: 0, 
  ease: "linear" 
}}`}
            </pre>
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