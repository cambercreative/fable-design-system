"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearch } from "@/components/search"
import { Keyboard, Search, Filter, CheckCircle } from "lucide-react"

export default function SearchPage() {
  const { setIsSearchOpen } = useSearch()
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Search & Filter</h1>
        <p className="text-muted-foreground">
          Find components, design tokens, and patterns across the design system with powerful search and filtering capabilities.
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              <CardTitle>Search</CardTitle>
            </div>
            <CardDescription>
              Search across all design system content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The search functionality allows you to quickly find components, design tokens, patterns, 
              and other content across the entire design system. Search by name, description, or properties.
            </p>
            <div className="border rounded-md p-4 bg-surface-secondary mb-4">
              <div className="flex items-center gap-2 mb-2">
                <Keyboard className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">Keyboard Shortcut</span>
              </div>
              <p className="text-sm">
                Press <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  <span className="text-xs">⌘</span>K
                </kbd> (macOS) or <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                  <span className="text-xs">Ctrl</span>K
                </kbd> (Windows/Linux) to open the search dialog from anywhere in the design system.
              </p>
            </div>
            <Button onClick={() => setIsSearchOpen(true)} className="w-full">
              Open Search
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <CardTitle>Filtering</CardTitle>
            </div>
            <CardDescription>
              Refine search results with powerful filters
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The filtering system allows you to narrow down search results by various properties:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1" />
                <div>
                  <span className="font-medium">Categories</span>
                  <p className="text-sm text-muted-foreground">Filter by Components, Design Tokens, Foundations, or Patterns</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1" />
                <div>
                  <span className="font-medium">Types</span>
                  <p className="text-sm text-muted-foreground">Filter by specific component or token types</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-primary mt-1" />
                <div>
                  <span className="font-medium">Properties</span>
                  <p className="text-sm text-muted-foreground">Filter by specific properties like "accessibility", "interactive", etc.</p>
                </div>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Filters can be combined with search terms for precise results.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="examples">
        <TabsList className="mb-4">
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
          <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
        </TabsList>
        
        <TabsContent value="examples">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Example Searches</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Search: "button"</p>
                    <p className="text-sm text-muted-foreground">
                      Find all button components, properties, and patterns.
                    </p>
                  </div>
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Search: "color token"</p>
                    <p className="text-sm text-muted-foreground">
                      Find all color-related design tokens.
                    </p>
                  </div>
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Search: "form"</p>
                    <p className="text-sm text-muted-foreground">
                      Find all form-related components and patterns.
                    </p>
                  </div>
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Search: "accessibility"</p>
                    <p className="text-sm text-muted-foreground">
                      Find all items tagged with accessibility properties.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Combined Filters</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Category: Components + Type: Form</p>
                    <p className="text-sm text-muted-foreground">
                      Find all form-related components.
                    </p>
                  </div>
                  <div className="border rounded-md p-3 bg-surface-secondary">
                    <p className="font-medium">Category: Design Tokens + Property: Color</p>
                    <p className="text-sm text-muted-foreground">
                      Find all color-related design tokens.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Usage Guidelines</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Use specific terms</span>
                    <p className="text-sm text-muted-foreground">
                      More specific search terms yield more precise results. Use component names, specific properties,
                      or descriptive terms.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Combine filters</span>
                    <p className="text-sm text-muted-foreground">
                      Narrow down results by applying multiple filters. Start with broad categories and refine as needed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Navigate with tabs</span>
                    <p className="text-sm text-muted-foreground">
                      Use the tabs in search results to quickly filter by content type (Components, Tokens, etc.).
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Clear filters</span>
                    <p className="text-sm text-muted-foreground">
                      If results are too limited, try clearing filters or using more general search terms.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="accessibility">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-2">Accessibility Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Keyboard navigation</span>
                    <p className="text-sm text-muted-foreground">
                      The search interface is fully keyboard navigable. Use Tab to move between interactive elements,
                      Arrow keys to navigate results, and Enter to select.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Screen reader support</span>
                    <p className="text-sm text-muted-foreground">
                      All search elements have appropriate ARIA labels and announcements for screen reader users.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Focus management</span>
                    <p className="text-sm text-muted-foreground">
                      The search dialog automatically focuses the search input when opened and returns focus to
                      the triggering element when closed.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1" />
                  <div>
                    <span className="font-medium">Color contrast</span>
                    <p className="text-sm text-muted-foreground">
                      All elements meet WCAG 2.1 AA contrast requirements in both light and dark modes.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
