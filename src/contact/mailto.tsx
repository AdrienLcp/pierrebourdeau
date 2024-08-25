'use client'

import React from 'react'

import type { LinkProps } from '@/components/link'
import { useI18n } from '@/i18n/client'
import { METADATA } from '@/metadata'
import { LinkButton } from '@/components/link-button'

type MailtoProps = Omit<LinkProps, 'children' | 'href'>

export const Mailto: React.FC<MailtoProps> = ({ ...props }) => {
  const { i18n } = useI18n()

  return (
    <LinkButton
      {...props}
      href={`mailto:${METADATA.email}`}
    >
      {i18n('contact.work-with-me')}
    </LinkButton>
  )
}
