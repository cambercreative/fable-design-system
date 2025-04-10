'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from 'framer-motion';

// Transition presets
const transitions = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  riseUp: {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 15 },
    transition: { duration: 0.2, ease: 'easeInOut' }
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

// Sample content for demonstration
const sampleContent = [
  {
    title: "Story Memory",
    description: "Childhood adventures at the lake house with grandparents",
    date: "Summer 1998"
  },
  {
    title: "Family Reunion",
    description: "Annual gathering with the extended family in Colorado",
    date: "July 2023"
  },
  {
    title: "Graduation Day",
    description: "Completing college and celebrating with loved ones",
    date: "May 2015"
  }
];

const TransitionShowcase = () => {
  const [activeTransition, setActiveTransition] = useState('fadeIn');
  const [isVisible, setIsVisible] = useState(true);
  const [contentIndex, setContentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Handle click to change content and trigger animation
  const handleChangeContent = () => {
    setIsVisible(false);
    
    // After exit animation, change content and show again
    setTimeout(() => {
      setContentIndex((contentIndex + 1) % sampleContent.length);
      setIsVisible(true);
    }, 300);
  };

  // Get current transition settings, respecting reduced motion preferences
  const getTransitionSettings = () => {
    if (shouldReduceMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 }
      };
    }
    return transitions[activeTransition];
  };

  const currentSettings = getTransitionSettings();
  const currentContent = sampleContent[contentIndex];

  // Format transition settings for code display
  const formatTransitionCode = () => {
    const { initial, animate, exit, transition } = currentSettings;
    return `// Framer Motion transition
const ${activeTransition} = {
  initial: ${JSON.stringify(initial)},
  animate: ${JSON.stringify(animate)},
  exit: ${JSON.stringify(exit)},
  transition: ${JSON.stringify(transition)}
};

// Usage
<motion.div
  initial="initial"
  animate="animate"
  exit="exit"
  variants={${activeTransition}}
>
  {content}
</motion.div>`;
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-display text-xl font-medium mb-2">Transition Examples</h3>
        <p className="text-muted-foreground">
          Interact with common transition patterns to see how they affect content appearance.
        </p>
      </div>

      <div className="p-6">
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="pt-4">
            <div className="bg-muted rounded-lg p-6 min-h-[300px] flex flex-col items-center justify-center relative">
              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    key={contentIndex}
                    className="bg-background shadow-md rounded-lg p-6 w-full max-w-md"
                    initial={currentSettings.initial}
                    animate={currentSettings.animate}
                    exit={currentSettings.exit}
                    transition={currentSettings.transition}
                  >
                    <h3 className="font-display text-xl font-medium mb-2">{currentContent.title}</h3>
                    <p className="text-muted-foreground mb-4">{currentContent.description}</p>
                    <div className="text-sm text-muted-foreground">{currentContent.date}</div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-8">
                <Button onClick={handleChangeContent}>
                  Change Content
                </Button>
                {shouldReduceMotion && (
                  <div className="mt-4 text-sm italic text-muted-foreground text-center">
                    Reduced motion preference detected. Animations simplified.
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="pt-4">
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
              {formatTransitionCode()}
            </pre>
          </TabsContent>

          <TabsContent value="settings" className="pt-4">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-3">Transition Type</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.keys(transitions).map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveTransition(type)}
                      className={`px-3 py-1.5 rounded text-sm transition-colors ${
                        activeTransition === type
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-medium mb-3">Initial State</h3>
                  <pre className="p-3 rounded bg-muted font-mono text-sm">
                    {JSON.stringify(currentSettings.initial, null, 2)}
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Final State</h3>
                  <pre className="p-3 rounded bg-muted font-mono text-sm">
                    {JSON.stringify(currentSettings.animate, null, 2)}
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Exit State</h3>
                  <pre className="p-3 rounded bg-muted font-mono text-sm">
                    {JSON.stringify(currentSettings.exit, null, 2)}
                  </pre>
                </div>
                <div>
                  <h3 className="font-medium mb-3">Timing</h3>
                  <pre className="p-3 rounded bg-muted font-mono text-sm">
                    {JSON.stringify(currentSettings.transition, null, 2)}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-8 p-4 bg-muted rounded-lg">
          <h3 className="font-medium mb-2">Transition Characteristics</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            {activeTransition === 'fadeIn' && (
              <>
                <li>Simple and versatile - works for most UI elements</li>
                <li>Draws minimal attention to the transition</li>
                <li>Good for content updates and secondary elements</li>
              </>
            )}
            {activeTransition === 'scaleUp' && (
              <>
                <li>Creates subtle depth perception with scale change</li>
                <li>Suitable for modals, dialogs, and cards</li>
                <li>Draws more attention than a simple fade</li>
              </>
            )}
            {activeTransition === 'riseUp' && (
              <>
                <li>Combines vertical movement with opacity change</li>
                <li>Natural feeling entrance for content in vertical layouts</li>
                <li>Good for lists, feed items, and content sections</li>
              </>
            )}
            {activeTransition === 'slideInRight' && (
              <>
                <li>Suggests forward navigation or progression</li>
                <li>Used for page transitions and hierarchical navigation</li>
                <li>Creates a sense of horizontal spatial relationship</li>
              </>
            )}
            {activeTransition === 'slideInLeft' && (
              <>
                <li>Suggests backward navigation or regression</li>
                <li>Used for returning to previous screens or sections</li>
                <li>Creates a sense of horizontal spatial relationship</li>
              </>
            )}
            {activeTransition === 'slideInUp' && (
              <>
                <li>Suggests emergence from below the viewport</li>
                <li>Suitable for modal sheets, bottom drawers, and menus</li>
                <li>Significant motion that draws strong attention</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransitionShowcase;