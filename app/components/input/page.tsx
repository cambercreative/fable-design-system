import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import ComponentExample from '@/components/component-example';
import { Input } from '@/components/ui/input';
import { Search, Mail, Lock } from 'lucide-react';

export const metadata = {
  title: 'Input Field Component | Fable Design System',
  description: 'Input field component for collecting user text input',
}

export default function InputPage() {
  return (
    <PageWrapper
      title="Input Field"
      description="Input fields allow users to enter text information in forms and dialogs."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Overview</h2>
          <p className="text-body font-atkinson">
            Input fields are UI elements that allow users to enter and edit text. They're typically used in forms to collect data from users.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Input placeholder="Default input" />
            <Input label="Labeled input" placeholder="Enter text" />
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Variants</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default Input</h3>
          <p className="text-body font-atkinson mb-4">
            Standard text input for collecting user information.
          </p>
          <ComponentExample
            title="Default Input"
            code={`<Input placeholder="Enter your name" />`}
          >
            <Input placeholder="Enter your name" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Label</h3>
          <p className="text-body font-atkinson mb-4">
            Input with a visible label above it to clearly identify the field's purpose.
          </p>
          <ComponentExample
            title="Input with Label"
            code={`<Input 
  label="Email address" 
  placeholder="you@example.com" 
/>`}
          >
            <Input
              label="Email address"
              placeholder="you@example.com"
            />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Helper Text</h3>
          <p className="text-body font-atkinson mb-4">
            Input with additional descriptive text to guide users.
          </p>
          <ComponentExample
            title="Input with Helper Text"
            code={`<Input 
  label="Password" 
  type="password" 
  placeholder="Enter your password" 
  helperText="Must be at least 8 characters"
/>`}
          >
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              helperText="Must be at least 8 characters"
            />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Icon</h3>
          <p className="text-body font-atkinson mb-4">
            Input with a leading icon that visually indicates the field's purpose.
          </p>
          <ComponentExample
            title="Input with Icon"
            code={`<Input 
  placeholder="Search..." 
  icon={<Search className="h-4 w-4" />} 
/>`}
          >
            <Input
              placeholder="Search..."
              icon={<Search className="h-4 w-4" />}
            />
          </ComponentExample>
        </section>

        {/* States Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">States</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default</h3>
          <ComponentExample
            title="Default State"
            code={`<Input placeholder="Default state" />`}
          >
            <Input placeholder="Default state" />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Focused</h3>
          <p className="text-body font-atkinson mb-4">
            When the input is actively selected by the user. The focused state is shown with a thicker Fable Red border.
          </p>
          <div className="text-caption font-atkinson text-text-tertiary mb-4">
            Note: The focused state is shown automatically when the input is clicked or tabbed to.
          </div>

          <h3 className="text-headline font-faro font-semibold mt-6">Filled</h3>
          <ComponentExample
            title="Filled State"
            code={`<Input placeholder="Filled input" value="User input" onChange={() => {}} />`}
          >
            <Input placeholder="Filled input" value="User input" onChange={() => {}} />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Disabled</h3>
          <ComponentExample
            title="Disabled State"
            code={`<Input placeholder="Disabled input" disabled />`}
          >
            <Input placeholder="Disabled input" disabled />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Error</h3>
          <ComponentExample
            title="Error State"
            code={`<Input 
  label="Email" 
  placeholder="Enter email" 
  value="invalid-email" 
  onChange={() => {}}
  error="Please enter a valid email address" 
/>`}
          >
            <Input
              label="Email"
              placeholder="Enter email"
              value="invalid-email"
              onChange={() => {}}
              error="Please enter a valid email address"
            />
          </ComponentExample>
        </section>

        {/* Types Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Input Types</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Text Input</h3>
          <ComponentExample
            title="Text Input"
            code={`<Input 
  label="Name" 
  type="text" 
  placeholder="Enter your name" 
/>`}
          >
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
            />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Email Input</h3>
          <ComponentExample
            title="Email Input"
            code={`<Input 
  label="Email" 
  type="email" 
  placeholder="you@example.com" 
  icon={<Mail className="h-4 w-4" />}
/>`}
          >
            <Input
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={<Mail className="h-4 w-4" />}
            />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Password Input</h3>
          <ComponentExample
            title="Password Input"
            code={`<Input 
  label="Password" 
  type="password" 
  placeholder="Enter your password" 
  icon={<Lock className="h-4 w-4" />}
/>`}
          >
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<Lock className="h-4 w-4" />}
            />
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Number Input</h3>
          <ComponentExample
            title="Number Input"
            code={`<Input 
  label="Age" 
  type="number" 
  placeholder="Enter your age" 
/>`}
          >
            <Input
              label="Age"
              type="number"
              placeholder="Enter your age"
            />
          </ComponentExample>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Always use visible labels when possible to clearly identify the field's purpose.</li>
            <li>Use placeholder text to provide an example of the expected input format, not as a replacement for labels.</li>
            <li>Use helper text to provide additional guidance on the expected input or validation requirements.</li>
            <li>Use appropriate input types (email, password, number, etc.) to trigger the correct virtual keyboard on mobile devices.</li>
            <li>Provide clear error messages that explain how to resolve the issue.</li>
            <li>Group related fields together in a form.</li>
            <li>Limit the number of required fields to reduce user effort.</li>
            <li>Consider using icons to visually reinforce the input's purpose.</li>
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Accessibility</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Every input has an associated label that is programmatically linked via the for/id attribute pair.</li>
            <li>Error messages are linked to their respective inputs using aria-errormessage.</li>
            <li>Inputs with errors have aria-invalid="true" to indicate their invalid state.</li>
            <li>Placeholder text is not used as the sole method of labeling inputs.</li>
            <li>Required fields are indicated using the required attribute and appropriately labeled.</li>
            <li>Adequate color contrast is maintained in all states to ensure visibility.</li>
            <li>Focus states are clearly visible for keyboard navigation.</li>
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
                  <td className="px-4 py-3 text-body font-atkinson">label</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Label text to display above the input</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">error</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string | boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Error message to display or boolean to indicate error state</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">helperText</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">string</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Helper text to display below the input</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">icon</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">ReactNode</td>
                  <td className="px-4 py-3 text-body font-atkinson">undefined</td>
                  <td className="px-4 py-3 text-body font-atkinson">Icon to display within the input</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">disabled</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables the input interaction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-caption font-atkinson text-text-tertiary mt-2">
            Additionally, the Input component accepts all props that the HTML input element accepts.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
