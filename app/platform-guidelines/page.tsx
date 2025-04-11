import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const metadata: Metadata = {
  title: 'Platform-Specific Guidelines | Fable Design System',
  description: 'How Fable's design system adapts for iOS and Android while maintaining a consistent cross-platform identity.',
};

export default function PlatformGuidelinesPage() {
  return (
    <div className="space-y-8">
      <PageHeader 
        heading="Platform-Specific Guidelines" 
        subheading="How Fable's design system adapts for iOS (HIG) and Android (Material Design) while maintaining a consistent cross-platform identity"
      />

      <div className="prose dark:prose-invert max-w-none">
        <h2>Cross-Platform Design Philosophy</h2>
        <p>
          Fable's approach to platform-specific design balances the need for a consistent brand experience 
          with the importance of following platform conventions. This ensures our app feels native and intuitive 
          on each platform while maintaining Fable's unique identity.
        </p>

        <h3>Core Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-8">
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Core Experience Consistency</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Identical feature availability across platforms</li>
              <li>Consistent information architecture and user flows</li>
              <li>Unified visual language for brand elements</li>
              <li>Equivalent accessibility capabilities</li>
            </ul>
          </div>
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Platform-Appropriate Adaptations</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Native navigation patterns for each platform</li>
              <li>Platform-standard input behaviors</li>
              <li>Adapted component styling to match platform expectations</li>
              <li>Hardware-specific optimizations</li>
            </ul>
          </div>
        </div>

        <h3>Decision Framework</h3>
        <p>
          When determining the approach for any UI element, we prioritize in this order:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>User Safety & Accessibility:</strong> Never compromise on accessibility standards or safe interaction patterns</li>
          <li><strong>Core Functionality:</strong> Ensure the primary function works as expected on each platform</li>
          <li><strong>Platform Conventions:</strong> Follow platform navigation and interaction patterns where users have strong expectations</li>
          <li><strong>Brand Consistency:</strong> Apply Fable's unique design language consistently where it doesn't conflict with the above priorities</li>
        </ol>
      </div>

      <Tabs defaultValue="comparison" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="comparison">Platform Comparison</TabsTrigger>
          <TabsTrigger value="ios">iOS Guidelines</TabsTrigger>
          <TabsTrigger value="android">Android Guidelines</TabsTrigger>
        </TabsList>
        
        <TabsContent value="comparison" className="mt-6 space-y-8">
          <h3 className="text-2xl font-semibold">Platform Comparison</h3>
          <p className="text-lg">Compare how key components adapt across iOS and Android while maintaining Fable's identity</p>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-8 mt-6">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Navigation Patterns</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">Navigation follows platform conventions while maintaining consistent structure and iconography</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-4 pb-6 shadow-md">
                  <div className="h-12 border-b border-gray-200 flex items-center justify-center relative mb-6">
                    <div className="absolute left-4 w-6 h-6 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                        <path d="M11.67 1.77L9.9 0L0 10L9.9 20L11.67 18.23L3.54 10L11.67 1.77Z" fill="#007AFF"/>
                      </svg>
                    </div>
                    <span className="font-medium text-center">Stories</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 px-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-gray-100 rounded-lg p-3 aspect-[3/4]">
                        <div className="w-full h-3/5 bg-gradient-to-r from-[#1E4D78] to-[#FF8552] rounded-md mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded-full w-4/5 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded-full w-2/3"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">iOS (HIG)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• Center-aligned title</li>
                    <li>• Back chevron with larger tap target</li>
                    <li>• iOS-standard navigation bar</li>
                    <li>• Flat navigation bar (elevates on scroll)</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-4 pb-6 shadow-md">
                  <div className="h-12 border-b border-gray-200 flex items-center px-4 relative mb-6">
                    <div className="w-6 h-6 mr-4 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#1E4D78"/>
                      </svg>
                    </div>
                    <span className="font-medium">Stories</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 px-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="bg-gray-100 rounded-md p-3 aspect-[3/4]">
                        <div className="w-full h-3/5 bg-gradient-to-r from-[#1E4D78] to-[#FF8552] rounded mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded-full w-4/5 mb-1"></div>
                        <div className="h-2 bg-gray-300 rounded-full w-2/3"></div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">Android (Material Design)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• Left-aligned title</li>
                    <li>• Standard back arrow</li>
                    <li>• Material top app bar</li>
                    <li>• Slight elevation (4dp)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-8 mt-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Buttons</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">Button shapes adapt to platform conventions while maintaining Fable's brand colors and gradients</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-md flex flex-col items-center space-y-4">
                  <button className="bg-gradient-to-r from-[#1E4D78] to-[#FF8552] text-white font-medium py-3 px-6 rounded-xl w-48">Primary Button</button>
                  <button className="border-2 border-[#1E4D78] text-[#1E4D78] font-medium py-3 px-6 rounded-xl w-48">Secondary Button</button>
                  <button className="text-[#1E4D78] font-medium py-3 px-6 w-48">Tertiary Button</button>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">iOS (HIG)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• More rounded corners (10pt)</li>
                    <li>• Taller buttons (44pt standard)</li>
                    <li>• Scale animation on press</li>
                    <li>• iOS-standard layout adjustments</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-md flex flex-col items-center space-y-4">
                  <button className="bg-gradient-to-r from-[#1E4D78] to-[#FF8552] text-white font-medium py-2 px-5 rounded-md w-48">PRIMARY BUTTON</button>
                  <button className="border border-[#1E4D78] text-[#1E4D78] font-medium py-2 px-5 rounded-md w-48">SECONDARY BUTTON</button>
                  <button className="text-[#1E4D78] font-medium py-2 px-5 w-48">TERTIARY BUTTON</button>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">Android (Material Design)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• Angular corners (4dp)</li>
                    <li>• Standard Material heights (36dp)</li>
                    <li>• Material ripple effect on touch</li>
                    <li>• All caps button text</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-8 mt-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">Form Controls</h4>
              <p className="text-muted-foreground max-w-2xl mx-auto">Input components follow platform conventions while maintaining consistent typography and color</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-md">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Text Field</label>
                      <div className="border border-gray-300 rounded-lg px-4 py-3">
                        <span className="text-gray-500">Enter text...</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Selection</label>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-[#1E4D78] flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-[#1E4D78]"></div>
                        </div>
                        <span>Option One</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>
                        <span>Option Two</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">iOS (HIG)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• Rounded input corners</li>
                    <li>• iOS-style selection controls</li>
                    <li>• Clear button on right side</li>
                    <li>• Bottom action sheet for options</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-[#FFFFFF] rounded-xl p-6 shadow-md">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="border border-gray-300 rounded-md px-4 pt-3 pb-2 relative">
                        <span className="text-[#1E4D78] text-xs absolute -top-2 left-2 bg-white px-1">Text Field</span>
                        <span className="text-gray-500">Enter text...</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium">Selection</label>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full border-2 border-[#1E4D78] flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-full bg-[#1E4D78]"></div>
                        </div>
                        <span>Option One</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div>
                        <span>Option Two</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h5 className="font-medium">Android (Material Design)</h5>
                  <ul className="text-sm text-left mt-2 space-y-1">
                    <li>• Outlined or filled text fields</li>
                    <li>• Floating labels</li>
                    <li>• Material-style selection controls</li>
                    <li>• Android-native selection dialogs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-8 mt-8">
            <div className="text-center mb-8">
              <h4 className="text-xl font-semibold mb-2">When to Follow Platform vs. When to Stay Consistent</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4">Follow Platform Conventions</h5>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Navigation patterns (back buttons, tabs, drawers)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Input behaviors (keyboards, selection methods)</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Control shapes and interaction feedback</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>System integration (share, permissions, notifications)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
                <h5 className="text-lg font-semibold mb-4">Maintain Brand Consistency</h5>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Color palette and brand gradients</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Typography hierarchy and font family</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Iconography style and metaphors</span>
                  </li>
                  <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 flex-shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>Core experience elements (voice UI, story cards)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="ios" className="mt-6 space-y-6">
          <h3 className="text-2xl font-semibold">iOS Implementation Guidelines</h3>
          <p className="text-lg">How Fable components adapt to iOS Human Interface Guidelines</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3>iOS Design Principles</h3>
            <p>
              Our iOS implementation embraces Apple's Human Interface Guidelines while maintaining Fable's unique identity. 
              We respect iOS design metaphors and mental models to ensure the app feels native and intuitive to iOS users.
            </p>
            
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Key Human Interface Guidelines Principles</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Embrace clarity, deference, and depth</li>
                <li>Respect iOS design metaphors and mental models</li>
                <li>Support system features like Dynamic Type and Dark Mode</li>
                <li>Maintain expected behavior patterns</li>
              </ul>
            </div>
            
            <h3>iOS Component Implementation</h3>
            
            <h4>Typography Implementation</h4>
            <ul>
              <li><strong>Primary:</strong> SF Pro as system font replacement for Atkinson Hyperlegible</li>
              <li><strong>Secondary:</strong> New York as system serif replacement for Sentinel</li>
              <li><strong>Dynamic Type Support:</strong> All text scales appropriately with user settings</li>
              <li><strong>Weight Mapping:</strong> Consistent font weight mapping between custom and system fonts</li>
            </ul>
            
            <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 my-6">
              <div className="mb-4">
                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">SF Pro (Primary)</span>
                <span className="block text-3xl font-normal">Fable typography on iOS</span>
              </div>
              
              <div>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">New York (Secondary)</span>
                <span className="block text-2xl font-serif">Stories worth sharing</span>
              </div>
            </div>
            
            <h4>Navigation Elements</h4>
            <p>
              Navigation follows iOS conventions while maintaining consistent information architecture with Android.
            </p>
            
            <h5>iOS Navigation Bar</h5>
            <ul>
              <li>Standard UINavigationBar with custom styling</li>
              <li>Large title configuration when appropriate</li> 
              <li>Back button using standard iOS chevron</li>
              <li>Title alignment: center (iOS standard)</li>
            </ul>
            
            <h5>iOS Tab Bar</h5>
            <ul>
              <li>Standard UITabBar with custom styling</li>
              <li>iOS-standard icon set with active states</li>
              <li>Text labels always visible</li>
              <li>Badge indicators following iOS conventions</li>
            </ul>
            
            <h4>iOS-Specific Considerations</h4>
            <ul>
              <li><strong>Haptic Feedback:</strong> Appropriate use of iOS haptic patterns</li>
              <li><strong>Control Sizing:</strong> Respect minimum 44×44pt touch targets</li>
              <li><strong>System Integration:</strong> Native share sheet and clipboard integration</li>
              <li><strong>Hardware Adaptation:</strong> Appropriate handling of notches, Dynamic Island, and home indicator</li>
            </ul>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6 mt-8">
            <h4 className="font-semibold text-lg mb-4">iOS Component Example: Conversation View</h4>
            
            <div className="bg-white rounded-xl p-5 shadow-md">
              <div className="h-10 border-b border-gray-200 flex items-center justify-center relative mb-4">
                <div className="absolute left-2 w-8 h-8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20" viewBox="0 0 12 20" fill="none">
                    <path d="M11.67 1.77L9.9 0L0 10L9.9 20L11.67 18.23L3.54 10L11.67 1.77Z" fill="#007AFF"/>
                  </svg>
                </div>
                <span className="font-medium">Conversation</span>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#1E4D78] to-[#FF8552] text-white p-3 rounded-2xl rounded-tr-md max-w-[80%]">
                    <p>Tell me about your childhood memories</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gray-200 p-3 rounded-2xl rounded-tl-md max-w-[80%]">
                    <p>I grew up in a small town by the lake. Some of my favorite memories are from summer evenings...</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center border-t border-gray-200 pt-3">
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-full py-2 px-4">
                    <span className="text-gray-500">Type a message...</span>
                  </div>
                </div>
                <div className="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E4D78] to-[#FF8552]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2">iOS-Specific Implementation Notes:</h5>
              <ul className="text-sm space-y-1">
                <li>• More rounded message bubbles (iOS Messages-inspired)</li>
                <li>• Center-aligned navigation title</li>
                <li>• iOS-standard back chevron</li>
                <li>• Input field with rounded corners and centered placeholder</li>
                <li>• Haptic feedback on message send</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="android" className="mt-6 space-y-6">
          <h3 className="text-2xl font-semibold">Android Implementation Guidelines</h3>
          <p className="text-lg">How Fable components adapt to Material Design guidelines</p>
          
          <div className="prose dark:prose-invert max-w-none">
            <h3>Android Design Principles</h3>
            <p>
              Our Android implementation embraces Material Design principles while maintaining Fable's brand identity. 
              We support Material Design's approach to motion as meaningful and appropriate surface treatment.
            </p>
            
            <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-6 rounded-lg my-4">
              <h4 className="text-lg font-medium mb-2">Key Material Design Principles</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Embrace Material Design's tactile digital surfaces</li>
                <li>Support for motion as meaningful</li>
                <li>Appropriate elevation and surface treatment</li>
                <li>Follow Material component patterns</li>
              </ul>
            </div>
            
            <h3>Android Component Implementation</h3>
            
            <h4>Typography Implementation</h4>
            <ul>
              <li><strong>Primary:</strong> Roboto as system font replacement for Atkinson Hyperlegible</li>
              <li><strong>Secondary:</strong> Serif option compatible with Material Design</li>
              <li><strong>Font Scaling:</strong> Support for Android font scaling preferences</li>
              <li><strong>Type Scale:</strong> Consistent with Material type scale</li>
            </ul>
            
            <div className="bg-white dark:bg-zinc-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 my-6">
              <div className="mb-4">
                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Roboto (Primary)</span>
                <span className="block text-3xl font-normal">Fable typography on Android</span>
              </div>
              
              <div>
                <span className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Serif (Secondary)</span>
                <span className="block text-2xl font-serif">Stories worth sharing</span>
              </div>
            </div>
            
            <h4>Navigation Elements</h4>
            <p>
              Navigation follows Material Design conventions while maintaining consistent information architecture with iOS.
            </p>
            
            <h5>Android App Bar</h5>
            <ul>
              <li>Standard Material top app bar</li>
              <li>Appropriate elevation (4dp)</li>
              <li>Up navigation with standard icon</li>
              <li>Title alignment: left (Android standard)</li>
            </ul>
            
            <h5>Android Bottom Navigation</h5>
            <ul>
              <li>Material bottom navigation component</li>
              <li>Standard icon and label treatment</li>
              <li>Badge indicators following Material conventions</li>
              <li>Fixed navigation (vs. shifting when appropriate)</li>
            </ul>
            
            <h4>Android-Specific Considerations</h4>
            <ul>
              <li><strong>Elevation & Shadows:</strong> Appropriate use of Material elevation system</li>
              <li><strong>Touch Feedback:</strong> Material ripple effect for interactive elements</li>
              <li><strong>Responsive Layout:</strong> Support for diverse Android screen sizes and densities</li>
              <li><strong>Material You:</strong> Dynamic color system support for Android 12+</li>
            </ul>
          </div>
          
          <div className="bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg p-6 mt-8">
            <h4 className="font-semibold text-lg mb-4">Android Component Example: Conversation View</h4>
            
            <div className="bg-white rounded-md p-5 shadow-md">
              <div className="h-12 border-b border-gray-200 flex items-center px-4 relative mb-4">
                <div className="w-6 h-6 mr-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z" fill="#1E4D78"/>
                  </svg>
                </div>
                <span className="font-medium">Conversation</span>
              </div>
              
              <div className="space-y-4 mb-4">
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-[#1E4D78] to-[#FF8552] text-white p-3 rounded-lg rounded-tr-sm max-w-[80%]">
                    <p>Tell me about your childhood memories</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-gray-200 p-3 rounded-lg rounded-tl-sm max-w-[80%]">
                    <p>I grew up in a small town by the lake. Some of my favorite memories are from summer evenings...</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center border-t border-gray-200 pt-3">
                <div className="flex-1">
                  <div className="border border-gray-300 rounded-md py-2 px-4">
                    <span className="text-gray-500">Type a message...</span>
                  </div>
                </div>
                <div className="ml-2 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#1E4D78] to-[#FF8552]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
                </div>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2">Android-Specific Implementation Notes:</h5>
              <ul className="text-sm space-y-1">
                <li>• More angular message bubbles (Material Design-inspired)</li>
                <li>• Left-aligned navigation title</li>
                <li>• Material Design back arrow</li>
                <li>• Input field with Material border and standard corner radius</li>
                <li>• Material ripple effect on interactive elements</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}