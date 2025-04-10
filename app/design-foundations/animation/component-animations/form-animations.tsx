'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useReducedMotion } from "framer-motion";

export function FormAnimations() {
  const [reduceMotion, setReduceMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = reduceMotion || prefersReducedMotion;
  
  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            checked={reduceMotion}
            onChange={(e) => setReduceMotion(e.target.checked)}
            className="mr-2"
          />
          Simulate Reduced Motion
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Text Input States</h3>
          <p className="mb-6 text-muted-foreground">
            Text inputs use animation to indicate focus states, validation results, and clear button appearance.
          </p>
          
          <TextInputDemo reduceMotion={shouldReduceMotion} />
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="font-display text-xl font-medium mb-4">Selection Controls</h3>
          <p className="mb-6 text-muted-foreground">
            Checkboxes, radio buttons, and toggle switches use animation to enhance feedback and improve usability.
          </p>
          
          <SelectionControlsDemo reduceMotion={shouldReduceMotion} />
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="font-display text-xl font-medium mb-4">Form Validation</h3>
        <p className="mb-6 text-muted-foreground">
          Form validation animations help users understand errors and success states through visual feedback.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ValidationDemo reduceMotion={shouldReduceMotion} />
          
          <div>
            <h4 className="font-medium mb-3">Animation Guidelines</h4>
            <ul className="list-disc pl-5 space-y-3 text-sm text-muted-foreground mb-6">
              <li>Error animations use <code>timing-standard (200ms)</code> with the error color for border and message animations</li>
              <li>Success animations use <code>timing-standard (200ms)</code> with a subtle scale effect on the success icon</li>
              <li>Shake animations for validation errors are disabled when reduced motion is preferred</li>
              <li>Fields transition smoothly between normal, error, and success states</li>
              <li>Error messages animate in with a fade and subtle upward movement</li>
            </ul>
            
            <h4 className="font-medium mb-3">Code Implementation</h4>
            <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Form validation animation example
function FormField({ 
  label, 
  error, 
  success,
  onChange
}) {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <div className="form-field">
      <Label>{label}</Label>
      
      <motion.div
        animate={{
          borderColor: error 
            ? "var(--color-error)" 
            : success 
              ? "var(--color-success)" 
              : "var(--color-border)"
        }}
        transition={{ duration: 0.2 }}
      >
        <input 
          onChange={onChange}
          className={\`form-input \${error ? 'error' : ''}\`} 
        />
      </motion.div>
      
      <AnimatePresence>
        {error && (
          <motion.div
            initial={prefersReducedMotion ? {
              opacity: 0
            } : {
              opacity: 0,
              y: 5
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: prefersReducedMotion ? 0 : [0, -5, 5, -5, 5, 0]
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              x: { duration: 0.4 }
            }}
            className="error-message"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// Text Input Demo Component
function TextInputDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState<string | null>(null);
  
  return (
    <div className="space-y-8">
      <div className="space-y-1.5">
        <Label htmlFor="default-input">Default Input</Label>
        <Input id="default-input" placeholder="Enter text..." />
        <p className="text-xs text-muted-foreground mt-2">
          Default state without animation.
        </p>
      </div>
      
      <div className="space-y-1.5">
        <Label htmlFor="focused-input">Focused Input (Simulated)</Label>
        <motion.div
          animate={{
            boxShadow: focused === 'focus' ? '0 0 0 2px rgba(255, 51, 0, 0.3)' : 'none',
            borderColor: focused === 'focus' ? 'var(--color-primary)' : 'var(--border)'
          }}
          transition={{ duration: 0.2 }}
        >
          <Input 
            id="focused-input" 
            placeholder="Enter text..." 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border-none shadow-none"
          />
        </motion.div>
        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground mt-2">
            Focus transition uses <code>timing-standard (200ms)</code>.
          </p>
          <button 
            className="text-xs text-primary underline"
            onClick={() => setFocused(focused === 'focus' ? null : 'focus')}
          >
            {focused === 'focus' ? 'Remove Focus' : 'Simulate Focus'}
          </button>
        </div>
      </div>
      
      <div className="space-y-1.5">
        <Label htmlFor="clear-input">Input with Clear Button</Label>
        <div className="relative">
          <Input 
            id="clear-input" 
            placeholder="Type to show clear button..." 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="pr-8"
          />
          <AnimatePresence>
            {value && (
              <motion.button
                initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                transition={{ duration: 0.1 }}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setValue('')}
                aria-label="Clear input"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground mt-2">
            Clear button appears with <code>timing-quick (100ms)</code> fade-in.
          </p>
          <button 
            className="text-xs text-primary underline"
            onClick={() => setValue(value ? '' : 'Example text')}
          >
            {value ? 'Clear' : 'Add Text'}
          </button>
        </div>
      </div>
      
      <div className="space-y-1.5">
        <Label htmlFor="error-input">Error Input (Simulated)</Label>
        <motion.div
          animate={{
            boxShadow: focused === 'error' ? '0 0 0 2px rgba(214, 77, 82, 0.3)' : 'none',
            borderColor: focused === 'error' ? 'hsl(358, 65%, 57%)' : 'var(--border)'
          }}
          transition={{ duration: 0.2 }}
        >
          <Input 
            id="error-input" 
            placeholder="Enter text..." 
            className={`${focused === 'error' ? 'border-none shadow-none' : ''}`}
          />
        </motion.div>
        {focused === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-red-500 mt-1"
          >
            Please enter a valid value
          </motion.p>
        )}
        <div className="flex justify-between">
          <p className="text-xs text-muted-foreground mt-2">
            Error transition uses <code>timing-standard (200ms)</code>.
          </p>
          <button 
            className="text-xs text-primary underline"
            onClick={() => setFocused(focused === 'error' ? null : 'error')}
          >
            {focused === 'error' ? 'Remove Error' : 'Simulate Error'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Selection Controls Demo Component
function SelectionControlsDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [switchValue, setSwitchValue] = useState(false);
  
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h4 className="text-base font-medium">Checkbox</h4>
        
        <div className="flex items-start space-x-3">
          <div>
            <Checkbox 
              id="checkbox1" 
              checked={checkbox1}
              onCheckedChange={() => setCheckbox1(!checkbox1)}
            />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="checkbox1">Basic checkbox</Label>
            <p className="text-xs text-muted-foreground">
              Check transition uses <code>timing-standard (200ms)</code> with ease-in-out easing.
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="mt-1">
            <motion.div
              whileTap={reduceMotion ? {} : { scale: 0.95 }}
              transition={{ duration: 0.1 }}
            >
              <Checkbox 
                id="checkbox2" 
                checked={checkbox2}
                onCheckedChange={() => setCheckbox2(!checkbox2)}
              />
            </motion.div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="checkbox2">Enhanced checkbox with tap animation</Label>
            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-7 text-xs"
                onClick={() => setCheckbox2(!checkbox2)}
              >
                Toggle
              </Button>
              <p className="text-xs text-muted-foreground self-center">
                Additional subtle press effect enhances feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-base font-medium">Radio Buttons</h4>
        
        <RadioGroup value={radioValue} onValueChange={setRadioValue} className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option1" id="option1" />
            <Label htmlFor="option1">Option 1</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option2" id="option2" />
            <Label htmlFor="option2">Option 2</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option3" id="option3" />
            <Label htmlFor="option3">Option 3</Label>
          </div>
        </RadioGroup>
        
        <p className="text-xs text-muted-foreground">
          Radio button dot animation uses <code>timing-standard (200ms)</code> with a subtle scale effect.
        </p>
      </div>
      
      <div className="space-y-4">
        <h4 className="text-base font-medium">Toggle Switch</h4>
        
        <div className="flex items-center space-x-3">
          <Switch 
            id="toggle-switch" 
            checked={switchValue}
            onCheckedChange={() => setSwitchValue(!switchValue)}
          />
          <Label htmlFor="toggle-switch">
            {switchValue ? "Enabled" : "Disabled"}
          </Label>
        </div>
        
        <p className="text-xs text-muted-foreground">
          Toggle switch uses <code>timing-standard (200ms)</code> for thumb movement and color transition.
        </p>
        
        <div className="pt-2">
          <pre className="p-3 rounded bg-muted font-mono text-xs overflow-x-auto">
{`// Toggle switch animation implementation
<motion.div
  className="switch-thumb"
  animate={{ 
    translateX: isChecked ? "calc(100% - 18px)" : "2px",
    backgroundColor: isChecked ? "white" : "white" 
  }}
  transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
/>

<motion.div
  className="switch-track"
  animate={{ 
    backgroundColor: isChecked 
      ? "var(--color-primary)" 
      : "var(--color-muted)" 
  }}
  transition={{ duration: 0.2 }}
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}

// Form Validation Demo Component
function ValidationDemo({ reduceMotion }: { reduceMotion: boolean }) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  const [formErrors, setFormErrors] = useState<Record<string, string | null>>({
    name: null,
    email: null,
    password: null,
  });
  
  const [formSuccess, setFormSuccess] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    password: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (field: string, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
    setFormErrors(prev => ({ ...prev, [field]: null }));
    setFormSuccess(prev => ({ ...prev, [field]: false }));
  };
  
  const validateField = (field: string) => {
    let error = null;
    let success = false;
    
    switch (field) {
      case 'name':
        if (!formState.name) {
          error = 'Name is required';
        } else if (formState.name.length < 2) {
          error = 'Name must be at least 2 characters';
        } else {
          success = true;
        }
        break;
      case 'email':
        if (!formState.email) {
          error = 'Email is required';
        } else if (!formState.email.includes('@')) {
          error = 'Email must be valid';
        } else {
          success = true;
        }
        break;
      case 'password':
        if (!formState.password) {
          error = 'Password is required';
        } else if (formState.password.length < 6) {
          error = 'Password must be at least 6 characters';
        } else {
          success = true;
        }
        break;
    }
    
    setFormErrors(prev => ({ ...prev, [field]: error }));
    setFormSuccess(prev => ({ ...prev, [field]: success }));
    
    return !error;
  };
  
  const handleBlur = (field: string) => {
    validateField(field);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isNameValid = validateField('name');
    const isEmailValid = validateField('email');
    const isPasswordValid = validateField('password');
    
    if (isNameValid && isEmailValid && isPasswordValid) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 2000);
    } else {
      // Shake the form if there are errors and motion is not reduced
      if (!reduceMotion) {
        const form = document.getElementById('validation-form');
        if (form) {
          form.classList.add('animate-shake');
          setTimeout(() => {
            form.classList.remove('animate-shake');
          }, 500);
        }
      }
    }
  };
  
  const resetForm = () => {
    setFormState({ name: '', email: '', password: '' });
    setFormErrors({ name: null, email: null, password: null });
    setFormSuccess({ name: false, email: false, password: false });
    setIsSubmitted(false);
  };
  
  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center h-64 bg-muted rounded-lg p-6"
      >
        <div className="mb-3">
          <motion.div
            initial={{ scale: reduceMotion ? 1 : 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: reduceMotion ? 0.1 : 0.5,
              ease: [0.33, 0.0, 0.67, 1]
            }}
            className="h-16 w-16 rounded-full bg-[#2D7D6F]/20 flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D7D6F"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6L9 17l-5-5"></path>
            </svg>
          </motion.div>
        </div>
        <h3 className="text-xl font-medium mb-2">Form Submitted!</h3>
        <p className="text-muted-foreground mb-4 text-center">
          Your form has been successfully submitted with validation animation.
        </p>
        <Button onClick={resetForm}>Try Again</Button>
      </motion.div>
    );
  }
  
  return (
    <div>
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    
      <form id="validation-form" onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <motion.div
              animate={{
                borderColor: formErrors.name 
                  ? 'hsl(358, 65%, 57%)' 
                  : formSuccess.name 
                    ? 'hsl(172, 35%, 50%)' 
                    : ''
              }}
              transition={{ duration: 0.2 }}
              className="rounded-md overflow-hidden"
            >
              <Input
                id="name"
                value={formState.name}
                onChange={(e) => handleChange('name', e.target.value)}
                onBlur={() => handleBlur('name')}
                className={`${formErrors.name ? 'border-red-500 focus-visible:ring-red-500' : ''} ${formSuccess.name ? 'border-[#2D7D6F] focus-visible:ring-[#2D7D6F]' : ''}`}
              />
            </motion.div>
            
            <AnimatePresence>
              {formSuccess.name && (
                <motion.div
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2D7D6F]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {formErrors.name && (
              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: reduceMotion ? 0 : [0, -3, 3, -3, 3, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  x: { duration: 0.4 }
                }}
                className="text-xs text-red-500 mt-1"
              >
                {formErrors.name}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <motion.div
              animate={{
                borderColor: formErrors.email 
                  ? 'hsl(358, 65%, 57%)' 
                  : formSuccess.email 
                    ? 'hsl(172, 35%, 50%)' 
                    : ''
              }}
              transition={{ duration: 0.2 }}
              className="rounded-md overflow-hidden"
            >
              <Input
                id="email"
                type="email"
                value={formState.email}
                onChange={(e) => handleChange('email', e.target.value)}
                onBlur={() => handleBlur('email')}
                className={`${formErrors.email ? 'border-red-500 focus-visible:ring-red-500' : ''} ${formSuccess.email ? 'border-[#2D7D6F] focus-visible:ring-[#2D7D6F]' : ''}`}
              />
            </motion.div>
            
            <AnimatePresence>
              {formSuccess.email && (
                <motion.div
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2D7D6F]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {formErrors.email && (
              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: reduceMotion ? 0 : [0, -3, 3, -3, 3, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  x: { duration: 0.4 }
                }}
                className="text-xs text-red-500 mt-1"
              >
                {formErrors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <motion.div
              animate={{
                borderColor: formErrors.password 
                  ? 'hsl(358, 65%, 57%)' 
                  : formSuccess.password 
                    ? 'hsl(172, 35%, 50%)' 
                    : ''
              }}
              transition={{ duration: 0.2 }}
              className="rounded-md overflow-hidden"
            >
              <Input
                id="password"
                type="password"
                value={formState.password}
                onChange={(e) => handleChange('password', e.target.value)}
                onBlur={() => handleBlur('password')}
                className={`${formErrors.password ? 'border-red-500 focus-visible:ring-red-500' : ''} ${formSuccess.password ? 'border-[#2D7D6F] focus-visible:ring-[#2D7D6F]' : ''}`}
              />
            </motion.div>
            
            <AnimatePresence>
              {formSuccess.password && (
                <motion.div
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#2D7D6F]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6L9 17l-5-5"></path>
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <AnimatePresence>
            {formErrors.password && (
              <motion.p
                initial={{ opacity: 0, y: reduceMotion ? 0 : 5 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: reduceMotion ? 0 : [0, -3, 3, -3, 3, 0]
                }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  x: { duration: 0.4 }
                }}
                className="text-xs text-red-500 mt-1"
              >
                {formErrors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full mt-6"
        >
          {isSubmitting ? (
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
            </motion.div>
          ) : "Submit Form"}
        </Button>
      </form>
    </div>
  );
}