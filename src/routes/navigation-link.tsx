import React from 'react'

import { InternalLink } from '@/routes/internal-link'
import type { NavigationItem } from '@/routes/navigation'

import './navigation-link.styles.sass'

type NavigationLinkProps = {
  item: NavigationItem
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ item }) => (
  <InternalLink className='navigation-link' href={item.href}>
    {item.label}
  </InternalLink>
)
