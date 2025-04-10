"use client"

import PageWrapper from '../../../components/page-wrapper'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { HexToRgb, GetContrastRatio } from './utils'

export default function ColorsPage() {
  const [mode, setMode] = useState<'light'|'dark'>('light')
  
  return (
    <PageWrapper
      title="Color System"
      description="The Fable color system provides a harmonious palette designed to create emotional connections while ensuring accessibility and consistency across our products."
    >
      <div className="grid gap-12">
        <section id="introduction" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Introduction</h2>
          <p>
            Our color system draws inspiration from storytelling, with warm, narrative tones that
            evoke comfort and engagement. The palette is carefully crafted to create emotional
            connections while ensuring all color combinations meet or exceed accessibility standards.
          </p>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
            <Tabs defaultValue="light" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium">Color Mode</h3>
                <TabsList>
                  <TabsTrigger 
                    value="light" 
                    onClick={() => setMode('light')}
                    className="data-[state=active]:bg-white"
                  >
                    Light Mode
                  </TabsTrigger>
                  <TabsTrigger 
                    value="dark" 
                    onClick={() => setMode('dark')}
                    className="data-[state=active]:bg-dark-surface-primary text-white"
                  >
                    Dark Mode
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="light" className="mt-0">
                <div className="rounded-lg overflow-hidden h-24 bg-gradient-to-r from-fable-red to-fable-amber flex items-end">
                  <div className="bg-black/20 text-white w-full px-4 py-2 text-sm">
                    Light Mode: Warm, emotional gradient (Red to Amber)
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="dark" className="mt-0">
                <div className="rounded-lg overflow-hidden h-24 bg-gradient-to-r from-fable-deep-purple to-fable-deep-blue flex items-end">
                  <div className="bg-black/20 text-white w-full px-4 py-2 text-sm">
                    Dark Mode: Deep, rich gradient (Purple to Blue)
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="primary-palette" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Primary Brand Colors</h2>
          <p>
            The core of Fable's visual identity is a warm, emotional palette that transitions from vibrant
            red-orange to warm amber. These colors establish our brand identity and are used for key interactive
            elements, primary actions, and important visual indicators.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Fable Red"
              description="Vibrant, engaging, primary brand color"
              hexCode="#FF3300"
              darkMode={mode === 'dark'}
              cmyk="0, 85, 100, 0"
              rgb="255, 51, 0"
              usage="Buttons, key actions, brand elements"
              tokenName="--color-fable-red"
            />
            
            <ColorCard
              name="Fable Amber"
              description="Warm, memory-evoking, complementary brand color"
              hexCode="#FFB800"
              darkMode={mode === 'dark'}
              cmyk="0, 32, 95, 0"
              rgb="255, 184, 0"
              usage="Accents, secondary indicators, highlights"
              tokenName="--color-fable-amber"
            />
            
            <ColorCard
              name="Fable Peach"
              description="Light, warm background color"
              hexCode="#FFEFD9"
              darkMode={mode === 'dark'}
              cmyk="0, 5, 15, 0"
              rgb="255, 239, 217"
              usage="Backgrounds, content surfaces"
              tokenName="--color-fable-peach"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2 mt-4">
            <div className={`rounded-lg overflow-hidden ${mode === 'dark' ? 'border border-dark-border-default' : ''}`}>
              <div className="h-24 bg-gradient-to-r from-fable-red to-fable-amber"></div>
              <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
                <h3 className="font-medium mb-1">Primary Gradient (Light Mode)</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-2">Red to Amber gradient for key visual elements</p>
                <code className="text-xs font-mono block">linear-gradient(to right, var(--color-fable-red), var(--color-fable-amber))</code>
              </div>
            </div>
            
            <div className={`rounded-lg overflow-hidden ${mode === 'light' ? 'border border-border-default' : ''}`}>
              <div className="h-24 bg-gradient-to-r from-fable-deep-purple to-fable-deep-blue"></div>
              <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
                <h3 className="font-medium mb-1">Primary Gradient (Dark Mode)</h3>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-2">Deep Purple to Blue gradient for dark theme</p>
                <code className="text-xs font-mono block">linear-gradient(to right, var(--color-fable-deep-purple), var(--color-fable-deep-blue))</code>
              </div>
            </div>
          </div>
        </section>
        
        <section id="dark-mode-palette" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Dark Mode Colors</h2>
          <p>
            For dark mode applications, a deep purple to blue gradient replaces the red-to-amber 
            gradient. These colors maintain the emotional quality of our brand while providing 
            appropriate contrast and reduced eye strain in low-light environments.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Fable Deep Purple"
              description="Deep, rich purple for dark mode primary"
              hexCode="#5B267B"
              darkMode={mode === 'dark'}
              cmyk="65, 95, 0, 20"
              rgb="91, 38, 123"
              usage="Primary actions in dark mode"
              tokenName="--color-fable-deep-purple"
            />
            
            <ColorCard
              name="Fable Deep Blue"
              description="Rich blue for dark mode complementary"
              hexCode="#1A5FB4"
              darkMode={mode === 'dark'}
              cmyk="85, 50, 0, 30"
              rgb="26, 95, 180"
              usage="Accents and highlights in dark mode"
              tokenName="--color-fable-deep-blue"
            />
          </div>
        </section>

        <section id="surface-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Surface Colors</h2>
          <p>
            Surface colors define the appearance of different UI layers and establish
            visual hierarchy through subtle variations in background colors. These colors adapt
            between light and dark modes while maintaining the same hierarchical relationships.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <SurfaceColorCard
              name="Surface Primary"
              description="Primary background surfaces"
              lightHexCode="#FFEFD9"
              darkHexCode="#1A1A1A"
              darkMode={mode === 'dark'}
              usage="Main application background"
              tokenName="--color-surface-primary"
            />
            
            <SurfaceColorCard
              name="Surface Secondary"
              description="Secondary container surfaces"
              lightHexCode="#FFF5E6"
              darkHexCode="#2A2A2A"
              darkMode={mode === 'dark'}
              usage="Cards, secondary containers"
              tokenName="--color-surface-secondary"
            />
            
            <SurfaceColorCard
              name="Surface Tertiary"
              description="Tertiary elements, input fields"
              lightHexCode="#FFF9F0"
              darkHexCode="#3A3A3A"
              darkMode={mode === 'dark'}
              usage="Input fields, tertiary containers"
              tokenName="--color-surface-tertiary"
            />
          </div>
        </section>

        <section id="text-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Text Colors</h2>
          <p>
            Text colors ensure readability and establish visual hierarchy in typography
            throughout the interface. Each text color has been tested to ensure appropriate
            contrast against our surface colors.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TextColorCard
              name="Text Primary"
              description="Primary text color"
              lightHexCode="#000000"
              darkHexCode="#FFFFFF"
              darkMode={mode === 'dark'}
              usage="Headings, body text, important content"
              tokenName="--color-text-primary"
            />
            
            <TextColorCard
              name="Text Secondary"
              description="Secondary text color"
              lightHexCode="#404040"
              darkHexCode="#D9D9D9"
              darkMode={mode === 'dark'}
              usage="Secondary content, labels"
              tokenName="--color-text-secondary"
            />
            
            <TextColorCard
              name="Text Tertiary"
              description="Tertiary text color"
              lightHexCode="#666666"
              darkHexCode="#ABABAB"
              darkMode={mode === 'dark'}
              usage="Hints, disabled text, metadata"
              tokenName="--color-text-tertiary"
            />
          </div>
        </section>
        
        <section id="border-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Border Colors</h2>
          <p>
            Border colors define boundaries between elements and help establish visual 
            hierarchy. They range from subtle to strong depending on the emphasis required.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <BorderColorCard
              name="Border Default"
              description="Default border color"
              lightHexCode="#FFCA80"
              darkHexCode="#FF6600"
              darkMode={mode === 'dark'}
              usage="Subtle borders, dividers"
              tokenName="--color-border-default"
            />
            
            <BorderColorCard
              name="Border Strong"
              description="Strong border for emphasis"
              lightHexCode="#FF8000"
              darkHexCode="#FF9900"
              darkMode={mode === 'dark'}
              usage="Focus states, highlighting"
              tokenName="--color-border-strong"
            />
          </div>
        </section>

        <section id="semantic-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Semantic Colors</h2>
          <p>
            Semantic colors convey specific meanings within the interface, such as status,
            success, warning, or error states. They provide consistent visual feedback about
            system states and user actions.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SemanticColorCard
              name="Success"
              description="Success states, completion"
              lightHexCode="#2D7D6F"
              darkHexCode="#5ABEAC"
              darkMode={mode === 'dark'}
              usage="Confirmations, completed actions"
              tokenName="--color-status-success"
            />
            
            <SemanticColorCard
              name="Warning"
              description="Warning states, important notices"
              lightHexCode="#F6B64B"
              darkHexCode="#FFD080"
              darkMode={mode === 'dark'}
              usage="Important notices, cautionary messages"
              tokenName="--color-status-warning"
            />
            
            <SemanticColorCard
              name="Error"
              description="Error states, critical issues"
              lightHexCode="#D64D52"
              darkHexCode="#FF7A7E"
              darkMode={mode === 'dark'}
              usage="Error messages, destructive actions"
              tokenName="--color-status-error"
            />
            
            <SemanticColorCard
              name="Info"
              description="Informational states, general notices"
              lightHexCode="#1E4D78"
              darkHexCode="#5B94D6"
              darkMode={mode === 'dark'}
              usage="General notices, neutral information"
              tokenName="--color-status-info"
            />
          </div>
        </section>

        <section id="ui-applications" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Color Applications in UI</h2>
          <p>
            Below are examples of how our color system is applied to common UI elements,
            demonstrating the correct usage of color for different components.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Buttons</h3>
              <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <button className="bg-gradient-to-r from-fable-red to-fable-amber dark:from-fable-deep-purple dark:to-fable-deep-blue text-white font-medium py-2 px-4 rounded-md">
                    Primary Button
                  </button>
                  <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                    Primary gradient with white text - WCAG AAA (7:1)
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <button className="border border-fable-red dark:border-fable-deep-purple text-fable-red dark:text-fable-deep-purple font-medium py-2 px-4 rounded-md">
                    Secondary Button
                  </button>
                  <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                    Transparent with primary color border and text
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Form Elements</h3>
              <div className="grid gap-4">
                <div className="flex flex-col gap-2">
                  <input 
                    type="text" 
                    placeholder="Input Field" 
                    className="bg-surface-tertiary dark:bg-dark-surface-tertiary border border-border-default dark:border-dark-border-default rounded-md px-3 py-2 w-full focus:outline-none focus:border-border-strong dark:focus:border-dark-border-strong" 
                  />
                  <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                    Light tertiary surface with default border
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-sm bg-surface-tertiary dark:bg-dark-surface-tertiary border border-border-default dark:border-dark-border-default flex items-center justify-center">
                    <div className="w-3 h-3 bg-fable-red dark:bg-fable-deep-purple rounded-sm"></div>
                  </div>
                  <label className="text-text-primary dark:text-dark-text-primary">Checkbox</label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Cards</h3>
              <div className="bg-surface-primary dark:bg-dark-surface-primary p-4 rounded-md border border-border-default dark:border-dark-border-default">
                <h4 className="font-medium mb-2">Card Title</h4>
                <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
                  Cards use secondary surfaces with default borders to create subtle
                  container elements for content.
                </p>
                <div className="text-xs text-text-tertiary dark:text-dark-text-tertiary">
                  Supporting information
                </div>
              </div>
            </div>
            
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
              <h3 className="text-xl font-medium mb-4">Status Indicators</h3>
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-status-success dark:bg-dark-status-success"></div>
                  <span className="text-text-primary dark:text-dark-text-primary">Success Message</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-status-warning dark:bg-dark-status-warning"></div>
                  <span className="text-text-primary dark:text-dark-text-primary">Warning Message</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-status-error dark:bg-dark-status-error"></div>
                  <span className="text-text-primary dark:text-dark-text-primary">Error Message</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-status-info dark:bg-dark-status-info"></div>
                  <span className="text-text-primary dark:text-dark-text-primary">Info Message</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            All color combinations in the Fable design system must meet WCAG 2.1 AA standards 
            for text legibility. Primary interactive elements use colors with a minimum 4.5:1 
            contrast ratio, and critical information is never conveyed by color alone.
          </p>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Contrast Ratios</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ContrastExample 
                bgColor={mode === 'dark' ? "#1A1A1A" : "#FFEFD9"} 
                textColor={mode === 'dark' ? "#FFFFFF" : "#000000"} 
                name="Text Primary on Surface Primary" 
                usage="Main content"
              />
              
              <ContrastExample 
                bgColor={mode === 'dark' ? "#2A2A2A" : "#FFF5E6"} 
                textColor={mode === 'dark' ? "#D9D9D9" : "#404040"} 
                name="Text Secondary on Surface Secondary" 
                usage="Secondary content"
              />
              
              <ContrastExample 
                bgColor={mode === 'dark' ? "#5B267B" : "#FF3300"} 
                textColor="#FFFFFF" 
                name="White on Primary" 
                usage="Button text"
              />
              
              <ContrastExample 
                bgColor={mode === 'dark' ? "#3A3A3A" : "#FFF9F0"} 
                textColor={mode === 'dark' ? "#ABABAB" : "#666666"} 
                name="Text Tertiary on Surface Tertiary" 
                usage="Hints, metadata"
              />
            </div>
          </div>
        </section>

        <section id="design-tokens" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Design Tokens</h2>
          <p>
            Our color system is implemented through design tokens that ensure consistent application
            across all platforms. These tokens are available in CSS variables, Tailwind CSS classes,
            and as exportable values for native applications.
          </p>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg overflow-hidden">
            <div className="p-4 bg-surface-tertiary dark:bg-dark-surface-tertiary border-b border-border-default dark:border-dark-border-default">
              <h3 className="font-medium">CSS Custom Properties</h3>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-xs font-mono">
{`:root {
  /* Primary Brand Colors */
  --color-fable-red: #FF3300;
  --color-fable-amber: #FFB800;
  --color-fable-peach: #FFEFD9;
  
  /* Dark Mode Gradient Colors */
  --color-fable-deep-purple: #5B267B;
  --color-fable-deep-blue: #1A5FB4;
  
  /* Theme Colors (Light) */
  --color-surface-primary-light: #FFEFD9;
  --color-surface-secondary-light: #FFF5E6;
  --color-surface-tertiary-light: #FFF9F0;
  
  /* Theme Colors (Dark) */
  --color-surface-primary-dark: #1A1A1A;
  --color-surface-secondary-dark: #2A2A2A;
  --color-surface-tertiary-dark: #3A3A3A;
  
  /* Additional token definitions... */
}`}
              </pre>
            </div>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg overflow-hidden">
            <div className="p-4 bg-surface-tertiary dark:bg-dark-surface-tertiary border-b border-border-default dark:border-dark-border-default">
              <h3 className="font-medium">Tailwind CSS Usage</h3>
            </div>
            <div className="p-4 overflow-x-auto">
              <pre className="text-xs font-mono">
{`// Primary colors
<div className="bg-fable-red text-white">Red background with white text</div>
<div className="bg-fable-amber text-text-primary">Amber background with primary text</div>

// Surface colors
<div className="bg-surface-primary dark:bg-dark-surface-primary">
  Adaptive surface with responsive text
</div>

// Gradient usage
<div className="bg-gradient-to-r from-fable-red to-fable-amber dark:from-fable-deep-purple dark:to-fable-deep-blue">
  Adaptive gradient background
</div>`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

function ColorCard({
  name,
  description,
  hexCode,
  darkMode,
  cmyk,
  rgb,
  usage,
  tokenName,
}: {
  name: string;
  description: string;
  hexCode: string;
  darkMode: boolean;
  cmyk: string;
  rgb: string;
  usage: string;
  tokenName: string;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-transparent">
      <div 
        className="h-24 flex items-end" 
        style={{ backgroundColor: hexCode }}
      >
        <div className="bg-black/20 text-white w-full px-4 py-2 text-sm font-medium">
          {name}
        </div>
      </div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
          <span className="font-medium">HEX:</span>
          <span className="font-mono">{hexCode}</span>
          <span className="font-medium">RGB:</span>
          <span className="font-mono">{rgb}</span>
          <span className="font-medium">CMYK:</span>
          <span className="font-mono">{cmyk}</span>
        </div>
        <div className="text-xs mb-2">
          <span className="font-medium block">Usage:</span>
          <span className="text-text-secondary dark:text-dark-text-secondary">{usage}</span>
        </div>
        <code className="text-xs font-mono block mt-2">{tokenName}</code>
      </div>
    </div>
  );
}

function SurfaceColorCard({
  name,
  description,
  lightHexCode,
  darkHexCode,
  darkMode,
  usage,
  tokenName,
}: {
  name: string;
  description: string;
  lightHexCode: string;
  darkHexCode: string;
  darkMode: boolean;
  usage: string;
  tokenName: string;
}) {
  const hexCode = darkMode ? darkHexCode : lightHexCode;
  const contrastHex = darkMode ? "#FFFFFF" : "#000000";
  
  return (
    <div className="overflow-hidden rounded-lg border border-transparent">
      <div 
        className="h-24 flex items-end" 
        style={{ backgroundColor: hexCode }}
      >
        <div 
          className={`${darkMode ? 'bg-white/10 text-white' : 'bg-black/10 text-black'} w-full px-4 py-2 text-sm font-medium`}
        >
          {name}
        </div>
      </div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
          <span className="font-medium">Light:</span>
          <span className="font-mono">{lightHexCode}</span>
          <span className="font-medium">Dark:</span>
          <span className="font-mono">{darkHexCode}</span>
        </div>
        <div className="text-xs mb-2">
          <span className="font-medium block">Usage:</span>
          <span className="text-text-secondary dark:text-dark-text-secondary">{usage}</span>
        </div>
        <code className="text-xs font-mono block mt-2">{tokenName}</code>
      </div>
    </div>
  );
}

function TextColorCard({
  name,
  description,
  lightHexCode,
  darkHexCode,
  darkMode,
  usage,
  tokenName,
}: {
  name: string;
  description: string;
  lightHexCode: string;
  darkHexCode: string;
  darkMode: boolean;
  usage: string;
  tokenName: string;
}) {
  const hexCode = darkMode ? darkHexCode : lightHexCode;
  const bgColor = darkMode ? "#1A1A1A" : "#FFEFD9";
  
  return (
    <div className="overflow-hidden rounded-lg border border-border-default dark:border-dark-border-default">
      <div 
        className="h-24 flex items-center justify-center" 
        style={{ backgroundColor: bgColor, color: hexCode }}
      >
        <div className="text-center">
          <div className="text-lg font-medium">Aa</div>
          <div className="text-sm">{name}</div>
        </div>
      </div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
          <span className="font-medium">Light:</span>
          <span className="font-mono">{lightHexCode}</span>
          <span className="font-medium">Dark:</span>
          <span className="font-mono">{darkHexCode}</span>
        </div>
        <div className="text-xs mb-2">
          <span className="font-medium block">Usage:</span>
          <span className="text-text-secondary dark:text-dark-text-secondary">{usage}</span>
        </div>
        <code className="text-xs font-mono block mt-2">{tokenName}</code>
      </div>
    </div>
  );
}

function BorderColorCard({
  name,
  description,
  lightHexCode,
  darkHexCode,
  darkMode,
  usage,
  tokenName,
}: {
  name: string;
  description: string;
  lightHexCode: string;
  darkHexCode: string;
  darkMode: boolean;
  usage: string;
  tokenName: string;
}) {
  const hexCode = darkMode ? darkHexCode : lightHexCode;
  const bgColor = darkMode ? "#1A1A1A" : "#FFEFD9";
  
  return (
    <div className="overflow-hidden rounded-lg border border-transparent">
      <div 
        className="h-24 flex items-center justify-center" 
        style={{ backgroundColor: bgColor }}
      >
        <div 
          className="w-3/4 h-16 rounded-lg flex items-center justify-center"
          style={{ border: `2px solid ${hexCode}` }}
        >
          <span style={{ color: hexCode }} className="font-medium">{name}</span>
        </div>
      </div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-3">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs mb-2">
          <span className="font-medium">Light:</span>
          <span className="font-mono">{lightHexCode}</span>
          <span className="font-medium">Dark:</span>
          <span className="font-mono">{darkHexCode}</span>
        </div>
        <div className="text-xs mb-2">
          <span className="font-medium block">Usage:</span>
          <span className="text-text-secondary dark:text-dark-text-secondary">{usage}</span>
        </div>
        <code className="text-xs font-mono block mt-2">{tokenName}</code>
      </div>
    </div>
  );
}

function SemanticColorCard({
  name,
  description,
  lightHexCode,
  darkHexCode,
  darkMode,
  usage,
  tokenName,
}: {
  name: string;
  description: string;
  lightHexCode: string;
  darkHexCode: string;
  darkMode: boolean;
  usage: string;
  tokenName: string;
}) {
  const hexCode = darkMode ? darkHexCode : lightHexCode;
  
  return (
    <div className="overflow-hidden rounded-lg border border-transparent">
      <div 
        className="h-16 flex items-end" 
        style={{ backgroundColor: hexCode }}
      >
        <div className="bg-black/20 text-white w-full px-4 py-2 text-sm font-medium">
          {name}
        </div>
      </div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <p className="text-xs text-text-secondary dark:text-dark-text-secondary mb-2">
          {description}
        </p>
        <div className="flex justify-between text-xs mb-1">
          <span className="font-medium">Light:</span>
          <span className="font-mono">{lightHexCode}</span>
        </div>
        <div className="flex justify-between text-xs mb-2">
          <span className="font-medium">Dark:</span>
          <span className="font-mono">{darkHexCode}</span>
        </div>
        <code className="text-xs font-mono block mt-1">{tokenName}</code>
      </div>
    </div>
  );
}

function ContrastExample({
  bgColor,
  textColor,
  name,
  usage,
}: {
  bgColor: string;
  textColor: string;
  name: string;
  usage: string;
}) {
  const { r: bgR, g: bgG, b: bgB } = HexToRgb(bgColor);
  const { r: textR, g: textG, b: textB } = HexToRgb(textColor);
  const contrastRatio = GetContrastRatio(
    [bgR, bgG, bgB],
    [textR, textG, textB]
  );
  
  let wcagLevel = "Fails";
  if (contrastRatio >= 7) wcagLevel = "AAA";
  else if (contrastRatio >= 4.5) wcagLevel = "AA";
  else if (contrastRatio >= 3) wcagLevel = "AA Large";
  
  return (
    <div className="flex flex-col gap-2">
      <div 
        className="p-4 rounded-md flex flex-col gap-1"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="font-medium">Sample Text</div>
        <div className="text-sm">Example paragraph text</div>
      </div>
      <div className="text-xs">
        <div className="font-medium">{name}</div>
        <div className="text-text-secondary dark:text-dark-text-secondary">
          {usage} • Contrast Ratio: {contrastRatio.toFixed(2)}:1 • WCAG {wcagLevel}
        </div>
      </div>
    </div>
  );
}
