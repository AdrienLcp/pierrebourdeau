'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { I18nProvider as ReactAriaI18nProvider } from 'react-aria'

import { useProvidedContext } from '@/helpers/contexts'
import { getStoredItem } from '@/helpers/storage'
import { isValidString } from '@/helpers/strings'
import { DEFAULT_LOCALE, getI18n, getLocale, isLocale, isPathnameMissingLocale, type I18n, type Locale } from '@/i18n'
import type { RoutePath } from '@/routes'

type I18nContextValue = {
  changeLocale: (newLocale: Locale) => void
  currentLocale: Locale
  i18n: I18n
}

export const getRedirectPathname = (pathname: string | null, locale: Locale) => {
  if (!isValidString(pathname)) {
    return '/'
  }

  if (isPathnameMissingLocale(pathname)) {
    return locale === DEFAULT_LOCALE
      ? pathname
      : `/${locale}${pathname}`
  }

  if (locale === DEFAULT_LOCALE) {
    const segments = pathname.split('/')
    const isHome = segments.length === 2

    return isHome
      ? '/'
      : `/${segments.splice(2).join('/')}`
  }

  const segments = pathname.split('/')
  segments[1] = locale
  return segments.join('/')
}

export const getHrefWithLocale = (path: RoutePath, locale: Locale) => {
  return locale === DEFAULT_LOCALE
    ? `${path}`
    : `/${locale}${path}`
}

const I18nContext = React.createContext<I18nContextValue | null>(null)

export const I18nProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = React.useState<Locale>(DEFAULT_LOCALE)

  const pathname = usePathname()

  const changeLocale = (newLocale: Locale) => {
    if (isLocale(newLocale)) {
      setCurrentLocale(newLocale)
    }
  }

  React.useEffect(() => {
    const favoriteLocale = getStoredItem('locale')

    if (favoriteLocale !== undefined) {
      setCurrentLocale(favoriteLocale)
      return
    }

    const navigatorLanguage = navigator.language.slice(0, 2).toLowerCase()

    if (isLocale(navigatorLanguage)) {
      setCurrentLocale(navigatorLanguage)
    }
  }, [])

  React.useEffect(() => {
    if (pathname !== null) {
      const locale = pathname.split('/')[1]

      if (isLocale(locale)) {
        setCurrentLocale(locale)
      }
    }
  }, [pathname])

  const i18n = getI18n(currentLocale)

  return (
    <I18nContext.Provider value={{ changeLocale, currentLocale, i18n }}>
      <ReactAriaI18nProvider locale={getLocale(currentLocale)}>
        {children}
      </ReactAriaI18nProvider>
    </I18nContext.Provider>
  )
}

export const useI18n = () => useProvidedContext(I18nContext, 'i18n')
