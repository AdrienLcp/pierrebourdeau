'use client'

import React from 'react'
import { ListBox } from 'react-aria-components'

import { ListItem } from '@/components/list'
import { LogoTitle } from '@/components/logo'
import type { ValueOf } from '@/helpers/types'
import { useI18n } from '@/i18n/client'
import { BehanceIcon, DribbbleIcon, InstagramIcon, LinkedinIcon, type IconProps } from '@/icons'
import { METADATA } from '@/metadata'

import './socials.styles.sass'

type Social = {
  href: ValueOf<typeof METADATA.socials>
  Icon: React.FC<IconProps>
  key: 'behance' | 'dribbble' | 'instagram' | 'linkedin'
  label: string
}

export const Socials: React.FC = () => {
  const { i18n } = useI18n()

  const socials: Social[] = [
    {
      href: METADATA.socials.linkedin,
      Icon: LinkedinIcon,
      key: 'linkedin',
      label: i18n('contact.socials.linkedIn')
    },
    {
      href: METADATA.socials.dribbble,
      Icon: DribbbleIcon,
      key: 'dribbble',
      label: i18n('contact.socials.dribbble')
    },
    {
      href: METADATA.socials.behance,
      Icon: BehanceIcon,
      key: 'behance',
      label: i18n('contact.socials.behance')
    },
    {
      href: METADATA.socials.instagram,
      Icon: InstagramIcon,
      key: 'instagram',
      label: i18n('contact.socials.instagram')
    }
  ]

  return (
    <div className='socials'>
      <LogoTitle className='socials__logo' />

      <ListBox
        aria-label={i18n('contact.socials.aria-label')}
        className='socials__list'
        items={socials}
      >
        {({ href, Icon, key, label }) => (
          <ListItem
            aria-label={label}
            className='socials__list__link'
            href={href}
            key={key}
            target='_blank'
          >
            <Icon color='var(--neutral-foreground-inverted-rest, #FCFFFD)' />
          </ListItem>
        )}
      </ListBox>

      <div className='socials__footer'>
        &#169; 2022 {METADATA.name} • {i18n('app.footer.therms-of-use')}
      </div>
    </div>
  )
}
