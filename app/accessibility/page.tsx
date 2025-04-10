"use client"

import { useEffect } from 'react'
import PageHeader from '../../components/page-header'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs'
import AccessibilityOverview from './components/accessibility-overview'
import ComplianceStandards from './components/compliance-standards'
import TestingTools from './components/testing-tools'
import ComponentChecklist from './components/component-checklist'
import AccessibilityDemo from './components/accessibility-demo'

export default function AccessibilityPage() {
  // Set page title and description for screen readers
  useEffect(() => {
    document.title = "Accessibility Guidelines | Fable Design System"
  }, [])
  
  return (
    <div className="space-y-10">
      <PageHeader
        title="Accessibility Guidelines"
        description="Our comprehensive approach to creating accessible experiences that work for everyone"
      />
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="standards">Compliance Standards</TabsTrigger>
          <TabsTrigger value="tools">Testing Tools</TabsTrigger>
          <TabsTrigger value="checklist">Component Checklist</TabsTrigger>
          <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="pt-6">
          <AccessibilityOverview />
        </TabsContent>
        
        <TabsContent value="standards" className="pt-6">
          <ComplianceStandards />
        </TabsContent>
        
        <TabsContent value="tools" className="pt-6">
          <TestingTools />
        </TabsContent>
        
        <TabsContent value="checklist" className="pt-6">
          <ComponentChecklist />
        </TabsContent>
        
        <TabsContent value="demo" className="pt-6">
          <AccessibilityDemo />
        </TabsContent>
      </Tabs>
    </div>
  )
}
