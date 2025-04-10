import React from 'react'
import Sidebar from '../../../components/sidebar'
import Header from '../../../components/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import CodeBlock from '../../../components/code-block'

// Import pattern-specific components
import FormExample from './components/form-example'
import MultiStepFormExample from './components/multi-step-example'
import InlineValidationExample from './components/inline-validation-example'

export default function FormPatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Form Patterns</h1>
              <p className="text-lg max-w-3xl mb-l">
                These form patterns demonstrate best practices for data collection using Fable's components. 
                All patterns adhere to our accessibility standards and provide consistent user experiences.
              </p>
            </section>

            <section className="mb-xl" id="standard-form">
              <h2 className="mb-m">Standard Form Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <FormExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For simple data collection needs where all fields are related</li>
                      <li>When the form can be completed in a single step</li>
                      <li>For forms with 2-8 input fields</li>
                      <li>When immediate validation feedback is needed</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Group related fields with clear section headings</li>
                      <li>Place fields in a logical sequence following user mental models</li>
                      <li>Use clear, concise labels that describe the requested information</li>
                      <li>Add helper text to clarify complex requirements</li>
                      <li>Provide appropriate input types (email, tel, etc.) for better mobile experiences</li>
                      <li>Use proper spacing between form groups for visual hierarchy</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Form structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Title: Clear description of the form's purpose</li>
                      <li>Introduction: Brief explanation if needed</li>
                      <li>Form sections: Logically grouped fields</li>
                      <li>Primary action: Clear call-to-action (submit button)</li>
                      <li>Secondary action: Cancel or back option when appropriate</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Spacing & Layout</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Form group margin bottom: spacing-l (24px)</li>
                        <li>Input label margin bottom: spacing-xs (4px)</li>
                        <li>Helper text margin top: spacing-xs (4px)</li>
                        <li>Form actions margin top: spacing-xl (32px)</li>
                        <li>Form max-width: 640px for optimal readability</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Typography</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Form title: Heading 2 in Faro Bold</li>
                        <li>Section headings: Heading 4 in Faro Medium</li>
                        <li>Input labels: Body in Atkinson Hyperlegible Next Medium</li>
                        <li>Helper text: Caption in Atkinson Hyperlegible Next Regular</li>
                        <li>Error messages: Caption in Atkinson Hyperlegible Next Medium</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Color & Visual Treatment</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Form background: surface-primary</li>
                        <li>Input background: surface-secondary</li>
                        <li>Labels: text-primary</li>
                        <li>Helper text: text-tertiary</li>
                        <li>Error states: status-error (#E53935)</li>
                        <li>Success states: status-success (#43A047)</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">WCAG Compliance</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>All form controls meet WCAG 2.1 AA requirements</li>
                        <li>Color contrast meets 4.5:1 minimum ratio for text</li>
                        <li>Focus states are clearly visible and keyboard navigable</li>
                        <li>All inputs have proper labels with for/id associations</li>
                        <li>Error messages are programmatically associated with inputs</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Semantic Structure</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Forms use proper <code>form</code> element with appropriate aria attributes</li>
                        <li>Related controls are grouped with <code>fieldset</code> and <code>legend</code></li>
                        <li>Required fields indicate required state both visually and with <code>aria-required</code></li>
                        <li>Error states use <code>aria-invalid</code> and <code>aria-describedby</code> for error messages</li>
                        <li>Submit buttons have descriptive text indicating the action</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Keyboard Interaction</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Logical tab order follows visual layout</li>
                        <li>Form can be completed and submitted using keyboard only</li>
                        <li>Focus is moved automatically to first error on submission failure</li>
                        <li>Error summary is provided at the top of form when submission fails</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function StandardForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  
  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-l max-w-xl">
      <div className="space-y-m">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        
        <div className="space-y-s">
          <div>
            <Label htmlFor="name" className="mb-xs block">
              Full Name <span className="text-status-error">*</span>
            </Label>
            <Input
              id="name"
              {...register("name", { required: "Name is required" })}
              aria-invalid={errors.name ? "true" : "false"}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-xs text-status-error text-sm">
                {errors.name.message}
              </p>
            )}
          </div>
          
          <div>
            <Label htmlFor="email" className="mb-xs block">
              Email Address <span className="text-status-error">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-xs text-status-error text-sm">
                {errors.email.message}
              </p>
            )}
            <p className="mt-xs text-text-tertiary text-sm">
              We'll never share your email with anyone else.
            </p>
          </div>
          
          <div>
            <Label htmlFor="phone" className="mb-xs block">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-s">
        <Checkbox id="consent" {...register("consent")} />
        <Label htmlFor="consent" className="text-sm leading-tight">
          I agree to be contacted about my inquiry
        </Label>
      </div>
      
      <div className="pt-m">
        <Button type="submit" className="mr-m">Submit</Button>
        <Button type="button" variant="secondary">Cancel</Button>
      </div>
    </form>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-xl" id="multi-step-form">
              <h2 className="mb-m">Multi-Step Form Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <MultiStepFormExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For complex forms with more than 8-10 input fields</li>
                      <li>When collecting information that falls into distinct categories</li>
                      <li>For registration or onboarding processes</li>
                      <li>When gradual disclosure improves comprehension</li>
                      <li>To reduce cognitive load for complex tasks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Break content into logical, manageable steps</li>
                      <li>Provide clear step indicators showing progress</li>
                      <li>Allow users to review previous steps</li>
                      <li>Validate each step before proceeding to the next</li>
                      <li>Save progress to prevent data loss</li>
                      <li>Provide a final review step before submission</li>
                      <li>Allow navigation between steps when appropriate</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Step structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Progress indicator: Visual representation of current position and total steps</li>
                      <li>Step title: Clear description of current step's purpose</li>
                      <li>Form fields: Logically grouped and relevant to current step</li>
                      <li>Primary action: "Continue" or "Next" button</li>
                      <li>Secondary action: "Back" button (except on first step)</li>
                      <li>Optional: "Save and exit" for long processes</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Progress Indicator</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Position: Top of form, below the form title</li>
                        <li>Height: 4px for progress bar style</li>
                        <li>Step circles: 24px diameter with 2px border</li>
                        <li>Completed step color: Fable Red gradient</li>
                        <li>Current step color: Fable Amber</li>
                        <li>Future step color: surface-tertiary</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Navigation Controls</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Next button: Primary button style, right-aligned</li>
                        <li>Back button: Secondary button style, left-aligned</li>
                        <li>Button spacing: spacing-m (16px) between buttons</li>
                        <li>Control container: Separated from form fields with spacing-xl (32px) margin-top</li>
                        <li>Submit button (final step): Replaces Next button, uses success variant</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Transition Animation</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Step transition: Horizontal slide with fade effect</li>
                        <li>Duration: timing-standard (200ms)</li>
                        <li>Progress indicator update: Synchronous with step transition</li>
                        <li>Focus management: Auto-focus on first field of new step</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Structure and Semantics</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Each step is wrapped in a <code>section</code> with appropriate heading</li>
                        <li>Progress indicators use <code>aria-current</code> to identify current step</li>
                        <li>Step numbers are announced to screen readers</li>
                        <li>Hidden steps are removed from tab order with <code>aria-hidden</code></li>
                        <li>Focus is managed when transitioning between steps</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Navigation Announcements</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Step changes are announced via <code>aria-live</code> regions</li>
                        <li>Error summaries are announced when validation fails</li>
                        <li>Progress updates are provided (e.g., "Step 2 of 4")</li>
                        <li>Successful completion is announced clearly</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">State Persistence</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Form data is preserved when moving between steps</li>
                        <li>Browser back button behavior is properly managed</li>
                        <li>Session timeout warnings are provided for longer forms</li>
                        <li>Auto-save functionality prevents data loss</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'

