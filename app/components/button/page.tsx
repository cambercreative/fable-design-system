import React from 'react';
import PageWrapper from '@/components/page-wrapper';
import ComponentExample from '@/components/component-example';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Settings } from 'lucide-react';

export const metadata = {
  title: 'Button Component | Fable Design System',
  description: 'Button component for primary and secondary actions',
}

export default function ButtonPage() {
  return (
    <PageWrapper
      title="Button"
      description="Buttons allow users to perform actions and make choices with a single tap."
    >
      <div className="space-y-12">
        {/* Overview Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Overview</h2>
          <p className="text-body font-atkinson">
            Buttons are used to initialize an action, either in the background or foreground of an experience. 
            Different button variants represent different levels of emphasis.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button>Primary Action</Button>
            <Button variant="secondary">Secondary Action</Button>
            <Button variant="tertiary">Tertiary Action</Button>
            <Button variant="icon" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Variants Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Variants</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Primary Button</h3>
          <p className="text-body font-atkinson mb-4">
            Primary buttons have the highest emphasis and should be used for the main action on a screen.
          </p>
          <ComponentExample
            title="Primary Button"
            code={`<Button>Continue</Button>`}
          >
            <Button>Continue</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Secondary Button</h3>
          <p className="text-body font-atkinson mb-4">
            Secondary buttons are used for actions that are important but not the primary focus of a page.
          </p>
          <ComponentExample
            title="Secondary Button"
            code={`<Button variant="secondary">Cancel</Button>`}
          >
            <Button variant="secondary">Cancel</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Tertiary Button</h3>
          <p className="text-body font-atkinson mb-4">
            Tertiary buttons are used for less prominent actions, often appearing inline or in areas with limited space.
          </p>
          <ComponentExample
            title="Tertiary Button"
            code={`<Button variant="tertiary">Learn More</Button>`}
          >
            <Button variant="tertiary">Learn More</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Icon Button</h3>
          <p className="text-body font-atkinson mb-4">
            Icon buttons are used for common actions and save space by using recognizable icons instead of text.
          </p>
          <ComponentExample
            title="Icon Button"
            code={`<Button variant="icon" aria-label="Favorite">
  <Heart className="h-5 w-5" />
</Button>`}
          >
            <Button variant="icon" aria-label="Favorite">
              <Heart className="h-5 w-5" />
            </Button>
          </ComponentExample>
        </section>

        {/* States Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">States</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default</h3>
          <ComponentExample
            title="Default Button"
            code={`<Button>Default State</Button>`}
          >
            <Button>Default State</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Disabled</h3>
          <ComponentExample
            title="Disabled Button"
            code={`<Button disabled>Disabled State</Button>`}
          >
            <Button disabled>Disabled State</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">With Icon</h3>
          <ComponentExample
            title="Button with Icon"
            code={`<Button>
  Continue <ArrowRight className="ml-2 h-4 w-4" />
</Button>`}
          >
            <Button>
              Continue <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Full Width</h3>
          <ComponentExample
            title="Full Width Button"
            code={`<Button fullWidth>Full Width Button</Button>`}
          >
            <Button fullWidth>Full Width Button</Button>
          </ComponentExample>
        </section>

        {/* Sizes Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Sizes</h2>

          <h3 className="text-headline font-faro font-semibold mt-6">Default (48px)</h3>
          <ComponentExample
            title="Default Size"
            code={`<Button>Default Size</Button>`}
          >
            <Button>Default Size</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Small (40px)</h3>
          <ComponentExample
            title="Small Button"
            code={`<Button size="sm">Small Size</Button>`}
          >
            <Button size="sm">Small Size</Button>
          </ComponentExample>

          <h3 className="text-headline font-faro font-semibold mt-6">Large (56px)</h3>
          <ComponentExample
            title="Large Button"
            code={`<Button size="lg">Large Size</Button>`}
          >
            <Button size="lg">Large Size</Button>
          </ComponentExample>
        </section>

        {/* Usage Guidelines Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Usage Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>Use primary buttons for the main action on a screen.</li>
            <li>Limit to one primary button per screen to maintain visual hierarchy.</li>
            <li>Use secondary buttons for alternative or supporting actions.</li>
            <li>Use tertiary buttons for low-emphasis actions or when space is limited.</li>
            <li>Icon buttons should only be used for common actions with recognizable icons.</li>
            <li>Always include accessible labels for icon-only buttons.</li>
            <li>Button text should be concise, action-oriented, and clearly describe the action.</li>
            <li>Use sentence case for button text (e.g., "Save changes" not "Save Changes").</li>
          </ul>
        </section>

        {/* Accessibility Section */}
        <section className="space-y-4">
          <h2 className="text-title-2 font-faro font-bold">Accessibility</h2>
          <ul className="list-disc list-inside space-y-2 text-body font-atkinson">
            <li>All buttons have appropriate contrast ratios for text visibility.</li>
            <li>Icon buttons always include aria-label attributes describing their action.</li>
            <li>Disabled buttons maintain visual distinctiveness but with reduced opacity.</li>
            <li>Focus states are clearly visible for keyboard navigation.</li>
            <li>Buttons have a minimum touch target size of 44×44px for mobile accessibility.</li>
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
                  <td className="px-4 py-3 text-body font-atkinson">variant</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">'primary' | 'secondary' | 'tertiary' | 'icon'</td>
                  <td className="px-4 py-3 text-body font-atkinson">'primary'</td>
                  <td className="px-4 py-3 text-body font-atkinson">Controls the visual style of the button</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">size</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">'default' | 'sm' | 'lg' | 'icon'</td>
                  <td className="px-4 py-3 text-body font-atkinson">'default'</td>
                  <td className="px-4 py-3 text-body font-atkinson">Controls the size of the button</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">fullWidth</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, button takes up 100% width of its container</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">asChild</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, button delegates rendering to its child</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-body font-atkinson">disabled</td>
                  <td className="px-4 py-3 text-body font-atkinson font-mono text-sm">boolean</td>
                  <td className="px-4 py-3 text-body font-atkinson">false</td>
                  <td className="px-4 py-3 text-body font-atkinson">When true, disables the button interaction</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-caption font-atkinson text-text-tertiary mt-2">
            Additionally, the Button component accepts all props that the HTML button element accepts.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
