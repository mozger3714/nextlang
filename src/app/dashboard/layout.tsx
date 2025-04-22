import { Sidebar } from '@/components/sidebar/sidebar'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  //   const user = await currentUser();

  return (
    <div className={cn('flex min-h-screen bg-gray-50', inter.className)}>
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
