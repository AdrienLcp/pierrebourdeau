'use client'

import React from 'react'

import { Link } from '@/components/link'
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
        <Link
          className='contact__footer__link'
          href={`mailto:${METADATA.email}`}
        >
          {METADATA.email}
        </Link>

        <Link
          className='contact__footer__link'
          href={`tel:${METADATA.phone.href}`}
        >
          {METADATA.phone.formatted}
        </Link>
      </div>
    </div>
  )
}
