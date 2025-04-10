import React from 'react';
import Sidebar from '../../components/sidebar';
import Header from '../../components/header';
import TokenGrid from '../../components/design-tokens/TokenGrid';
import ColorToken from '../../components/design-tokens/ColorToken';
import TypographyToken from '../../components/design-tokens/TypographyToken';
import SpacingToken from '../../components/design-tokens/SpacingToken';
import RadiusToken from '../../components/design-tokens/RadiusToken';
import ElevationToken from '../../components/design-tokens/ElevationToken';
import MotionToken from '../../components/design-tokens/MotionToken';
import CodeSnippet from '../../components/design-tokens/CodeSnippet';

import { 
  colorTokens, 
  typographyTokens,
  spacingTokens,
  borderRadiusTokens,
  elevationTokens,
  motionTokens
} from '../../lib/design-tokens';

import {
  cssExamples,
  tailwindExamples,
  reactExamples
} from '../../lib/code-examples';

export default function DesignFoundations() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto space-y-xl">
            {/* Introduction */}
            <section className="mb-xl">
              <h1 className="mb-m">Design Foundations</h1>
              <p className="text-lg max-w-3xl mb-xl">
                The core design elements that form the foundation of Fable's visual language and inform all product experiences. 
                This is a comprehensive showcase of our design tokens as defined in the Design System Document (DSD).
              </p>
            </section>

            {/* Color System */}
            <section id="colors" className="scroll-mt-xl">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Color System</h2>
                <p className="max-w-3xl mb-m">Our color palette is designed to evoke warmth, storytelling, and accessibility across all experiences.</p>
              </div>

              {/* Brand Colors */}
              <h3 className="text-title-2 mb-m">Brand Colors</h3>
              <TokenGrid 
                tokens={colorTokens.brand}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Semantic Colors */}
              <h3 className="text-title-2 mb-m mt-xl">Semantic Colors</h3>
              <TokenGrid 
                tokens={colorTokens.semantic}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Surface Colors */}
              <h3 className="text-title-2 mb-m mt-xl">Surface Colors</h3>
              <TokenGrid 
                tokens={colorTokens.surfaces}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Text Colors */}
              <h3 className="text-title-2 mb-m mt-xl">Text Colors</h3>
              <TokenGrid 
                tokens={colorTokens.text}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Border Colors */}
              <h3 className="text-title-2 mb-m mt-xl">Border Colors</h3>
              <TokenGrid 
                tokens={colorTokens.border}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Status Colors */}
              <h3 className="text-title-2 mb-m mt-xl">Status Colors</h3>
              <TokenGrid 
                tokens={colorTokens.status}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Gradients */}
              <h3 className="text-title-2 mb-m mt-xl">Gradient Colors</h3>
              <TokenGrid 
                tokens={colorTokens.gradients}
                renderItem={(token) => <ColorToken token={token} />}
              />

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.colors}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.colors}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* Typography System */}
            <section id="typography" className="scroll-mt-xl mt-2xl pt-l">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Typography System</h2>
                <p className="max-w-3xl mb-m">Our typography system is designed for optimal readability, accessibility, and information hierarchy.</p>
              </div>

              {/* Font Families */}
              <h3 className="text-title-2 mb-m">Font Families</h3>
              <TokenGrid 
                tokens={typographyTokens.fontFamilies}
                renderItem={(token) => (
                  <TypographyToken 
                    token={token} 
                    previewText={`The quick brown fox jumps over the lazy dog`}
                  />
                )}
                columns={2}
              />

              {/* Text Styles */}
              <h3 className="text-title-2 mb-m mt-xl">Text Styles</h3>
              <div className="space-y-m">
                {typographyTokens.textStyles.map((token, index) => (
                  <TypographyToken 
                    key={index}
                    token={token} 
                    previewText={token.name}
                  />
                ))}
              </div>

              {/* Font Sizes */}
              <h3 className="text-title-2 mb-m mt-xl">Font Sizes</h3>
              <TokenGrid 
                tokens={typographyTokens.fontSizes}
                renderItem={(token) => (
                  <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-s border border-border">
                    <p className="font-bold mb-xs">{token.name}</p>
                    <p style={{ fontSize: token.value }}>
                      {token.value}
                    </p>
                    <code className="text-xs font-mono mt-s block">{token.variable}</code>
                    <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">{token.tailwind}</code>
                  </div>
                )}
                columns={4}
              />

              {/* Font Weights */}
              <h3 className="text-title-2 mb-m mt-xl">Font Weights</h3>
              <TokenGrid 
                tokens={typographyTokens.fontWeights}
                renderItem={(token) => (
                  <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-s border border-border">
                    <p className="mb-xs">{token.name}</p>
                    <p style={{ fontWeight: token.value as any }}>
                      The quick brown fox
                    </p>
                    <code className="text-xs font-mono mt-s block">{token.variable}</code>
                    <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">{token.tailwind}</code>
                  </div>
                )}
                columns={3}
              />

              {/* Line Heights */}
              <h3 className="text-title-2 mb-m mt-xl">Line Heights</h3>
              <TokenGrid 
                tokens={typographyTokens.lineHeights}
                renderItem={(token) => (
                  <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-s border border-border">
                    <p className="font-bold mb-xs">{token.name}</p>
                    <p style={{ lineHeight: token.value as any }}>
                      This text demonstrates the {token.name} line height with a value of {token.value}. Multiple lines show the effect.
                    </p>
                    <code className="text-xs font-mono mt-s block">{token.variable}</code>
                    <code className="text-xs font-mono text-text-tertiary dark:text-dark-text-tertiary">{token.tailwind}</code>
                  </div>
                )}
                columns={2}
              />

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.typography}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.typography}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* Spacing System */}
            <section id="spacing" className="scroll-mt-xl mt-2xl pt-l">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Spacing System</h2>
                <p className="max-w-3xl mb-m">Our spacing system ensures consistent rhythm and hierarchy across all layouts and components.</p>
              </div>

              <h3 className="text-title-2 mb-m">Spacing Scale</h3>
              <div className="space-y-m">
                {spacingTokens.map((token, index) => (
                  <SpacingToken key={index} token={token} />
                ))}
              </div>

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.spacing}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.spacing}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* Border Radius System */}
            <section id="radius" className="scroll-mt-xl mt-2xl pt-l">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Border Radius System</h2>
                <p className="max-w-3xl mb-m">Our border radius scale creates consistent visual identity across all user interface elements.</p>
              </div>

              <h3 className="text-title-2 mb-m">Radius Scale</h3>
              <div className="space-y-m">
                {borderRadiusTokens.map((token, index) => (
                  <RadiusToken key={index} token={token} />
                ))}
              </div>

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.radius}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.radius}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* Elevation System */}
            <section id="elevation" className="scroll-mt-xl mt-2xl pt-l">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Elevation System</h2>
                <p className="max-w-3xl mb-m">Our elevation system provides consistent depth cues and visual hierarchy through shadows.</p>
              </div>

              <h3 className="text-title-2 mb-m">Elevation Scale</h3>
              <TokenGrid 
                tokens={elevationTokens}
                renderItem={(token) => <ElevationToken token={token} />}
                columns={2}
              />

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.elevation}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.elevation}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* Motion System */}
            <section id="motion" className="scroll-mt-xl mt-2xl pt-l">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">Motion System</h2>
                <p className="max-w-3xl mb-m">Our motion system creates natural, purposeful animation throughout the interface.</p>
              </div>

              <h3 className="text-title-2 mb-m">Duration Tokens</h3>
              <TokenGrid 
                tokens={motionTokens.durations}
                renderItem={(token) => <MotionToken token={token} type="duration" />}
                columns={2}
              />

              <h3 className="text-title-2 mb-m mt-xl">Easing Tokens</h3>
              <TokenGrid 
                tokens={motionTokens.easings}
                renderItem={(token) => <MotionToken token={token} type="easing" />}
                columns={3}
              />

              <h3 className="text-title-2 mb-m mt-xl">Transition Presets</h3>
              <TokenGrid 
                tokens={motionTokens.transitions}
                renderItem={(token) => <MotionToken token={token} type="transition" />}
                columns={2}
              />

              {/* Usage Examples */}
              <div className="mt-xl space-y-m">
                <h3 className="text-title-2 mb-m">Usage Examples</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-m">
                  <CodeSnippet 
                    title="CSS Custom Properties"
                    code={cssExamples.motion}
                    language="css"
                  />
                  
                  <CodeSnippet 
                    title="Tailwind Classes"
                    code={tailwindExamples.motion}
                    language="jsx"
                  />
                </div>
              </div>
            </section>

            {/* React Component Examples */}
            <section id="examples" className="scroll-mt-xl mt-2xl pt-l mb-2xl">
              <div className="border-b border-border pb-s mb-l">
                <h2 className="text-title-1">React Component Examples</h2>
                <p className="max-w-3xl mb-m">Learn how to implement design tokens in real-world React components.</p>
              </div>

              <div className="space-y-l">
                <CodeSnippet 
                  title="Theme Toggle Component"
                  code={reactExamples.themeToggle}
                  language="jsx"
                />
                
                <CodeSnippet 
                  title="Animated Button Component"
                  code={reactExamples.animatedButton}
                  language="jsx"
                />
                
                <CodeSnippet 
                  title="Responsive Card Component"
                  code={reactExamples.responsiveCard}
                  language="jsx"
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
