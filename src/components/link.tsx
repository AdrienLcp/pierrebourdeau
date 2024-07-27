'use client'

import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import React from 'react'

import { DEFAULT_LOCALE, getValidLocale } from '@/i18n'
import type { RoutePath } from '@/routes'
import { useParams } from 'next/navigation'

const getHrefWithLocale = (params: Record<string, string | string[]>, path: RoutePath) => {
  const locale = getValidLocale(params?.locale)
  return locale === DEFAULT_LOCALE
    ? `${path}`
    : `/${locale}${path}`
}

type LinkProps = NextLinkProps & {
  children?: React.ReactNode
  className?: string
  href: RoutePath
}

export const Link: React.FC<LinkProps> = ({ children, href, ...props }) => {
  const params = useParams()
  const currentHref = getHrefWithLocale(params, href)

  return (
    <NextLink
      {...props}
      href={currentHref}
    >
      {children}
    </NextLink>
  )
}
