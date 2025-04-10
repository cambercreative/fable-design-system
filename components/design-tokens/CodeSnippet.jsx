"use client";

import React, { useState } from 'react';

/**
 * CodeSnippet Component
 * Displays a code snippet with syntax highlighting and copy functionality
 * 
 * @param {Object} props - Component props
 * @param {string} props.code - The code string to display
 * @param {string} props.language - Programming language for syntax highlighting (default: 'jsx')
 * @param {string} props.title - Optional title for the code snippet
 * @param {string} props.className - Additional CSS classes
 */
const CodeSnippet = ({ code, language = 'jsx', title, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-s overflow-hidden border border-border ${className}`}>
      {title && (
        <div className="p-s flex justify-between items-center bg-surface-secondary dark:bg-dark-surface-secondary border-b border-border">
          <span className="text-sm font-medium">{title}</span>
          <button 
            onClick={copyToClipboard}
            className="text-xs px-xs py-xs rounded hover:bg-surface-tertiary dark:hover:bg-dark-surface-tertiary transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      <pre className={`p-m overflow-auto bg-surface-tertiary dark:bg-dark-surface-tertiary text-sm font-mono`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeSnippet;