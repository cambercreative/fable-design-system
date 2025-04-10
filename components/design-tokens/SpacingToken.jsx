import React from 'react';

/**
 * SpacingToken Component
 * Displays a spacing token with a visual representation and details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with name, value, variable, and tailwind properties
 * @param {string} props.className - Additional CSS classes
 */
const SpacingToken = ({ token, className = "" }) => {
  // Extract the pixel value for display purposes
  const pixelValue = parseInt(token.value.replace('px', ''));
  
  return (
    <div className={`flex items-center space-x-m p-s border rounded-s border-border ${className}`}>
      <div className="flex-shrink-0">
        <div 
          className="bg-fable-red dark:bg-fable-amber rounded"
          style={{ 
            width: token.value === '0' ? '1px' : token.value,
            height: token.value === '0' ? '1px' : token.value,
            opacity: token.value === '0' ? 0.3 : 1
          }}
        ></div>
      </div>
      <div>
        <h4 className="font-bold">{token.name}</h4>
        <div className="flex flex-col text-sm">
          <span>{token.value}</span>
          <code className="text-xs font-mono">{token.variable}</code>
          <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">
            {token.tailwind ? `${token.tailwind}` : ''}
          </code>
        </div>
      </div>
    </div>
  );
};

export default SpacingToken;
