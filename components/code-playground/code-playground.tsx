"use client";

import React, { useState, useEffect, ChangeEvent } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clipboard, Check, EyeIcon, Code as CodeIcon } from 'lucide-react';
import { Highlight, themes, Prism } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { generateComponentCode } from './code-generator';

/**
 * Defines the structure of a property control in the playground
 */
export interface PropertyControl {
  /**
   * The type of control to render
   */
  type: 'select' | 'boolean' | 'string' | 'number' | 'color';
  
  /**
   * Display label for the control
   */
  label: string;
  
  /**
   * The property name in the component
   */
  prop: string;
  
  /**
   * Options for select controls
   */
  options?: string[];
  
  /**
   * Default value for the control
   */
  defaultValue: any;
  
  /**
   * Optional description of the property
   */
  description?: string;
  
  /**
   * Whether the control is disabled
   */
  disabled?: boolean;
}

/**
 * Props for the CodePlayground component
 */
export interface CodePlaygroundProps {
  /**
   * The React component to render in the playground
   */
  component: React.ComponentType<any>;
  
  /**
   * The name of the component
   */
  componentName: string;
  
  /**
   * Array of property controls for the component
   */
  properties: PropertyControl[];
  
  /**
   * Default code to show in the code tab
   */
  defaultCode: string;
  
  /**
   * Optional description of the component
   */
  description?: string;
  
  /**
   * Optional child elements to render below the component preview
   */
  children?: React.ReactNode;
}

/**
 * Code playground component that provides interactive property controls
 * for a component and displays both a preview and code view.
 */
