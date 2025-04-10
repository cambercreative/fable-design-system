import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import ComponentExample from '@/components/component-example';
import { Checkbox } from '@/components/ui/checkbox';

export const metadata = {
  title: 'Checkbox Component | Fable Design System',
  description: 'Checkbox component for binary and multiple selection options',
}

export default function CheckboxPage() {
  return (
    <PageWrapper
      title="Checkbox"
      description="Checkboxes allow users to select one or multiple items from a set of options, or to mark a single option as selected."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Overview</h2>
          <p className="text-body font-atkinson">
            Checkboxes are selection controls that allow users to select one or more options from a set, 
            or toggle a single option on/off. They're commonly used in forms, settings, and preference panels.
          </p>
          <div className="flex flex-col space-y-4 pt-4">
            <Checkbox label="Default checkbox" />
            <Checkbox label="Checked checkbox" checked />
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Variants</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default Checkbox</h3>
          <p className="text-body font-atkinson mb-4">
            Standard checkbox with label for single or multiple selections.
          </p>
          <ComponentExample
            title="Default Checkbox"
            code={`<Checkbox label="Agree to terms and conditions" />`}
          >
            <Checkbox label="Agree to terms and conditions" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Without Label</h3>
          <p className="text-body font-atkinson mb-4">
            Checkbox without visible label, suitable for compact interfaces or when the context is clear.
            Note that an accessible label is still required via aria-label.
          </p>
          <ComponentExample
            title="Checkbox without Label"
            code={`<Checkbox aria-label="Select this item" />`}
          >
            <Checkbox aria-label="Select this item" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Error</h3>
          <p className="text-body font-atkinson mb-4">
            Checkbox with an error message, indicating an issue that needs attention.
          </p>
          <ComponentExample
            title="Checkbox with Error"
            code={`<Checkbox 
  label="I agree to the terms" 
  error="You must agree to the terms to continue" 
/>`}
          >
            <Checkbox
              label="I agree to the terms"
              error="You must agree to the terms to continue"
            />
          </ComponentExample>
        </section>

        {/* States Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">States</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Unchecked</h3>
          <ComponentExample
            title="Unchecked State"
            code={`<Checkbox label="Unchecked option" />`}
          >
            <Checkbox label="Unchecked option" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Checked</h3>
          <ComponentExample
            title="Checked State"
            code={`<Checkbox label="Checked option" checked />`}
          >
            <Checkbox label="Checked option" checked />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Focused</h3>
          <p className="text-body font-atkinson mb-4">
            When the checkbox is focused by keyboard navigation or click. 
            The focused state is shown with a visible focus ring.
          </p>
          <div className="text-caption font-atkinson text-text-tertiary mb-4">
            Note: The focused state is shown automatically when the checkbox is clicked or tabbed to.
          </div>

          <h3 className="text-headline font-faro font-semibold mt-6">Disabled</h3>
          <ComponentExample
            title="Disabled State (Unchecked)"
            code={`<Checkbox label="Disabled option" disabled />`}
          >
            <Checkbox label="Disabled option" disabled />
          </ComponentExample>

          <ComponentExample
            title="Disabled State (Checked)"
            code={`<Checkbox label="Disabled checked option" disabled checked />`}
          >
            <Checkbox label="Disabled checked option" disabled checked />
          </ComponentExample>
        </section>

        {/* Group Examples Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Checkbox Groups</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Basic Group</h3>
          <p className="text-body font-atkinson mb-4">
            Multiple checkboxes grouped together for related options.
          </p>
          <ComponentExample
            title="Basic Checkbox Group"
            code={`<div className="space-y-3">
  <div className="font-atkinson font-medium mb-2">
    Select your interests:
  </div>
  <Checkbox label="Design" />
  <Checkbox label="Development" />
  <Checkbox label="Marketing" />
  <Checkbox label="Business" />
</div>`}
          >
            <div className="space-y-3">
              <div className="font-atkinson font-medium mb-2">
                Select your interests:
              </div>
              <Checkbox label="Design" />
              <Checkbox label="Development" />
              <Checkbox label="Marketing" />
              <Checkbox label="Business" />
            </div>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Horizontal Layout</h3>
          <p className="text-body font-atkinson mb-4">
            Checkboxes arranged horizontally for compact layouts or binary choices.
          </p>
          <ComponentExample
            title="Horizontal Checkbox Group"
            code={`<div>
  <div className="font-atkinson font-medium mb-2">
    Choose options:
  </div>
  <div className="flex flex-wrap gap-6">
    <Checkbox label="Option A" />
    <Checkbox label="Option B" />
    <Checkbox label="Option C" />
  </div>
</div>`}
          >
            <div>
              <div className="font-atkinson font-medium mb-2">
                Choose options:
              </div>
              <div className="flex flex-wrap gap-6">
                <Checkbox label="Option A" />
                <Checkbox label="Option B" />
                <Checkbox label="Option C" />
              </div>
            </div>
          </ComponentExample>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Use checkboxes when users need to select multiple items from a list.</li>
            <li>Use a single checkbox for binary choices, such as accepting terms or toggling a setting on/off.</li>
            <li>Use clear, concise labels that describe the option being selected.</li>
            <li>Group related checkboxes together with a descriptive label for the group.</li>
            <li>Arrange checkboxes vertically when possible for easier scanning.</li>
            <li>Use horizontal arrangements only for a few closely related options or when space is limited.</li>
            <li>Position labels to the right of the checkbox to maintain standard layout expectations.</li>
            <li>Avoid using checkboxes for exclusive selections where only one option can be chosen (use radio buttons instead).</li>
            <li>Avoid using checkboxes for actions that take immediate effect (use toggles instead).</li>
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Accessibility</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Checkboxes have appropriate keyboard focus management for tabbing navigation.</li>
            <li>Checkboxes can be toggled using the Space key when focused.</li>
            <li>Each checkbox has a visible label that describes its purpose.</li>
            <li>Checkboxes without visible labels include an aria-label attribute.</li>
            <li>Related checkboxes are grouped using fieldset and legend elements or appropriate ARIA attributes.</li>
            <li>Checked state is communicated to assistive technologies via aria-checked.</li>
            <li>Error messages are associated with their corresponding checkboxes using appropriate ARIA attributes.</li>
            <li>Touch targets are sized appropriately (minimum 44×44px) for mobile accessibility.</li>
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
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, the checkbox is checked</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">defaultChecked</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">Initial checked state when uncontrolled</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">label</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Text label for the checkbox</td>
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
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables the checkbox interaction</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">onCheckedChange</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">function(checked: boolean)</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Callback when checked state changes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-caption font-atkinson text-text-tertiary mt-2">
            The Checkbox component is built on Radix UI's Checkbox primitive and accepts all its props.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
