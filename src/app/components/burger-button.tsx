'use client'

import React from 'react'
import type { ButtonProps } from 'react-aria-components'

import { DEFAULT_ANIMATION_TRANSITION, Motion } from '@/components/motion'
import { Pressable } from '@/components/pressable'

import './burger-button.styles.sass'

type BurgerButtonProps = ButtonProps & {
  isActive?: boolean
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ isActive, ...props }) => {
  const burgerFirstLineAnimation = {
    animate: {
      rotate: isActive ? 45 : 0,
      top: isActive ? '50%' : '33%'
    },
    transition: DEFAULT_ANIMATION_TRANSITION
  }

  const burgerSecondLineAnimation = {
    animate: {
      rotate: isActive ? -45 : 0,
      top: isActive ? '50%' : '66%'
    },
    transition: DEFAULT_ANIMATION_TRANSITION
  }

  return (
    <Pressable
      {...props}
      aria-hidden
      className='burger-button'
    >
      <Motion {...burgerFirstLineAnimation} className='burger-button__line' />
      <Motion {...burgerSecondLineAnimation} className='burger-button__line' />
    </Pressable>
  )
}
