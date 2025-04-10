/**
 * Code Generator Utility for the Enhanced Code Playground
 * 
 * This utility provides functions for generating and formatting code snippets
 * based on component properties and configuration.
 */

/**
 * Generate component JSX code based on props
 */
export function generateComponentCode(
  componentName: string,
  props: Record<string, any>,
  hasChildren: boolean = false,
  selfClosing: boolean = true
): string {
  // Start component tag
  let code = `<${componentName}`;
  
  // Sort props for consistent output
  const sortedProps = Object.entries(props).sort(([a], [b]) => {
    // Always put 'children' last
    if (a === 'children') return 1;
    if (b === 'children') return -1;
    return a.localeCompare(b);
  });
  
  // Special case: handle children prop separately
  const childrenProp = sortedProps.find(([key]) => key === 'children');
  const regularProps = sortedProps.filter(([key]) => key !== 'children');
  
  // Add regular props to the component
  regularProps.forEach(([key, value]) => {
    // Handle different prop types
    if (typeof value === 'string') {
      code += `\n  ${key}="${value}"`;
    } else if (typeof value === 'boolean') {
      if (value) {
        code += `\n  ${key}`;
      }
    } else if (typeof value === 'number') {
      code += `\n  ${key}={${value}}`;
    } else if (value === null) {
      // Skip null values
    } else if (typeof value === 'object') {
      code += `\n  ${key}={${JSON.stringify(value)}}`;
    } else {
      code += `\n  ${key}={${value}}`;
    }
  });
  
  // Handle self-closing vs children
  if (childrenProp && childrenProp[1]) {
    // Component with children
    code += `\n>`;
    
    // Add the children content
    if (typeof childrenProp[1] === 'string') {
      code += `\n  ${childrenProp[1]}`;
    } else {
      code += `\n  {${JSON.stringify(childrenProp[1])}}`;
    }
    
    // Close tag
    code += `\n</${componentName}>`;
  } else if (hasChildren && !selfClosing) {
    // Component that might have children but currently doesn't
    code += `\n>\n</${componentName}>`;
  } else {
    // Self-closing component
    code += `\n/>`;
  }
  
  return code;
}

/**
 * Generate complete code example with imports
 */
export function generateFullExample(
  componentCode: string,
  importStatements: string,
  wrapWithFunction: boolean = true
): string {
  const imports = `import React from "react";\n${importStatements}`;
  
  if (wrapWithFunction) {
    return `${imports}\n
export default function Example() {
  return (
    ${componentCode}
  );
}`;
  } else {
    return `${imports}\n
${componentCode}`;
  }
}

/**
 * Format code with proper indentation
 */
export function formatCode(code: string, indentSize: number = 2): string {
  const lines = code.split('\n');
  let indentLevel = 0;
  let result = '';
  
  lines.forEach(line => {
    const trimmedLine = line.trim();
    
    // Adjust indent level based on brackets and tags
    if (trimmedLine.match(/(<\/.*>|}\);?|>$|\/>$)/)) {
      // Closing tag or bracket, reduce indent for this line
      if (!trimmedLine.match(/^(<\/.*>|}\);?|>$|\/>$)/)) {
        // Only reduce for the next line if the closing isn't at the start
        indentLevel = Math.max(0, indentLevel);
      } else {
        indentLevel = Math.max(0, indentLevel - 1);
      }
    }
    
    // Add the line with proper indentation
    if (trimmedLine.length > 0) {
      result += ' '.repeat(indentLevel * indentSize) + trimmedLine + '\n';
    } else {
      result += '\n';
    }
    
    // Increase indent for the next line
    if (trimmedLine.match(/(<.*[^/]>$|\{$|\($)/)) {
      indentLevel++;
    }
  });
  
  return result.trim();
}

/**
 * Create a prettier-compatible prop string for a specific value
 */
export function formatPropValue(key: string, value: any): string {
  if (typeof value === 'string') {
    return `${key}="${value}"`;
  } else if (typeof value === 'boolean') {
    return value ? key : `${key}={false}`;
  } else if (value === null || value === undefined) {
    return `${key}={null}`;
  } else if (typeof value === 'object') {
    return `${key}={${JSON.stringify(value)}}`;
  } else {
    return `${key}={${value}}`;
  }
}

/**
 * Convert props object to TypeScript interface
 */
export function generatePropsInterface(
  componentName: string, 
  props: Record<string, any>,
  propDescriptions: Record<string, string> = {}
): string {
  let interfaceCode = `interface ${componentName}Props {\n`;
  
  Object.entries(props).forEach(([key, value]) => {
    const isOptional = value === null || value === undefined;
    const typeAnnotation = getTypeAnnotation(value);
    
    // Add JSDoc comment if description exists
    if (propDescriptions[key]) {
      interfaceCode += `  /** ${propDescriptions[key]} */\n`;
    }
    
    interfaceCode += `  ${key}${isOptional ? '?' : ''}: ${typeAnnotation};\n`;
  });
  
  interfaceCode += `}`;
  
  return interfaceCode;
}

/**
 * Get TypeScript type annotation for a value
 */
function getTypeAnnotation(value: any): string {
  if (value === null || value === undefined) {
    return 'any';
  }
  
  switch (typeof value) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'object':
      if (Array.isArray(value)) {
        if (value.length === 0) {
          return 'any[]';
        } else {
          return `${getTypeAnnotation(value[0])}[]`;
        }
      } else {
        return 'Record<string, any>';
      }
    default:
      return 'any';
  }
}
