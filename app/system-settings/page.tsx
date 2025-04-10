"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Search, Wrench, Palette, MonitorCheck } from "lucide-react"

export default function SystemSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">System Settings</h1>
        <p className="text-muted-foreground">
          Configure and customize the Fable Design System website to suit your workflow.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              <CardTitle>Search & Filter</CardTitle>
            </div>
            <CardDescription>
              Find design tokens, components, and patterns quickly
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Configure search settings and learn how to use powerful filtering
              options to quickly find what you need across the design system.
            </p>
            <Button asChild>
              <Link href="/system-settings/search" className="w-full flex items-center justify-between">
                <span>Configure Search</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-primary" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>
              Customize the design system interface
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Adjust theme settings, toggle between light and dark mode, and
              customize the interface to suit your preferences.
            </p>
            <Button variant="outline">
              <span>Coming Soon</span>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MonitorCheck className="w-5 h-5 text-primary" />
              <CardTitle>Accessibility</CardTitle>
            </div>
            <CardDescription>
              Accessibility settings and preferences
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Configure accessibility settings including contrast preferences,
              motion reduction, and other accessibility features.
            </p>
            <Button variant="outline">
              <span>Coming Soon</span>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5 text-primary" />
              <CardTitle>Developer Tools</CardTitle>
            </div>
            <CardDescription>
              Tools and settings for developers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Configure code snippet formats, API preferences, and other
              developer-focused settings for the design system.
            </p>
            <Button variant="outline">
              <span>Coming Soon</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
