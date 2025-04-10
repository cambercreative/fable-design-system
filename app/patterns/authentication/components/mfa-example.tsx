import React, { useState, useEffect, useRef } from 'react'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '../../../../components/ui/checkbox'
import { AlertCircle, CheckCircle } from 'lucide-react'

export default function MFAExample() {
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
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`
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
  
  const handleReset = () => {
    setVerificationCode(['', '', '', '', '', ''])
    setTimeLeft(300)
    setCanResend(false)
    setResendCountdown(60)
    setSuccess(false)
    setTrustDevice(false)
    setError('')
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
          <h3 className="text-2xl font-bold mb-m">Verification Successful</h3>
          <p className="mb-l">You have been securely authenticated.</p>
          <Button className="w-full" onClick={handleReset}>Start Over</Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md">
        <h3 className="text-2xl font-bold mb-s text-center">Two-Factor Authentication</h3>
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
                  aria-label={`Digit ${index + 1} of verification code`}
                />
              ))}
            </div>
            
            <div className="text-center">
              <p className={`text-sm ${timeLeft < 60 ? 'text-status-error' : 'text-text-tertiary'}`} aria-live="polite">
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
              className={`text-sm ${canResend ? 'text-primary hover:underline' : 'text-text-tertiary cursor-not-allowed'}`}
              onClick={canResend ? handleResend : undefined}
              disabled={!canResend || isVerifying}
              aria-live="polite"
            >
              {canResend 
                ? "Didn't receive a code? Resend" 
                : `Resend code in ${resendCountdown}s`}
            </button>
          </div>
          
          <div className="text-center text-sm">
            <button
              type="button"
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault()
                // In a real app, this would navigate to help
                console.log('Need help clicked')
              }}
            >
              Need help?
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
