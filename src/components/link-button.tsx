'use client'

import React from 'react'
import { Link, type LinkRenderProps } from 'react-aria-components'

import { FlipReveal, type FlipRevealProps } from '@/animations/flip-reveal'
import type { BaseButtonProps, ButtonIconSide, ButtonVariant } from '@/components/button'
import type { LinkProps } from '@/components/link'
import { classNames } from '@/helpers/styles'
import { getReactAriaClassName } from '@/lib/react-aria'

import './link-button.styles.sass'

type FilteredButtonProps = Omit<BaseButtonProps, 'variant'>

type LinkButtonProps = FlipRevealProps & FilteredButtonProps & LinkProps & {
  variant?: ButtonVariant
}

const getLinkButtonClassName = (
  values: LinkRenderProps & { defaultClassName: string | undefined },
  className: LinkProps['className'],
  iconSide: ButtonIconSide,
  variant?: ButtonVariant,
  size?: 'icon',
  Icon?: React.ReactNode
) => {
  const buttonBaseClassName = classNames(
    'link-button',
    Icon !== undefined && `icon-${iconSide}`,
    size !== undefined && 'icon-size',
    variant === undefined ? 'simple-link' : variant
  )

  return getReactAriaClassName(values, className, buttonBaseClassName)
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  className,
  fontSize = 'var(--font-size-m, 16px)',
  Icon,
  iconSide = 'left',
  size,
  variant,
  ...props
}) => {
  const [isLinkHovered, setIsLinkHovered] = React.useState<boolean>(false)

  return (
    <Link
      {...props}
      className={(values) => getLinkButtonClassName(values, className, iconSide, variant, size, Icon)}
      onHoverEnd={() => setIsLinkHovered(false)}
      onHoverStart={() => setIsLinkHovered(true)}
    >
      <>
        {Icon}

        <FlipReveal fontSize={fontSize} isActive={isLinkHovered}>
          {children}
        </FlipReveal>
      </>
    </Link>
  )
}
