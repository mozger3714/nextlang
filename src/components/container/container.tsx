import { cn } from '@/lib/utils'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn('container mx-auto w-full px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </div>
  )
}