export default function CodePlayground({
  component: Component,
  componentName,
  properties,
  defaultCode,
  description,
  children,
}: CodePlaygroundProps): React.ReactElement {
  // Initialize props from defaultValues
  const initialProps = properties.reduce<Record<string, any>>((acc, property) => {
    acc[property.prop] = property.defaultValue;
    return acc;
  }, {});

  const [props, setProps] = useState<Record<string, any>>(initialProps);
  const [generatedCode, setGeneratedCode] = useState<string>(defaultCode);
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState<boolean>(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Generate code based on current props
  useEffect(() => {
    // Generate component code using the utility function
    const code = generateComponentCode(componentName, props);
    setGeneratedCode(code);
  }, [props, componentName]);

  /**
   * Handle property changes
   * 
   * @param prop - The property name to update
   * @param value - The new value for the property
   */
  const handlePropertyChange = (prop: string, value: any): void => {
    setProps((prevProps) => ({
      ...prevProps,
      [prop]: value,
    }));
  };

  /**
   * Copy code to clipboard
   */
  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  /**
   * Handle select input change
   * 
   * @param e - The change event
   * @param prop - The property name
   */
  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>, prop: string): void => {
    handlePropertyChange(prop, e.target.value);
  };

  /**
   * Handle checkbox input change
   * 
   * @param e - The change event
   * @param prop - The property name
   */
  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>, prop: string): void => {
    handlePropertyChange(prop, e.target.checked);
  };

  /**
   * Handle text input change
   * 
   * @param e - The change event
   * @param prop - The property name
   */
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>, prop: string): void => {
    handlePropertyChange(prop, e.target.value);
  };

  /**
   * Handle number input change
   * 
   * @param e - The change event
   * @param prop - The property name
   */
  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>, prop: string): void => {
    handlePropertyChange(prop, Number(e.target.value));
  };

  return (
    <Card className="mb-xl border-border-default dark:border-border-default bg-surface-primary dark:bg-surface-primary">
      <CardContent className="p-0">
        {/* Tabs for Preview and Code */}
        <Tabs 
          defaultValue="preview" 
          onValueChange={(value) => setActiveTab(value as 'preview' | 'code')}
          className="w-full"
        >
          <div className="flex items-center justify-between px-l py-m border-b border-border-default dark:border-border-default">
            <h3 className="text-headline font-faro">{componentName} Playground</h3>
            <TabsList>
              <TabsTrigger value="preview" className="flex items-center gap-s">
                <EyeIcon className="h-4 w-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="code" className="flex items-center gap-s">
                <CodeIcon className="h-4 w-4" />
                Code
              </TabsTrigger>
            </TabsList>
          </div>
          
          <div className="p-l">
            {description && (
              <p className="mb-l text-body font-atkinson text-text-secondary dark:text-text-secondary">
                {description}
              </p>
            )}
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-l">
              {/* Controls Panel */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-m">
                  <h4 className="text-headline font-faro mb-m">Properties</h4>
                  <div className="space-y-m">
                    {properties.map((property) => (
                      <div key={property.prop} className="space-y-xs">
                        <label className="flex items-center justify-between">
                          <span className="text-caption font-atkinson font-medium">{property.label}</span>
                        </label>
                        
                        {property.type === 'select' && property.options && (
                          <select
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                            value={props[property.prop] || ''}
                            onChange={(e) => handleSelectChange(e, property.prop)}
                            disabled={property.disabled}
                          >
                            {property.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        
                        {property.type === 'boolean' && (
                          <div className="flex items-center space-x-s">
                            <input
                              type="checkbox"
                              id={`prop-${property.prop}`}
                              checked={!!props[property.prop]}
                              onChange={(e) => handleCheckboxChange(e, property.prop)}
                              className="rounded-s border-border-default"
                              disabled={property.disabled}
                            />
                            <label htmlFor={`prop-${property.prop}`} className="text-caption font-atkinson">
                              {props[property.prop] ? 'True' : 'False'}
                            </label>
                          </div>
                        )}
                        
                        {property.type === 'string' && (
                          <input
                            type="text"
                            value={props[property.prop] || ''}
                            onChange={(e) => handleTextChange(e, property.prop)}
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                            disabled={property.disabled}
                          />
                        )}
                        
                        {property.type === 'number' && (
                          <input
                            type="number"
                            value={props[property.prop] || 0}
                            onChange={(e) => handleNumberChange(e, property.prop)}
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                            disabled={property.disabled}
                          />
                        )}
                        
                        {property.type === 'color' && (
                          <div className="flex space-x-s">
                            <input
                              type="color"
                              value={props[property.prop] || '#000000'}
                              onChange={(e) => handleTextChange(e, property.prop)}
                              className="h-8 w-8 rounded-s border border-border-default"
                              disabled={property.disabled}
                            />
                            <input
                              type="text"
                              value={props[property.prop] || ''}
                              onChange={(e) => handleTextChange(e, property.prop)}
                              className="flex-1 rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                              disabled={property.disabled}
                            />
                          </div>
                        )}
                        
                        {property.description && (
                          <p className="text-xs text-text-tertiary font-atkinson">
                            {property.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Preview/Code Panel */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                <TabsContent value="preview" className="mt-0 space-y-l">
                  <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-l flex items-center justify-center min-h-[200px]">
                    <Component {...props} />
                  </div>
                  
                  {children && (
                    <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-l">
                      {children}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="code" className="mt-0">
                  <div className="relative bg-surface-secondary dark:bg-surface-secondary rounded-m overflow-hidden">
                    <Button
                      variant="icon"
                      size="sm"
                      onClick={copyToClipboard}
                      className="absolute top-2 right-2 z-10"
                      aria-label="Copy code"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    </Button>
                    
                    <Highlight
                      theme={isDark ? themes.nightOwl : themes.nightOwlLight}
                      code={generatedCode}
                      language="jsx"
                    >
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={`${className} p-4 overflow-auto rounded-m`} style={style}>
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              <span className="inline-block w-8 text-right mr-4 text-gray-500 select-none">
                                {i + 1}
                              </span>
                              {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                              ))}
                            </div>
                          ))}
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </TabsContent>
              </div>
            </div>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
