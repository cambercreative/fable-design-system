'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const easingOptions = [
  { name: 'linear', value: 'linear', bezier: [0, 0, 1, 1] },
  { name: 'ease', value: 'ease', bezier: [0.25, 0.1, 0.25, 1] },
  { name: 'ease-in', value: 'easeIn', bezier: [0.42, 0, 1, 1] },
  { name: 'ease-out', value: 'easeOut', bezier: [0, 0, 0.58, 1] },
  { name: 'ease-in-out', value: 'easeInOut', bezier: [0.42, 0, 0.58, 1] },
  { name: 'ease-in-out-cubic', value: [0.65, 0, 0.35, 1], bezier: [0.65, 0, 0.35, 1] },
  { name: 'bounce-subtle', value: [0.3, 1.05, 0.5, 1.05], bezier: [0.3, 1.05, 0.5, 1.05] },
];

const EasingCurves = () => {
  const [activeEasing, setActiveEasing] = useState(easingOptions[4]); // Default to ease-in-out
  const [isPlaying, setIsPlaying] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(0);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      setCanvasWidth(canvasRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (canvasRef.current) {
        setCanvasWidth(canvasRef.current.offsetWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    // Reset animation after it completes
    setTimeout(() => {
      setIsPlaying(false);
    }, 1000);
  };

  // Generate SVG path for easing curve
  const generatePath = (bezier: number[]) => {
    const [x1, y1, x2, y2] = bezier;
    return `M 0 200 C ${x1 * 200} ${(1 - y1) * 200}, ${x2 * 200} ${(1 - y2) * 200}, 200 0`;
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-display text-xl font-medium mb-2">Easing Curves</h3>
        <p className="text-muted-foreground">
          Visualize how different easing functions affect the acceleration and deceleration of animations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        {/* Curve visualization */}
        <div className="bg-muted rounded-lg p-4 aspect-square max-w-md mx-auto relative">
          <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="none">
            {/* Coordinate system */}
            <line x1="0" y1="200" x2="200" y2="200" stroke="#888" strokeWidth="1" />
            <line x1="0" y1="200" x2="0" y2="0" stroke="#888" strokeWidth="1" />
            
            {/* Curve */}
            <path
              d={generatePath(activeEasing.bezier)}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            
            {/* Time markers */}
            <text x="100" y="215" textAnchor="middle" fontSize="12" fill="#888">Time</text>
            <text x="-15" y="100" textAnchor="middle" fontSize="12" fill="#888" transform="rotate(-90 -15 100)">Progress</text>
          </svg>
          
          <div className="absolute left-0 bottom-4 transform -rotate-90 text-xs text-muted-foreground">Progress</div>
          <div className="absolute bottom-0 right-4 text-xs text-muted-foreground">Time</div>
          
          {/* Bezier values */}
          <div className="absolute top-2 left-2 bg-background/80 rounded p-2 text-xs font-mono">
            cubic-bezier({activeEasing.bezier.join(', ')})
          </div>
        </div>

        {/* Animation demonstration */}
        <div className="flex flex-col">
          <div ref={canvasRef} className="bg-muted rounded-lg h-32 relative overflow-hidden flex items-center">
            <motion.div
              className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center font-medium text-primary-foreground"
              animate={isPlaying ? { x: canvasWidth - 80 } : { x: 0 }}
              transition={{
                duration: 0.8,
                ease: activeEasing.value,
              }}
              style={{ x: 0 }}
            >
              {activeEasing.name}
            </motion.div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap gap-2">
              {easingOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={() => setActiveEasing(option)}
                  className={`px-3 py-1.5 rounded text-sm transition-colors ${
                    activeEasing.name === option.name
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
            
            <button
              onClick={handlePlay}
              disabled={isPlaying}
              className={`w-full px-4 py-2 rounded bg-primary text-primary-foreground ${
                isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
              }`}
            >
              Play Animation
            </button>
          </div>
        </div>
      </div>
      
      <div className="p-6 border-t border-border">
        <h4 className="font-medium mb-2">CSS Implementation</h4>
        <pre className="p-3 rounded bg-muted font-mono text-sm overflow-x-auto">
          {`transition: all 0.3s ${typeof activeEasing.value === 'string' 
            ? activeEasing.value
            : `cubic-bezier(${activeEasing.bezier.join(', ')})`};`}
        </pre>
      </div>
    </div>
  );
};

export default EasingCurves;