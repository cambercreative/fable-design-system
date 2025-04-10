import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

// Note: In a real implementation, we'd import Recharts
// This is a simplified version using inline SVG for the demo
export default function SimpleChartExample() {
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
  
  // Helper to scale values to chart dimensions
  const getScaledValue = (value, maxVal, height) => {
    const maxValue = Math.max(...monthlyData.map(d => maxVal ? d[maxVal] : d.stories))
    return height - (value / maxValue) * (height - 40)
  }
  
  const renderLineChart = () => (
    <div className="relative h-[300px]">
      {/* X-Axis */}
      <div className="absolute bottom-0 left-10 right-10 border-t border-text-secondary" />
      
      {/* Y-Axis */}
      <div className="absolute top-5 bottom-0 left-10 border-r border-text-secondary" />
      
      {/* Legend */}
      <div className="absolute top-0 right-10 flex items-center gap-m">
        <div className="flex items-center gap-xs">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
          <span className="text-sm">Stories Recorded</span>
        </div>
        <div className="flex items-center gap-xs">
          <div className="w-3 h-3 bg-primary-amber rounded-full"></div>
          <span className="text-sm">Recording Minutes</span>
        </div>
      </div>
      
      {/* Chart Content */}
      <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="10%" y1="75%" x2="90%" y2="75%" stroke="#e5e5e5" strokeDasharray="3,3" />
        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#e5e5e5" strokeDasharray="3,3" />
        <line x1="10%" y1="25%" x2="90%" y2="25%" stroke="#e5e5e5" strokeDasharray="3,3" />
        
        {/* X-Axis labels */}
        {monthlyData.map((entry, index) => (
          <text
            key={`x-label-${index}`}
            x={10 + (index * (80 / (monthlyData.length - 1)) + 10) + '%'}
            y="95%"
            fontSize="12"
            textAnchor="middle"
            fill="#555555"
          >
            {entry.month}
          </text>
        ))}
        
        {/* Stories line */}
        <polyline
          points={monthlyData.map((entry, index) => {
            const x = 10 + (index * (80 / (monthlyData.length - 1))) + '%'
            const y = getScaledValue(entry.stories, 'stories', 300)
            return `${x},${y}`
          }).join(' ')}
          fill="none"
          stroke="#FF5757"
          strokeWidth="2"
        />
        
        {/* Duration line */}
        <polyline
          points={monthlyData.map((entry, index) => {
            const x = 10 + (index * (80 / (monthlyData.length - 1))) + '%'
            const y = getScaledValue(entry.duration, 'duration', 300)
            return `${x},${y}`
          }).join(' ')}
          fill="none"
          stroke="#FFB443"
          strokeWidth="2"
        />
        
        {/* Data points for stories */}
        {monthlyData.map((entry, index) => (
          <circle
            key={`point-stories-${index}`}
            cx={10 + (index * (80 / (monthlyData.length - 1))) + '%'}
            cy={getScaledValue(entry.stories, 'stories', 300)}
            r="4"
            fill="#FF5757"
          />
        ))}
        
        {/* Data points for duration */}
        {monthlyData.map((entry, index) => (
          <circle
            key={`point-duration-${index}`}
            cx={10 + (index * (80 / (monthlyData.length - 1))) + '%'}
            cy={getScaledValue(entry.duration, 'duration', 300)}
            r="4"
            fill="#FFB443"
          />
        ))}
      </svg>
    </div>
  )
  
  const renderBarChart = () => (
    <div className="relative h-[300px]">
      {/* X-Axis */}
      <div className="absolute bottom-0 left-10 right-10 border-t border-text-secondary" />
      
      {/* Y-Axis */}
      <div className="absolute top-5 bottom-0 left-10 border-r border-text-secondary" />
      
      {/* Legend */}
      <div className="absolute top-0 right-10 flex items-center gap-xs">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <span className="text-sm">Stories Recorded</span>
      </div>
      
      {/* Chart Content */}
      <svg width="100%" height="100%" viewBox="0 0 500 300" preserveAspectRatio="none">
        {/* Grid lines */}
        <line x1="10%" y1="75%" x2="90%" y2="75%" stroke="#e5e5e5" strokeDasharray="3,3" />
        <line x1="10%" y1="50%" x2="90%" y2="50%" stroke="#e5e5e5" strokeDasharray="3,3" />
        <line x1="10%" y1="25%" x2="90%" y2="25%" stroke="#e5e5e5" strokeDasharray="3,3" />
        
        {/* X-Axis labels */}
        {monthlyData.map((entry, index) => (
          <text
            key={`x-label-${index}`}
            x={10 + (index * (80 / (monthlyData.length - 1)) + 10) + '%'}
            y="95%"
            fontSize="12"
            textAnchor="middle"
            fill="#555555"
          >
            {entry.month}
          </text>
        ))}
        
        {/* Bars for stories */}
        {monthlyData.map((entry, index) => (
          <rect
            key={`bar-${index}`}
            x={10 + (index * (80 / (monthlyData.length - 1)) + 3) + '%'}
            y={getScaledValue(entry.stories, 'stories', 300)}
            width="14%"
            height={300 - getScaledValue(entry.stories, 'stories', 300) - 30}
            rx="4"
            ry="4"
            fill="#FF5757"
          />
        ))}
      </svg>
    </div>
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
            <tr key={index} className={index % 2 === 0 ? 'bg-surface-secondary dark:bg-dark-surface-secondary' : ''}>
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
}
