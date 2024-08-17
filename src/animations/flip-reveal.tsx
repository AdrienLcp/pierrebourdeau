import React from 'react'

import { classNames } from '@/helpers/styles'

import './flip-reveal.styles.sass'

const FLIP_REVEAL_ANIMATION_DURATION_IN_MS = 450

export type FlipRevealProps = React.PropsWithChildren & {
  color?: string
  fontSize?: string
  isActive?: boolean
}

export const FlipReveal: React.FC<FlipRevealProps> = ({
  children,
  color = 'var(--neutral-foreground-primary-rest, #171716)',
  fontSize = 'var(--font-size-m, 16px)',
  isActive
}) => {
  if (typeof children !== 'string') {
    return children
  }

  const string = children.trim()
  const delayPerCharacter = FLIP_REVEAL_ANIMATION_DURATION_IN_MS / string.length

  return (
    <div className={classNames('flip-reveal', isActive && 'active')}>
      {string.split('').map((char, index) => {
        const delay = `${delayPerCharacter * index}ms`

        const style: Record<string, string> = {
          '--flip-reveal-color': color,
          '--flip-reveal-delay': delay,
          '--flip-reveal-font-size': fontSize
        }

        return (
          <span
            className='flip-reveal__character'
            key={index}
            style={style}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        )
      })}
    </div>
  )
}
