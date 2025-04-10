import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import ComponentExample from '@/components/component-example';
import { Switch } from '@/components/ui/switch';

export const metadata = {
  title: 'Toggle Switch Component | Fable Design System',
  description: 'Toggle switch component for binary settings with immediate effect',
}

export default function TogglePage() {
  return (
    <PageWrapper
      title="Toggle Switch"
      description="Toggle switches allow users to turn options on or off, with immediate effect."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Overview</h2>
          <p className="text-body font-atkinson">
            Toggle switches are selection controls that allow users to turn a setting on or off. 
            Unlike checkboxes which are typically used in forms, toggles are best used for 
            binary settings that take immediate effect.
          </p>
          <div className="space-y-4 pt-4">
            <Switch label="Notifications" />
            <Switch label="Dark mode" defaultChecked />
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Variants</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default Toggle</h3>
          <p className="text-body font-atkinson mb-4">
            Standard toggle switch with label.
          </p>
          <ComponentExample
            title="Default Toggle"
            code={`<Switch label="Allow notifications" />`}
          >
            <Switch label="Allow notifications" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Without Label</h3>
          <p className="text-body font-atkinson mb-4">
            Toggle switch without visible label, suitable for compact interfaces or when the context is clear.
            Note that an accessible label is still required via aria-label.
          </p>
          <ComponentExample
            title="Toggle without Label"
            code={`<Switch aria-label="Toggle notifications" />`}
          >
            <Switch aria-label="Toggle notifications" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Error</h3>
          <p className="text-body font-atkinson mb-4">
            Toggle switch with an error message, indicating an issue that needs attention.
          </p>
          <ComponentExample
            title="Toggle with Error"
            code={`<Switch 
  label="Accept data sharing" 
  error="Data sharing is required for this feature" 
/>`}
          >
            <Switch
              label="Accept data sharing"
              error="Data sharing is required for this feature"
            />
          </ComponentExample>
        </section>

        {/* States Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">States</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Off</h3>
          <ComponentExample
            title="Off State"
            code={`<Switch label="Off state" />`}
          >
            <Switch label="Off state" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">On</h3>
          <ComponentExample
            title="On State"
            code={`<Switch label="On state" defaultChecked />`}
          >
            <Switch label="On state" defaultChecked />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Focused</h3>
          <p className="text-body font-atkinson mb-4">
            When the toggle is focused by keyboard navigation or click. 
            The focused state is shown with a visible focus ring.
          </p>
          <div className="text-caption font-atkinson text-text-tertiary mb-4">
            Note: The focused state is shown automatically when the toggle is clicked or tabbed to.
          </div>

          <h3 className="text-headline font-faro font-semibold mt-6">Disabled</h3>
          <ComponentExample
            title="Disabled States"
            code={`<div className="space-y-4">
  <Switch label="Disabled off" disabled />
  <Switch label="Disabled on" disabled defaultChecked />
</div>`}
          >
            <div className="space-y-4">
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" disabled defaultChecked />
            </div>
          </ComponentExample>
        </section>

        {/* Usage Examples Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Examples</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Settings Panel</h3>
          <p className="text-body font-atkinson mb-4">
            Collection of toggle switches in a settings panel.
          </p>
          <ComponentExample
            title="Settings Panel"
            code={`<div className="space-y-6 p-4 bg-surface-secondary rounded-m">
  <h3 className="text-headline font-faro font-semibold">Notification Settings</h3>
  <div className="space-y-4">
    <Switch label="Email notifications" defaultChecked />
    <Switch label="Push notifications" defaultChecked />
    <Switch label="Sound alerts" />
    <Switch label="Weekly digest" />
  </div>
</div>`}
          >
            <div className="space-y-6 p-4 bg-surface-secondary rounded-m">
              <h3 className="text-headline font-faro font-semibold">Notification Settings</h3>
              <div className="space-y-4">
                <Switch label="Email notifications" defaultChecked />
                <Switch label="Push notifications" defaultChecked />
                <Switch label="Sound alerts" />
                <Switch label="Weekly digest" />
              </div>
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Feature Toggle</h3>
          <p className="text-body font-atkinson mb-4">
            Toggle to enable/disable a specific feature.
          </p>
          <ComponentExample
            title="Feature Toggle"
            code={`<div className="p-4 bg-surface-secondary rounded-m">
  <div className="flex justify-between items-center">
    <div>
      <h4 className="text-headline font-faro font-semibold">Advanced Mode</h4>
      <p className="text-caption font-atkinson text-text-tertiary">
        Enable additional expert features
      </p>
    </div>
    <Switch aria-label="Toggle advanced mode" />
  </div>
</div>`}
          >
            <div className="p-4 bg-surface-secondary rounded-m">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-headline font-faro font-semibold">Advanced Mode</h4>
                  <p className="text-caption font-atkinson text-text-tertiary">
                    Enable additional expert features
                  </p>
                </div>
                <Switch aria-label="Toggle advanced mode" />
              </div>
            </div>
          </ComponentExample>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Use toggle switches for binary settings that have an immediate effect.</li>
            <li>For options that require an explicit submission step, use checkboxes instead.</li>
            <li>Toggles should be in either an on (selected) or off (unselected) state.</li>
            <li>Use clear, concise labels that describe what the toggle controls.</li>
            <li>Position labels to the left of the toggle switch in most cases.</li>
            <li>When many related options are toggled, group them together with a descriptive heading.</li>
            <li>The default state (on/off) should represent the safer, more private, or more secure option.</li>
            <li>Avoid using toggles for destructive actions.</li>
            <li>Consider providing immediate visual feedback when a toggle is switched, if the result isn't immediately visible.</li>
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Accessibility</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Toggle switches have appropriate keyboard focus management for tabbing navigation.</li>
            <li>Users can toggle the switch using the Space key when focused.</li>
            <li>Each toggle has a visible label that describes its purpose.</li>
            <li>Toggles without visible labels include an aria-label attribute.</li>
            <li>Toggle state is communicated to assistive technologies via aria-checked.</li>
            <li>Error messages are associated with their corresponding toggles using appropriate ARIA attributes.</li>
            <li>The toggle role is properly set to "switch" for screen readers.</li>
            <li>Touch targets are sized appropriately (minimum 44×44px) for mobile accessibility.</li>
            <li>Color is not the only indicator of the toggle state, as the position of the thumb communicates state as well.</li>
          </ul>
        </section>

        {/* API Reference Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">API Reference</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border-default">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-body font-faro">Prop</th>
                  <th className="px-4 py-3 text-left text-body font-faro">Type</th>
                  <th className="px-4 py-3 text-left text-body font-faro">Default</th>
                  <th className="px-4 py-3 text-left text-body font-faro">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-default">
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">checked</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">The controlled checked state of the toggle</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">defaultChecked</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">The default checked state when uncontrolled</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">onCheckedChange</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">function(checked: boolean)</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Callback when checked state changes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">label</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Label text for the toggle</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">error</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string | boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Error message or error state</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">disabled</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables the toggle interaction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-caption font-atkinson text-text-tertiary mt-2">
            The Switch component is built on Radix UI's Switch primitive and accepts all its props.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
