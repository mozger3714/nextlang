import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold tracking-tight">
        Welcome, {user?.firstName}!
      </h1>
      <p className="text-muted-foreground">
        Your email: {user?.emailAddresses?.[0]?.emailAddress}
      </p>
    </div>
  )
}
