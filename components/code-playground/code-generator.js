/**
 * Generates component JSX code based on a set of properties
 * @param {string} componentName - The name of the component
 * @param {Object} props - Component properties
 * @returns {string} - Generated JSX code
 */
export function generateComponentCode(componentName, props) {
  let code = `<${componentName}`;
  
  // Add props to the component
  Object.entries(props).forEach(([key, value]) => {
    if (typeof value === 'string') {
      code += `\n  ${key}="${value}"`;
    } else if (typeof value === 'boolean') {
      if (value) {
        code += `\n  ${key}`;
      }
    } else if (key === 'children') {
      // Handle children separately
    } else {
      code += `\n  ${key}={${JSON.stringify(value)}}`;
    }
  });
  
  // Close the component tag or add children
  if (props.children) {
    code += `>\n  ${props.children}\n</${componentName}>`;
  } else {
    code += `\n/>`;
  }
  
  return code;
}

/**
 * Generates the full code example including imports
 * @param {string} componentName - The name of the component
 * @param {Object} props - Component properties
 * @param {string} importStatement - Import statement for the component
 * @returns {string} - Complete code example
 */
export function generateFullExample(componentName, props, importStatement) {
  const componentCode = generateComponentCode(componentName, props);
  
  return `${importStatement}\n\n${componentCode}`;
}

/**
 * Formats property value for display in code
 * @param {any} value - The property value
 * @returns {string} - Formatted value for code
 */
export function formatPropValue(value) {
  if (typeof value === 'string') {
    return `"${value}"`;
  } else if (typeof value === 'boolean' || typeof value === 'number') {
    return `{${value}}`;
  } else {
    return `{${JSON.stringify(value)}}`;
  }
}
