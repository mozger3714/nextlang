'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard/schedule', label: 'Schedule' },
  { href: '/dashboard/resources', label: 'Resources' },
  { href: '/dashboard/billing', label: 'Billing' },
]

export function Sidebar({ toggleTheme }: { toggleTheme: () => void }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    setTheme(stored || 'dark')
  }, [])
  return (
    <aside className="w-64 bg-white dark:bg-[#1c1c2e] text-black dark:text-white shadow-md p-4 flex flex-col justify-between">
      <h2 className="text-lg font-bold pb-3">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-primary py-4 hover:text-primary p-2 transition-colors duration-300 smooth-underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto pt-6 border-t border-border">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            toggleTheme()
            setTheme(theme === 'dark' ? 'light' : 'dark')
          }}
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </Button>
      </div>
    </aside>
  )
}
