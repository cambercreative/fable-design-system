"use client"

import PageWrapper from '../../../components/page-wrapper'
import { Button } from '../../../components/ui/button'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '../../../components/ui/dialog'

export default function DialogsPage() {
  return (
    <PageWrapper
      title="Dialogs"
      description="Modal windows that appear in front of app content to provide critical information or request user decision."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Dialogs (or modals) are window overlays that demand attention and require user interaction before 
            returning to the main interface. They interrupt the user's workflow to communicate important 
            information, request a decision, or complete a task.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg flex justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Modal Dialog</DialogTitle>
                  <DialogDescription>
                    This is a standard modal dialog that requires user attention.
                  </DialogDescription>
                </DialogHeader>
                <p className="py-4">Modal content appears here, providing additional context or actions for the user.</p>
                <DialogFooter>
                  <Button variant="secondary">Cancel</Button>
                  <Button>Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <section id="anatomy" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Anatomy</h2>
          <p>
            Dialogs consist of a container with a standardized structure for headers, content, and actions.
            The backdrop overlay blocks interaction with content behind the dialog.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="h-64 flex items-start justify-center border border-dashed border-border p-6 rounded-md">
              <div className="w-full max-w-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">1</span>
                    DialogTrigger - Element that opens the dialog
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">2</span>
                    DialogContent - Container for the dialog window
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">3</span>
                    DialogHeader - Contains title and description
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">4</span>
                    DialogFooter - Contains action buttons
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">5</span>
                    Close button - Allows dismissal
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">6</span>
                    Backdrop overlay - Blocks content behind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Examples</h2>
          
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Basic Dialog</h3>
              <p className="mb-4 text-muted-foreground">
                A standard dialog with title, description, and action buttons.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Basic Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Basic Dialog</DialogTitle>
                      <DialogDescription>
                        A simple dialog for presenting information to the user.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4">
                      <p>This is the main content area of the dialog, where you can provide additional information or context.</p>
                    </div>
                    <DialogFooter>
                      <Button>Close</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Confirmation Dialog</h3>
              <p className="mb-4 text-muted-foreground">
                A dialog used for confirming destructive or important actions.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="secondary">Delete Item</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Deletion</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to delete this item? This action cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-4">
                      <Button variant="secondary">Cancel</Button>
                      <Button>Delete</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Form Dialog</h3>
              <p className="mb-4 text-muted-foreground">
                A dialog containing a form for gathering user input.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Make changes to your profile information below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <input
                          id="name"
                          className="w-full h-10 rounded-md border border-border-default bg-surface-tertiary px-3 py-2"
                          placeholder="Enter your name"
                          defaultValue="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <input
                          id="email"
                          className="w-full h-10 rounded-md border border-border-default bg-surface-tertiary px-3 py-2"
                          placeholder="Enter your email"
                          defaultValue="john@example.com"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="secondary">Cancel</Button>
                      <Button>Save Changes</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            Dialogs must be accessible to all users, including those using screen readers and keyboard navigation.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Keyboard Support</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Press <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Escape</code> to close the dialog</li>
                <li>Focus is trapped within the dialog when open</li>
                <li>Focus is automatically set to the first focusable element in the dialog</li>
                <li>When the dialog closes, focus returns to the triggering element</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Screen Readers</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Uses <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">role="dialog"</code> with <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-modal="true"</code></li>
                <li>Title is linked to the dialog with <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-labelledby</code></li>
                <li>Description is linked with <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-describedby</code></li>
                <li>Close button has <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-label="Close"</code></li>
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
                <li>Use dialogs for important interactions that require attention</li>
                <li>Keep content focused and concise</li>
                <li>Provide clear action labels that describe what happens next</li>
                <li>Use appropriate emphasis for destructive or primary actions</li>
                <li>Ensure dialogs are responsive and adjust appropriately on mobile devices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Don't</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Overuse dialogs for non-critical interactions</li>
                <li>Stack multiple dialogs on top of each other</li>
                <li>Create dialogs with excessive content or scrolling</li>
                <li>Use dialogs for complex multi-step workflows (use a dedicated page instead)</li>
                <li>Use generic button labels like "OK" or "Yes/No" without context</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="implementation" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Implementation</h2>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <pre className="bg-surface-tertiary dark:bg-dark-surface-tertiary p-4 rounded-md overflow-x-auto text-sm">
              <code>{`import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            Description of the dialog content or action.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Main content area for the dialog.</p>
        </div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
