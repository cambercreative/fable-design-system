import React from 'react';

/**
 * TypographyToken Component
 * Displays a typography token with a preview and details
 * 
 * @param {Object} props - Component props
 * @param {Object} props.token - Token object with class and other typography properties
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.previewText - Text to display in the preview (optional)
 */
const TypographyToken = ({ token, className = "", previewText }) => {
  const displayText = previewText || token.name;
  
  return (
    <div className={`rounded-s border border-border overflow-hidden ${className}`}>
      <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary">
        <span className={token.class || ''}>
          {displayText}
        </span>
      </div>
      <div className="p-m space-y-1">
        <h4 className="text-lg font-bold font-faro">{token.name}</h4>
        <div className="grid grid-cols-2 gap-2 text-sm">
          {token.fontFamily && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Font:</span>
              <span>{token.fontFamily}</span>
            </React.Fragment>
          )}
          {token.fontSize && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Size:</span>
              <span>{token.fontSize}</span>
            </React.Fragment>
          )}
          {token.lineHeight && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Line Height:</span>
              <span>{token.lineHeight}</span>
            </React.Fragment>
          )}
          {token.fontWeight && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Weight:</span>
              <span>{token.fontWeight}</span>
            </React.Fragment>
          )}
          {token.usage && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Usage:</span>
              <span>{token.usage}</span>
            </React.Fragment>
          )}
          {token.variable && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Variable:</span>
              <code className="font-mono text-xs">{token.variable}</code>
            </React.Fragment>
          )}
          {token.class && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Class:</span>
              <code className="font-mono text-xs">{token.class}</code>
            </React.Fragment>
          )}
          {token.tailwind && (
            <React.Fragment>
              <span className="text-text-secondary dark:text-dark-text-secondary">Tailwind:</span>
              <code className="font-mono text-xs">{token.tailwind}</code>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypographyToken;
