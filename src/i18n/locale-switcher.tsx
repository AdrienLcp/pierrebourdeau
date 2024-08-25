'use client'

import { usePathname } from 'next/navigation'
import React from 'react'

import { Link } from '@/components/link'
import { classNames } from '@/helpers/styles'
import type { Locale } from '@/i18n'
import { getRedirectPathname, useI18n } from '@/i18n/client'

import './locale-switcher.styles.sass'

type LocaleOption = {
  key: Locale
  label: string
}

const locales: LocaleOption[] = [
  { key: 'fr', label: 'Français' },
  { key: 'en', label: 'English' }
]

export const LocaleSwitcher: React.FC = () => {
  const { changeLocale, currentLocale, i18n } = useI18n()

  const pathname = usePathname()

  return (
    <section
      aria-label={i18n('locale.switcher-aria-label')}
      className='locale-switcher'
    >
      {locales.map(locale => (
        <Link
          aria-label={locale.label}
          className={classNames('locale-switcher__link', currentLocale === locale.key && 'active')}
          href={getRedirectPathname(pathname, locale.key)}
          hrefLang={locale.key}
          key={locale.key}
          onPress={() => changeLocale(locale.key)}
          rel='alternate'
        >
          {locale.key.toLocaleUpperCase(currentLocale)}
        </Link>
      ))}
    </section>
  )
}
