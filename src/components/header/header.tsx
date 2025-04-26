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
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [theme, setTheme] = useState('dark')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <header className="flex items-center justify-between p-4 h-16 border-b border-border md:border-none relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 md:gap-8">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image
              src="/_nextLang.svg"
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
        <Button
          variant="outline"
          onClick={() =>
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
          }
          className="relative h-10 w-10 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-gray-500"
          aria-label="Change color mode"
        >
          <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
            <Sun
              className={`h-6 w-6 text-white transition-all duration-300 ${
                theme === 'dark' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
            />
            <Moon
              className={`absolute h-6 w-6 text-blue-400 transition-all duration-300 ${
                theme === 'light'
                  ? 'scale-100 opacity-100'
                  : 'scale-0 opacity-0'
              }`}
            />
          </div>
          <span className="sr-only">Toggle dark mode</span>
        </Button>
        <SignedOut>
          <SignInButton>
            <Button className="cursor-pointer text-md transition-colors duration-300 smooth-underline">
              Sign in
            </Button>
          </SignInButton>

          <SignUpButton>
            <Button className="cursor-pointer text-md transition-colors duration-300 smooth-underline">
              Sign up
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
          <Button
            variant="outline"
            size="icon"
            onClick={() => {
              setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
              setMenuOpen(false)
            }}
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
