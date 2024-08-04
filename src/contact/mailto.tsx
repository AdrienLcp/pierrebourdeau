'use client'

import React from 'react'

import { Link, type LinkProps } from '@/components/link'
import { useI18n } from '@/i18n/client'
import { METADATA } from '@/metadata'

type MailtoProps = Omit<LinkProps, 'href'>

export const Mailto: React.FC<MailtoProps> = ({ ...props }) => {
  const { i18n } = useI18n()

  return (
    <Link {...props} href={`mailto:${METADATA.email}`}>
      {i18n('contact.work-with-me')}
    </Link>
  )
}
