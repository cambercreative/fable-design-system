"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { 
  Clipboard, 
  Check, 
  EyeIcon, 
  Code as CodeIcon, 
  Layout, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Maximize, 
  Sliders
} from 'lucide-react';

// Define types for property controls and state variants
interface PropertyControl {
  type: 'select' | 'boolean' | 'string' | 'number' | 'color' | 'radio' | 'range';
  label: string;
  options?: string[] | { label: string; value: string }[];
  defaultValue: any;
  prop: string;
  min?: number;
  max?: number;
  step?: number;
  description?: string;
}

interface StateVariant {
  name: string;
  label: string;
  props: Record<string, any>;
}

interface DevicePreview {
  name: 'mobile-s' | 'mobile' | 'tablet' | 'desktop' | 'desktop-lg';
  label: string;
  width: number;
  icon: React.ReactNode;
}

interface CodePlaygroundProps {
  component: React.ComponentType<any>;
  componentName: string;
  properties: PropertyControl[];
  stateVariants?: StateVariant[];
  defaultCode: string;
  description?: string;
  importStatement?: string;
  children?: React.ReactNode;
  responsivePreview?: boolean;
}

export default function EnhancedCodePlayground({
  component: Component,
  componentName,
  properties,
  stateVariants = [],
  defaultCode,
  description,
  importStatement = '',
  children,
  responsivePreview = true
}: CodePlaygroundProps) {
  // State management
  const [props, setProps] = useState<Record<string, any>>({});
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'properties'>('preview');
  const [copied, setCopied] = useState(false);
  const [generatedCode, setGeneratedCode] = useState('');
  const [fullCode, setFullCode] = useState('');
  const [selectedVariant, setSelectedVariant] = useState<string>('default');
  const [selectedDevice, setSelectedDevice] = useState<DevicePreview['name']>('desktop');
  const [isCodeExpanded, setIsCodeExpanded] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  
  const { theme: appTheme } = useTheme();
  const isDark = appTheme === 'dark';

  // Available device previews
  const devices: DevicePreview[] = [
    { name: 'mobile-s', label: 'Mobile S', width: 320, icon: <Smartphone className="h-4 w-4" /> },
    { name: 'mobile', label: 'Mobile', width: 375, icon: <Smartphone className="h-4 w-4" /> },
    { name: 'tablet', label: 'Tablet', width: 768, icon: <Tablet className="h-4 w-4" /> },
    { name: 'desktop', label: 'Desktop', width: 1024, icon: <Monitor className="h-4 w-4" /> },
    { name: 'desktop-lg', label: 'Desktop L', width: 1440, icon: <Maximize className="h-4 w-4" /> }
  ];

  // Initialize props with default values
  useEffect(() => {
    const initialProps = properties.reduce((acc, property) => {
      acc[property.prop] = property.defaultValue;
      return acc;
    }, {} as Record<string, any>);
    
    setProps(initialProps);
  }, [properties]);

  // Update props when a state variant is selected
  useEffect(() => {
    if (selectedVariant === 'default') return;
    
    const variant = stateVariants.find(v => v.name === selectedVariant);
    if (variant) {
      setProps(prev => ({
        ...prev,
        ...variant.props
      }));
    }
  }, [selectedVariant, stateVariants]);

  // Generate code based on current props
  useEffect(() => {
    // Component JSX
    let code = `<${componentName}`;
    
    // Add props to the component
    Object.entries(props).forEach(([key, value]) => {
      if (typeof value === 'string') {
        code += `\n  ${key}="${value}"`;
      } else if (typeof value === 'boolean') {
        if (value) {
          code += `\n  ${key}`;
        }
      } else {
        code += `\n  ${key}={${JSON.stringify(value)}}`;
      }
    });
    
    // Close the component tag
    code += `\n/>`;
    
    setGeneratedCode(code);
    
    // Complete code example with imports
    const imports = importStatement || `import { ${componentName} } from "@/components/ui/${componentName.toLowerCase()}";`;
    
    const full = `import React from "react";
${imports}

export default function Example() {
  return (
    ${code}
  );
}`;
    
    setFullCode(full);
  }, [props, componentName, importStatement]);

  // Handle property change
  const handlePropertyChange = (prop: string, value: any) => {
    setProps((prevProps) => ({
      ...prevProps,
      [prop]: value
    }));
    
    // Reset variant selection when props are manually changed
    setSelectedVariant('default');
  };

  // Copy code to clipboard
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Get current device preview width
  const getDeviceWidth = () => {
    const device = devices.find(d => d.name === selectedDevice);
    return device ? device.width : 1024;
  };

  // Render property control based on its type
  const renderPropertyControl = (property: PropertyControl) => {
    switch (property.type) {
      case 'select':
        return (
          <Select
            value={props[property.prop]?.toString() || ''}
            onValueChange={(value) => handlePropertyChange(property.prop, value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {(property.options as any[])?.map((option) => {
                const value = typeof option === 'object' ? option.value : option;
                const label = typeof option === 'object' ? option.label : option;
                
                return (
                  <SelectItem key={value} value={value}>
                    {label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        );
        
      case 'boolean':
        return (
          <div className="flex items-center space-x-2">
            <Switch
              id={`prop-${property.prop}`}
              checked={!!props[property.prop]}
              onCheckedChange={(checked) => handlePropertyChange(property.prop, checked)}
            />
            <label htmlFor={`prop-${property.prop}`} className="text-sm font-atkinson cursor-pointer">
              {props[property.prop] ? 'Enabled' : 'Disabled'}
            </label>
          </div>
        );
        
      case 'string':
        return (
          <Input
            type="text"
            value={props[property.prop] || ''}
            onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
            className="w-full"
          />
        );
        
      case 'number':
        return (
          <Input
            type="number"
            value={props[property.prop] || 0}
            onChange={(e) => handlePropertyChange(property.prop, Number(e.target.value))}
            min={property.min}
            max={property.max}
            step={property.step || 1}
            className="w-full"
          />
        );
        
      case 'color':
        return (
          <div className="flex items-center gap-s">
            <input
              type="color"
              value={props[property.prop] || '#FFFFFF'}
              onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
              className="h-8 w-8 rounded-xs cursor-pointer"
            />
            <Input
              type="text"
              value={props[property.prop] || ''}
              onChange={(e) => handlePropertyChange(property.prop, e.target.value)}
              className="flex-1"
            />
          </div>
        );
        
      case 'radio':
        return (
          <RadioGroup
            value={props[property.prop]?.toString() || ''}
            onValueChange={(value) => handlePropertyChange(property.prop, value)}
            className="flex flex-col space-y-1"
          >
            {(property.options as any[])?.map((option) => {
              const value = typeof option === 'object' ? option.value : option;
              const label = typeof option === 'object' ? option.label : option;
              
              return (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={`${property.prop}-${value}`} />
                  <label htmlFor={`${property.prop}-${value}`} className="text-sm font-atkinson cursor-pointer">
                    {label}
                  </label>
                </div>
              );
            })}
          </RadioGroup>
        );
        
      case 'range':
        return (
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-text-tertiary">
              <span>{property.min}</span>
              <span>{property.max}</span>
            </div>
            <input
              type="range"
              min={property.min}
              max={property.max}
              step={property.step || 1}
              value={props[property.prop] || property.min}
              onChange={(e) => handlePropertyChange(property.prop, Number(e.target.value))}
              className="w-full"
            />
            <div className="text-center text-sm font-atkinson">
              {props[property.prop] || property.min}
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <Card className="mb-xl border-border-default dark:border-border-default bg-surface-primary dark:bg-surface-primary">
      <CardContent className="p-0">
        {/* Tabs for Preview, Code, and Properties */}
        <Tabs 
          defaultValue="preview" 
          onValueChange={(value) => setActiveTab(value as 'preview' | 'code' | 'properties')}
          className="w-full"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-l py-m border-b border-border-default dark:border-border-default">
            <h3 className="text-headline font-faro mb-2 sm:mb-0">{componentName} Playground</h3>
            <div className="flex flex-wrap gap-2">
              {/* State Variants Selector */}
              {stateVariants.length > 0 && (
                <Select
                  value={selectedVariant}
                  onValueChange={setSelectedVariant}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    {stateVariants.map((variant) => (
                      <SelectItem key={variant.name} value={variant.name}>
                        {variant.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              
              {/* Device Preview Selector (shown only in preview mode) */}
              {responsivePreview && activeTab === 'preview' && (
                <Select
                  value={selectedDevice}
                  onValueChange={(value) => setSelectedDevice(value as DevicePreview['name'])}
                >
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder="Select device" />
                  </SelectTrigger>
                  <SelectContent>
                    {devices.map((device) => (
                      <SelectItem key={device.name} value={device.name}>
                        <div className="flex items-center">
                          {device.icon}
                          <span className="ml-2">{device.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              
              {/* Main Tabs */}
              <TabsList>
                <TabsTrigger value="preview" className="flex items-center gap-s">
                  <EyeIcon className="h-4 w-4" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-s">
                  <CodeIcon className="h-4 w-4" />
                  Code
                </TabsTrigger>
                <TabsTrigger value="properties" className="flex items-center gap-s">
                  <Sliders className="h-4 w-4" />
                  Properties
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          
          <div className="p-l">
            {description && (
              <p className="mb-l text-body font-atkinson text-text-secondary dark:text-text-secondary">
                {description}
              </p>
            )}
            
            {/* Preview Tab */}
            <TabsContent value="preview" className="mt-0">
              <div 
                ref={previewRef}
                className="bg-surface-secondary dark:bg-surface-secondary rounded-m overflow-hidden transition-all duration-standard"
                style={{
                  maxWidth: responsivePreview ? getDeviceWidth() + 'px' : '100%',
                  margin: '0 auto'
                }}
              >
                <div className="flex items-center justify-between p-s border-b border-border-default dark:border-border-default bg-surface-tertiary dark:bg-surface-tertiary">
                  <span className="text-caption font-atkinson text-text-tertiary">
                    {responsivePreview ? `${selectedDevice.replace('-', ' ')} - ${getDeviceWidth()}px` : 'Preview'}
                  </span>
                  <div className="flex items-center gap-2">
                    {/* Device frame indicator */}
                    {responsivePreview && devices.find(d => d.name === selectedDevice)?.icon}
                  </div>
                </div>
                <div className="p-l flex items-center justify-center min-h-[200px]">
                  <Component {...props} />
                </div>
              </div>
              
              {children && (
                <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-l mt-l">
                  {children}
                </div>
              )}
            </TabsContent>
            
            {/* Code Tab */}
            <TabsContent value="code" className="mt-0">
              <div className="relative bg-surface-secondary dark:bg-surface-secondary rounded-m overflow-hidden">
                <div className="flex items-center justify-between p-s border-b border-border-default dark:border-border-default bg-surface-tertiary dark:bg-surface-tertiary">
                  <div className="flex gap-2">
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() => copyToClipboard(isCodeExpanded ? fullCode : generatedCode)}
                      className="h-8"
                    >
                      {copied ? <Check className="h-4 w-4 mr-1" /> : <Clipboard className="h-4 w-4 mr-1" />}
                      Copy
                    </Button>
                  </div>
                  <Button
                    variant="tertiary"
                    size="sm"
                    onClick={() => setIsCodeExpanded(!isCodeExpanded)}
                    className="h-8"
                  >
                    {isCodeExpanded ? 'Component Only' : 'Show Full Example'}
                  </Button>
                </div>
                
                <ScrollArea className="h-[350px]">
                  <Highlight
                    theme={isDark ? themes.nightOwl : themes.nightOwlLight}
                    code={isCodeExpanded ? fullCode : generatedCode}
                    language="jsx"
                  >
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                      <pre className={`${className} p-4 rounded-m`} style={style}>
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
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Properties Tab */}
            <TabsContent value="properties" className="mt-0">
              <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m">
                <div className="p-s border-b border-border-default dark:border-border-default bg-surface-tertiary dark:bg-surface-tertiary">
                  <h4 className="text-body font-faro">Component Properties</h4>
                </div>
                <ScrollArea className="h-[350px]">
                  <div className="p-m">
                    <div className="space-y-m">
                      {properties.map((property) => (
                        <div key={property.prop} className="space-y-xs">
                          <div className="flex items-center justify-between">
                            <label className="block text-body font-faro">
                              {property.label}
                            </label>
                            {/* Reset button */}
                            <Button
                              variant="tertiary"
                              size="sm"
                              onClick={() => handlePropertyChange(property.prop, property.defaultValue)}
                              className="h-6 text-caption"
                            >
                              Reset
                            </Button>
                          </div>
                          
                          {/* Property description if available */}
                          {property.description && (
                            <p className="text-caption font-atkinson text-text-tertiary mb-xs">
                              {property.description}
                            </p>
                          )}
                          
                          {/* Property control */}
                          {renderPropertyControl(property)}
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
}
