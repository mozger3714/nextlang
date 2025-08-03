'use client'

import Link from 'next/link'
import ColorModeToggler from '../color-mode-toggler/color-mode-toggler'

import {
  BookOpen,
  Calendar,
  CreditCard,
  LayoutDashboard,
  Settings,
} from 'lucide-react'

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/schedule', label: 'Harmonogram', icon: Calendar },
  { href: '/dashboard/resources', label: 'Materiały', icon: BookOpen },
  { href: '/dashboard/billing', label: 'Płatności', icon: CreditCard },
  { href: '/dashboard/settings', label: 'Ustawienia', icon: Settings },
]
export function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 bg-background border-r border-border/30 p-4 flex flex-col justify-between">
      <h2 className="text-lg font-bold pb-6 pl-2">Panel użytkownika</h2>
      <nav className="flex-1 flex flex-col gap-1">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-muted/50 hover:text-primary bg-white-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            >
              <Icon className="h-5 w-5" />
              <span>{link.label}</span>
            </Link>
          )
        })}
      </nav>
      <div className="mt-auto pt-6 border-t border-border">
        <ColorModeToggler />
      </div>
    </aside>
  )
}
