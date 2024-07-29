'use client'

import React from 'react'

import { Link } from '@/components/link'
import { LogoTitle } from '@/components/logo'
import { useI18n } from '@/i18n/client'
import type { BaseIconProps } from '@/icons'
import { AddIcon } from '@/icons/add'
import { METADATA } from '@/metadata'

import './socials.styles.sass'

type Social = {
  href: string
  Icon: React.FC<BaseIconProps>
  key: 'instagram' | 'linkedin'
  label: string
}

const SOCIALS: Social[] = [
  {
    href: METADATA.socials.instagram,
    Icon: AddIcon,
    key: 'instagram',
    label: 'Instagram'
  },
  {
    href: METADATA.socials.linkedin,
    Icon: AddIcon,
    key: 'linkedin',
    label: 'Linkedin'
  }
]

export const Socials: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='socials'>
      <LogoTitle />

      <ul className='socials__list'>
        {SOCIALS.map(({ href, Icon, key, label }) => (
          <li key={key}>
            <Link
              aria-label={label}
              className='socials__list__link'
              href={href}
            >
              <Icon />
            </Link>
          </li>
        ))}
      </ul>

      <div className='socials__footer'>
        &#169; 2022 {METADATA.name} • {i18n('app.footer.legal-mention')} • {i18n('app.footer.site-map')}
      </div>
    </div>
  )
}
