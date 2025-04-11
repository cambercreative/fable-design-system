"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../lib/utils"
import { ButtonProps } from "../../types/ui/button"
import { ButtonVariant, Size } from "../../types/common"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-m font-faro text-body transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong",
  {
    variants: {
      variant: {
        // Fable design system variants
        primary: 
          "bg-gradient-to-r from-fable-red to-fable-amber text-white shadow-elevation-1 hover:brightness-110 active:brightness-90 active:scale-98 dark:from-fable-deep-purple dark:to-fable-deep-blue disabled:opacity-40",
        secondary:
          "border border-fable-red dark:border-fable-deep-purple bg-transparent text-fable-red dark:text-fable-deep-purple hover:bg-fable-red/5 active:bg-fable-red/10 disabled:opacity-40",
        tertiary: 
          "bg-transparent text-fable-red h-10 hover:bg-fable-red/5 active:bg-fable-red/10 dark:text-fable-deep-purple disabled:opacity-40",
        icon:
          "p-2 text-text-secondary hover:text-fable-red active:scale-95 dark:hover:text-fable-deep-purple rounded-full w-11 h-11 flex items-center justify-center",
          
        // Legacy/backward compatibility variants
        default: 
          "bg-gradient-to-r from-fable-red to-fable-amber text-white shadow-elevation-1 hover:brightness-110 active:brightness-90 active:scale-98 dark:from-fable-deep-purple dark:to-fable-deep-blue disabled:opacity-40",
        outline:
          "border border-fable-red dark:border-fable-deep-purple bg-transparent text-fable-red dark:text-fable-deep-purple hover:bg-fable-red/5 active:bg-fable-red/10 disabled:opacity-40",
        ghost: 
          "bg-transparent text-fable-red hover:bg-fable-red/5 active:bg-fable-red/10 dark:text-fable-deep-purple disabled:opacity-40",
      },
      size: {
        default: "h-12 px-4 py-2", // 48px standard height
        sm: "h-10 px-3", // 40px height
        lg: "h-14 px-6", // 56px height
        icon: "h-11 w-11", // 44px square for icon buttons
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  }
)

/**
 * Button component following Fable Design System specifications
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="default">Continue</Button>
 * <Button variant="secondary" leftIcon={<ArrowLeft />}>Back</Button>
 * <Button variant="tertiary" disabled>Cancel</Button>
 * <Button variant="icon" icon={<Heart />} aria-label="Add to favorites" />
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    asChild = false, 
    leftIcon,
    rightIcon,
    loading,
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        disabled={props.disabled || loading}
        {...props}
      >
        {loading && (
          <span className="mr-2 h-4 w-4 animate-spin">
            {/* Loading spinner */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </span>
        )}
        
        {leftIcon && !loading && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

/**
 * Icon Button component - A specialized version of the Button component for icon-only buttons
 * 
 * @example
 * ```tsx
 * <IconButton icon={<Heart />} aria-label="Add to favorites" />
 * <IconButton icon={<Settings />} variant="secondary" aria-label="Settings" />
 * ```
 */
const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children,
    icon,
    variant = "icon",
    size = "icon",
    ...props 
  }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={cn("p-0", className)}
        {...props}
      >
        {icon || children}
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { Button, IconButton, buttonVariants }
export type { ButtonProps, ButtonVariant, Size }
