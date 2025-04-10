import React, { useState, useEffect } from 'react'
import { Input } from '../../../../components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '../../../../components/ui/button'
import { CheckCircle, XCircle, AlertCircle, Eye, EyeOff } from 'lucide-react'

export default function InlineValidationExample() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [touchedFields, setTouchedFields] = useState({
    password: false,
    confirmPassword: false
  })
  const [validationState, setValidationState] = useState({
    hasMinLength: false,
    hasUppercase: false,
    hasLowercase: false,
    hasNumber: false,
    hasSpecialChar: false,
    passwordsMatch: false
  })
  const [submitted, setSubmitted] = useState(false)
  
  // Update validation state when password changes
  useEffect(() => {
    setValidationState({
      hasMinLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasLowercase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
      passwordsMatch: password === confirmPassword && password !== ''
    })
  }, [password, confirmPassword])
  
  const handleBlur = (field) => {
    setTouchedFields({ ...touchedFields, [field]: true })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setTouchedFields({ password: true, confirmPassword: true })
    
    const isValid = Object.values(validationState).every(Boolean)
    if (isValid) {
      // Handle successful validation
      console.log('Password is valid')
      setSubmitted(true)
    }
  }
  
  const isPasswordValid = Object.values(validationState).every(val => val)
  const showPasswordError = touchedFields.password && !validationState.hasMinLength
  const showConfirmError = touchedFields.confirmPassword && !validationState.passwordsMatch
  
  if (submitted) {
    return (
      <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md text-center">
        <h3 className="text-xl font-medium mb-s">Password Set Successfully!</h3>
        <p className="mb-m">Your secure password has been created.</p>
        <Button onClick={() => {
          setPassword('')
          setConfirmPassword('')
          setTouchedFields({ password: false, confirmPassword: false })
          setSubmitted(false)
        }}>
          Set Another Password
        </Button>
      </div>
    )
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-md space-y-m">
      <div>
        <Label htmlFor="password" className="mb-xs block">
          Create Password <span className="text-status-error">*</span>
        </Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => handleBlur('password')}
            className={`${showPasswordError ? 'border-status-error' : ''} 
                      ${touchedFields.password && isPasswordValid ? 'border-status-success' : ''}`}
            aria-invalid={showPasswordError ? "true" : "false"}
            aria-describedby="password-requirements"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex">
            <button 
              type="button" 
              className="text-text-tertiary hover:text-primary p-1"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            
            {touchedFields.password && (
              password && validationState.hasMinLength ? (
                <CheckCircle className="h-5 w-5 text-status-success ml-1" />
              ) : touchedFields.password ? (
                <AlertCircle className="h-5 w-5 text-status-error ml-1" />
              ) : null
            )}
          </div>
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
              { id: 'hasUppercase', text: 'At least one uppercase letter (A-Z)' },
              { id: 'hasLowercase', text: 'At least one lowercase letter (a-z)' },
              { id: 'hasNumber', text: 'At least one number (0-9)' },
              { id: 'hasSpecialChar', text: 'At least one special character (!@#$...)' }
            ].map((req) => (
              <li key={req.id} className="flex items-center text-sm">
                {password ? (
                  validationState[req.id] ? (
                    <CheckCircle className="h-4 w-4 text-status-success mr-2 shrink-0" />
                  ) : (
                    <XCircle className="h-4 w-4 text-status-error mr-2 shrink-0" />
                  )
                ) : (
                  <span className="h-4 w-4 border border-text-tertiary mr-2 rounded-full shrink-0"></span>
                )}
                <span 
                  className={`${!password ? 'text-text-tertiary' : 
                    validationState[req.id] ? 'text-status-success' : 'text-status-error'}`}
                >
                  {req.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div>
        <Label htmlFor="confirmPassword" className="mb-xs block">
          Confirm Password <span className="text-status-error">*</span>
        </Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={() => handleBlur('confirmPassword')}
            className={`${showConfirmError ? 'border-status-error' : ''} 
                      ${touchedFields.confirmPassword && validationState.passwordsMatch ? 'border-status-success' : ''}`}
            aria-invalid={showConfirmError ? "true" : "false"}
            aria-describedby={showConfirmError ? "confirm-error" : undefined}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex">
            <button 
              type="button" 
              className="text-text-tertiary hover:text-primary p-1"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? "Hide password" : "Show password"}
            >
              {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
            
            {touchedFields.confirmPassword && confirmPassword && (
              validationState.passwordsMatch ? (
                <CheckCircle className="h-5 w-5 text-status-success ml-1" />
              ) : (
                <AlertCircle className="h-5 w-5 text-status-error ml-1" />
              )
            )}
          </div>
        </div>
        
        {showConfirmError && (
          <p id="confirm-error" className="mt-xs text-status-error text-sm">
            Passwords do not match
          </p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="mt-l"
        disabled={!password || !confirmPassword || !isPasswordValid}
      >
        Create Account
      </Button>
      
      {touchedFields.password && touchedFields.confirmPassword && 
       !validationState.hasMinLength && !validationState.passwordsMatch && (
        <p className="text-status-error text-sm text-center">
          Please correct the errors before continuing
        </p>
      )}
    </form>
  )
}
