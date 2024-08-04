'use client'

import { useParams } from 'next/navigation'
import React from 'react'

import { Link, type LinkProps } from '@/components/link'
import { DEFAULT_LOCALE, getValidLocale } from '@/i18n'
import type { RoutePath } from '@/routes'

const getHrefWithLocale = (params: Record<string, string | string[]>, path: RoutePath) => {
  const locale = getValidLocale(params?.locale)
  return locale === DEFAULT_LOCALE
    ? `${path}`
    : `/${locale}${path}`
}

// Override base href type to accept only RoutePath
export type InternalLinkProps = Omit<LinkProps, 'href'> & {
  href: RoutePath
}

export const InternalLink: React.FC<InternalLinkProps> = ({ children, href, ...props }) => {
  const params = useParams()
  const currentHref = getHrefWithLocale(params, href)

  return (
    <Link {...props} href={currentHref}>
      {children}
    </Link>
  )
}
