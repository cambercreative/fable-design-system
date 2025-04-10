import * as React from "react";
import { cn } from "@/lib/utils";

export interface TabStripItem {
  id: string;
  label: string;
  disabled?: boolean;
}

export interface TabStripProps {
  items: TabStripItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  ariaLabel?: string;
}

/**
 * Tab Strip Component
 * 
 * Provides content filtering within a single screen with horizontal scrollable tabs.
 * 
 * @example
 * ```tsx
 * const [activeTab, setActiveTab] = React.useState('tab1');
 * 
 * <TabStrip
 *   items={[
 *     { id: 'tab1', label: 'All Stories' },
 *     { id: 'tab2', label: 'Recent' },
 *     { id: 'tab3', label: 'Favorites' },
 *   ]}
 *   activeId={activeTab}
 *   onChange={setActiveTab}
 * />
 * ```
 */
export const TabStrip = ({
  items,
  activeId,
  onChange,
  className,
  ariaLabel = "Content tabs",
}: TabStripProps) => {
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const activeTabRef = React.useRef<HTMLButtonElement>(null);

  // Scroll the active tab into view when it changes
  React.useEffect(() => {
    if (activeTabRef.current && tabsRef.current) {
      const container = tabsRef.current;
      const activeTab = activeTabRef.current;
      
      // Calculate position to center the active tab
      const scrollLeft = activeTab.offsetLeft - (container.clientWidth / 2) + (activeTab.clientWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollLeft),
        behavior: "smooth",
      });
    }
  }, [activeId]);

  return (
    <div
      className={cn(
        "relative border-b border-border-default",
        className
      )}
    >
      <div
        ref={tabsRef}
        className="flex overflow-x-auto hide-scrollbar"
        role="tablist"
        aria-label={ariaLabel}
      >
        {items.map((item) => {
          const isActive = item.id === activeId;
          
          return (
            <button
              key={item.id}
              ref={isActive ? activeTabRef : null}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.id}`}
              id={`tab-${item.id}`}
              tabIndex={isActive ? 0 : -1}
              className={cn(
                "h-12 px-4 py-2 relative flex items-center justify-center whitespace-nowrap",
                "text-body font-faro transition-all duration-quick",
                "focus:outline-none focus:ring-2 focus:ring-border-strong",
                "active:scale-98 disabled:opacity-40",
                isActive 
                  ? "text-text-primary font-medium" 
                  : "text-text-secondary hover:text-text-primary",
                item.disabled && "pointer-events-none opacity-40"
              )}
              disabled={item.disabled}
              onClick={() => !item.disabled && onChange(item.id)}
            >
              {item.label}
              {isActive && (
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-fable-red" 
                  style={{ 
                    backgroundImage: "linear-gradient(to right, #FF3300, #FFB800)" 
                  }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
