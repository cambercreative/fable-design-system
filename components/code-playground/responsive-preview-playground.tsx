"use client";

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clipboard, Check, EyeIcon, Code as CodeIcon, Smartphone, Tablet, Monitor, LayoutGrid } from 'lucide-react';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import CodePlayground from './code-playground';

type Device = 'mobile-s' | 'mobile' | 'tablet' | 'desktop' | 'desktop-l';

interface ResponsivePreviewPlaygroundProps {
  component: React.ComponentType<any>;
  componentName: string;
  properties: Array<{
    type: 'select' | 'boolean' | 'string' | 'number' | 'color';
    label: string;
    options?: string[];
    defaultValue: any;
    prop: string;
  }>;
  defaultCode: string;
  description?: string;
  responsiveDescription?: string;
  children?: React.ReactNode;
}

const DeviceSettings: Record<Device, { width: string; height: string; label: string; icon: React.ReactNode }> = {
  'mobile-s': {
    width: '320px',
    height: '570px',
    label: 'Mobile S',
    icon: <Smartphone className="h-4 w-4" />
  },
  'mobile': {
    width: '375px',
    height: '667px',
    label: 'Mobile',
    icon: <Smartphone className="h-4 w-4" />
  },
  'tablet': {
    width: '768px',
    height: '1024px',
    label: 'Tablet',
    icon: <Tablet className="h-4 w-4" />
  },
  'desktop': {
    width: '1024px',
    height: '768px',
    label: 'Desktop',
    icon: <Monitor className="h-4 w-4" />
  },
  'desktop-l': {
    width: '1440px',
    height: '900px',
    label: 'Desktop L',
    icon: <Monitor className="h-4 w-4" />
  }
};

export default function ResponsivePreviewPlayground({
  component,
  componentName,
  properties,
  defaultCode,
  description,
  responsiveDescription,
  children
}: ResponsivePreviewPlaygroundProps) {
  const [selectedDevice, setSelectedDevice] = useState<Device>('mobile');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'responsive'>('preview');
  const [copied, setCopied] = useState(false);
  const { theme: appTheme } = useTheme();
  const isDark = appTheme === 'dark';

  // Copy code to clipboard
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // Get device dimensions based on orientation
  const getDeviceDimensions = () => {
    const device = DeviceSettings[selectedDevice];
    if (orientation === 'landscape') {
      return {
        width: device.height,
        height: device.width
      };
    }
    return {
      width: device.width,
      height: device.height
    };
  };

  const dimensions = getDeviceDimensions();

  const renderDeviceFrame = () => {
    return (
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full mb-m">
          <div className="flex space-x-s">
            {Object.entries(DeviceSettings).map(([key, device]) => (
              <Button
                key={key}
                variant={selectedDevice === key ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setSelectedDevice(key as Device)}
                className="flex items-center gap-s"
              >
                {device.icon}
                <span className="hidden sm:inline">{device.label}</span>
              </Button>
            ))}
          </div>
          
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setOrientation(orientation === 'portrait' ? 'landscape' : 'portrait')}
            className="flex items-center gap-s"
          >
            <LayoutGrid className="h-4 w-4" />
            <span className="hidden sm:inline">
              {orientation === 'portrait' ? 'Landscape' : 'Portrait'}
            </span>
          </Button>
        </div>

        <div
          className="border-4 border-gray-500 rounded-l overflow-hidden bg-surface-tertiary dark:bg-surface-tertiary transition-all duration-standard shadow-elevation-3"
          style={{
            width: dimensions.width,
            height: dimensions.height,
            maxHeight: 'calc(100vh - 300px)',
            maxWidth: '100%',
            transform: 'scale(0.8)',
            transformOrigin: 'top center'
          }}
        >
          <div className="w-full h-full overflow-auto p-s">
            {component && React.createElement(component)}
          </div>
        </div>
        
        <div className="mt-m text-caption text-text-tertiary">
          {dimensions.width} × {dimensions.height}
        </div>
      </div>
    );
  };

  return (
    <Card className="mb-xl border-border-default dark:border-border-default bg-surface-primary dark:bg-surface-primary">
      <CardContent className="p-0">
        <Tabs 
          defaultValue="preview" 
          onValueChange={(value) => setActiveTab(value as 'preview' | 'code' | 'responsive')}
          className="w-full"
        >
          <div className="flex items-center justify-between px-l py-m border-b border-border-default dark:border-border-default">
            <h3 className="text-headline font-faro">{componentName} Playground</h3>
            <TabsList>
              <TabsTrigger value="preview" className="flex items-center gap-s">
                <EyeIcon className="h-4 w-4" />
                Preview
              </TabsTrigger>
              <TabsTrigger value="responsive" className="flex items-center gap-s">
                <LayoutGrid className="h-4 w-4" />
                Responsive
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
            
            <TabsContent value="preview" className="mt-0">
              <CodePlayground
                component={component}
                componentName={componentName}
                properties={properties}
                defaultCode={defaultCode}
              >
                {children}
              </CodePlayground>
            </TabsContent>
            
            <TabsContent value="responsive" className="mt-0">
              {responsiveDescription && (
                <p className="mb-l text-body font-atkinson text-text-secondary dark:text-text-secondary">
                  {responsiveDescription}
                </p>
              )}
              
              <div className="bg-surface-secondary dark:bg-surface-secondary rounded-m p-l overflow-auto">
                {renderDeviceFrame()}
              </div>
            </TabsContent>
            
            <TabsContent value="code" className="mt-0">
              <div className="relative bg-surface-secondary dark:bg-surface-secondary rounded-m overflow-hidden">
                <Button
                  variant="icon"
                  size="sm"
                  onClick={() => copyToClipboard(defaultCode)}
                  className="absolute top-2 right-2 z-10"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                </Button>
                
                <Highlight
                  theme={isDark ? themes.nightOwl : themes.nightOwlLight}
                  code={defaultCode}
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
        </Tabs>
      </CardContent>
    </Card>
  );
}