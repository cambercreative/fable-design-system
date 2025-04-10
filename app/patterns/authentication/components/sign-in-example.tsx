import React, { useState } from 'react'
import { Button } from '../../../../components/ui/button'
import { Input } from '../../../../components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '../../../../components/ui/checkbox'
import { Eye, EyeOff, AlertCircle } from 'lucide-react'

export default function SignInExample() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  
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
        // Successful login
        setIsAuthenticated(true)
      } else {
        setError('Invalid email or password')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }
  
  const handleReset = () => {
    setEmail('')
    setPassword('')
    setRememberMe(false)
    setError('')
    setIsAuthenticated(false)
  }
  
  if (isAuthenticated) {
    return (
      <div className="max-w-sm mx-auto w-full">
        <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md text-center">
          <h3 className="text-xl font-medium mb-s">Welcome Back!</h3>
          <p className="mb-m">You have been successfully signed in.</p>
          <Button onClick={handleReset}>Sign Out</Button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="max-w-sm mx-auto w-full">
      <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-l rounded-md">
        <h3 className="text-2xl font-bold mb-l text-center">Sign In</h3>
        
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
              <button 
                type="button"
                className="text-sm text-primary hover:underline"
                onClick={(e) => {
                  e.preventDefault()
                  // In a real app, this would navigate to password reset
                  console.log('Forgot password clicked')
                }}
              >
                Forgot password?
              </button>
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
                tabIndex={0}
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
            <button 
              type="button"
              className="text-primary hover:underline"
              onClick={(e) => {
                e.preventDefault()
                // In a real app, this would navigate to registration
                console.log('Create account clicked')
              }}
            >
              Create an account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
