/**
 * @file Select component type definitions
 * @description Type interfaces for Select component and its variants
 */

import { SelectHTMLAttributes } from 'react';
import { FormElementProps, BaseComponentProps } from '../common';

/**
 * Option type for select components
 */
export interface SelectOption {
  /** The option's label displayed to the user */
  label: string;
  /** The option's value used for form submission */
  value: string;
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Optional group this option belongs to */
  group?: string;
  /** Custom icon to display with this option */
  icon?: React.ReactNode;
}

/**
 * Select component props interface
 */
export interface SelectProps extends 
  Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'size'>,
  FormElementProps,
  BaseComponentProps<HTMLSelectElement> {
  /** Options for the select */
  options: SelectOption[];
  /** Called when selection changes */
  onChange?: (value: string, option?: SelectOption) => void;
  /** Size of the select */
  size?: 'default' | 'sm' | 'lg';
  /** Icon to display at the end of the select */
  icon?: React.ReactNode;
  /** Whether the select is clearable */
  clearable?: boolean;
  /** Whether the select allows searching */
  searchable?: boolean;
  /** Whether to display options as a dropdown or inline */
  inline?: boolean;
  /** Placeholder text when no option is selected */
  placeholder?: string;
  /** Position of the dropdown relative to the trigger */
  position?: 'top' | 'bottom' | 'auto';
  /** Width of the dropdown */
  dropdownWidth?: number | 'trigger' | 'auto';
}

/**
 * Select group props for grouping options
 */
export interface SelectGroupProps extends BaseComponentProps<HTMLOptGroupElement> {
  /** Label for the group */
  label: string;
  /** Whether the group is disabled */
  disabled?: boolean;
}

/**
 * Combobox variant of select with autocomplete
 */
export interface ComboboxProps extends Omit<SelectProps, 'inline'> {
  /** Whether to allow creation of new options */
  creatable?: boolean;
  /** Text displayed when creating a new option */
  createOptionText?: string;
  /** Custom filter function for search */
  filterFunction?: (option: SelectOption, inputValue: string) => boolean;
  /** Maximum height of the dropdown */
  maxDropdownHeight?: number | string;
}
