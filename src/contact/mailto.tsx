'use client'

import React from 'react'

import type { LinkProps } from '@/components/link'
import { useI18n } from '@/i18n/client'
import { METADATA } from '@/metadata'
import { AnimatedLink } from '@/components/animated-link'

type MailtoProps = Omit<LinkProps, 'href'>

export const Mailto: React.FC<MailtoProps> = ({ ...props }) => {
  const { i18n } = useI18n()

  return (
    <AnimatedLink
      {...props}
      color='var(--neutral-foreground-inverted-rest, #FCFFFD)'
      href={`mailto:${METADATA.email}`}
      label={i18n('contact.work-with-me')}
    />
  )
}
