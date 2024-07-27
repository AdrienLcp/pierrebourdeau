import React from 'react'
import type { ButtonProps as ReactAriaButtonProps, ButtonRenderProps } from 'react-aria-components'

import { Pressable } from '@/components/pressable'
import { classNames, getReactAriaClassName } from '@/helpers/styles'

import './button.styles.sass'

type ButtonIconSide = 'left' | 'right'
type ButtonVariant = 'filled' | 'outlined' | 'transparent'

type ButtonProps = ReactAriaButtonProps & {
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

const getButtonClassName = (
  values: ButtonRenderProps & { defaultClassName: string | undefined },
  className: ReactAriaButtonProps['className'],
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
}) => (
  <Pressable
    {...props}
    className={(values) => getButtonClassName(values, className, iconSide, variant, size, Icon)}
  >
    <>
      {Icon}
      {children}
    </>
  </Pressable>
)
