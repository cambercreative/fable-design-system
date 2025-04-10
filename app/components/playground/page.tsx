"use client";

import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import PageHeader from '@/components/page-header';
import EnhancedCodePlayground from '@/components/code-playground/enhanced-code-playground';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function CodePlaygroundDemo() {
  return (
    <PageWrapper>
      <PageHeader 
        title="Interactive Code Playground" 
        description="Explore Fable components with adjustable properties and states"
      />

      <div className="space-y-xl">
        <section>
          <h2 className="text-title-1 font-faro mb-l">Playground Exploration</h2>
          <p className="text-body font-atkinson text-text-secondary mb-l">
            The interactive code playground allows designers and developers to explore 
            component variants, states, and properties in real-time. Experiment with 
            different configurations and generate code for your specific use case.
          </p>

          <h3 className="text-title-2 font-faro mb-m">Button Component Example</h3>
          <EnhancedCodePlayground
            component={Button}
            componentName="Button"
            description="Buttons are interactive elements that trigger an action. They come in different variants, sizes and can include icons."
            defaultCode={`<Button
  variant="primary"
  size="default"
  disabled={false}
>
  Click me
</Button>`}
            importStatement={`import { Button } from "@/components/ui/button";`}
            properties={[
              {
                type: 'select',
                label: 'Variant',
                prop: 'variant',
                options: ['primary', 'secondary', 'tertiary', 'icon'],
                defaultValue: 'primary',
                description: 'Determines the visual style of the button'
              },
              {
                type: 'select',
                label: 'Size',
                prop: 'size',
                options: ['default', 'sm', 'lg', 'icon'],
                defaultValue: 'default',
                description: 'Sets the size of the button'
              },
              {
                type: 'boolean',
                label: 'Disabled',
                prop: 'disabled',
                defaultValue: false,
                description: 'Disables button interactions'
              },
              {
                type: 'boolean',
                label: 'Full Width',
                prop: 'fullWidth',
                defaultValue: false,
                description: 'Makes the button take up 100% width of its container'
              },
              {
                type: 'string',
                label: 'Children',
                prop: 'children',
                defaultValue: 'Click me',
                description: 'Text content of the button'
              }
            ]}
            stateVariants={[
              {
                name: 'primary',
                label: 'Primary',
                props: {
                  variant: 'primary',
                  size: 'default',
                  disabled: false,
                  children: 'Primary Button'
                }
              },
              {
                name: 'secondary',
                label: 'Secondary',
                props: {
                  variant: 'secondary',
                  size: 'default',
                  disabled: false,
                  children: 'Secondary Button'
                }
              },
              {
                name: 'tertiary',
                label: 'Tertiary',
                props: {
                  variant: 'tertiary',
                  size: 'default',
                  disabled: false,
                  children: 'Tertiary Button'
                }
              },
              {
                name: 'disabled',
                label: 'Disabled',
                props: {
                  variant: 'primary',
                  size: 'default',
                  disabled: true,
                  children: 'Disabled Button'
                }
              },
              {
                name: 'small',
                label: 'Small',
                props: {
                  variant: 'primary',
                  size: 'sm',
                  disabled: false,
                  children: 'Small Button'
                }
              },
              {
                name: 'large',
                label: 'Large',
                props: {
                  variant: 'primary',
                  size: 'lg',
                  disabled: false,
                  children: 'Large Button'
                }
              },
              {
                name: 'fullWidth',
                label: 'Full Width',
                props: {
                  variant: 'primary',
                  size: 'default',
                  disabled: false,
                  fullWidth: true,
                  children: 'Full Width Button'
                }
              }
            ]}
          />
          
          <h3 className="text-title-2 font-faro mt-xl mb-m">Card Component Example</h3>
          <EnhancedCodePlayground
            component={ExampleCard}
            componentName="Card"
            description="Cards are surfaces that display content and actions on a single topic. They typically contain content and actions about a single subject."
            defaultCode={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}
            importStatement={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";`}
            properties={[
              {
                type: 'string',
                label: 'Title',
                prop: 'title',
                defaultValue: 'Card Title',
                description: 'The main heading of the card'
              },
              {
                type: 'string',
                label: 'Description',
                prop: 'description',
                defaultValue: 'Card Description',
                description: 'Subtext that describes the card content'
              },
              {
                type: 'string',
                label: 'Content',
                prop: 'content',
                defaultValue: 'Card content goes here',
                description: 'Main content area of the card'
              },
              {
                type: 'boolean',
                label: 'Show Footer',
                prop: 'showFooter',
                defaultValue: true,
                description: 'Display the card footer with actions'
              },
              {
                type: 'select',
                label: 'Button Variant',
                prop: 'buttonVariant',
                options: ['primary', 'secondary', 'tertiary'],
                defaultValue: 'primary',
                description: 'Style of the footer button'
              }
            ]}
            stateVariants={[
              {
                name: 'standard',
                label: 'Standard',
                props: {
                  title: 'Card Title',
                  description: 'Card Description',
                  content: 'Card content goes here',
                  showFooter: true,
                  buttonVariant: 'primary'
                }
              },
              {
                name: 'minimal',
                label: 'Minimal',
                props: {
                  title: 'Minimal Card',
                  description: '',
                  content: 'A card with minimal elements',
                  showFooter: false,
                  buttonVariant: 'primary'
                }
              },
              {
                name: 'detailed',
                label: 'Detailed',
                props: {
                  title: 'Detailed Example Card',
                  description: 'This card contains more detailed information for the user',
                  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vivamus eget mauris ac justo aliquet condimentum.',
                  showFooter: true,
                  buttonVariant: 'secondary'
                }
              }
            ]}
          />
        </section>

        <section className="space-y-l">
          <h2 className="text-title-1 font-faro mb-l">Playground Features</h2>
          <Card>
            <CardContent className="p-l">
              <ul className="list-disc pl-l space-y-m">
                <li className="text-body font-atkinson">
                  <strong className="font-faro">Interactive property controls:</strong> Adjust component properties in real-time
                </li>
                <li className="text-body font-atkinson">
                  <strong className="font-faro">State variants:</strong> Quickly switch between predefined component states
                </li>
                <li className="text-body font-atkinson">
                  <strong className="font-faro">Responsive preview:</strong> Test components across different device sizes
                </li>
                <li className="text-body font-atkinson">
                  <strong className="font-faro">Code generation:</strong> View and copy the code for your configured component
                </li>
                <li className="text-body font-atkinson">
                  <strong className="font-faro">Full example toggle:</strong> View complete code examples with imports
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-l">
          <h2 className="text-title-1 font-faro mb-l">Implementation Instructions</h2>
          <p className="text-body font-atkinson text-text-secondary mb-l">
            To use the code playground in your component documentation, import the EnhancedCodePlayground 
            component and configure it with your component's properties, variants, and states.
          </p>
          
          <EnhancedCodePlayground
            component={() => <div />}
            componentName="EnhancedCodePlayground"
            description="Configuration for using the code playground in your documentation"
            defaultCode={`<EnhancedCodePlayground
  component={Button}
  componentName="Button"
  description="Component description"
  defaultCode={\`<Button variant="primary">Click me</Button>\`}
  importStatement={\`import { Button } from "@/components/ui/button";\`}
  properties={[
    {
      type: 'select',
      label: 'Variant',
      prop: 'variant',
      options: ['primary', 'secondary', 'tertiary'],
      defaultValue: 'primary',
      description: 'Determines the visual style of the button'
    },
    // Additional properties...
  ]}
  stateVariants={[
    {
      name: 'primary',
      label: 'Primary',
      props: {
        variant: 'primary',
        children: 'Primary Button'
      }
    },
    // Additional variants...
  ]}
/>`}
            properties={[]}
            responsivePreview={false}
          />
        </section>
      </div>
    </PageWrapper>
  );
}

// Sample card component for the playground
function ExampleCard({
  title = 'Card Title',
  description = 'Card Description',
  content = 'Card content goes here',
  showFooter = true,
  buttonVariant = 'primary'
}) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="text-body font-atkinson">{content}</p>
      </CardContent>
      {showFooter && (
        <CardFooter>
          <Button variant={buttonVariant}>Action</Button>
        </CardFooter>
      )}
    </Card>
  );
}
