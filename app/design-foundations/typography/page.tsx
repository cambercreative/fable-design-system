'use client';

import React, { useState } from 'react';
import { ChevronDown, Info, Copy, Check, MoonIcon, SunIcon, Smartphone, Monitor, Tablet } from 'lucide-react';

// Create simplified component versions for our needs
const Tabs = ({ defaultValue, className, children }) => (
  <div className={className}>{children}</div>
);

const TabsList = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const TabsTrigger = ({ value, children }) => (
  <button className="px-4 py-2 border rounded hover:bg-gray-100">{children}</button>
);

const TabsContent = ({ value, className, children }) => (
  <div className={className}>{children}</div>
);

const Card = ({ className, children }) => (
  <div className={`border rounded shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ className, children }) => (
  <div className={`p-4 border-b ${className}`}>{children}</div>
);

const CardContent = ({ className, children }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);

const CardTitle = ({ className, children }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

const CardDescription = ({ children }) => (
  <p className="text-sm text-gray-500">{children}</p>
);

const Button = ({ variant, size, onClick, className, children }) => (
  <button 
    onClick={onClick} 
    className={`px-3 py-1 border rounded ${variant === 'outline' ? 'border-gray-300' : 'bg-blue-500 text-white'} ${className}`}
  >
    {children}
  </button>
);

const Switch = ({ checked, onCheckedChange, id }) => (
  <button 
    role="switch"
    aria-checked={checked}
    id={id}
    onClick={() => onCheckedChange(!checked)}
    className={`w-10 h-5 rounded-full ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}
  >
    <span className={`block w-4 h-4 rounded-full bg-white transform ${checked ? 'translate-x-5' : 'translate-x-1'}`} />
  </button>
);

const Tooltip = ({ children }) => children;
const TooltipTrigger = ({ asChild, children }) => children;
const TooltipContent = ({ children }) => (
  <div className="absolute z-10 p-2 bg-white border rounded shadow-lg">
    {children}
  </div>
);
const TooltipProvider = ({ children }) => children;

const Alert = ({ className, children }) => (
  <div className={`p-4 border rounded bg-blue-50 ${className}`}>{children}</div>
);

const AlertTitle = ({ className, children }) => (
  <h4 className={`font-bold ${className}`}>{children}</h4>
);

const AlertDescription = ({ children }) => (
  <div className="mt-2">{children}</div>
);

const Code = ({ className, children }) => (
  <pre className={`p-4 bg-gray-100 rounded overflow-auto ${className}`}>
    <code>{children}</code>
  </pre>
);

// Simplified mock components
const Select = ({ value, onValueChange, children }) => (
  <div className="relative">
    <select 
      value={value} 
      onChange={(e) => onValueChange(e.target.value)}
      className="w-full p-2 border rounded"
    >
      {React.Children.map(children, child => {
        // Extract SelectItem values
        if (child.type === SelectContent) {
          return React.Children.map(child.props.children, item => {
            if (item.type === SelectItem) {
              return <option value={item.props.value}>{item.props.children}</option>;
            }
            return null;
          });
        }
        return null;
      })}
    </select>
  </div>
);

const SelectTrigger = ({ className, id, children }) => null;
const SelectValue = ({ placeholder }) => placeholder;
const SelectContent = ({ children }) => children;
const SelectItem = ({ value, children }) => null;

const Label = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={className}>{children}</label>
);

const Slider = ({ id, value, onValueChange, min, max, step }) => (
  <input 
    type="range" 
    id={id}
    min={min} 
    max={max} 
    step={step} 
    value={value[0]} 
    onChange={(e) => onValueChange([parseInt(e.target.value)])}
    className="w-full"
  />
);

const Separator = () => <hr className="my-4" />;

// Mock toast function
const useToast = () => {
  return {
    toast: ({ title, description }) => {
      console.log(`Toast: ${title} - ${description}`);
    }
  };
};

