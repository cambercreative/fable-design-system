"use client"

import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "../lib/utils"

const inputVariants = cva(
  "flex h-12 w-full rounded-m border border-border-default bg-surface-tertiary px-3 py-2 text-body font-atkinson text-text-primary placeholder:text-text-tertiary focus-visible:outline-none focus:border-2 focus:border-fable-red disabled:opacity-40 dark:border-border-default dark:bg-surface-tertiary dark:text-text-primary dark:placeholder:text-text-tertiary dark:focus:border-fable-deep-purple",
  {
    variants: {
      error: {
        true: "border-2 border-status-error focus:border-status-error",
      },
      withIcon: {
        true: "pl-10", // Add padding for the icon
      },
    },
    defaultVariants: {
      error: false,
      withIcon: false,
    }
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | boolean;
  icon?: React.ReactNode;
  label?: string;
  helperText?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, label, helperText, type, ...props }, ref) => {
    const errorMessage = typeof error === 'string' ? error : null;
    const hasError = Boolean(error);
    
    return (
      <div className="w-full space-y-2">
        {label && (
          <label 
            htmlFor={props.id} 
            className="block text-caption font-atkinson mb-1 text-text-primary"
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">
              {icon}
            </div>
          )}
          
          <input
            type={type}
            className={cn(inputVariants({ error: hasError, withIcon: Boolean(icon) }), className)}
            ref={ref}
            aria-invalid={hasError}
            aria-errormessage={errorMessage ? `${props.id}-error` : undefined}
            {...props}
          />
        </div>
        
        {errorMessage && (
          <p 
            id={`${props.id}-error`}
            className="mt-1 text-caption text-status-error"
          >
            {errorMessage}
          </p>
        )}
        
        {helperText && !errorMessage && (
          <p className="mt-1 text-caption text-text-tertiary">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
