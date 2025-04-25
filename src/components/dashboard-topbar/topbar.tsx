import { UserButton } from '@clerk/nextjs'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export function Topbar() {
  return (
    <header className="flex items-center justify-between p-4 h-16 border-b border-border relative z-50 w-full">
      <Link
        href="/"
        className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-[var(--color-accent)] transition"
      >
        <ArrowLeft /> Back to Home page
      </Link>
      <Image src="/_nextLang.svg" alt="NextLang logo" width={140} height={35} />
      <UserButton />
    </header>
  )
}
