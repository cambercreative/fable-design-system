/**
 * Design Token Code Examples
 * This file provides usage examples for Fable design tokens across different contexts
 */

export const cssExamples = {
  colors: `/* Using color tokens in CSS */
.button-primary {
  background-color: var(--color-fable-red);
  color: white;
}

.card {
  background-color: var(--color-surface-primary);
  border: 1px solid var(--color-border-default);
}

.alert-success {
  background-color: var(--color-status-success);
  color: white;
}

/* Using theme tokens that adapt to light/dark mode */
.content-area {
  background-color: var(--color-surface-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-default);
}

/* Using gradients */
.featured-banner {
  background: var(--gradient-primary);
}`,

  typography: `/* Using typography tokens in CSS */
.page-title {
  font-family: var(--font-family-faro);
  font-size: var(--font-size-display);
  line-height: var(--line-height-display);
  font-weight: var(--font-weight-bold);
}

.card-title {
  font-family: var(--font-family-faro);
  font-size: var(--font-size-title-2);
  line-height: var(--line-height-title-2);
  font-weight: var(--font-weight-bold);
}

.body-text {
  font-family: var(--font-family-atkinson);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  font-weight: var(--font-weight-regular);
}

/* Using typography utility classes */
.text-content {
  /* These utility classes set all typography properties */
  /* for the specific text style in a single class */
  &.display { @extend .text-display; }
  &.body { @extend .text-body; }
  &.caption { @extend .text-caption; }
}`,

  spacing: `/* Using spacing tokens in CSS */
.card {
  padding: var(--spacing-m);
  margin-bottom: var(--spacing-l);
}

.button {
  padding: var(--spacing-xs) var(--spacing-m);
}

.section {
  margin-top: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
}

.form-group {
  margin-bottom: var(--spacing-m);
}

.input {
  padding: var(--spacing-s);
  margin-bottom: var(--spacing-s);
}`,

  radius: `/* Using border radius tokens in CSS */
.button {
  border-radius: var(--radius-s);
}

.card {
  border-radius: var(--radius-m);
}

.avatar {
  border-radius: var(--radius-full);
}

.chip {
  border-radius: var(--radius-l);
}

.input {
  border-radius: var(--radius-xs);
}`,

  elevation: `/* Using elevation (shadow) tokens in CSS */
.card {
  box-shadow: var(--elevation-2);
}

.modal {
  box-shadow: var(--elevation-4);
}

.dropdown {
  box-shadow: var(--elevation-3);
}

.button:hover {
  box-shadow: var(--elevation-1);
}

.highlighted-content {
  box-shadow: var(--elevation-5);
}`,

  motion: `/* Using motion and animation tokens in CSS */
.button {
  transition: all var(--timing-quick) var(--easing-quick);
}

.modal {
  transition: opacity var(--timing-standard) var(--easing-standard),
              transform var(--timing-standard) var(--easing-standard);
}

.page-transition {
  transition: all var(--timing-relaxed) var(--easing-standard);
}

.celebration-animation {
  animation-duration: var(--timing-elaborate);
  animation-timing-function: var(--easing-elaborate);
}

/* Using the transition utility classes */
.button {
  @extend .transition-quick;
}

.page-content {
  @extend .transition-standard;
}`
};

