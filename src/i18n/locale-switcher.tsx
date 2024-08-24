'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { Link } from '@/components/link'
import { classNames } from '@/helpers/styles'
import type { Locale } from '@/i18n'
import { getRedirectPathname, useI18n } from '@/i18n/client'

import './locale-switcher.styles.sass'

const locales: Locale[] = ['fr', 'en']

export const LocaleSwitcher: React.FC = () => {
  const { changeLocale, currentLocale } = useI18n()

  const pathname = usePathname()

  return (
    <div className='locale-switcher'>
      {locales.map(locale => (
        <Link
          className={classNames('locale-switcher__link', currentLocale === locale && 'active')}
          key={locale}
          href={getRedirectPathname(pathname, locale)}
          onPress={() => changeLocale(locale)}
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}
