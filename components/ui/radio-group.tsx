"use client"

import * as React from "react"
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { Circle } from "lucide-react"

import { cn } from "../lib/utils"

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> & {
    error?: string | boolean;
    legend?: string;
  }
>(({ className, error, legend, ...props }, ref) => {
  const errorMessage = typeof error === 'string' ? error : null;
  const hasError = Boolean(error);
  const id = props.id || React.useId();

  return (
    <div className="space-y-2">
      {legend && (
        <div className="text-body font-atkinson text-text-primary mb-2">
          {legend}
        </div>
      )}
      
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        {...props}
        ref={ref}
        id={id}
      />
      
      {errorMessage && (
        <p 
          className="mt-1 text-caption text-status-error"
          id={`${id}-error`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    label?: string;
  }
>(({ className, label, ...props }, ref) => {
  const id = props.id || React.useId();
  
  return (
    <div className="flex items-center space-x-3">
      <RadioGroupPrimitive.Item
        ref={ref}
        id={id}
        className={cn(
          "aspect-square h-5 w-5 rounded-full border border-border-default text-fable-red ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-border-strong disabled:opacity-40",
          className
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
      
      {label && (
        <label 
          htmlFor={id}
          className="text-body font-atkinson text-text-primary"
        >
          {label}
        </label>
      )}
    </div>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioGroup, RadioGroupItem }
