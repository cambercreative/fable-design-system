"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "../lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    error?: string | boolean;
    label?: string;
  }
>(({ className, error, label, ...props }, ref) => {
  const errorMessage = typeof error === 'string' ? error : null;
  const hasError = Boolean(error);
  const id = props.id || React.useId();

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-3">
        <CheckboxPrimitive.Root
          id={id}
          ref={ref}
          className={cn(
            "peer h-5 w-5 shrink-0 rounded-xs border border-border-default data-[state=checked]:bg-fable-red data-[state=checked]:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong disabled:opacity-40",
            hasError && "border-2 border-status-error",
            className
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
          >
            <Check className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        
        {label && (
          <label 
            htmlFor={id}
            className="text-body font-atkinson text-text-primary"
          >
            {label}
          </label>
        )}
      </div>
      
      {errorMessage && (
        <p 
          className="mt-1 ml-8 text-caption text-status-error"
          id={`${id}-error`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
})
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
