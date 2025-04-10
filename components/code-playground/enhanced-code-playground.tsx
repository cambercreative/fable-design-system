import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { generateCode } from './code-generator';
import { Highlight, themes } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Check, SmartphoneIcon, TabletIcon, MonitorIcon, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

interface PropertyControl {
  type: 'select' | 'boolean' | 'string' | 'number' | 'range' | 'color' | 'radio';
  label: string;
  prop: string;
  options?: string[];
  defaultValue: any;
  description?: string;
  min?: number;
  max?: number;
  step?: number;
}

interface StateVariant {
  name: string;
  label: string;
  props: Record<string, any>;
}

interface EnhancedCodePlaygroundProps {
  component: React.ComponentType<any>;
  componentName: string;
  description?: string;
  defaultCode?: string;
  importStatement?: string;
  properties?: PropertyControl[];
  stateVariants?: StateVariant[];
  responsivePreview?: boolean;
  children?: React.ReactNode;
}

// Define device sizes
const deviceSizes = {
  'mobile-s': { width: 320, label: 'Mobile S', icon: <SmartphoneIcon size={16} /> },
  'mobile': { width: 375, label: 'Mobile', icon: <SmartphoneIcon size={16} /> },
  'tablet': { width: 768, label: 'Tablet', icon: <TabletIcon size={16} /> },
  'desktop': { width: 1024, label: 'Desktop', icon: <MonitorIcon size={16} /> },
  'desktop-l': { width: 1440, label: 'Desktop L', icon: <MonitorIcon size={16} /> },
};

