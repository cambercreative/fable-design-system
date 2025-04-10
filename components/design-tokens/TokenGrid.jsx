import React from 'react';

/**
 * TokenGrid Component
 * Displays design tokens in a responsive grid format
 * 
 * @param {Object} props - Component props
 * @param {Array} props.tokens - Array of token objects to display
 * @param {Function} props.renderItem - Function to render individual token items
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.columns - Number of columns for desktop (defaults to 3)
 */
const TokenGrid = ({ 
  tokens, 
  renderItem, 
  className = "", 
  columns = 3
}) => {
  const gridClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
  };

  const gridClass = gridClasses[columns] || gridClasses[3];

  return (
    <div className={`grid ${gridClass} gap-m mb-l ${className}`}>
      {tokens.map((token, index) => (
        <div key={index}>
          {renderItem(token, index)}
        </div>
      ))}
    </div>
  );
};

export default TokenGrid;
