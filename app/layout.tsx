import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Sidebar } from '@/components/layout/sidebar';
import { Header } from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { ScrollArea } from '@/components/ui/scroll-area';
import { siteConfig } from '@/config/site';
import { SkipToContent } from '@/components/a11y/skip-to-content';
import LoadingIndicator from '@/components/layout/loading-indicator';
import ProgressBar from '@/components/layout/progress-bar';
import dynamic from 'next/dynamic';

// Import axe-core for accessibility testing in development only
const AxeHelper = dynamic(() => import('./axe-helper'), { ssr: false });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Design System',
    'Fable',
    'Components',
    'UI',
    'UX',
    'Design',
    'Accessibility',
    'WCAG',
    'React',
    'Next.js',
    'Tailwind CSS',
  ],
  authors: [
    {
      name: 'Camber Creative',
      url: 'https://github.com/cambercreative',
    },
  ],
  creator: 'Camber Creative',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: '@cambercreative',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="min-h-screen bg-surface-primary text-text-primary font-sans antialiased">
        <Providers>
          {isDev && <AxeHelper />}
          <SkipToContent />
          <ProgressBar />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1 flex">
              <Sidebar className="hidden md:block w-[240px] border-r flex-shrink-0" />
              <main className="flex-1">
                <ScrollArea className="h-[calc(100vh-4rem)]">
                  <div id="content" className="container mx-auto py-6 max-w-6xl px-4">
                    <LoadingIndicator>
                      {children}
                    </LoadingIndicator>
                  </div>
                </ScrollArea>
              </main>
            </div>
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}