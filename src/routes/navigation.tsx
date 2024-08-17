'use client'

import React from 'react'

import type { ImageSrc } from '@/components/image'
import { useI18n } from '@/i18n/client'
import { ROUTES, type RouteKey, type RoutePath } from '@/routes'
import { NavigationLink } from '@/routes/navigation-link'

import './navigation.styles.sass'

export type NavigationItem = {
  key: RouteKey
  href: RoutePath
  image: ImageSrc
  label: string
}

type NavigationProps = {
  onLinkClick?: () => void
}

export const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const { i18n } = useI18n()

  const navigationItems: NavigationItem[] = [
    {
      key: 'work',
      href: ROUTES.work,
      image: '',
      label: i18n('routes.work')
    },
    {
      key: 'services',
      href: ROUTES.services,
      image: '',
      label: i18n('routes.services')
    },
    {
      key: 'playground',
      href: ROUTES.playground,
      image: '',
      label: i18n('routes.playground')
    },
    {
      key: 'about',
      href: ROUTES.about,
      image: '',
      label: i18n('routes.about')
    }
  ]

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        {navigationItems.map((navigationItem) => (
          <li key={navigationItem.key}>
            <NavigationLink item={navigationItem} onClick={onLinkClick} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
