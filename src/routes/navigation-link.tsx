import React from 'react'

import { Image } from '@/components/image'
import { isValidString } from '@/helpers/strings'
import type { NavigationItem } from '@/routes/navigation'

import './navigation-link.styles.sass'

type NavigationLinkProps = {
  item: NavigationItem
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({ item }) => {
  const label = item.label

  if (!isValidString(label)) {
    return null
  }

  const labelCharacterHalfCount = Math.round(label.length / 2)
  const labelFirstSlice = label.slice(0, labelCharacterHalfCount)
  const labelSecondSlice = label.slice(labelCharacterHalfCount)

  return (
    <div className='navigation-link'>
      <span>{labelFirstSlice}</span>

      <div className='navigation-link__image-wrapper'>
        <Image
          alt={label}
          src={item.image}
        />
      </div>

      <span>{labelSecondSlice}</span>
    </div>
  )
}
