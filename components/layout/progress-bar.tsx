'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const ProgressBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  // Show progress bar on navigation
  useEffect(() => {
    setIsAnimating(true);
    
    // Fast initial progress
    setProgress(30);
    
    const timer1 = setTimeout(() => {
      setProgress(50);
    }, 100);
    
    const timer2 = setTimeout(() => {
      setProgress(70);
    }, 200);
    
    const timer3 = setTimeout(() => {
      setProgress(90);
    }, 500);
    
    const timer4 = setTimeout(() => {
      setProgress(100);
    }, 600);
    
    const resetTimer = setTimeout(() => {
      setIsAnimating(false);
      setProgress(0);
    }, 750);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(resetTimer);
    };
  }, [pathname, searchParams]);
  
  if (!isAnimating && progress === 0) {
    return null;
  }
  
  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-1"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={progress}
      aria-label="Page loading progress"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-primary-light"
        style={{ width: `${progress}%` }}
        transition={{ ease: "easeOut" }}
      />
    </div>
  );
};

export default ProgressBar;