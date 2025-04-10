'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useReducedMotion } from "framer-motion";

export function CardAnimations() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion || prefersReducedMotion;
  
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
          <h3 className="font-display text-xl font-medium mb-4">Story Card States</h3>
          <p className="mb-6 text-muted-foreground">
            Story cards use subtle elevation changes and scaling to indicate interactivity and selection states.
          </p>
          
          <div className="flex flex-col gap-8">
            <StoryCard 
              title="Default State" 
              state="default"
              reduceMotion={shouldReduceMotion}
              description="Basic appearance with standard elevation (elevation-2)"
              animationInfo="No animation in default state"
            />
            
            <StoryCard 
              title="Hover State" 
              state="hover"
              reduceMotion={shouldReduceMotion}
              description="Increased elevation and subtle scale effect"
              animationInfo="timing-standard (200ms) for shadow transition"
            />
            
            <StoryCard 
              title="Press State" 
              state="press"
              reduceMotion={shouldReduceMotion}
              description="Decreased elevation and scale effect"
              animationInfo="timing-quick (100ms) for press animation"
            />
            
            <StoryCard 
              title="Selected State" 
              state="selected"
              reduceMotion={shouldReduceMotion}
              description="Highlighted with brand color border"
              animationInfo="timing-standard (200ms) for selection indication"
            />
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Card Loading & Entrance</h3>
          <p className="mb-6 text-muted-foreground">
            Cards use staggered entrance animations when loading or appearing in lists, creating a natural flow.
          </p>
          
          <CardListAnimationDemo reduceMotion={shouldReduceMotion} />
          
          <div className="mt-8 pt-6 border-t border-border">
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Staggered card list animation
function CardList({ items }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={prefersReducedMotion ? { 
            opacity: 0 
          } : { 
            opacity: 0, 
            y: 20 
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: prefersReducedMotion ? 0 : index * 0.05,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        >
          <Card>
            <CardContent>
              {item.content}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-display text-xl font-medium mb-4">Memory Collection Card</h3>
        <p className="mb-6 text-muted-foreground">
          Memory collection cards feature additional animations, including progress indicators and content reveals.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <MemoryCollectionCard reduceMotion={shouldReduceMotion} />
            <div className="mt-4 text-sm text-muted-foreground">
              Click the card to trigger the expand/collapse animation.
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3">Animation Specifications</h4>
            <ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground mb-6">
              <li>Progress bar updates use <code>timing-standard (200ms)</code> with ease-in-out easing</li>
              <li>Content expansion uses <code>timing-relaxed (300ms)</code> to allow time for details to reveal naturally</li>
              <li>Badge appearance animations use <code>timing-quick (100ms)</code> with subtle bounce effect</li>
              <li>Hover state uses elevation change from elevation-2 to elevation-3 with <code>timing-standard (200ms)</code></li>
              <li>When in reduced motion mode, height animations are replaced with crossfade effects</li>
            </ul>
            
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Memory collection card with expand/collapse
function MemoryCard({ expanded, onToggle }) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <motion.div
      className="card"
      whileHover={prefersReducedMotion ? {} : { 
        y: -5,
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        transition: { duration: 0.2 }
      }}
      onClick={onToggle}
    >
      <div className="card-header">
        <h3>Summer Memories</h3>
        <Badge>3 Stories</Badge>
      </div>
      
      <motion.div
        initial: false
        animate={{ 
          height: expanded ? "auto" : "0px",
          opacity: expanded ? 1 : 0 
        }}
        transition={{ 
          duration: prefersReducedMotion ? 0.1 : 0.3,
          ease: [0.4, 0.0, 0.2, 1]
        }}
      >
        <div className="card-details">
          {/* Card details content */}
        </div>
      </motion.div>
      
      <div className="progress-container">
        <motion.div
          className="progress-bar"
          animate={{ width: \`\${progress}%\` }}
          transition={{ 
            duration: 0.2,
            ease: [0.4, 0.0, 0.2, 1]
          }}
        />
      </div>
    </motion.div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// Story Card Component
function StoryCard({ 
  title, 
  state, 
  description, 
  animationInfo,
  reduceMotion
}: { 
  title: string; 
  state: 'default' | 'hover' | 'press' | 'selected';
  description: string;
  animationInfo: string;
  reduceMotion: boolean;
}) {
  // Generate elevation styles based on state
  const getElevation = () => {
    switch (state) {
      case 'hover':
        return 'shadow-lg';
      case 'press':
        return 'shadow-sm';
      default:
        return 'shadow-md';
    }
  };
  
  // Generate scale value based on state
  const getScale = () => {
    if (reduceMotion) return 1;
    
    switch (state) {
      case 'hover':
        return 1.02;
      case 'press':
        return 0.98;
      default:
        return 1;
    }
  };
  
  // Generate border styles for selected state
  const getBorder = () => {
    return state === 'selected' ? 'border-primary border-2' : 'border-border';
  };
  
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-60 flex-shrink-0">
        <motion.div
          animate={{ 
            scale: getScale()
          }}
          transition={{ 
            duration: state === 'press' ? 0.1 : 0.2,
            ease: [0.4, 0.0, 0.2, 1]
          }}
          className={`${getElevation()} ${getBorder()} rounded-lg overflow-hidden`}
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-base">{title}</CardTitle>
                <span className="text-xs text-muted-foreground">Feb 12</span>
              </div>
              <CardDescription>Family vacation</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <p className="text-sm text-muted-foreground line-clamp-2">
                We spent the day at the beach building sandcastles and collecting seashells...
              </p>
            </CardContent>
            <CardFooter className="pt-0">
              <div className="flex justify-between items-center w-full">
                <Badge variant="outline" className="text-xs">Memories</Badge>
                <Button variant="ghost" size="sm" className="h-8 px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
      
      <div className="flex flex-col justify-center">
        <h4 className="text-base font-medium mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-xs text-muted-foreground">{animationInfo}</p>
      </div>
    </div>
  );
}

// Card List Animation Demo Component
function CardListAnimationDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [isLoading, setIsLoading] = useState(false);
  const [showCards, setShowCards] = useState(false);
  
  const handleLoad = () => {
    setIsLoading(true);
    setShowCards(false);
    
    setTimeout(() => {
      setIsLoading(false);
      setShowCards(true);
    }, 1500);
  };
  
  const resetDemo = () => {
    setShowCards(false);
  };
  
  return (
    <div>
      <div className="flex gap-3 mb-4">
        <Button onClick={handleLoad} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load Cards'}
        </Button>
        {showCards && (
          <Button variant="outline" onClick={resetDemo}>
            Reset
          </Button>
        )}
      </div>
      
      <div className="border border-border rounded-lg p-4 bg-background min-h-[320px]">
        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-20 bg-muted animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : showCards ? (
          <div className="space-y-4">
            {[
              { id: 1, title: "Weekend Trip", date: "Mar 15" },
              { id: 2, title: "Birthday Party", date: "Feb 28" },
              { id: 3, title: "Family Dinner", date: "Feb 10" }
            ].map((item, index) => (
              <motion.div
                key={item.id}
                initial={reduceMotion ? { 
                  opacity: 0 
                } : { 
                  opacity: 0, 
                  y: 20 
                }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.2,
                  delay: reduceMotion ? 0 : index * 0.05,
                  ease: [0.4, 0.0, 0.2, 1]
                }}
              >
                <Card>
                  <CardHeader className="p-4">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-base">{item.title}</CardTitle>
                      <span className="text-xs text-muted-foreground">{item.date}</span>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-muted-foreground">
            Click "Load Cards" to see animation
          </div>
        )}
      </div>
      
      <div className="mt-4 space-y-2">
        <p className="text-sm text-muted-foreground">
          <strong>Staggered Entry:</strong> Each card appears with a 50ms delay after the previous one.
        </p>
        <p className="text-sm text-muted-foreground">
          <strong>Motion:</strong> Cards fade in and move up slightly (disabled in reduced motion mode).
        </p>
      </div>
    </div>
  );
}

// Memory Collection Card Component
function MemoryCollectionCard({ reduceMotion }: { reduceMotion: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [progress, setProgress] = useState(65);
  
  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  
  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
  };
  
  return (
    <div className="space-y-4">
      <motion.div
        className={`border rounded-lg overflow-hidden ${expanded ? 'border-primary' : 'border-border'}`}
        whileHover={reduceMotion ? {} : { 
          y: -5,
          boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          transition: { duration: 0.2 }
        }}
      >
        <div 
          className="bg-card cursor-pointer"
          onClick={toggleExpand}
        >
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium">Summer Memories</h4>
              <Badge variant="outline" className="text-xs">Collection</Badge>
            </div>
            
            <div className="text-sm text-muted-foreground mb-3">
              A collection of beach trips and family outings from summer 2023.
            </div>
            
            <div className="flex justify-between items-center text-xs text-muted-foreground mb-1">
              <span>65% Complete</span>
              <span>3 of 5 stories</span>
            </div>
            
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#FF3300] to-[#FFB800] rounded-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
              />
            </div>
          </div>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                animate={reduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                transition={{ duration: reduceMotion ? 0.1 : 0.3, ease: [0.4, 0.0, 0.2, 1] }}
              >
                <div className="px-4 pb-4 pt-2 border-t border-border">
                  <h5 className="font-medium mb-3">Included Stories</h5>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      Beach Day at Santa Monica
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      Fourth of July BBQ
                    </li>
                    <li className="flex items-center text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                      Camping Trip
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                      Family Reunion (In Progress)
                    </li>
                    <li className="flex items-center text-sm text-muted-foreground">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4"></path>
                        <path d="M12 16h.01"></path>
                      </svg>
                      Road Trip (Not Started)
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <Button onClick={incrementProgress} disabled={progress >= 100}>
        Increment Progress
      </Button>
    </div>
  );
}