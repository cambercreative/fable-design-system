import * as React from "react";
import { Metadata } from "next";
import { Home, Search, Bell, User, Settings, Menu, ChevronLeft } from "lucide-react";
import ComponentExample from "@/components/component-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabStrip } from "@/components/patterns/tab-strip";
import { SegmentedControl } from "@/components/patterns/segmented-control";
import { BottomTabBar } from "@/components/patterns/bottom-tab-bar";
import { NavigationBar } from "@/components/patterns/navigation-bar";

export const metadata: Metadata = {
  title: "Navigation",
  description: "Navigation components for user movement through the application."
};

const tabStripCode = `import { TabStrip } from "@/components/patterns/tab-strip";
import { useState } from "react";

export default function TabStripExample() {
  const [activeTab, setActiveTab] = useState('tab1');
  
  return (
    <TabStrip
      items={[
        { id: 'tab1', label: 'All Stories' },
        { id: 'tab2', label: 'Recent' },
        { id: 'tab3', label: 'Favorites' },
        { id: 'tab4', label: 'Shared' },
        { id: 'tab5', label: 'Archived' },
      ]}
      activeId={activeTab}
      onChange={setActiveTab}
    />
  );
}`;

const segmentedControlCode = `import { SegmentedControl } from "@/components/patterns/segmented-control";
import { useState } from "react";

export default function SegmentedControlExample() {
  const [view, setView] = useState('grid');
  
  return (
    <SegmentedControl
      options={[
        { id: 'grid', label: 'Grid' },
        { id: 'list', label: 'List' },
      ]}
      value={view}
      onChange={setView}
    />
  );
}`;

const bottomTabBarCode = `import { BottomTabBar } from "@/components/patterns/bottom-tab-bar";
import { Home, Search, Bell, User } from "lucide-react";
import { useState } from "react";

export default function BottomTabBarExample() {
  const [activeTab, setActiveTab] = useState('home');
  
  return (
    <BottomTabBar
      items={[
        { id: 'home', label: 'Home', icon: Home },
        { id: 'explore', label: 'Explore', icon: Search },
        { id: 'notifications', label: 'Alerts', icon: Bell },
        { id: 'profile', label: 'Profile', icon: User },
      ]}
      activeId={activeTab}
      onChange={setActiveTab}
    />
  );
}`;

const navigationBarCode = `import { NavigationBar } from "@/components/patterns/navigation-bar";
import { Settings, Share } from "lucide-react";

export default function NavigationBarExample() {
  return (
    <NavigationBar
      title="Story Details"
      showBackButton
      onBackClick={() => console.log('Back clicked')}
      actions={[
        {
          id: 'share',
          icon: Share,
          label: 'Share',
          onClick: () => console.log('Share clicked')
        },
        {
          id: 'settings',
          icon: Settings,
          label: 'Settings',
          onClick: () => console.log('Settings clicked')
        }
      ]}
    />
  );
}`;

