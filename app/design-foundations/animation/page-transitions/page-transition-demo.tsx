'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

type TransitionType = 'forward' | 'backward' | 'modal' | 'sheet';
type ScreenType = 'list' | 'detail' | 'modal' | 'sheet';

// Mock data for the demo
const stories = [
  { id: 1, title: "First Day of School", date: "Sep 4, 1995", preview: "I remember the butterflies in my stomach..." },
  { id: 2, title: "Summer at Grandma's", date: "Jul 15, 1998", preview: "The smell of fresh apple pie filled the house..." },
  { id: 3, title: "College Graduation", date: "May 22, 2010", preview: "Years of hard work finally paid off when..." },
];

// Animation variants for different transition types
const variants = {
  forward: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  },
  backward: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }
  },
  modal: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  },
  sheet: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }
  },
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }
};

export function PageTransitionDemo() {
  const [activeTransition, setActiveTransition] = useState<TransitionType>('forward');
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('list');
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [codeView, setCodeView] = useState<boolean>(false);

  // Handle screen transitions
  const navigateToDetail = (storyId: number) => {
    setSelectedStory(storyId);
    setCurrentScreen('detail');
  };

  const navigateToList = () => {
    setCurrentScreen('list');
  };

  const openModal = () => {
    setCurrentScreen('modal');
  };

  const openSheet = () => {
    setCurrentScreen('sheet');
  };

  const closeOverlay = () => {
    setCurrentScreen('list');
  };

  // Custom handling based on transition type
  const handleNavigation = (action: () => void) => {
    action();
  };

  // Get current story details
  const currentStory = stories.find(story => story.id === selectedStory);

  // Adjust variants for reduced motion
  const getVariant = (type: TransitionType) => {
    if (reducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 }
      };
    }
    return variants[type];
  };

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden">
      <div className="border-b border-border p-4 flex justify-between items-center flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={activeTransition === 'forward' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTransition('forward')}
          >
            Forward
          </Button>
          <Button 
            variant={activeTransition === 'backward' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTransition('backward')}
          >
            Backward
          </Button>
          <Button 
            variant={activeTransition === 'modal' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTransition('modal')}
          >
            Modal
          </Button>
          <Button 
            variant={activeTransition === 'sheet' ? 'default' : 'outline'} 
            size="sm"
            onClick={() => setActiveTransition('sheet')}
          >
            Sheet
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="reduced-motion"
              checked={reducedMotion}
              onChange={e => setReducedMotion(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="reduced-motion" className="text-sm">Reduced Motion</label>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCodeView(!codeView)}
          >
            {codeView ? 'Hide Code' : 'Show Code'}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="p-4">
          <h3 className="font-medium mb-4">Demo Area</h3>
          
          <div className="relative bg-background rounded-md h-[400px] overflow-hidden border border-border">
            <AnimatePresence mode="wait">
              {currentScreen === 'list' && (
                <motion.div
                  key="list"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={getVariant(activeTransition === 'backward' ? 'backward' : 'forward')}
                  className="absolute inset-0 p-4 overflow-auto"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-display text-lg font-medium">Your Stories</h4>
                    <Button size="sm" onClick={() => {
                      if (activeTransition === 'modal') {
                        handleNavigation(openModal);
                      } else if (activeTransition === 'sheet') {
                        handleNavigation(openSheet);
                      }
                    }}>
                      {activeTransition === 'modal' || activeTransition === 'sheet' ? 'Open Overlay' : 'New Story'}
                    </Button>
                  </div>
                  <div className="space-y-3">
                    {stories.map(story => (
                      <div
                        key={story.id}
                        className="p-3 rounded-md border border-border bg-card hover:border-primary cursor-pointer transition-colors"
                        onClick={() => handleNavigation(() => navigateToDetail(story.id))}
                      >
                        <div className="flex justify-between items-start">
                          <h5 className="font-medium">{story.title}</h5>
                          <span className="text-xs text-muted-foreground">{story.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{story.preview}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentScreen === 'detail' && (
                <motion.div
                  key="detail"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={getVariant(activeTransition === 'backward' ? 'forward' : 'backward')}
                  className="absolute inset-0 p-4"
                >
                  <div className="flex items-center mb-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="mr-2"
                      onClick={() => handleNavigation(navigateToList)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5"></path>
                        <path d="M12 19l-7-7 7-7"></path>
                      </svg>
                    </Button>
                    <h4 className="font-display text-lg font-medium">{currentStory?.title}</h4>
                  </div>
                  <div className="text-xs text-muted-foreground mb-3">{currentStory?.date}</div>
                  <p className="text-muted-foreground mb-4">{currentStory?.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius, erat sit amet varius varius, metus turpis tempus nibh, sed luctus sapien ipsum quis nunc.</p>
                  <p className="text-muted-foreground">Praesent rhoncus, urna in efficitur feugiat, nunc nunc ultricies diam, non vestibulum ipsum lorem nec risus. Praesent pharetra augue a magna lacinia, non efficitur erat lobortis.</p>
                </motion.div>
              )}

              {currentScreen === 'modal' && (
                <>
                  <motion.div
                    key="modal-backdrop"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants.backdrop}
                    className="absolute inset-0 bg-black"
                    onClick={() => handleNavigation(closeOverlay)}
                  />
                  <motion.div
                    key="modal"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={getVariant('modal')}
                    className="absolute inset-x-6 top-6 bottom-6 bg-background rounded-lg p-4 shadow-lg"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-display text-lg font-medium">Add New Story</h4>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleNavigation(closeOverlay)}
                        className="h-8 w-8 p-0"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Title</label>
                        <input type="text" className="w-full p-2 rounded-md border border-border bg-card" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input type="date" className="w-full p-2 rounded-md border border-border bg-card" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Content</label>
                        <textarea className="w-full p-2 rounded-md border border-border bg-card h-24"></textarea>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}

              {currentScreen === 'sheet' && (
                <>
                  <motion.div
                    key="sheet-backdrop"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={variants.backdrop}
                    className="absolute inset-0 bg-black"
                    onClick={() => handleNavigation(closeOverlay)}
                  />
                  <motion.div
                    key="sheet"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={getVariant('sheet')}
                    className="absolute inset-x-0 bottom-0 h-72 bg-background rounded-t-lg p-4 shadow-lg"
                  >
                    <div className="flex flex-col h-full">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="font-display text-lg font-medium">Story Options</h4>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleNavigation(closeOverlay)}
                          className="h-8 w-8 p-0"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                          </svg>
                        </Button>
                      </div>
                      <div className="space-y-3 flex-1">
                        <Button variant="outline" className="w-full justify-start" size="lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
                          </svg>
                          Edit Story
                        </Button>
                        <Button variant="outline" className="w-full justify-start" size="lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" x2="12" y1="15" y2="3"></line>
                          </svg>
                          Share Story
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-500" size="lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                          </svg>
                          Delete Story
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium mb-4">
            {codeView ? "Implementation Code" : "Transition Details"}
          </h3>

          {codeView ? (
            <pre className="p-4 rounded bg-muted font-mono text-xs overflow-x-auto h-[400px] overflow-y-auto">
{`// Page transition implementation for ${activeTransition} navigation
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const variants = {
  ${activeTransition === 'forward' ? `forward: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  }` : activeTransition === 'backward' ? `backward: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }
  }` : activeTransition === 'modal' ? `modal: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] }
  },
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }` : `sheet: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    transition: { duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }
  },
  backdrop: {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  }`}
};

// Implementation with reduced motion support
function MyComponent({ children }) {
  const prefersReducedMotion = ${reducedMotion};
  
  const getVariant = (type) => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.1 }
      };
    }
    return variants[type];
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={/* unique key for each view */}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getVariant('${activeTransition}')}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

// Usage
function App() {
  return (
    <MyComponent>
      {/* Current screen content */}
    </MyComponent>
  );
}`}
            </pre>
          ) : (
            <div className="bg-muted p-4 rounded h-[400px] overflow-y-auto">
              <h4 className="font-medium mb-3 text-lg">{activeTransition === 'forward' ? 'Forward Navigation' : 
                activeTransition === 'backward' ? 'Backward Navigation' : 
                activeTransition === 'modal' ? 'Modal Presentation' : 'Sheet Presentation'}</h4>
              
              <div className="mb-4">
                <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mr-2 mb-2">
                  Duration: {activeTransition === 'forward' || activeTransition === 'modal' ? '300ms' : '200ms'}
                </span>
                <span className="inline-block bg-secondary text-xs px-2 py-1 rounded mb-2">
                  Easing: cubic-bezier(0.4, 0.0, 0.2, 1)
                </span>
              </div>
              
              <p className="text-muted-foreground mb-4">
                {activeTransition === 'forward' 
                  ? 'Forward navigation animates content from right to left, creating a sense of progression through the application\'s information hierarchy. The transition is slightly longer (300ms) to emphasize the importance of moving to new content.'
                  : activeTransition === 'backward'
                  ? 'Backward navigation animates content from left to right, reinforcing the spatial model of returning to previously viewed content. The transition is slightly quicker (200ms) to make returns feel more responsive and immediate.'
                  : activeTransition === 'modal'
                  ? 'Modal presentations slide up from the bottom with a backdrop that fades in to create hierarchy. This pattern establishes that the modal content is layered on top of the existing screen and requires attention before returning.'
                  : 'Bottom sheets slide up from the bottom edge of the screen while maintaining the context of the underlying content. They\'re often used for quick actions or supplementary information without a full context switch.'}
              </p>

              <h5 className="font-medium mb-2">Motion Properties</h5>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
                {activeTransition === 'forward' ? (
                  <>
                    <li>New content enters from 30px to the right</li>
                    <li>Current content exits 30px to the left</li>
                    <li>Both entrance and exit have opacity fade</li>
                    <li>Creates clear directional flow</li>
                  </>
                ) : activeTransition === 'backward' ? (
                  <>
                    <li>New content enters from 30px to the left</li>
                    <li>Current content exits 30px to the right</li>
                    <li>Both entrance and exit have opacity fade</li>
                    <li>Faster than forward transition (200ms)</li>
                  </>
                ) : activeTransition === 'modal' ? (
                  <>
                    <li>Modal enters from 30px below final position</li>
                    <li>Semi-transparent backdrop fades in</li>
                    <li>Exit animation mirrors entrance</li>
                    <li>User can tap backdrop to dismiss</li>
                  </>
                ) : (
                  <>
                    <li>Sheet slides up from bottom of screen</li>
                    <li>Uses transform: translateY for performance</li>
                    <li>Semi-transparent backdrop fades in</li>
                    <li>Can support snap points for partial states</li>
                  </>
                )}
              </ul>

              <h5 className="font-medium mb-2">When to Use</h5>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {activeTransition === 'forward' ? (
                  <>
                    <li>Moving deeper into a content hierarchy</li>
                    <li>Navigating from list view to detail view</li>
                    <li>Advancing through a sequential process</li>
                    <li>Moving from general to specific information</li>
                  </>
                ) : activeTransition === 'backward' ? (
                  <>
                    <li>Returning to a previous screen</li>
                    <li>Moving from detail view back to list view</li>
                    <li>Canceling an action or process</li>
                    <li>Navigating "up" in an information hierarchy</li>
                  </>
                ) : activeTransition === 'modal' ? (
                  <>
                    <li>Presenting important information that needs attention</li>
                    <li>Creating forms that must be completed or dismissed</li>
                    <li>Showing confirmation dialogs</li>
                    <li>Presenting content that's contextually separate</li>
                  </>
                ) : (
                  <>
                    <li>Providing quick actions without full context switch</li>
                    <li>Showing supplementary information</li>
                    <li>Creating action menus</li>
                    <li>Displaying options related to current content</li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}