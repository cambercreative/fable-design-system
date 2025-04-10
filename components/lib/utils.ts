import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and Tailwind CSS classes, handling conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Debounces a function call
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Converts a string to kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

/**
 * Truncates a string to a given length and adds ellipsis if needed
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length).trim() + '...'
}

/**
 * Highlights matching text in a string
 * @returns Array of parts, with matched parts having isMatch = true
 */
export function highlightMatch(text: string, query: string): { text: string; isMatch: boolean }[] {
  if (!query.trim()) return [{ text, isMatch: false }]
  
  const regex = new RegExp(`(${query.trim().split(/\s+/).join('|')})`, 'gi')
  const parts = text.split(regex)
  
  return parts.map((part, i) => ({
    text: part,
    isMatch: i % 2 === 1
  }))
}

/**
 * Filters and sorts searchable items based on query and filters
 */
export function filterAndSortItems<T extends { title: string; [key: string]: any }>(
  items: T[],
  query: string,
  filters?: Record<string, string[]>
): T[] {
  // First filter
  const filtered = items.filter(item => {
    // Apply filters if they exist
    if (filters) {
      for (const [key, values] of Object.entries(filters)) {
        if (values.length === 0) continue // Skip empty filters
        
        // Skip items that don't match active filters
        if (!item[key] || (Array.isArray(item[key]) 
          ? !item[key].some((val: string) => values.includes(val))
          : !values.includes(item[key])
        )) {
          return false
        }
      }
    }
    
    // Return true for all items if no query
    if (!query.trim()) return true
    
    // Search in all properties for query match
    const searchTerms = query.toLowerCase().trim().split(/\s+/)
    return searchTerms.every(term => {
      return Object.entries(item).some(([key, value]) => {
        if (typeof value === 'string') {
          return value.toLowerCase().includes(term)
        }
        if (Array.isArray(value)) {
          return value.some(val => 
            typeof val === 'string' && val.toLowerCase().includes(term)
          )
        }
        return false
      })
    })
  })
  
  // Then sort by relevance if there's a query
  if (query.trim()) {
    return filtered.sort((a, b) => {
      const aTitle = a.title.toLowerCase()
      const bTitle = b.title.toLowerCase()
      const q = query.toLowerCase().trim()
      
      // Exact matches
      if (aTitle === q && bTitle !== q) return -1
      if (bTitle === q && aTitle !== q) return 1
      
      // Starts with query
      if (aTitle.startsWith(q) && !bTitle.startsWith(q)) return -1
      if (bTitle.startsWith(q) && !aTitle.startsWith(q)) return 1
      
      // Contains query
      if (aTitle.includes(q) && !bTitle.includes(q)) return -1
      if (bTitle.includes(q) && !aTitle.includes(q)) return 1
      
      // Alphabetical
      return aTitle.localeCompare(bTitle)
    })
  }
  
  // Default alphabetical sort
  return filtered.sort((a, b) => a.title.localeCompare(b.title))
}
