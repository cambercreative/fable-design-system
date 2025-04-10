import React from 'react'
import Sidebar from '../../../components/sidebar'
import Header from '../../../components/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import CodeBlock from '../../../components/code-block'

// Import pattern-specific components
import SignInExample from './components/sign-in-example'
import MFAExample from './components/mfa-example'

export default function AuthenticationPatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Authentication Patterns</h1>
              <p className="text-lg max-w-3xl mb-l">
                Secure, accessible, and user-friendly authentication patterns for Fable applications.
                These patterns follow industry best practices while maintaining our brand aesthetic.
              </p>
            </section>

            <section className="mb-xl" id="sign-in">
              <h2 className="mb-m">Sign-in Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <SignInExample />
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
                      <li>For returning user authentication</li>
                      <li>As the primary entry point to protected application areas</li>
                      <li>When user identity verification is required</li>
                      <li>As the first step in a secure authentication flow</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Clearly indicate required fields</li>
                      <li>Provide visibility toggle for password fields</li>
                      <li>Offer a "Remember me" option when appropriate</li>
                      <li>Include a secure password recovery path</li>
                      <li>Provide clear error messages for invalid credentials</li>
                      <li>Consider offering alternative authentication methods when available</li>
                      <li>Maintain branding consistency with the application</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Form structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Title: Clear identification of the authentication action</li>
                      <li>Email/Username field: With appropriate keyboard type</li>
                      <li>Password field: With visibility toggle</li>
                      <li>Remember me option: Persistent browser storage</li>
                      <li>Forgot password link: Clear recovery path</li>
                      <li>Sign in button: Primary action</li>
                      <li>Alternative action: Link to registration when appropriate</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Layout & Spacing</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Container width: 100% up to max-width of 400px</li>
                        <li>Form centered in available space</li>
                        <li>Input fields: Full width of container</li>
                        <li>Vertical spacing between elements: spacing-m (16px)</li>
                        <li>Container padding: spacing-l (24px)</li>
                        <li>Container border-radius: radius-m (8px)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Typography</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Title: Heading 2 in Faro Bold</li>
                        <li>Input labels: Body in Atkinson Hyperlegible Next Medium</li>
                        <li>Helper text: Caption in Atkinson Hyperlegible Next Regular</li>
                        <li>Button text: Body in Faro Bold</li>
                        <li>Links: Body in Atkinson Hyperlegible Next Medium, primary color</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Color & Visual Treatment</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Container background: surface-secondary</li>
                        <li>Form background: surface-primary</li>
                        <li>Input background: surface-secondary</li>
                        <li>Primary action: Fable gradient button</li>
                        <li>Links: primary color text</li>
                        <li>Error states: status-error (#E53935)</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Keyboard Navigation</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Logical tab order through form fields</li>
                        <li>Password visibility toggle accessible via keyboard</li>
                        <li>Enter key submits the form from any field</li>
                        <li>Focus returns to first error field on validation failure</li>
                        <li>Skip link available for screen reader users</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Screen Reader Support</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Form has appropriate ARIA landmark</li>
                        <li>Password field is properly labeled</li>
                        <li>Password visibility toggle has clear action description</li>
                        <li>Error messages are programmatically associated with fields</li>
                        <li>Status updates are announced via aria-live regions</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Error Handling</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Validation errors clearly indicate the issue</li>
                        <li>Authentication failures provide clear, secure guidance</li>
                        <li>Error messages are concise and actionable</li>
                        <li>Excessive failed attempts trigger appropriate security measures</li>
                        <li>Recovery paths are always available</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    
    // Validate form
    if (!email.trim()) {
      setError('Email is required')
      return
    }
    
    if (!password) {
      setError('Password is required')
      return
    }
    
    try {
      setIsLoading(true)
      
      // Simulate authentication request
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // For demo purposes only - in a real app this would be an API call
      if (email === 'demo@example.com' && password === 'password') {
        // Successful login logic
        console.log('Login successful')
        // Redirect or update state
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md">
        <h2 className="text-2xl font-bold mb-l text-center">Sign In</h2>
        
        {error && (
          <div className="mb-m p-s flex items-center gap-s bg-status-error bg-opacity-10 border border-status-error text-status-error rounded-md" role="alert">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-m">
          <div>
            <Label htmlFor="email" className="mb-xs block">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-xs">
              <Label htmlFor="password">Password</Label>
              <a 
                href="#" 
                className="text-sm text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  // Handle forgot password
                }}
              >
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-primary"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                disabled={isLoading}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="remember" 
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked === true)}
              disabled={isLoading}
            />
            <Label htmlFor="remember" className="text-sm">Remember me</Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>
          
          <div className="text-center text-sm">
            <span className="text-text-tertiary">Don't have an account?</span>{' '}
            <a 
              href="#" 
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault()
                // Handle registration navigation
              }}
            >
              Create an account
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-xl" id="mfa">
              <h2 className="mb-m">Multi-Factor Authentication Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <MFAExample />
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
                      <li>For adding an additional security layer after password authentication</li>
                      <li>When sensitive data or operations require stronger protection</li>
                      <li>For admin-level accounts or high-value operations</li>
                      <li>When industry regulations or compliance requires MFA</li>
                      <li>For accounts containing personally identifiable information</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Clearly explain what MFA is and why it's being required</li>
                      <li>Offer multiple verification methods when possible</li>
                      <li>Provide a clear path to get help if users can't access their second factor</li>
                      <li>Use appropriate input types for code entry (e.g., numeric keypad for SMS codes)</li>
                      <li>Include a resend option with appropriate rate limiting</li>
                      <li>Show countdown timers for time-based verification codes</li>
                      <li>Provide secure fallback methods if primary method fails</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Flow structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Initial explanation: Clear details on the MFA process</li>
                      <li>Method selection: When multiple options are available</li>
                      <li>Code delivery: Sending verification to selected method</li>
                      <li>Code entry: Optimized for the verification type</li>
                      <li>Verification: Clear success/failure states</li>
                      <li>Remember device option: For trusted devices</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Code Input Design</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Input fields: Individual boxes for each character</li>
                        <li>Box size: 48×48px for touch optimization</li>
                        <li>Spacing: 8px between input boxes</li>
                        <li>Typography: Body in Atkinson Hyperlegible Next, center-aligned</li>
                        <li>Focus indicator: 2px primary color border</li>
                        <li>Auto-advance: Move to next field when character entered</li>
                        <li>Character masking: Optional based on security requirements</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Verification Timer</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Visual indicator: Circular progress or countdown display</li>
                        <li>Color: Primary color transitioning to status-error as time runs low</li>
                        <li>Typography: Caption text for remaining time</li>
                        <li>Position: Near but separate from code entry</li>
                        <li>Expiration behavior: Clear visual indication when code expires</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Resend Option</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Position: Below code input</li>
                        <li>Initial state: Disabled with countdown</li>
                        <li>Active state: Primary color text link</li>
                        <li>Feedback: Clear confirmation when code is resent</li>
                        <li>Rate limiting: Visual indication of remaining attempts</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Input Accessibility</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Single focus trap for entire code input when possible</li>
                        <li>Support for paste functionality across all inputs</li>
                        <li>Clear label for the entire verification code field</li>
                        <li>Support for keyboard navigation between digits if separated</li>
                        <li>Announcements for auto-advance behavior</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Timer Accessibility</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Time information available to screen readers</li>
                        <li>Announcements for important time thresholds (e.g., "1 minute remaining")</li>
                        <li>Clear announcement when code expires</li>
                        <li>Non-visual indication of timer status</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Alternative Access</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Alternative verification methods for users with accessibility needs</li>
                        <li>Clear path to human support for assistance</li>
                        <li>Documentation for assistive technology users</li>
                        <li>Support channel information prominently displayed</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function MFAVerification() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', ''])
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [canResend, setCanResend] = useState(false)
  const [resendCountdown, setResendCountdown] = useState(60)
  const [isVerifying, setIsVerifying] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [trustDevice, setTrustDevice] = useState(false)
  
  const inputRefs = useRef([])
  
  // Timer for code expiration
  useEffect(() => {
    if (timeLeft <= 0 || success) return
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [timeLeft, success])
  
  // Timer for resend button
  useEffect(() => {
    if (canResend || success) return
    
    const timer = setTimeout(() => {
      if (resendCountdown <= 1) {
        setCanResend(true)
      } else {
        setResendCountdown(resendCountdown - 1)
      }
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [resendCountdown, canResend, success])
  
  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return \`\${mins}:\${secs < 10 ? '0' : ''}\${secs}\`
  }
  
  // Handle input change for verification code
  const handleCodeChange = (index, value) => {
    // Allow only numbers
    if (value && !/^[0-9]$/.test(value)) return
    
    const newCode = [...verificationCode]
    newCode[index] = value
    setVerificationCode(newCode)
    
    // Clear error when typing
    if (error) setError('')
    
    // Auto-advance to next field
    if (value && index < 5) {
      inputRefs.current[index + 1].focus()
    }
  }
  
  // Handle key press events
  const handleKeyDown = (index, e) => {
    // Handle backspace to go to previous field
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1].focus()
    }
  }
  
  // Handle paste event
  const handlePaste = (e) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain').trim()
    
    // Check if pasted content looks like a verification code
    if (/^[0-9]{6}$/.test(pastedData)) {
      const newCode = pastedData.split('')
      setVerificationCode(newCode)
      
      // Focus last input after paste
      inputRefs.current[5].focus()
    }
  }
  
  // Handle form submission
  const handleVerify = (e) => {
    e.preventDefault()
    
    const code = verificationCode.join('')
    
    // Validate code format
    if (code.length !== 6 || !/^[0-9]{6}$/.test(code)) {
      setError('Please enter a valid 6-digit code')
      return
    }
    
    setIsVerifying(true)
    setError('')
    
    // Simulate verification
    setTimeout(() => {
      // For demo - in real app would call API
      if (code === '123456') {
        setSuccess(true)
      } else {
        setError('Invalid verification code. Please try again.')
      }
      setIsVerifying(false)
    }, 1500)
  }
  
  // Handle resend code
  const handleResend = () => {
    setCanResend(false)
    setResendCountdown(60)
    setTimeLeft(300) // Reset expiration timer
    
    // Simulate sending new code
    setTimeout(() => {
      // In real app, would call API to resend code
      console.log('Code resent')
    }, 1000)
  }
  
  if (success) {
    return (
      <div className="max-w-sm mx-auto w-full">
        <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md text-center">
          <div className="flex justify-center mb-m">
            <div className="w-16 h-16 rounded-full bg-status-success bg-opacity-20 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-status-success" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-m">Verification Successful</h2>
          <p className="mb-l">You have been securely authenticated.</p>
          <Button className="w-full">Continue to Dashboard</Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md">
        <h2 className="text-2xl font-bold mb-s text-center">Two-Factor Authentication</h2>
        <p className="text-center text-text-tertiary mb-l">
          Enter the 6-digit code sent to your phone number ending in ****1234
        </p>
        
        {error && (
          <div className="mb-m p-s flex items-center gap-s bg-status-error bg-opacity-10 border border-status-error text-status-error rounded-md" role="alert">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{error}</p>
          </div>
        )}
        
        <form onSubmit={handleVerify} className="space-y-m">
          <div>
            <Label htmlFor="verification-code" className="sr-only">Verification Code</Label>
            <div 
              className="flex justify-between mb-s" 
              aria-labelledby="verification-code-label"
              onPaste={handlePaste}
            >
              <span id="verification-code-label" className="sr-only">Enter 6-digit verification code</span>
              {verificationCode.map((digit, index) => (
                <Input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleCodeChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-lg p-0"
                  disabled={isVerifying || timeLeft <= 0}
                  aria-label={\`Digit \${index + 1} of verification code\`}
                />
              ))}
            </div>
            
            <div className="text-center">
              <p className={\`text-sm \${timeLeft < 60 ? 'text-status-error' : 'text-text-tertiary'}\`} aria-live="polite">
                Code expires in {formatTime(timeLeft)}
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="trust-device" 
              checked={trustDevice}
              onCheckedChange={(checked) => setTrustDevice(checked === true)}
              disabled={isVerifying}
            />
            <Label htmlFor="trust-device" className="text-sm">Trust this device for 30 days</Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={
              isVerifying || 
              verificationCode.some(digit => digit === '') ||
              timeLeft <= 0
            }
          >
            {isVerifying ? 'Verifying...' : 'Verify'}
          </Button>
          
          <div className="text-center text-sm">
            <button
              type="button"
              className={\`text-sm \${canResend ? 'text-primary hover:underline' : 'text-text-tertiary cursor-not-allowed'}\`}
              onClick={canResend ? handleResend : undefined}
              disabled={!canResend || isVerifying}
              aria-live="polite"
            >
              {canResend 
                ? "Didn't receive a code? Resend" 
                : \`Resend code in \${resendCountdown}s\`}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <a href="#" className="text-primary hover:underline">Need help?</a>
          </div>
        </form>
      </div>
    </div>
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
