import React, { useState } from 'react';

/**
 * MotionToken Component
 * Displays a motion/animation token with a visual representation and details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with name, value, variable, and other properties
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.type - Type of motion token (duration, easing, transition)
 */
const MotionToken = ({ token, className = "", type = "duration" }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000); // Reset after animation completes
  };
  
  // Different demo styles based on token type
  let demoElement;
  
  if (type === "transition") {
    demoElement = (
      <div className="mb-m flex justify-center">
        <div 
          className={`w-16 h-16 bg-fable-red dark:bg-fable-amber rounded-s ${isAnimating ? token.class : ''}`}
          style={{ 
            transform: isAnimating ? 'translateX(100px)' : 'translateX(0)',
          }}
        ></div>
      </div>
    );
  } else if (type === "duration") {
    demoElement = (
      <div className="mb-m flex justify-center">
        <div 
          className="w-16 h-16 bg-fable-red dark:bg-fable-amber rounded-s transition-all"
          style={{ 
            transform: isAnimating ? 'translateX(100px)' : 'translateX(0)',
            transitionDuration: token.value
          }}
        ></div>
      </div>
    );
  } else if (type === "easing") {
    demoElement = (
      <div className="mb-m flex justify-center">
        <div 
          className="w-16 h-16 bg-fable-red dark:bg-fable-amber rounded-s transition-all duration-500"
          style={{ 
            transform: isAnimating ? 'translateX(100px)' : 'translateX(0)',
            transitionTimingFunction: token.value
          }}
        ></div>
      </div>
    );
  }
  
  return (
    <div className={`p-l border rounded-s border-border bg-surface-primary dark:bg-dark-surface-primary ${className}`}>
      {demoElement}
      <div>
        <h4 className="text-lg font-bold mb-xs">{token.name}</h4>
        {token.description && (
          <p className="text-sm mb-s text-text-secondary dark:text-dark-text-secondary">{token.description}</p>
        )}
        <div className="grid text-sm mb-m">
          <code className="text-xs font-mono mb-xs">{token.value}</code>
          {token.variable && <code className="text-xs font-mono mb-xs">{token.variable}</code>}
          {token.tailwind && (
            <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">
              {token.tailwind}
            </code>
          )}
          {token.class && (
            <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">
              {token.class}
            </code>
          )}
          {token.duration && (
            <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
              Duration: {token.duration}
            </span>
          )}
          {token.easing && (
            <span className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
              Easing: {token.easing}
            </span>
          )}
        </div>
        <button 
          onClick={triggerAnimation}
          className="px-m py-xs bg-surface-secondary dark:bg-dark-surface-secondary rounded-xs text-sm hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors"
        >
          Play Animation
        </button>
      </div>
    </div>
  );
};

export default MotionToken;
