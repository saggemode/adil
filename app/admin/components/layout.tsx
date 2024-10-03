"use client"

import * as React from 'react'
import { cn } from '@/lib/utils'

interface LayoutProps {
  className?: string
  fixed?: boolean
  children: React.ReactNode
}

const Layout = ({ className, fixed = false, ...props }: LayoutProps) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const div = divRef.current

    if (!div) return
    const onScroll = () => setOffset(div.scrollTop)

    // clean up code
    div.removeEventListener('scroll', onScroll)
    div.addEventListener('scroll', onScroll, { passive: true })
    return () => div.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={divRef}
      data-layout="layout"
      className={cn(
        'h-full overflow-auto',
        fixed && 'flex flex-col',
        className
      )}
      {...props}
    >
      {React.cloneElement(props.children as React.ReactElement, {
        offset,
        fixed,
      })}
    </div>
  )
}
Layout.displayName = 'Layout'

interface HeaderProps {
  className?: string
  sticky?: boolean
  offset?: number
  fixed?: boolean
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, sticky, offset = 0, fixed = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-layout="header"
        className={cn(
          `z-10 flex h-[var(--header-height)] items-center gap-4 bg-background p-4 md:px-8`,
          offset > 10 && sticky ? 'shadow' : 'shadow-none',
          fixed && 'flex-none',
          sticky && 'sticky top-0',
          className
        )}
        {...props}
      />
    )
  }
)
Header.displayName = 'Header'

interface BodyProps {
  className?: string
  fixed?: boolean
}

const Body = React.forwardRef<HTMLDivElement, BodyProps>(
  ({ className, fixed = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-layout="body"
        className={cn(
          'px-4 py-6 md:overflow-hidden md:px-8',
          fixed && 'flex-1',
          className
        )}
        {...props}
      />
    )
  }
)
Body.displayName = 'Body'

Layout.Header = Header
Layout.Body = Body

export { Layout }
