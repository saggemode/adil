import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import type { Metadata } from 'next'
import { auth } from '@/auth'
import { APP_NAME } from '@/constants/constant'
import { cn } from '@/lib/utils'
import { Layout } from './components/layout'
import { MainNav } from './components/top-nav'

export const metadata: Metadata = {
  title: `Admin Dashboard - ${APP_NAME}`,
}

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  if ((session?.user.role as string) !== 'ADMIN') {
    return (
      <div className="relative flex flex-grow p-4 justify-center items-center pt-24">
        <div className="text-center">
          <h1 className="text-2xl">Unauthorized</h1>
          <p>Admin permission required</p>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Layout.Header>
        <MainNav />

      </Layout.Header>
    </Layout>
    // <div>
    //   <div className={cn(`h-full overflow-auto `)}>
    //     <div
    //       className={cn(
    //         `z-10 flex h-[var(--header-height)] items-center gap-4 bg-background p-4 md:px-8`
    //       )}
    //     >
    //       <Header />
    //     </div>
    //   </div>

    //   <div className="flex h-screen overflow-hidden">
    //     <Sidebar />
    //     <main className={cn('px-4 py-6 md:overflow-hidden md:px-8')}>
    //       {children}
    //     </main>
    //   </div>
    // </div>
  )
}
