'use client'

import React from 'react'
import type { ButtonRenderProps } from 'react-aria-components'

import { FlipReveal } from '@/animations/flip-reveal'
import { Pressable, type PressableProps } from '@/components/pressable'
import { classNames } from '@/helpers/styles'
import { getReactAriaClassName } from '@/lib/react-aria'

import './button.styles.sass'

export type ButtonIconSide = 'left' | 'right'
export type ButtonVariant = 'filled' | 'outlined' | 'transparent'

export type BaseButtonProps = {
  /** Optional icon to display within the button. */
  Icon?: React.ReactNode

  /**
   * Determines the side of the button the icon should appear on. Defaults to 'left'.
   * @values 'left', 'right'
   * @default 'left'
   */
  iconSide?: ButtonIconSide

  /**
   * Defines the size of the button. Can be undefined or 'icon' for a button with only an icon.
   * @values 'icon'
   * @default undefined
   */
  size?: 'icon'

  /**
   * The visual style variant of the button.
   * @values 'filled', 'outlined', 'transparent'
   * @default 'outlined'
   */
  variant?: ButtonVariant
}

type ButtonProps = BaseButtonProps & PressableProps

const getButtonClassName = (
  values: ButtonRenderProps & { defaultClassName: string | undefined },
  className: PressableProps['className'],
  iconSide: ButtonIconSide,
  variant: ButtonVariant,
  size?: 'icon',
  Icon?: React.ReactNode
) => {
  const buttonBaseClassName = classNames(
    'button',
    Icon !== undefined && `icon-${iconSide}`,
    size !== undefined && 'icon-size',
    variant
  )

  return getReactAriaClassName(values, className, buttonBaseClassName)
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  Icon,
  iconSide = 'left',
  size,
  variant = 'filled',
  ...props
}) => {
  const [isButtonHovered, setIsButtonHovered] = React.useState(false)

  return (
    <Pressable
      {...props}
      className={(values) => getButtonClassName(values, className, iconSide, variant, size, Icon)}
      onHoverEnd={() => setIsButtonHovered(false)}
      onHoverStart={() => setIsButtonHovered(true)}
    >
      <>
        {Icon}

        {typeof children === 'string'
          ? <FlipReveal isActive={isButtonHovered}>{children}</FlipReveal>
          : children
        }
      </>
    </Pressable>
  )
}
