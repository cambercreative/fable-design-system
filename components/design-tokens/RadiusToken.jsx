import React from 'react';

/**
 * RadiusToken Component
 * Displays a border radius token with a visual representation and details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with name, value, variable, and tailwind properties
 * @param {string} props.className - Additional CSS classes
 */
const RadiusToken = ({ token, className = "" }) => {
  return (
    <div className={`flex items-center space-x-m p-s border rounded-s border-border ${className}`}>
      <div className="flex-shrink-0">
        <div 
          className="bg-surface-secondary dark:bg-dark-surface-secondary border border-primary"
          style={{ 
            width: '64px',
            height: '64px',
            borderRadius: token.value
          }}
        ></div>
      </div>
      <div>
        <h4 className="font-bold">{token.name}</h4>
        <div className="flex flex-col text-sm">
          <span>{token.value}</span>
          <code className="text-xs font-mono">{token.variable}</code>
          <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">
            {token.tailwind}
          </code>
        </div>
      </div>
    </div>
  );
};

export default RadiusToken;
