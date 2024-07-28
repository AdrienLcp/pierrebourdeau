'use client'

import React from 'react'

import { Link } from '@/components/link'
import { useI18n } from '@/i18n/client'

const CONTACT_EMAIL = 'contact@pierrebourdeau.com'

export const Mailto: React.FC = () => {
  const { i18n } = useI18n()

  return (
    <Link href={`mailto:${CONTACT_EMAIL}`}>
      {i18n('contact.work-with-me')}
    </Link>
  )
}
