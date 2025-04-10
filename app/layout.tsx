import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '../components/theme-provider'
import AxeHelper from './axe-helper'

export const metadata: Metadata = {
  title: 'Fable Design System',
  description: 'Visual documentation of Fable's design language',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <AxeHelper />
        </ThemeProvider>
      </body>
    </html>
  )
}
