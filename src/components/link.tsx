'use client'

import React from 'react'
import { Link as ReactAriaLink, type LinkProps as ReactAriaLinkProps } from 'react-aria-components'

import { getHrefWithLocale, useI18n } from '@/i18n/client'
import { getReactAriaClassName } from '@/lib/react-aria'
import { isInternalRoute } from '@/routes'

import './link.styles.sass'

export type LinkProps = ReactAriaLinkProps

export const Link: React.FC<LinkProps> = ({ children, className, href, ...props }) => {
  const { currentLocale } = useI18n()

  const validHref = isInternalRoute(href)
    ? getHrefWithLocale(href, currentLocale)
    : href

  return (
    <ReactAriaLink
      {...props}
      className={(values) => getReactAriaClassName(values, className, 'link')}
      href={validHref}
    >
      {children}
    </ReactAriaLink>
  )
}
