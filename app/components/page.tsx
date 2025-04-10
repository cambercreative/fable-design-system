import React from 'react';
import PageWrapper from '@/components/page-wrapper';

export const metadata = {
  title: 'Components | Fable Design System',
  description: 'Core UI components for building Fable experiences',
}

export default function ComponentsPage() {
  return (
    <PageWrapper
      title="Components"
      description="Core UI components that form the building blocks of Fable's user interface, designed for consistency, accessibility, and usability."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-m">
        {/* Input Components */}
        <div className="col-span-full mb-l">
          <h2 className="text-title-2 font-faro font-bold mb-m">Input Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-m">
            <a 
              href="/components/button"
              className="block bg-surface-secondary p-m rounded-m shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-standard"
            >
              <h3 className="text-headline font-faro font-semibold mb-s">Button</h3>
              <p className="text-body font-atkinson text-text-secondary">Primary interactive element for user actions</p>
            </a>
            <a 
              href="/components/input"
              className="block bg-surface-secondary p-m rounded-m shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-standard"
            >
              <h3 className="text-headline font-faro font-semibold mb-s">Input Field</h3>
              <p className="text-body font-atkinson text-text-secondary">Text entry fields for collecting user input</p>
            </a>
            <a 
              href="/components/checkbox"
              className="block bg-surface-secondary p-m rounded-m shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-standard"
            >
              <h3 className="text-headline font-faro font-semibold mb-s">Checkbox</h3>
              <p className="text-body font-atkinson text-text-secondary">Selection control for binary or multiple choice options</p>
            </a>
            <a 
              href="/components/radio"
              className="block bg-surface-secondary p-m rounded-m shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-standard"
            >
              <h3 className="text-headline font-faro font-semibold mb-s">Radio Button</h3>
              <p className="text-body font-atkinson text-text-secondary">Selection control for single choice from a set</p>
            </a>
            <a 
              href="/components/toggle"
              className="block bg-surface-secondary p-m rounded-m shadow-elevation-2 hover:shadow-elevation-3 transition-all duration-standard"
            >
              <h3 className="text-headline font-faro font-semibold mb-s">Toggle</h3>
              <p className="text-body font-atkinson text-text-secondary">Binary switch for enabling/disabling settings</p>
            </a>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
