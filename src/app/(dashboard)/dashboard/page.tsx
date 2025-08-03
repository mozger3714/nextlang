import { DashboardTile } from '@/components/dashboard-tiles/dashboard-tiles'
import { auth, currentUser } from '@clerk/nextjs/server'
import {
  AlertCircle,
  BookOpen,
  Calendar,
  CreditCard,
  LifeBuoy,
} from 'lucide-react'

import Image from 'next/image'
export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div className="space-y-8 flex flex-col items-center h-full">
      {/* User Profile Section */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Image
            src={
              user?.hasImage ? user?.imageUrl : '/default-profile-picture.webp'
            }
            alt={user?.fullName ?? 'User profile image'}
            width={96}
            height={96}
            className="rounded-full border-2 border-primary/20 shadow-lg ring-4 ring-primary/10"
          />
        </div>

        <div className="text-center space-y-1">
          <h1 className="text-3xl font-bold text-foreground">
            Witamy, <span className="text-primary">{user?.firstName}</span>!
          </h1>
          <p className="text-muted-foreground">
            {user?.emailAddresses?.[0]?.emailAddress}
          </p>
        </div>

        <div className="bg-muted/50 px-6 pt-3 rounded-full flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-yellow-600" />

          <span className="font-medium text-md">
            Status subskrypcji:{' '}
            <span className="text-yellow-600">Brak aktywnej subskrypcji</span>
          </span>
        </div>
        <p className="block text-sm text-muted-foreground">
          Żeby uzyskać dostęp do kursu ponow subskrypcję lub skontaktuj się z
          administratorem.
        </p>
      </div>

      {/* Dashboard Tiles */}
      <div className="w-full">
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Twoje narzędzia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardTile
            title="Harmonogram zajęć"
            icon={Calendar}
            href="/dashboard/schedule"
            color="text-blue-600"
            bgColor="bg-blue-100"
          />
          <DashboardTile
            title="Materiały"
            icon={BookOpen}
            href="/dashboard/resources"
            color="text-emerald-600"
            bgColor="bg-emerald-100"
          />
          <DashboardTile
            title="Płatności"
            icon={CreditCard}
            href="/dashboard/billing"
            color="text-purple-600"
            bgColor="bg-purple-100"
          />
          {/* <DashboardTile
            title="Ustawienia"
            icon={Settings}
            href="/dashboard/settings"
            color="text-gray-600"
            bgColor="bg-gray-100"
          /> */}
          <DashboardTile
            title="Wsparcie"
            icon={LifeBuoy}
            href="/dashboard/support"
            color="text-amber-600"
            bgColor="bg-amber-100"
          />
          {/* <DashboardTile
            title="Postępy"
            icon={BarChart2}
            href="/dashboard/progress"
            color="text-rose-600"
            bgColor="bg-rose-100"
          /> */}
        </div>
      </div>
    </div>
  )
}
