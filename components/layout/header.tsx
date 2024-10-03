import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle'
import { cn } from '@/lib/utils'
import { MobileSidebar } from './mobile-sidebar'
import { UserNav } from './user-nav'
import Logo from '@/shared/Logo/Logo'
import { MainNav } from '@/app/admin/components/top-nav'
import { Search } from '@/app/admin/components/search'

export default function Header() {
  return (
    <div>
      <MainNav />
      <div className="ml-auto flex items-center space-x-4">
        <Search />
        <ThemeToggle />
      </div>
    </div>
    // <header className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
    //   <nav className="h-14 flex items-center justify-between px-4">
    //     <div className="hidden lg:block">
    //       <Logo />
    //     </div>
    //     <div className={cn('block lg:!hidden')}>
    //       <MobileSidebar />
    //     </div>

    //     <div className="flex items-center gap-2">
    //       <UserNav />
    //       <ThemeToggle />
    //     </div>
    //   </nav>
    // </header>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: 'dashboard/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: 'dashboard/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: 'dashboard/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: 'dashboard/settings',
    isActive: false,
  },
]
