import React from 'react';

/**
 * ElevationToken Component
 * Displays an elevation/shadow token with a visual representation and details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with name, value, variable, tailwind, and description properties
 * @param {string} props.className - Additional CSS classes
 */
const ElevationToken = ({ token, className = "" }) => {
  return (
    <div className={`p-l border rounded-s border-border bg-surface-primary dark:bg-dark-surface-primary ${className}`}>
      <div className="mb-m flex justify-center">
        <div 
          className="w-32 h-32 bg-surface-secondary dark:bg-dark-surface-secondary rounded-s"
          style={{ 
            boxShadow: token.value
          }}
        ></div>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-xs">{token.name}</h4>
        {token.description && (
          <p className="text-sm mb-s text-text-secondary dark:text-dark-text-secondary">{token.description}</p>
        )}
        <div className="grid text-sm">
          <code className="text-xs font-mono mb-xs">
            {token.value !== 'none' ? token.value : 'none'}
          </code>
          <code className="text-xs font-mono mb-xs">{token.variable}</code>
          <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">
            {token.tailwind}
          </code>
        </div>
      </div>
    </div>
  );
};

export default ElevationToken;
