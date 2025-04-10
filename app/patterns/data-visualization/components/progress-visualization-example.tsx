import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

// Linear Progress Bar Component
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
      <div 
        className="w-full bg-surface-tertiary rounded-full overflow-hidden" 
        role="progressbar" 
        aria-valuenow={value} 
        aria-valuemin="0" 
        aria-valuemax={max} 
        aria-label={label || `Progress: ${percentage}%`}
      >
        <div 
          className={`${heightClass} ${statusClass} rounded-full transition-all duration-200`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

// Circular Progress Component
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
        <svg width={dimensions.size} height={dimensions.size} viewBox={`0 0 ${dimensions.size} ${dimensions.size}`}>
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
            className={`${statusClass} transition-all duration-300 ease-in-out`}
            transform={`rotate(-90 ${dimensions.size / 2} ${dimensions.size / 2})`}
          />
        </svg>
        
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-medium ${dimensions.fontSize}`}>
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
                <div 
                  className={`h-0.5 absolute left-1/2 top-1/2 -translate-y-1/2 ${
                    index < currentStep - 1 
                      ? 'bg-gradient-to-r from-primary to-primary-amber' 
                      : 'bg-surface-tertiary'
                  }`} 
                  style={{ width: '100%', zIndex: 0 }}
                ></div>
              )}
              
              {/* Step circle */}
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${
                  index < currentStep 
                    ? 'bg-gradient-to-r from-primary to-primary-amber text-white' 
                    : index === currentStep 
                      ? 'border-2 border-primary-amber bg-surface-secondary' 
                      : 'border-2 border-border bg-surface-tertiary'
                }`}
                aria-current={index === currentStep ? 'step' : undefined}
              >
                {index < currentStep ? <CheckCircle className="h-3 w-3" /> : index + 1}
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

// Main Component
export default function ProgressVisualizationExample() {
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
}
