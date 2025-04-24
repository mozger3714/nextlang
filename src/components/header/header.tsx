'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <header className="flex justify-between items-center px-6 py-4 h-20 border-b border-border bg-background text-foreground">
      {/* Left - Logo */}
      <div className="flex items-center">
        <Image
          src="/_nextLang.svg"
          alt="nextLang Logo"
          width={160}
          height={40}
          priority
        />
      </div>

      {/* Middle - Navigation */}
      <nav className="hidden md:flex gap-6 text-sm font-medium">
        <Link href="/pricing" className="hover:text-primary transition">
          Pricing
        </Link>
        <Link href="/blog" className="hover:text-primary transition">
          Blog
        </Link>
        <Link href="/contact" className="hover:text-primary transition">
          Contact
        </Link>
      </nav>

      {/* Right - Auth & Theme */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="cursor-pointer hover:opacity-90 transition"
          onClick={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
        >
          {theme === 'dark' ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>

        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <Link
            href="/dashboard"
            className="text-sm font-semibold hover:text-primary"
          >
            Dashboard
          </Link>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}
