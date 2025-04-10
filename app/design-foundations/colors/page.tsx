import PageWrapper from '../../../components/page-wrapper'

export default function ColorsPage() {
  return (
    <PageWrapper
      title="Color System"
      description="The Fable color system provides a harmonious palette to create coherent and accessible visual experiences."
    >
      <div className="grid gap-12">
        <section id="overview" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Overview</h2>
          <p>
            Our color system is designed to create emotional connections while ensuring
            accessibility and maintaining a consistent visual language across all Fable
            products. The palette draws inspiration from storytelling, with warm narrative
            tones that evoke a sense of comfort and engagement.
          </p>
        </section>

        <section id="primary-palette" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Primary Palette</h2>
          <p>
            The primary palette forms the foundation of our color system and establishes
            the Fable brand identity. These colors should be used for key interactive elements,
            primary actions, and important visual indicators.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Primary"
              description="Main brand color for key actions and elements"
              hexCode="#FF6B35"
              tokenName="--color-primary"
              background="bg-primary"
              textColor="text-primary-foreground"
            />
            
            <ColorCard
              name="Secondary"
              description="Supporting color for secondary actions"
              hexCode="#38A3A5"
              tokenName="--color-secondary"
              background="bg-secondary"
              textColor="text-secondary-foreground"
            />
            
            <ColorCard
              name="Accent"
              description="Highlight color for emphasizing elements"
              hexCode="#D95F69"
              tokenName="--color-accent"
              background="bg-accent"
              textColor="text-accent-foreground"
            />
          </div>
        </section>

        <section id="surface-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Surface Colors</h2>
          <p>
            Surface colors define the appearance of different UI layers and establish
            visual hierarchy through subtle variations in background colors.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Background"
              description="The main application background"
              hexCode="#FFFFFF"
              darkHexCode="#121212"
              tokenName="--color-background"
              background="bg-background dark:bg-dark-background"
              textColor="text-foreground dark:text-dark-foreground"
            />
            
            <ColorCard
              name="Surface Primary"
              description="Primary container surfaces"
              hexCode="#FFEFD9"
              darkHexCode="#1A1A1A"
              tokenName="--color-surface-primary"
              background="bg-surface-primary dark:bg-dark-surface-primary"
              textColor="text-foreground dark:text-dark-foreground"
            />
            
            <ColorCard
              name="Surface Secondary"
              description="Secondary container surfaces"
              hexCode="#FFF5E6"
              darkHexCode="#2A2A2A"
              tokenName="--color-surface-secondary"
              background="bg-surface-secondary dark:bg-dark-surface-secondary"
              textColor="text-foreground dark:text-dark-foreground"
            />
          </div>
        </section>

        <section id="text-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Text Colors</h2>
          <p>
            Text colors ensure readability and establish visual hierarchy in typography
            throughout the interface.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ColorCard
              name="Foreground"
              description="Primary text color"
              hexCode="#000000"
              darkHexCode="#FFFFFF"
              tokenName="--color-foreground"
              background="bg-background dark:bg-dark-background"
              textColor="text-foreground dark:text-dark-foreground"
              bordered
            />
            
            <ColorCard
              name="Muted Foreground"
              description="Secondary text color"
              hexCode="#666666"
              darkHexCode="#A0A0A0"
              tokenName="--color-muted-foreground"
              background="bg-background dark:bg-dark-background"
              textColor="text-muted-foreground dark:text-dark-muted-foreground"
              bordered
            />
            
            <ColorCard
              name="Subtle Foreground"
              description="Tertiary text color"
              hexCode="#999999"
              darkHexCode="#777777"
              tokenName="--color-subtle-foreground"
              background="bg-background dark:bg-dark-background"
              textColor="text-subtle-foreground dark:text-dark-subtle-foreground"
              bordered
            />
          </div>
        </section>

        <section id="status-colors" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Status Colors</h2>
          <p>
            Status colors convey feedback about system states, alerts, and results of user actions.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ColorCard
              name="Success"
              description="Positive actions and confirmations"
              hexCode="#4CAF50"
              tokenName="--color-success"
              background="bg-success"
              textColor="text-success-foreground"
            />
            
            <ColorCard
              name="Warning"
              description="Cautionary messages and states"
              hexCode="#FFC107"
              tokenName="--color-warning"
              background="bg-warning"
              textColor="text-warning-foreground"
            />
            
            <ColorCard
              name="Error"
              description="Error messages and destructive actions"
              hexCode="#F44336"
              tokenName="--color-error"
              background="bg-error"
              textColor="text-error-foreground"
            />
            
            <ColorCard
              name="Info"
              description="Informational messages and states"
              hexCode="#2196F3"
              tokenName="--color-info"
              background="bg-info"
              textColor="text-info-foreground"
            />
          </div>
        </section>

        <section id="gradient" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Gradient</h2>
          <p>
            The Fable gradient combines our primary and secondary colors to create a
            distinctive visual signature that can be applied to key brand elements.
          </p>
          
          <div className="h-32 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <div className="text-white font-medium">
              Linear Gradient: Primary to Secondary
            </div>
          </div>
        </section>

        <section id="accessibility" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Accessibility</h2>
          <p>
            All color combinations must meet WCAG 2.1 AA standards for contrast. Text and interactive
            elements should have a minimum contrast ratio of 4.5:1 against their backgrounds.
          </p>
          
          <div className="grid gap-4">
            <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-4">Contrast Examples</h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="p-4 bg-primary rounded-md">
                  <p className="text-primary-foreground">
                    <strong>Primary with foreground text</strong><br />
                    This combination has a contrast ratio of 7.1:1, meeting WCAG AAA requirements.
                  </p>
                </div>
                
                <div className="p-4 bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <p className="text-foreground dark:text-dark-foreground">
                    <strong>Surface with foreground text</strong><br />
                    This combination has a contrast ratio of 15.8:1, meeting WCAG AAA requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

function ColorCard({
  name,
  description,
  hexCode,
  darkHexCode,
  tokenName,
  background,
  textColor,
  bordered = false,
}: {
  name: string;
  description: string;
  hexCode: string;
  darkHexCode?: string;
  tokenName: string;
  background: string;
  textColor: string;
  bordered?: boolean;
}) {
  return (
    <div className={`
      overflow-hidden rounded-lg border 
      ${bordered ? 'border-border' : 'border-transparent'}
    `}>
      <div className={`h-24 ${background}`}></div>
      <div className="p-4 bg-surface-secondary dark:bg-dark-surface-secondary">
        <h3 className="font-medium mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <div className="flex flex-col text-xs">
          <span>Light: {hexCode}</span>
          {darkHexCode && <span>Dark: {darkHexCode}</span>}
          <code className="mt-1 font-mono">{tokenName}</code>
        </div>
      </div>
    </div>
  );
}
