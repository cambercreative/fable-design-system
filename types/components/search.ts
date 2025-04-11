/**
 * Search Component Types
 * 
 * Type definitions for the Search-related components.
 */

import { ReactNode } from 'react';

export interface SearchProviderProps {
  /**
   * Child components to be wrapped by the search provider
   */
  children: ReactNode;
}

export interface SearchDialogProps {
  /**
   * Whether the dialog is open
   */
  open?: boolean;
  
  /**
   * Handler for when the dialog's open state changes
   */
  onOpenChange?: (open: boolean) => void;
}

export interface SearchContextType {
  /**
   * Whether the search dialog is open
   */
  isOpen: boolean;
  
  /**
   * Opens the search dialog
   */
  openDialog: () => void;
  
  /**
   * Closes the search dialog
   */
  closeDialog: () => void;
  
  /**
   * Toggles the search dialog's open state
   */
  toggleDialog: () => void;
  
  /**
   * Current search query
   */
  query: string;
  
  /**
   * Sets the search query
   */
  setQuery: (query: string) => void;
}
