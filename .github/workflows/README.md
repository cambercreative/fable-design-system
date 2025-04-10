# GitHub Actions Workflows

This directory contains GitHub Actions workflow files for automating various processes in the Fable Design System.

## Workflows

### Deploy to GitHub Pages (`deploy.yml`)

This workflow handles the deployment of the Fable Design System website to GitHub Pages.

#### Workflow Details

- **Trigger**: Runs on pushes to the main branch or manual workflow dispatch
- **Permissions**: Configured with write access to contents, pages, and id-token
- **Steps**:
  1. Check out the repository code
  2. Set up Node.js environment
  3. Install dependencies
  4. Create `.nojekyll` file for proper GitHub Pages handling
  5. Build the Next.js static site
  6. Configure GitHub Pages
  7. Upload the build artifact
  8. Deploy to GitHub Pages

#### Requirements

- The workflow requires the following Radix UI dependencies in package.json:
  - @radix-ui/react-checkbox
  - @radix-ui/react-label
  - @radix-ui/react-radio-group
  - @radix-ui/react-select

- All components using React hooks need the "use client" directive

#### Troubleshooting

If deployment fails, check:
1. Missing dependencies in package.json
2. Missing "use client" directives in components using hooks
3. Next.js configuration for static exports
4. GitHub repository settings for Pages
