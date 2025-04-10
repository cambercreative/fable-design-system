"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../components/ui/tabs'
import { Alert, AlertDescription, AlertTitle } from '../../../components/ui/alert'
import { Badge } from '../../../components/ui/badge'
import { Button } from '../../../components/ui/button'
import { Checkbox } from '../../../components/ui/checkbox'
import { Label } from '../../../components/ui/label'
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group'
import { Switch } from '../../../components/ui/switch'
import { Input } from '../../../components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select'
import { EyeOff, CheckCircle2, XCircle, AlertTriangle, Lightbulb, Keyboard, MousePointer2, Monitor, Info } from 'lucide-react'

export default function AccessibilityDemo() {
  const [contrastMode, setContrastMode] = useState<'normal' | 'low' | 'high'>('normal')
  const [keyboardMode, setKeyboardMode] = useState(false)
  const [screenReaderMode, setScreenReaderMode] = useState(false)
  const [textMode, setTextMode] = useState<'normal' | 'small' | 'large'>('normal')
  
  const getTextSize = () => {
    switch (textMode) {
      case 'small': return 'text-xs'
      case 'large': return 'text-xl'
      default: return 'text-base'
    }
  }
  
  const getContrastClass = () => {
    switch (contrastMode) {
      case 'low': return 'opacity-70 contrast-50'
      case 'high': return 'contrast-125'
      default: return ''
    }
  }
  
  return (
    <div className="space-y-8">
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Interactive Experience</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            This interactive demo illustrates the importance of designing for accessibility by simulating various user experiences. Try toggling the settings below to see how different disabilities might affect user interactions with our components.
          </p>
        </div>
        
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important Note</AlertTitle>
          <AlertDescription>
            This simulation is simplified for educational purposes and doesn't fully represent the experience of users with disabilities. Always test with real assistive technologies and involve users with disabilities in your research.
          </AlertDescription>
        </Alert>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Simulation Controls</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Monitor className="h-5 w-5 text-primary" />
                Visual Settings
              </CardTitle>
              <CardDescription>Adjust to simulate different visual experiences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <Label htmlFor="contrast-select">Contrast Mode</Label>
                <Select
                  value={contrastMode}
                  onValueChange={(value) => setContrastMode(value as 'normal' | 'low' | 'high')}
                >
                  <SelectTrigger id="contrast-select" className="w-full">
                    <SelectValue placeholder="Select contrast mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal Contrast</SelectItem>
                    <SelectItem value="low">Low Contrast (Simulates Low Vision)</SelectItem>
                    <SelectItem value="high">High Contrast (Enhanced Visibility)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="text-select">Text Size</Label>
                <Select
                  value={textMode}
                  onValueChange={(value) => setTextMode(value as 'normal' | 'small' | 'large')}
                >
                  <SelectTrigger id="text-select" className="w-full">
                    <SelectValue placeholder="Select text size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal Text</SelectItem>
                    <SelectItem value="small">Small Text (Challenging for Low Vision)</SelectItem>
                    <SelectItem value="large">Large Text (Easier for Low Vision)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Keyboard className="h-5 w-5 text-primary" />
                Interaction Settings
              </CardTitle>
              <CardDescription>Adjust to simulate different interaction methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center space-x-2">
                <Switch
                  id="keyboard-mode"
                  checked={keyboardMode}
                  onCheckedChange={setKeyboardMode}
                />
                <Label htmlFor="keyboard-mode">Keyboard Only Mode</Label>
              </div>
              <div className="text-sm text-muted-foreground">
                When enabled, hover styles are disabled to simulate keyboard-only navigation. Try using Tab to navigate.
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="screenreader-mode"
                  checked={screenReaderMode}
                  onCheckedChange={setScreenReaderMode}
                />
                <Label htmlFor="screenreader-mode">Screen Reader Annotation</Label>
              </div>
              <div className="text-sm text-muted-foreground">
                When enabled, screen reader announcements will be simulated visually.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Interactive Component Demo</h2>
        
        <div className={`rounded-lg border-2 p-6 ${getContrastClass()}`}>
          {screenReaderMode && (
            <div className="mb-6 bg-black text-green-400 p-3 font-mono text-sm rounded">
              <p>Screen Reader Output:</p>
              <p>"Sign Up Form, main region"</p>
            </div>
          )}
          
          <form className="space-y-8">
            <div className="grid gap-6">
              <div className="space-y-2">
                <h3 className={`font-semibold ${getTextSize()}`}>Create Your Account</h3>
                <p className={`text-muted-foreground ${textMode === 'large' ? 'text-lg' : textMode === 'small' ? 'text-xs' : 'text-sm'}`}>
                  Enter your information to get started with Fable
                </p>
              </div>
              
              {/* Accessible Form vs Inaccessible Form Tabs */}
              <Tabs defaultValue="accessible">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="accessible">Accessible Version</TabsTrigger>
                  <TabsTrigger value="inaccessible">Inaccessible Version</TabsTrigger>
                </TabsList>
                
                {/* Accessible Form Example */}
                <TabsContent value="accessible" className="space-y-6 pt-6">
                  {contrastMode === 'low' && (
                    <Alert variant="warning">
                      <AlertTriangle className="h-4 w-4" />
                      <AlertTitle>Contrast Issue Detected</AlertTitle>
                      <AlertDescription>
                        This form may be difficult to read with your current contrast settings. Try using high contrast mode.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={getTextSize()}>
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className={keyboardMode ? 'focus-visible:no-hover' : ''}
                        aria-required="true"
                      />
                      {screenReaderMode && (
                        <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                          Screen reader: "Full Name, required, edit text"
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className={getTextSize()}>
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className={keyboardMode ? 'focus-visible:no-hover' : ''}
                        aria-required="true"
                      />
                      {screenReaderMode && (
                        <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                          Screen reader: "Email Address, required, edit text"
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="password" className={getTextSize()}>
                        Password <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="Create a password"
                        className={keyboardMode ? 'focus-visible:no-hover' : ''}
                        aria-required="true"
                      />
                      <p className={`text-xs text-muted-foreground ${textMode === 'small' ? 'text-[10px]' : ''}`}>
                        Password must be at least 8 characters long
                      </p>
                      {screenReaderMode && (
                        <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                          Screen reader: "Password, required, edit text, Password must be at least 8 characters long"
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-3">
                      <Label className={getTextSize()}>
                        Notification Preferences
                      </Label>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="emails" />
                          <Label htmlFor="emails" className={getTextSize()}>
                            Email me about product updates
                          </Label>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                            Screen reader: "Email me about product updates, checkbox, not checked"
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <Checkbox id="offers" />
                          <Label htmlFor="offers" className={getTextSize()}>
                            Email me about special offers
                          </Label>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                            Screen reader: "Email me about special offers, checkbox, not checked"
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Label htmlFor="account-type" className={getTextSize()}>
                        Account Type <span className="text-red-500">*</span>
                      </Label>
                      
                      <RadioGroup defaultValue="personal" aria-required="true">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="personal" id="personal" />
                          <Label htmlFor="personal" className={getTextSize()}>
                            Personal Account
                          </Label>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                            Screen reader: "Personal Account, selected, radio button, 1 of 2"
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="business" id="business" />
                          <Label htmlFor="business" className={getTextSize()}>
                            Business Account
                          </Label>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                            Screen reader: "Business Account, not selected, radio button, 2 of 2"
                          </div>
                        )}
                      </RadioGroup>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" aria-required="true" />
                      <Label htmlFor="terms" className={getTextSize()}>
                        I agree to the <a href="#" className="text-primary underline">Terms and Conditions</a>
                      </Label>
                    </div>
                    {screenReaderMode && (
                      <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-1">
                        Screen reader: "I agree to the Terms and Conditions, required, checkbox, not checked"
                      </div>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Create Account
                  </Button>
                  {screenReaderMode && (
                    <div className="text-xs text-muted-foreground border-l-2 border-primary pl-2 mt-2">
                      Screen reader: "Create Account, button"
                    </div>
                  )}
                </TabsContent>
                
                {/* Inaccessible Form Example */}
                <TabsContent value="inaccessible" className="space-y-6 pt-6">
                  {keyboardMode && (
                    <Alert variant="destructive">
                      <XCircle className="h-4 w-4" />
                      <AlertTitle>Keyboard Navigation Issues</AlertTitle>
                      <AlertDescription>
                        This form cannot be completed using only a keyboard.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  {screenReaderMode && (
                    <Alert variant="destructive">
                      <EyeOff className="h-4 w-4" />
                      <AlertTitle>Screen Reader Issues</AlertTitle>
                      <AlertDescription>
                        A screen reader would not properly announce most elements on this form.
                      </AlertDescription>
                    </Alert>
                  )}
                  
                  <div className="space-y-4">
                    {/* Inaccessible inputs without labels */}
                    <div>
                      <div className={`text-sm font-medium ${getTextSize()}`}>
                        Full Name <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="Enter your full name"
                        className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                      />
                      {screenReaderMode && (
                        <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                          Screen reader issue: No programmatic label association
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className={`text-sm font-medium ${getTextSize()}`}>
                        Email Address <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="Enter your email"
                        className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                      />
                      {screenReaderMode && (
                        <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                          Screen reader issue: No programmatic label association, missing input type
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <div className={`text-sm font-medium ${getTextSize()}`}>
                        Password <span className="text-red-500">*</span>
                      </div>
                      <input
                        placeholder="Create a password"
                        className="mt-1 block w-full rounded-md border border-input px-3 py-2"
                      />
                      <p className={`text-xs ${contrastMode === 'low' ? 'text-gray-400' : 'text-muted-foreground'} ${textMode === 'small' ? 'text-[10px]' : ''}`}>
                        Password must be at least 8 characters long
                      </p>
                      {screenReaderMode && (
                        <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                          Screen reader issue: No programmatic label association, missing input type, password requirements not associated
                        </div>
                      )}
                    </div>
                    
                    {/* Inaccessible checkbox group */}
                    <div>
                      <div className={`text-sm font-medium mb-2 ${getTextSize()}`}>
                        Notification Preferences
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded border border-primary"></div>
                          <span className={getTextSize()}>Email me about product updates</span>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                            Screen reader issue: Not a real checkbox, can't be activated with keyboard
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded border border-primary"></div>
                          <span className={getTextSize()}>Email me about special offers</span>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                            Screen reader issue: Not a real checkbox, can't be activated with keyboard
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Inaccessible radio group */}
                    <div>
                      <div className={`text-sm font-medium mb-2 ${getTextSize()}`}>
                        Account Type <span className="text-red-500">*</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border border-primary"></div>
                          <span className={getTextSize()}>Personal Account</span>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                            Screen reader issue: Not a real radio button, can't be activated with keyboard
                          </div>
                        )}
                        
                        <div className="flex items-center space-x-2">
                          <div className="h-4 w-4 rounded-full border border-primary"></div>
                          <span className={getTextSize()}>Business Account</span>
                        </div>
                        {screenReaderMode && (
                          <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                            Screen reader issue: Not a real radio button, can't be activated with keyboard
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Inaccessible checkbox for terms */}
                    <div className="flex items-center space-x-2">
                      <div className="h-4 w-4 rounded border border-primary"></div>
                      <span className={getTextSize()}>I agree to the <span className="text-primary">Terms and Conditions</span></span>
                    </div>
                    {screenReaderMode && (
                      <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-1">
                        Screen reader issue: Not a real checkbox, can't be activated with keyboard, terms link not navigable
                      </div>
                    )}
                  </div>
                  
                  {/* Inaccessible button */}
                  <div
                    className="block w-full rounded-md bg-primary p-2 text-center text-white"
                    onClick={() => console.log('Clicked')}
                  >
                    Create Account
                  </div>
                  {screenReaderMode && (
                    <div className="text-xs text-red-500 border-l-2 border-red-500 pl-2 mt-2">
                      Screen reader issue: Not a real button, can't be activated with keyboard, role not announced
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </form>
        </div>
      </section>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Key Takeaways</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MousePointer2 className="h-5 w-5 text-primary" />
                Keyboard Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Many users rely exclusively on keyboards to navigate websites. All interactive elements must be operable via keyboard and have visible focus states.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="bg-primary/10 text-primary">Focus indicators</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">Logical tab order</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">No keyboard traps</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Proper Semantics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Using the correct HTML elements ensures screen readers accurately communicate the purpose and state of interface elements to users.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="bg-primary/10 text-primary">Native elements</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">ARIA attributes</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">Meaningful labels</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-primary" />
                Visual Clarity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                High contrast, adequate text size, and clear visual indicators help users with low vision or cognitive disabilities understand and use interfaces.
              </p>
              <div className="mt-4">
                <Badge variant="outline" className="bg-primary/10 text-primary">Color contrast</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">Text resizing</Badge>
                <Badge variant="outline" className="bg-primary/10 text-primary ml-2">Visual cues</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertTitle>Remember</AlertTitle>
          <AlertDescription>
            Accessibility benefits everyone, not just users with disabilities. The same practices that make our products accessible also make them more usable in challenging environments, on different devices, and for users with varying preferences.
          </AlertDescription>
        </Alert>
      </section>
    </div>
  )
}