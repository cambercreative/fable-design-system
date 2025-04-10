"use client";

import React from 'react';
import { CodePlayground, ResponsivePreviewPlayground } from '@/components/code-playground';
import { Button } from '@/components/ui/button';
import PageWrapper from '@/components/page-wrapper';

// Define sample component props for demonstration
const buttonProperties = [
  {
    type: 'select',
    label: 'Variant',
    options: ['primary', 'secondary', 'tertiary', 'icon'],
    defaultValue: 'primary',
    prop: 'variant'
  },
  {
    type: 'select',
    label: 'Size',
    options: ['default', 'sm', 'lg', 'icon'],
    defaultValue: 'default',
    prop: 'size'
  },
  {
    type: 'string',
    label: 'Label',
    defaultValue: 'Click me',
    prop: 'children'
  },
  {
    type: 'boolean',
    label: 'Disabled',
    defaultValue: false,
    prop: 'disabled'
  },
  {
    type: 'boolean',
    label: 'Full Width',
    defaultValue: false,
    prop: 'fullWidth'
  }
];

// Sample default code
const buttonDefaultCode = `<Button
  variant="primary"
  size="default"
  disabled={false}
  fullWidth={false}
>
  Click me
</Button>`;

export default function CodePlaygroundDemo() {
  // Sample custom button component that accepts the props we want to manipulate
  const ButtonComponent = (props: any) => {
    return <Button {...props}>{props.children || 'Button'}</Button>;
  };

  return (
    <PageWrapper
      title="Code Playground"
      description="Interactive component explorer with adjustable properties and code generation"
    >
      <div className="space-y-xl">
        <div>
          <h2 className="text-title-1 font-faro mb-m">Basic Code Playground</h2>
          <p className="text-body font-atkinson mb-l text-text-secondary">
            The Code Playground allows developers and designers to interactively explore components by adjusting their properties and seeing the changes in real-time. It also generates the corresponding code for any configuration.
          </p>
        
          <CodePlayground
            component={ButtonComponent}
            componentName="Button"
            properties={buttonProperties}
            defaultCode={buttonDefaultCode}
            description="Try adjusting the properties of the Button component and see how it affects both the appearance and the generated code."
          />
        </div>

        <div>
          <h2 className="text-title-1 font-faro mb-m">Responsive Preview Playground</h2>
          <p className="text-body font-atkinson mb-l text-text-secondary">
            The Responsive Preview Playground extends the basic playground with device simulation, allowing you to see how components behave across different screen sizes and orientations.
          </p>
          
          <ResponsivePreviewPlayground
            component={ButtonComponent}
            componentName="Button"
            properties={buttonProperties}
            defaultCode={buttonDefaultCode}
            description="Explore the Button component across different property configurations."
            responsiveDescription="Check how the Button component responds to different device sizes and orientations. This is especially useful for testing responsive behavior."
          >
            <div className="mt-m">
              <h3 className="text-headline font-faro mb-s">Button Usage Guidelines</h3>
              <ul className="list-disc list-inside space-y-xs text-body font-atkinson text-text-secondary">
                <li>Use Primary buttons for main actions</li>
                <li>Secondary buttons are for alternative actions</li>
                <li>Tertiary buttons are for less important actions</li>
                <li>Icon buttons are used for actions where the icon clearly communicates the purpose</li>
                <li>Full width buttons are useful in mobile interfaces or to emphasize important actions</li>
              </ul>
            </div>
          </ResponsivePreviewPlayground>
        </div>

        <div>
          <h2 className="text-title-1 font-faro mb-m">Implementation Notes</h2>
          <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-l">
            <p className="text-body font-atkinson mb-m">The Code Playground is built with the following features:</p>
            <ul className="list-disc list-inside space-y-xs text-body font-atkinson text-text-secondary">
              <li>Interactive property controls for all component props</li>
              <li>Real-time preview of the component with current props</li>
              <li>Syntax-highlighted code generation</li>
              <li>Responsive device preview with orientation toggle</li>
              <li>Copy-to-clipboard functionality for generated code</li>
              <li>Dark mode support following the Fable design system</li>
              <li>Accessible controls with proper labeling and keyboard support</li>
            </ul>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}