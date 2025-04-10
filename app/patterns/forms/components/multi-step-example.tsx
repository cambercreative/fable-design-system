import React, { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '../../../../components/ui/checkbox'
import { CheckCircle } from 'lucide-react'

export default function MultiStepFormExample() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    referralSource: '',
    newsletter: false,
    confirm: false
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    confirm: ''
  })
  const [submitted, setSubmitted] = useState(false)
  
  const totalSteps = 3
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }
  
  const validateStep = (currentStep) => {
    let isValid = true
    const newErrors = { ...errors }
    
    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = 'Name is required'
        isValid = false
      } else {
        newErrors.name = ''
      }
      
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required'
        isValid = false
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
        newErrors.email = 'Invalid email address'
        isValid = false
      } else {
        newErrors.email = ''
      }
    }
    
    if (currentStep === 3) {
      if (!formData.confirm) {
        newErrors.confirm = 'You must confirm the information is correct'
        isValid = false
      } else {
        newErrors.confirm = ''
      }
    }
    
    setErrors(newErrors)
    return isValid
  }
  
  const handleNext = () => {
    if (validateStep(step)) {
      if (step < totalSteps) {
        setStep(step + 1)
        // Focus first element in the next step (would be implemented with useRef in a real app)
      } else {
        // Submit the form
        console.log('Form submitted:', formData)
        setSubmitted(true)
      }
    }
  }
  
  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }
  
  // Get step name for accessibility
  const getStepName = (stepNumber) => {
    switch (stepNumber) {
      case 1: return 'Personal'
      case 2: return 'Preferences'
      case 3: return 'Review'
      default: return `Step ${stepNumber}`
    }
  }
  
  // Render progress indicator
  const renderProgress = () => (
    <div className="mb-l">
      <div className="flex justify-between mb-xs">
        {Array.from({length: totalSteps}, (_, i) => (
          <div key={i} className="flex flex-col items-center">
            <div 
              className={`w-6 h-6 rounded-full flex items-center justify-center 
                ${i + 1 < step ? 'bg-gradient-to-r from-primary to-primary-amber text-white' : ''} 
                ${i + 1 === step ? 'border-2 border-primary-amber bg-surface-secondary' : ''} 
                ${i + 1 > step ? 'border-2 border-border bg-surface-tertiary' : ''}`}
              aria-current={i + 1 === step ? 'step' : undefined}
            >
              {i + 1 < step ? <CheckCircle className="h-4 w-4" /> : i + 1}
            </div>
            <span className="text-xs mt-1">{getStepName(i + 1)}</span>
          </div>
        ))}
      </div>
      <div className="w-full bg-surface-tertiary h-1 rounded-full">
        <div 
          className="h-1 bg-gradient-to-r from-primary to-primary-amber rounded-full transition-all duration-300"
          style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          role="progressbar"
          aria-valuenow={(step / totalSteps) * 100}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  )
  
  // Render step content
  const renderStepContent = () => {
    if (submitted) {
      return (
        <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md text-center">
          <h3 className="text-xl font-medium mb-s">Thank You!</h3>
          <p className="mb-m">Your profile has been created successfully.</p>
          <Button onClick={() => {
            setFormData({
              name: '',
              email: '',
              referralSource: '',
              newsletter: false,
              confirm: false
            })
            setErrors({ name: '', email: '', confirm: '' })
            setStep(1)
            setSubmitted(false)
          }}>
            Create Another Profile
          </Button>
        </div>
      )
    }
    
    switch (step) {
      case 1:
        return (
          <div aria-labelledby="step1-heading">
            <h3 id="step1-heading" className="text-xl font-medium mb-m">Personal Information</h3>
            <div className="space-y-m">
              <div>
                <Label htmlFor="name" className="mb-xs block">
                  Full Name <span className="text-status-error">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'border-status-error' : ''}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-xs text-status-error text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="mb-xs block">
                  Email Address <span className="text-status-error">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'border-status-error' : ''}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-xs text-status-error text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
        
      case 2:
        return (
          <div aria-labelledby="step2-heading">
            <h3 id="step2-heading" className="text-xl font-medium mb-m">Preferences</h3>
            <div className="space-y-m">
              <div>
                <Label className="mb-xs block">How did you hear about us?</Label>
                <RadioGroup 
                  value={formData.referralSource} 
                  onValueChange={(value) => setFormData({...formData, referralSource: value})}
                  className="space-y-xs"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="social" value="social" />
                    <Label htmlFor="social">Social Media</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="friend" value="friend" />
                    <Label htmlFor="friend">Friend or Family</Label>
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
              
              <div className="pt-s">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="newsletter" 
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, newsletter: checked === true})
                    }
                  />
                  <Label htmlFor="newsletter" className="text-sm leading-tight">
                    Subscribe to our newsletter for updates
                  </Label>
                </div>
              </div>
            </div>
          </div>
        )
        
      case 3:
        return (
          <div aria-labelledby="step3-heading">
            <h3 id="step3-heading" className="text-xl font-medium mb-m">Review Your Information</h3>
            <div className="space-y-m bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md">
              <div>
                <h4 className="text-sm font-medium text-text-tertiary">Personal Information</h4>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-text-tertiary">Preferences</h4>
                <p><strong>Referral Source:</strong> {formData.referralSource || 'Not specified'}</p>
                <p><strong>Newsletter:</strong> {formData.newsletter ? 'Subscribed' : 'Not subscribed'}</p>
              </div>
              
              <div className="pt-s">
                <div className="flex items-start space-x-2">
                  <Checkbox 
                    id="confirm" 
                    checked={formData.confirm}
                    onCheckedChange={(checked) => 
                      setFormData({...formData, confirm: checked === true})
                    }
                    className={errors.confirm ? 'border-status-error' : ''}
                    aria-invalid={errors.confirm ? "true" : "false"}
                    aria-describedby={errors.confirm ? "confirm-error" : undefined}
                  />
                  <Label htmlFor="confirm" className="text-sm leading-tight">
                    I confirm that the information provided is correct
                  </Label>
                </div>
                {errors.confirm && (
                  <p id="confirm-error" className="mt-xs text-status-error text-sm ml-6">
                    {errors.confirm}
                  </p>
                )}
              </div>
            </div>
          </div>
        )
        
      default:
        return null
    }
  }
  
  return (
    <div className="max-w-xl mx-auto">
      <h3 className="text-2xl font-bold mb-m">Create Your Profile</h3>
      
      {renderProgress()}
      
      <div className="min-h-[320px]">
        {renderStepContent()}
      </div>
      
      {!submitted && (
        <div className="flex justify-between mt-xl">
          {step > 1 ? (
            <Button type="button" variant="secondary" onClick={handlePrevious}>
              Back
            </Button>
          ) : (
            <div></div> // Empty div to maintain layout with flex justify-between
          )}
          <Button onClick={handleNext}>
            {step === totalSteps ? 'Submit' : 'Continue'}
          </Button>
        </div>
      )}
    </div>
  )
}
