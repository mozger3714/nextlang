'use client'

import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const links = [
  { href: '/dashboard', label: 'Home' },
  { href: '/dashboard/schedule', label: 'Schedule' },
  { href: '/dashboard/resources', label: 'Resources' },
  { href: '/dashboard/billing', label: 'Billing' },
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md p-4 flex flex-col gap-4">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-black hover:font-medium"
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto">
        <UserButton />
      </div>
    </aside>
  )
}
