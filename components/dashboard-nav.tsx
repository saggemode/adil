// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from 'react'
// import { ChevronDownIcon, ChevronRightIcon } from 'lucide-react'
// import { Icons } from "@/components/icons";
// import { cn } from "@/lib/utils";
// import { Dispatch, SetStateAction } from "react";
// import { NavItem } from "@/types";

// interface DashboardNavProps {
//   items: NavItem[];
//   setOpen?: Dispatch<SetStateAction<boolean>>;
// }

// export function DashboardNav({ items, setOpen }: DashboardNavProps) {
//   const path = usePathname();

//    const [openIndexes, setOpenIndexes] = useState<number[]>([])

//    const toggleOpen = (index: number) => {
//      if (openIndexes.includes(index)) {
//        setOpenIndexes(openIndexes.filter((i) => i !== index))
//      } else {
//        setOpenIndexes([...openIndexes, index])
//      }
//    }

//   if (!items?.length) {
//     return null;
//   }

//   return (
    
//     <nav className="grid items-start gap-2 h-full overflow-y-auto">
//       {items.map((item, index) => {
//         const Icon = Icons[item.icon || 'arrowRight']
//         const isActive = path === item.href

//         return (
//           item.href && (
//             <Link
//               key={index}
//               href={item.disabled ? '/' : item.href}
//               onClick={() => {
//                 if (setOpen) setOpen(false)
//               }}
//               className={cn(
//                 'group relative flex items-center rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
//                 isActive
//                   ? 'bg-accent text-accent-foreground'
//                   : 'hover:bg-accent hover:text-accent-foreground',
//                 item.disabled && 'cursor-not-allowed opacity-80'
//               )}
//             >
//               {/* Active Indicator */}
//               {isActive && (
//                 <span className="absolute left-0 top-0 h-full w-1 bg-accent-foreground rounded"></span>
//               )}
//               <Icon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
//               <span className="relative">
//                 {item.title}
//                 {/* Tooltip */}
//                 <span className="absolute left-full ml-2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                   {item.title}
//                 </span>
//               </span>
//             </Link>
//           )
//         )
//       })}
//     </nav>
//   )
// }

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { NavItem } from '@/types'
import { Dispatch, SetStateAction } from 'react'
import { useSidebar } from '@/hooks/useSidebar'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip'

interface DashboardNavProps {
  items: NavItem[]
  setOpen?: Dispatch<SetStateAction<boolean>>
  isMobileNav?: boolean
}

export function DashboardNav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const path = usePathname()
  const { isMinimized } = useSidebar()

  if (!items?.length) {
    return null
  }

  console.log('isActive', isMobileNav, isMinimized)

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || 'arrowRight']
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.disabled ? '/' : item.href}
                    className={cn(
                      'flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
                      path === item.href ? 'bg-accent' : 'transparent',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false)
                    }}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ''
                    )}
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? 'hidden' : 'inline-block'}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          )
        })}
      </TooltipProvider>
    </nav>
  )
}