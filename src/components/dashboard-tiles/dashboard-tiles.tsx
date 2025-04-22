import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface DashboardTileProps {
  title: string
  icon: LucideIcon
  href: string
  className?: string
}

export function DashboardTile({
  title,
  icon: Icon,
  href,
  className,
}: DashboardTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        'w-full max-w-[200px] rounded-2xl p-10 bg-white/10 backdrop-blur-lg shadow-md border border-white/20 hover:scale-105 transition-transform cursor-pointer bg-gradient-to-br from-[#eef2ff]/40 to-[#fef3c7]/30 flex flex-col',
        className
      )}
    >
      <Icon className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/80 shadow-sm mb-4 text-muted" />
      <span className="text-md font-semibold text-muted">{title}</span>
    </Link>
  )
}
