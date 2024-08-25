'use client'

import React from 'react'

import { LinkButton } from '@/components/link-button'
import { useI18n } from '@/i18n/client'
import { METADATA } from '@/metadata'

import './contact.styles.sass'

export const Contact: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <div className='contact'>
      <p className='contact__message'>
        {i18n('contact.tea-over-coffee')}
      </p>

      <div className='contact__footer'>
        <LinkButton href={`mailto:${METADATA.email}`}>
          {METADATA.email}
        </LinkButton>

        <LinkButton href={`tel:${METADATA.phone.href}`}>
          {METADATA.phone.formatted}
        </LinkButton>
      </div>
    </div>
  )
}