export default function TypographyPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [deviceSize, setDeviceSize] = useState('desktop');
  const [selectedFontFamily, setSelectedFontFamily] = useState('faro');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState('regular');
  const [showAccessibilityGuidelines, setShowAccessibilityGuidelines] = useState(true);
  const [activeTab, setActiveTab] = useState('specimens');

  const copyToClipboard = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: "The code has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const typographicStyles = [
    {
      name: 'Display',
      fontFamily: 'faro',
      fontSize: '36px',
      lineHeight: '1.1',
      fontWeight: 'bold',
      usage: 'Major headings, hero content',
      className: 'font-faro text-display font-bold leading-display',
      example: 'Share Your Life Story',
    },
    {
      name: 'Title 1',
      fontFamily: 'faro',
      fontSize: '28px',
      lineHeight: '1.2',
      fontWeight: 'bold',
      usage: 'Section headers, page titles',
      className: 'font-faro text-title-1 font-bold leading-title-1',
      example: 'Memory Collection',
    },
    {
      name: 'Title 2',
      fontFamily: 'faro',
      fontSize: '22px',
      lineHeight: '1.2',
      fontWeight: 'bold',
      usage: 'Card titles, subsections',
      className: 'font-faro text-title-2 font-bold leading-title-2',
      example: 'Childhood Adventures',
    },
    {
      name: 'Headline',
      fontFamily: 'faro',
      fontSize: '17px',
      lineHeight: '1.3',
      fontWeight: 'semi-bold',
      usage: 'Content headers, emphasis text',
      className: 'font-faro text-headline font-semi-bold leading-headline',
      example: 'First Day of School',
    },
    {
      name: 'Body',
      fontFamily: 'atkinson',
      fontSize: '16px',
      lineHeight: '1.5',
      fontWeight: 'regular',
      usage: 'Primary content, paragraph text',
      className: 'font-atkinson text-body font-regular leading-body',
      example: 'I remember the excitement of preparing my backpack the night before. My parents took photos of me standing by the front door in my new outfit.',
    },
    {
      name: 'Caption',
      fontFamily: 'atkinson',
      fontSize: '13px',
      lineHeight: '1.3',
      fontWeight: 'regular',
      usage: 'Supporting text, image captions',
      className: 'font-atkinson text-caption font-regular leading-caption',
      example: 'September 1998, first day of kindergarten at Lincoln Elementary School',
    },
    {
      name: 'Footnote',
      fontFamily: 'atkinson',
      fontSize: '11px',
      lineHeight: '1.2',
      fontWeight: 'regular',
      usage: 'Metadata, legal text, timestamps',
      className: 'font-atkinson text-footnote font-regular leading-footnote',
      example: 'Last edited: April 10, 2025 at 10:32am',
    },
  ];

  const fontFamilyInfo = {
    faro: {
      name: 'Faro',
      description: 'Primary typeface for branding and UI elements',
      weights: ['Light', 'Regular', 'SemiBold', 'Bold'],
      features: ['Distinctive character shapes', 'Strong contrast', 'Balanced x-height'],
      usage: 'Headings, navigation, key UI elements, marketing materials',
      fallback: 'System sans-serif (SF Pro for iOS, Roboto for Android)',
      licensing: 'Commercial license required',
    },
    atkinson: {
      name: 'Atkinson Hyperlegible Next',
      description: 'Optimized for maximum legibility across all screen sizes and user abilities',
      weights: ['Regular (400)', 'Medium (500)', 'Bold (700)', 'Extra Bold (800)', 'Italic variants'],
      features: ['Enhanced character differentiation', 'Improved spacing', 'Clear letterforms', 'Distinct character shapes'],
      usage: 'Body text, captions, user-generated content, interface elements requiring maximum readability',
      fallback: 'System sans-serif (SF Pro for iOS, Roboto for Android)',
      licensing: 'Open source under SIL Open Font License',
      accessibility: 'Designed specifically to increase legibility for readers with low vision',
    }
  };

  return (
    <div className={`p-8 ${darkMode ? 'dark bg-dark-surface-primary text-dark-text-primary' : 'bg-surface-primary text-text-primary'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="font-faro text-display font-bold leading-display mb-2">Typography</h1>
            <p className="font-atkinson text-body font-regular leading-body mb-4">
              Comprehensive typography system designed for legibility, accessibility, and emotional storytelling.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SunIcon size={16} className={`${darkMode ? 'text-dark-text-tertiary' : 'text-text-primary'}`} />
              <Switch 
                checked={darkMode} 
                onCheckedChange={setDarkMode} 
                id="dark-mode"
              />
              <MoonIcon size={16} className={`${darkMode ? 'text-dark-text-primary' : 'text-text-tertiary'}`} />
            </div>
            <Select value={deviceSize} onValueChange={setDeviceSize}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Device Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mobile">
                  <div className="flex items-center">
                    <Smartphone size={16} className="mr-2" /> Mobile
                  </div>
                </SelectItem>
                <SelectItem value="tablet">
                  <div className="flex items-center">
                    <Tablet size={16} className="mr-2" /> Tablet
                  </div>
                </SelectItem>
                <SelectItem value="desktop">
                  <div className="flex items-center">
                    <Monitor size={16} className="mr-2" /> Desktop
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-5 mb-8 border-b">
            <button 
              className={`px-4 py-2 ${activeTab === 'specimens' ? 'border-b-2 border-fable-red' : ''}`}
              onClick={() => setActiveTab('specimens')}
            >
              Type Specimens
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'typefaces' ? 'border-b-2 border-fable-red' : ''}`}
              onClick={() => setActiveTab('typefaces')}
            >
              Typefaces
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'pairings' ? 'border-b-2 border-fable-red' : ''}`}
              onClick={() => setActiveTab('pairings')}
            >
              Font Pairings
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'responsive' ? 'border-b-2 border-fable-red' : ''}`}
              onClick={() => setActiveTab('responsive')}
            >
              Responsive Behavior
            </button>
            <button 
              className={`px-4 py-2 ${activeTab === 'code' ? 'border-b-2 border-fable-red' : ''}`}
              onClick={() => setActiveTab('code')}
            >
              Implementation
            </button>
          </div>

          {activeTab === 'specimens' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-6">
                {typographicStyles.map((style, index) => (
                  <Card key={index} className={`overflow-hidden ${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center">
                          {style.name}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Info size={16} className="ml-2 text-text-tertiary cursor-pointer" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <div className="w-80 p-2">
                                  <p className="text-sm font-semibold mb-1">Specifications:</p>
                                  <ul className="text-xs space-y-1">
                                    <li><span className="font-semibold">Font:</span> {style.fontFamily === 'faro' ? 'Faro' : 'Atkinson Hyperlegible Next'}</li>
                                    <li><span className="font-semibold">Size:</span> {style.fontSize}</li>
                                    <li><span className="font-semibold">Weight:</span> {style.fontWeight}</li>
                                    <li><span className="font-semibold">Line Height:</span> {style.lineHeight}</li>
                                    <li><span className="font-semibold">Usage:</span> {style.usage}</li>
                                  </ul>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardTitle>
                        <CardDescription>
                          {style.fontFamily === 'faro' ? 'Faro' : 'Atkinson Hyperlegible Next'} / {style.fontSize} / {style.lineHeight}
                        </CardDescription>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => copyToClipboard(style.className)}
                        className="flex items-center gap-1"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                        <span className="text-xs">Copy Class</span>
                      </Button>
                    </CardHeader>
                    <CardContent className="border-t p-6">
                      <div 
                        className={style.className + ` ${darkMode ? 'text-dark-text-primary' : 'text-text-primary'}`}
                        style={{
                          maxWidth: style.name === 'Body' ? '75ch' : 'none',
                        }}
                      >
                        {style.example}
                      </div>
                      {style.name === 'Body' && (
                        <div className="mt-4 text-sm text-text-tertiary">
                          <p>👉 Body text is limited to 75 characters per line for optimal readability</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {showAccessibilityGuidelines && (
                <Alert className="mt-8">
                  <AlertTitle className="flex items-center">
                    <Info size={16} className="mr-2" />
                    Accessibility Guidelines
                  </AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                      <li>Maintain minimum text size of 16px for primary reading content</li>
                      <li>Ensure line length between 50-75 characters for optimal readability</li>
                      <li>Use a line height of at least 1.5 for paragraph text</li>
                      <li>Support dynamic type scaling on iOS and text size preferences on Android</li>
                      <li>Never use all caps for body text</li>
                      <li>Maintain adequate color contrast (minimum 4.5:1 for regular text)</li>
                    </ul>
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {/* Additional tabs would be added here */}
        </div>
      </div>
    </div>
  );
}