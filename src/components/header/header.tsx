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
import { ArrowRight, ArrowBigUp, Menu, X } from 'lucide-react'
import Image from 'next/image'
import ColorModeToggler from '../color-mode-toggler/color-mode-toggler'
import { useTheme } from 'next-themes'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [isReady, setIsReady] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    setIsReady(true)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const displayTheme = isReady ? theme : 'dark'

  return (
    <>
      <header className="flex items-center justify-between py-4 h-16 border-b border-border md:border-none relative z-50">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-8">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src={
                    displayTheme === 'dark'
                      ? '/speaklab-dark.svg'
                      : '/speaklab-light.svg'
                  }
                  alt="Logo"
                  width={140}
                  height={35}
                  className="mr-4"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10 text-md font-medium">
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
              className="cursor-pointer text-md font-semibold border-2 border-dashed border-white rounded-full py-4 bg-[var(--color-accent)] text-white hover:scale-110 transition-transform"
              onClick={() =>
                window.open('https://calendly.com/mr-smeett/darmowa-lekcja')
              }
            >
              Darmowa lekcja próbna
            </Button>
            <ColorModeToggler />
            <SignedOut>
              <div className="flex gap-4">
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
              </div>
            </SignedOut>
            <SignedIn>
              <div className="flex gap-6 items-center">
                <Link
                  href="/dashboard"
                  className="text-md flex font-semibold hover:text-[var(--color-accent)] transition"
                >
                  Dashboard <ArrowRight className="ml-3" />
                </Link>
                <UserButton />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ColorModeToggler />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-50"
            >
              {menuOpen ? (
                <X
                  className="h-6 w-6"
                  style={{ minWidth: '24px', minHeight: '24px' }}
                />
              ) : (
                <Menu
                  className="h-6 w-6"
                  style={{ minWidth: '24px', minHeight: '24px' }}
                />
              )}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 w-full h-screen bg-background/95 backdrop-blur-xl transition-all duration-300 ease-in-out transform ${
              menuOpen
                ? 'translate-y-0 opacity-100 z-40 pt-20 px-4'
                : '-translate-y-full opacity-0 -z-10'
            } md:hidden`}
          >
            <div className="flex flex-col items-center gap-8 text-xl font-medium">
              <Link
                href="/pricing"
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 border-b border-border/20 text-center hover:text-primary transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 border-b border-border/20 text-center hover:text-primary transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full py-4 border-b border-border/20 text-center hover:text-primary transition-colors"
              >
                Contact
              </Link>

              <div className="w-full flex flex-col gap-4 pt-8">
                <Button
                  className="cursor-pointer text-md font-semibold border-2 border-dashed border-white rounded-full py-6 bg-[var(--color-accent)] text-white hover:scale-110 transition-transform"
                  onClick={() =>
                    window.open('https://calendly.com/mr-smeett/darmowa-lekcja')
                  }
                >
                  Darmowa lekcja próbna
                </Button>
                <SignedOut>
                  <SignInButton>
                    <Button
                      variant="outline"
                      className="w-full cursor-pointer text-md rounded-full py-6 border-2 text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      Zaloguj się
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      className="w-full cursor-pointer text-md border-2 border-[var(--color-accent)] rounded-full py-6 bg-[var(--color-accent)] text-white text-lg"
                      onClick={() => setMenuOpen(false)}
                    >
                      Zarejestruj się
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Link
                    href="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="w-full py-4 text-center hover:text-primary transition-colors text-lg flex justify-center items-center gap-2"
                  >
                    Dashboard <ArrowRight className="ml-3" />
                  </Link>
                  <div className="flex justify-center py-4">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[var(--color-accent)] text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
          aria-label="Na górę"
        >
          <ArrowBigUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
