'use client'

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
  return (
    <div
      className={cn(
        'min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/5',
        inter.className
      )}
    >
      <Topbar />
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}
