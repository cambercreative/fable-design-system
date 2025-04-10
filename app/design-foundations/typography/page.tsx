'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Code } from '@/components/ui/code';
import { Button } from '@/components/ui/button';
import { ChevronDown, Info, Copy, Check, MoonIcon, SunIcon, Smartphone, Monitor, Tablet } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function TypographyPage() {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [deviceSize, setDeviceSize] = useState('desktop');
  const [selectedFontFamily, setSelectedFontFamily] = useState('faro');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState('regular');
  const [showAccessibilityGuidelines, setShowAccessibilityGuidelines] = useState(true);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
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

  const compareDeviceSizes = [
    { device: 'iOS', android: 'Android', fontSize: typographicStyles.map(style => ({ 
      name: style.name, 
      ios: style.fontSize, 
      android: style.name === 'Display' ? '38sp' : 
               style.name === 'Title 1' ? '30sp' : 
               style.name === 'Title 2' ? '24sp' : 
               style.name === 'Headline' ? '18sp' : 
               style.name === 'Body' ? '16sp' : 
               style.name === 'Caption' ? '14sp' : '12sp'
    })) }
  ];

  const fontPairings = [
    { title: 'Primary Pairing', heading: 'font-faro text-title-1 font-bold', body: 'font-atkinson text-body font-regular' },
    { title: 'Alternative Pairing', heading: 'font-faro text-headline font-semi-bold', body: 'font-atkinson text-body font-regular' },
    { title: 'High Contrast Pairing', heading: 'font-faro text-display font-bold', body: 'font-atkinson text-body font-regular' },
  ];

  const codeSamples = {
    tailwind: `// Tailwind CSS classes
<h1 class="font-faro text-display font-bold leading-display">Heading</h1>
<p class="font-atkinson text-body font-regular leading-body">Body text</p>`,
    css: `/* CSS custom properties */
h1 {
  font-family: var(--font-family-faro);
  font-size: var(--font-size-display);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-display);
}

p {
  font-family: var(--font-family-atkinson);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
}`,
    react: `// React component with Tailwind
const Heading = ({ children }) => (
  <h1 className="font-faro text-display font-bold leading-display">
    {children}
  </h1>
);

const Paragraph = ({ children }) => (
  <p className="font-atkinson text-body font-regular leading-body">
    {children}
  </p>
);`,
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

        <Tabs defaultValue="specimens" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="specimens">Type Specimens</TabsTrigger>
            <TabsTrigger value="typefaces">Typefaces</TabsTrigger>
            <TabsTrigger value="pairings">Font Pairings</TabsTrigger>
            <TabsTrigger value="responsive">Responsive Behavior</TabsTrigger>
            <TabsTrigger value="code">Implementation</TabsTrigger>
          </TabsList>

          <TabsContent value="specimens" className="space-y-8">
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
          </TabsContent>

          <TabsContent value="typefaces">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {Object.entries(fontFamilyInfo).map(([key, info]) => (
                <Card key={key} className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                  <CardHeader>
                    <CardTitle className={key === 'faro' ? 'font-faro text-title-1 font-bold' : 'font-atkinson text-title-1 font-bold'}>
                      {info.name}
                    </CardTitle>
                    <CardDescription>{info.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-semibold mb-2">Character Showcase</h3>
                        <div className={`p-4 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'} overflow-x-auto`}>
                          <p className={`${key === 'faro' ? 'font-faro' : 'font-atkinson'} text-body`}>
                            ABCDEFGHIJKLMNOPQRSTUVWXYZ
                          </p>
                          <p className={`${key === 'faro' ? 'font-faro' : 'font-atkinson'} text-body mt-2`}>
                            abcdefghijklmnopqrstuvwxyz
                          </p>
                          <p className={`${key === 'faro' ? 'font-faro' : 'font-atkinson'} text-body mt-2`}>
                            0123456789 !@#$%^&*()_+-=[]{};':"\,./?
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold mb-2">Available Weights</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {info.weights.map((weight, i) => (
                            <div 
                              key={i} 
                              className={`p-3 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'} text-center`}
                            >
                              <span className={`${key === 'faro' ? 'font-faro' : 'font-atkinson'} text-body`} style={{
                                fontWeight: weight.toLowerCase().includes('light') ? 300 :
                                          weight.toLowerCase().includes('regular') ? 400 :
                                          weight.toLowerCase().includes('medium') ? 500 :
                                          weight.toLowerCase().includes('semi') ? 600 :
                                          weight.toLowerCase().includes('bold') && !weight.toLowerCase().includes('extra') ? 700 : 800
                              }}>
                                {weight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold mb-2">Key Features</h3>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {info.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h3 className="font-semibold mb-1">Usage</h3>
                          <p>{info.usage}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Fallback</h3>
                          <p>{info.fallback}</p>
                        </div>
                      </div>

                      {key === 'atkinson' && (
                        <div className="mt-4">
                          <h3 className="text-sm font-semibold mb-2">Accessibility Benefits</h3>
                          <p className="text-sm">
                            {info.accessibility}. Key improvements include better hinting, expanded character set, 
                            more weights, refined letterforms, and enhanced spacing metrics for digital interfaces.
                          </p>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-faro text-title-2 font-bold leading-title-2 mb-4">Interactive Font Explorer</h2>
              <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="font-family" className="mb-2 block">Font Family</Label>
                        <Select value={selectedFontFamily} onValueChange={setSelectedFontFamily}>
                          <SelectTrigger id="font-family">
                            <SelectValue placeholder="Select font" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="faro">Faro</SelectItem>
                            <SelectItem value="atkinson">Atkinson Hyperlegible Next</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="font-weight" className="mb-2 block">Font Weight</Label>
                        <Select value={fontWeight} onValueChange={setFontWeight}>
                          <SelectTrigger id="font-weight">
                            <SelectValue placeholder="Select weight" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="light">Light (300)</SelectItem>
                            <SelectItem value="regular">Regular (400)</SelectItem>
                            <SelectItem value="medium">Medium (500)</SelectItem>
                            <SelectItem value="semi-bold">Semi Bold (600)</SelectItem>
                            <SelectItem value="bold">Bold (700)</SelectItem>
                            <SelectItem value="extra-bold">Extra Bold (800)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="font-size" className="mb-2 block">Font Size: {fontSize}px</Label>
                        <Slider 
                          id="font-size"
                          value={[fontSize]} 
                          onValueChange={(value) => setFontSize(value[0])} 
                          min={10} 
                          max={72} 
                          step={1}
                        />
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`p-6 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'}`}>
                    <div className={`${selectedFontFamily === 'faro' ? 'font-faro' : 'font-atkinson'} font-${fontWeight}`} style={{ fontSize: `${fontSize}px` }}>
                      The quick brown fox jumps over the lazy dog.
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-text-tertiary">
                    <Code className="p-2">
                      font-family: {selectedFontFamily === 'faro' ? 'Faro' : 'Atkinson Hyperlegible Next'}; font-size: {fontSize}px; font-weight: {
                        fontWeight === 'light' ? '300' :
                        fontWeight === 'regular' ? '400' :
                        fontWeight === 'medium' ? '500' :
                        fontWeight === 'semi-bold' ? '600' :
                        fontWeight === 'bold' ? '700' : '800'
                      };
                    </Code>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="pairings">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fontPairings.map((pairing, index) => (
                  <Card key={index} className={`overflow-hidden ${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                    <CardHeader>
                      <CardTitle>{pairing.title}</CardTitle>
                      <CardDescription>Recommended font combination</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className={`p-4 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'}`}>
                          <h3 className={pairing.heading + ` mb-3 ${darkMode ? 'text-dark-text-primary' : 'text-text-primary'}`}>
                            Heading Text
                          </h3>
                          <p className={pairing.body + ` ${darkMode ? 'text-dark-text-primary' : 'text-text-primary'}`}>
                            This is an example of body text that would be used in paragraphs and content areas. The pairing demonstrates the typographic hierarchy.
                          </p>
                        </div>
                        <div className="text-sm space-y-2">
                          <div className="flex justify-between">
                            <span className="font-semibold">Heading:</span>
                            <span className="font-mono text-xs">{pairing.heading}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Body:</span>
                            <span className="font-mono text-xs">{pairing.body}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="font-faro text-title-2 font-bold leading-title-2 mb-4">Typographic Hierarchy</h2>
                <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <h1 className="font-faro text-display font-bold leading-display">
                        Display Heading
                      </h1>
                      <h2 className="font-faro text-title-1 font-bold leading-title-1">
                        Title 1 Heading
                      </h2>
                      <h3 className="font-faro text-title-2 font-bold leading-title-2">
                        Title 2 Heading
                      </h3>
                      <h4 className="font-faro text-headline font-semi-bold leading-headline">
                        Headline Text
                      </h4>
                      <p className="font-atkinson text-body font-regular leading-body" style={{ maxWidth: '75ch' }}>
                        This is body text in Atkinson Hyperlegible Next. It's designed for maximum readability across all screen sizes and user abilities. 
                        The font features enhanced character differentiation, improved spacing, and clear letterforms.
                      </p>
                      <div className="font-atkinson text-caption font-regular leading-caption">
                        This is caption text used for supporting information and image descriptions
                      </div>
                      <div className="font-atkinson text-footnote font-regular leading-footnote">
                        This is footnote text used for metadata, legal text, and additional context
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="responsive">
            <div className="space-y-8">
              <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                <CardHeader>
                  <CardTitle>Cross-Platform Type Scale</CardTitle>
                  <CardDescription>
                    Typography adapts across iOS and Android with platform-specific adjustments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left pb-2">Style</th>
                          <th className="text-left pb-2">iOS Size</th>
                          <th className="text-left pb-2">Android Size</th>
                          <th className="text-left pb-2">Weight</th>
                          <th className="text-left pb-2">Line Height</th>
                          <th className="text-left pb-2">Font</th>
                        </tr>
                      </thead>
                      <tbody>
                        {typographicStyles.map((style, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-3">{style.name}</td>
                            <td className="py-3">{style.fontSize}</td>
                            <td className="py-3">
                              {style.name === 'Display' ? '38sp' : 
                               style.name === 'Title 1' ? '30sp' : 
                               style.name === 'Title 2' ? '24sp' : 
                               style.name === 'Headline' ? '18sp' : 
                               style.name === 'Body' ? '16sp' : 
                               style.name === 'Caption' ? '14sp' : '12sp'}
                            </td>
                            <td className="py-3">{style.fontWeight}</td>
                            <td className="py-3">{style.lineHeight}</td>
                            <td className="py-3">{style.fontFamily === 'faro' ? 'Faro' : 'Atkinson Hyperlegible Next'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                <CardHeader>
                  <CardTitle>Responsive Type Behavior</CardTitle>
                  <CardDescription>
                    Type scales adapt across device sizes while maintaining hierarchy
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-headline font-semi-bold mb-3 flex items-center">
                        <Smartphone size={18} className="mr-2" /> Mobile
                      </h3>
                      <div className={`p-4 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'} space-y-2`}>
                        <p className="font-faro text-title-2 font-bold leading-title-2">Title: 22px</p>
                        <p className="font-faro text-headline font-semi-bold leading-headline">Headline: 17px</p>
                        <p className="font-atkinson text-body font-regular leading-body">Body: 16px</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-headline font-semi-bold mb-3 flex items-center">
                        <Tablet size={18} className="mr-2" /> Tablet
                      </h3>
                      <div className={`p-4 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'} space-y-2`}>
                        <p className="font-faro text-title-1 font-bold leading-title-1">Title: 28px</p>
                        <p className="font-faro text-headline font-semi-bold leading-headline">Headline: 17px</p>
                        <p className="font-atkinson text-body font-regular leading-body">Body: 16px</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-headline font-semi-bold mb-3 flex items-center">
                        <Monitor size={18} className="mr-2" /> Desktop
                      </h3>
                      <div className={`p-4 rounded ${darkMode ? 'bg-dark-surface-tertiary' : 'bg-surface-tertiary'} space-y-2`}>
                        <p className="font-faro text-display font-bold leading-display">Title: 36px</p>
                        <p className="font-faro text-title-1 font-bold leading-title-1">Headline: 28px</p>
                        <p className="font-atkinson text-body font-regular leading-body">Body: 16px</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                <CardHeader>
                  <CardTitle>Responsive Design Principles</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-fable-amber flex items-center justify-center text-black">1</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Typography Scale Adaptation</h3>
                        <p className="text-sm">Type sizes adapt across breakpoints while maintaining visual hierarchy</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-fable-amber flex items-center justify-center text-black">2</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Fluid Typography Option</h3>
                        <p className="text-sm">CSS implementation for smooth scaling between breakpoints is provided</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-fable-amber flex items-center justify-center text-black">3</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Line Length Control</h3>
                        <p className="text-sm">Maximum 75 characters for optimal readability across all devices</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1">
                        <div className="h-6 w-6 rounded-full bg-fable-amber flex items-center justify-center text-black">4</div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Dynamic Type Support</h3>
                        <p className="text-sm">All text interfaces support platform scaling preferences for accessibility</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="code">
            <div className="space-y-8">
              <Tabs defaultValue="tailwind" className="w-full">
                <TabsList className="grid grid-cols-3 mb-6 w-[400px]">
                  <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
                  <TabsTrigger value="css">CSS Variables</TabsTrigger>
                  <TabsTrigger value="react">React Components</TabsTrigger>
                </TabsList>
                <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                  <CardHeader>
                    <CardTitle>Implementation Examples</CardTitle>
                    <CardDescription>
                      Code samples for implementing Fable's typography system
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => copyToClipboard(codeSamples[
                        document.querySelector('[data-state="active"][data-radix-collection-item]')?.getAttribute('value') || 'tailwind'
                      ])}
                      className="flex items-center gap-1 self-end"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}
                      <span className="text-xs">Copy Code</span>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <TabsContent value="tailwind" className="mt-0">
                      <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
                        {codeSamples.tailwind}
                      </Code>
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">Tailwind Configuration</h3>
                        <p className="text-sm mb-3">
                          The design system uses Tailwind CSS for utility-based styling.
                          Here's how the typography is configured in tailwind.config.js:
                        </p>
                        <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'faro': ['Faro', 'SF Pro', 'Roboto', 'sans-serif'],
        'atkinson': ['Atkinson Hyperlegible Next', 'SF Pro', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': '36px',
        'title-1': '28px',
        'title-2': '22px',
        'headline': '17px',
        'body': '16px',
        'caption': '13px',
        'footnote': '11px',
      },
      lineHeight: {
        'display': '1.1',
        'title-1': '1.2',
        'title-2': '1.2',
        'headline': '1.3',
        'body': '1.5',
        'caption': '1.3',
        'footnote': '1.2',
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
        'semi-bold': '600',
        'bold': '700',
        'extra-bold': '800',
      },
    }
  }
}`}
                        </Code>
                      </div>
                    </TabsContent>
                    <TabsContent value="css" className="mt-0">
                      <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
                        {codeSamples.css}
                      </Code>
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">CSS Variable Declarations</h3>
                        <p className="text-sm mb-3">
                          CSS custom properties for implementing Fable's typography system:
                        </p>
                        <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
{`:root {
  /* Font Families */
  --font-family-faro: 'Faro', 'SF Pro', 'Roboto', sans-serif;
  --font-family-atkinson: 'Atkinson Hyperlegible Next', 'SF Pro', 'Roboto', sans-serif;
  
  /* Font Sizes */
  --font-size-display: 36px;
  --font-size-title-1: 28px;
  --font-size-title-2: 22px;
  --font-size-headline: 17px;
  --font-size-body: 16px;
  --font-size-caption: 13px;
  --font-size-footnote: 11px;
  
  /* Line Heights */
  --line-height-display: 1.1;
  --line-height-title-1: 1.2;
  --line-height-title-2: 1.2;
  --line-height-headline: 1.3;
  --line-height-body: 1.5;
  --line-height-caption: 1.3;
  --line-height-footnote: 1.2;
  
  /* Font Weights */
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-semi-bold: 600;
  --font-weight-bold: 700;
  --font-weight-extra-bold: 800;
}`}
                        </Code>
                      </div>
                    </TabsContent>
                    <TabsContent value="react" className="mt-0">
                      <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
                        {codeSamples.react}
                      </Code>
                      <div className="mt-4">
                        <h3 className="font-semibold mb-2">Typography Component Library</h3>
                        <p className="text-sm mb-3">
                          A comprehensive typography component system:
                        </p>
                        <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
{`// typography.tsx
import { ReactNode } from 'react';

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const Display = ({ children, className = '' }: TypographyProps) => (
  <h1 className={\`font-faro text-display font-bold leading-display \${className}\`}>
    {children}
  </h1>
);

export const Title1 = ({ children, className = '' }: TypographyProps) => (
  <h2 className={\`font-faro text-title-1 font-bold leading-title-1 \${className}\`}>
    {children}
  </h2>
);

export const Title2 = ({ children, className = '' }: TypographyProps) => (
  <h3 className={\`font-faro text-title-2 font-bold leading-title-2 \${className}\`}>
    {children}
  </h3>
);

export const Headline = ({ children, className = '' }: TypographyProps) => (
  <h4 className={\`font-faro text-headline font-semi-bold leading-headline \${className}\`}>
    {children}
  </h4>
);

export const Body = ({ children, className = '' }: TypographyProps) => (
  <p className={\`font-atkinson text-body font-regular leading-body \${className}\`}>
    {children}
  </p>
);

export const Caption = ({ children, className = '' }: TypographyProps) => (
  <div className={\`font-atkinson text-caption font-regular leading-caption \${className}\`}>
    {children}
  </div>
);

export const Footnote = ({ children, className = '' }: TypographyProps) => (
  <div className={\`font-atkinson text-footnote font-regular leading-footnote \${className}\`}>
    {children}
  </div>
);`}
                        </Code>
                      </div>
                    </TabsContent>
                  </CardContent>
                </Card>
              </Tabs>

              <Card className={`${darkMode ? 'bg-dark-surface-secondary' : 'bg-surface-secondary'}`}>
                <CardHeader>
                  <CardTitle>Font Loading Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Next.js Font Configuration</h3>
                      <Code className="p-4 rounded text-sm font-mono whitespace-pre overflow-x-auto">
{`// app/layout.tsx
import { Faro, AtkinsonHyperlegible } from 'next/font/google';

// Font configurations with optimal loading strategies
const faro = Faro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-faro',
  weight: ['300', '400', '600', '700'],
});

const atkinson = AtkinsonHyperlegible({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-atkinson',
  weight: ['400', '500', '700', '800'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${faro.variable} \${atkinson.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`}
                      </Code>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Performance Considerations</h3>
                      <ul className="list-disc list-inside space-y-2 text-sm">
                        <li>Use <code className="text-xs bg-black/10 p-1 rounded dark:bg-white/10">font-display: swap</code> to ensure text remains visible during font loading</li>
                        <li>Only load the font weights actually used in the interface</li>
                        <li>Consider using variable fonts where available to reduce file size</li>
                        <li>Implement font subsetting to include only the characters needed</li>
                        <li>Use browser caching for fonts to improve repeat visit performance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
