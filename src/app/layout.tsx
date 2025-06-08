import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeInitializer } from './theme-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeakLab English Academy - English for Developers',
  description: 'English for IT and Developers – Learn the smart way.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="pl" className="dark initial-load" suppressHydrationWarning>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="speaklab-theme"
          >
            <ThemeInitializer />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
