'use client'

import gsap from 'gsap'
import React from 'react'

import { DEFAULT_ANIMATION_EASE } from '@/animations'
import { Availability } from '@/app/components/availability'
import { BurgerButton } from '@/components/burger-button'
import { Link } from '@/components/link'
import { Logo } from '@/components/logo'
import { Mailto } from '@/contact/mailto'
import { classNames } from '@/helpers/styles'
import { useI18n } from '@/i18n/client'
import { LocaleSwitcher } from '@/i18n/locale-switcher'
import { ROUTES } from '@/routes'
import { Navigation } from '@/routes/navigation'

import './header.styles.sass'

export const HEADER_REST_HEIGHT_IN_PX = 146
const HEADER_ANIMATION_DURATION_IN_MS = 300

export const Header: React.FC = () => {
  const [isAvailabilityHidden, setIsAvailabilityHidden] = React.useState(false)
  const [isHeaderExpanded, setIsHeaderExpanded] = React.useState(false)
  const [isContentHidden, setIsContentHidden] = React.useState(true)

  const { i18n } = useI18n()

  const headerContentRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!headerContentRef.current === null) {
      return
    }

    if (!isHeaderExpanded) {
      setTimeout(() => {
        setIsContentHidden(true)
      }, HEADER_ANIMATION_DURATION_IN_MS)
    } else {
      setIsContentHidden(false)
    }

    gsap.to(headerContentRef.current, {
      duration: HEADER_ANIMATION_DURATION_IN_MS / 1000,
      ease: DEFAULT_ANIMATION_EASE,
      height: isHeaderExpanded ? `calc(100vh - ${HEADER_REST_HEIGHT_IN_PX}px)` : 0
    })
  }, [isHeaderExpanded])

  React.useEffect(() => {
    const handleScroll = () => {
      setIsAvailabilityHidden(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={classNames('header', isHeaderExpanded && 'expanded')}>
      <div className='header__heading'>
        <Link
          aria-label={i18n('app.header.logo-link')}
          className='header__heading__link'
          href={ROUTES.home}
        >
          <Logo className='header__heading__link__logo' />
        </Link>

        <Availability
          isHidden={isAvailabilityHidden || isHeaderExpanded}
          status='available'
        />

        <BurgerButton
          className={classNames('header__heading__burger-button')}
          isActive={isHeaderExpanded}
          onPress={() => setIsHeaderExpanded(previousValue => !previousValue)}
        />
      </div>

      <div
        aria-hidden={!isHeaderExpanded}
        className={classNames('header__content', isContentHidden && 'hidden')}
        ref={headerContentRef}
      >
        <Navigation onLinkClick={() => setIsHeaderExpanded(false)} />

        <div className='header__content__footer'>
          <LocaleSwitcher />
          <Mailto className='header__content__footer__mailto' />
        </div>
      </div>
    </header>
  )
}