export default function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({})
  const totalSteps = 3
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: formData
  })
  
  const onSubmitStep = (data) => {
    // Save data from this step
    setFormData({...formData, ...data})
    
    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Submit the complete form data
      console.log('Form submitted:', {...formData, ...data})
      // Handle final submission
    }
  }
  
  const goToPreviousStep = () => {
    setStep(step - 1)
  }
  
  // Render progress indicator
  const renderProgress = () => (
    <div className="mb-l">
      <div className="flex justify-between mb-xs">
        {Array.from({length: totalSteps}, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={\`w-6 h-6 rounded-full flex items-center justify-center 
                \${i + 1 < step ? 'bg-gradient-to-r from-primary to-primary-amber text-white' : ''} 
                \${i + 1 === step ? 'border-2 border-primary-amber bg-surface-secondary' : ''} 
                \${i + 1 > step ? 'border-2 border-border bg-surface-tertiary' : ''}\`}
              aria-current={i + 1 === step ? 'step' : undefined}
            >
              {i + 1}
            </div>
            <span className="text-xs mt-1">{getStepName(i + 1)}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-surface-tertiary h-1 rounded-full">
        <div 
          className="h-1 bg-gradient-to-r from-primary to-primary-amber rounded-full"
          style={{ width: \`\${((step - 1) / (totalSteps - 1)) * 100}%\` }}
          role="progressbar"
          aria-valuenow={(step / totalSteps) * 100}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
  
  // Get step name for accessibility
  const getStepName = (stepNumber) => {
    switch (stepNumber) {
      case 1: return 'Personal'
      case 2: return 'Preferences'
      case 3: return 'Review'
      default: return \`Step \${stepNumber}\`
    }
  }
  
  // Render step content based on current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <section aria-labelledby="step1-heading">
            <h2 id="step1-heading" className="text-xl font-medium mb-m">Personal Information</h2>
            <div className="space-y-m">
              <div>
                <Label htmlFor="name" className="mb-xs block">
                  Full Name <span className="text-status-error">*</span>
                </Label>
                <Input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  defaultValue={formData.name}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-xs text-status-error text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="mb-xs block">
                  Email Address <span className="text-status-error">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={formData.email}
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-xs text-status-error text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
          </section>
        )
        
      case 2:
        return (
          <section aria-labelledby="step2-heading">
            <h2 id="step2-heading" className="text-xl font-medium mb-m">Preferences</h2>
            <div className="space-y-m">
              <div>
                <Label className="mb-xs block">How did you hear about us?</Label>
                <RadioGroup defaultValue={formData.referralSource} {...register("referralSource")}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="social" value="social" />
                    <Label htmlFor="social">Social Media</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="friend" value="friend" />
                    <Label htmlFor="friend">Friend/Family</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="search" value="search" />
                    <Label htmlFor="search">Search Engine</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="other" value="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div>
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    defaultChecked={formData.newsletter}
                    {...register("newsletter")} 
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-tight">
                    Subscribe to our newsletter for updates
                  </Label>
                </div>
              </div>
            </div>
          </section>
        )
        
      case 3:
        return (
          <section aria-labelledby="step3-heading">
            <h2 id="step3-heading" className="text-xl font-medium mb-m">Review Your Information</h2>
            <div className="space-y-m bg-surface-secondary p-m rounded-md">
              <div>
                <h3 className="text-sm font-medium text-text-tertiary">Personal Information</h3>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-text-tertiary">Preferences</h3>
                <p><strong>Referral Source:</strong> {formData.referralSource || 'Not specified'}</p>
                <p><strong>Newsletter:</strong> {formData.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
              </div>
              
              <div className="pt-s">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="confirm" 
                    {...register("confirm", { required: "You must confirm the information is correct" })}
                    aria-invalid={errors.confirm ? "true" : "false"}
                    aria-describedby={errors.confirm ? "confirm-error" : undefined}
                  />
                  <Label htmlFor="confirm" className="text-sm leading-tight">
                    I confirm that the information provided is correct
                  </Label>
                </div>
                {errors.confirm && (
                  <p id="confirm-error" className="mt-xs text-status-error text-sm ml-6">
                    {errors.confirm.message}
                  </p>
                )}
              </div>
            </div>
          </section>
        )
        
      default:
        return null
    }
  }
  
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-m">Create Your Profile</h1>
      
      {renderProgress()}
      
      <form onSubmit={handleSubmit(onSubmitStep)}>
        {renderStepContent()}
        
        <div className="flex justify-between mt-xl">
          {step > 1 && (
            <Button type="button" variant="secondary" onClick={goToPreviousStep}>
              Back
            </Button>
          )}
          <div className={step === 1 ? 'ml-auto' : ''}>
            <Button type="submit">
              {step === totalSteps ? 'Submit' : 'Continue'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-xl" id="inline-validation">
              <h2 className="mb-m">Inline Validation Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <InlineValidationExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For complex form fields with specific formatting requirements</li>
                      <li>When immediate feedback helps users correct input in real-time</li>
                      <li>For password creation with security requirements</li>
                      <li>For high-stakes forms where errors are costly</li>
                      <li>When field validation rules are not immediately obvious</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Validation timing</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li><strong>Real-time validation:</strong> Validate as the user types (for pattern matching)</li>
                      <li><strong>Blur validation:</strong> Validate when focus leaves the field (for most fields)</li>
                      <li><strong>Submit validation:</strong> Final validation on form submission</li>
                      <li>Consider debouncing real-time validation to prevent rapid feedback changes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Validation states</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li><strong>Invalid:</strong> Clear error message with visual indicator</li>
                      <li><strong>Valid:</strong> Success indicator (subtle checkmark or color change)</li>
                      <li><strong>In progress:</strong> Requirements checklist with pass/fail indicators</li>
                      <li><strong>Pristine:</strong> No validation indicators before user interaction</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Error States</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Input border: 2px status-error</li>
                        <li>Error text: Caption style, status-error color</li>
                        <li>Error icon: 16×16px alert icon in status-error color</li>
                        <li>Positioning: Error message 4px below input field</li>
                        <li>Animation: Subtle shake animation on validation failure (optional)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Success States</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Input border: 2px status-success</li>
                        <li>Success icon: 16×16px checkmark in status-success color</li>
                        <li>Animation: Subtle fade-in for success state</li>
                        <li>Success message: Generally not needed, visual indicator is sufficient</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Requirements Checklist</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Container: surface-tertiary background with radius-s</li>
                        <li>Padding: spacing-s (8px)</li>
                        <li>List items: Caption text style with 4px spacing</li>
                        <li>Incomplete: text-tertiary color with neutral icon</li>
                        <li>Complete: status-success color with checkmark icon</li>
                        <li>Failed: status-error color with x icon</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Programmatic Associations</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Error messages use <code>aria-describedby</code> to associate with inputs</li>
                        <li>Invalid state indicated with <code>aria-invalid="true"</code></li>
                        <li>Requirements checklists use <code>role="list"</code> with proper list semantics</li>
                        <li>Status changes announced via live regions for screen readers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Timing Considerations</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Avoid validating too quickly during typing (causes excessive announcements)</li>
                        <li>Delay error announcements until user has finished entering data</li>
                        <li>Group related validation feedback to prevent announcement overload</li>
                        <li>Provide instructions upfront before validation begins</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Error Recovery</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Error messages are specific and actionable</li>
                        <li>Validation rules are clearly explained before errors occur</li>
                        <li>Focus remains or returns to invalid fields for correction</li>
                        <li>Error summary is provided for multiple errors</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState, useEffect } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react'

export default function InlineValidationExample() {
  const [password, setPassword] = useState('')
  const [touchedFields, setTouchedFields] = useState({ password: false })
  const [validationState, setValidationState] = useState({
    hasMinLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false
  })
  
  // Update validation state when password changes
  useEffect(() => {
    setValidationState({
      hasMinLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password)
    })
  }, [password])
  
  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTouchedFields({ password: true })
    
    const isValid = Object.values(validationState).every(Boolean)
    if (isValid) {
      // Handle successful validation
      console.log('Password is valid')
    }
  }
  
  const isPasswordValid = Object.values(validationState).every(Boolean)
  const showPasswordError = touchedFields.password && !isPasswordValid
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-m">
      <div>
        <Label htmlFor="password" className="mb-xs block">
          Create Password <span className="text-status-error">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            className={\`\${showPasswordError ? 'border-status-error' : ''} 
                        \${touchedFields.password && isPasswordValid ? 'border-status-success' : ''}\`}
            aria-invalid={showPasswordError ? "true" : "false"}
            aria-describedby="password-requirements"
          />
          {touchedFields.password && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isPasswordValid ? (
                <CheckCircle className="h-5 w-5 text-status-success" />
              ) : (
                <AlertCircle className="h-5 w-5 text-status-error" />
              )}
            </div>
          )}
        </div>
        
        <div 
          id="password-requirements" 
          className="mt-s p-s bg-surface-tertiary dark:bg-dark-surface-tertiary rounded-s"
          aria-live="polite"
        >
          <p className="text-sm font-medium mb-xs">Password requirements:</p>
          <ul className="space-y-xs">
            {[
              { id: 'hasMinLength', text: 'At least 8 characters' },
              { id: 'hasUppercase', text: 'At least one uppercase letter' },
              { id: 'hasLowercase', text: 'At least one lowercase letter' },
              { id: 'hasNumber', text: 'At least one number' },
              { id: 'hasSpecialChar', text: 'At least one special character' }
            ].map((req) => (
              <li key={req.id} className="flex items-center text-sm">
                {password && (
                  <>
                    {validationState[req.id] ? (
                      <CheckCircle className="h-4 w-4 text-status-success mr-2 shrink-0" />
                    ) : (
                      <XCircle className="h-4 w-4 text-status-error mr-2 shrink-0" />
                    )}
                  </>
                )}
                <span 
                  className={\`\${!password ? 'text-text-tertiary' : 
                    validationState[req.id] ? 'text-status-success' : 'text-status-error'}\`}
                >
                  {req.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <Button type="submit">Create Account</Button>
    </form>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
