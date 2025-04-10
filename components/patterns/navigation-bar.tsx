import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, LucideIcon } from "lucide-react";

export interface ActionButton {
  id: string;
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export interface NavigationBarProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  backLabel?: string;
  actions?: ActionButton[]; // Limited to 2 at most
  largeTitle?: boolean;
  transparent?: boolean;
  className?: string;
  sticky?: boolean;
}

/**
 * Navigation Bar Component
 * 
 * Provides screen identification and navigation control.
 * 
 * @example
 * ```tsx
 * import { Settings, Share } from 'lucide-react';
 * 
 * <NavigationBar
 *   title="Story Details"
 *   showBackButton
 *   onBackClick={() => router.back()}
 *   actions={[
 *     {
 *       id: 'share',
 *       icon: Share,
 *       label: 'Share',
 *       onClick: () => shareStory(id)
 *     },
 *     {
 *       id: 'settings',
 *       icon: Settings,
 *       label: 'Settings',
 *       onClick: () => openSettings()
 *     }
 *   ]}
 * />
 * ```
 */
export const NavigationBar = React.forwardRef<HTMLDivElement, NavigationBarProps>(
  ({ 
    title,
    showBackButton = false,
    onBackClick,
    backLabel = "Back",
    actions = [],
    largeTitle = false,
    transparent = false,
    className,
    sticky = false,
    ...props
  }, ref) => {
    // Limit to 2 action buttons maximum
    const displayActions = actions.slice(0, 2);
    
    const [scrolled, setScrolled] = React.useState(false);
    
    // Handle scroll effect for transparent navigation bars
    React.useEffect(() => {
      if (!transparent) return;
      
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        setScrolled(isScrolled);
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [transparent]);
    
    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-11 flex items-center justify-between px-4",
          transparent 
            ? scrolled 
              ? "bg-surface-primary transition-colors duration-standard" 
              : "bg-transparent"
            : "bg-surface-primary",
          sticky && "sticky top-0 z-10",
          className
        )}
        role="navigation"
        aria-label="Page navigation"
        {...props}
      >
        {/* Left section: Back button */}
        <div className="flex items-center">
          {showBackButton && (
            <button
              onClick={onBackClick}
              className={cn(
                "flex items-center text-text-primary mr-2",
                "focus:outline-none focus:ring-2 focus:ring-border-strong focus:rounded-s",
                "hover:text-fable-red active:scale-95 transition-all duration-quick"
              )}
              aria-label={backLabel}
            >
              <ChevronLeft className="w-5 h-5" />
              {backLabel && <span className="ml-1 font-atkinson text-body">{backLabel}</span>}
            </button>
          )}
        </div>
        
        {/* Center: Title */}
        <div className={cn(
          "absolute left-1/2 transform -translate-x-1/2",
          "max-w-[60%] truncate text-center"
        )}>
          <h1 className={cn(
            "font-faro text-headline text-text-primary",
            largeTitle && "font-bold"
          )}>
            {title}
          </h1>
        </div>
        
        {/* Right section: Action buttons */}
        <div className="flex items-center space-x-2">
          {displayActions.map((action) => {
            const Icon = action.icon;
            
            return (
              <button
                key={action.id}
                onClick={action.onClick}
                disabled={action.disabled}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full",
                  "focus:outline-none focus:ring-2 focus:ring-border-strong",
                  "hover:bg-surface-tertiary active:scale-95 transition-all duration-quick",
                  "text-text-primary",
                  action.disabled && "opacity-40 pointer-events-none"
                )}
                aria-label={action.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

NavigationBar.displayName = "NavigationBar";
