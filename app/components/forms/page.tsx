import * as React from "react";
import { Metadata } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import ComponentExample from "@/components/component-example";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const metadata: Metadata = {
  title: "Complex Forms",
  description: "Advanced form components with validation, complex inputs, and accessible design."
};

const profileFormCode = `import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Define form schema with validation
const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(30, { message: "Username cannot exceed 30 characters." }),
  bio: z
    .string()
    .max(160, { message: "Bio cannot exceed 160 characters." })
    .optional(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      bio: "",
      email: "",
    },
  });

  function onSubmit(data: ProfileFormValues) {
    console.log(data);
    // Handle form submission
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel required>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about yourself"
                  showCount
                  maxCount={160}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief description for your profile.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}`;

const textareaExample = `import { Textarea } from "@/components/ui/textarea";

// Basic usage
<Textarea placeholder="Enter your message" />

// With character count
<Textarea
  placeholder="Tell us about yourself"
  showCount
  maxCount={160}
/>

// With error state
<Textarea
  placeholder="Write your comment"
  error="Comment cannot be empty"
/>`;

const radioGroupExample = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

<FormField
  control={form.control}
  name="subscription"
  render={({ field }) => (
    <FormItem className="space-y-3">
      <FormLabel>Subscription Plan</FormLabel>
      <FormControl>
        <RadioGroup
          onValueChange={field.onChange}
          defaultValue={field.value}
          className="flex flex-col space-y-2"
        >
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="free" />
            </FormControl>
            <FormLabel className="font-normal">
              Free - Basic features for personal use
            </FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="pro" />
            </FormControl>
            <FormLabel className="font-normal">
              Pro - Advanced features for professionals
            </FormLabel>
          </FormItem>
          <FormItem className="flex items-center space-x-2 space-y-0">
            <FormControl>
              <RadioGroupItem value="team" />
            </FormControl>
            <FormLabel className="font-normal">
              Team - Team-based collaboration tools
            </FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>`;

// Define form schema with validation
const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Username must be at least 2 characters." })
    .max(30, { message: "Username cannot exceed 30 characters." }),
  bio: z
    .string()
    .max(160, { message: "Bio cannot exceed 160 characters." })
    .optional(),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
});

// Comprehensive form with various input types
const advancedFormSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  phone: z
    .string()
    .regex(/^\d{10}$/, { message: "Phone number must be 10 digits." })
    .optional(),
  subscription: z.enum(["free", "pro", "team"], {
    required_error: "Please select a subscription plan.",
  }),
  notificationMethod: z.enum(["email", "sms", "push"], {
    required_error: "Please select a notification method.",
  }),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions." }),
  }),
  bio: z
    .string()
    .max(500, { message: "Bio cannot exceed 500 characters." })
    .optional(),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;
type AdvancedFormValues = z.infer<typeof advancedFormSchema>;

export default function FormsPage() {
  // Profile form with validation
  const profileForm = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      username: "",
      bio: "",
      email: "",
    },
  });

  // Advanced form with multiple input types
  const advancedForm = useForm<AdvancedFormValues>({
    resolver: zodResolver(advancedFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      subscription: "free",
      notificationMethod: "email",
      termsAccepted: false,
      bio: "",
    },
  });

  function onProfileSubmit(data: ProfileFormValues) {
    console.log(data);
    alert("Profile updated! Check console for form data.");
  }

  function onAdvancedSubmit(data: AdvancedFormValues) {
    console.log(data);
    alert("Form submitted! Check console for form data.");
  }

  return (
    <div className="container py-10">
      <h1 className="text-display font-faro font-bold mb-4">Complex Forms</h1>
      <p className="text-body font-atkinson mb-8">
        Advanced form components with validation, complex inputs, and accessible design.
        Our form components provide a robust foundation for collecting user data with
        comprehensive validation and feedback.
      </p>

      <Tabs defaultValue="validation" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="validation">Validation</TabsTrigger>
          <TabsTrigger value="complex-inputs">Complex Inputs</TabsTrigger>
          <TabsTrigger value="comprehensive">Comprehensive Example</TabsTrigger>
        </TabsList>
        
        <TabsContent value="validation" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Form Validation</h2>
            <p className="text-body font-atkinson">
              Our form components integrate seamlessly with React Hook Form and Zod
              for robust form validation with clear error messaging.
            </p>

            <ComponentExample
              title="Profile Form with Validation"
              description="A form with validation rules for each field and appropriate error messages."
              code={profileFormCode}
            >
              <div className="w-full max-w-lg mx-auto border rounded-md p-6">
                <Form {...profileForm}>
                  <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-6">
                    <FormField
                      control={profileForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel required>Username</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your username" {...field} />
                          </FormControl>
                          <FormDescription>
                            This is your public display name.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel required>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={profileForm.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about yourself"
                              showCount
                              maxCount={160}
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Brief description for your profile.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Update profile</Button>
                  </form>
                </Form>
              </div>
            </ComponentExample>

            <h3 className="text-headline font-faro font-medium mt-8">Form Validation Features</h3>
            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Integration with React Hook Form for form state management</li>
              <li>Zod schema validation for type-safe form data</li>
              <li>Clear error messages that appear below the relevant field</li>
              <li>Support for required field indicators</li>
              <li>Field descriptions for additional context</li>
              <li>Accessible error states with proper ARIA attributes</li>
            </ul>
            
            <div className="p-4 mt-4 bg-surface-tertiary rounded-md">
              <h4 className="text-body font-faro font-bold mb-2">Implementation Note</h4>
              <p className="text-body font-atkinson">
                Form validation requires installing both React Hook Form and Zod:
              </p>
              <pre className="mt-2 p-2 bg-surface-secondary rounded overflow-x-auto">
                <code>npm install react-hook-form @hookform/resolvers zod</code>
              </pre>
            </div>
          </section>
        </TabsContent>
        
        <TabsContent value="complex-inputs" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Complex Form Inputs</h2>
            <p className="text-body font-atkinson">
              Advanced form inputs with enhanced functionality for a better user experience.
            </p>

            <ComponentExample
              title="Textarea with Character Count"
              description="A textarea component with optional character count display."
              code={textareaExample}
            >
              <div className="w-full border rounded-md p-6 space-y-6">
                <div>
                  <h3 className="text-body font-faro font-medium mb-2">Basic Textarea</h3>
                  <Textarea placeholder="Enter your message" />
                </div>
                
                <div>
                  <h3 className="text-body font-faro font-medium mb-2">With Character Count</h3>
                  <Textarea
                    placeholder="Tell us about yourself"
                    showCount
                    maxCount={160}
                    defaultValue="I love using the Fable app to document my family's stories. It's become an essential part of preserving our memories."
                  />
                </div>
                
                <div>
                  <h3 className="text-body font-faro font-medium mb-2">With Error State</h3>
                  <Textarea
                    placeholder="Write your comment"
                    error="Comment cannot be empty"
                  />
                </div>
              </div>
            </ComponentExample>

            <ComponentExample
              title="Radio Group with Form Integration"
              description="Radio buttons in a form context with labels and validation."
              code={radioGroupExample}
            >
              <div className="w-full border rounded-md p-6">
                <FormField
                  control={advancedForm.control}
                  name="subscription"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Subscription Plan</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-2"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="free" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Free - Basic features for personal use
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="pro" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Pro - Advanced features for professionals
                            </FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="team" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Team - Team-based collaboration tools
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </ComponentExample>

            <ComponentExample
              title="Select Component with Options"
              description="Dropdown selection component for choosing from a list of options."
              code={`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

<FormField
  control={form.control}
  name="notificationMethod"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Notification Method</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger>
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="email">Email</SelectItem>
          <SelectItem value="sms">SMS</SelectItem>
          <SelectItem value="push">Push Notification</SelectItem>
        </SelectContent>
      </Select>
      <FormDescription>
        How would you like to receive notifications?
      </FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>`}
            >
              <div className="w-full border rounded-md p-6">
                <FormField
                  control={advancedForm.control}
                  name="notificationMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notification Method</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="sms">SMS</SelectItem>
                          <SelectItem value="push">Push Notification</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        How would you like to receive notifications?
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </ComponentExample>

            <ComponentExample
              title="Checkbox with Terms Agreement"
              description="Checkbox component for agreements and multiple selection."
              code={`import { Checkbox } from "@/components/ui/checkbox";

<FormField
  control={form.control}
  name="termsAccepted"
  render={({ field }) => (
    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <div className="space-y-1 leading-none">
        <FormLabel>
          I accept the terms and conditions
        </FormLabel>
        <FormDescription>
          You must agree to our terms of service before proceeding.
        </FormDescription>
        <FormMessage />
      </div>
    </FormItem>
  )}
/>`}
            >
              <div className="w-full border rounded-md p-6">
                <FormField
                  control={advancedForm.control}
                  name="termsAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I accept the terms and conditions
                        </FormLabel>
                        <FormDescription>
                          You must agree to our terms of service before proceeding.
                        </FormDescription>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </ComponentExample>
          </section>
        </TabsContent>
        
        <TabsContent value="comprehensive" className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Comprehensive Form Example</h2>
            <p className="text-body font-atkinson">
              A complete form implementing all advanced components with validation
              and error handling.
            </p>

            <div className="w-full border rounded-md p-6">
              <Form {...advancedForm}>
                <form onSubmit={advancedForm.handleSubmit(onAdvancedSubmit)} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormField
                      control={advancedForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel required>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={advancedForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel required>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={advancedForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="10-digit phone number" {...field} />
                        </FormControl>
                        <FormDescription>
                          Format: 10-digit number with no spaces or dashes.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={advancedForm.control}
                    name="subscription"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel required>Subscription Plan</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-2"
                          >
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="free" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Free - Basic features for personal use
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="pro" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Pro - Advanced features for professionals
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-2 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="team" />
                              </FormControl>
                              <FormLabel className="font-normal">
                                Team - Team-based collaboration tools
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={advancedForm.control}
                    name="notificationMethod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel required>Notification Method</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="push">Push Notification</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          How would you like to receive notifications?
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={advancedForm.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about yourself"
                            showCount
                            maxCount={500}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Share something about yourself (optional).
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={advancedForm.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel required>
                            I accept the terms and conditions
                          </FormLabel>
                          <FormDescription>
                            You must agree to our terms of service before proceeding.
                          </FormDescription>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="mt-8">Submit Form</Button>
                </form>
              </Form>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Form Accessibility</h2>
            <p className="text-body font-atkinson">
              Our form components are designed with accessibility as a core principle.
            </p>

            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Proper labeling of all form controls for screen readers</li>
              <li>Error messages are associated with their corresponding fields</li>
              <li>Required fields are clearly indicated both visually and to assistive technology</li>
              <li>Consistent focus indication across all interactive elements</li>
              <li>Appropriate color contrast for all form elements and error states</li>
              <li>Logical tab order for keyboard navigation</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-title-1 font-faro font-bold">Responsive Form Layout</h2>
            <p className="text-body font-atkinson">
              Forms automatically adapt to different screen sizes, with responsive layout
              adjustments for optimal usability on all devices.
            </p>

            <ul className="list-disc pl-6 space-y-2 font-atkinson text-body">
              <li>Single-column layout on mobile devices for easier focus</li>
              <li>Multi-column layout on larger screens for efficient space usage</li>
              <li>Appropriately sized touch targets for mobile interaction</li>
              <li>Consistent spacing and alignment across viewports</li>
              <li>Labels positioned optimally for current viewport size</li>
            </ul>
          </section>
        </TabsContent>
      </Tabs>
    </div>
  );
}
