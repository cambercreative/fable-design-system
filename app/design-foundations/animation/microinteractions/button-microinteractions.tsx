'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useReducedMotion } from 'framer-motion';

const ButtonMicrointeractions = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Button state for loading animation demo
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLoadingClick = () => {
    if (!isLoading && !isSuccess) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      }, 2000);
    }
  };

  const buttonAnimations = {
    hover: shouldReduceMotion
      ? { opacity: 0.8 }
      : { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
    tap: shouldReduceMotion
      ? { opacity: 0.6 }
      : { scale: 0.98, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' },
    focus: { boxShadow: '0 0 0 3px rgba(var(--primary-rgb), 0.4)' }
  };

  const loadingState = isLoading
    ? 'loading'
    : isSuccess
    ? 'success'
    : 'idle';

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-display text-xl font-medium mb-2">Button Micro-interactions</h3>
        <p className="text-muted-foreground">
          Interactive examples of button feedback animations that respond to user interaction.
        </p>
      </div>

      <div className="p-6">
        <Tabs defaultValue="hover" className="w-full">
          <TabsList>
            <TabsTrigger value="hover">Hover & Press</TabsTrigger>
            <TabsTrigger value="focus">Focus States</TabsTrigger>
            <TabsTrigger value="loading">Loading States</TabsTrigger>
            <TabsTrigger value="code">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="hover" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h4 className="font-medium mb-4">Button Hover & Press Effects</h4>
                <div className="flex flex-wrap gap-4 mb-6">
                  <motion.button
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md"
                    whileHover={buttonAnimations.hover}
                    whileTap={buttonAnimations.tap}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setActiveButton('primary')}
                    onHoverEnd={() => setActiveButton(null)}
                  >
                    Primary Button
                  </motion.button>
                  
                  <motion.button
                    className="px-6 py-3 border border-primary text-primary rounded-md"
                    whileHover={buttonAnimations.hover}
                    whileTap={buttonAnimations.tap}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setActiveButton('secondary')}
                    onHoverEnd={() => setActiveButton(null)}
                  >
                    Secondary Button
                  </motion.button>
                  
                  <motion.button
                    className="px-6 py-3 text-primary underline rounded-md"
                    whileHover={buttonAnimations.hover}
                    whileTap={buttonAnimations.tap}
                    transition={{ duration: 0.2 }}
                    onHoverStart={() => setActiveButton('tertiary')}
                    onHoverEnd={() => setActiveButton(null)}
                  >
                    Tertiary Button
                  </motion.button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {shouldReduceMotion && (
                    <div className="p-3 bg-muted rounded-lg mb-4">
                      <strong>Note:</strong> Reduced motion preference detected. Showing simplified animations.
                    </div>
                  )}
                  <p>
                    Hover over or click the buttons to see the micro-interactions in action. 
                    These subtle animations provide immediate feedback to user actions.
                  </p>
                </div>
              </div>
              
              <div className="bg-muted p-5 rounded-lg">
                <h4 className="font-medium mb-3">Active Micro-interaction</h4>
                {activeButton ? (
                  <>
                    <div className="font-mono text-sm mb-2">{activeButton} button</div>
                    <dl className="space-y-2 text-sm">
                      <div>
                        <dt className="font-medium">Hover Animation:</dt>
                        <dd className="text-muted-foreground pl-4">
                          {shouldReduceMotion
                            ? 'Opacity reduction to 80%'
                            : 'Scale to 102% + subtle shadow increase'}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium">Press Animation:</dt>
                        <dd className="text-muted-foreground pl-4">
                          {shouldReduceMotion
                            ? 'Opacity reduction to 60%'
                            : 'Scale to 98% + shadow reduction'}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium">Timing:</dt>
                        <dd className="text-muted-foreground pl-4">
                          timing-quick (100ms) with ease-out easing
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium">Purpose:</dt>
                        <dd className="text-muted-foreground pl-4">
                          Provides tactile feedback, mimics physical button behavior
                        </dd>
                      </div>
                    </dl>
                  </>
                ) : (
                  <div className="text-muted-foreground">
                    Hover over a button to see details about its micro-interactions.
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="focus" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h4 className="font-medium mb-4">Focus State Animations</h4>
                <p className="text-muted-foreground mb-4">
                  Focus states use subtle animations to draw attention to the currently focused element.
                  These are essential for keyboard navigation and accessibility.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <motion.button
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-md focus:outline-none"
                    whileFocus={buttonAnimations.focus}
                    transition={{ duration: 0.2 }}
                  >
                    Tab to Focus
                  </motion.button>
                  
                  <motion.button
                    className="px-6 py-3 border border-primary text-primary rounded-md focus:outline-none"
                    animate={activeButton === 'focus-demo' ? { boxShadow: '0 0 0 3px rgba(var(--primary-rgb), 0.4)' } : {}}
                    transition={{ duration: 0.2 }}
                  >
                    Animated Focus Ring
                  </motion.button>
                </div>
                
                <button
                  className="text-sm text-primary underline"
                  onClick={() => {
                    setActiveButton(activeButton === 'focus-demo' ? null : 'focus-demo')
                  }}
                >
                  {activeButton === 'focus-demo' ? 'Remove Focus' : 'Show Focus Animation'}
                </button>
              </div>
              
              <div className="bg-muted p-5 rounded-lg">
                <h4 className="font-medium mb-3">Focus Micro-interaction Details</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="font-medium">Animation Type:</dt>
                    <dd className="text-muted-foreground pl-4">
                      Smooth appearance of focus ring around the element
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Timing:</dt>
                    <dd className="text-muted-foreground pl-4">
                      timing-standard (200ms) with ease-in-out easing
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Purpose:</dt>
                    <dd className="text-muted-foreground pl-4">
                      Makes the currently focused element clearly visible for keyboard users and improves navigation accessibility
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">CSS Implementation:</dt>
                    <dd className="font-mono bg-background p-2 rounded mt-1 text-xs">
                      {`.focus-visible {
  transition: box-shadow 200ms ease-in-out;
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.4);
}`}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="loading" className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
              <div>
                <h4 className="font-medium mb-4">Loading State Animations</h4>
                <p className="text-muted-foreground mb-4">
                  Loading states provide feedback during asynchronous operations, keeping users informed about the system status.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <motion.button
                    className={`px-6 py-3 rounded-md min-w-[160px] relative ${
                      loadingState === 'idle'
                        ? 'bg-primary text-primary-foreground'
                        : loadingState === 'loading'
                        ? 'bg-primary/80 text-primary-foreground'
                        : 'bg-green-600 text-primary-foreground'
                    }`}
                    onClick={handleLoadingClick}
                    disabled={loadingState !== 'idle'}
                    animate={
                      loadingState === 'loading'
                        ? { opacity: 0.9 }
                        : loadingState === 'success'
                        ? { opacity: 1 }
                        : { opacity: 1 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{ opacity: loadingState === 'idle' ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block"
                    >
                      Submit
                    </motion.span>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: loadingState === 'loading' ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: loadingState === 'success' ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  </motion.button>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Click the button to see the loading and success state transitions. The animation provides feedback during the async operation.
                </div>
              </div>
              
              <div className="bg-muted p-5 rounded-lg">
                <h4 className="font-medium mb-3">Loading State Sequence</h4>
                <ol className="space-y-3 text-sm">
                  <li>
                    <div className="font-medium">1. Idle → Loading</div>
                    <div className="text-muted-foreground pl-4">
                      Text fades out (timing-quick), spinner fades in, button opacity reduces to indicate disabled state
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">2. Loading Animation</div>
                    <div className="text-muted-foreground pl-4">
                      Continuous spinner rotation animation (1.5s per cycle) to indicate processing
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">3. Loading → Success</div>
                    <div className="text-muted-foreground pl-4">
                      Spinner fades out, success check icon fades in (timing-standard), button color transitions to success state
                    </div>
                  </li>
                  <li>
                    <div className="font-medium">4. Success → Idle</div>
                    <div className="text-muted-foreground pl-4">
                      After displaying success state (2s), transitions back to idle state with original label
                    </div>
                  </li>
                </ol>
                <div className="mt-4">
                  <div className="font-medium">Purpose:</div>
                  <div className="text-muted-foreground pl-4">
                    Communicates system status during asynchronous operations, reduces perceived wait time, and confirms successful completion
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="code" className="pt-6">
            <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// React + Framer Motion implementation of button micro-interactions

// 1. Basic hover and press animations
const ButtonWithMicrointeractions = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const buttonAnimations = shouldReduceMotion
    ? {
        // Reduced motion variants - opacity only
        hover: { opacity: 0.8 },
        tap: { opacity: 0.6 }
      }
    : {
        // Standard motion variants
        hover: { scale: 1.02, boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' },
        tap: { scale: 0.98, boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)' }
      };
  
  return (
    <motion.button
      className="px-4 py-2 bg-primary text-white rounded-md"
      whileHover={buttonAnimations.hover}
      whileTap={buttonAnimations.tap}
      transition={{ duration: 0.1 }} // timing-quick
    >
      Click Me
    </motion.button>
  );
};

// 2. Loading state animations
const LoadingButton = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success
  
  const handleClick = async () => {
    if (status !== 'idle') return;
    
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus('success');
    setTimeout(() => setStatus('idle'), 2000);
  };
  
  return (
    <motion.button
      onClick={handleClick}
      disabled={status !== 'idle'}
      className={\`
        px-4 py-2 rounded-md relative
        \${status === 'success' ? 'bg-green-600' : 'bg-primary'}
        text-white
      \`}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Submit
          </motion.span>
        )}
        
        {status === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Spinner />
          </motion.div>
        )}
        
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <CheckIcon />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};`}
            </pre>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ButtonMicrointeractions;