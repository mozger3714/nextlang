import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
// import { Sidebar } from "@/components/sidebar";

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
    <div className="flex min-h-screen">
      {/* <Sidebar user={user} /> */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}
