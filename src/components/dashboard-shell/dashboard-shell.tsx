'use client'

import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Topbar } from '../dashboard-topbar/topbar'
import { Sidebar } from '../sidebar/sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'dark' | 'light' | null
    const initial = saved || 'dark'
    setTheme(initial)
    document.documentElement.classList.toggle('dark', initial === 'dark')
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    localStorage.setItem('theme', next)
    document.documentElement.classList.toggle('dark', next === 'dark')
  }

  return (
    <div className={cn('min-h-screen flex flex-col', inter.className)}>
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar toggleTheme={toggleTheme} />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  )
}
