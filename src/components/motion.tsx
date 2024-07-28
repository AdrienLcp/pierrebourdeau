'use client'

import { motion, type MotionProps as FramerMotionProps } from 'framer-motion'
import React from 'react'

type MotionProps = FramerMotionProps & {
  /** Additional class names to apply to the motion component. */
  className?: string

  /**
   * The tag name of the motion component.
   * @default 'span'
   * */
  tagName?: keyof typeof motion
}

export const DEFAULT_ANIMATION_TRANSITION: FramerMotionProps['transition'] = {
  duration: 0.3,
  type: 'spring'
}

/**
 * Motion component that applies a predefined animation to its children.
 */
export const Motion: React.FC<MotionProps> = ({ children, tagName = 'span',  ...props }) => {
  const MotionComponent = motion[tagName] ?? motion.span

  return (
    <MotionComponent {...props}>
      {children}
    </MotionComponent>
  )
}