export default function NavigationPage() {
  const [activeTab, setActiveTab] = React.useState('tab1');
  const [view, setView] = React.useState('grid');
  const [bottomTab, setBottomTab] = React.useState('home');
  
  return (
    <div className="container py-10">
      <h1 className="text-display font-faro font-bold mb-4">Navigation</h1>
      <p className="text-body font-atkinson mb-8">
        Navigation components provide intuitive ways for users to move through 
        the application. They help users understand where they are and how to 
        access different sections of content.
      </p>

      <Tabs defaultValue="tab-strip" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="tab-strip">Tab Strip</TabsTrigger>
          <TabsTrigger value="segmented-control">Segmented Control</TabsTrigger>
          <TabsTrigger value="bottom-tab-bar">Bottom Tab Bar</TabsTrigger>
          <TabsTrigger value="navigation-bar">Navigation Bar</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tab-strip" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Tab Strip</h2>
            <p className="text-body font-atkinson">
              Horizontal tab strip for content filtering within a single screen.
              Supports scrollable tabs when content exceeds screen width.
            </p>

            <ComponentExample
              title="Basic Usage"
              description="A standard tab strip with multiple options."
              code={tabStripCode}
            >
              <div className="w-full border rounded-md">
                <TabStrip
                  items={[
                    { id: 'tab1', label: 'All Stories' },
                    { id: 'tab2', label: 'Recent' },
                    { id: 'tab3', label: 'Favorites' },
                    { id: 'tab4', label: 'Shared' },
                    { id: 'tab5', label: 'Archived' },
                  ]}
                  activeId={activeTab}
                  onChange={setActiveTab}
                />
                <div className="p-6">
                  <p className="text-body font-atkinson">
                    {activeTab === 'tab1' && 'All Stories content'}
                    {activeTab === 'tab2' && 'Recent Stories content'}
                    {activeTab === 'tab3' && 'Favorite Stories content'}
                    {activeTab === 'tab4' && 'Shared Stories content'}
                    {activeTab === 'tab5' && 'Archived Stories content'}
                  </p>
                </div>
              </div>
            </ComponentExample>

            <h3 className="text-headline font-faro font-medium mt-8">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">items</td>
                    <td className="py-2 px-4 font-atkinson text-body">TabStripItem[]</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Array of tab items with id, label, and optional disabled property.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">activeId</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">ID of the currently active tab.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">onChange</td>
                    <td className="py-2 px-4 font-atkinson text-body">(id: string) => void</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Callback function when a tab is selected.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">className</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                    <td className="py-2 px-4 font-atkinson text-body">Additional CSS classes.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">ariaLabel</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">"Content tabs"</td>
                    <td className="py-2 px-4 font-atkinson text-body">ARIA label for the tab list.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-headline font-faro font-medium mt-8">Accessibility</h3>
            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Uses <code>role="tablist"</code> for the container and <code>role="tab"</code> for each tab.</li>
              <li>Includes <code>aria-selected</code> to indicate the active tab.</li>
              <li>Uses <code>aria-controls</code> to associate tabs with their content panels.</li>
              <li>Supports keyboard navigation with proper focus management.</li>
            </ul>
          </section>
        </TabsContent>
        
        <TabsContent value="segmented-control" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Segmented Control</h2>
            <p className="text-body font-atkinson">
              Provides binary or tertiary option selection with immediate effect.
              Used for essential view options that change the current display.
            </p>

            <ComponentExample
              title="Basic Usage"
              description="A simple segmented control with two options."
              code={segmentedControlCode}
            >
              <div className="w-full p-6 border rounded-md">
                <SegmentedControl
                  options={[
                    { id: 'grid', label: 'Grid' },
                    { id: 'list', label: 'List' },
                  ]}
                  value={view}
                  onChange={setView}
                />
                <div className="mt-4">
                  <p className="text-body font-atkinson">
                    Selected view: <strong>{view}</strong>
                  </p>
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="With Three Options"
              description="A segmented control with three options."
              code={`<SegmentedControl
  options={[
    { id: 'day', label: 'Day' },
    { id: 'week', label: 'Week' },
    { id: 'month', label: 'Month' },
  ]}
  value={timeframe}
  onChange={setTimeframe}
/>`}
            >
              <div className="w-full p-6 border rounded-md">
                <SegmentedControl
                  options={[
                    { id: 'day', label: 'Day' },
                    { id: 'week', label: 'Week' },
                    { id: 'month', label: 'Month' },
                  ]}
                  value="week"
                  onChange={() => {}}
                />
              </div>
            </ComponentExample>

            <ComponentExample
              title="Disabled State"
              description="A segmented control with one option disabled."
              code={`<SegmentedControl
  options={[
    { id: 'public', label: 'Public' },
    { id: 'private', label: 'Private' },
    { id: 'draft', label: 'Draft', disabled: true },
  ]}
  value={visibility}
  onChange={setVisibility}
/>`}
            >
              <div className="w-full p-6 border rounded-md">
                <SegmentedControl
                  options={[
                    { id: 'public', label: 'Public' },
                    { id: 'private', label: 'Private' },
                    { id: 'draft', label: 'Draft', disabled: true },
                  ]}
                  value="public"
                  onChange={() => {}}
                />
              </div>
            </ComponentExample>

            <h3 className="text-headline font-faro font-medium mt-8">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">options</td>
                    <td className="py-2 px-4 font-atkinson text-body">SegmentOption[]</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Array of segment options with id, label, and optional disabled property.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">value</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">ID of the currently selected option.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">onChange</td>
                    <td className="py-2 px-4 font-atkinson text-body">(value: string) => void</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Callback function when an option is selected.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">name</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                    <td className="py-2 px-4 font-atkinson text-body">Optional name for the control, used for ARIA labeling.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">className</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                    <td className="py-2 px-4 font-atkinson text-body">Additional CSS classes.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">disabled</td>
                    <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                    <td className="py-2 px-4 font-atkinson text-body">false</td>
                    <td className="py-2 px-4 font-atkinson text-body">Whether the entire control is disabled.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-headline font-faro font-medium mt-8">Accessibility</h3>
            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Uses <code>role="radiogroup"</code> for the container and <code>role="radio"</code> for each option.</li>
              <li>Includes <code>aria-checked</code> to indicate the selected option.</li>
              <li>Supports keyboard navigation and focus management.</li>
              <li>Properly handles disabled states with appropriate visual and interaction feedback.</li>
            </ul>
          </section>
        </TabsContent>
        
        <TabsContent value="bottom-tab-bar" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Bottom Tab Bar</h2>
            <p className="text-body font-atkinson">
              Primary navigation between main app sections. Always visible during regular app navigation.
              Limited to 5 primary destinations maximum.
            </p>

            <ComponentExample
              title="Basic Usage"
              description="A standard bottom tab bar with four options."
              code={bottomTabBarCode}
              className="min-h-[240px] relative"
            >
              <div className="w-full border rounded-md min-h-[200px] relative">
                <div className="p-6">
                  <p className="text-body font-atkinson">
                    Active tab: <strong>{bottomTab}</strong>
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0">
                  <BottomTabBar
                    items={[
                      { id: 'home', label: 'Home', icon: Home },
                      { id: 'explore', label: 'Explore', icon: Search },
                      { id: 'notifications', label: 'Alerts', icon: Bell },
                      { id: 'profile', label: 'Profile', icon: User },
                    ]}
                    activeId={bottomTab}
                    onChange={setBottomTab}
                    className="relative"
                  />
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="With Five Items"
              description="A bottom tab bar with five options (maximum recommended)."
              code={`<BottomTabBar
  items={[
    { id: 'home', label: 'Home', icon: Home },
    { id: 'explore', label: 'Explore', icon: Search },
    { id: 'create', label: 'Create', icon: Plus },
    { id: 'notifications', label: 'Alerts', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
  ]}
  activeId={activeTab}
  onChange={setActiveTab}
/>`}
              className="min-h-[240px] relative"
            >
              <div className="w-full border rounded-md min-h-[200px] relative">
                <div className="absolute bottom-0 left-0 right-0">
                  <BottomTabBar
                    items={[
                      { id: 'home', label: 'Home', icon: Home },
                      { id: 'explore', label: 'Explore', icon: Search },
                      { id: 'create', label: 'Create', icon: Menu },
                      { id: 'notifications', label: 'Alerts', icon: Bell },
                      { id: 'profile', label: 'Profile', icon: User },
                    ]}
                    activeId="home"
                    onChange={() => {}}
                    className="relative"
                  />
                </div>
              </div>
            </ComponentExample>

            <h3 className="text-headline font-faro font-medium mt-8">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">items</td>
                    <td className="py-2 px-4 font-atkinson text-body">TabItem[]</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Array of tab items with id, label, icon, and optional disabled property.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">activeId</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">ID of the currently active tab.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">onChange</td>
                    <td className="py-2 px-4 font-atkinson text-body">(id: string) => void</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Callback function when a tab is selected.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">className</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                    <td className="py-2 px-4 font-atkinson text-body">Additional CSS classes.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-headline font-faro font-medium mt-8">Accessibility</h3>
            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Uses <code>role="tablist"</code> for the container and <code>role="tab"</code> for each tab.</li>
              <li>Includes <code>aria-selected</code> to indicate the active tab.</li>
              <li>Always includes text labels with icons for clear meaning.</li>
              <li>Active tab has a distinct visual state with color contrast.</li>
              <li>Provides touch targets of appropriate size (48dp minimum).</li>
            </ul>
          </section>
        </TabsContent>
        
        <TabsContent value="navigation-bar" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Navigation Bar</h2>
            <p className="text-body font-atkinson">
              Screen identification and navigation control. Provides consistent title format
              across the app with optional back button and action buttons.
            </p>

            <ComponentExample
              title="Basic Usage"
              description="A navigation bar with title and back button."
              code={`<NavigationBar
  title="Story Details"
  showBackButton
  onBackClick={() => console.log('Back clicked')}
/>`}
            >
              <div className="w-full border rounded-md overflow-hidden">
                <NavigationBar
                  title="Story Details"
                  showBackButton
                  onBackClick={() => console.log('Back clicked')}
                />
                <div className="p-6">
                  <p className="text-body font-atkinson">Page content would go here</p>
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="With Action Buttons"
              description="A navigation bar with title, back button, and action buttons."
              code={navigationBarCode}
            >
              <div className="w-full border rounded-md overflow-hidden">
                <NavigationBar
                  title="Story Details"
                  showBackButton
                  onBackClick={() => console.log('Back clicked')}
                  actions={[
                    {
                      id: 'share',
                      icon: ChevronLeft,
                      label: 'Share',
                      onClick: () => console.log('Share clicked')
                    },
                    {
                      id: 'settings',
                      icon: Settings,
                      label: 'Settings',
                      onClick: () => console.log('Settings clicked')
                    }
                  ]}
                />
                <div className="p-6">
                  <p className="text-body font-atkinson">Page content would go here</p>
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Transparent Background"
              description="A navigation bar with transparent background for immersive screens."
              code={`<NavigationBar
  title="Photo Gallery"
  showBackButton
  onBackClick={() => console.log('Back clicked')}
  transparent
/>`}
            >
              <div className="w-full border rounded-md overflow-hidden" style={{
                backgroundImage: 'linear-gradient(to bottom, #5B267B, #1A5FB4)',
                minHeight: '200px'
              }}>
                <NavigationBar
                  title="Photo Gallery"
                  showBackButton
                  onBackClick={() => console.log('Back clicked')}
                  transparent
                />
                <div className="p-6">
                  <p className="text-body font-atkinson text-white">Immersive content would go here</p>
                </div>
              </div>
            </ComponentExample>

            <h3 className="text-headline font-faro font-medium mt-8">Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4 text-left text-body font-faro">Prop</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Type</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Default</th>
                    <th className="py-2 px-4 text-left text-body font-faro">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">title</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">-</td>
                    <td className="py-2 px-4 font-atkinson text-body">Title text for the current screen.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">showBackButton</td>
                    <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                    <td className="py-2 px-4 font-atkinson text-body">false</td>
                    <td className="py-2 px-4 font-atkinson text-body">Whether to show the back button.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">onBackClick</td>
                    <td className="py-2 px-4 font-atkinson text-body">() => void</td>
                    <td className="py-2 px-4 font-atkinson text-body">undefined</td>
                    <td className="py-2 px-4 font-atkinson text-body">Callback function when the back button is clicked.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">backLabel</td>
                    <td className="py-2 px-4 font-atkinson text-body">string</td>
                    <td className="py-2 px-4 font-atkinson text-body">"Back"</td>
                    <td className="py-2 px-4 font-atkinson text-body">Label for the back button.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">actions</td>
                    <td className="py-2 px-4 font-atkinson text-body">ActionButton[]</td>
                    <td className="py-2 px-4 font-atkinson text-body">[]</td>
                    <td className="py-2 px-4 font-atkinson text-body">Array of action buttons (max 2) to display in the right section.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">largeTitle</td>
                    <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                    <td className="py-2 px-4 font-atkinson text-body">false</td>
                    <td className="py-2 px-4 font-atkinson text-body">Whether to use large title styling.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">transparent</td>
                    <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                    <td className="py-2 px-4 font-atkinson text-body">false</td>
                    <td className="py-2 px-4 font-atkinson text-body">Whether to use a transparent background.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4 font-atkinson text-body font-medium">sticky</td>
                    <td className="py-2 px-4 font-atkinson text-body">boolean</td>
                    <td className="py-2 px-4 font-atkinson text-body">false</td>
                    <td className="py-2 px-4 font-atkinson text-body">Whether the navigation bar should stick to the top of the viewport.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-headline font-faro font-medium mt-8">Accessibility</h3>
            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Uses <code>role="navigation"</code> for proper semantic meaning.</li>
              <li>Back button has appropriate ARIA labeling.</li>
              <li>Action buttons include descriptive ARIA labels.</li>
              <li>Provides sufficient contrast even in transparent mode.</li>
              <li>Title is marked as a heading element for proper document structure.</li>
            </ul>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
