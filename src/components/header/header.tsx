'use client'

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowRight, Menu, X } from 'lucide-react'
import Image from 'next/image'
import ColorModeToggler from '../color-mode-toggler/color-mode-toggler'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex items-center justify-between py-4 h-16 border-b border-border md:border-none relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/speaklab-dark.svg"
              alt="Logo"
              width={140}
              height={35}
              className="mr-4"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-10 text-md font-medium text-foreground/80">
          <Link
            href="/pricing"
            className="hover:text-primary p-2 transition-colors duration-300 smooth-underline"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="hover:text-primary p-2 transition-colors duration-300 smooth-underline"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary p-2 transition-colors duration-300 smooth-underline"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center gap-6">
        <ColorModeToggler />
        <SignedOut>
          <SignInButton>
            <Button
              variant="outline"
              className="cursor-pointer text-md rounded-full py-4 border-2 hover:scale-105 transition-transform"
            >
              Zaloguj się
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button className="cursor-pointer text-md border-2 border-[var(--color-accent)] rounded-full py-4 bg-[var(--color-accent)] text-white hover:scale-105 transition-transform">
              Zarejestruj się
            </Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <div className="flex gap-6">
            <UserButton />
            <Link
              href="/dashboard"
              className="text-md flex font-semibold hover:text-[var(--color-accent)] transition"
            >
              Dashboard <ArrowRight className="ml-3" />
            </Link>
          </div>
        </SignedIn>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t border-border flex flex-col items-start gap-4 p-4 md:hidden">
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <ColorModeToggler />
          <SignedOut>
            <SignInButton />
            <SignUpButton />
          </SignedOut>
          <SignedIn>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </header>
  )
}
