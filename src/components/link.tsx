'use client'

import NextLink from 'next/link'
import React from 'react'

import { classNames } from '@/helpers/styles'

import './link.styles.sass'

export type LinkProps = React.ComponentProps<typeof NextLink> & {
  children?: React.ReactNode
  className?: string
}

export const Link: React.FC<LinkProps> = ({ children, className, ...props }) => (
  <NextLink
    {...props}
    className={classNames('link', className)}
  >
    {children}
  </NextLink>
)
