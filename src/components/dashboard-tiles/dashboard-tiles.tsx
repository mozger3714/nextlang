import { cn } from '@/lib/utils'
import { ArrowRight, LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface DashboardTileProps {
  title: string
  icon: LucideIcon
  href: string
  className?: string
  color?: string
  bgColor?: string
}

export function DashboardTile({
  title,
  icon: Icon,
  href,
  className,
  color = 'text-primary',
  bgColor = 'bg-primary/10',
}: DashboardTileProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative overflow-hidden rounded-xl p-6 border shadow-sm transition-all',
        'hover:shadow-md hover:-translate-y-1 hover:border-primary/30',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        'bg-background hover:bg-background/80',
        className
      )}
    >
      <div className="flex flex-col space-y-4">
        <div
          className={cn(
            'flex items-center justify-center w-12 h-12 rounded-lg',
            bgColor,
            color
          )}
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="space-y-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">Przejdź do sekcji</p>
        </div>
      </div>

      <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight className="h-4 w-4 text-muted-foreground" />
      </div>
    </Link>
  )
}
