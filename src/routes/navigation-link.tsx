import React from 'react'

import { Image } from '@/components/image'
import { isValidString } from '@/helpers/strings'
import { getReactAriaClassName } from '@/lib/react-aria'
import { InternalLink, type InternalLinkProps } from '@/routes/internal-link'
import type { NavigationItem } from '@/routes/navigation'

import './navigation-link.styles.sass'

type NavigationLinkProps = Omit<InternalLinkProps, 'href'> & {
  item: NavigationItem
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ className, item, ...props }) => {
  const label = item.label

  if (!isValidString(label)) {
    return null
  }

  const labelCharacterHalfCount = Math.round(label.length / 2)
  const labelFirstSlice = label.slice(0, labelCharacterHalfCount)
  const labelSecondSlice = label.slice(labelCharacterHalfCount)

  return (
    <InternalLink
      {...props}
      className={(values) => getReactAriaClassName(values, className, 'navigation-link')}
      href={item.href}
    >
      <span>{labelFirstSlice}</span>

      <div className='navigation-link__image-wrapper'>
        <Image
          alt={label}
          src={item.image}
        />
      </div>

      <span>{labelSecondSlice}</span>
    </InternalLink>
  )
}
