import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

export interface MemoryCollectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  coverImage?: string;
  itemCount: number;
  progress: number; // 0-100 percentage value
  selected?: boolean;
  onPress?: () => void;
}

/**
 * Memory Collection Card Component
 * 
 * Displays a grouping of related stories with progress indication according to Fable's design system.
 * 
 * @example
 * ```tsx
 * <MemoryCollectionCard 
 *   title="Summer Vacation 2024"
 *   description="Our family trip to the Mediterranean"
 *   coverImage="/images/cover-image.jpg"
 *   itemCount={12}
 *   progress={75}
 *   onPress={() => handleCollectionPress(collectionId)}
 * />
 * ```
 */
export const MemoryCollectionCard = React.forwardRef<HTMLDivElement, MemoryCollectionCardProps>(
  ({ 
    className, 
    title, 
    description, 
    coverImage, 
    itemCount, 
    progress, 
    selected = false, 
    onPress, 
    ...props 
  }, ref) => {
    // Ensure progress is within 0-100 bounds
    const normalizedProgress = Math.max(0, Math.min(100, progress));
    
    return (
      <Card
        ref={ref}
        className={cn(
          "overflow-hidden transition-all duration-standard bg-surface-secondary dark:bg-surface-secondary shadow-elevation-2",
          "hover:shadow-elevation-3 active:shadow-elevation-1",
          selected && "border-2 border-gradient-to-r from-fable-red to-fable-amber dark:from-fable-deep-purple dark:to-fable-deep-blue",
          "cursor-pointer",
          className
        )}
        onClick={onPress}
        role="group"
        aria-label={`${title} collection with ${itemCount} items`}
        aria-selected={selected}
        {...props}
      >
        {coverImage && (
          <div className="relative w-full aspect-[16/9]">
            <img
              src={coverImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div className="p-m">
          <h3 className="text-title-1 font-faro font-bold">{title}</h3>
          
          {description && (
            <p className="mt-1 text-body font-atkinson text-text-primary line-clamp-2">
              {description}
            </p>
          )}
          
          <div className="mt-3 flex items-center justify-between">
            <span className="text-caption font-atkinson text-text-tertiary">
              {itemCount} {itemCount === 1 ? 'story' : 'stories'}
            </span>
          </div>
          
          {/* Progress bar */}
          <div className="mt-2 relative w-full h-1 bg-surface-tertiary rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-fable-amber rounded-full" 
              style={{ width: `${normalizedProgress}%` }}
              role="progressbar"
              aria-valuenow={normalizedProgress}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
      </Card>
    );
  }
);

MemoryCollectionCard.displayName = "MemoryCollectionCard";
