'use client'

import { gsap } from 'gsap'
import React from 'react'
import type { ButtonProps } from 'react-aria-components'

import { DEFAULT_ANIMATION_DURATION, DEFAULT_ANIMATION_EASE } from '@/animations'
import { Pressable } from '@/components/pressable'
import { useI18n } from '@/i18n/client'
import { getReactAriaClassName } from '@/lib/react-aria'

import './burger-button.styles.sass'

type BurgerButtonProps = ButtonProps & {
  isActive?: boolean
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ className, isActive, ...props }) => {
  const [isBurgerButtonHovered, setIsBurgerButtonHovered] = React.useState(false)

  const { i18n } = useI18n()

  const firstLineRef = React.useRef<HTMLSpanElement>(null)
  const secondLineRef = React.useRef<HTMLSpanElement>(null)

  React.useEffect(() => {
    if (firstLineRef.current) {
      gsap.to(firstLineRef.current, {
        ease: DEFAULT_ANIMATION_EASE,
        duration: DEFAULT_ANIMATION_DURATION,
        rotate: isActive ? '45deg' : 0,
        y: isActive ? '0' : isBurgerButtonHovered ? '-8px' : '-5px'
      })
    }
  }, [isActive, isBurgerButtonHovered])

  React.useEffect(() => {
    if (secondLineRef.current) {
      gsap.to(secondLineRef.current, {
        ease: DEFAULT_ANIMATION_EASE,
        duration: DEFAULT_ANIMATION_DURATION,
        rotate: isActive ? '-45deg' : 0,
        y: isActive ? '0' : isBurgerButtonHovered ? '8px' : '5px'
      })
    }
  }, [isActive, isBurgerButtonHovered])

  const ariaLabel = isActive
    ? i18n('components.burger-button.close')
    : i18n('components.burger-button.open')

  return (
    <Pressable
      {...props}
      aria-hidden
      aria-label={ariaLabel}
      aria-pressed={isActive}
      className={values => getReactAriaClassName(values, className, 'burger-button')}
      onHoverChange={setIsBurgerButtonHovered}
    >
      <span ref={firstLineRef} className='burger-button__line' />
      <span ref={secondLineRef} className='burger-button__line' />
    </Pressable>
  )
}
