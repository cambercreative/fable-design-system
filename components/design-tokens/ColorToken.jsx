import React from 'react';

/**
 * ColorToken Component
 * Displays a color token with a preview, name, and value
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with name, value, variable, and tailwind properties
 * @param {string} props.className - Additional CSS classes
 */
const ColorToken = ({ token, className = "" }) => {
  // Determine if the color is a gradient
  const isGradient = token.value.includes('gradient');

  // Determine if we need light text based on background color darkness
  const needsLightText = isGradient || 
    token.value === '#000000' || 
    token.value === '#1A1A1A' || 
    token.value === '#2A2A2A' ||
    token.value === '#3A3A3A' ||
    token.value === '#404040' ||
    token.value === '#1E4D78' ||
    token.value === '#2D7D6F' ||
    token.value === '#5B267B' ||
    token.value === '#1A5FB4';

  return (
    <div className={`rounded-s border border-border overflow-hidden ${className}`}>
      <div 
        className={`h-24 flex items-center justify-center ${isGradient ? token.class : ''}`}
        style={!isGradient ? { backgroundColor: token.value } : {}}
      >
        <code className={`text-sm px-2 py-1 rounded bg-opacity-20 ${needsLightText ? 'text-white bg-black' : 'text-black bg-white'}`}>
          {token.value}
        </code>
      </div>
      <div className="p-m space-y-1 bg-surface-secondary dark:bg-dark-surface-secondary">
        <h4 className="text-lg font-bold font-faro">{token.name}</h4>
        <div className="flex flex-col text-sm">
          <code className="font-mono">{token.variable}</code>
          {token.tailwind && (
            <code className="font-mono text-text-tertiary dark:text-dark-text-tertiary">{`${token.tailwind}`}</code>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorToken;
