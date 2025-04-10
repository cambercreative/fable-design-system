import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import ComponentExample from '@/components/component-example';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export const metadata = {
  title: 'Radio Button Component | Fable Design System',
  description: 'Radio button component for single selection from a set of options',
}

export default function RadioPage() {
  return (
    <PageWrapper
      title="Radio Button"
      description="Radio buttons allow users to select a single option from a set of mutually exclusive choices."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Overview</h2>
          <p className="text-body font-atkinson">
            Radio buttons are selection controls that allow users to select exactly one option from a set of related options.
            They are used when there is a list of two or more mutually exclusive options.
          </p>
          <div className="pt-4">
            <RadioGroup defaultValue="comfortable" legend="Select density:">
              <RadioGroupItem value="compact" label="Compact" />
              <RadioGroupItem value="comfortable" label="Comfortable" />
              <RadioGroupItem value="spacious" label="Spacious" />
            </RadioGroup>
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Variants</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default Radio Group</h3>
          <p className="text-body font-atkinson mb-4">
            Standard radio group for single selection from a set of options.
          </p>
          <ComponentExample
            title="Default Radio Group"
            code={`<RadioGroup defaultValue="email" legend="Contact preference:">
  <RadioGroupItem value="email" label="Email" />
  <RadioGroupItem value="phone" label="Phone" />
  <RadioGroupItem value="text" label="Text message" />
</RadioGroup>`}
          >
            <RadioGroup defaultValue="email" legend="Contact preference:">
              <RadioGroupItem value="email" label="Email" />
              <RadioGroupItem value="phone" label="Phone" />
              <RadioGroupItem value="text" label="Text message" />
            </RadioGroup>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Error</h3>
          <p className="text-body font-atkinson mb-4">
            Radio group with an error message, indicating an issue that needs attention.
          </p>
          <ComponentExample
            title="Radio Group with Error"
            code={`<RadioGroup error="Please select an option">
  <RadioGroupItem value="option1" label="Option 1" />
  <RadioGroupItem value="option2" label="Option 2" />
  <RadioGroupItem value="option3" label="Option 3" />
</RadioGroup>`}
          >
            <RadioGroup error="Please select an option">
              <RadioGroupItem value="option1" label="Option 1" />
              <RadioGroupItem value="option2" label="Option 2" />
              <RadioGroupItem value="option3" label="Option 3" />
            </RadioGroup>
          </ComponentExample>
        </section>

        {/* States Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">States</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default (Unselected)</h3>
          <ComponentExample
            title="Unselected Radio Items"
            code={`<RadioGroup>
  <RadioGroupItem value="unselected" label="Unselected option" />
</RadioGroup>`}
          >
            <RadioGroup>
              <RadioGroupItem value="unselected" label="Unselected option" />
            </RadioGroup>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Selected</h3>
          <ComponentExample
            title="Selected Radio Item"
            code={`<RadioGroup defaultValue="selected">
  <RadioGroupItem value="selected" label="Selected option" />
</RadioGroup>`}
          >
            <RadioGroup defaultValue="selected">
              <RadioGroupItem value="selected" label="Selected option" />
            </RadioGroup>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Focused</h3>
          <p className="text-body font-atkinson mb-4">
            When the radio button is focused by keyboard navigation or click. 
            The focused state is shown with a visible focus ring.
          </p>
          <div className="text-caption font-atkinson text-text-tertiary mb-4">
            Note: The focused state is shown automatically when the radio button is clicked or tabbed to.
          </div>

          <h3 className="text-headline font-faro font-semibold mt-6">Disabled</h3>
          <ComponentExample
            title="Disabled Radio Items"
            code={`<RadioGroup defaultValue="disabled-selected">
  <RadioGroupItem value="disabled-unselected" label="Disabled option" disabled />
  <RadioGroupItem value="disabled-selected" label="Disabled selected option" disabled />
</RadioGroup>`}
          >
            <RadioGroup defaultValue="disabled-selected">
              <RadioGroupItem value="disabled-unselected" label="Disabled option" disabled />
              <RadioGroupItem value="disabled-selected" label="Disabled selected option" disabled />
            </RadioGroup>
          </ComponentExample>
        </section>

        {/* Layout Examples Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Layout Examples</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Vertical Layout (Default)</h3>
          <p className="text-body font-atkinson mb-4">
            Radio buttons arranged vertically for easy scanning and selection.
          </p>
          <ComponentExample
            title="Vertical Radio Group"
            code={`<RadioGroup defaultValue="auto" legend="Theme preference:">
  <RadioGroupItem value="light" label="Light" />
  <RadioGroupItem value="dark" label="Dark" />
  <RadioGroupItem value="auto" label="System default" />
</RadioGroup>`}
          >
            <RadioGroup defaultValue="auto" legend="Theme preference:">
              <RadioGroupItem value="light" label="Light" />
              <RadioGroupItem value="dark" label="Dark" />
              <RadioGroupItem value="auto" label="System default" />
            </RadioGroup>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Horizontal Layout</h3>
          <p className="text-body font-atkinson mb-4">
            Radio buttons arranged horizontally for compact layouts with few options.
          </p>
          <ComponentExample
            title="Horizontal Radio Group"
            code={`<div>
  <div className="font-atkinson font-medium mb-2">
    View mode:
  </div>
  <RadioGroup defaultValue="grid" className="flex space-x-6 space-y-0">
    <RadioGroupItem value="list" label="List" />
    <RadioGroupItem value="grid" label="Grid" />
  </RadioGroup>
</div>`}
          >
            <div>
              <div className="font-atkinson font-medium mb-2">
                View mode:
              </div>
              <RadioGroup defaultValue="grid" className="flex space-x-6 space-y-0">
                <RadioGroupItem value="list" label="List" />
                <RadioGroupItem value="grid" label="Grid" />
              </RadioGroup>
            </div>
          </ComponentExample>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Use radio buttons when users need to select exactly one option from a set.</li>
            <li>For binary choices (yes/no, on/off), consider using a checkbox or toggle switch.</li>
            <li>Use clear, concise labels that describe each option.</li>
            <li>Group related radio buttons together with a descriptive legend for the group.</li>
            <li>Arrange radio buttons vertically when possible for easier scanning.</li>
            <li>Use horizontal arrangements only for a small number of closely related options.</li>
            <li>Position labels to the right of the radio button to maintain standard layout expectations.</li>
            <li>If there are more than 5-7 options, consider using a select/dropdown component instead.</li>
            <li>Radio buttons should have a selected default when a default makes sense for the context.</li>
            <li>Radio buttons with the same name attribute are automatically grouped, and only one can be selected.</li>
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Accessibility</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Radio buttons have appropriate keyboard focus management for tabbing navigation.</li>
            <li>Users can select radio buttons using the Space key when focused.</li>
            <li>Arrow keys can be used to navigate between options in a radio group.</li>
            <li>Each radio button has a visible label that describes its purpose.</li>
            <li>Related radio buttons are grouped using the RadioGroup component.</li>
            <li>The radio group has a descriptive legend that explains the purpose of the group.</li>
            <li>Selected state is communicated to assistive technologies via aria-checked.</li>
            <li>Error messages are associated with their corresponding radio group using appropriate ARIA attributes.</li>
            <li>Touch targets are sized appropriately (minimum 44×44px) for mobile accessibility.</li>
          </ul>
        </section>

        {/* API Reference Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">API Reference</h2>
          
          <h3 className="text-headline font-faro font-semibold mt-6">RadioGroup</h3>
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
                  <td className="px-4 py-3 text-body font-atkinson">value</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">The controlled value of the selected radio item</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">defaultValue</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">The default value of the selected radio item when uncontrolled</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">onValueChange</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">function(value: string)</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Callback when the selected value changes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">legend</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Descriptive text for the radio group</td>
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
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables all radio items in the group</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-headline font-faro font-semibold mt-6">RadioGroupItem</h3>
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
                  <td className="px-4 py-3 text-body font-atkinson">value</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string (required)</td>
                  <td className="px-4 py-3 text-body font-atkinson">-</td>
                  <td className="px-4 py-3 text-body font-atkinson">The value of the radio item</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">label</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">The label text for the radio item</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">disabled</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables the individual radio item</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-caption font-atkinson text-text-tertiary mt-2">
            The RadioGroup and RadioGroupItem components are built on Radix UI's Radio Group primitives and accept all their props.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
