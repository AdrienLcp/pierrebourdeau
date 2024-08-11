'use client'

import React from 'react'

import { AnimatedLink } from '@/components/animated-link'
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
        <AnimatedLink
          color='var(--neutral-foreground-inverted-rest, #FCFFFD)'
          href={`mailto:${METADATA.email}`}
          label={METADATA.email}
        />

        <AnimatedLink
          color='var(--neutral-foreground-inverted-rest, #FCFFFD)'
          href={`tel:${METADATA.phone.href}`}
          label={METADATA.phone.formatted}
        />
      </div>
    </div>
  )
}
