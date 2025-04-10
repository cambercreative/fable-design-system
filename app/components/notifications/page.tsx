"use client"

import PageWrapper from '../../../components/page-wrapper'
import { Button } from '../../../components/ui/button'
import { 
  Toast,
  ToastAction,
  ToastDescription,
  ToastTitle,
} from '../../../components/ui/toast'
import { useToast } from '../../../components/hooks/use-toast'
import { Info, CheckCircle, AlertTriangle, AlertCircle } from 'lucide-react'

export default function NotificationsPage() {
  const { toast } = useToast()

  const showBasicToast = () => {
    toast({
      title: "New notification",
      description: "This is a basic notification message",
    })
  }

  const showSuccessToast = () => {
    toast({
      title: "Success",
      description: "Your action was completed successfully",
      className: "bg-status-success/10 border-status-success"
    })
  }

  const showWarningToast = () => {
    toast({
      title: "Warning",
      description: "This action might have consequences",
      className: "bg-status-warning/10 border-status-warning"
    })
  }

  const showErrorToast = () => {
    toast({
      title: "Error",
      description: "There was a problem processing your request",
      className: "bg-status-error/10 border-status-error"
    })
  }

  const showActionToast = () => {
    toast({
      title: "Item deleted",
      description: "The item was removed from your collection",
      action: (
        <ToastAction altText="Undo deletion">Undo</ToastAction>
      ),
    })
  }

  return (
    <PageWrapper
      title="Notifications"
      description="Temporary messages that communicate status, provide feedback, or prompt for action."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Notifications (or toasts) are brief, non-modal messages that appear temporarily to 
            provide feedback about an operation or system status. They are non-intrusive and 
            automatically dismiss after a few seconds without requiring user action.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="flex flex-col items-center gap-4">
              <Button onClick={showBasicToast}>Show Notification</Button>
              
              <div className="mt-6 w-full max-w-sm">
                <Toast>
                  <div className="grid gap-1">
                    <ToastTitle>New notification</ToastTitle>
                    <ToastDescription>
                      This is an example of how notifications appear in the UI.
                    </ToastDescription>
                  </div>
                </Toast>
              </div>
            </div>
          </div>
        </section>

        <section id="anatomy" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Anatomy</h2>
          <p>
            Notifications consist of a container with a title, message, and optional action buttons
            or icons. They appear in a consistent location (typically bottom) and automatically 
            dismiss after a set duration.
          </p>
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <div className="h-64 flex items-start justify-center border border-dashed border-border p-6 rounded-md">
              <div className="w-full max-w-sm space-y-8">
                <div className="space-y-2">
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">1</span>
                    Container - Holds the notification content
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">2</span>
                    Title - Brief description of the notification type
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">3</span>
                    Description - Detailed message about the notification
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">4</span>
                    Action - Optional button for related actions
                  </div>
                  <div className="text-sm text-text-secondary dark:text-dark-text-secondary">
                    <span className="inline-block border border-border px-2 py-1 rounded mr-2">5</span>
                    Close button - Dismisses the notification
                  </div>
                </div>
                
                <div className="w-full">
                  <Toast>
                    <div className="grid gap-1">
                      <ToastTitle>Notification Title</ToastTitle>
                      <ToastDescription>
                        Notification description with details
                      </ToastDescription>
                    </div>
                    <ToastAction altText="Action">Action</ToastAction>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="examples" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Examples</h2>
          
          <div className="grid gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Status Notifications</h3>
              <p className="mb-4 text-muted-foreground">
                Notifications with different visual styling based on their purpose and severity.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="flex items-center gap-2" onClick={showBasicToast}>
                    <Info className="h-4 w-4" />
                    Information
                  </Button>
                  
                  <Button className="flex items-center gap-2" onClick={showSuccessToast}>
                    <CheckCircle className="h-4 w-4" />
                    Success
                  </Button>
                  
                  <Button className="flex items-center gap-2" onClick={showWarningToast}>
                    <AlertTriangle className="h-4 w-4" />
                    Warning
                  </Button>
                  
                  <Button className="flex items-center gap-2" onClick={showErrorToast}>
                    <AlertCircle className="h-4 w-4" />
                    Error
                  </Button>
                </div>
                
                <div className="mt-8 space-y-4">
                  <div className="w-full max-w-sm mx-auto">
                    <Toast>
                      <div className="grid gap-1">
                        <ToastTitle>Information</ToastTitle>
                        <ToastDescription>
                          This is an informational notification
                        </ToastDescription>
                      </div>
                    </Toast>
                  </div>
                  
                  <div className="w-full max-w-sm mx-auto">
                    <Toast className="bg-status-success/10 border-status-success">
                      <div className="grid gap-1">
                        <ToastTitle className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Success
                        </ToastTitle>
                        <ToastDescription>
                          Your action was completed successfully
                        </ToastDescription>
                      </div>
                    </Toast>
                  </div>
                  
                  <div className="w-full max-w-sm mx-auto">
                    <Toast className="bg-status-warning/10 border-status-warning">
                      <div className="grid gap-1">
                        <ToastTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4" />
                          Warning
                        </ToastTitle>
                        <ToastDescription>
                          This action might have consequences
                        </ToastDescription>
                      </div>
                    </Toast>
                  </div>
                  
                  <div className="w-full max-w-sm mx-auto">
                    <Toast className="bg-status-error/10 border-status-error">
                      <div className="grid gap-1">
                        <ToastTitle className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          Error
                        </ToastTitle>
                        <ToastDescription>
                          There was a problem processing your request
                        </ToastDescription>
                      </div>
                    </Toast>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-3">Action Notification</h3>
              <p className="mb-4 text-muted-foreground">
                Notification with an action button for quick user response.
              </p>
              <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
                <div className="flex justify-center mb-8">
                  <Button onClick={showActionToast}>Show Action Notification</Button>
                </div>
                
                <div className="w-full max-w-sm mx-auto">
                  <Toast>
                    <div className="grid gap-1">
                      <ToastTitle>Item deleted</ToastTitle>
                      <ToastDescription>
                        The item was removed from your collection
                      </ToastDescription>
                    </div>
                    <ToastAction altText="Undo deletion">Undo</ToastAction>
                  </Toast>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="behavior" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Behavior</h2>
          <p>
            Notifications follow specific behavioral patterns to ensure they are helpful without 
            being disruptive to the user experience.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Display Duration</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Standard notifications automatically dismiss after 4 seconds</li>
                <li>Notifications with actions remain visible for 8 seconds</li>
                <li>Error notifications remain visible for 6 seconds</li>
                <li>Users can manually dismiss any notification</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Placement</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Notifications appear at the bottom of the viewport on all devices</li>
                <li>On desktop devices, notifications appear at the bottom-right</li>
                <li>Multiple notifications stack vertically with the newest at the bottom</li>
                <li>Maximum of 3 notifications visible simultaneously</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Interaction</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Click/tap on the notification dismisses it</li>
                <li>Swipe gesture can dismiss the notification on touch devices</li>
                <li>Notification actions are immediately accessible</li>
                <li>Focus moves to the notification when it appears for keyboard users</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            Notifications must be accessible to all users, including those using screen readers, 
            keyboard navigation, or who have visual impairments.
          </p>
          
          <div className="grid gap-4">
            <div>
              <h3 className="text-xl font-medium">Screen Readers</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Uses <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">role="status"</code> or <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">role="alert"</code> for appropriate interruption</li>
                <li>Uses <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-live="polite"</code> for standard notifications</li>
                <li>Uses <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-live="assertive"</code> for critical error notifications</li>
                <li>Action buttons have descriptive <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">aria-label</code> attributes</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Keyboard Support</h3>
              <ul className="mt-2 space-y-1 list-disc list-inside text-muted-foreground">
                <li>Focus moves to the notification when it appears</li>
                <li>Press <code className="px-1 py-0.5 bg-surface-tertiary dark:bg-dark-surface-tertiary rounded">Escape</code> to dismiss the notification</li>
                <li>Tab order includes action buttons before dismiss button</li>
                <li>Focus returns to previous element after dismissal</li>
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
                <li>Use notifications for transient, non-critical information</li>
                <li>Keep notification content brief and focused</li>
                <li>Use appropriate visual styling based on notification type</li>
                <li>Limit the number of simultaneous notifications</li>
                <li>Ensure notifications are responsive across all devices</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium">Don't</h3>
              <ul className="mt-2 space-y-2 list-disc list-inside text-muted-foreground">
                <li>Use for critical information that requires immediate action</li>
                <li>Include complex interactions or forms within notifications</li>
                <li>Show frequent notifications for routine or expected actions</li>
                <li>Stack too many notifications simultaneously</li>
                <li>Use notifications for marketing or promotional content</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section id="implementation" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Implementation</h2>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <pre className="bg-surface-tertiary dark:bg-dark-surface-tertiary p-4 rounded-md overflow-x-auto text-sm">
              <code>{`import { useToast } from "@/components/hooks/use-toast"

export function NotificationDemo() {
  const { toast } = useToast()
  
  return (
    <Button
      onClick={() => {
        toast({
          title: "Notification Title",
          description: "Notification description with details",
          action: (
            <ToastAction altText="Action button">Action</ToastAction>
          ),
        })
      }}
    >
      Show Notification
    </Button>
  )
}`}</code>
            </pre>
          </div>
        </section>
        
        <section id="setup" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Setup Requirements</h2>
          <p>
            To use the toast notifications system, you need to add the Toaster component to your application.
          </p>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <p className="mb-4 font-medium">Add this to your layout.tsx or main app wrapper:</p>
            <pre className="bg-surface-tertiary dark:bg-dark-surface-tertiary p-4 rounded-md overflow-x-auto text-sm">
              <code>{`import { Toaster } from "@/components/ui/toaster"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}`}</code>
            </pre>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}
