import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

export interface StoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  timestamp: string | Date;
  duration: number; // duration in seconds
  thumbnail?: string;
  selected?: boolean;
  onPress?: () => void;
}

/**
 * Story Card Component
 * 
 * Displays a single story entry with preview and metadata according to Fable's design system.
 * 
 * @example
 * ```tsx
 * <StoryCard 
 *   title="My First Memory"
 *   timestamp={new Date(2025, 2, 15)}
 *   duration={180}
 *   thumbnail="/images/sample-thumbnail.jpg"
 *   onPress={() => handleStoryPress(storyId)}
 * />
 * ```
 */
export const StoryCard = React.forwardRef<HTMLDivElement, StoryCardProps>(
  ({ className, title, timestamp, duration, thumbnail, selected = false, onPress, ...props }, ref) => {
    // Format the timestamp
    const formattedTime = formatDistanceToNow(new Date(timestamp), { addSuffix: true });
    
    // Format the duration (e.g., "5m 30s")
    const formattedDuration = React.useMemo(() => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      return `${minutes}m ${seconds}s`;
    }, [duration]);
    
    return (
      <Card
        ref={ref}
        className={cn(
          "p-m transition-all duration-standard bg-surface-secondary dark:bg-surface-secondary shadow-elevation-2",
          "hover:shadow-elevation-3 active:shadow-elevation-1",
          selected && "border-2 border-gradient-to-r from-fable-red to-fable-amber dark:from-fable-deep-purple dark:to-fable-deep-blue",
          "cursor-pointer",
          className
        )}
        onClick={onPress}
        role="article"
        aria-selected={selected}
        {...props}
      >
        <div className="flex items-start space-x-m">
          {thumbnail && (
            <div className="flex-shrink-0">
              <img
                src={thumbnail}
                alt=""
                className="w-14 h-14 rounded-s object-cover"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-title-2 font-faro font-bold line-clamp-2">{title}</h3>
            <div className="flex items-center mt-1">
              <span className="text-caption font-atkinson text-text-tertiary">
                {formattedTime}
              </span>
              <span className="mx-1 text-text-tertiary">•</span>
              <span className="text-caption font-atkinson text-text-tertiary">
                {formattedDuration}
              </span>
            </div>
          </div>
        </div>
      </Card>
    );
  }
);

StoryCard.displayName = "StoryCard";
