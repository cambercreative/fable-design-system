import React, { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '../../../../components/ui/checkbox'

export default function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consent: false
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  })

  const [submitted, setSubmitted] = useState(false)

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

  const validateForm = () => {
    let isValid = true
    const newErrors = { name: '', email: '' }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Handle successful submission
      setSubmitted(true)
      console.log('Form submitted:', formData)
    }
  }

  if (submitted) {
    return (
      <div className="p-m bg-surface-secondary dark:bg-dark-surface-secondary rounded-md text-center">
        <h3 className="text-xl font-medium mb-s">Thank You!</h3>
        <p className="mb-m">Your information has been submitted successfully.</p>
        <Button onClick={() => {
          setFormData({ name: '', email: '', phone: '', consent: false })
          setSubmitted(false)
        }}>
          Submit Another
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-l max-w-xl">
      <div className="space-y-m">
        <h3 className="text-xl font-medium">Contact Information</h3>
        
        <div className="space-y-s">
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
            <p className="mt-xs text-text-tertiary text-sm">
              We'll never share your email with anyone else.
            </p>
          </div>
          
          <div>
            <Label htmlFor="phone" className="mb-xs block">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      
      <div className="flex items-start space-x-2 pt-s">
        <Checkbox 
          id="consent" 
          checked={formData.consent}
          onCheckedChange={(checked) => 
            setFormData({...formData, consent: checked === true})
          }
        />
        <Label htmlFor="consent" className="text-sm leading-tight">
          I agree to be contacted about my inquiry
        </Label>
      </div>
      
      <div className="pt-m">
        <Button type="submit" className="mr-m">Submit</Button>
        <Button type="button" variant="secondary" onClick={() => {
          setFormData({ name: '', email: '', phone: '', consent: false })
          setErrors({ name: '', email: '' })
        }}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
