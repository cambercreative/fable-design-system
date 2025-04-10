import * as React from "react";
import { cn } from "@/lib/utils";

const Table = React.forwardRef<
  HTMLTableElement, 
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn(
        "w-full caption-bottom text-sm",
        className
      )}
      {...props}
    />
  </div>
));
Table.displayName = "Table";

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead 
    ref={ref} 
    className={cn("[&_tr]:border-b", className)} 
    {...props} 
  />
));
TableHeader.displayName = "TableHeader";

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
));
TableBody.displayName = "TableBody";

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "bg-surface-secondary font-medium text-text-primary dark:bg-surface-secondary",
      className
    )}
    {...props}
  />
));
TableFooter.displayName = "TableFooter";

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement> & {
    isSelectable?: boolean;
    isSelected?: boolean;
  }
>(({ className, isSelectable = false, isSelected = false, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b border-border-default transition-colors",
      "data-[state=selected]:bg-surface-tertiary",
      isSelectable && "hover:bg-surface-tertiary/50 cursor-pointer",
      isSelected && "bg-surface-tertiary",
      className
    )}
    data-state={isSelected ? "selected" : "default"}
    aria-selected={isSelected}
    {...props}
  />
));
TableRow.displayName = "TableRow";

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement> & {
    isSortable?: boolean;
    sortDirection?: "asc" | "desc" | null;
  }
>(({ className, isSortable = false, sortDirection, children, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-faro text-headline text-text-primary font-medium",
      "[&:has([role=checkbox])]:pr-0",
      isSortable && "cursor-pointer select-none",
      className
    )}
    aria-sort={sortDirection ? (sortDirection === "asc" ? "ascending" : "descending") : undefined}
    {...props}
  >
    {isSortable ? (
      <div className="flex items-center gap-1">
        {children}
        {sortDirection && (
          <span className="ml-1">
            {sortDirection === "asc" ? "↑" : "↓"}
          </span>
        )}
      </div>
    ) : (
      children
    )}
  </th>
));
TableHead.displayName = "TableHead";

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle font-atkinson text-body text-text-primary",
      "[&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
));
TableCell.displayName = "TableCell";

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn(
      "mt-4 text-sm text-text-tertiary font-atkinson text-caption",
      className
    )}
    {...props}
  />
));
TableCaption.displayName = "TableCaption";

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
