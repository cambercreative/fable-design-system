import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
  showCount?: boolean;
  maxCount?: number;
}

/**
 * Text Area Component
 * 
 * Multi-line text entry field with error message and character count support.
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, showCount, maxCount, value, onChange, ...props }, ref) => {
    const [count, setCount] = React.useState<number>(
      typeof value === "string" ? value.length : 0
    );

    // Handle controlled component character count
    React.useEffect(() => {
      setCount(typeof value === "string" ? value.length : 0);
    }, [value]);

    // Handle uncontrolled component character count
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChange) {
        onChange(e);
      }
      if (!value) {
        setCount(e.target.value.length);
      }
    };

    return (
      <div className="relative">
        <textarea
          ref={ref}
          className={cn(
            "flex min-h-24 w-full rounded-m border border-border-default bg-surface-tertiary px-3 py-2",
            "text-body font-atkinson text-text-primary placeholder:text-text-tertiary resize-vertical",
            "focus:outline-none focus:border-2 focus:border-fable-red disabled:opacity-40",
            "dark:border-border-default dark:bg-surface-tertiary dark:text-text-primary",
            "dark:placeholder:text-text-tertiary dark:focus:border-fable-deep-purple",
            error && "border-2 border-status-error focus:border-status-error",
            className
          )}
          onChange={handleChange}
          value={value}
          {...props}
        />
        
        {/* Error message */}
        {error && (
          <p className="mt-1 text-caption text-status-error">{error}</p>
        )}
        
        {/* Character count */}
        {showCount && (
          <div 
            className={cn(
              "absolute bottom-2 right-2 px-1 text-footnote",
              "font-atkinson rounded bg-surface-tertiary/80",
              count > (maxCount || 0) && maxCount ? "text-status-error" : "text-text-tertiary"
            )}
          >
            {maxCount ? `${count}/${maxCount}` : count}
          </div>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
