"use client";

import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clipboard, Check, EyeIcon, Code as CodeIcon } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { generateComponentCode, generateFullExample } from './code-generator';

interface PropertyControl {
  type: 'select' | 'boolean' | 'string' | 'number' | 'color';
  label: string;
  options?: string[];
  defaultValue: any;
  prop: string;
}

interface CodePlaygroundProps {
  component: React.ComponentType<any>;
  componentName: string;
  properties: PropertyControl[];
  defaultCode: string;
  description?: string;
  children?: React.ReactNode;
}

export default function CodePlayground({
  component: Component,
  componentName,
  properties,
  defaultCode,
  description,
  children
}: CodePlaygroundProps) {
  const [props, setProps] = useState<Record<string, any>>({});
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const { theme: appTheme } = useTheme();
  const isDark = appTheme === 'dark';

  // Initialize props with default values
  useEffect(() => {
    const initialProps = properties.reduce((acc, property) => {
      acc[property.prop] = property.defaultValue;
      return acc;
    }, {} as Record<string, any>);
    
    setProps(initialProps);
  }, [properties]);

  // Generate code based on current props
  useEffect(() => {
    // Generate component code using the utility function
    const code = generateComponentCode(componentName, props);
    setGeneratedCode(code);
  }, [props, componentName]);

  // Handle property change
  const handlePropertyChange = (prop: string, value: any) => {
    setProps((prevProps) => ({
      ...prevProps,
      [prop]: value
    }));
  };

  // Copy code to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
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
                        <label className="block text-caption font-atkinson">
                          {property.label}
                        </label>
                        
                        {property.type === 'select' && property.options && (
                          <select
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                            value={props[property.prop] || ''}
                            onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
                          >
                            {property.options.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                          </select>
                        )}
                        
                        {property.type === 'boolean' && (
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id={`prop-${property.prop}`}
                              checked={!!props[property.prop]}
                              onChange={(e) => handlePropertyChange(property.prop, e.target.checked)}
                              className="mr-s h-4 w-4 rounded-xs border-border-default bg-surface-tertiary"
                            />
                            <label htmlFor={`prop-${property.prop}`} className="text-caption font-atkinson">
                              Enabled
                            </label>
                          </div>
                        )}
                        
                        {property.type === 'string' && (
                          <input
                            type="text"
                            value={props[property.prop] || ''}
                            onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                          />
                        )}
                        
                        {property.type === 'number' && (
                          <input
                            type="number"
                            value={props[property.prop] || 0}
                            onChange={(e) => handlePropertyChange(property.prop, Number(e.target.value))}
                            className="w-full rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                          />
                        )}
                        
                        {property.type === 'color' && (
                          <div className="flex items-center gap-s">
                            <input
                              type="color"
                              value={props[property.prop] || '#FFFFFF'}
                              onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
                              className="h-8 w-8 rounded-xs cursor-pointer"
                            />
                            <input
                              type="text"
                              value={props[property.prop] || ''}
                              onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
                              className="flex-1 rounded-s border border-border-default bg-surface-tertiary dark:bg-surface-tertiary px-s py-xs text-caption font-atkinson"
                            />
                          </div>
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