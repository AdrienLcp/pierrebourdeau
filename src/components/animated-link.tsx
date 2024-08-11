'use client'

import Link from 'next/link'
import React from 'react'

import { FlipReveal, type FlipRevealProps } from '@/animations/flip-reveal'
import { classNames } from '@/helpers/styles'

import './animated-link.styles.sass'

type AnimatedLinkProps = FlipRevealProps & {
  className?: string
  href: string
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
      className={classNames('animated-link', className)}
      href={href}
      style={linkStyle}
    >
      <FlipReveal color={color} fontSize={fontSize}>
        {label}
      </FlipReveal>
    </Link>
  )
}
