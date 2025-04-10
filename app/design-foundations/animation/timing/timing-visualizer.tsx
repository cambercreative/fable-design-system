'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const timingOptions = [
  { name: 'timing-instant', duration: 0, ease: 'linear', label: 'Instant (0ms)' },
  { name: 'timing-quick', duration: 0.1, ease: 'easeOut', label: 'Quick (100ms)' },
  { name: 'timing-standard', duration: 0.2, ease: 'easeInOut', label: 'Standard (200ms)' },
  { name: 'timing-relaxed', duration: 0.3, ease: 'easeInOut', label: 'Relaxed (300ms)' },
  { name: 'timing-elaborate', duration: 0.5, ease: [0.65, 0, 0.35, 1], label: 'Elaborate (500ms)' },
];

const TimingVisualizer = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Default to standard timing
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    // Reset animation after it completes
    setTimeout(() => {
      setIsPlaying(false);
    }, timingOptions[activeIndex].duration * 1000 + 100);
  };

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="font-display text-xl font-medium mb-2">Duration Comparison</h3>
        <p className="text-muted-foreground">
          Compare how different timing tokens affect the perception of movement.
        </p>
      </div>

      <div className="relative h-32 bg-muted flex items-center px-6">
        <motion.div
          className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center font-medium text-primary-foreground"
          animate={isPlaying ? { x: 'calc(100vw - 15rem)' } : { x: 0 }}
          transition={{
            duration: timingOptions[activeIndex].duration,
            ease: timingOptions[activeIndex].ease,
          }}
        >
          {timingOptions[activeIndex].duration * 1000}ms
        </motion.div>
      </div>

      <div className="p-6 grid grid-cols-1 gap-4">
        <div className="flex flex-wrap gap-2">
          {timingOptions.map((option, index) => (
            <button
              key={option.name}
              onClick={() => setActiveIndex(index)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                activeIndex === index
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted hover:bg-muted/80'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-sm mr-2 text-muted-foreground">Easing:</span>
            <span className="font-mono text-sm">
              {typeof timingOptions[activeIndex].ease === 'string'
                ? timingOptions[activeIndex].ease
                : `cubic-bezier(${timingOptions[activeIndex].ease.join(', ')})`}
            </span>
          </div>
          <button
            onClick={handlePlay}
            disabled={isPlaying}
            className={`px-4 py-2 rounded bg-primary text-primary-foreground ${
              isPlaying ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
            }`}
          >
            Play Animation
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimingVisualizer;