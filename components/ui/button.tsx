"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../lib/utils"
import { ButtonProps } from "@/types/components/button"

export const buttonVariants = cva(
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

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    asChild = false, 
    icon,
    iconPosition = "left",
    children,
    ...props 
  }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        ref={ref}
        {...props}
      >
        {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
