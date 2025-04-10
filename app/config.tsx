// Config to turn off features that might be causing build issues
export const config = {
  // Disable dynamic metadata features
  unstable_includeFiles: [],
  unstable_excludeFiles: ['**/favicon.ico'],
  
  // Optimize for static export
  staticPageGenerationTimeout: 90,
  
  // Disable metadata features that might cause issues
  experimental: {
    disableOptimizedLoading: true,
  }
}
