'use client'

import React from 'react'

import { Link } from '@/components/link'
import { useI18n } from '@/i18n/client'
import { METADATA } from '@/metadata'

export const Mailto: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Link href={`mailto:${METADATA.email}`}>
      {i18n('contact.work-with-me')}
    </Link>
  )
}
