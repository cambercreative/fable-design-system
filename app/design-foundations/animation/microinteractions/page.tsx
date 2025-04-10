import React from 'react';
import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import dynamic from 'next/dynamic';

// Dynamic import for client components with interactivity
const ButtonMicrointeractions = dynamic(() => import('./button-microinteractions'), { ssr: false });
const InputMicrointeractions = dynamic(() => import('./input-microinteractions'), { ssr: false });
const PulsatingNotification = dynamic(() => import('./pulsating-notification'), { ssr: false });
const LoadingIndicators = dynamic(() => import('./loading-indicators'), { ssr: false });

export const metadata = {
  title: 'Micro-interactions | Fable Design System',
  description: 'Small, focused animations that provide feedback and enhance the feeling of direct manipulation'
};

export default function MicrointeractionsPage() {
  return (
    <div className="container py-10 max-w-6xl">
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link href="/design-foundations/animation" className="hover:text-primary transition-colors">Animation</Link>
          <span>/</span>
          <span>Micro-interactions</span>
        </div>
        <h1 className="font-display text-4xl mb-4 font-bold">Micro-interactions</h1>
        <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
          Micro-interactions are subtle animations that provide immediate feedback, guide users through their journey, and add moments of delight to the experience.
        </p>
      </div>

      <Separator className="my-8" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Purpose of Micro-interactions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-medium mb-3">Provide Feedback</h3>
            <p className="text-muted-foreground">
              Confirm that a user's action has been recognized, making the interface feel responsive and alive.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-medium mb-3">Guide Attention</h3>
            <p className="text-muted-foreground">
              Direct users to important elements or actions, helping them navigate the interface more intuitively.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-medium mb-3">Create Delight</h3>
            <p className="text-muted-foreground">
              Add personality and polish that elevates the experience from merely functional to genuinely enjoyable.
            </p>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Button Microinteractions</h2>
        <p className="mb-6 max-w-3xl">
          Buttons use micro-interactions to provide clear feedback and reinforce the feeling of direct manipulation. These small animations make the interface feel responsive and tactile.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <ButtonMicrointeractions />
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Form Input Microinteractions</h2>
        <p className="mb-6 max-w-3xl">
          Form inputs use micro-interactions to guide users, provide validation feedback, and create a more engaging experience during data entry.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <InputMicrointeractions />
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Notifications and Alerts</h2>
        <p className="mb-6 max-w-3xl">
          Notifications use subtle animations to attract attention without being disruptive. The right balance of motion helps users notice important information without breaking their flow.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <PulsatingNotification />
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-8">
          <h3 className="font-display text-xl font-medium mb-4">Implementation Guidelines</h3>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Use subtle animations to draw attention to new notifications</li>
            <li>Animate notification entrance and exit to avoid jarring appearance/disappearance</li>
            <li>Use timing-quick (100ms) for notification state changes</li>
            <li>Use slight bounce effect for badge notifications to enhance visibility</li>
            <li>Ensure notifications are accessible with appropriate ARIA attributes</li>
            <li>For critical alerts, use slightly more pronounced animations to ensure attention</li>
          </ul>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Loading and Progress Indicators</h2>
        <p className="mb-6 max-w-3xl">
          Loading states help users understand that the system is working and provide a sense of progress. Well-designed loading animations make waiting feel shorter and reduce perceived latency.
        </p>
        
        <div className="grid grid-cols-1 gap-8 mb-8">
          <LoadingIndicators />
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Component-Specific Micro-interactions</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-display font-medium">Component</th>
                <th className="text-left p-4 font-display font-medium">Micro-interaction</th>
                <th className="text-left p-4 font-display font-medium">Timing</th>
                <th className="text-left p-4 font-display font-medium">Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Toggle Switch</td>
                <td className="p-4">
                  Smooth thumb movement with track color change
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Visualize state change between two options</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Checkbox</td>
                <td className="p-4">
                  Checkmark draw animation with background fill
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Confirm selection and provide visual satisfaction</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Radio Button</td>
                <td className="p-4">
                  Center dot scale animation with ring color change
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Indicate exclusive selection from options</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Dropdown Menu</td>
                <td className="p-4">
                  Menu items staggered fade in, subtle item hover effect
                </td>
                <td className="p-4 font-mono text-sm">timing-standard<br/>(20ms stagger)</td>
                <td className="p-4">Create spatial relationship and draw attention to options</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Search Field</td>
                <td className="p-4">
                  Icon to loading spinner transition, results fade in
                </td>
                <td className="p-4 font-mono text-sm">timing-quick</td>
                <td className="p-4">Indicate search in progress and draw attention to results</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Accordion</td>
                <td className="p-4">
                  Smooth height transition, chevron rotation
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Show relationship between header and content</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Tabs</td>
                <td className="p-4">
                  Indicator slide animation, content crossfade
                </td>
                <td className="p-4 font-mono text-sm">timing-standard</td>
                <td className="p-4">Show relationship between tab and content</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-medium">Voice Visualization</td>
                <td className="p-4">
                  Continuous ambient motion, responsive audio waveform
                </td>
                <td className="p-4 font-mono text-sm">timing-instant<br/>(real-time)</td>
                <td className="p-4">Indicate active listening and processing states</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Animation Choreography</h2>
        <p className="mb-6 max-w-3xl">
          When combining multiple micro-interactions, careful choreography ensures each animation serves its purpose without creating visual noise or confusion.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-medium mb-3">Sequencing</h3>
            <p className="text-muted-foreground mb-4">
              Order animations to create a logical flow of attention:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Primary action feedback first (e.g., button press)</li>
              <li>Result/consequence animations second (e.g., form submission)</li>
              <li>System response animations last (e.g., success message)</li>
            </ol>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border">
            <h3 className="font-display text-xl font-medium mb-3">Visual Hierarchy</h3>
            <p className="text-muted-foreground mb-4">
              Use animation prominence to reinforce importance:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Subtle animations for frequent/less important elements</li>
              <li>More noticeable animations for key moments or actions</li>
              <li>Reserve elaborate animations for significant achievements</li>
              <li>Ensure animations don't compete for attention</li>
            </ul>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mt-6">
          <h3 className="font-display text-xl font-medium mb-4">Implementation Example: Form Submission Choreography</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// React + Framer Motion implementation
function FormSubmissionChoreography() {
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
    
    // Reset form after success animation completes
    setTimeout(() => {
      setStatus('idle');
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form Fields */}
      <motion.div animate={{ opacity: status === 'submitting' ? 0.7 : 1 }}>
        <input type="text" disabled={status !== 'idle'} />
        {/* More fields */}
      </motion.div>
      
      {/* Submit Button with animated states */}
      <motion.button
        disabled={status !== 'idle'}
        animate={{
          scale: status === 'submitting' ? 0.98 : 1,
          opacity: status !== 'idle' ? 0.8 : 1,
          backgroundColor: status === 'success' ? 'var(--success)' : 'var(--primary)'
        }}
        transition={{ duration: 0.2 }}
      >
        {status === 'idle' && 'Submit'}
        {status === 'submitting' && <Spinner />}
        {status === 'success' && <CheckIcon />}
      </motion.button>
      
      {/* Success Message */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ 
              delay: 0.2, // Wait for button animation
              duration: 0.3 
            }}
          >
            Form submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}`}
          </pre>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="mb-12">
        <h2 className="font-display text-2xl font-semibold mb-6">Accessibility Considerations</h2>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Respecting User Preferences</h3>
          <p className="mb-4">
            All micro-interactions must be designed with accessibility in mind:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
            <li>Honor <code>prefers-reduced-motion</code> by providing simplified alternatives</li>
            <li>Ensure all state changes have appropriate ARIA attributes</li>
            <li>Don't rely solely on animation to communicate status changes</li>
            <li>Keep animations brief and non-disruptive</li>
            <li>Provide static alternatives for motion-based feedback</li>
          </ul>

          <h3 className="font-display text-xl font-medium mb-4 mt-6">Reduced Motion Alternative Example</h3>
          <pre className="p-4 rounded bg-muted font-mono text-sm overflow-x-auto">
{`// CSS implementation
@media (prefers-reduced-motion: reduce) {
  .micro-animation {
    /* Replace movement with opacity change */
    transition: opacity 100ms linear !important;
    transform: none !important;
  }
  
  .loading-animation {
    /* Reduce or eliminate spinning/pulsing */
    animation-duration: 0ms !important;
  }
  
  .staggered-list {
    /* Remove staggered effect */
    transition-delay: 0ms !important;
  }
}

// React + Framer Motion implementation
import { motion, useReducedMotion } from 'framer-motion';

function AccessibleMicrointeraction() {
  const shouldReduceMotion = useReducedMotion();
  
  const buttonAnimation = shouldReduceMotion
    ? {
        // Simple opacity change only
        rest: { opacity: 1 },
        hover: { opacity: 0.8 },
        tap: { opacity: 0.7 }
      }
    : {
        // Full animation with scale and shadow
        rest: { scale: 1, boxShadow: '0px 2px 4px rgba(0,0,0,0.1)' },
        hover: { scale: 1.03, boxShadow: '0px 4px 8px rgba(0,0,0,0.15)' },
        tap: { scale: 0.98, boxShadow: '0px 1px 2px rgba(0,0,0,0.1)' }
      };
  
  return (
    <motion.button
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.2 }}
    >
      Click Me
    </motion.button>
  );
}`}
          </pre>
        </div>
      </section>
      
      <div className="flex gap-4 mt-12">
        <Link 
          href="/design-foundations/animation/transitions" 
          className="py-2 px-4 border border-border rounded-md hover:bg-accent transition-colors duration-200"
        >
          ← Transitions
        </Link>
        <Link 
          href="/design-foundations/animation" 
          className="py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
        >
          Back to Animation Overview
        </Link>
      </div>
    </div>
  );
}