export const EnhancedCodePlayground: React.FC<EnhancedCodePlaygroundProps> = ({
  component: Component,
  componentName,
  description,
  defaultCode,
  importStatement,
  properties = [],
  stateVariants = [],
  responsivePreview = false,
  children,
}) => {
  const { theme: currentTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('preview');
  const [copied, setCopied] = useState(false);
  const [activeVariant, setActiveVariant] = useState<string>(stateVariants.length > 0 ? stateVariants[0].name : 'default');
  const [deviceSize, setDeviceSize] = useState<keyof typeof deviceSizes>('desktop');
  const [componentProps, setComponentProps] = useState<Record<string, any>>({});
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Initialize component props with default values
  useEffect(() => {
    const initialProps: Record<string, any> = {};
    properties.forEach((prop) => {
      initialProps[prop.prop] = prop.defaultValue;
    });
    setComponentProps(initialProps);
  }, [properties]);

  // Update props when state variant changes
  useEffect(() => {
    if (activeVariant !== 'default') {
      const variant = stateVariants.find((v) => v.name === activeVariant);
      if (variant) {
        setComponentProps((prevProps) => ({
          ...prevProps,
          ...variant.props,
        }));
      }
    }
  }, [activeVariant, stateVariants]);

  // Generate code
  const codeString = useMemo(() => {
    const propsToRender = { ...componentProps };
    
    // Add interactive states as classes
    if (isHovered) propsToRender.className = `${propsToRender.className || ''} hover`.trim();
    if (isFocused) propsToRender.className = `${propsToRender.className || ''} focus`.trim();
    if (isPressed) propsToRender.className = `${propsToRender.className || ''} active`.trim();
    
    return generateCode(componentName, propsToRender, importStatement);
  }, [componentName, componentProps, importStatement, isHovered, isFocused, isPressed]);

  // Handle copy to clipboard
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [codeString]);

  // Handle property changes
  const handlePropertyChange = useCallback((prop: string, value: any) => {
    setComponentProps((prevProps) => ({
      ...prevProps,
      [prop]: value,
    }));
  }, []);

  // Handle state interactions
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);

  // Render property controls
  const renderPropertyControls = () => {
    return properties.map((prop) => (
      <div className="mb-4" key={prop.prop}>
        <div className="flex items-start gap-2 mb-1">
          <div className="flex-1">
            <Label htmlFor={prop.prop} className="text-sm font-medium">
              {prop.label}
            </Label>
            {prop.description && (
              <p className="text-xs text-muted-foreground mt-1">{prop.description}</p>
            )}
          </div>
          
          {prop.type === 'boolean' && (
            <div className="flex items-center space-x-2">
              <Switch
                id={prop.prop}
                checked={componentProps[prop.prop] || false}
                onCheckedChange={(checked) => handlePropertyChange(prop.prop, checked)}
              />
            </div>
          )}
        </div>
        
        {prop.type === 'select' && prop.options && (
          <Select
            value={componentProps[prop.prop]?.toString() || ''}
            onValueChange={(value) => handlePropertyChange(prop.prop, value)}
          >
            <SelectTrigger id={prop.prop} className="w-full">
              <SelectValue placeholder="Select option" />
            </SelectTrigger>
            <SelectContent>
              {prop.options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
        
        {prop.type === 'string' && (
          <Input
            id={prop.prop}
            type="text"
            value={componentProps[prop.prop] || ''}
            onChange={(e) => handlePropertyChange(prop.prop, e.target.value)}
            className="w-full"
          />
        )}
        
        {prop.type === 'number' && (
          <Input
            id={prop.prop}
            type="number"
            min={prop.min}
            max={prop.max}
            step={prop.step || 1}
            value={componentProps[prop.prop] || 0}
            onChange={(e) => handlePropertyChange(prop.prop, Number(e.target.value))}
            className="w-full"
          />
        )}
        
        {prop.type === 'range' && (
          <div className="flex items-center gap-2">
            <Input
              id={prop.prop}
              type="range"
              min={prop.min}
              max={prop.max}
              step={prop.step || 1}
              value={componentProps[prop.prop] || 0}
              onChange={(e) => handlePropertyChange(prop.prop, Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm">{componentProps[prop.prop] || 0}</span>
          </div>
        )}
        
        {prop.type === 'color' && (
          <div className="flex gap-2">
            <Input
              id={prop.prop}
              type="color"
              value={componentProps[prop.prop] || '#000000'}
              onChange={(e) => handlePropertyChange(prop.prop, e.target.value)}
              className="w-12 h-8 p-1"
            />
            <Input
              type="text"
              value={componentProps[prop.prop] || '#000000'}
              onChange={(e) => handlePropertyChange(prop.prop, e.target.value)}
              className="flex-1"
            />
          </div>
        )}
      </div>
    ));
  };

  // Render state variant controls
  const renderStateVariants = () => {
    if (stateVariants.length === 0) return null;
    
    return (
      <div className="mb-6">
        <Label htmlFor="stateVariant" className="text-sm font-medium mb-2 block">
          Component State
        </Label>
        <Select
          value={activeVariant}
          onValueChange={setActiveVariant}
        >
          <SelectTrigger id="stateVariant" className="w-full">
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
      </div>
    );
  };

  // Render interactive state controls
  const renderInteractiveStates = () => {
    return (
      <div className="mb-6 space-y-3">
        <Label className="text-sm font-medium block">Interactive States</Label>
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="hover-state"
              checked={isHovered}
              onCheckedChange={setIsHovered}
            />
            <Label htmlFor="hover-state" className="text-sm">Hover</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="focus-state"
              checked={isFocused}
              onCheckedChange={setIsFocused}
            />
            <Label htmlFor="focus-state" className="text-sm">Focus</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox
              id="active-state"
              checked={isPressed}
              onCheckedChange={setIsPressed}
            />
            <Label htmlFor="active-state" className="text-sm">Active/Pressed</Label>
          </div>
        </div>
      </div>
    );
  };

  // Render responsive preview controls
  const renderDeviceSizeControls = () => {
    if (!responsivePreview) return null;
    
    return (
      <div className="mb-6">
        <Label htmlFor="deviceSize" className="text-sm font-medium mb-2 block">
          Device Size
        </Label>
        <Select
          value={deviceSize}
          onValueChange={(value: keyof typeof deviceSizes) => setDeviceSize(value)}
        >
          <SelectTrigger id="deviceSize" className="w-full">
            <SelectValue placeholder="Select device size" />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(deviceSizes).map(([key, { label, icon }]) => (
              <SelectItem key={key} value={key}>
                <div className="flex items-center gap-2">
                  {icon}
                  <span>{label}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <Card className="shadow-md dark:shadow-lg border border-border">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold">{componentName}</CardTitle>
          <TabsList>
            <TabsTrigger 
              value="preview" 
              onClick={() => setActiveTab('preview')}
              aria-selected={activeTab === 'preview'}
              className={activeTab === 'preview' ? 'bg-primary text-primary-foreground' : ''}
            >
              Preview
            </TabsTrigger>
            <TabsTrigger 
              value="code" 
              onClick={() => setActiveTab('code')}
              aria-selected={activeTab === 'code'}
              className={activeTab === 'code' ? 'bg-primary text-primary-foreground' : ''}
            >
              Code
            </TabsTrigger>
          </TabsList>
        </div>
        {description && <p className="text-sm text-muted-foreground mt-2">{description}</p>}
      </CardHeader>
      
      <CardContent>
        <div className="grid md:grid-cols-[1fr_300px] gap-6">
          {/* Preview/Code Area */}
          <div>
            <AnimatePresence mode="wait">
              {activeTab === 'preview' ? (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="p-8 bg-card border rounded-md flex items-center justify-center"
                  style={responsivePreview ? { maxWidth: deviceSizes[deviceSize].width, margin: '0 auto' } : {}}
                >
                  <div 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    className="component-preview"
                  >
                    <Component {...componentProps} />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="code"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="relative"
                >
                  <div className="absolute top-2 right-2 z-10">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="h-8 gap-1"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      {copied ? 'Copied' : 'Copy'}
                    </Button>
                  </div>
                  <div className="rounded-md overflow-hidden">
                    <Highlight
                      theme={currentTheme === 'dark' ? themes.vsDark : themes.vsLight}
                      code={codeString}
                      language="jsx"
                    >
                      {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                          className={`${className} p-4 overflow-auto text-sm`}
                          style={{ ...style, background: 'var(--background-secondary)' }}
                        >
                          {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              <span className="opacity-50 mr-4 text-xs select-none">
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          {/* Controls Area */}
          <div className="space-y-6">
            {renderStateVariants()}
            {renderInteractiveStates()}
            {renderDeviceSizeControls()}
            
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Properties</h3>
              <div className="max-h-[400px] overflow-y-auto pr-2 space-y-4">
                {renderPropertyControls()}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4 border-t">
        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Accessibility:</span> WCAG 2.1 AA compliant
        </div>
        {children}
      </CardFooter>
    </Card>
  );
};

export default EnhancedCodePlayground;