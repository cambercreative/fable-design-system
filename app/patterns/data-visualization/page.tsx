import React from 'react'
import Sidebar from '../../../components/sidebar'
import Header from '../../../components/header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import CodeBlock from '../../../components/code-block'

// Import pattern-specific components
import SimpleChartExample from './components/simple-chart-example'
import ProgressVisualizationExample from './components/progress-visualization-example'

export default function DataVisualizationPatternsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col md:flex-row">
      <Sidebar />
      <div className="flex w-full flex-col">
        <Header />
        <main className="container max-w-screen-xl flex-1 p-6 md:p-8 lg:p-10">
          <div className="max-w-[1200px] mx-auto">
            <section className="mb-xl">
              <h1 className="mb-m">Data Visualization Patterns</h1>
              <p className="text-lg max-w-3xl mb-l">
                Accessible and intuitive data visualization patterns for Fable applications. 
                These patterns help users understand complex data while maintaining our brand aesthetic and accessibility standards.
              </p>
            </section>

            <section className="mb-xl" id="simple-charts">
              <h2 className="mb-m">Simple Chart Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <SimpleChartExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For visualizing simple numerical data relationships</li>
                      <li>When users need to understand trends at a glance</li>
                      <li>For comparing values across categories or time periods</li>
                      <li>To highlight key metrics in dashboards or summaries</li>
                      <li>When providing visual feedback on user progress or activity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Use clear, descriptive titles and labels</li>
                      <li>Limit the number of data series to prevent visual overload</li>
                      <li>Apply consistent color coding aligned with brand guidelines</li>
                      <li>Include legends when multiple series are present</li>
                      <li>Use appropriate chart types based on data relationships:</li>
                      <ul className="list-disc pl-m mt-xs mb-xs">
                        <li>Bar charts for comparing categorical data</li>
                        <li>Line charts for showing trends over time</li>
                        <li>Pie/donut charts for part-to-whole relationships (limit to 5-7 segments)</li>
                        <li>Area charts for showing cumulative totals</li>
                      </ul>
                      <li>Provide interactive elements for exploring complex data</li>
                      <li>Include clear data source information and timestamps</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Chart structure</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Title: Clear description of what the data represents</li>
                      <li>Axes (when applicable): Properly labeled with units</li>
                      <li>Data series: Visually distinct with appropriate styling</li>
                      <li>Legend: When multiple series are present</li>
                      <li>Tooltips: For providing detailed information on interaction</li>
                      <li>Empty/loading states: Clear feedback when data is unavailable</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Layout & Dimensions</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Container: Responsive with aspect ratio preservation</li>
                        <li>Default dimensions: 100% width, 300px height (adjusts to container)</li>
                        <li>Minimum width: 280px for readability</li>
                        <li>Padding: spacing-m (16px) on all sides</li>
                        <li>Margin between chart elements: spacing-s (8px)</li>
                        <li>Tooltip container: White background with radius-s (4px) and elevation-2</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Typography</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Chart title: Title 3 in Faro Medium</li>
                        <li>Axis titles: Body in Faro Medium</li>
                        <li>Axis labels: Caption in Atkinson Hyperlegible Next</li>
                        <li>Legend: Caption in Atkinson Hyperlegible Next</li>
                        <li>Tooltips: Body in Atkinson Hyperlegible Next</li>
                        <li>Data labels (when shown): Caption in Atkinson Hyperlegible Next</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Color & Visual Treatment</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Primary data series: Fable Red to Amber gradient</li>
                        <li>Secondary series: Brand-compatible color palette</li>
                        <li>Grid lines: text-tertiary with 50% opacity</li>
                        <li>Axis lines: text-secondary</li>
                        <li>Interactive elements: Highlight with primary color on hover/focus</li>
                        <li>Backgrounds: Use transparent or surface-primary</li>
                        <li>Color contrast: Ensure 3:1 minimum between data series</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Alternative Representations</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Provide tabular data view as alternative to visual charts</li>
                        <li>Include descriptive text summaries of trends and key insights</li>
                        <li>Ensure data can be accessed via keyboard navigation</li>
                        <li>Support screen reader announcements of data points</li>
                        <li>Allow data export in accessible formats</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Color & Contrast</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Do not rely solely on color to convey information</li>
                        <li>Use patterns, shapes, or labels in addition to color</li>
                        <li>Ensure 3:1 minimum contrast for data visualization elements</li>
                        <li>Test visualizations with color blindness simulators</li>
                        <li>Provide high contrast mode toggle when appropriate</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Interactive Accessibility</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Support keyboard navigation through data points</li>
                        <li>Provide clear focus indicators for interactive elements</li>
                        <li>Ensure proper ARIA roles and attributes for chart components</li>
                        <li>Announce data changes to screen readers</li>
                        <li>Design tooltips to be accessible via keyboard and screen readers</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function SimpleChart() {
  // Sample data - in real app, would come from API or props
  const monthlyData = [
    { month: 'Jan', stories: 5, duration: 45 },
    { month: 'Feb', stories: 8, duration: 95 },
    { month: 'Mar', stories: 12, duration: 120 },
    { month: 'Apr', stories: 15, duration: 175 },
    { month: 'May', stories: 10, duration: 110 },
    { month: 'Jun', stories: 18, duration: 210 },
  ]
  
  // For accessibility - provide tabular data view
  const [showTable, setShowTable] = useState(false)
  
  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={monthlyData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
        <XAxis 
          dataKey="month" 
          tick={{ fill: '#555555' }}
          stroke="#888888"
        />
        <YAxis 
          tick={{ fill: '#555555' }}
          stroke="#888888"
        />
        <Tooltip
          contentStyle={{ 
            backgroundColor: '#ffffff',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            border: 'none'
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="stories" 
          name="Stories Recorded"
          stroke="#FF5757" 
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
        <Line 
          type="monotone" 
          dataKey="duration" 
          name="Recording Minutes"
          stroke="#FFB443" 
          strokeWidth={2}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
  
  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={monthlyData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
        <XAxis 
          dataKey="month" 
          tick={{ fill: '#555555' }}
          stroke="#888888"
        />
        <YAxis 
          tick={{ fill: '#555555' }}
          stroke="#888888"
        />
        <Tooltip
          contentStyle={{ 
            backgroundColor: '#ffffff',
            borderRadius: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            border: 'none'
          }}
        />
        <Legend />
        <Bar 
          dataKey="stories" 
          name="Stories Recorded"
          fill="#FF5757" 
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
  
  const renderTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <caption className="sr-only">Monthly Story Recording Data</caption>
        <thead>
          <tr>
            <th className="border border-border p-s text-left">Month</th>
            <th className="border border-border p-s text-left">Stories Recorded</th>
            <th className="border border-border p-s text-left">Recording Minutes</th>
          </tr>
        </thead>
        <tbody>
          {monthlyData.map((entry, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-surface-secondary' : ''}>
              <td className="border border-border p-s">{entry.month}</td>
              <td className="border border-border p-s">{entry.stories}</td>
              <td className="border border-border p-s">{entry.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
  
  return (
    <Card>
      <CardHeader className="pb-s">
        <div className="flex justify-between items-center">
          <CardTitle>Monthly Story Activity</CardTitle>
          <button
            type="button"
            onClick={() => setShowTable(!showTable)}
            className="text-sm text-primary hover:underline"
            aria-label={showTable ? "Show chart view" : "Show table view for accessibility"}
          >
            {showTable ? "Show chart" : "Show data table"}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        {showTable ? (
          renderTable()
        ) : (
          <Tabs defaultValue="line" className="w-full">
            <TabsList className="mb-m">
              <TabsTrigger value="line">Line Chart</TabsTrigger>
              <TabsTrigger value="bar">Bar Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="line" className="pt-s">
              {renderLineChart()}
              <div className="mt-s text-xs text-text-tertiary">
                Source: User recording data from January to June 2025
              </div>
            </TabsContent>
            <TabsContent value="bar" className="pt-s">
              {renderBarChart()}
              <div className="mt-s text-xs text-text-tertiary">
                Source: User recording data from January to June 2025
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            <section className="mb-xl" id="progress-visualization">
              <h2 className="mb-m">Progress Visualization Pattern</h2>
              <div className="bg-surface-secondary dark:bg-dark-surface-secondary p-m rounded-md border border-border mb-l">
                <h3 className="mb-s">Visual Example</h3>
                <div className="p-m bg-surface-primary dark:bg-dark-surface-primary rounded-md">
                  <ProgressVisualizationExample />
                </div>
              </div>
              
              <Tabs defaultValue="usage">
                <TabsList className="mb-m">
                  <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  <TabsTrigger value="specs">Design Specifications</TabsTrigger>
                  <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
                  <TabsTrigger value="code">Implementation Code</TabsTrigger>
                </TabsList>
                
                <TabsContent value="usage" className="space-y-m">
                  <div>
                    <h4 className="text-lg font-medium mb-xs">When to use</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>For tracking completion status toward a goal</li>
                      <li>When visualizing progress through a multi-step process</li>
                      <li>For showing achievement levels or milestones</li>
                      <li>To indicate resource usage or capacity</li>
                      <li>When providing feedback on user activities over time</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Best practices</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Always include clear, descriptive labels</li>
                      <li>Show current value alongside visual indicator when appropriate</li>
                      <li>Use appropriate visualization style based on data type:</li>
                      <ul className="list-disc pl-m mt-xs mb-xs">
                        <li>Linear progress bars for simple progress indicators</li>
                        <li>Radial/circular progress for compact displays or percentages</li>
                        <li>Multi-step indicators for process workflows</li>
                        <li>Milestone markers for achievement tracking</li>
                      </ul>
                      <li>Apply consistent color coding for status indication</li>
                      <li>Consider adding microcopy for context or explanation</li>
                      <li>Animate transitions smoothly for changing values</li>
                      <li>Provide appropriate feedback for completion</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-xs">Component variations</h4>
                    <ul className="list-disc pl-m space-y-xs">
                      <li>Linear progress bar: For horizontal progress tracking</li>
                      <li>Circular progress: For compact display in limited space</li>
                      <li>Step indicator: For process or workflow progress</li>
                      <li>Goal tracker: For achievement visualization with milestones</li>
                      <li>Collection completion: For tracking completed items in a set</li>
                    </ul>
                  </div>
                </TabsContent>
                
                <TabsContent value="specs">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Linear Progress Bar</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Height: 8px (standard), 4px (compact), 12px (large)</li>
                        <li>Border radius: radius-full (rounded ends)</li>
                        <li>Track color: surface-tertiary</li>
                        <li>Fill color: Based on context (use Fable gradient for neutral progress)</li>
                        <li>Label position: Above or beside indicator, spacing-xs (4px) gap</li>
                        <li>Value display: Optional, right-aligned</li>
                        <li>Animation: Smooth transition with timing-standard (200ms)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Circular Progress</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Diameter: 64px (standard), 40px (small), 120px (large)</li>
                        <li>Stroke width: 4px (small), 6px (standard), 8px (large)</li>
                        <li>Track color: surface-tertiary</li>
                        <li>Progress color: Based on context (use Fable gradient for neutral progress)</li>
                        <li>Central label: Value or icon, centered within circle</li>
                        <li>External label: Below or beside indicator</li>
                        <li>Animation: Smooth arc drawing with timing-relaxed (300ms)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Step Indicator</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Step circles: 24px diameter with 2px border</li>
                        <li>Connector line: 2px height, adjustable width</li>
                        <li>Completed step: Filled with Fable gradient or status-success</li>
                        <li>Current step: Border in Fable Amber</li>
                        <li>Future step: Border in border-default, filled with surface-tertiary</li>
                        <li>Step label: Caption text, positioned below step</li>
                        <li>Overall container: Full width with equal spacing between steps</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="accessibility">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">ARIA Attributes</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Use <code>role="progressbar"</code> for progress indicators</li>
                        <li>Include <code>aria-valuenow</code>, <code>aria-valuemin</code>, and <code>aria-valuemax</code> attributes</li>
                        <li>Add <code>aria-label</code> or <code>aria-labelledby</code> for clear description</li>
                        <li>Use <code>aria-describedby</code> for additional context when needed</li>
                        <li>For step indicators, use <code>aria-current="step"</code> for current step</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Non-Visual Alternatives</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Always provide text alternatives for progress values</li>
                        <li>Announce significant progress changes via <code>aria-live</code> regions</li>
                        <li>Provide milestone announcements at key thresholds</li>
                        <li>Ensure interactive elements are keyboard accessible</li>
                        <li>Make progress information programmatically available</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Visual Considerations</h4>
                      <ul className="list-disc pl-m space-y-xs">
                        <li>Don't rely solely on color to indicate progress status</li>
                        <li>Use patterns, shapes or textures in addition to color</li>
                        <li>Ensure sufficient contrast between track and progress indicator</li>
                        <li>Make text labels clear and legible</li>
                        <li>Consider reduced motion preferences for animations</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="code">
                  <div className="space-y-m">
                    <div>
                      <h4 className="text-lg font-medium mb-xs">Implementation Example</h4>
                      <CodeBlock language="tsx">{`import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// Linear Progress Bar
const LinearProgress = ({ 
  value, 
  max = 100, 
  label, 
  showValue = true, 
  size = 'standard',
  status = 'neutral' 
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  const heightClass = {
    compact: 'h-1',
    standard: 'h-2',
    large: 'h-3'
  }[size]
  
  const statusClass = {
    neutral: 'bg-gradient-to-r from-primary to-primary-amber',
    success: 'bg-status-success',
    warning: 'bg-status-warning',
    error: 'bg-status-error',
    info: 'bg-primary'
  }[status]
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-xs">
          <span className="text-sm font-medium">{label}</span>
          {showValue && (
            <span className="text-sm text-text-tertiary">{value}/{max}</span>
          )}
        </div>
      )}
      <div className="w-full bg-surface-tertiary rounded-full overflow-hidden" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax={max} aria-label={label || \`Progress: \${percentage}%\`}>
        <div 
          className={\`\${heightClass} \${statusClass} rounded-full transition-all duration-200\`}
          style={{ width: \`\${percentage}%\` }}
        ></div>
      </div>
    </div>
  )
}

// Circular Progress
const CircularProgress = ({ 
  value, 
  max = 100, 
  label, 
  size = 'standard',
  status = 'neutral',
  showValue = true
}) => {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))
  
  const dimensions = {
    small: { size: 40, strokeWidth: 4, fontSize: 'text-xs' },
    standard: { size: 64, strokeWidth: 6, fontSize: 'text-sm' },
    large: { size: 120, strokeWidth: 8, fontSize: 'text-lg' }
  }[size]
  
  const radius = (dimensions.size / 2) - dimensions.strokeWidth
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference
  
  const statusClass = {
    neutral: 'stroke-primary',
    success: 'stroke-status-success',
    warning: 'stroke-status-warning',
    error: 'stroke-status-error',
    info: 'stroke-primary'
  }[status]
  
  return (
    <div className="inline-flex flex-col items-center">
      <div className="relative" style={{ width: dimensions.size, height: dimensions.size }}>
        <svg width={dimensions.size} height={dimensions.size} viewBox={\`0 0 \${dimensions.size} \${dimensions.size}\`}>
          {/* Background circle */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={dimensions.strokeWidth}
            className="stroke-surface-tertiary"
          />
          
          {/* Progress circle */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={dimensions.strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={\`\${statusClass} transition-all duration-300 ease-in-out\`}
            transform={\`rotate(-90 \${dimensions.size / 2} \${dimensions.size / 2})\`}
          />
        </svg>
        
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={\`font-medium \${dimensions.fontSize}\`}>
              {Math.round(percentage)}%
            </span>
          </div>
        )}
      </div>
      
      {label && (
        <span className="mt-xs text-sm">{label}</span>
      )}
    </div>
  )
}

// Step Progress Indicator
const StepProgress = ({ 
  steps, 
  currentStep, 
  labels = [] 
}) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {Array.from({ length: steps }).map((_, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              {/* Connector line */}
              {index < steps - 1 && (
                <div className={\`h-0.5 w-full absolute left-1/2 top-1/2 -translate-y-1/2 \${
                  index < currentStep - 1 
                    ? 'bg-gradient-to-r from-primary to-primary-amber' 
                    : 'bg-surface-tertiary'
                }\`} style={{ width: 'calc(100% - 24px)' }}></div>
              )}
              
              {/* Step circle */}
              <div 
                className={\`w-6 h-6 rounded-full flex items-center justify-center z-10 \${
                  index < currentStep 
                    ? 'bg-gradient-to-r from-primary to-primary-amber text-white' 
                    : index === currentStep 
                      ? 'border-2 border-primary-amber bg-surface-secondary' 
                      : 'border-2 border-border bg-surface-tertiary'
                }\`}
                aria-current={index === currentStep ? 'step' : undefined}
              >
                {index < currentStep ? '✓' : index + 1}
              </div>
            </div>
            
            {labels[index] && (
              <span className="text-xs mt-1">{labels[index]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// Usage example in a Card
export default function ProgressVisualization() {
  return (
    <div className="space-y-l">
      <Card>
        <CardHeader>
          <CardTitle>Story Collection Progress</CardTitle>
        </CardHeader>
        <CardContent className="space-y-m">
          <LinearProgress 
            value={65} 
            max={100} 
            label="Overall Completion" 
            status="neutral"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-m">
            <LinearProgress 
              value={10} 
              max={10} 
              label="Childhood Stories" 
              status="success"
            />
            
            <LinearProgress 
              value={8} 
              max={15} 
              label="Young Adult Stories" 
              status="warning"
            />
            
            <LinearProgress 
              value={2} 
              max={20} 
              label="Career Stories" 
              status="neutral"
            />
            
            <LinearProgress 
              value={0} 
              max={15} 
              label="Family Stories" 
              size="compact"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-l">
        <Card>
          <CardHeader>
            <CardTitle>Memory Collection Status</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center">
            <CircularProgress 
              value={42} 
              max={100} 
              label="Overall Progress" 
              size="large"
              status="neutral"
            />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Onboarding Process</CardTitle>
          </CardHeader>
          <CardContent>
            <StepProgress 
              steps={5} 
              currentStep={3} 
              labels={[
                "Account", 
                "Profile", 
                "First Story", 
                "Collection", 
                "Share"
              ]} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}`}</CodeBlock>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
