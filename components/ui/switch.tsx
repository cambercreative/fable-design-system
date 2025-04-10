"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "../lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> & {
    label?: string;
    error?: string | boolean;
  }
>(({ className, label, error, ...props }, ref) => {
  const errorMessage = typeof error === 'string' ? error : null;
  const hasError = Boolean(error);
  const id = props.id || React.useId();
  
  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-3">
        {label && (
          <label 
            htmlFor={id}
            className="text-body font-atkinson text-text-primary pr-3"
          >
            {label}
          </label>
        )}
        
        <SwitchPrimitives.Root
          id={id}
          className={cn(
            "peer inline-flex h-5 w-8 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong disabled:cursor-not-allowed disabled:opacity-40 data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-fable-red data-[state=checked]:to-fable-amber data-[state=unchecked]:bg-text-tertiary",
            hasError && "ring-2 ring-status-error",
            className
          )}
          {...props}
          ref={ref}
        >
          <SwitchPrimitives.Thumb
            className={cn(
              "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-elevation-1 transition-transform duration-standard data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0"
            )}
          />
        </SwitchPrimitives.Root>
      </div>
      
      {errorMessage && (
        <p 
          className="mt-1 ml-12 text-caption text-status-error"
          id={`${id}-error`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
})
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
