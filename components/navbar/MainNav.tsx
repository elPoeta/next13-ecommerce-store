'use client'

import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Category } from '@/types/storeModelTypes'
interface MainNavProps {
  data: Category[]
}

const MainNav: FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname()
  const routes = data.map(route => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathName === `/category/${route.id}`
  }))
  return (
    <nav className='flex items-center mx-6 space-x-4 lg:space-x6'>
      {routes.map(route => (
        <Link
          key={route.href}
          href={route.href}
          className={cn('text-sm font-medium transition-colors hover:text-primary', route.active ? 'text-primary' : 'text-muted-foreground')}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  )
}

export default MainNav