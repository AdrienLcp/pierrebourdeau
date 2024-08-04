import React from 'react'

import { classNames } from '@/helpers/styles'
import { InternalLink, type InternalLinkProps } from '@/routes/internal-link'
import type { NavigationItem } from '@/routes/navigation'

import './navigation-link.styles.sass'

type NavigationLinkProps = Omit<InternalLinkProps, 'href'> & {
  item: NavigationItem
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ className, item, ...props }) => (
  <InternalLink
    {...props}
    className={classNames('navigation-link', className)}
    href={item.href}
  >
    {item.label}
  </InternalLink>
)
