import * as React from "react";
import { cn } from "@/lib/utils";

export interface SegmentOption {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (value: string) => void;
  name?: string;
  className?: string;
  disabled?: boolean;
}

/**
 * Segmented Control Component
 * 
 * Provides binary or tertiary option selection with immediate effect.
 * 
 * @example
 * ```tsx
 * const [view, setView] = React.useState('grid');
 * 
 * <SegmentedControl
 *   options={[
 *     { id: 'grid', label: 'Grid' },
 *     { id: 'list', label: 'List' },
 *   ]}
 *   value={view}
 *   onChange={setView}
 * />
 * ```
 */
export const SegmentedControl = ({
  options,
  value,
  onChange,
  name,
  className,
  disabled = false,
}: SegmentedControlProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center h-8 border border-border-default rounded-m p-0.5 bg-surface-tertiary",
        disabled && "opacity-40 pointer-events-none",
        className
      )}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((option) => {
        const isSelected = option.id === value;
        const segmentDisabled = disabled || option.disabled;
        
        return (
          <button
            key={option.id}
            role="radio"
            aria-checked={isSelected}
            disabled={segmentDisabled}
            onClick={() => !segmentDisabled && onChange(option.id)}
            className={cn(
              "relative flex-1 h-full min-w-[4rem] px-3 rounded-s",
              "text-caption font-atkinson font-medium",
              "transition-all duration-quick",
              "focus:outline-none focus:ring-2 focus:ring-border-strong focus:relative focus:z-10",
              "disabled:opacity-40 disabled:cursor-not-allowed",
              isSelected
                ? "text-white"
                : "text-text-secondary hover:bg-surface-secondary/50 active:bg-surface-secondary"
            )}
          >
            {/* Selected background gradient */}
            {isSelected && (
              <div
                className="absolute inset-0 rounded-s"
                style={{
                  backgroundImage: "linear-gradient(to right, #FF3300, #FFB800)"
                }}
              />
            )}
            
            {/* Selection indicator for screen readers */}
            <span className="sr-only">
              {isSelected ? "Selected: " : ""}
            </span>
            
            {/* Label text */}
            <span className="relative z-10">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
