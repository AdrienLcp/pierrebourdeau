'use client'

import NextLink from 'next/link'
import React from 'react'

import { classNames } from '@/helpers/styles'

import './link.styles.sass'

// Override default href prop type to allow mailto links
type BaseLinkProps = Omit<React.ComponentProps<typeof NextLink>, 'href'>

export type LinkProps = BaseLinkProps & {
  children?: React.ReactNode
  className?: string
  href: string
}

export const Link: React.FC<LinkProps> = ({ children, className, href, ...props }) => (
  <NextLink
    {...props}
    className={classNames('link', className)}
    href={href}
  >
    {children}
  </NextLink>
)
