#!/usr/bin/env node

/**
 * Dependency Validation Script for Fable Design System
 * 
 * This script checks that all required dependencies specified in the DSD
 * are present in the package.json file and meet version requirements.
 */

const fs = require('fs');
const path = require('path');
const semver = require('semver');

console.log('🔍 Validating Fable Design System dependencies against DSD requirements...');

// Load package.json
let packageJson;
try {
  packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));
} catch (error) {
  console.error('❌ Error reading package.json:', error.message);
  process.exit(1);
}

const { dependencies, devDependencies } = packageJson;
const allDependencies = { ...dependencies, ...devDependencies };

// Required Radix UI Components from DSD
const requiredRadixDeps = [
  '@radix-ui/react-accordion',
  '@radix-ui/react-checkbox',
  '@radix-ui/react-dialog',
  '@radix-ui/react-dropdown-menu',
  '@radix-ui/react-label',
  '@radix-ui/react-navigation-menu',
  '@radix-ui/react-radio-group',
  '@radix-ui/react-scroll-area',
  '@radix-ui/react-select',
  '@radix-ui/react-slot',
  '@radix-ui/react-switch',
  '@radix-ui/react-tabs',
  '@radix-ui/react-toast',
  '@radix-ui/react-tooltip'
];

// Required Support Libraries from DSD
const requiredSupportDeps = [
  'class-variance-authority',
  'clsx',
  'lucide-react',
  'tailwind-merge',
  'tailwindcss-animate'
];

// Required Form Libraries from DSD
const requiredFormDeps = [
  'react-hook-form',
  '@hookform/resolvers',
  'zod',
  'date-fns'
];

// Required Core Dependencies from DSD
const requiredCoreDeps = [
  { name: 'react', minVersion: '18.2.0' },
  { name: 'react-dom', minVersion: '18.2.0' },
  { name: 'next', minVersion: '14.0.0' },
  { name: 'tailwindcss', minVersion: '3.3.5' }
];

// Check Radix UI Dependencies
console.log('\n📦 Checking Radix UI dependencies...');
const missingRadixDeps = requiredRadixDeps.filter(dep => !allDependencies[dep]);
if (missingRadixDeps.length > 0) {
  console.error(`❌ Missing required Radix UI dependencies:\n${missingRadixDeps.map(dep => `   - ${dep}`).join('\n')}`);
} else {
  console.log('✅ All required Radix UI dependencies are installed');
}

// Check Support Dependencies
console.log('\n📦 Checking support dependencies...');
const missingSupportDeps = requiredSupportDeps.filter(dep => !allDependencies[dep]);
if (missingSupportDeps.length > 0) {
  console.error(`❌ Missing required support dependencies:\n${missingSupportDeps.map(dep => `   - ${dep}`).join('\n')}`);
} else {
  console.log('✅ All required support dependencies are installed');
}

// Check Form Dependencies
console.log('\n📦 Checking form-related dependencies...');
const missingFormDeps = requiredFormDeps.filter(dep => !allDependencies[dep]);
if (missingFormDeps.length > 0) {
  console.error(`❌ Missing required form dependencies:\n${missingFormDeps.map(dep => `   - ${dep}`).join('\n')}`);
} else {
  console.log('✅ All required form dependencies are installed');
}

// Check Core Dependencies and their versions
console.log('\n📦 Checking core dependencies and versions...');
const coreDepIssues = [];

requiredCoreDeps.forEach(({ name, minVersion }) => {
  if (!allDependencies[name]) {
    coreDepIssues.push(`   - ${name}: Missing (required ≥ ${minVersion})`);
    return;
  }
  
  // Extract actual version from semver range
  const versionRange = allDependencies[name];
  const actualVersion = versionRange.replace(/^\^|~/, '');
  
  if (!semver.gte(actualVersion, minVersion)) {
    coreDepIssues.push(`   - ${name}: ${actualVersion} (required ≥ ${minVersion})`);
  }
});

if (coreDepIssues.length > 0) {
  console.error(`❌ Core dependency version issues:\n${coreDepIssues.join('\n')}`);
} else {
  console.log('✅ All core dependencies meet version requirements');
}

// Check Next.js configuration
console.log('\n📦 Checking Next.js configuration...');
let nextConfigIssues = [];

try {
  const nextConfigPath = path.join(process.cwd(), 'next.config.js');
  const nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
  
  if (!nextConfig.includes("output: 'export'")) {
    nextConfigIssues.push("   - Missing 'output: export' configuration");
  }
  
  if (!nextConfig.includes("basePath: process.env.NODE_ENV === 'production'")) {
    nextConfigIssues.push("   - Missing proper basePath configuration");
  }
  
  if (!nextConfig.includes("unoptimized: true")) {
    nextConfigIssues.push("   - Missing 'unoptimized: true' for images");
  }
  
  if (nextConfigIssues.length > 0) {
    console.error(`❌ Next.js configuration issues:\n${nextConfigIssues.join('\n')}`);
  } else {
    console.log('✅ Next.js configuration verified');
  }
} catch (error) {
  console.error('❌ Error checking Next.js configuration:', error.message);
}

// Summary
console.log('\n📋 Dependency validation summary:');
const totalIssues = missingRadixDeps.length + missingSupportDeps.length + missingFormDeps.length + coreDepIssues.length + nextConfigIssues.length;

if (totalIssues > 0) {
  console.error(`❌ Found ${totalIssues} issues with dependencies or configuration`);
  console.log('\n💡 To resolve these issues:');
  console.log('   1. Add missing dependencies using npm install');
  console.log('   2. Update dependency versions to meet requirements');
  console.log('   3. Check next.config.js for required configurations');
  console.log('\n   Refer to the DSD document for detailed requirements.');
  process.exit(1);
} else {
  console.log('✅ All dependencies and configurations meet DSD requirements');
}
