"use client"

import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  value?: string;
  id?: string;
  error?: string | boolean;
  label?: string;
  className?: string;
};

const Checkbox = React.forwardRef<HTMLDivElement, CheckboxProps>(
  ({ className, error, label, checked, defaultChecked, onCheckedChange, disabled, id, ...props }, ref) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked || false);
    const internalId = React.useId();
    const checkboxId = id || internalId;
    const errorMessage = typeof error === 'string' ? error : null;
    const hasError = Boolean(error);
    
    React.useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);
    
    const handleChange = () => {
      if (disabled) return;
      
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onCheckedChange?.(newChecked);
    };
    
    return (
      <div className="flex flex-col" ref={ref}>
        <div className="flex items-center space-x-3">
          <div
            role="checkbox"
            aria-checked={isChecked}
            aria-disabled={disabled}
            id={checkboxId}
            tabIndex={disabled ? -1 : 0}
            className={cn(
              "h-5 w-5 shrink-0 rounded-xs border border-border-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-strong cursor-pointer",
              isChecked && "bg-fable-red text-white",
              disabled && "opacity-40 cursor-not-allowed",
              hasError && "border-2 border-status-error",
              className
            )}
            onClick={handleChange}
            onKeyDown={(e) => {
              if (e.key === " " || e.key === "Enter") {
                e.preventDefault();
                handleChange();
              }
            }}
            {...props}
          >
            {isChecked && (
              <div className="flex items-center justify-center text-current">
                <Check className="h-4 w-4" />
              </div>
            )}
          </div>
          
          {label && (
            <label 
              htmlFor={checkboxId}
              className="text-body font-atkinson text-text-primary"
              onClick={!disabled ? handleChange : undefined}
            >
              {label}
            </label>
          )}
        </div>
        
        {errorMessage && (
          <p 
            className="mt-1 ml-8 text-caption text-status-error"
            id={`${checkboxId}-error`}
          >
            {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };