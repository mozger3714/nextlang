'use client'

import { useTheme } from 'next-themes'
import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export function Topbar() {
  const { theme } = useTheme()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsReady(true)
  }, [])

  // Always use dark theme until hydration completes
  const displayTheme = isReady ? theme : 'dark'

  console.log('Current theme:', displayTheme)

  return (
    <header className="flex items-center justify-between p-4 h-16 border-b border-border relative z-50 w-full">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-[var(--color-accent)] transition"
      >
        <ArrowLeft /> Back to Home page
      </Link>
      <Image
        src={
          displayTheme === 'dark' ? '/speaklab-dark.svg' : '/speaklab-light.svg'
        }
        alt="SpeakLab English Academy logo"
        width={140}
        height={35}
      />
      <UserButton />
    </header>
  )
}