export const tailwindExamples = {
  colors: `{/* Using color tokens with Tailwind classes */}
<button className="bg-fable-red text-white hover:bg-fable-amber">
  Primary Button
</button>

<div className="bg-surface-primary dark:bg-dark-surface-primary 
            text-text-primary dark:text-dark-text-primary
            border border-border-default dark:border-dark-border-default">
  Content that adapts to light/dark mode
</div>

<div className="bg-status-success text-white dark:bg-dark-status-success">
  Success message
</div>

<div className="border-l-4 border-l-warning bg-surface-secondary p-m">
  Warning message
</div>

{/* Using gradient utilities */}
<div className="gradient-primary-light dark:gradient-primary-dark text-white p-m">
  Gradient background that adapts to theme
</div>

<h1 className="text-gradient-primary font-bold">
  Gradient text heading
</h1>`,

  typography: `{/* Using typography tokens with Tailwind classes */}
<h1 className="font-faro text-display leading-display font-bold">
  Display Heading
</h1>

<h2 className="font-faro text-title-1 leading-title-1 font-bold">
  Title 1 Heading
</h2>

<p className="font-atkinson text-body leading-body font-regular">
  This is body text in our design system.
</p>

<span className="font-atkinson text-caption leading-caption font-regular">
  This is a caption.
</span>

{/* Using the typography utility classes */}
<h1 className="text-display">Display Heading</h1>
<p className="text-body">Body text</p>
<span className="text-caption">Caption text</span>`,

  spacing: `{/* Using spacing tokens with Tailwind classes */}
<div className="p-m mb-l">
  Card with medium padding and large bottom margin
</div>

<button className="px-m py-xs">
  Button with horizontal medium padding and vertical extra-small padding
</button>

<section className="my-xl">
  Section with extra-large vertical margins
</section>

<div className="grid gap-m">
  Grid with medium gaps between items
</div>

<div className="space-y-m">
  Stack with medium vertical spacing between children
</div>`,

  radius: `{/* Using border radius tokens with Tailwind classes */}
<button className="rounded-s">
  Button with small radius
</button>

<div className="rounded-m">
  Card with medium radius
</div>

<img className="rounded-full">
  Avatar with full radius (circle)
</img>

<span className="rounded-l">
  Chip with large radius
</span>

<input className="rounded-xs">
  Input with extra small radius
</input>`,

  elevation: `{/* Using elevation tokens with Tailwind classes */}
<div className="shadow-elevation-2">
  Card with elevation 2
</div>

<div className="shadow-elevation-4">
  Modal with elevation 4
</div>

<div className="shadow-elevation-3">
  Dropdown with elevation 3
</div>

<button className="hover:shadow-elevation-1">
  Button with hover elevation
</button>

<div className="shadow-elevation-5">
  Content with maximum elevation
</div>`,

  motion: `{/* Using motion tokens with Tailwind classes */}
<button className="duration-quick ease-quick transition-all">
  Button with quick transition
</button>

<div className="duration-standard ease-standard transition-all">
  Element with standard transition
</div>

<div className="duration-relaxed ease-standard transition-opacity">
  Element with relaxed transition
</div>

<div className="duration-elaborate ease-elaborate transition-transform">
  Element with elaborate transition
</div>

{/* Using the transition utility classes */}
<button className="transition-quick hover:bg-fable-red">
  Quick transition button
</button>

<div className="transition-standard hover:translate-x-2">
  Standard transition element 
</div>`
};

export const reactExamples = {
  themeToggle: `import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    // Check system preferences on load
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply theme class to html element
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);
  
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="p-s rounded-s bg-surface-secondary dark:bg-dark-surface-secondary 
                border border-border-default dark:border-dark-border-default
                transition-standard"
    >
      {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ThemeToggle;`,

  animatedButton: `import React, { useState } from 'react';

const AnimatedButton = ({ children, onClick }) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = () => {
    setIsPressed(true);
    onClick?.();
    
    // Reset animation state
    setTimeout(() => setIsPressed(false), 300);
  };
  
  return (
    <button 
      onClick={handleClick}
      className={\`
        px-m py-s rounded-s font-faro font-bold
        bg-fable-red text-white
        hover:shadow-elevation-2
        active:shadow-elevation-1
        transition-standard
        \${isPressed ? 'scale-95' : 'scale-100'}
      \`}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;`,

  responsiveCard: `import React from 'react';

const ResponsiveCard = ({ title, description, imageUrl }) => {
  return (
    <div className="
      bg-surface-primary dark:bg-dark-surface-primary
      text-text-primary dark:text-dark-text-primary
      border border-border-default dark:border-dark-border-default
      rounded-m shadow-elevation-2
      p-m md:p-l lg:p-xl
      transition-standard
      hover:shadow-elevation-3
    ">
      {imageUrl && (
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-s mb-m"
        />
      )}
      <h3 className="text-title-2 font-faro font-bold mb-s">{title}</h3>
      <p className="text-body font-atkinson">{description}</p>
    </div>
  );
};

export default ResponsiveCard;`
};
