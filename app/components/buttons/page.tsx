import PageWrapper from '../../../components/page-wrapper'

export default function ButtonsPage() {
  return (
    <PageWrapper
      title="Buttons"
      description="Interactive controls that enable users to trigger actions and navigate interfaces."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Buttons communicate actions that users can take throughout the interface.
            They are typically placed within forms, dialogs, panels, and cards.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="flex flex-wrap gap-4">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Primary Button
              </button>
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">
                Secondary Button
              </button>
              <button className="px-4 py-2 border border-border rounded-md">
                Tertiary Button
              </button>
            </div>
          </div>
        </section>

        <section id="anatomy" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Anatomy</h2>
          <p>
            Buttons consist of a container with a text label. They may optionally include
            leading or trailing icons to provide additional context for the action.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            {/* Anatomy diagram would go here */}
            <div className="h-32 flex items-center justify-center border border-dashed border-border rounded-md">
              Button anatomy diagram placeholder
            </div>
          </div>
        </section>

        <section id="variants" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <p>
            Button variants are designed to communicate different levels of emphasis
            in the interface. Use the appropriate variant based on the action's importance.
          </p>
          
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Primary</h3>
              <p className="mb-4 text-muted-foreground">
                Use for high-emphasis actions, such as form submission or completing a step in a flow.
                Limit to one primary button per view.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md opacity-80">
                    Hover
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md opacity-90">
                    Active
                  </button>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md opacity-50 cursor-not-allowed">
                    Disabled
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Secondary</h3>
              <p className="mb-4 text-muted-foreground">
                Use for medium-emphasis actions that complement the primary action.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md">
                    Secondary Button
                  </button>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md opacity-80">
                    Hover
                  </button>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md opacity-90">
                    Active
                  </button>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md opacity-50 cursor-not-allowed">
                    Disabled
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Tertiary</h3>
              <p className="mb-4 text-muted-foreground">
                Use for low-emphasis actions or in dense UI environments where visual hierarchy needs to be preserved.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="flex flex-wrap gap-4">
                  <button className="px-4 py-2 border border-border rounded-md">
                    Tertiary Button
                  </button>
                  <button className="px-4 py-2 border border-border rounded-md bg-surface-primary dark:bg-dark-surface-primary">
                    Hover
                  </button>
                  <button className="px-4 py-2 border border-border rounded-md bg-surface-primary/50 dark:bg-dark-surface-primary/50">
                    Active
                  </button>
                  <button className="px-4 py-2 border border-border rounded-md opacity-50 cursor-not-allowed">
                    Disabled
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="sizes" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <p>
            Button sizes help establish hierarchy and adapt to different contexts
            within the interface. Choose the appropriate size based on the button's context and importance.
          </p>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="flex flex-wrap items-center gap-4">
              <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded-md">
                Small
              </button>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Medium
              </button>
              <button className="px-5 py-3 text-lg bg-primary text-primary-foreground rounded-md">
                Large
              </button>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            Buttons must be accessible to all users, including those using screen 
            readers and keyboard navigation.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Keyboard Support</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Buttons can be activated using the <code className="px-1 py-0.5 bg-surface-secondary dark:bg-dark-surface-secondary rounded">Space</code> or <code className="px-1 py-0.5 bg-surface-secondary dark:bg-dark-surface-secondary rounded">Enter</code> keys</li>
                <li>Focus order follows the DOM order, with focused buttons displaying a visible focus indicator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Screen Readers</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Button text should clearly indicate the action when read by a screen reader</li>
                <li>If using icon-only buttons, include <code className="px-1 py-0.5 bg-surface-secondary dark:bg-dark-surface-secondary rounded">aria-label</code> to provide accessible names</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Color Contrast</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Button text must have a minimum contrast ratio of 4.5:1 against the background color</li>
                <li>Focus indicators must have a minimum contrast ratio of 3:1 against surrounding elements</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="usage-guidelines" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Usage Guidelines</h2>
          
          <div className="grid gap-6">
            <div>
              <h3 className="text-xl font-medium">Do</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Use clear, concise, and action-oriented button labels</li>
                <li>Limit the number of primary buttons in a view to emphasize the main action</li>
                <li>Ensure buttons have sufficient touch target sizing (minimum 44×44px)</li>
                <li>Maintain consistent button styling throughout the application</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Don't</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Use generic labels like "Click Here" or "Submit" without context</li>
                <li>Overload interfaces with too many buttons of equal visual weight</li>
                <li>Use buttons for navigation when a link would be more appropriate</li>
                <li>Place buttons too close together, especially on touch interfaces</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
