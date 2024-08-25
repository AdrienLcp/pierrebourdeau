import React from 'react'

import { classNames, type Style } from '@/helpers/styles'

import './marquee.styles.sass'

type BaseMarqueeProps <T extends 'div' | 'ul'> = Omit<React.ComponentProps<T>, 'children'> & {
  children: Array<React.ReactNode>
}

type MarqueeListProps = BaseMarqueeProps<'ul'>

const MarqueeList: React.FC<MarqueeListProps> = ({ children, ...props }) => (
  <ul {...props} className='marquee-items-wrapper'>
    {children.map((child, index) => {
      return (
        <li key={index}>
          {child}
        </li>
      )
    })}
  </ul>
)

type MarqueeProps = BaseMarqueeProps<'div'>

export const Marquee: React.FC<MarqueeProps> = ({ className, children, ...props }) => {
  const childrenCount = children.length

  if (childrenCount === 0) {
    return null
  }

  const marqueeGap = childrenCount > 4
    ? '25vw'
    : `${100 / childrenCount}vw`

  const marqueeAnimationDurationInSeconds = 8 * childrenCount

  const marqueeStyle: Style = {
    '--marquee-gap': marqueeGap,
    '--marquee-animation-duration': `${marqueeAnimationDurationInSeconds}s`
  }

  return (
    <div
      {...props}
      className={classNames('marquee', className)}
      role='marquee'
      style={marqueeStyle}
    >
      <MarqueeList>
        {children}
      </MarqueeList>

      <MarqueeList aria-hidden>
        {children}
      </MarqueeList>
    </div>
  )
}
