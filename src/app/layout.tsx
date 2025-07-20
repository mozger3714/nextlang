import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeInitializer } from './theme-init'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SpeakLab English Academy - Angielski dla IT. ',
  description:
    'Ucz się angielskiego z myślą o IT. Zdobądź pracę programisty, podnieś zarobki i rozwijaj swoją karierę w branży technologicznej.',
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
