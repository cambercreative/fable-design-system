import PageWrapper from '../../components/page-wrapper'
import Link from 'next/link'
import { 
  Circle, 
  Square, 
  Triangle, 
  ToggleLeft, 
  CheckSquare, 
  Radio, 
  ListFilter, 
  Inbox, 
  MessageSquare, 
  AlertCircle, 
  Bell, 
  Volume2 
} from 'lucide-react'

export default function ComponentsPage() {
  return (
    <PageWrapper
      title="Component Library"
      description="A comprehensive collection of reusable UI components that power Fable's user interfaces."
    >
      <div className="grid gap-12">
        <section className="grid gap-6">
          <p>
            The Fable component library provides a consistent set of UI building blocks
            that can be combined to create cohesive and accessible user experiences.
            Each component is designed for flexibility, accessibility, and performance.
          </p>
        </section>

        <section className="grid gap-6">
          <h2 className="text-2xl font-semibold">Component Categories</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentCategory
              title="Core Inputs"
              description="Essential input components for user interaction"
              icon={<Circle size={24} />}
              components={[
                { name: 'Buttons', href: '/components/buttons' },
                { name: 'Inputs', href: '/components/inputs' },
                { name: 'Textareas', href: '/components/textareas' },
                { name: 'Select', href: '/components/select' },
              ]}
            />
            
            <ComponentCategory
              title="Selection Controls"
              description="Components for selecting options and toggling states"
              icon={<ToggleLeft size={24} />}
              components={[
                { name: 'Checkboxes', href: '/components/checkboxes' },
                { name: 'Radio Groups', href: '/components/radio-groups' },
                { name: 'Switches', href: '/components/switches' },
                { name: 'Toggle Buttons', href: '/components/toggle-buttons' },
              ]}
            />
            
            <ComponentCategory
              title="Form Elements"
              description="Components for building structured forms"
              icon={<CheckSquare size={24} />}
              components={[
                { name: 'Form Layout', href: '/components/form-layout' },
                { name: 'Field', href: '/components/field' },
                { name: 'Label', href: '/components/label' },
                { name: 'Validation', href: '/components/validation' },
              ]}
            />
            
            <ComponentCategory
              title="Data Display"
              description="Components for presenting data and content"
              icon={<ListFilter size={24} />}
              components={[
                { name: 'Cards', href: '/components/cards' },
                { name: 'Lists', href: '/components/lists' },
                { name: 'Tables', href: '/components/tables' },
                { name: 'Data Visualization', href: '/components/data-visualization' },
              ]}
            />
            
            <ComponentCategory
              title="Navigation"
              description="Components for navigating between views and sections"
              icon={<Square size={24} />}
              components={[
                { name: 'Navigation Menu', href: '/components/navigation-menu' },
                { name: 'Tabs', href: '/components/tabs' },
                { name: 'Breadcrumbs', href: '/components/breadcrumbs' },
                { name: 'Pagination', href: '/components/pagination' },
              ]}
            />
            
            <ComponentCategory
              title="Overlays"
              description="Components that appear above the main interface"
              icon={<Triangle size={24} />}
              components={[
                { name: 'Dialogs', href: '/components/dialogs' },
                { name: 'Tooltips', href: '/components/tooltips' },
                { name: 'Popovers', href: '/components/popovers' },
                { name: 'Sheets', href: '/components/sheets' },
              ]}
            />
            
            <ComponentCategory
              title="Feedback"
              description="Components that provide feedback to user actions"
              icon={<AlertCircle size={24} />}
              components={[
                { name: 'Alerts', href: '/components/alerts' },
                { name: 'Toast', href: '/components/toast' },
                { name: 'Progress', href: '/components/progress' },
                { name: 'Skeleton', href: '/components/skeleton' },
              ]}
            />
            
            <ComponentCategory
              title="Content"
              description="Components for displaying rich content"
              icon={<Inbox size={24} />}
              components={[
                { name: 'Typography', href: '/components/typography' },
                { name: 'Avatar', href: '/components/avatar' },
                { name: 'Badge', href: '/components/badge' },
                { name: 'Divider', href: '/components/divider' },
              ]}
            />
            
            <ComponentCategory
              title="Voice UI"
              description="Components for voice interaction patterns"
              icon={<Volume2 size={24} />}
              components={[
                { name: 'Voice Input', href: '/components/voice-input' },
                { name: 'Voice Feedback', href: '/components/voice-feedback' },
                { name: 'Voice Visualization', href: '/components/voice-visualization' },
                { name: 'Voice Commands', href: '/components/voice-commands' },
              ]}
            />
          </div>
        </section>

        <section className="grid gap-6">
          <h2 className="text-2xl font-semibold">Component Status</h2>
          <p>
            Our components follow a development lifecycle with defined statuses to indicate
            their readiness for production use. This helps teams understand which components
            are ready to be incorporated into product development.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatusCard 
              status="Stable"
              description="Thoroughly tested and ready for production use."
              color="bg-success"
            />
            <StatusCard 
              status="Beta"
              description="Feature complete but may receive updates based on feedback."
              color="bg-info"
            />
            <StatusCard 
              status="Alpha"
              description="Under active development, may have significant changes."
              color="bg-warning"
            />
            <StatusCard 
              status="Deprecated"
              description="Will be removed in a future version, avoid using."
              color="bg-error"
            />
          </div>
        </section>

        <section className="grid gap-6">
          <h2 className="text-2xl font-semibold">Implementation Guidance</h2>
          <p>
            For guidance on implementing components in your project, refer to the
            detailed documentation for each component or explore the implementation
            guides in the Resources section.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Link 
              href="/resources/implementation-guide"
              className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Component Implementation Guide</h3>
              <p className="text-muted-foreground">
                Comprehensive guide for implementing components in your projects, including
                best practices and code examples.
              </p>
            </Link>
            
            <Link 
              href="/resources/design-tokens"
              className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">Design Tokens</h3>
              <p className="text-muted-foreground">
                Access design tokens used by components for consistent styling across
                different platforms and implementations.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

function ComponentCategory({
  title,
  description,
  icon,
  components,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  components: { name: string; href: string }[];
}) {
  return (
    <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
      <div className="flex items-center mb-4">
        <div className="mr-3 text-primary">{icon}</div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {components.map((component, index) => (
          <li key={index}>
            <Link 
              href={component.href}
              className="inline-block text-sm hover:text-primary transition-colors"
            >
              {component.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function StatusCard({
  status,
  description,
  color,
}: {
  status: string;
  description: string;
  color: string;
}) {
  return (
    <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg border border-border overflow-hidden">
      <div className={`h-1 -mt-4 mb-3 ${color}`}></div>
      <h3 className="font-semibold mb-1">{status}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
