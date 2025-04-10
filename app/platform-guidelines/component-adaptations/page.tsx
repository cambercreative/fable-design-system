import { Metadata } from 'next';
import { PageHeader } from '../../../components/page-header';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Platform-Specific Component Adaptations | Fable Design System',
  description: 'Detailed guidelines for adapting Fable components across iOS and Android platforms.',
};

export default function ComponentAdaptationsPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        heading="Platform-Specific Component Adaptations" 
        subheading="Detailed guidelines for adapting Fable components across iOS and Android platforms"
      />
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="lead">
          This document provides detailed guidelines for adapting Fable's component library to platform-specific 
          conventions while maintaining our brand identity. It defines when to adhere strictly to platform 
          guidelines versus when to prioritize Fable's unique design language.
        </p>
        
        <div className="not-prose bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg my-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-2">Component Adaptation Tables</h3>
            <p>
              The tables below provide a comprehensive breakdown of how each Fable component should be adapted 
              for iOS and Android platforms, with specific implementation details and code references.
            </p>
          </div>
          <div>
            <Link 
              href="/platform-guidelines" 
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              Back to Platform Guidelines
            </Link>
          </div>
        </div>
      </div>

      <section id="navigation-components" className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Navigation Components</h2>
        
        <div className="rounded-md border">
          <div className="bg-muted px-4 py-3 rounded-t-md border-b">
            <h3 className="text-lg font-medium">Bottom Tab Bar</h3>
          </div>
          <div className="p-0">
            <table className="w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">iOS Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Android Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Brand Consistency Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Visual Appearance</td>
                  <td className="px-4 py-3 text-sm">Floating tab bar with subtle shadow (elevation-2)</td>
                  <td className="px-4 py-3 text-sm">Material bottom navigation with slight elevation</td>
                  <td className="px-4 py-3 text-sm">Consistent use of Fable Red for active indicators</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Positioning</td>
                  <td className="px-4 py-3 text-sm">Bottom of screen, above home indicator with 8px spacing</td>
                  <td className="px-4 py-3 text-sm">Bottom of screen, flush to edge</td>
                  <td className="px-4 py-3 text-sm">Identical number and order of tabs across platforms</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Active Indicator</td>
                  <td className="px-4 py-3 text-sm">2px line above icon</td>
                  <td className="px-4 py-3 text-sm">Pill-shaped highlight behind icon and text</td>
                  <td className="px-4 py-3 text-sm">Active color must be Fable Red</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Animation</td>
                  <td className="px-4 py-3 text-sm">Subtle scale on press (95%) with timing-quick</td>
                  <td className="px-4 py-3 text-sm">Material ripple effect on press</td>
                  <td className="px-4 py-3 text-sm">Transition timing should feel responsive on both platforms</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Implementation</td>
                  <td className="px-4 py-3 text-sm"><code>UITabBarController</code> with custom styling</td>
                  <td className="px-4 py-3 text-sm">Material Design <code>BottomNavigationView</code></td>
                  <td className="px-4 py-3 text-sm">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-muted/50 px-4 py-3 rounded-b-md">
            <h4 className="font-medium mb-2">Design Decision Guidance:</h4>
            <ul className="text-sm space-y-1">
              <li>• Platform conventions take priority for visual treatment and feedback</li>
              <li>• Maintain Fable's brand color for active state indicators</li>
              <li>• Ensure identical information architecture across platforms</li>
            </ul>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="bg-muted px-4 py-3 rounded-t-md border-b">
            <h3 className="text-lg font-medium">Navigation Bar</h3>
          </div>
          <div className="p-0">
            <table className="w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">iOS Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Android Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Brand Consistency Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Title Alignment</td>
                  <td className="px-4 py-3 text-sm">Center-aligned title</td>
                  <td className="px-4 py-3 text-sm">Left-aligned title</td>
                  <td className="px-4 py-3 text-sm">Use Faro typeface consistently</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Back Button</td>
                  <td className="px-4 py-3 text-sm">Chevron with optional label</td>
                  <td className="px-4 py-3 text-sm">Standard up/back arrow</td>
                  <td className="px-4 py-3 text-sm">Use platform-standard back patterns</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Elevation</td>
                  <td className="px-4 py-3 text-sm">Flat by default, shadow appears on scroll</td>
                  <td className="px-4 py-3 text-sm">4dp elevation by default</td>
                  <td className="px-4 py-3 text-sm">Background color must be consistent</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Implementation</td>
                  <td className="px-4 py-3 text-sm"><code>UINavigationBar</code> with appearance configuration</td>
                  <td className="px-4 py-3 text-sm">Material <code>TopAppBar</code> or <code>CollapsingToolbarLayout</code></td>
                  <td className="px-4 py-3 text-sm">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-muted/50 px-4 py-3 rounded-b-md">
            <h4 className="font-medium mb-2">Design Decision Guidance:</h4>
            <ul className="text-sm space-y-1">
              <li>• Follow platform conventions for alignment, elevation, and back button presentation</li>
              <li>• Maintain Fable's typography and color system</li>
              <li>• Adapt large title feature only on iOS where users expect it</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="input-components" className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Input Components</h2>
        
        <div className="rounded-md border">
          <div className="bg-muted px-4 py-3 rounded-t-md border-b">
            <h3 className="text-lg font-medium">Buttons</h3>
          </div>
          <div className="p-0">
            <table className="w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">iOS Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Android Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Brand Consistency Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Primary Button</td>
                  <td className="px-4 py-3 text-sm">
                    Corner radius: 10pt<br/>
                    Height: 44pt standard, 50pt important
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Corner radius: 4dp<br/>
                    Height: 36dp standard, 48dp important
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Fable gradient background<br/>
                    Faro Bold text<br/>
                    White text color
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Secondary Button</td>
                  <td className="px-4 py-3 text-sm">
                    More rounded corners matching iOS aesthetic<br/>
                    1pt border
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Angular corners matching Material Design<br/>
                    1dp border
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Consistent border gradient<br/>
                    Faro Bold text<br/>
                    Fable Red text color
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Touch Feedback</td>
                  <td className="px-4 py-3 text-sm">
                    Subtle scale animation (98%)<br/>
                    No ripple effect
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Material ripple effect<br/>
                    No scale animation
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Consistent color shifts for hover/press states
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Implementation</td>
                  <td className="px-4 py-3 text-sm">Custom <code>UIButton</code> configuration</td>
                  <td className="px-4 py-3 text-sm"><code>MaterialButton</code> with appropriate style</td>
                  <td className="px-4 py-3 text-sm">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-muted/50 px-4 py-3 rounded-b-md">
            <h4 className="font-medium mb-2">Design Decision Guidance:</h4>
            <ul className="text-sm space-y-1">
              <li>• Adapt corner radius to match platform expectations</li>
              <li>• Use platform-native feedback animations</li>
              <li>• Maintain Fable's color gradient, typography, and text colors consistently</li>
            </ul>
          </div>
        </div>

        <div className="rounded-md border">
          <div className="bg-muted px-4 py-3 rounded-t-md border-b">
            <h3 className="text-lg font-medium">Form Inputs</h3>
          </div>
          <div className="p-0">
            <table className="w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Aspect</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">iOS Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Android Adaptation</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Brand Consistency Requirements</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Text Input</td>
                  <td className="px-4 py-3 text-sm">
                    Rounded rect with 10pt corners<br/>
                    Bottom action sheet for extended options
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Outlined or filled style with 4dp corners<br/>
                    Floating label when focused
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Consistent focus color (Fable Red)<br/>
                    Consistent typography (Atkinson Hyperlegible Next)
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Selection Controls</td>
                  <td className="px-4 py-3 text-sm">
                    iOS-styled switches (taller, more rounded)<br/>
                    Checkboxes with iOS checkmark style
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Material Design switches (wider, flatter)<br/>
                    Checkboxes with Material checkmark style
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Consistent use of Fable Red for selected states<br/>
                    Consistent label alignment and spacing
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Error States</td>
                  <td className="px-4 py-3 text-sm">
                    Red outline with error below the field
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Red outline with error text and icon
                  </td>
                  <td className="px-4 py-3 text-sm">
                    Consistent error color<br/>
                    Error message position should match platform conventions
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium">Implementation</td>
                  <td className="px-4 py-3 text-sm">
                    <code>UITextField</code> with custom styling<br/>
                    <code>UISwitch</code> with tint colors
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <code>TextInputLayout</code> with appropriate style<br/>
                    <code>SwitchMaterial</code> component
                  </td>
                  <td className="px-4 py-3 text-sm">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-muted/50 px-4 py-3 rounded-b-md">
            <h4 className="font-medium mb-2">Design Decision Guidance:</h4>
            <ul className="text-sm space-y-1">
              <li>• Adapt control shapes and interactive behaviors to match platform</li>
              <li>• Maintain consistent color application for states (focus, error, selected)</li>
              <li>• Follow platform conventions for helper/error text placement</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="implementation-workflow" className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Implementation Workflow</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">iOS Implementation</h3>
            
            <h4 className="font-medium mb-2">UIKit Component Mapping</h4>
            <table className="w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left text-sm pb-2">Fable Component</th>
                  <th className="text-left text-sm pb-2">UIKit Component</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-1">Bottom Tab Bar</td>
                  <td className="py-1 font-mono text-xs">UITabBarController</td>
                </tr>
                <tr>
                  <td className="py-1">Navigation Bar</td>
                  <td className="py-1 font-mono text-xs">UINavigationBar</td>
                </tr>
                <tr>
                  <td className="py-1">Primary Button</td>
                  <td className="py-1 font-mono text-xs">UIButton</td>
                </tr>
                <tr>
                  <td className="py-1">Text Input</td>
                  <td className="py-1 font-mono text-xs">UITextField</td>
                </tr>
                <tr>
                  <td className="py-1">Story Card</td>
                  <td className="py-1 font-mono text-xs">Custom UIView</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="font-medium mb-2">iOS-Specific Guidelines</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Dynamic Type Support:</strong> All text components must respect user's preferred text size</li>
              <li>• <strong>Dark Mode:</strong> Use semantic colors that automatically adapt</li>
              <li>• <strong>Device Adaptations:</strong> Account for notch and Dynamic Island on applicable devices</li>
              <li>• <strong>Gestures:</strong> Support swipe back gesture with navigation controller</li>
            </ul>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">Android Implementation</h3>
            
            <h4 className="font-medium mb-2">Material Component Mapping</h4>
            <table className="w-full mb-6">
              <thead>
                <tr>
                  <th className="text-left text-sm pb-2">Fable Component</th>
                  <th className="text-left text-sm pb-2">Material Component</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-1">Bottom Tab Bar</td>
                  <td className="py-1 font-mono text-xs">BottomNavigationView</td>
                </tr>
                <tr>
                  <td className="py-1">Navigation Bar</td>
                  <td className="py-1 font-mono text-xs">TopAppBar</td>
                </tr>
                <tr>
                  <td className="py-1">Primary Button</td>
                  <td className="py-1 font-mono text-xs">MaterialButton</td>
                </tr>
                <tr>
                  <td className="py-1">Text Input</td>
                  <td className="py-1 font-mono text-xs">TextInputLayout</td>
                </tr>
                <tr>
                  <td className="py-1">Story Card</td>
                  <td className="py-1 font-mono text-xs">MaterialCardView</td>
                </tr>
              </tbody>
            </table>
            
            <h4 className="font-medium mb-2">Android-Specific Guidelines</h4>
            <ul className="text-sm space-y-2">
              <li>• <strong>Device Fragmentation:</strong> Test on multiple screen sizes and pixel densities</li>
              <li>• <strong>Theme Implementation:</strong> Use Material Theme attributes for consistent styling</li>
              <li>• <strong>Material You:</strong> Support dynamic color system on Android 12+ devices</li>
              <li>• <strong>Performance:</strong> Optimize for lower-end devices with efficient layouts</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section id="platform-decision-tree" className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Decision Tree: Platform Adaptation vs. Brand Consistency</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">When to Favor Platform Conventions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Navigation Patterns</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Use platform-standard back navigation</li>
                  <li>• Follow platform tab bar styling</li>
                  <li>• Implement platform-specific gestures for navigation</li>
                  <li>• Position navigation elements according to platform standards</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Input Behaviors</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Use platform-standard keyboard behaviors</li>
                  <li>• Implement platform-appropriate form controls</li>
                  <li>• Follow platform conventions for selection behaviors</li>
                  <li>• Use platform-standard text selection mechanisms</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">System Integration</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Use native share functionality</li>
                  <li>• Implement platform-standard permissions requests</li>
                  <li>• Follow platform conventions for notifications</li>
                  <li>• Integrate with platform-specific features</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">When to Maintain Brand Consistency</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Visual Identity</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Use Fable color palette consistently</li>
                  <li>• Maintain consistent typography hierarchy</li>
                  <li>• Keep illustrative elements identical</li>
                  <li>• Apply consistent imagery treatment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Core Experience Elements</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Voice visualization animation</li>
                  <li>• Story playback controls</li>
                  <li>• Conversation bubble structure</li>
                  <li>• Interview flow and interactions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Content Presentation</h4>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Story card information hierarchy</li>
                  <li>• Content organization and grouping</li>
                  <li>• Reading experience layout</li>
                  <li>• Collection presentation style</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}