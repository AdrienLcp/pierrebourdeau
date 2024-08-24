'use client'

import React from 'react'
import { Link } from 'react-aria-components'

import { FlipReveal, type FlipRevealProps } from '@/animations/flip-reveal'
import type { LinkProps } from '@/components/link'
import { getReactAriaClassName } from '@/lib/react-aria'

import './animated-link.styles.sass'

type AnimatedLinkProps = FlipRevealProps & {
  className?: LinkProps['className']
  href: LinkProps['href']
  label: string
}

export const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  className,
  color = 'var(--neutral-foreground-primary-rest, #171716)',
  fontSize = 'var(--font-size-m, 16px)',
  href,
  label
}) => {
  const linkStyle: Record<string, string> = {
    '--animated-link-color': color,
    '--animated-link-font-size': fontSize
  }

  return (
    <Link
      className={(values) => getReactAriaClassName(values, className, 'animated-link')}
      href={href}
      style={linkStyle}
    >
      <FlipReveal color={color} fontSize={fontSize}>
        {label}
      </FlipReveal>
    </Link>
  )
}
