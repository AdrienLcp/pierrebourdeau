'use client'

import React from 'react'

import { ROUTES, type RouteKey, type RoutePath } from '@/routes'
import type { I18n } from '@/i18n'
import { useI18n } from '@/i18n/client'
import { NavigationLink } from '@/routes/navigation-link'

import './navigation.styles.sass'

export type NavigationItem = {
  key: RouteKey
  href: RoutePath
  label: string
}

const getNavigationItems = (i18n: I18n): NavigationItem[] => ([
  {
    key: 'work',
    href: ROUTES.work,
    label: i18n('routes.work')
  },
  {
    key: 'services',
    href: ROUTES.services,
    label: i18n('routes.services')
  },
  {
    key: 'playground',
    href: ROUTES.playground,
    label: i18n('routes.playground')
  },
  {
    key: 'about',
    href: ROUTES.about,
    label: i18n('routes.about')
  }
])

export const Navigation: React.FC = () => {
  const { i18n } = useI18n()
  const navigationItems = getNavigationItems(i18n)

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.key}>
            <NavigationLink item={navigationItem} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
