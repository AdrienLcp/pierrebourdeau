'use client'

import React from 'react'
import { Link as ReactAriaLink, type LinkProps as ReactAriaLinkProps } from 'react-aria-components'

import { getReactAriaClassName } from '@/lib/react-aria'

import './link.styles.sass'

export type LinkProps = ReactAriaLinkProps

export const Link: React.FC<LinkProps> = ({ children, className, ...props }) => (
  <ReactAriaLink
    {...props}
    className={(values) => getReactAriaClassName(values, className, 'link')}
  >
    {children}
  </ReactAriaLink>
)
