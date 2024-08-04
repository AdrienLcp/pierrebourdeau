import gsap from 'gsap'
import React from 'react'

import { DEFAULT_ANIMATION_EASE } from '@/animations'
import { BurgerButton } from '@/components/burger-button'
import { Logo } from '@/components/logo'
import { Mailto } from '@/contact/mailto'
import { classNames } from '@/helpers/styles'
import { LocaleSwitcher } from '@/i18n/locale-switcher'
import { Navigation } from '@/routes/navigation'

import './header.styles.sass'

const HEADER_REST_HEIGHT_IN_PX = 146
const HEADER_ANIMATION_DURATION_IN_MS = 300

export const Header: React.FC = () => {
  const [isHeaderExpanded, setIsHeaderExpanded] = React.useState(false)

  const headerContentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (headerContentRef.current) {
      gsap.to(headerContentRef.current, {
        duration: HEADER_ANIMATION_DURATION_IN_MS / 1000,
        ease: DEFAULT_ANIMATION_EASE,
        height: isHeaderExpanded ? `calc(100vh - ${HEADER_REST_HEIGHT_IN_PX}px)` : 0
      })
    }
  }, [isHeaderExpanded])

  return (
    <header className={classNames('header', isHeaderExpanded && 'expanded')}>
      <div className='header__heading'>
        <Logo className='header__heading__logo' />

        <BurgerButton
          className={classNames('header__heading__burger-button')}
          isActive={isHeaderExpanded}
          onPress={() => setIsHeaderExpanded(previousValue => !previousValue)}
        />
      </div>

      <div ref={headerContentRef} className='header__content'>
        <Navigation />

        <div className='header__content__footer'>
          <LocaleSwitcher />
          <Mailto className='header__content__footer__mailto' />
        </div>
      </div>
    </header>
  )
}
