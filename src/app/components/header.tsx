import type { AnimationProps } from 'framer-motion'
import React from 'react'

import { BurgerButton } from '@/app/components/burger-button'
import { HeaderContent } from '@/app/components/header-content'
import { DEFAULT_ANIMATION_TRANSITION, Motion } from '@/components/motion'
import { sleep } from '@/helpers/promise'
import { LogoIcon } from '@/icons/logo'

import './header.styles.sass'

const HEADER_REST_HEIGHT_IN_PX = 146
const HEADER_ANIMATION_DURATION_IN_MS = 300

const headerStyle: Record<string, string> = { '--header-rest-height': `${HEADER_REST_HEIGHT_IN_PX}px` }

const preventBodyOverflow = async (isHeaderExpanded: boolean) => {
  if (isHeaderExpanded) {
    document.body.style.overflow = 'hidden'
    return
  }

  await sleep(HEADER_ANIMATION_DURATION_IN_MS)
  document.body.style.overflow = 'auto'
}

export const Header: React.FC = () => {
  const [isHeaderExpanded, setIsHeaderExpanded] = React.useState(false)

  const headerExpandAnimation: AnimationProps = {
    animate: {
      height: isHeaderExpanded ? '100%' : 0
    },
    transition: {
      duration: HEADER_ANIMATION_DURATION_IN_MS / 1000,
      type: DEFAULT_ANIMATION_TRANSITION.type
    }
  }

  const headerAnimation: AnimationProps = {
    animate: {
      height: isHeaderExpanded ? '100vh' : `${HEADER_REST_HEIGHT_IN_PX}px`
    },
    transition: {
      duration: HEADER_ANIMATION_DURATION_IN_MS / 1000,
      type: DEFAULT_ANIMATION_TRANSITION.type
    }
  }

  React.useEffect(() => {
    preventBodyOverflow(isHeaderExpanded)
  }, [isHeaderExpanded])

  return (
    <Motion
      {...headerAnimation}
      className='header'
      style={headerStyle}
      tagName='header'
    >
      <div className='header__heading'>
        <LogoIcon />

        <BurgerButton
          isActive={isHeaderExpanded}
          onPress={() => setIsHeaderExpanded(previousValue => !previousValue)}
        />
      </div>

      <Motion {...headerExpandAnimation} className='header__content'>
        <HeaderContent />
      </Motion>
    </Motion>
  )
}
