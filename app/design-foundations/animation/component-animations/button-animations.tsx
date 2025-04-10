'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "framer-motion";

export function ButtonAnimations() {
  const [isLoading, setIsLoading] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion || prefersReducedMotion;

  const handleLoadingClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={reduceMotion}
            onChange={(e) => setReduceMotion(e.target.checked)}
            className="mr-2"
          />
          Simulate Reduced Motion
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Primary Button States</h3>
          <p className="mb-6 text-muted-foreground">
            Primary buttons use subtle scale changes and color shifts to provide immediate feedback for different interaction states.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Default</div>
              <Button variant="default">Button</Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Hover</div>
              <motion.div
                animate={{ scale: 1.01 }}
                transition={{ duration: 0.1 }}
              >
                <Button variant="default" className="bg-primary/90">Button</Button>
              </motion.div>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Pressed</div>
              <motion.div
                animate={{ scale: shouldReduceMotion ? 1 : 0.98 }}
                transition={{ duration: 0.1 }}
              >
                <Button variant="default" className="bg-primary-foreground">Button</Button>
              </motion.div>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Focus</div>
              <Button variant="default" className="ring-2 ring-primary ring-offset-2">Button</Button>
              <div className="text-xs text-muted-foreground">timing-standard (200ms)</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Disabled</div>
              <Button variant="default" disabled>Button</Button>
              <div className="text-xs text-muted-foreground">timing-standard (200ms)</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Primary button with animation states
<motion.button
  className="btn-primary"
  whileHover={prefersReducedMotion ? {} : { 
    scale: 1.01,
    transition: { duration: 0.1 }
  }}
  whileTap={prefersReducedMotion ? {} : { 
    scale: 0.98,
    transition: { duration: 0.1 }
  }}
  transition={{ duration: 0.2 }}
>
  Button
</motion.button>`}
            </pre>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Loading & State Transitions</h3>
          <p className="mb-6 text-muted-foreground">
            Buttons animate between states to provide feedback about ongoing processes and successful completion.
          </p>
          
          <div className="space-y-8">
            <div className="flex flex-col gap-3">
              <div className="text-sm text-muted-foreground mb-2">Loading State Transition</div>
              <div className="flex items-center gap-4">
                <Button
                  variant="default"
                  onClick={handleLoadingClick}
                  disabled={isLoading}
                  className="min-w-[100px] relative overflow-hidden"
                >
                  {isLoading ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </motion.div>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      Click me
                    </motion.span>
                  )}
                </Button>
                <div className="text-xs text-muted-foreground">timing-standard (200ms) for text/spinner transition</div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Click the button to see the loading animation.
              </div>
            </div>
            
            <div className="flex flex-col gap-3 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground mb-2">Success Animation</div>
              <div className="flex items-center gap-4">
                <SuccessButtonDemo reduceMotion={shouldReduceMotion} />
                <div className="text-xs text-muted-foreground">timing-elaborate (500ms) for success transition</div>
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Click the button to see the success animation.
              </div>
            </div>
            
            <div className="pt-6 border-t border-border">
              <h4 className="font-medium mb-3">Code Implementation</h4>
              <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Button with loading state transition
function LoadingButton({ onClick, loading }) {
  return (
    <Button 
      onClick={onClick}
      disabled={loading}
    >
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="spinner"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Spinner />
          </motion.div>
        ) : (
          <motion.span
            key="text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            Click me
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  );
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Icon Button</h3>
          <p className="mb-6 text-muted-foreground">
            Icon buttons use scale changes for feedback, with a slightly more pronounced effect than regular buttons.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Default</div>
              <Button variant="ghost" size="icon" className="h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"></path>
                  <path d="M12 9v4"></path>
                  <path d="M12 17v.01"></path>
                </svg>
              </Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Hover</div>
              <motion.div
                animate={{ scale: shouldReduceMotion ? 1 : 1.05 }}
                transition={{ duration: 0.1 }}
              >
                <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17v.01"></path>
                  </svg>
                </Button>
              </motion.div>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Pressed</div>
              <motion.div
                animate={{ scale: shouldReduceMotion ? 1 : 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <Button variant="ghost" size="icon" className="h-10 w-10 bg-muted-foreground/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17v.01"></path>
                  </svg>
                </Button>
              </motion.div>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Icon button with animation states
<motion.button
  className="btn-icon"
  aria-label="Info"
  whileHover={prefersReducedMotion ? {} : { 
    scale: 1.05,
    transition: { duration: 0.1 }
  }}
  whileTap={prefersReducedMotion ? {} : { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }}
>
  <InfoIcon />
</motion.button>`}
            </pre>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Secondary & Tertiary Buttons</h3>
          <p className="mb-6 text-muted-foreground">
            Secondary and tertiary buttons use more subtle animations compared to primary buttons, focusing primarily on background and opacity changes.
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Secondary</div>
              <Button variant="outline">Secondary</Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Hover</div>
              <Button variant="outline" className="bg-muted">Secondary</Button>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Tertiary</div>
              <Button variant="ghost">Tertiary</Button>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm text-muted-foreground">Hover</div>
              <Button variant="ghost" className="bg-muted">Tertiary</Button>
              <div className="text-xs text-muted-foreground">timing-quick (100ms)</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-medium mb-3">Animation Guidelines</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li>Secondary buttons use background color change rather than significant scale changes</li>
              <li>Tertiary buttons use even more subtle animations to reflect their lower importance in the hierarchy</li>
              <li>All buttons maintain the same timing tokens across variants for consistency</li>
              <li>Reduced motion settings replace scale animations with simple opacity changes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// Success Button Demo Component
function SuccessButtonDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  
  const handleClick = () => {
    if (status !== 'idle') return;
    
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => setStatus('idle'), 2000);
    }, 1500);
  };
  
  return (
    <Button
      variant="default"
      onClick={handleClick}
      disabled={status !== 'idle'}
      className={`min-w-[130px] relative ${status === 'success' ? 'bg-[#2D7D6F] hover:bg-[#2D7D6F]/90' : ''}`}
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
            Save Changes
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
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </motion.div>
        )}
        
        {status === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: reduceMotion ? 0.1 : 0.5,
              ease: [0.33, 0.0, 0.67, 1]
            }}
            className="flex items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Saved
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}