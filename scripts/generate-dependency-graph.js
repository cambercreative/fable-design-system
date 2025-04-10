#!/usr/bin/env node

/**
 * Component Dependency Graph Generator for Fable Design System
 * 
 * This script analyzes the component dependencies and generates a visualization
 * showing how components depend on each other. The output is saved as a JSON file
 * that can be visualized in the design system website.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('🔍 Analyzing Fable Design System component dependencies...');

// Configuration
const componentsDir = path.join(process.cwd(), 'components');
const outputPath = path.join(process.cwd(), 'public/data/component-dependencies.json');

// Ensure output directory exists
const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Get all component files
const componentFiles = glob.sync('**/*.{jsx,tsx}', {
  cwd: componentsDir,
  ignore: ['**/*.test.{jsx,tsx}', '**/*.stories.{jsx,tsx}']
});

// Initialize dependency graph
const dependencyGraph = {
  nodes: [],
  links: []
};

// Map to keep track of node indices
const nodeIndices = {};

// Find component dependencies
componentFiles.forEach(file => {
  const fullPath = path.join(componentsDir, file);
  let content;
  
  try {
    content = fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    console.error(`❌ Error reading file ${fullPath}:`, error.message);
    return;
  }
  
  // Extract component name from file path
  const pathParts = file.split('/');
  const fileName = pathParts[pathParts.length - 1];
  const componentName = fileName.replace(/\.(jsx|tsx)$/, '');
  
  // Skip non-component files
  if (componentName.includes('.') || componentName.startsWith('_')) {
    return;
  }
  
  // Add node if it doesn't exist
  if (!nodeIndices[componentName]) {
    nodeIndices[componentName] = dependencyGraph.nodes.length;
    dependencyGraph.nodes.push({
      id: componentName,
      group: getComponentGroup(file),
      file: file
    });
  }
  
  // Extract imports to find dependencies
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"]@\/components\/([^'"]+)['"]/g;
  let match;
  
  while ((match = importRegex.exec(content)) !== null) {
    const imports = match[1].split(',').map(i => i.trim());
    const importPath = match[2];
    
    // For each imported component
    imports.forEach(importName => {
      // Skip non-component imports
      if (importName.startsWith('use') || importName === 'React') {
        return;
      }
      
      // Add dependent node if it doesn't exist
      if (!nodeIndices[importName]) {
        // We can't determine exact file from import, so mark as external
        nodeIndices[importName] = dependencyGraph.nodes.length;
        dependencyGraph.nodes.push({
          id: importName,
          group: 'external',
          file: null
        });
      }
      
      // Add dependency link
      dependencyGraph.links.push({
        source: nodeIndices[componentName],
        target: nodeIndices[importName],
        value: 1
      });
    });
  }
});

// Determine component group based on file path
function getComponentGroup(filePath) {
  if (filePath.includes('/ui/')) return 'ui';
  if (filePath.includes('/patterns/')) return 'pattern';
  if (filePath.includes('/theme/')) return 'theme';
  if (filePath.includes('/layout/')) return 'layout';
  return 'other';
}

// Generate additional metadata
const metadata = {
  totalComponents: dependencyGraph.nodes.length,
  uiComponents: dependencyGraph.nodes.filter(n => n.group === 'ui').length,
  patternComponents: dependencyGraph.nodes.filter(n => n.group === 'pattern').length,
  themeComponents: dependencyGraph.nodes.filter(n => n.group === 'theme').length,
  layoutComponents: dependencyGraph.nodes.filter(n => n.group === 'layout').length,
  totalDependencies: dependencyGraph.links.length,
  generatedAt: new Date().toISOString()
};

// Save dependency graph to file
const output = {
  graph: dependencyGraph,
  metadata: metadata
};

fs.writeFileSync(outputPath, JSON.stringify(output, null, 2));

console.log(`✅ Component dependency graph generated with ${dependencyGraph.nodes.length} components and ${dependencyGraph.links.length} dependencies.`);
console.log(`📊 Graph saved to ${outputPath}`);
