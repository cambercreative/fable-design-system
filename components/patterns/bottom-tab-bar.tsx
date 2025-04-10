import * as React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
  disabled?: boolean;
}

export interface BottomTabBarProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

/**
 * Bottom Tab Bar Component
 * 
 * Provides primary navigation between main app sections.
 * Maximum 5 primary destinations recommended.
 * 
 * @example
 * ```tsx
 * import { Home, Search, Bell, User } from 'lucide-react';
 * 
 * const [activeTab, setActiveTab] = React.useState('home');
 * 
 * <BottomTabBar
 *   items={[
 *     { id: 'home', label: 'Home', icon: Home },
 *     { id: 'explore', label: 'Explore', icon: Search },
 *     { id: 'notifications', label: 'Alerts', icon: Bell },
 *     { id: 'profile', label: 'Profile', icon: User },
 *   ]}
 *   activeId={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export const BottomTabBar = ({
  items,
  activeId,
  onChange,
  className,
}: BottomTabBarProps) => {
  // Ensure we don't exceed 5 tabs (recommended maximum)
  const displayItems = items.slice(0, 5);
  
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 h-14 bg-surface-primary shadow-elevation-2 z-10",
        "flex items-center justify-around",
        "dark:bg-surface-primary",
        className
      )}
      role="tablist"
      aria-label="Main navigation"
    >
      {displayItems.map((item) => {
        const isActive = item.id === activeId;
        const Icon = item.icon;
        
        return (
          <button
            key={item.id}
            role="tab"
            aria-selected={isActive}
            aria-label={item.label}
            className={cn(
              "flex flex-col items-center justify-center h-full flex-1",
              "transition-all duration-quick active:scale-95",
              "focus:outline-none focus:bg-surface-tertiary",
              item.disabled && "opacity-40 pointer-events-none"
            )}
            disabled={item.disabled}
            onClick={() => !item.disabled && onChange(item.id)}
          >
            {/* Active indicator - line above icon */}
            {isActive && (
              <div 
                className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5"
                style={{ 
                  backgroundImage: "linear-gradient(to right, #FF3300, #FFB800)" 
                }}
              />
            )}
            
            <Icon
              className={cn(
                "w-6 h-6 mb-0.5",
                isActive 
                  ? "text-fable-red" 
                  : "text-text-secondary"
              )}
            />
            
            <span
              className={cn(
                "text-caption font-atkinson",
                isActive 
                  ? "text-text-primary" 
                  : "text-text-secondary"
              )}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};
