import { DashboardTile } from '@/components/dashboard-tiles/dashboard-tiles'
import { auth, currentUser } from '@clerk/nextjs/server'
import { LayoutDashboard, Users, Zap } from 'lucide-react'

import Image from 'next/image'
export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div className="space-y-4 flex flex-col items-center h-full">
      <Image
        src={user?.hasImage ? user?.imageUrl : '/default-profile-picture.webp'}
        alt={user?.fullName ?? 'User profile image'}
        width={64}
        height={64}
        className="rounded-full border border-muted shadow-md ring-2 ring-muted-foreground/10"
      />
      <h1 className="text-2xl font-semibold text-muted">
        Welcome, {user?.firstName}!
      </h1>
      <p className="text-muted-foreground">
        Your email: {user?.emailAddresses?.[0]?.emailAddress}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <DashboardTile
          title="Templates"
          icon={LayoutDashboard}
          href="/dashboard/templates"
        />
        <DashboardTile title="Agents" icon={Users} href="/dashboard/agents" />
        <DashboardTile
          title="Capabilities"
          icon={Zap}
          href="/dashboard/capabilities"
        />
      </div>
    </div>
  )
}
