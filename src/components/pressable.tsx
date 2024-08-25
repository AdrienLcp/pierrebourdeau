'use client'

import React from 'react'
import { Button, type ButtonProps } from 'react-aria-components'

import { getReactAriaClassName } from '@/lib/react-aria'

import './pressable.styles.sass'

export type PressableProps = ButtonProps

export const Pressable: React.FC<PressableProps> = ({ children, className, ...props }) => (
  <Button {...props} className={(values) => getReactAriaClassName(values, className, 'pressable')}>
    {children}
  </Button>
)
