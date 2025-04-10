import PageWrapper from '../../components/page-wrapper'
import Link from 'next/link'
import { ArrowRight, FileCode, Shapes, BookOpen, Palette } from 'lucide-react'

export default function GettingStartedPage() {
  return (
    <PageWrapper
      title="Getting Started"
      description="Your guide to understanding and implementing the Fable Design System."
    >
      <div className="grid gap-12">
        <section id="introduction" className="grid gap-6">
          <p className="text-lg">
            The Fable Design System provides a comprehensive set of guidelines, components, 
            and patterns for creating cohesive, accessible, and delightful user experiences 
            across all Fable products. This guide will help you understand how to use and 
            implement the design system effectively.
          </p>
        </section>

        <section id="for-designers" className="grid gap-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Palette size={24} /> For Designers
          </h2>
          <p>
            If you're a designer working on Fable products, the design system provides
            a comprehensive set of design resources and guidelines to ensure consistency
            and efficiency in your workflow.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <StepCard
              number="01"
              title="Explore Design Foundations"
              description="Familiarize yourself with Fable's core design elements, such as typography, colors, spacing, and shapes."
              link={{
                text: "Design Foundations",
                href: "/design-foundations"
              }}
            />
            
            <StepCard
              number="02"
              title="Download Design Resources"
              description="Access the Figma libraries and other design assets to use in your projects."
              link={{
                text: "Design Files",
                href: "/resources/design-files"
              }}
            />
            
            <StepCard
              number="03"
              title="Review Component Library"
              description="Understand the available UI components, their variants, and usage guidelines."
              link={{
                text: "Component Library",
                href: "/components"
              }}
            />
            
            <StepCard
              number="04"
              title="Learn Patterns & Templates"
              description="Explore common UI patterns and page templates for faster design solutions."
              link={{
                text: "Patterns & Templates",
                href: "/patterns"
              }}
            />
          </div>
        </section>

        <section id="for-developers" className="grid gap-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FileCode size={24} /> For Developers
          </h2>
          <p>
            For developers, the design system offers a robust set of components and guidelines
            for implementing design specifications with consistency and efficiency.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <StepCard
              number="01"
              title="Setup Development Environment"
              description="Install the required dependencies and configure your project to use the Fable component library."
              link={{
                text: "Installation Guide",
                href: "/resources/implementation-guide"
              }}
            />
            
            <StepCard
              number="02"
              title="Implement Design Tokens"
              description="Integrate design tokens to ensure visual consistency across your implementation."
              link={{
                text: "Design Tokens",
                href: "/resources/design-tokens"
              }}
            />
            
            <StepCard
              number="03"
              title="Explore Component Documentation"
              description="Review component API documentation, usage examples, and implementation guidelines."
              link={{
                text: "Component Implementation",
                href: "/resources/component-implementation"
              }}
            />
            
            <StepCard
              number="04"
              title="Test Accessibility"
              description="Ensure your implementation meets our accessibility requirements using the provided tools and guidelines."
              link={{
                text: "Accessibility",
                href: "/accessibility"
              }}
            />
          </div>
        </section>

        <section id="for-product-teams" className="grid gap-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Shapes size={24} /> For Product Teams
          </h2>
          <p>
            Product managers and cross-functional teams can use the design system to align
            on product experiences and ensure consistency across features and platforms.
          </p>
          
          <div className="grid gap-6 md:grid-cols-2">
            <StepCard
              number="01"
              title="Understand Design Principles"
              description="Learn about the core principles that guide design decisions in the Fable ecosystem."
              link={{
                text: "Design Principles",
                href: "/design-foundations"
              }}
            />
            
            <StepCard
              number="02"
              title="Review Voice & Tone"
              description="Explore our content guidelines to ensure consistent communication across all touchpoints."
              link={{
                text: "Voice Experience",
                href: "/voice-experience"
              }}
            />
            
            <StepCard
              number="03"
              title="Explore UX Patterns"
              description="Understand common interaction patterns to ensure consistent user experiences."
              link={{
                text: "Interaction Patterns",
                href: "/patterns"
              }}
            />
            
            <StepCard
              number="04"
              title="Plan for Platform Differences"
              description="Learn how components adapt across different platforms and form factors."
              link={{
                text: "Platform Guidelines",
                href: "/platform-guidelines"
              }}
            />
          </div>
        </section>

        <section id="contribution" className="grid gap-6">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <BookOpen size={24} /> Contributing to the Design System
          </h2>
          <p>
            The Fable Design System is a living framework that evolves with our products and user needs.
            We welcome contributions from all team members to help improve and expand the system.
          </p>
          
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <h3 className="text-xl font-medium mb-4">Contribution Process</h3>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>
                <span className="text-foreground dark:text-dark-foreground font-medium">Identify the need</span> - 
                Recognize a gap or improvement opportunity in the design system.
              </li>
              <li>
                <span className="text-foreground dark:text-dark-foreground font-medium">Submit a proposal</span> - 
                Document your idea with rationale and example use cases.
              </li>
              <li>
                <span className="text-foreground dark:text-dark-foreground font-medium">Collaborate on the solution</span> - 
                Work with the design system team to refine the approach.
              </li>
              <li>
                <span className="text-foreground dark:text-dark-foreground font-medium">Build and test</span> - 
                Develop the solution according to our contribution guidelines.
              </li>
              <li>
                <span className="text-foreground dark:text-dark-foreground font-medium">Documentation and review</span> - 
                Ensure proper documentation and review before integration.
              </li>
            </ol>
          </div>
        </section>

        <section id="support" className="grid gap-6">
          <h2 className="text-2xl font-semibold">Support and Resources</h2>
          <p>
            We're here to help you successfully implement the Fable Design System.
            If you have questions or need assistance, reach out through the following channels:
          </p>
          
          <div className="grid gap-4 md:grid-cols-3">
            <Link 
              href="/resources/faq"
              className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
            >
              <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
              <p className="text-sm text-muted-foreground">
                Browse common questions and answers about using the design system.
              </p>
            </Link>
            
            <Link 
              href="https://github.com/cambercreative/fable-design-system/issues"
              className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
            >
              <h3 className="font-semibold mb-2">GitHub Issues</h3>
              <p className="text-sm text-muted-foreground">
                Report bugs or request new features through our GitHub repository.
              </p>
            </Link>
            
            <Link 
              href="/resources/contact"
              className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg hover:bg-surface-primary dark:hover:bg-dark-surface-primary transition-colors"
            >
              <h3 className="font-semibold mb-2">Contact the Team</h3>
              <p className="text-sm text-muted-foreground">
                Get in touch with the design system team for specific questions.
              </p>
            </Link>
          </div>
        </section>

        <section id="next-steps" className="mt-4">
          <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Dive In?</h2>
            <p className="mb-6">
              Now that you have an overview of the Fable Design System, explore our component
              library to start building beautiful, consistent interfaces.
            </p>
            <Link
              href="/components"
              className="inline-flex items-center gap-2 px-6 py-3 font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Explore Components <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  )
}

function StepCard({
  number,
  title,
  description,
  link,
}: {
  number: string;
  title: string;
  description: string;
  link: {
    text: string;
    href: string;
  };
}) {
  return (
    <div className="p-6 bg-surface-secondary dark:bg-dark-surface-secondary rounded-lg">
      <div className="flex items-start">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-semibold mr-4">
          {number}
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <Link 
            href={link.href}
            className="inline-flex items-center text-primary font-medium"
          >
            {link.text} <ArrowRight size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
